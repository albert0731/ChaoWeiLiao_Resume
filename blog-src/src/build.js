const fs = require('fs');
const path = require('path');

const config = require('../config');
const droneSeriesConfig = require('../data/drone-series-config');
const { loadDroneToc } = require('./lib/droneToc');
const { loadPosts } = require('./lib/posts');
const { slugify } = require('./lib/slugify');
const { page, base, esc, abs } = require('./lib/templates');
const { buildRss, buildSitemap } = require('./lib/feed');

const ROOT = path.join(__dirname, '..', '..');
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'posts');
const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const OUT_DIR = path.join(ROOT, 'blog');

function rimraf(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function write(relPath, contents) {
  const full = path.join(OUT_DIR, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, contents);
}

function copyDir(src, destRel) {
  if (!fs.existsSync(src)) return;
  const dest = path.join(OUT_DIR, destRel);
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, path.join(destRel, entry.name));
    else fs.copyFileSync(s, d);
  }
}

function rewriteBase(html, depth) {
  return html.split('__BASE__').join(base(depth));
}

function renderLangSection(label, html, showLabel) {
  const labelHtml = showLabel ? `<div class="lang-label">${esc(label)}</div>` : '';
  return `<div class="lang-section">
      ${labelHtml}
      <div class="prose">${html}</div>
    </div>`;
}

function postBodyHtml(post, depth) {
  const titleEnLine = post.titleEn
    ? `<div class="title-en">${esc(post.titleEn)}</div>`
    : '';
  const tagsLine = post.tags.length
    ? `<div class="tags">${post.tags
        .map((t) => `<span class="tag-chip"><a href="${base(depth)}tags/${encodeURIComponent(slugify(t))}.html">${esc(t)}</a></span>`)
        .join('')}</div>`
    : '';

  const isBilingual = Boolean(post.zhHtml && post.enHtml);
  const sections = [];
  if (post.zhHtml) sections.push(renderLangSection('中文', rewriteBase(post.zhHtml, depth), isBilingual));
  if (post.enHtml) sections.push(renderLangSection('English', rewriteBase(post.enHtml, depth), isBilingual));

  const legacyNote = post.legacySource
    ? `<p class="legacy-note">原始出處 Originally published at <a href="${esc(post.legacySource)}">${esc(post.legacySource)}</a></p>`
    : '';

  return `<article>
    <div class="post-head">
      <h1>${esc(post.title)}</h1>
      ${titleEnLine}
      <div class="post-meta">
        <time datetime="${post.dateStr}">${post.dateStr}</time>
        ${tagsLine}
      </div>
    </div>
    ${sections.join('\n')}
    ${legacyNote}
  </article>`;
}

function buildPostPages(posts) {
  for (const post of posts) {
    const depth = 2; // YYYY/MM/slug.html
    const description = post.excerpt || post.excerptEn || post.title;
    const ogImage = post.coverImage ? post.coverImage.replace('__BASE__', '') : null;
    const html = page({
      depth,
      title: `${post.title}${post.titleEn ? ' | ' + post.titleEn : ''} — ${config.siteTitle}`,
      description,
      canonicalPath: post.urlPath,
      bodyHtml: postBodyHtml(post, depth),
      ogType: 'article',
      ogImage,
      lang: post.lang === 'en' ? 'en' : 'zh-Hant',
    });
    write(post.urlPath, html);
  }
}

function buildHome(posts) {
  const rows = posts
    .map((p) => {
      const titleEn = p.titleEn ? `<div class="title-en">${esc(p.titleEn)}</div>` : '';
      const excerpt = p.excerpt ? `<div class="excerpt">${esc(p.excerpt)}</div>` : '';
      const tags = p.tags.length
        ? `<div class="tags">${p.tags
            .map((t) => `<span class="tag-chip"><a href="tags/${encodeURIComponent(slugify(t))}.html">${esc(t)}</a></span>`)
            .join('')}</div>`
        : '';
      return `<div class="post-row">
        <time datetime="${p.dateStr}">${p.dateStr}</time>
        <div>
          <h2><a href="${p.urlPath}">${esc(p.title)}</a></h2>
          ${titleEn}
          ${excerpt}
          ${tags}
        </div>
      </div>`;
    })
    .join('\n');

  const body = `<p class="lede">${esc(config.siteDescription)}</p>
  <div class="post-list">${rows}</div>`;

  const html = page({
    depth: 0,
    title: `${config.siteTitle} — ${config.siteTitleEn}`,
    description: config.siteDescription,
    canonicalPath: 'index.html',
    bodyHtml: body,
  });
  write('index.html', html);
}

