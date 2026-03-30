import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

export interface SanitySlug {
  current: string;
}

export interface SanityPostSummary {
  _id: string;
  title: string;
  slug: SanitySlug;
  description: string;
  publishedAt: string;
  language: string;
  mainImage?: SanityImageSource;
  keywords?: string;
  estimatedReadingTime?: number;
}

export interface SanityPost extends SanityPostSummary {
  author?: { name: string; image?: SanityImageSource };
  body: PortableTextBlock[];
}

export interface SanitySlugEntry {
  slug: string;
  language: string;
}
