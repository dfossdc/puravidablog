/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.puravidasanantonio.com" },
      { protocol: "https", hostname: "avatarpreview.com" },
      { protocol: "https", hostname: "puravidasanantonio.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.ethosregen.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      // ── www.puravidasanantonio.com → puravidasanantonio.com (canonical host) ──
      // Fixes 54 hreflang/canonical conflicts flagged by Semrush:
      // www was serving the same content as non-www, but every page's
      // canonical + hreflang point to non-www. That mismatch was being
      // counted as 54 errors and was suppressing rich-result eligibility.
      // Single 301 here resolves both the conflicts and the missing
      // self-referencing hreflang in one move.
      {
        source: "/:path*",
        destination: "https://puravidasanantonio.com/:path*",
        permanent: true,
        has: [{ type: "host", value: "www.puravidasanantonio.com" }],
      },
      // ── quiropracticosanantonio.com → puravidasanantonio.com/es ──
      // MUST come before the generic "/" → "/en" rule below, otherwise
      // the catchall wins and sends quiropracticosanantonio.com/ to /en.
      // Two rules per host: root → /es, paths → /es/<path>, no double-hops.
      {
        source: "/",
        destination: "https://puravidasanantonio.com/es",
        permanent: true,
        has: [{ type: "host", value: "quiropracticosanantonio.com" }],
      },
      {
        source: "/:path+",
        destination: "https://puravidasanantonio.com/es/:path+",
        permanent: true,
        has: [{ type: "host", value: "quiropracticosanantonio.com" }],
      },
      {
        source: "/",
        destination: "https://puravidasanantonio.com/es",
        permanent: true,
        has: [{ type: "host", value: "www.quiropracticosanantonio.com" }],
      },
      {
        source: "/:path+",
        destination: "https://puravidasanantonio.com/es/:path+",
        permanent: true,
        has: [{ type: "host", value: "www.quiropracticosanantonio.com" }],
      },

      // ---- Old Doctible page URLs (45) ----
      { source: "/", destination: "/en", permanent: true },
      { source: "/infants-and-chiropractic", destination: "/en/services/infants-chiropractic", permanent: true },
      { source: "/el-mejor-quiropractico-san-antonio", destination: "/en/el-mejor-quiropractico-san-antonio", permanent: true },
      { source: "/auto-injury-chiropractor", destination: "/en/services/auto-injury", permanent: true },
      { source: "/san-antonio-quiropractico", destination: "/en/san-antonio-quiropractico", permanent: true },
      { source: "/ai-generated-content-disclaimer", destination: "/en/healthcare-disclaimer", permanent: true },
      { source: "/good-faith-estimate", destination: "/en/contact", permanent: true },
      { source: "/thank-you-form", destination: "/en/thank-you", permanent: true },
      { source: "/review-us", destination: "/en/testimonials", permanent: true },
      { source: "/chiropractic-care", destination: "/en/services/chiropractic-care", permanent: true },
      { source: "/blog", destination: "/en/blog", permanent: true },
      { source: "/new-patient-paperwork", destination: "/en/new-patient", permanent: true },
      { source: "/finding-a-chiropractor", destination: "/en/blog/first-chiropractic-visit-what-to-expect", permanent: true },
      { source: "/faq", destination: "/en/faq", permanent: true },
      { source: "/tmj", destination: "/en/conditions/tmj-jaw-pain", permanent: true },
      { source: "/neck-pain", destination: "/en/conditions/neck-pain", permanent: true },
      { source: "/sciatica", destination: "/en/conditions/sciatica", permanent: true },
      { source: "/headaches-migraines", destination: "/en/conditions/headaches", permanent: true },
      { source: "/back-pain", destination: "/en/conditions/lower-back-pain", permanent: true },
      { source: "/arm-leg-pain", destination: "/en/conditions/shoulder-arm-pain", permanent: true },
      { source: "/disc-injury", destination: "/en/conditions/disc-problems", permanent: true },
      { source: "/pregnancy-chiropractor", destination: "/en/services/pregnancy-chiropractor", permanent: true },
      { source: "/carpal-tunnel", destination: "/en/conditions/carpal-tunnel-syndrome", permanent: true },
      { source: "/scoliosis", destination: "/en/conditions/scoliosis", permanent: true },
      { source: "/shoulder-pain", destination: "/en/conditions/shoulder-arm-pain", permanent: true },
      { source: "/vertigo", destination: "/en/conditions/vertigo", permanent: true },
      { source: "/wellness-care", destination: "/en/services/wellness-care", permanent: true },
      { source: "/whiplash", destination: "/en/conditions/whiplash", permanent: true },
      { source: "/work-injury", destination: "/en/conditions/work-injuries", permanent: true },
      { source: "/anti-discrimination", destination: "/en/healthcare-disclaimer", permanent: true },
      { source: "/terms-service", destination: "/en/terms", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/hipaa-privacy-policy", destination: "/privacy", permanent: true },
      { source: "/healthcare-disclaimer", destination: "/en/healthcare-disclaimer", permanent: true },
      { source: "/accessibility", destination: "/en/healthcare-disclaimer", permanent: true },
      { source: "/contact-us", destination: "/en/contact", permanent: true },
      { source: "/testimonials", destination: "/en/testimonials", permanent: true },
      { source: "/office-tour", destination: "/en/about", permanent: true },
      { source: "/special", destination: "/en/book-now", permanent: true },
      { source: "/book-now", destination: "/en/book-now", permanent: true },
      // ---- Sitemap-listed pages that don't exist as routes ----
      { source: "/en/meet-dr-foss", destination: "/en/about", permanent: true },
      { source: "/es/meet-dr-foss", destination: "/es/about", permanent: true },
      { source: "/en/office-hours", destination: "/en/contact", permanent: true },
      { source: "/es/office-hours", destination: "/es/contact", permanent: true },
      { source: "/en/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/es/privacy-policy", destination: "/privacy/es", permanent: true },
      { source: "/us", destination: "/en/about", permanent: true },
      { source: "/describe-your-concern", destination: "/en/contact", permanent: true },
      { source: "/laser-therapy", destination: "/en/services/class-iv-laser", permanent: true },
      { source: "/shockwave-therapy", destination: "/en/services/shockwave-therapy", permanent: true },
      { source: "/softwave-therapy", destination: "/en/services/softwave-therapy", permanent: true },
      { source: "/pediatric-chiropractor", destination: "/en/services/pediatric-chiropractor", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },

      // ---- Old Doctible blog URLs (41) ----
      { source: "/blog/finding-chiropractor", destination: "/en/blog/first-chiropractic-visit-what-to-expect", permanent: true },
      { source: "/blog/4-reasons-choose-chiropractor", destination: "/en/blog/why-go-to-a-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractic-ok-pregnancy", destination: "/en/services/pregnancy-chiropractor", permanent: true },
      { source: "/blog/educational-requirements-chiropractor", destination: "/en/blog/what-does-a-chiropractor-do", permanent: true },
      { source: "/blog/chiropractic-care-back-pain", destination: "/en/blog/back-pain-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-can-help", destination: "/en/blog/conditions-we-treat", permanent: true },
      { source: "/blog/improve-golf-game-chiropractic", destination: "/en/conditions/sports-injury", permanent: true },
      { source: "/blog/choose-chiropractic-office", destination: "/en/blog/first-time-chiropractor-san-antonio", permanent: true },
      { source: "/blog/3-tips-chiropractor", destination: "/en/blog/first-chiropractic-visit-what-to-expect", permanent: true },
      { source: "/blog/chiropractor-explains-value-health", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-talks-bulging-discs", destination: "/en/blog/bulging-disc-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-discusses-herniated-discs", destination: "/en/blog/herniated-disc-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractors-may-help-scoliosis", destination: "/en/blog/scoliosis-chiropractor-san-antonio", permanent: true },
      { source: "/blog/choosing-chiropractor", destination: "/en/blog/first-time-chiropractor-san-antonio", permanent: true },
      { source: "/blog/fitness-tips-chiropractor", destination: "/en/conditions/sports-injury", permanent: true },
      { source: "/blog/chiropractor-discusses-different-types-headaches", destination: "/en/blog/headaches-migraines-chiropractor-san-antonio", permanent: true },
      { source: "/blog/headache-tips-chiropractic-office", destination: "/en/blog/headaches-migraines-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractic-care-can-help-joint-inflammation", destination: "/en/blog/joint-pain-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractors-may-help-tmj", destination: "/en/blog/a-doctor-s-perspective-on-tmj", permanent: true },
      { source: "/blog/chiropractic-care-helps-whiplash", destination: "/en/blog/whiplash-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractors-may-relieve-migraines", destination: "/en/blog/headaches-migraines-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-describes-stretching", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractors-help-range-motion", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractic-pregnancy", destination: "/en/services/pregnancy-chiropractor", permanent: true },
      { source: "/blog/chiropractic-treatment-car-accidents", destination: "/en/blog/san-antonio-chiropractor-car-accident", permanent: true },
      { source: "/blog/chiropractors-extensive-schooling", destination: "/en/blog/what-does-a-chiropractor-do", permanent: true },
      { source: "/blog/chiropractor-talks-headaches", destination: "/en/blog/headaches-migraines-chiropractor-san-antonio", permanent: true },
      { source: "/blog/athletes-improve-chiropractic-care", destination: "/en/conditions/sports-injury", permanent: true },
      { source: "/blog/achieve-healthier-spine", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-talks-wellness-care", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/sciatic-leg-pain", destination: "/en/blog/sciatica-chiropractor-san-antonio", permanent: true },
      { source: "/blog/time-improve-health", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/3-common-conditions-chiropractors-help", destination: "/en/blog/conditions-we-treat", permanent: true },
      { source: "/blog/car-accident-tips-chiropractor", destination: "/en/blog/san-antonio-chiropractor-car-accident", permanent: true },
      { source: "/blog/sitting-epidemic", destination: "/en/conditions/text-neck", permanent: true },
      { source: "/blog/looking-top-chiropractor", destination: "/en/blog/why-go-to-a-chiropractor-san-antonio", permanent: true },
      { source: "/blog/exercise-smarter", destination: "/en/blog/wellness-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-explains-avoid-back-injuries", destination: "/en/blog/back-pain-chiropractor-san-antonio", permanent: true },
      { source: "/blog/chiropractor-discusses-proper-child-backpacks", destination: "/en/blog/backpack-safety-kids-spine-san-antonio", permanent: true },
      { source: "/blog/just-back-pain", destination: "/en/blog/back-pain-chiropractor-san-antonio", permanent: true },
      { source: "/blog/back-pain-tips-chiropractor", destination: "/en/blog/back-pain-chiropractor-san-antonio", permanent: true },

      // ── Original WordPress URL redirects (high SEO authority) ──
      // These were the top-ranking pages on the old WordPress site at
      // puravidasanantonio.com before the Doctible takeover. Google still
      // tries to send organic traffic to these URLs; without redirects they
      // 404 and Google drops them from the index. 301s reclaim the SEO equity.
      { source: "/cranial-chiropractor", destination: "/en/services/sot-chiropractic", permanent: true },
      { source: "/pura-vida-quiropractica", destination: "/es", permanent: true },
      { source: "/meet-dr-foss", destination: "/en/about", permanent: true },
      { source: "/hernia-hiatal-y-la-quiropractica", destination: "/es/blog/hernia-hiatal-y-la-quiropractica", permanent: true },
      { source: "/about-pura-vida", destination: "/en/about", permanent: true },
      { source: "/prenatal-chiropractor", destination: "/en/services/prenatal-chiropractor", permanent: true },
      { source: "/tongue-tie-and-chiropractic", destination: "/en/conditions/tongue-tie", permanent: true },
      { source: "/videos", destination: "/en/videos", permanent: true },
      { source: "/mission-trips", destination: "/en/mission", permanent: true },
      { source: "/trigeminal-neuralgia-and-chiropractic", destination: "/en/conditions", permanent: true },
      { source: "/radiografias", destination: "/es/blog/radiografias", permanent: true },
      { source: "/initial-visit", destination: "/en/new-patient", permanent: true },
      { source: "/san-antonio-chiropractor-car-accident", destination: "/en/services/auto-injury", permanent: true },
      { source: "/chiropractic-blog", destination: "/en/blog", permanent: true },
      { source: "/terms-conditions", destination: "/en/terms", permanent: true },
      { source: "/quiropractica-en-ninos", destination: "/es/services/quiropractico-pediatrico", permanent: true },
      { source: "/chiropractic-faq", destination: "/en/faq", permanent: true },
      { source: "/new-patient-forms", destination: "/en/new-patient", permanent: true },
      { source: "/asthma-and-chiropractic", destination: "/en", permanent: true },
      { source: "/pura-vida-chiropractic-cuestionario-spanish", destination: "/es/contact", permanent: true },
      { source: "/care-chiropractic", destination: "/en/services/chiropractic-care", permanent: true },
      { source: "/mi-batalla-en-esta-crisis-economica", destination: "/es/blog/mi-batalla-en-esta-crisis-economica", permanent: true },
      { source: "/neck-pain-and-chiropractic-care", destination: "/en/conditions/neck-pain", permanent: true },
      { source: "/quiropratico-san-antonio", destination: "/es/quiropratico-san-antonio", permanent: true },
      { source: "/sports-chiropractor-near-me", destination: "/en/sports-chiropractic", permanent: true },

      // ── Old WordPress media (PDFs / images that Google still indexed) ──
      // Send broken WP /wp-content/uploads paths to the most relevant page so
      // Google can update its index instead of seeing 404s.
      { source: "/wp-content/uploads/:year*/:month*/Pura_Infante_Espanol_Intake.pdf", destination: "/en/new-patient", permanent: true },
      { source: "/wp-content/uploads/:year*/:month*/New-Member-Paperwork-Oct-2015.pdf", destination: "/en/new-patient", permanent: true },
      { source: "/wp-content/uploads/:path*", destination: "/en", permanent: true },

      // ── Spanish-slug landing pages: redirect /en variants to /es ──
      // These pages have Spanish slugs ("el-mejor-quiropractico", "quiropratico",
      // "san-antonio-quiropractico") and Spanish content. They should only live
      // under /es. /en variants are wrong-locale and currently 404 / dead-end.
      { source: "/en/el-mejor-quiropractico-san-antonio", destination: "/es/el-mejor-quiropractico-san-antonio", permanent: true },
      { source: "/en/quiropratico-san-antonio",           destination: "/es/quiropratico-san-antonio",           permanent: true },
      { source: "/en/san-antonio-quiropractico",          destination: "/es/san-antonio-quiropractico",          permanent: true },

      // ── Canonical consolidation: collapse duplicate English service slugs ──
      // The services route has multiple slugs that point to the same content
      // (e.g. /services/pediatric-chiropractor + /services/pediatric-chiropractic).
      // This splits SEO signal across variants. Pick one canonical slug per
      // service and 301 the others. Spanish duplicates redirect to the Spanish
      // canonical slug.
      { source: "/en/services/pediatric-chiropractic",     destination: "/en/services/pediatric-chiropractor",   permanent: true },
      { source: "/es/services/pediatric-chiropractic",     destination: "/es/services/quiropractico-pediatrico", permanent: true },
      { source: "/en/services/infant-chiropractic",        destination: "/en/services/infants-chiropractic",     permanent: true },
      { source: "/es/services/infant-chiropractic",        destination: "/es/services/quiropractico-infantes",   permanent: true },
      { source: "/en/services/pregnancy-chiropractic",     destination: "/en/services/pregnancy-chiropractor",   permanent: true },
      { source: "/es/services/pregnancy-chiropractic",     destination: "/es/services/quiropractico-embarazo",   permanent: true },
      { source: "/en/services/auto-injury-chiropractic",   destination: "/en/services/auto-injury",              permanent: true },
      { source: "/es/services/auto-injury-chiropractic",   destination: "/es/services/lesiones-de-auto",         permanent: true },
      { source: "/en/services/cranial-chiropractic",       destination: "/en/services/sot-chiropractic",         permanent: true },
      { source: "/es/services/cranial-chiropractic",       destination: "/es/services/quiropractica-sot",        permanent: true },

      // ── Cross-locale service slug redirects ──
      // 10 services use different slugs in EN vs ES; if a user lands on the
      // wrong-locale slug (e.g. /es/services/sot-chiropractic), redirect them
      // to the correct slug in their current locale. Permanent so search
      // engines consolidate signals on the canonical URL per locale.
      { source: "/es/services/sot-chiropractic", destination: "/es/services/quiropractica-sot", permanent: true },
      { source: "/en/services/quiropractica-sot", destination: "/en/services/sot-chiropractic", permanent: true },
      { source: "/es/services/softwave-therapy", destination: "/es/services/terapia-softwave", permanent: true },
      { source: "/en/services/terapia-softwave", destination: "/en/services/softwave-therapy", permanent: true },
      { source: "/es/services/auto-injury", destination: "/es/services/lesiones-de-auto", permanent: true },
      { source: "/en/services/lesiones-de-auto", destination: "/en/services/auto-injury", permanent: true },
      { source: "/es/services/pediatric-chiropractor", destination: "/es/services/quiropractico-pediatrico", permanent: true },
      { source: "/en/services/quiropractico-pediatrico", destination: "/en/services/pediatric-chiropractor", permanent: true },
      { source: "/es/services/prenatal-chiropractor", destination: "/es/services/quiropractico-prenatal", permanent: true },
      { source: "/en/services/quiropractico-prenatal", destination: "/en/services/prenatal-chiropractor", permanent: true },
      { source: "/es/services/pregnancy-chiropractor", destination: "/es/services/quiropractico-embarazo", permanent: true },
      { source: "/en/services/quiropractico-embarazo", destination: "/en/services/pregnancy-chiropractor", permanent: true },
      { source: "/es/services/infants-chiropractic", destination: "/es/services/quiropractico-infantes", permanent: true },
      { source: "/en/services/quiropractico-infantes", destination: "/en/services/infants-chiropractic", permanent: true },
      { source: "/es/services/pediatric-prenatal", destination: "/es/services/quiropractica-pediatrica", permanent: true },
      { source: "/en/services/quiropractica-pediatrica", destination: "/en/services/pediatric-prenatal", permanent: true },
      { source: "/es/services/shockwave-therapy", destination: "/es/services/terapia-ondas-de-choque", permanent: true },
      { source: "/en/services/terapia-ondas-de-choque", destination: "/en/services/shockwave-therapy", permanent: true },
      { source: "/es/services/class-iv-laser", destination: "/es/services/laser-clase-iv", permanent: true },
      { source: "/en/services/laser-clase-iv", destination: "/en/services/class-iv-laser", permanent: true },

    ];
  },
};

export default nextConfig;
