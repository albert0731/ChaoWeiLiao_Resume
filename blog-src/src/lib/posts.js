const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const { slugify } = require('./slugify');

const EN_SPLIT = /\n<!--\s*lang:en\s*-->\n/;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function loadPosts(contentDir) {
  const files = walk(contentDir);
  const posts = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(raw);
    if (data.draft) continue;

    const date = new Date(data.date);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`${file}: front matter "date" is missing or invalid`);
    }

    const slug = data.slug ? slugify(data.slug) : slugify(path.basename(file, '.md'));
    const lang = data.lang || 'zh';

    let zhHtml = null;
    let enHtml = null;
    if (lang === 'bilingual' && EN_SPLIT.test(content)) {
      const [zhPart, enPart] = content.split(EN_SPLIT);
      zhHtml = marked.parse(zhPart.trim());
      enHtml = marked.parse(enPart.trim());
    } else if (lang === 'en') {
      enHtml = marked.parse(content.trim());
    } else {
      zhHtml = marked.parse(content.trim());
    }

    const year = date.getUTCFullYear();
    const month = pad2(date.getUTCMonth() + 1);

    posts.push({
      slug,
      title: data.title || '',
      titleEn: data.titleEn || '',
      date,
      dateStr: `${year}-${month}-${pad2(date.getUTCDate())}`,
      year,
      month,
      tags: Array.isArray(data.tags) ? data.tags : [],
      lang,
      excerpt: data.excerpt || '',
      excerptEn: data.excerptEn || '',
      legacySource: data.legacySource || null,
      coverImage: data.coverImage || null,
      zhHtml,
      enHtml,
      urlPath: `${year}/${month}/${slug}.html`,
      sourceFile: file,
    });
  }

  posts.sort((a, b) => b.date - a.date);
  return posts;
}

module.exports = { loadPosts };
