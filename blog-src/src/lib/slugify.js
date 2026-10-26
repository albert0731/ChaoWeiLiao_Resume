// ASCII-only slugs for tag pages; CJK tags are kept as query-safe percent
// encoding is avoided by hashing isn't needed here — tags in this project
// are short Latin/CJK words, so we lowercase ASCII and leave CJK as-is in a
// URL-safe wrapper (encodeURIComponent at link time, decodeURIComponent never
// needed since we always build the href ourselves).
function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[\s/]+/g, '-');
}

module.exports = { slugify };
