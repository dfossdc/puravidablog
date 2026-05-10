#!/usr/bin/env node
/**
 * Pinterest pin spec generator.
 *
 * Reads all blog post markdown files in content/posts/, extracts frontmatter,
 * and emits a CSV ready for Pinterest's Pin scheduler import OR for any
 * Pinterest API client. Generates EN + ES pins with locale-aware boards.
 *
 * Usage:
 *   node scripts/generate-pinterest-pins.mjs                  # all posts → out
 *   node scripts/generate-pinterest-pins.mjs --limit 100      # newest 100
 *   node scripts/generate-pinterest-pins.mjs --lang en        # English only
 *   node scripts/generate-pinterest-pins.mjs --lang es        # Spanish only
 *
 * Output: pinterest-pins-YYYY-MM-DD.csv at the repo root.
 *
 * CSV columns (matches Pinterest's bulk pin upload spec):
 *   Title           — pin title (max 100 chars)
 *   Pin description — body text shown on the pin (max 500 chars)
 *   Link            — destination URL (the blog post)
 *   Image URL       — public URL of the image (Pinterest fetches this)
 *   Pinterest board — board name (locale-aware)
 *   Publish date    — staggered to avoid spam-trigger
 *   Keywords        — pipe-separated keyword list (some clients use this)
 *
 * NEXT STEPS once CSV is generated — pick ONE:
 *   A) Manual: upload to Pinterest's bulk-create-pins UI (Business accts only)
 *   B) Tailwind/Buffer/Hootsuite: ingest CSV directly
 *   C) Pinterest API: feed the CSV to scripts/post-pinterest-pins.mjs (TODO)
 */

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_DIR = join(ROOT, "content/posts");
const PUBLIC_IMAGES = join(ROOT, "public/images");
const BASE_URL = "https://puravidasanantonio.com";

// CLI args
const args = process.argv.slice(2);
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : Infinity;
const langIdx = args.indexOf("--lang");
const langFilter = langIdx >= 0 ? args[langIdx + 1] : null;

// Locale-aware board names. Update these to match your actual Pinterest boards.
const BOARDS = {
  en: "Chiropractic Health San Antonio",
  es: "Salud Quiropráctica San Antonio",
};

// Light frontmatter parser. Avoids the gray-matter dep — frontmatter here is
// simple key: value with the occasional list. Handles multiline lists.
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const block = m[1];
  const fm = {};
  const lines = block.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!kv) { i++; continue; }
    const [, key, valRaw] = kv;
    if (valRaw.trim() === "") {
      // List value on following lines: starts with "- "
      const list = [];
      i++;
      while (i < lines.length && /^\s+-\s/.test(lines[i])) {
        list.push(lines[i].replace(/^\s+-\s+/, "").replace(/^["']|["']$/g, "").trim());
        i++;
      }
      fm[key] = list;
    } else {
      fm[key] = valRaw.replace(/^["']|["']$/g, "").trim();
      i++;
    }
  }
  return fm;
}

// Pinterest title rules: ≤100 chars, no clickbait, strong keyword up front.
function buildTitle(fm) {
  const t = (fm.metaTitle || fm.title || "").trim();
  if (t.length <= 100) return t;
  return t.slice(0, 97) + "...";
}

// Pinterest description rules: ≤500 chars, helpful tone, hashtags acceptable
// but use sparingly — Pinterest weights them less than Twitter/IG.
function buildDescription(fm, isEs) {
  const desc = (fm.description || "").trim();
  const cta = isEs
    ? "Lea el artículo completo en Pura Vida Chiropractic San Antonio."
    : "Read the full article at Pura Vida Chiropractic San Antonio.";
  let body = desc.length > 0 ? desc : cta;
  // Keyword hashtags — first 3 only, kebab-case → camelHashtag
  const keywords = (fm.keywords || []).slice(0, 3);
  const tags = keywords
    .map((k) => "#" + k.replace(/[^a-zA-Z0-9 ]/g, "").split(/\s+/).map((w, i) =>
      i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()
    ).join(""))
    .join(" ");
  const full = `${body}\n\n${cta}\n\n${tags}`.trim();
  if (full.length <= 500) return full;
  return full.slice(0, 497) + "...";
}

// Image: prefer the post's frontmatter image. Fall back to a default OG card.
function resolveImageUrl(fm, slug) {
  if (fm.image) {
    return fm.image.startsWith("http") ? fm.image : `${BASE_URL}${fm.image}`;
  }
  const candidate = join(PUBLIC_IMAGES, "social-cards", `${slug}.jpg`);
  if (existsSync(candidate)) {
    return `${BASE_URL}/images/social-cards/${slug}.jpg`;
  }
  return `${BASE_URL}/images/social-cards/default.jpg`;
}

function csvEscape(v) {
  const s = String(v ?? "");
  if (/["\n,]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

// Build a publish-date schedule that staggers ~3 hours apart starting tomorrow
// at 9am local. Pinterest throttles bulk-publish; ~8 pins/day is the sweet spot.
function buildSchedule(count) {
  const dates = [];
  const start = new Date();
  start.setDate(start.getDate() + 1);
  start.setHours(9, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(start.getTime() + i * 3 * 60 * 60 * 1000);
    dates.push(d.toISOString().slice(0, 16).replace("T", " "));
  }
  return dates;
}

// Load + parse all posts
const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
const all = [];
for (const f of files) {
  const raw = readFileSync(join(POSTS_DIR, f), "utf8");
  const fm = parseFrontmatter(raw);
  if (!fm) continue;
  const slug = basename(f, ".md");
  const lang = fm.lang === "es" ? "es" : "en";
  if (langFilter && lang !== langFilter) continue;
  all.push({ slug, lang, fm });
}

// Sort newest first by date, then trim to --limit
all.sort((a, b) => (b.fm.date || "").localeCompare(a.fm.date || ""));
const picked = all.slice(0, limit);

// Build CSV
const dates = buildSchedule(picked.length);
const header = ["Title", "Pin description", "Link", "Image URL", "Pinterest board", "Publish date", "Keywords"];
const rows = picked.map((p, i) => {
  const isEs = p.lang === "es";
  return [
    buildTitle(p.fm),
    buildDescription(p.fm, isEs),
    `${BASE_URL}/${p.lang}/blog/${p.slug}`,
    resolveImageUrl(p.fm, p.slug),
    BOARDS[p.lang],
    dates[i],
    (p.fm.keywords || []).join("|"),
  ].map(csvEscape).join(",");
});

const csv = [header.join(","), ...rows].join("\n") + "\n";
const today = new Date().toISOString().slice(0, 10);
const outPath = join(ROOT, `pinterest-pins-${today}.csv`);
writeFileSync(outPath, csv, "utf8");

console.log(`✓ ${picked.length} pins written to ${outPath}`);
console.log(`  EN: ${picked.filter((p) => p.lang === "en").length}`);
console.log(`  ES: ${picked.filter((p) => p.lang === "es").length}`);
console.log(`  Schedule: starts ${dates[0]} (3-hour intervals, ~8 pins/day)`);
