/**
 * Seed Sanity with all existing markdown blog posts.
 *
 * Requirements:
 *   SANITY_API_TOKEN must be set in .env.local (write token)
 *
 * Usage:
 *   npx tsx scripts/seed-content.ts
 */

import * as fs from "fs";
import * as path from "path";
import { createClient } from "@sanity/client";
import matter from "gray-matter";
import * as dotenv from "dotenv";

// Load .env.local
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

// ── Sanity write client ────────────────────────────────────────────────────

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rm3xak17",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ── Helpers ────────────────────────────────────────────────────────────────

/** Deterministic key generator */
function makeKey(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36).slice(0, 8);
}

let keyCounter = 0;
function nextKey(): string {
  return (++keyCounter).toString(36).padStart(4, "0");
}

/** Convert a markdown string to Sanity Portable Text blocks (simplified). */
function markdownToPortableText(markdown: string): object[] {
  const blocks: object[] = [];
  const lines = markdown.split("\n");
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return;
    const text = paragraphLines.join(" ").trim();
    if (!text) {
      paragraphLines = [];
      return;
    }
    // Strip inline markdown (bold, italic, links) for simplicity
    const clean = text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/`([^`]+)`/g, "$1");
    blocks.push({
      _type: "block",
      _key: nextKey(),
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: nextKey(), text: clean, marks: [] }],
    });
    paragraphLines = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "h3",
        markDefs: [],
        children: [{ _type: "span", _key: nextKey(), text: trimmed.slice(4), marks: [] }],
      });
    } else if (trimmed.startsWith("## ")) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: nextKey(), text: trimmed.slice(3), marks: [] }],
      });
    } else if (trimmed.startsWith("# ")) {
      flushParagraph();
      // Treat H1 in body as H2 (the page title is already H1)
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: nextKey(), text: trimmed.slice(2), marks: [] }],
      });
    } else if (trimmed.startsWith("> ")) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: nextKey(),
        style: "blockquote",
        markDefs: [],
        children: [{ _type: "span", _key: nextKey(), text: trimmed.slice(2), marks: [] }],
      });
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      // Treat list items as normal paragraphs for simplicity
      paragraphLines.push(trimmed.slice(2));
    } else {
      paragraphLines.push(trimmed);
    }
  }
  flushParagraph();

  return blocks;
}

// ── Create / find Dr. Dan Foss author document ─────────────────────────────

async function upsertAuthor(): Promise<string> {
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == "author" && name == "Dr. Dan Foss, DC"][0]{ _id }`
  );
  if (existing?._id) {
    console.log(`  Author already exists: ${existing._id}`);
    return existing._id;
  }

  const doc = await client.create({
    _type: "author",
    name: "Dr. Dan Foss, DC",
    bio: "Dr. Dan Foss, DC is the chiropractor and founder of Pura Vida Chiropractic in San Antonio, TX. He specializes in the Sacro-Occipital Technique (SOT) and holistic chiropractic care.",
  });
  console.log(`  Created author: ${doc._id}`);
  return doc._id;
}

// ── Seed posts ─────────────────────────────────────────────────────────────

async function seedPosts(authorId: string) {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  const locales = ["en", "es"];

  for (const lang of locales) {
    const dir = path.join(contentDir, lang);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    console.log(`\nSeeding ${files.length} ${lang.toUpperCase()} posts...`);

    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);

      // Check if post already exists
      const existing = await client.fetch<{ _id: string } | null>(
        `*[_type == "post" && slug.current == $slug && language == $lang][0]{ _id }`,
        { slug, lang }
      );

      if (existing?._id) {
        console.log(`  [SKIP] ${slug} (${lang}) — already exists`);
        continue;
      }

      const body = markdownToPortableText(content);

      const doc = {
        _type: "post",
        title: data.title as string,
        slug: { _type: "slug", current: slug },
        language: lang,
        description: data.description as string || "",
        keywords: Array.isArray(data.keywords)
          ? (data.keywords as string[]).join(", ")
          : (data.keywords as string) || "",
        publishedAt: data.date
          ? new Date(data.date as string).toISOString()
          : new Date().toISOString(),
        author: { _type: "reference", _ref: authorId },
        body,
        // mainImage will need to be set manually in the Studio
        // since we can't upload external URLs directly via the API
      };

      try {
        const created = await client.create(doc);
        console.log(`  [OK]   ${slug} (${lang}) → ${created._id}`);
      } catch (err) {
        console.error(`  [ERR]  ${slug} (${lang}):`, err);
      }
    }
  }
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      "\n❌  SANITY_API_TOKEN is not set.\n" +
        "   Add it to .env.local — see README for instructions.\n"
    );
    process.exit(1);
  }

  console.log("🌿  Pura Vida Chiropractic — Sanity seed script");
  console.log(`   Project: ${client.config().projectId}`);
  console.log(`   Dataset: ${client.config().dataset}\n`);

  console.log("1. Upserting author...");
  const authorId = await upsertAuthor();

  console.log("\n2. Seeding blog posts...");
  await seedPosts(authorId);

  console.log("\n✅  Done! Posts are now in Sanity.");
  console.log(
    "   Note: Blog post images were not migrated (external URLs can't be\n" +
      "   uploaded via the API). Set them in Sanity Studio at /studio.\n"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
