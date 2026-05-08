#!/usr/bin/env node
/**
 * validate-og-images.js
 *
 * Walks all blog posts (content/posts/) and page files (src/app/) to extract
 * og:image paths, then verifies each one exists under public/.
 *
 * Usage:  node scripts/validate-og-images.js
 * Exit:   0 if all images exist, 1 if any are missing.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const POSTS_DIR = path.join(ROOT, "content/posts");
const APP_DIR = path.join(ROOT, "src/app");

const broken = [];

// ── 1. Blog posts (frontmatter `image:` field) ─────────────────────────────

function checkPosts() {
  if (!fs.existsSync(POSTS_DIR)) return;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const match = content.match(/^image:\s*["']?([^\s"']+)["']?/m);
    if (!match) continue;
    const imgPath = match[1];
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) continue;
    const abs = path.join(PUBLIC, imgPath);
    if (!fs.existsSync(abs)) {
      broken.push({ source: `content/posts/${file}`, image: imgPath });
    }
  }
}

// ── 2. Page files (openGraph images in metadata) ────────────────────────────

function walkDir(dir) {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      entries.push(...walkDir(full));
    } else if (entry.name === "page.tsx" || entry.name === "layout.tsx") {
      entries.push(full);
    }
  }
  return entries;
}

function checkPages() {
  if (!fs.existsSync(APP_DIR)) return;
  const pageFiles = walkDir(APP_DIR);
  // Match image paths in openGraph images or twitter images config.
  // Patterns: url: "/images/...", images: ["/images/..."]
  const urlPattern = /["'](\/(images|social-cards)[^\s"']+)["']/g;
  for (const file of pageFiles) {
    const content = fs.readFileSync(file, "utf8");
    let m;
    while ((m = urlPattern.exec(content)) !== null) {
      const imgPath = m[1];
      // Skip if it's not an image path (must start with /images/)
      if (!imgPath.startsWith("/images/")) continue;
      const abs = path.join(PUBLIC, imgPath);
      if (!fs.existsSync(abs)) {
        const rel = path.relative(ROOT, file);
        broken.push({ source: rel, image: imgPath });
      }
    }
  }
}

// ── 3. Content blog markdown (src/content/blog/) ───────────────────────────

function checkSrcContentBlog() {
  const blogDir = path.join(ROOT, "src/content/blog");
  if (!fs.existsSync(blogDir)) return;
  const walkMd = (dir) => {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) results.push(...walkMd(full));
      else if (entry.name.endsWith(".md")) results.push(full);
    }
    return results;
  };
  for (const file of walkMd(blogDir)) {
    const content = fs.readFileSync(file, "utf8");
    const match = content.match(/^image:\s*["']?([^\s"']+)["']?/m);
    if (!match) continue;
    const imgPath = match[1];
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) continue;
    const abs = path.join(PUBLIC, imgPath);
    if (!fs.existsSync(abs)) {
      broken.push({ source: path.relative(ROOT, file), image: imgPath });
    }
  }
}

// ── Run ─────────────────────────────────────────────────────────────────────

checkPosts();
checkPages();
checkSrcContentBlog();

// Deduplicate (same image may appear in multiple places)
const unique = [];
const seen = new Set();
for (const entry of broken) {
  const key = `${entry.source}::${entry.image}`;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(entry);
  }
}

if (unique.length === 0) {
  console.log(`✓ All og:image references verified (${broken.length === 0 ? "no" : "0"} broken refs)`);
  process.exit(0);
} else {
  console.error(`✗ ${unique.length} broken og:image reference(s) found:\n`);
  for (const { source, image } of unique) {
    console.error(`  ${source}`);
    console.error(`    → ${image}  (file not found at public${image})\n`);
  }
  process.exit(1);
}
