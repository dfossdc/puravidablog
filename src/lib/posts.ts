import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  slug: string;
  lang: string;
}

export interface Post extends PostFrontmatter {
  content: string;
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

  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Dr. Dan Foss, DC",
    image: data.image || "",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    slug,
    lang: postLang,
    content: htmlContent,
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
