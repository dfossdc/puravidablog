import type { MetadataRoute } from "next";
import { getPostSlugs, getPostBySlug } from "@/lib/posts";

const BASE_URL = "https://puravidasanantonio.com";

const enServices = [
  "sot-chiropractic",
  "softwave-therapy",
  "auto-injury",
  "pediatric-prenatal",
  "shockwave-therapy",
  "class-iv-laser",
];

const esServices = [
  "quiropractica-sot",
  "terapia-softwave",
  "lesiones-de-auto",
  "quiropractica-pediatrica",
  "terapia-ondas-de-choque",
  "laser-clase-iv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Blog index pages
  for (const locale of ["en", "es"]) {
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Blog posts
  for (const locale of ["en", "es"]) {
    const slugs = getPostSlugs(locale);
    for (const slug of slugs) {
      const post = getPostBySlug(locale, slug);
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: post?.date ? new Date(post.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Service pages
  for (const slug of enServices) {
    entries.push({
      url: `${BASE_URL}/en/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }
  for (const slug of esServices) {
    entries.push({
      url: `${BASE_URL}/es/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  return entries;
}
