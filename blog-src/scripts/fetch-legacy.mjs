#!/usr/bin/env node
// One-off import: pulls posts from the old Blogger feed, converts each to
// Markdown, downloads referenced images, and writes files under
// content/posts/ preserving the original /YYYY/MM/slug path so the built
// URL matches the old one.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';

const FEED_URL = 'https://chaowei0731.blogspot.com/feeds/posts/default?alt=json&max-results=50';
const POST_COUNT = 8;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'posts');
const IMAGES_DIR = path.join(__dirname, '..', 'assets', 'images', 'legacy');

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });

function slugFromUrl(url) {
  const m = url.match(/\/(\d{4})\/(\d{2})\/([^/]+)\.html/);
  if (!m) return null;
  const [, year, month, slug] = m;
  return { year, month, slug };
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
}

function stripHtml(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function excerptFrom(html, max = 140) {
  const text = stripHtml(html);
  return text.length > max ? text.slice(0, max).trim() + '…' : text;
}

async function downloadImage(url, destDir, filename) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`image fetch failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(destDir, { recursive: true });
  await fs.writeFile(path.join(destDir, filename), buf);
}

function imageFilename(url, index) {
  const clean = url.split('?')[0];
  const ext = path.extname(clean) || '.jpg';
  return `img-${String(index).padStart(2, '0')}${ext}`;
}

async function processPost(entry, index) {
  const altLink = (entry.link || []).find((l) => l.rel === 'alternate');
  if (!altLink) {
    console.warn(`skip entry ${index}: no alternate link`);
    return null;
  }
  const originalUrl = altLink.href;
  const parsed = slugFromUrl(originalUrl);
  if (!parsed) {
    console.warn(`skip ${originalUrl}: could not parse /YYYY/MM/slug.html`);
    return null;
  }
  const { year, month, slug } = parsed;

  const title = entry.title?.$t?.trim() || slug;
  const html = entry.content?.$t || entry.summary?.$t || '';
  const published = (entry.published?.$t || '').slice(0, 10);
  const tags = (entry.category || []).map((c) => c.term).filter(Boolean);
  const excerpt = excerptFrom(html);

  // rewrite <img src> to downloaded local copies, collect first image as cover
  const imgDestDir = path.join(IMAGES_DIR, slug);
  const imgUrls = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  let rewritten = html;
  let coverImage = null;
  let imgIndex = 0;
  for (const url of imgUrls) {
    imgIndex += 1;
    const filename = imageFilename(url, imgIndex);
    try {
      await downloadImage(url, imgDestDir, filename);
    } catch (err) {
      console.warn(`  image failed (${slug} #${imgIndex}): ${err.message}`);
      continue;
    }
    const localRef = `__BASE__assets/images/legacy/${slug}/${filename}`;
    rewritten = rewritten.split(url).join(localRef);
    if (!coverImage) coverImage = localRef;
  }

  const markdownBody = turndown.turndown(rewritten).trim();

  const frontMatterLines = [
    `title: ${JSON.stringify(title)}`,
    `date: ${JSON.stringify(published)}`,
    `lang: en`,
    `tags: ${JSON.stringify(tags)}`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `legacySource: ${JSON.stringify(originalUrl)}`,
    coverImage ? `coverImage: ${JSON.stringify(coverImage)}` : null,
  ].filter(Boolean);
  const frontMatter = `---\n${frontMatterLines.join('\n')}\n---\n\n`;

  await fs.mkdir(CONTENT_DIR, { recursive: true });
  const outFile = path.join(CONTENT_DIR, `${slug}.md`);
  await fs.writeFile(outFile, frontMatter + markdownBody + '\n');

  console.log(`wrote ${path.relative(process.cwd(), outFile)}  (${year}/${month}, ${imgUrls.length} images)`);
  return slug;
}

async function main() {
  console.log(`Fetching ${FEED_URL}`);
  const res = await fetch(FEED_URL);
  if (!res.ok) throw new Error(`feed fetch failed: ${res.status}`);
  const feed = await res.json();
  const entries = feed.feed?.entry || [];
  console.log(`Feed has ${entries.length} entries; converting first ${POST_COUNT}`);

  const picked = entries.slice(0, POST_COUNT);
  for (let i = 0; i < picked.length; i += 1) {
    await processPost(picked[i], i + 1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
