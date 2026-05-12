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
      { source: "/el-mejor-quiropractico-san-antonio", destination: "/es/el-mejor-quiropractico-san-antonio", permanent: true },
      { source: "/auto-injury-chiropractor", destination: "/en/services/auto-injury", permanent: true },
      { source: "/san-antonio-quiropractico", destination: "/es/san-antonio-quiropractico", permanent: true },
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
      // ---- Legacy fallback redirects ----
      // meet-dr-foss and office-hours used to 404 on Vercel before commit
      // ea3dc15 (2026-04-30) shipped the actual route files. The redirects to
      // /about and /contact were a stop-gap and were never removed when the
      // pages went live — Google has been seeing the rich pages as "Page with
      // redirect" since then. Removed 2026-05-08 so the real pages serve.
      // /privacy-policy → /privacy stays: both are noindex and /privacy is
      // the canonical legal page used across the site.
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
      // /videos page removed pending real YouTube content (was showing
      // placeholder Rickrolls). Redirect all variants to the homepage
      // until we re-launch with actual Pura Vida videos.
      { source: "/videos", destination: "/en", permanent: true },
      { source: "/en/videos", destination: "/en", permanent: true },
      { source: "/es/videos", destination: "/es", permanent: true },
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
      { source: "/en/quiropractico-cerca-de-mi-san-antonio", destination: "/es/quiropractico-cerca-de-mi-san-antonio", permanent: true },
      { source: "/en/quiropractico-para-migranas-san-antonio", destination: "/es/quiropractico-para-migranas-san-antonio", permanent: true },
      { source: "/en/quiropractico-dolor-de-cabeza-san-antonio", destination: "/es/quiropractico-dolor-de-cabeza-san-antonio", permanent: true },
      { source: "/en/quiropractico-escoliosis-san-antonio", destination: "/es/quiropractico-escoliosis-san-antonio", permanent: true },
      { source: "/en/quiropractico-postparto-san-antonio", destination: "/es/quiropractico-postparto-san-antonio", permanent: true },
      { source: "/en/quiropractico-craneal-san-antonio", destination: "/es/quiropractico-craneal-san-antonio", permanent: true },
      { source: "/en/que-es-un-quiropractico", destination: "/es/que-es-un-quiropractico", permanent: true },
      { source: "/en/huesero-san-antonio", destination: "/es/huesero-san-antonio", permanent: true },

      // ── /es/{english-slug} → /es/{spanish-slug} for paired EN<>ES landing pages ──
      // The 6 EN landing pages (chiropractor-near-me, best-chiropractor, migraine,
      // headache, scoliosis, postpartum) have Spanish counterparts at Spanish-language
      // slugs. A user/crawler arriving at /es/{english-slug} is asking for the
      // Spanish version — send them to the actual Spanish-slug page that already
      // exists. Closes the 'orphaned in sitemap' notice + provides a clean UX.
      { source: "/es/migraine-chiropractor-san-antonio",     destination: "/es/quiropractico-para-migranas-san-antonio",  permanent: true },
      { source: "/es/headache-chiropractor-san-antonio",     destination: "/es/quiropractico-dolor-de-cabeza-san-antonio", permanent: true },
      { source: "/es/scoliosis-chiropractor-san-antonio",    destination: "/es/quiropractico-escoliosis-san-antonio",      permanent: true },
      { source: "/es/postpartum-chiropractor-san-antonio",   destination: "/es/quiropractico-postparto-san-antonio",       permanent: true },
      { source: "/es/quiropractico-posparto-san-antonio",    destination: "/es/quiropractico-postparto-san-antonio",       permanent: true },
      { source: "/es/cranial-chiropractor-san-antonio",      destination: "/es/quiropractico-craneal-san-antonio",         permanent: true },
      { source: "/es/best-chiropractor-san-antonio",         destination: "/es/el-mejor-quiropractico-san-antonio",        permanent: true },
      { source: "/es/chiropractor-near-me-san-antonio",      destination: "/es/quiropractico-cerca-de-mi-san-antonio",     permanent: true },

      // ── External backlink typo redirects ──
      // External sites have linked to us with misspelled slugs. Without these
      // redirects, those links 404 and we lose the backlink equity. Add new
      // entries here as Semrush surfaces them.
      // "deprenion" should be "depresion" (Spanish for "depression")
      { source: "/en/blog/ansiedad-deprenion-quiropractico-san-antonio", destination: "/es/blog/ansiedad-depresion-quiropractico-san-antonio", permanent: true },
      { source: "/es/blog/ansiedad-deprenion-quiropractico-san-antonio", destination: "/es/blog/ansiedad-depresion-quiropractico-san-antonio", permanent: true },
      // GSC 404 fixes (5/8/26): Spanish slugs accidentally linked under /en/
      // and/or with typos. Both target real /es/blog/ posts.
      // "que-en-cmrt" should be "que-es-cmrt" (typo: en→es)
      { source: "/en/blog/que-en-cmrt-quiropractica-visceral-san-antonio", destination: "/es/blog/que-es-cmrt-quiropractica-visceral-san-antonio", permanent: true },
      // "procenamiento" should be "procesamiento" (typo) + locale fix /en/→/es/
      { source: "/en/blog/trastorno-procenamiento-sensorial-quiropractica-san-antonio", destination: "/es/blog/trastorno-procesamiento-sensorial-quiropractica-san-antonio", permanent: true },
      { source: "/es/blog/trastorno-procenamiento-sensorial-quiropractica-san-antonio", destination: "/es/blog/trastorno-procesamiento-sensorial-quiropractica-san-antonio", permanent: true },

      // ── ILLEGAL "Que Acepta Medicaid" posts: HARD redirect to insurance page ──
      // Per Dr. Foss compliance directive: "it is illegal to say that we accept
      // insurance or medicaid or medicare because we don't those gotta go".
      // The markdown files were deleted in commit 10961a0, but Semrush issue #6
      // still shows these 2 URLs serving the illegal title (cached crawl from
      // before the unpushed commits land). Hard 301 redirects ensure that
      // immediately on deploy these URLs go to safe content, even if Vercel
      // caching takes a moment to drop the deleted page from edge cache. Also
      // catches any external backlinks that might have pointed at these URLs.
      { source: "/en/blog/quiropractico-medicaid-san-antonio", destination: "/en/blog", permanent: true },
      { source: "/es/blog/quiropractico-medicaid-san-antonio", destination: "/es/blog", permanent: true },
      { source: "/en/blog/quiropractico-que-aceptan-medicaid", destination: "/en/blog", permanent: true },
      { source: "/es/blog/quiropractico-que-aceptan-medicaid", destination: "/es/blog", permanent: true },

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

      // ── Semrush 4XX broken-link fixes (May 2026 audit) ──
      // Old short-slug variants flagged as 404. The actual posts exist under
      // longer descriptive slugs in /content/posts/. These 301s reclaim the
      // SEO equity from external backlinks pointing at the old short URLs.
      { source: "/en/blog/cranial-rhythmic-impulse", destination: "/en/blog/cranial-rhythmic-impulse-what-it-is-why-it-matters", permanent: true },
      { source: "/en/blog/dejarnette-story", destination: "/en/blog/dejarnette-history-story-behind-sot-chiropractic", permanent: true },
      { source: "/en/blog/sot-blocks", destination: "/en/blog/what-are-sot-blocks-how-do-they-work", permanent: true },
      { source: "/en/blog/what-is-cmrt", destination: "/en/blog/what-is-cmrt-the-chiropractic-technique-that-adjusts-organs", permanent: true },
      { source: "/en/blog/sot-categories", destination: "/en/blog/sot-category-i-ii-iii-what-your-doctor-means", permanent: true },
      { source: "/en/blog/infantreflux", destination: "/en/blog/infant-reflux-cmrt-chiropractic-san-antonio", permanent: true },
      { source: "/en/blog/conditions/infantreflux", destination: "/en/blog/infant-reflux-cmrt-chiropractic-san-antonio", permanent: true },

      // ── /posts/* → /blog/* (legacy URL pattern) ──
      // Some external links and internal references used /posts/ instead of
      // /blog/. Same slug on both sides — straight 301 to the canonical /blog/ path.
      { source: "/en/posts/:slug*", destination: "/en/blog/:slug*", permanent: true },
      { source: "/es/posts/:slug*", destination: "/es/blog/:slug*", permanent: true },
      { source: "/posts/:slug*", destination: "/en/blog/:slug*", permanent: true },

      // ── Unprefixed legacy paths → /en/<type>/<slug> ──
      // Old WordPress URLs (and external backlinks) frequently used the bare
      // /conditions/X, /services/X, /blog/X, /sot/X form with no locale prefix.
      // Without these wildcards those URLs 404. GSC was reporting them in the
      // 'Not found (404)' bucket, blocking fix validation. Use :slug+ (one or
      // more) for the three with existing exact-match rules above; use :slug*
      // for /sot since there's no separate bare-/sot rule and we want both
      // /sot and /sot/X to redirect.
      { source: "/conditions/:slug+", destination: "/en/conditions/:slug+", permanent: true },
      { source: "/services/:slug+", destination: "/en/services/:slug+", permanent: true },
      { source: "/blog/:slug+", destination: "/en/blog/:slug+", permanent: true },
      { source: "/sot/:slug*", destination: "/en/sot/:slug*", permanent: true },

      // ── Typo fix: /en/sot/renearch → /en/sot/research ──
      // Google indexed a misspelled URL (likely from an old broken internal
      // link). Specific 301 to the correct page so the indexed URL doesn't
      // keep showing up in the 404 report.
      { source: "/en/sot/renearch", destination: "/en/sot/research", permanent: true },

      // ── Pages flagged 404 with no direct equivalent — send to closest topical match ──
      { source: "/en/blog/first-visit", destination: "/en/blog/first-chiropractic-visit-what-to-expect", permanent: true },
      { source: "/en/blog/sot-faq", destination: "/en/faq", permanent: true },
      { source: "/en/blog/sot-research", destination: "/en/services/sot-chiropractic", permanent: true },

      // ── ES short-slug → long-slug aliases (May 2026) ──
      // SOT pillar/faq/etc markdown content links to short Spanish slugs that
      // never existed as standalone files. Now backed by full ES translations
      // sitting at the longer descriptive slugs.
      { source: "/es/blog/primera-visita", destination: "/es/blog/primera-visita-quiropractico-que-esperar", permanent: true },
      { source: "/es/blog/que-es-cmrt", destination: "/es/blog/que-es-cmrt-quiropractica-visceral-san-antonio", permanent: true },
      { source: "/es/blog/impulso-ritmico-craneal", destination: "/es/blog/impulso-ritmico-craneal-que-es-por-que-importa", permanent: true },
      { source: "/es/blog/historia-dejarnette", destination: "/es/blog/historia-dejarnette-detras-de-quiropractica-sot", permanent: true },
      { source: "/es/blog/bloques-sot", destination: "/es/blog/que-son-los-bloques-sot-como-funcionan", permanent: true },
      { source: "/es/blog/categorias-sot", destination: "/es/blog/categorias-sot-i-ii-iii-que-significan", permanent: true },

      // ── Semrush 4XX cleanup — May 2026 audit, second pass ──
      // Stale URLs from external sources (old WP, sitemaps, Google index) with
      // no internal references on the current site. Redirect to closest
      // topical match instead of returning 404.
      { source: "/en/blog/athletic-performance-san-antonio",      destination: "/en/sports-chiropractic", permanent: true },
      { source: "/en/blog/cranial-adjusting-infants",             destination: "/en/blog/cranial-adjusting-san-antonio", permanent: true },
      { source: "/en/blog/golf-performance-san-antonio",          destination: "/en/sports-chiropractic", permanent: true },
      { source: "/en/blog/runners-knee-chiropractor-san-antonio", destination: "/en/sports-chiropractic", permanent: true },
      { source: "/en/blog/soft-tissue-injury-san-antonio",        destination: "/en/services/softwave-therapy", permanent: true },
      { source: "/en/blog/sports-injury",                         destination: "/en/sports-chiropractic", permanent: true },
      { source: "/en/blog/webster-technique-san-antonio",         destination: "/en/services/prenatal-chiropractor", permanent: true },
      { source: "/en/conditions/infantreflux",                    destination: "/en/conditions/infant-reflux", permanent: true },

      { source: "/es/blog/cuidado-prenatal",                              destination: "/es/services/quiropractico-prenatal", permanent: true },
      { source: "/es/blog/por-que-ir-quiropractico-san-antonio",          destination: "/es/blog/primera-visita-quiropractico-que-esperar", permanent: true },
      { source: "/es/blog/sistema-inmune-ninos-quiropractica-cmrt",       destination: "/es/blog/apoyo-inmunologico-quiropractico-san-antonio", permanent: true },
      { source: "/es/conditions/back-pain",                               destination: "/es/conditions/lower-back-pain", permanent: true },
      { source: "/es/conditions/headaches-migraines",                     destination: "/es/conditions/headaches", permanent: true },
      { source: "/es/conditions/pregnancy-chiropractic",                  destination: "/es/conditions/pregnancy-wellness", permanent: true },
      { source: "/es/conditions/sports-injuries",                         destination: "/es/conditions/sports-injury", permanent: true },

      // ── GSC May 2026: cross-locale slug fixes for posts indexed under wrong locale ──
      // Posts that exist in only one language but Google indexed the URL
      // under the other locale. Redirect to the correct-locale version.
      { source: "/en/blog/quiropractico-trabajadores-construccion-san-antonio",
        destination: "/es/blog/quiropractico-trabajadores-construccion-san-antonio", permanent: true },
      { source: "/en/blog/terapia-ondas-de-choque",
        destination: "/en/blog/shockwave-therapy", permanent: true },
      { source: "/es/blog/shockwave-therapy",
        destination: "/es/blog/terapia-ondas-de-choque", permanent: true },
      { source: "/es/blog/pediatric-prenatal",
        destination: "/es/services/quiropractica-pediatrica", permanent: true },

      // Old long WP URL still showing up in GSC after the .net cutover.
      // 5/8/26: Next.js strips trailing slash before matching, so the
      // /…/quiropractica/ rule never fired — replaced with no-slash exact +
      // wildcard catch-all for any other /about-pura-vida-chiropractic/* paths.
      { source: "/about-pura-vida-chiropractic/pura-vida-quiropractica",
        destination: "/es/about", permanent: true },
      { source: "/about-pura-vida-chiropractic/:path*",
        destination: "/en/about", permanent: true },

      // ── GSC May 2026: 'Crawled - currently not indexed' WP legacy URLs ──
      // Old WordPress URLs from the .net cutover that Google still crawls but
      // refuses to index because they 404 / get a soft-404 response. Map
      // each to the closest current page. Note Next redirects are
      // case-sensitive — list capitalized variants explicitly.
      { source: "/about-pura-vida/",                              destination: "/en/about",                          permanent: true },
      { source: "/About-Pura-Vida",                               destination: "/en/about",                          permanent: true },
      { source: "/About-Pura-Vida/",                              destination: "/en/about",                          permanent: true },
      { source: "/Pediatric-Chiropractor",                        destination: "/en/services/pediatric-chiropractor", permanent: true },
      { source: "/Pregnancy-Chiropractor/",                       destination: "/en/services/pregnancy-chiropractor", permanent: true },
      { source: "/new-patient-form/",                             destination: "/en/new-patient",                    permanent: true },
      { source: "/contact/",                                      destination: "/en/contact",                        permanent: true },
      { source: "/pura-vida-chiropractic-cuestionario-spanish/",  destination: "/es/new-patient",                    permanent: true },
      { source: "/chiropractic-faq",                              destination: "/en/faq",                            permanent: true },
      { source: "/es-mx/chiropractic-faq",                        destination: "/es/faq",                            permanent: true },
      { source: "/Auto-Injury-Chiropractor/",                     destination: "/en/services/auto-injury",           permanent: true },

      // ── GSC May 3 2026: 'Duplicate canonical' trailing-slash variants ──
      // The non-slash versions of these are already redirected (above).
      // Google indexed the slash forms separately and chose its own canonical.
      // Adding explicit slash variants so Google sees a clean 301 to the
      // proper /en/... destination.
      { source: "/cranial-chiropractor/", destination: "/en/services/sot-chiropractic", permanent: true },
      { source: "/chiropractic-care/",    destination: "/en/services/chiropractic-care", permanent: true },
      { source: "/chiropractic-blog/",    destination: "/en/blog", permanent: true },

      // ── GSC May 6 2026: 'Discovered/Crawled - not indexed' cleanup ──
      // /es/blog/neck-pain-and-chiropractic-care: GSC has this URL queued in
      // "Discovered - currently not indexed". The unprefixed legacy WP URL
      // /neck-pain-and-chiropractic-care already redirects to
      // /en/conditions/neck-pain (line 196) — but Google ALSO indexed a
      // /es/blog/-prefixed variant from somewhere (likely an old internal
      // link). Send the ES variant to its Spanish-content equivalent so we
      // preserve the locale signal AND the WP authority. The EN/blog/ path
      // is already handled by the bare /blog/:slug+ wildcard above.
      { source: "/es/blog/neck-pain-and-chiropractic-care", destination: "/es/conditions/neck-pain", permanent: true },

      // ── /es-mx/* → /es/* (Google indexed Mexican-Spanish locale variants) ──
      // GSC found /es-mx/videos in the "not in sitemap" bucket. The site
      // doesn't have a separate /es-mx locale — it's just /es. Google
      // probably picked this up from a hreflang misfire or an old structured-
      // data entry. Wildcard so any future /es-mx/* URL also gets handled.
      // Specific /es-mx/chiropractic-faq already exists above (line 396)
      // — this is a broader catchall that supersedes it; keeping the
      // specific one for documentation since Next picks the first match.
      { source: "/es-mx/:path+", destination: "/es/:path+", permanent: true },
      { source: "/es-mx",        destination: "/es",        permanent: true },

      // ── GSC May 6 2026: 'Server error (5xx)' fixes ──
      // All 6 5xx errors are old WordPress URL patterns where Google
      // appended a sub-path to a legitimate top-level slug:
      //   /about-pura-vida/conditions/shin-splints
      //   /about-pura-vida/conditions/chronic-fatigue-syndrome
      //   /radiografias/services/class-iv-laser
      //   /radiografias/services/sot-chiropractic
      //   /radiografias/conditions/tennis-elbow
      //   /radiografias/blog
      // Next.js routes these through [locale]/[catchall] with locale=
      // "about-pura-vida" or "radiografias" — neither is valid, and
      // the dynamic page handler crashes when it can't resolve.
      // Wildcards 301 them to the closest current page so Google replaces
      // the 5xx response with a clean redirect target.
      { source: "/en/about-pura-vida",       destination: "/en/about", permanent: true },
      { source: "/es/about-pura-vida",       destination: "/es/about", permanent: true },
      { source: "/about-pura-vida/:path+", destination: "/en/about", permanent: true },
      { source: "/radiografias/:path+",    destination: "/es/blog/radiografias", permanent: true },

      // ── GSC May 6 2026: 'Not found (404)' typo fixes ──
      // Two typo URLs Google has been crawling that don't match anything:
      //   /en/tentimonials   → typo of /en/testimonials
      //   /en/servicen/...   → typo of /en/services/... ("servicen" instead of "services")
      // Both 404 because the dynamic [locale]/[...] route can't resolve.
      // The 47 other 404 URLs in this bucket are either already covered by
      // existing wildcards (just awaiting Google's revalidation, which started
      // 5/5/26) or by the runtime wrong-locale safety net (commit 7b40df8).
      { source: "/en/tentimonials",                destination: "/en/testimonials",                  permanent: true },
      { source: "/en/servicen/:slug+",             destination: "/en/services/:slug+",               permanent: true },

      // ── GSC May 10 2026: 45 URLs still 404 after first validation ──
      // Sunday-night batch. Categorized by pattern:
      //   (1) Spanish slugs incorrectly indexed under /en/blog/
      //   (2) English slugs incorrectly indexed under /es/blog/
      //   (3) Missing /es/conditions/ pages — redirect to EN equivalent or index
      //   (4) Missing /en/conditions/ pages — redirect to conditions index
      //   (5) Blog post slugs that don't have markdown files — redirect to closest
      //   (6) Trailing-slash variant of /about-pura-vida-chiropractic/...
      //   (7) Misc typo cleanups
      // After deploy: click "Validate Fix" on the 404 bucket in GSC. Google
      // takes ~3-7 days to recrawl + revalidate.

      // (1) Spanish slugs incorrectly indexed under /en/blog/ → /es/blog/
      { source: "/en/blog/quiropractico-que-habla-espanol-san-antonio",
        destination: "/es/blog/quiropractico-que-habla-espanol-san-antonio", permanent: true },
      { source: "/en/blog/retraso-lenguaje-quiropractica-craneal-ninos-san-antonio",
        destination: "/es/blog/retraso-lenguaje-quiropractica-craneal-ninos-san-antonio", permanent: true },
      { source: "/en/blog/como-elegir-quiropractico",
        destination: "/es/blog/como-elegir-quiropractico", permanent: true },
      { source: "/en/blog/quiropractico-cerca-de-mi-san-antonio",
        destination: "/es/blog/quiropractico-cerca-de-mi-san-antonio", permanent: true },
      { source: "/en/blog/quiropractico-vs-fisioterapeuta",
        destination: "/es/blog/quiropractico-vs-fisioterapeuta", permanent: true },

      // (2) English slugs incorrectly indexed under /es/blog/ → /en/blog/
      { source: "/es/blog/x-rays-chiropractic-san-antonio",
        destination: "/en/blog/x-rays-chiropractic-san-antonio", permanent: true },

      // (3) Missing /es/conditions/ pages — redirect to EN equivalent (which exists)
      // or /es/conditions index where no EN counterpart is known to exist.
      { source: "/es/conditions/fibromyalgia",     destination: "/es/conditions", permanent: true },
      { source: "/es/conditions/dysmenorrhea",     destination: "/es/conditions", permanent: true },
      { source: "/es/conditions/sinus-congestion", destination: "/es/conditions", permanent: true },
      { source: "/es/conditions/vertigo",          destination: "/en/conditions/vertigo", permanent: true },
      { source: "/es/conditions/rib-subluxation",  destination: "/es/conditions", permanent: true },
      { source: "/es/conditions/tinnitus",         destination: "/es/conditions", permanent: true },

      // (4) Missing /en/conditions/ pages — redirect to conditions index
      { source: "/en/conditions/heel-spur",        destination: "/en/conditions", permanent: true },
      { source: "/en/conditions/insomnia",         destination: "/en/conditions", permanent: true },

      // (5) Blog post slugs that 404 — redirect to closest topical match
      { source: "/en/blog/herniated-disc-chiropractor-san-antonio",
        destination: "/en/conditions/disc-problems", permanent: true },
      { source: "/en/blog/shockwave-therapy",
        destination: "/en/services/shockwave-therapy", permanent: true },
      { source: "/en/blog/pediatric-prenatal",
        destination: "/en/services/prenatal-chiropractor", permanent: true },
      { source: "/es/blog/lesiones-de-auto",
        destination: "/es/services/lesiones-de-auto", permanent: true },
      { source: "/es/blog/mi-batalla-en-esta-crisis-economica",
        destination: "/es/blog", permanent: true },
      { source: "/es/blog/terapia-ondas-de-choque",
        destination: "/es/services/terapia-ondas-de-choque", permanent: true },

      // (6) Trailing-slash variant of /about-pura-vida-chiropractic/pura-vida-quiropractica
      // Even though Next.js strips trailing slash by default, GSC has the
      // slash-version cached separately. Explicit rule guarantees the match.
      { source: "/about-pura-vida-chiropractic/pura-vida-quiropractica/",
        destination: "/es/about", permanent: true },

      // (7) Misc typos
      { source: "/services/latino-communicy", destination: "/en/services", permanent: true },

    ];
  },

  // ── Performance: long cache lifetimes for fingerprinted static assets ──
  // PageSpeed flagged "Use efficient cache lifetimes — 96 KiB savings" on
  // mobile (2026-05-10). Vercel's defaults are decent but conservative.
  // Setting Cache-Control: public, max-age=31536000, immutable on filename-
  // hashed assets (Next.js bundles, images, fonts, CSS, JS) is safe because
  // those URLs change every deploy. For HTML pages we leave Vercel's defaults
  // alone — they need to revalidate so content changes show up.
  async headers() {
    return [
      {
        // Match any path ending in a static-asset extension. Catches
        // /_next/static/*, /images/*, /fonts/*, etc. without enumerating them.
        source: "/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|otf|css|js|map|mp4|webm)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Sitemap + RSS: cache for an hour. Long enough to reduce origin hits,
        // short enough that newly-published posts show up to crawlers same-day.
        source: "/(sitemap.xml|feed.xml|en/feed.xml|es/feed.xml|robots.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
