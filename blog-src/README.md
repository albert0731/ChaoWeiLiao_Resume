# blog-src

Static site generator for the blog at `/blog/` on the resume site. Plain
Node, no framework: `gray-matter` for front matter, `marked` for Markdown,
`turndown` for the one-off legacy import. Output is committed HTML — nothing
runs server-side.

## Weekly flow

1. **Write.** Add a Markdown file under `content/posts/`, e.g.
   `content/posts/2026-w44-why-whole-system-thinking.md`:

   ```markdown
   ---
   title: "為什麼要懂整台無人機：從需求到規格"
   titleEn: "Why Whole-System Thinking: From Mission to Spec"
   date: "2026-10-31"
   lang: bilingual
   tags: ["無人機設計", "drone system design"]
   excerpt: "一段 2-3 句的中文摘要。"
   excerptEn: "A 2-3 sentence English summary."
   ---
   中文內容...

   <!--lang:en-->

   English content...
   ```

   - `lang` is `zh`, `en`, or `bilingual`. For `bilingual`, split the body
     with a line containing exactly `<!--lang:en-->`; everything above is
     rendered as the Chinese section, everything below as English. Single-
     language posts render without the section label.
   - Reference images as `__BASE__assets/images/<anything>` so the path
     resolves correctly regardless of how deep the post's URL is nested
     (the build rewrites `__BASE__` to the right relative prefix). Put the
     image files under `assets/images/...`.
   - The permalink is derived from `date` (`YYYY/MM/`) and the filename (or
     an explicit `slug:` field) — not from where the file lives on disk.
   - Add `series: "drone"` to front matter for posts that belong to the
     "無人機連載" series — they then also appear on `series/drone/index.html`.

2. **Build.**
   ```bash
   cd blog-src && npm install && npm run build
   ```
   This regenerates `/blog` from scratch (posts, tag pages, the drone series
   page, `feed.xml`, `sitemap.xml`, `.nojekyll`) from `content/posts/` and
   `data/drone-series-config.js`.

3. **Preview locally** before opening a PR — serve the repo's *parent*
   directory so the `/ChaoWeiLiao_Resume/blog/` prefix in `config.js`
   resolves, e.g. symlink/copy this repo into a scratch folder named
   `ChaoWeiLiao_Resume` and run `python3 -m http.server` from one level up.

4. **PR.** Commit both the new file(s) under `content/posts/` (and any new
   images) and the regenerated `/blog` output in the same PR — the build
   output is what GitHub Pages serves, so it must never drift from source.

## Config

`config.js` is the single place that controls the base path and absolute
site URL (used for canonical links, OG tags, RSS and the sitemap). It is
currently set for the GitHub Pages subpath
(`/ChaoWeiLiao_Resume/blog/`). Moving to a custom domain (e.g.
`https://blog.cwliao.com/`) is a two-line change: set `basePath: '/'` and
`siteUrl` to the new origin, then rebuild.

## The drone series page

`series/drone/index.html` lists published posts tagged `series: "drone"`,
plus a one-line teaser for the next upcoming week ("下週：...").
`data/drone-series-config.js` only holds the series title/intro text — the
full 52-week table of contents is a private planning doc and is never
committed here. At build time, `src/lib/droneToc.js` reads it from
`/home/box/blog-drone/HANDOFF.md` (override with `DRONE_TOC_PATH`); if that
file is missing, the build still succeeds and the page just omits the
teaser. The next-week teaser is computed from the build date (first TOC week
whose date is on or after today in America/Los_Angeles) — no other week
titles are ever written into the built output.

## Legacy import

`scripts/fetch-legacy.mjs` was a one-off: it pulled the old Blogger feed
(`chaowei0731.blogspot.com`), converted posts to Markdown under
`content/posts/`, and downloaded referenced images into
`assets/images/legacy/<slug>/`. It's safe to re-run (`npm run fetch-legacy`)
but will overwrite those files — only needed again if more legacy posts
need importing.
