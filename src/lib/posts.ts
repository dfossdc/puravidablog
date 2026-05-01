import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMention {
  "@type": string;
  name: string;
  url: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  /** Some posts use `tags` instead of `keywords`. We read both. */
  tags: string[];
  slug: string;
  lang: string;
  mentions?: PostMention[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Post extends PostFrontmatter {
  content: string;
  faqs: FaqItem[];
  headings: Heading[];
}

/**
 * Slugify a heading's text content for use as an HTML id.
 * Strips inline HTML, lowercases, replaces non-alphanumerics with hyphens,
 * collapses runs of hyphens, trims leading/trailing hyphens.
 */
function slugifyHeading(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, "") // strip inline tags like <strong>
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics so "qué" → "que"
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * Post-process remark's rendered HTML to add id attributes to h2 and h3
 * headings (so the TOC and any deep-link anchors work) and return the
 * collected headings list.
 */
export function addHeadingAnchors(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const usedIds = new Set<string>();
  const out = html.replace(/<(h[23])>(.*?)<\/\1>/g, (_m, tag: string, inner: string) => {
    const baseId = slugifyHeading(inner) || "section";
    let id = baseId;
    let n = 2;
    while (usedIds.has(id)) {
      id = `${baseId}-${n++}`;
    }
    usedIds.add(id);
    const level = tag === "h2" ? 2 : 3;
    headings.push({ id, text: inner.replace(/<[^>]+>/g, "").trim(), level });
    return `<${tag} id="${id}">${inner}</${tag}>`;
  });
  return { html: out, headings };
}

/**
 * Extract FAQ Q&A pairs from a post's raw markdown body.
 * Looks for an FAQ section (`## Frequently Asked Questions`, `## Preguntas
 * Frecuentes`, or `## FAQ`, with optional trailing words), then collects
 * `**Question?**` lines followed by their answer paragraph until the next
 * H2 heading.
 *
 * Returns [] if no FAQ section is present.
 */
export function extractFaqs(markdown: string): FaqItem[] {
  const FAQ_HEADING_RE = /^##\s+(Frequently Asked Questions|Preguntas Frecuentes|FAQ)\b/i;
  const NEXT_H2_RE = /^##\s+/;
  const Q_RE = /^\*\*(.+?)\*\*\s*$/;

  const lines = markdown.split(/\r?\n/);
  const items: FaqItem[] = [];
  let inFaqSection = false;
  let currentQuestion: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = answerLines.join(" ").replace(/\s+/g, " ").trim();
      if (answer) items.push({ question: currentQuestion.trim(), answer });
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (FAQ_HEADING_RE.test(line)) {
      inFaqSection = true;
      continue;
    }
    if (!inFaqSection) continue;
    if (NEXT_H2_RE.test(line)) {
      flush();
      inFaqSection = false;
      continue;
    }
    const qMatch = line.match(Q_RE);
    if (qMatch) {
      flush();
      currentQuestion = qMatch[1];
      continue;
    }
    if (currentQuestion) {
      if (line.trim() === "") {
        if (answerLines.length > 0) flush();
      } else {
        answerLines.push(line.trim());
      }
    }
  }
  flush();
  return items;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function fetchPosts(lang: string): PostFrontmatter[] {
  return getPostFiles()
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Dr. Dan Foss, DC",
        image: data.image || "",
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        slug,
        lang: data.lang || "en",
      } as PostFrontmatter;
    })
    .filter((p) => p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function fetchPostBySlug(slug: string, lang: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, slug + ".md");
  if (!fs.existsSync(fullPath)) return null;
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const postLang = data.lang || "en";
  if (postLang !== lang) return null;

  const processed = await remark().use(remarkHtml).process(content);
  const rawHtml = processed.toString();
  const { html: htmlContent, headings } = addHeadingAnchors(rawHtml);
  const faqs = extractFaqs(content);

  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Dr. Dan Foss, DC",
    image: data.image || "",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    tags: Array.isArray(data.tags) ? data.tags : [],
    slug,
    lang: postLang,
    content: htmlContent,
    faqs,
    headings,
    mentions: Array.isArray(data.mentions) ? data.mentions : undefined,
  };
}

export function fetchAllSlugs(): { slug: string; lang: string }[] {
  return getPostFiles().map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const { data } = matter(fs.readFileSync(fullPath, "utf8"));
    return { slug, lang: data.lang || "en" };
  });
}
