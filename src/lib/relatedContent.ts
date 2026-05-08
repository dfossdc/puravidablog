/**
 * Related-content utilities for cross-linking conditions, services, and blog posts.
 *
 * Strategy:
 * - Posts: word-overlap on title/description/keywords/tags (case-insensitive,
 *   ignoring stop words and brand terms).
 * - Conditions: shared `additionalTreatments` services + alphabetic neighbors.
 * - Services: keyword overlap with conditions/posts. Includes a curated
 *   SERVICE_INDEX so non-shockwave/softwave/laser services (SOT, pediatric,
 *   prenatal, auto-injury, etc.) still pull up relevant conditions/posts.
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
  const arrA = Array.from(a);
  const arrB = Array.from(b);
  const intersection = arrA.filter((x) => b.has(x)).length;
  const union = new Set(arrA.concat(arrB)).size;
  return union === 0 ? 0 : intersection / union;
}

/** Pull all the searchable text out of a blog post (handles posts that use `tags` instead of `keywords`). */
function postCorpus(p: PostFrontmatter): string {
  return [
    p.title,
    p.description,
    (p.keywords || []).join(" "),
    (p.tags || []).join(" "),
  ].join(" ");
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

  const currentTokens = tokenize(postCorpus(current));

  const candidates = all.filter((p) => p.slug !== currentSlug && p.lang === locale);

  // Score-based primary matches (Jaccard similarity > 0)
  const scored = candidates
    .map((p) => ({ post: p, score: jaccard(currentTokens, tokenize(postCorpus(p))) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const picked: typeof scored = scored.slice(0, limit);

  // Fallback: if we don't have `limit` matches yet, fill the gap with the most
  // recent posts (by date desc) that aren't already in the picked list. This
  // guarantees every post emits `limit` outbound links — important for SEO so
  // orphan posts (e.g., topic-specific posts whose vocabulary doesn't overlap
  // with the rest of the corpus) still contribute to the internal link graph.
  if (picked.length < limit) {
    const pickedSlugs = new Set(picked.map((x) => x.post.slug));
    const recent = candidates
      .filter((p) => !pickedSlugs.has(p.slug))
      .sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da;
      })
      .slice(0, limit - picked.length);
    picked.push(...recent.map((post) => ({ post, score: 0 })));
  }

  return picked.map(({ post }) => ({
    title: post.title,
    href: `/${locale}/blog/${post.slug}`,
    image: post.image,
    type: "blog",
  }));
}

/* ── Service index ───────────────────────────────────────────────────────── */

/**
 * All site services with their EN/ES display labels and a list of "matcher"
 * tokens. The matcher tokens are checked against condition titles/intros and
 * blog post corpora to find content related to a given service (and vice
 * versa) — used as a fallback when the structured `additionalTreatments` field
 * doesn't apply (i.e., for services other than shockwave/softwave/laser).
 */
const SERVICE_INDEX: Record<
  string,
  { en: string; es: string; matchers: string[] }
> = {
  "sot-chiropractic": {
    en: "SOT Chiropractic",
    es: "Quiropráctica SOT",
    matchers: ["sot", "sacro", "occipital", "blocking", "category", "wedge"],
  },
  "softwave-therapy": {
    en: "SoftWave Therapy",
    es: "Terapia SoftWave",
    matchers: ["softwave", "shockwave", "regenerative", "regeneration", "tissue"],
  },
  "shockwave-therapy": {
    en: "Shockwave Therapy",
    es: "Terapia de Ondas de Choque",
    matchers: ["shockwave", "ondas", "choque", "tendinopath", "fasciitis"],
  },
  "class-iv-laser": {
    en: "Class IV Laser Therapy",
    es: "Terapia Láser Clase IV",
    matchers: ["laser", "class", "iv", "cold", "photobiomodulation", "láser"],
  },
  "auto-injury": {
    en: "Auto Injury Chiropractic",
    es: "Quiropráctica para Lesiones de Auto",
    matchers: ["auto", "accident", "whiplash", "collision", "car", "lesion", "lesión"],
  },
  "pediatric-chiropractor": {
    en: "Pediatric Chiropractor",
    es: "Quiropráctico Pediátrico",
    matchers: ["pediatric", "child", "kids", "infant", "newborn", "pediátric", "niño", "niños", "bebe", "bebé"],
  },
  "prenatal-chiropractor": {
    en: "Prenatal Chiropractor",
    es: "Quiropráctico Prenatal",
    matchers: ["prenatal", "pregnancy", "pregnant", "embaraz", "matern", "gestation"],
  },
  "pregnancy-chiropractor": {
    en: "Pregnancy Chiropractor",
    es: "Quiropráctico de Embarazo",
    matchers: ["pregnancy", "pregnant", "embaraz", "matern", "gestation", "trimester"],
  },
  "infants-chiropractic": {
    en: "Infant Chiropractic",
    es: "Quiropráctica para Infantes",
    matchers: ["infant", "newborn", "baby", "colic", "reflux", "bebe", "bebé", "cólico"],
  },
  "cranial-chiropractic": {
    en: "Cranial Chiropractic",
    es: "Quiropráctica Craneal",
    matchers: ["cranial", "skull", "concussion", "tbi", "tmj", "craneal", "cráneo"],
  },
  "wellness-care": {
    en: "Wellness Care",
    es: "Cuidado de Bienestar",
    matchers: ["wellness", "preventive", "maintenance", "lifestyle", "bienestar"],
  },
};

/* ── Condition cross-linking ─────────────────────────────────────────────── */

const TREATMENT_TO_SERVICE_SLUG: Record<string, string> = {
  shockwave: "shockwave-therapy",
  softwave: "softwave-therapy",
  laser: "class-iv-laser",
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

  // Direct services from the structured `additionalTreatments` field
  const directServices: RelatedItem[] = [];
  for (const t of current.additionalTreatments) {
    const slug = TREATMENT_TO_SERVICE_SLUG[t];
    if (!slug) continue;
    const svc = SERVICE_INDEX[slug];
    if (!svc) continue;
    directServices.push({
      title: isEs ? svc.es : svc.en,
      href: `/${locale}/services/${slug}`,
      type: "service",
    });
  }

  // Plus keyword-matched services (e.g. SOT, auto-injury, pediatric)
  const conditionTokens = tokenize(
    `${current.title} ${current.titleEs || ""} ${current.intro} ${current.introEs || ""} ${current.whatIs}`
  );
  const seen = new Set(directServices.map((s) => s.href));
  const matched: RelatedItem[] = [];
  for (const [slug, svc] of Object.entries(SERVICE_INDEX)) {
    const href = `/${locale}/services/${slug}`;
    if (seen.has(href)) continue;
    const hits = svc.matchers.filter((m) => Array.from(conditionTokens).some((t) => t.includes(m))).length;
    if (hits > 0) matched.push({ title: isEs ? svc.es : svc.en, href, type: "service" });
  }
  return [...directServices, ...matched.slice(0, 3)];
}

/* ── Service cross-linking ───────────────────────────────────────────────── */

export function getConditionsTreatedByService(
  serviceSlug: string,
  locale: string,
  limit = 4
): RelatedItem[] {
  const isEs = locale === "es";

  // Direct path: shockwave/softwave/laser have an `additionalTreatments` mapping
  const treatmentKey = Object.entries(TREATMENT_TO_SERVICE_SLUG).find(
    ([, v]) => v === serviceSlug
  )?.[0] as "shockwave" | "softwave" | "laser" | undefined;

  let direct: typeof conditionsContent = [];
  if (treatmentKey) {
    direct = conditionsContent.filter((c) =>
      c.additionalTreatments.includes(treatmentKey)
    );
  }

  // Fallback / supplement: keyword match against SERVICE_INDEX matchers
  const svc = SERVICE_INDEX[serviceSlug];
  let matched: typeof conditionsContent = [];
  if (svc) {
    matched = conditionsContent
      .filter((c) => !direct.some((d) => d.slug === c.slug))
      .map((c) => {
        const tokens = tokenize(
          `${c.title} ${c.titleEs || ""} ${c.intro} ${c.introEs || ""} ${c.whatIs}`
        );
        const hits = svc.matchers.filter((m) =>
          Array.from(tokens).some((t) => t.includes(m))
        ).length;
        return { c, hits };
      })
      .filter((x) => x.hits > 0)
      .sort((a, b) => b.hits - a.hits)
      .map((x) => x.c);
  }

  return [...direct, ...matched]
    .slice(0, limit)
    .map((c) => ({
      title:
        isEs && c.titleEs
          ? c.titleEs.split("|")[0].trim()
          : c.title.split("|")[0].trim(),
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
    .map((p) => ({ post: p, score: jaccard(queryTokens, tokenize(postCorpus(p))) }))
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
