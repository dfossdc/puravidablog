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

export interface Post extends PostFrontmatter {
  content: string;
  faqs: FaqItem[];
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
  const htmlContent = processed.toString();
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
