#!/usr/bin/env node
/**
 * validate-og-images.js
 *
 * Walks all blog posts and page files to extract og:image paths, then verifies
 * each one exists under public/. Also checks that the root layout includes the
 * Pinterest domain verification meta tag.
 *
 * Usage:  node scripts/validate-og-images.js
 * Exit:   0 if all checks pass, 1 if any fail.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const POSTS_DIR = path.join(ROOT, "content/posts");
const APP_DIR = path.join(ROOT, "src/app");

const broken = [];
const errors = [];

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
  const urlPattern = /["'](\/(images|social-cards)[^\s"']+)["']/g;
  for (const file of pageFiles) {
    const content = fs.readFileSync(file, "utf8");
    let m;
    while ((m = urlPattern.exec(content)) !== null) {
      const imgPath = m[1];
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

// ── 4. Check that key pages have og:image configured ────────────────────────

function checkPagesHaveOgImage() {
  const requiredPages = [
    "src/app/layout.tsx",
    "src/app/[locale]/layout.tsx",
    "src/app/[locale]/page.tsx",
    "src/app/[locale]/contact/page.tsx",
    "src/app/[locale]/services/page.tsx",
    "src/app/[locale]/conditions/page.tsx",
    "src/app/[locale]/sot/page.tsx",
    "src/app/[locale]/new-patient/page.tsx",
    "src/app/[locale]/testimonials/page.tsx",
    "src/app/[locale]/meet-dr-foss/page.tsx",
    "src/app/[locale]/about/page.tsx",
  ];
  for (const rel of requiredPages) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const content = fs.readFileSync(abs, "utf8");
    // Check for images: [ pattern within openGraph config
    if (!content.includes("images:") || !content.match(/images:\s*\[/)) {
      errors.push(`${rel} — missing openGraph.images configuration`);
    }
  }
}

// ── 5. Check Pinterest domain verification meta tag ─────────────────────────

function checkPinterestVerify() {
  const layoutPath = path.join(ROOT, "src/app/layout.tsx");
  if (!fs.existsSync(layoutPath)) {
    errors.push("src/app/layout.tsx — file not found");
    return;
  }
  const content = fs.readFileSync(layoutPath, "utf8");
  if (!content.includes("p:domain_verify")) {
    errors.push(
      "src/app/layout.tsx — missing Pinterest domain verification (p:domain_verify)"
    );
  }
}

// ── Run ─────────────────────────────────────────────────────────────────────

checkPosts();
checkPages();
checkSrcContentBlog();
checkPagesHaveOgImage();
checkPinterestVerify();

// Deduplicate broken image refs
const unique = [];
const seen = new Set();
for (const entry of broken) {
  const key = `${entry.source}::${entry.image}`;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(entry);
  }
}

const totalIssues = unique.length + errors.length;

if (totalIssues === 0) {
  console.log("✓ All og:image references verified (0 broken refs)");
  console.log("✓ All main pages have og:image configured");
  console.log("✓ Pinterest domain verification meta tag present");
  process.exit(0);
} else {
  if (unique.length > 0) {
    console.error(`✗ ${unique.length} broken og:image reference(s):\n`);
    for (const { source, image } of unique) {
      console.error(`  ${source}`);
      console.error(`    → ${image}  (not found at public${image})\n`);
    }
  }
  if (errors.length > 0) {
    console.error(`✗ ${errors.length} configuration issue(s):\n`);
    for (const err of errors) {
      console.error(`  ${err}`);
    }
  }
  process.exit(1);
}
