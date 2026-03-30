import { sanityClient } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { postsQuery, postBySlugQuery, allPostSlugsQuery } from "@/sanity/queries";
import type {
  SanityPostSummary,
  SanityPost,
  SanitySlugEntry,
} from "@/sanity/types";
import type { PortableTextBlock } from "@portabletext/react";

// ── Types ──────────────────────────────────────────────────────────────────

/** Shape consumed by BlogCard and blog index */
export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  slug: string;
}

/** Full post including Portable Text body for rendering */
export interface Post extends PostFrontmatter {
  body: PortableTextBlock[];
}

// ── Helpers ────────────────────────────────────────────────────────────────

function mapToPostFrontmatter(post: SanityPostSummary): PostFrontmatter {
  return {
    title: post.title,
    description: post.description || "",
    date: post.publishedAt || new Date().toISOString(),
    author: "Dr. Dan Foss, DC",
    image: post.mainImage
      ? urlFor(post.mainImage).width(800).height(450).fit("crop").url()
      : "",
    keywords: post.keywords
      ? post.keywords.split(",").map((k) => k.trim()).filter(Boolean)
      : [],
    slug: post.slug.current,
  };
}

// ── Data-fetching functions ────────────────────────────────────────────────

/** Fetch all posts for a given locale — used on blog index */
export async function fetchPosts(lang: string): Promise<PostFrontmatter[]> {
  const posts = await sanityClient.fetch<SanityPostSummary[]>(postsQuery, {
    lang,
  });
  return (posts || []).map(mapToPostFrontmatter);
}

/** Fetch a single post by slug and locale — used on post page */
export async function fetchPostBySlug(
  slug: string,
  lang: string
): Promise<Post | null> {
  const post = await sanityClient.fetch<SanityPost | null>(postBySlugQuery, {
    slug,
    lang,
  });
  if (!post) return null;

  return {
    ...mapToPostFrontmatter(post),
    author: post.author?.name || "Dr. Dan Foss, DC",
    image: post.mainImage
      ? urlFor(post.mainImage).width(800).height(450).fit("crop").url()
      : "",
    body: post.body || [],
  };
}

/** Fetch all slug+language pairs — used in generateStaticParams */
export async function fetchAllSlugs(): Promise<SanitySlugEntry[]> {
  const slugs = await sanityClient.fetch<SanitySlugEntry[]>(allPostSlugsQuery);
  return slugs || [];
}
