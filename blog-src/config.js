// Single place to switch hosting target: GitHub Pages subpath today,
// a custom domain later (e.g. https://blog.cwliao.com/).
module.exports = {
  siteTitle: '無人機與製造測試筆記',
  siteTitleEn: 'Drone & Manufacturing Test Notes',
  siteDescription: '無人機系統、量產測試與驗證的工程筆記，繁中與英文對照。',
  author: 'ChaoWei Liao',

  // Base path the built site is served under. GitHub Pages (project site,
  // Jekyll at repo root, blog in /blog/) needs the repo name prefix.
  // Switch to '/' when moving to a custom domain.
  basePath: '/ChaoWeiLiao_Resume/blog/',

  // Absolute origin + basePath, used for canonical URLs, OG tags, RSS, sitemap.
  // Switch to 'https://blog.cwliao.com/' (and basePath: '/') for the custom domain.
  siteUrl: 'https://albert0731.github.io/ChaoWeiLiao_Resume/blog/',

  resumeUrl: 'https://albert0731.github.io/ChaoWeiLiao_Resume/',

  locale: 'zh-Hant-TW',
};
