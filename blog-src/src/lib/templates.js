const config = require('../../config');

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function abs(urlPath) {
  return config.siteUrl.replace(/\/$/, '') + '/' + String(urlPath).replace(/^\//, '');
}

function base(depth) {
  // relative prefix from a page at the given folder depth back to the blog root
  return depth === 0 ? './' : '../'.repeat(depth);
}

function fontLinks() {
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&family=Noto+Serif+TC:wght@400;500&family=Inter:wght@400;500&family=Noto+Sans+TC:wght@400;500&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet">`;
}

function head({ title, description, canonicalPath, depth, ogType = 'website', ogImage = null, lang = 'zh-Hant' }) {
  const canonical = abs(canonicalPath);
  const assetBase = base(depth);
  const image = ogImage ? abs(ogImage) : null;
  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" type="application/rss+xml" title="${esc(config.siteTitle)}" href="${abs('feed.xml')}">
  <meta property="og:site_name" content="${esc(config.siteTitle)}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  ${image ? `<meta property="og:image" content="${image}">` : ''}
  <meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  ${fontLinks()}
  <link rel="stylesheet" href="${assetBase}assets/style.css">`;
}

function header(depth) {
  const b = base(depth);
  return `<header class="site-header">
    <div class="container row">
      <a class="site-mark" href="${b}index.html">${esc(config.siteTitle)}<small>${esc(config.siteTitleEn)}</small></a>
      <nav class="site-nav">
        <a href="${b}index.html">文章 Posts</a>
        <a href="${b}series/drone/index.html">無人機連載</a>
        <a href="${b}tags/index.html">標籤 Tags</a>
        <a href="${esc(config.resumeUrl)}">回到履歷 Resume</a>
      </nav>
    </div>
  </header>`;
}

function footer(depth) {
  const b = base(depth);
  return `<footer class="site-footer">
    <div class="container row">
      <span>${esc(config.author)} — ${esc(config.siteDescription)}</span>
      <span>
        <a href="${b}feed.xml">RSS</a> ·
        <a href="${esc(config.resumeUrl)}">${esc(config.author)} 履歷 / Resume</a>
      </span>
    </div>
  </footer>`;
}

function page({ depth, title, description, canonicalPath, bodyHtml, ogType, ogImage, lang }) {
  return `<!doctype html>
<html lang="${lang || 'zh-Hant'}">
<head>
  ${head({ title, description, canonicalPath, depth, ogType, ogImage, lang })}
</head>
<body>
  ${header(depth)}
  <main>
    <div class="container">
      ${bodyHtml}
    </div>
  </main>
  ${footer(depth)}
</body>
</html>
`;
}

module.exports = { esc, abs, base, page, header, footer, head };
