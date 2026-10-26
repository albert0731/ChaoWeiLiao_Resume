// Reads the drone series table of contents from the private planning doc
// (HANDOFF.md), which lives outside this repo and is never committed here.
// Table rows look like:
//   | 1 | 2026-W44 | 2026-10-31 | 中文題目 | English Title | ... |
// If multiple TOC tables exist in the doc (e.g. superseded drafts), rows are
// deduped by week number, later occurrences in the file winning.
const fs = require('fs');

const DEFAULT_TOC_PATH = '/home/box/blog-drone/HANDOFF.md';
const ROW_PATTERN = /^\s*\|(.+)\|\s*$/;

function cleanCell(raw) {
  let s = raw.trim();
  const bold = s.match(/^\*\*(.*)\*\*$/);
  if (bold) s = bold[1].trim();
  return s.replace(/【[^】]*】/g, '').trim();
}

function loadDroneToc(tocPath) {
  const filePath = tocPath || process.env.DRONE_TOC_PATH || DEFAULT_TOC_PATH;
  let text;
  try {
    text = fs.readFileSync(filePath, 'utf8');
  } catch {
    return [];
  }

  const byWeek = new Map();
  for (const line of text.split('\n')) {
    const match = line.match(ROW_PATTERN);
    if (!match) continue;
    const cells = match[1].split('|').map((c) => c.trim());
    if (cells.length < 5) continue;

    const n = Number(cells[0]);
    if (!Number.isInteger(n) || n < 1 || n > 52) continue;
    if (!/^\d{4}-W\d{2}$/.test(cells[1])) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(cells[2])) continue;

    byWeek.set(n, {
      n,
      week: cells[1],
      date: cells[2],
      zh: cleanCell(cells[3]),
      en: cleanCell(cells[4]),
    });
  }

  return [...byWeek.values()].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

module.exports = { loadDroneToc };
