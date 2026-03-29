import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  slug: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(locale: string, slug: string): Post | null {
  const filePath = path.join(contentDir, locale, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    ...(data as PostFrontmatter),
    slug,
    content,
  };
}

export async function getPostHtml(locale: string, slug: string): Promise<{ post: Post; html: string } | null> {
  const post = getPostBySlug(locale, slug);
  if (!post) return null;

  const result = await remark().use(remarkHtml).process(post.content);
  return { post, html: result.toString() };
}

export function getAllPosts(locale: string): PostFrontmatter[] {
  const slugs = getPostSlugs(locale);
  return slugs
    .map((slug) => getPostBySlug(locale, slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
