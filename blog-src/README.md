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

2. **Build.**
   ```bash
   cd blog-src && npm install && npm run build
   ```
   This regenerates `/blog` from scratch (posts, tag pages, the drone-series
   TOC, `feed.xml`, `sitemap.xml`, `.nojekyll`) from `content/posts/` and
   `data/drone-series.js`.

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

## The drone series TOC

`data/drone-series.js` holds the 52-week table of contents for the "無人機
連載" series (week number, date, bilingual title only — grouped by the
table's original 篇 A–G sections). It renders at `series/drone/index.html`.
Articles aren't written yet; don't add placeholder content there — add real
posts under `content/posts/` as they're published, tagged so they show up
in the normal post list and feed too.

## Legacy import

`scripts/fetch-legacy.mjs` was a one-off: it pulled the old Blogger feed
(`chaowei0731.blogspot.com`), converted posts to Markdown under
`content/posts/`, and downloaded referenced images into
`assets/images/legacy/<slug>/`. It's safe to re-run (`npm run fetch-legacy`)
but will overwrite those files — only needed again if more legacy posts
need importing.
