/**
 * Related-content utilities for cross-linking conditions, services, and blog posts.
 *
 * Strategy:
 * - Posts: word-overlap on title/keywords/tags (case-insensitive, ignoring stop words)
 * - Conditions: shared `additionalTreatments` services + alphabetic neighbors
 * - Services: keyword overlap with other services + conditions whose
 *   `additionalTreatments` includes this service
 */
import { conditionsContent } from "@/lib/conditionsContent";
import { fetchPosts, type PostFrontmatter } from "@/lib/posts";

export type RelatedItem = {
  title: string;
  href: string;
  image?: string;
  type: "blog" | "condition" | "service";
};

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "of", "in", "on", "for", "to", "with",
  "is", "are", "was", "were", "be", "by", "as", "at", "from", "that", "this",
  "your", "you", "what", "how", "why", "when", "where", "which",
  "san", "antonio", "tx", "chiropractor", "chiropractic", "dr", "foss", "pura", "vida",
  "del", "de", "la", "el", "los", "las", "un", "una", "y", "o", "que", "su", "sus",
]);

function tokenize(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9á-ú\s]/gi, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP_WORDS.has(w))
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  const intersection = [...a].filter((x) => b.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

/* ── Blog post cross-linking ─────────────────────────────────────────────── */

export function getRelatedPosts(
  currentSlug: string,
  locale: string,
  limit = 3
): RelatedItem[] {
  const all = fetchPosts(locale);
  const current = all.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentTokens = tokenize(
    `${current.title} ${current.description} ${(current.keywords || []).join(" ")}`
  );

  const scored = all
    .filter((p) => p.slug !== currentSlug && p.lang === locale)
    .map((p) => {
      const tokens = tokenize(
        `${p.title} ${p.description} ${(p.keywords || []).join(" ")}`
      );
      return { post: p, score: jaccard(currentTokens, tokens) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ post }) => ({
    title: post.title,
    href: `/${locale}/blog/${post.slug}`,
    image: post.image,
    type: "blog",
  }));
}

/* ── Condition cross-linking ─────────────────────────────────────────────── */

const SERVICE_LABELS: Record<string, { en: string; es: string; slug: string }> = {
  shockwave: { en: "Shockwave Therapy", es: "Terapia de Ondas de Choque", slug: "shockwave-therapy" },
  softwave: { en: "SoftWave Therapy", es: "Terapia SoftWave", slug: "softwave-therapy" },
  laser: { en: "Class IV Laser Therapy", es: "Terapia Láser Clase IV", slug: "class-iv-laser" },
};

export function getRelatedConditions(
  currentSlug: string,
  locale: string,
  limit = 3
): RelatedItem[] {
  const isEs = locale === "es";
  const current = conditionsContent.find((c) => c.slug === currentSlug);
  if (!current) return [];

  const scored = conditionsContent
    .filter((c) => c.slug !== currentSlug)
    .map((c) => {
      // Score: shared additionalTreatments + token overlap on title/intro
      const sharedTreatments = current.additionalTreatments.filter((t) =>
        c.additionalTreatments.includes(t)
      ).length;
      const titleTokens = tokenize(`${current.title} ${current.intro}`);
      const cTokens = tokenize(`${c.title} ${c.intro}`);
      const tokenScore = jaccard(titleTokens, cTokens);
      const score = sharedTreatments * 0.4 + tokenScore;
      return { condition: c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ condition: c }) => ({
    title: isEs && c.titleEs ? c.titleEs.split("|")[0].trim() : c.title.split("|")[0].trim(),
    href: `/${locale}/conditions/${c.slug}`,
    image: c.image,
    type: "condition",
  }));
}

export function getRelatedServicesForCondition(
  currentSlug: string,
  locale: string
): RelatedItem[] {
  const isEs = locale === "es";
  const current = conditionsContent.find((c) => c.slug === currentSlug);
  if (!current) return [];

  return current.additionalTreatments.map((t) => {
    const svc = SERVICE_LABELS[t];
    return {
      title: isEs ? svc.es : svc.en,
      href: `/${locale}/services/${svc.slug}`,
      type: "service",
    };
  });
}

/* ── Service cross-linking ───────────────────────────────────────────────── */

export function getConditionsTreatedByService(
  serviceSlug: string,
  locale: string,
  limit = 4
): RelatedItem[] {
  const isEs = locale === "es";
  const treatmentKey = Object.entries(SERVICE_LABELS).find(
    ([, v]) => v.slug === serviceSlug
  )?.[0] as "shockwave" | "softwave" | "laser" | undefined;
  if (!treatmentKey) return [];

  return conditionsContent
    .filter((c) => c.additionalTreatments.includes(treatmentKey))
    .slice(0, limit)
    .map((c) => ({
      title: isEs && c.titleEs ? c.titleEs.split("|")[0].trim() : c.title.split("|")[0].trim(),
      href: `/${locale}/conditions/${c.slug}`,
      image: c.image,
      type: "condition",
    }));
}

export function getRelatedPostsByKeywords(
  keywords: string[],
  locale: string,
  limit = 3
): RelatedItem[] {
  const all = fetchPosts(locale);
  const queryTokens = tokenize(keywords.join(" "));

  const scored = all
    .filter((p) => p.lang === locale)
    .map((p) => {
      const tokens = tokenize(
        `${p.title} ${p.description} ${(p.keywords || []).join(" ")}`
      );
      return { post: p, score: jaccard(queryTokens, tokens) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ post }) => ({
    title: post.title,
    href: `/${locale}/blog/${post.slug}`,
    image: post.image,
    type: "blog",
  }));
}
