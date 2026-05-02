import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const sotDirectory = path.join(process.cwd(), "content/sot");

export interface SotFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  lang: string;
  image?: string;
  tags?: string[];
}

export interface SotPage extends SotFrontmatter {
  content: string;
}

function dirFor(lang: string): string {
  return path.join(sotDirectory, lang);
}

function readFrontmatter(fullPath: string, lang: string): SotFrontmatter | null {
  if (!fs.existsSync(fullPath)) return null;
  const { data } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    slug: data.slug || path.basename(fullPath, ".md"),
    lang: data.lang || lang,
    image: data.image || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
}

export function fetchSotPages(lang: string): SotFrontmatter[] {
  const dir = dirFor(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(dir, filename);
      return readFrontmatter(fullPath, lang);
    })
    .filter((p): p is SotFrontmatter => p !== null)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function fetchAllSotSlugs(): { slug: string; lang: string }[] {
  const out: { slug: string; lang: string }[] = [];
  for (const lang of ["en", "es"]) {
    const dir = dirFor(lang);
    if (!fs.existsSync(dir)) continue;
    for (const filename of fs.readdirSync(dir)) {
      if (!filename.endsWith(".md")) continue;
      const slug = filename.replace(/\.md$/, "");
      if (slug === "pillar") continue; // pillar is handled by the /sot index route
      out.push({ slug, lang });
    }
  }
  return out;
}

export async function fetchSotPageBySlug(
  slug: string,
  lang: string
): Promise<SotPage | null> {
  const fullPath = path.join(dirFor(lang), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const processed = await remark().use(remarkHtml).process(content);
  // Strip the first <h1> from the rendered SOT body. The page already
  // renders its own <h1> from page.title (sot/[slug]/page.tsx line 112),
  // so any markdown that starts with `# Title` would create a duplicate
  // h1. Same fix as posts.ts. Semrush flagged 16 multi-h1 pages — SOT
  // markdown is one source.
  const html = processed.toString().replace(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, "");
  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    slug: data.slug || slug,
    lang: data.lang || lang,
    image: data.image || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: html,
  };
}