function buildTagPages(posts) {
  const byTag = new Map();
  for (const p of posts) {
    for (const t of p.tags) {
      if (!byTag.has(t)) byTag.set(t, []);
      byTag.get(t).push(p);
    }
  }

  for (const [tag, tagPosts] of byTag) {
    const slug = slugify(tag);
    const rows = tagPosts
      .map(
        (p) => `<div class="post-row">
        <time datetime="${p.dateStr}">${p.dateStr}</time>
        <div>
          <h2><a href="../${p.urlPath}">${esc(p.title)}</a></h2>
          ${p.titleEn ? `<div class="title-en">${esc(p.titleEn)}</div>` : ''}
        </div>
      </div>`
      )
      .join('\n');
    const body = `<p class="lede">標籤 Tag：${esc(tag)}</p>
    <div class="post-list">${rows}</div>`;
    const html = page({
      depth: 1,
      title: `${esc(tag)} — ${config.siteTitle}`,
      description: `文章標籤：${tag}`,
      canonicalPath: `tags/${slug}.html`,
      bodyHtml: body,
    });
    write(`tags/${slug}.html`, html);
  }

  const indexRows = [...byTag.keys()]
    .sort()
    .map((t) => `<span class="tag-chip"><a href="${encodeURIComponent(slugify(t))}.html">${esc(t)} (${byTag.get(t).length})</a></span>`)
    .join(' ');
  const indexHtml = page({
    depth: 1,
    title: `標籤 Tags — ${config.siteTitle}`,
    description: '文章標籤索引',
    canonicalPath: 'tags/index.html',
    bodyHtml: `<div class="tag-index">${indexRows || '<p class="lede">尚無標籤。</p>'}</div>`,
  });
  write('tags/index.html', indexHtml);

  return [...byTag.keys()].map((t) => `tags/${slugify(t)}.html`).concat('tags/index.html');
}

function todayInLA() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());
}

function formatMonthDay(dateStr) {
  const [, m, d] = dateStr.match(/^\d{4}-(\d{2})-(\d{2})$/);
  return `${Number(m)}/${Number(d)}`;
}

function seriesPostRowHtml(post, depth) {
  const b = base(depth);
  const titleEn = post.titleEn ? `<div class="title-en">${esc(post.titleEn)}</div>` : '';
  const excerpt = post.excerpt ? `<div class="excerpt">${esc(post.excerpt)}</div>` : '';
  return `<div class="post-row">
    <time datetime="${post.dateStr}">${post.dateStr}</time>
    <div>
      <h2><a href="${b}${post.urlPath}">${esc(post.title)}</a></h2>
      ${titleEn}
      ${excerpt}
    </div>
  </div>`;
}

function buildSeriesPage(posts) {
  const depth = 2;
  const seriesPosts = posts.filter((p) => p.series === 'drone');
  const rows = seriesPosts.map((p) => seriesPostRowHtml(p, depth)).join('\n');

  const toc = loadDroneToc();
  const next = toc.find((w) => w.date >= todayInLA());
  const teaser = next
    ? `<p class="series-teaser">下週：${esc(next.zh)}（${formatMonthDay(next.date)}）</p>`
    : '';

  const body = `<p class="lede">${esc(droneSeriesConfig.seriesIntro)}</p>
  <div class="post-list">${rows || '<p class="lede">尚無已發布文章。</p>'}</div>
  ${teaser}`;

  const html = page({
    depth,
    title: `${droneSeriesConfig.seriesTitle} — ${config.siteTitle}`,
    description: droneSeriesConfig.seriesIntro,
    canonicalPath: 'series/drone/index.html',
    bodyHtml: body,
  });
  write('series/drone/index.html', html);
}

function build() {
  rimraf(OUT_DIR);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  write('.nojekyll', '');

  const posts = loadPosts(CONTENT_DIR);

  buildHome(posts);
  buildPostPages(posts);
  const tagPaths = buildTagPages(posts);
  buildSeriesPage(posts);

  copyDir(ASSETS_DIR, 'assets');

  const rss = buildRss(posts);
  write('feed.xml', rss);

  const urlPaths = ['index.html', 'series/drone/index.html', ...tagPaths, ...posts.map((p) => p.urlPath)];
  write('sitemap.xml', buildSitemap(urlPaths));

  console.log(`Built ${posts.length} posts, ${tagPaths.length - 1} tags -> ${path.relative(ROOT, OUT_DIR)}`);
}

build();
