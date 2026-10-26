const config = require('../../config');
const { esc, abs } = require('./templates');

function buildRss(posts) {
  const items = posts
    .map((p) => {
      const title = p.titleEn ? `${p.title}｜${p.titleEn}` : p.title;
      const description = p.excerpt || p.excerptEn || '';
      return `  <item>
    <title>${esc(title)}</title>
    <link>${abs(p.urlPath)}</link>
    <guid isPermaLink="true">${abs(p.urlPath)}</guid>
    <pubDate>${p.date.toUTCString()}</pubDate>
    <description>${esc(description)}</description>
  </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${esc(config.siteTitle)}</title>
  <link>${abs('index.html')}</link>
  <description>${esc(config.siteDescription)}</description>
  <language>zh-tw</language>
${items}
</channel>
</rss>
`;
}

function buildSitemap(urlPaths) {
  const entries = urlPaths
    .map((u) => `  <url><loc>${abs(u)}</loc></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

module.exports = { buildRss, buildSitemap };
