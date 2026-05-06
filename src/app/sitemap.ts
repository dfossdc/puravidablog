import type { MetadataRoute } from "next";
import { fetchAllSlugs } from "@/lib/posts";
import { conditionsContent } from "@/lib/conditionsContent";
import { fetchAllSotSlugs } from "@/lib/sot";
import { neighborhoodSlugs } from "@/lib/neighborhoods";

const BASE_URL = "https://puravidasanantonio.com";

// Service slugs that resolve to actual pages (no redirects).
// Previous "// New services" block listed slugs like /en/services/sot-chiropractic
// that 301-redirect to a canonical URL — Semrush flagged 10 of these as
// "incorrect pages found in sitemap.xml" because sitemaps should only list
// final destinations, not redirects. Removed.
//
// May 6, 2026 follow-up: re-added wellness-care, latino-community, and
// chiropractic-care below. The May 2 cleanup (commit bd6a23d) removed all
// 8 "new services" slugs assuming they all redirected — but only 5 of them
// did (cranial-chiropractic, infant-chiropractic, pediatric-chiropractic,
// pregnancy-chiropractic, auto-injury-chiropractic). These 3 are real
// 200-status pages in [service]/page.tsx with no outbound redirect. GSC
// reported them as "Discovered - currently not indexed" because they
// weren't being crawled via the sitemap.
const enServices = [
  "sot-chiropractic", "softwave-therapy", "auto-injury",
  "pediatric-chiropractor", "prenatal-chiropractor", "pregnancy-chiropractor",
  "infants-chiropractic", "pediatric-prenatal", "shockwave-therapy", "class-iv-laser",
  "wellness-care", "latino-community", "chiropractic-care",
];
const esServices = [
  "quiropractica-sot", "terapia-softwave", "lesiones-de-auto",
  "quiropractico-pediatrico", "quiropractico-prenatal", "quiropractico-embarazo",
  "quiropractico-infantes", "quiropractica-pediatrica", "terapia-ondas-de-choque", "laser-clase-iv",
  "wellness-care", "latino-community", "chiropractic-care",
];

// Pages that exist in BOTH /en and /es with bilingual content.
const staticPages = [
  "about", "contact", "new-patient", "faq", "mission",
  "sports-chiropractic", "testimonials", "services",
  "videos",
  "terms", "healthcare-disclaimer", "book-now",
  "provider-referral",
  "conditions", // /conditions index page (categorized directory)
  "site-map",   // HTML sitemap — collapses crawl depth for all pages
];

// Pages that ONLY exist at /en (English-slug landing pages).
// /es variants either redirect to the Spanish-slug counterpart or 404.
// Semrush issue #207 flagged 26 orphaned pages, including 6 here that
// were previously emitted under /es and 404'd. Splitting them out keeps
// the sitemap honest and prevents the false orphan signal.
const englishOnlyPages = [
  // Tier 2 EN missing-keyword landing pages (Phase 2 keyword gap)
  "chiropractor-near-me-san-antonio",
  "best-chiropractor-san-antonio",
  // Tier 3 EN condition-chiropractor commercial-local landing pages
  // (Spanish counterparts live at /es/quiropractico-{topic}-san-antonio
  // — listed in spanishOnlyPages below.)
  "migraine-chiropractor-san-antonio",
  "headache-chiropractor-san-antonio",
  "scoliosis-chiropractor-san-antonio",
  "postpartum-chiropractor-san-antonio",
];

// Pages that only exist at /es/ (Spanish-language SEO landing pages).
// /en variants exist as files but redirect to /es per next.config.mjs,
// so we list them only under /es here.
const spanishOnlyPages = [
  "el-mejor-quiropractico-san-antonio",
  "quiropratico-san-antonio",
  "san-antonio-quiropractico",
  "quiropractico-cerca-de-mi-san-antonio",
  // Tier 3 ES condition-chiropractor pages (Spanish-slug counterparts to the
  // English-slug Tier 3 pages above — separate URLs so Google reads the locale
  // signal directly from the slug, in addition to hreflang).
  "quiropractico-para-migranas-san-antonio",
  "quiropractico-dolor-de-cabeza-san-antonio",
  "quiropractico-escoliosis-san-antonio",
  "quiropractico-postparto-san-antonio",
  // Spanish-only definition + cultural pillars (Phase 2 Spanish dominate)
  "que-es-un-quiropractico", // 1,860 vol cluster: que es / qué hace / para qué sirve
  "huesero-san-antonio",     // cultural bridge: huesero (folk bone-setter) → licensed quiropráctico
];

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

    // Static pages (both locales)
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // English-only SEO landing pages (high-value commercial-local landing
  // pages with English slugs that don't have an /es route counterpart).
  for (const page of englishOnlyPages) {
    entries.push({
      url: `${BASE_URL}/en/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Spanish-only SEO landing pages (high-value, target Spanish search queries)
  for (const page of spanishOnlyPages) {
    entries.push({
      url: `${BASE_URL}/es/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
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

  // SOT pillar + sub-pages
  for (const locale of ["en", "es"]) {
    entries.push({
      url: `${BASE_URL}/${locale}/sot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    });
  }
  for (const { slug, lang } of fetchAllSotSlugs()) {
    entries.push({
      url: `${BASE_URL}/${lang}/sot/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
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

  // Neighborhood landing pages — high-priority for hyper-local SEO
  for (const slug of neighborhoodSlugs) {
    for (const locale of ["en", "es"]) {
      entries.push({
        url: `${BASE_URL}/${locale}/${slug}-chiropractor`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
