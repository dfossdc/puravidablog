import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/posts";

const BASE_URL = "https://www.puravidachiropractic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "es"];
  const entries: MetadataRoute.Sitemap = [];

  // Blog index pages
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Individual blog posts
  for (const locale of locales) {
    const slugs = getPostSlugs(locale);
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
