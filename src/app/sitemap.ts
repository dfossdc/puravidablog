import type { MetadataRoute } from "next";
import { fetchAllSlugs } from "@/lib/posts";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Blog posts from Sanity (with timeout guard)
  const slugEntries = await Promise.race([
    fetchAllSlugs(),
    new Promise<[]>((resolve) => setTimeout(() => resolve([]), 5000)),
  ]);
  for (const { slug, language } of slugEntries) {
    entries.push({
      url: `${BASE_URL}/${language}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
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
