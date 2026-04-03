import type { MetadataRoute } from "next";
import { fetchAllSlugs } from "@/lib/posts";
import { conditionsContent } from "@/lib/conditionsContent";

const BASE_URL = "https://puravidasanantonio.com";

const enServices = [
  // Original services
  "sot-chiropractic", "softwave-therapy", "auto-injury",
  "pediatric-prenatal", "shockwave-therapy", "class-iv-laser",
  // New services
  "chiropractic-care", "cranial-chiropractic", "infant-chiropractic",
  "pediatric-chiropractic", "pregnancy-chiropractic", "auto-injury-chiropractic",
  "wellness-care", "latino-community",
];
const esServices = [
  // Original services
  "quiropractica-sot", "terapia-softwave", "lesiones-de-auto",
  "quiropractica-pediatrica", "terapia-ondas-de-choque", "laser-clase-iv",
  // New services (same slugs as EN)
  "chiropractic-care", "cranial-chiropractic", "infant-chiropractic",
  "pediatric-chiropractic", "pregnancy-chiropractic", "auto-injury-chiropractic",
  "wellness-care", "latino-community",
];

const staticPages = ["about", "contact", "new-patient", "faq", "mission", "sports-chiropractic", "testimonials", "services"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["en", "es"]) {
    // Home
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    });

    // Blog index
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });

    // Static pages
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Blog posts
  const slugEntries = fetchAllSlugs();
  for (const { slug, lang } of slugEntries) {
    entries.push({
      url: `${BASE_URL}/${lang}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  // Service pages
  for (const slug of enServices) {
    entries.push({
      url: `${BASE_URL}/en/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }
  for (const slug of esServices) {
    entries.push({
      url: `${BASE_URL}/es/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Condition pages
  for (const condition of conditionsContent) {
    for (const locale of ["en", "es"]) {
      entries.push({
        url: `${BASE_URL}/${locale}/conditions/${condition.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }
  }

  return entries;
}
