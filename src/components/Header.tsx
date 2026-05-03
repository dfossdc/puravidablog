import Link from "next/link";
import Image from "next/image";
import TopBar from "./TopBar";
import UrgencyBar from "./UrgencyBar";
import MobileNav from "./MobileNav";
import styles from "./Header.module.css";

interface HeaderProps {
  locale: "en" | "es";
  /**
   * Slug of the current blog post, in the CURRENT locale. Used as a fallback
   * for the language-switcher when `translatedSlug` is not provided. Note: if
   * the other locale's slug differs from this one (which it usually does for
   * paired EN/ES posts), the switcher will hit a wrong-locale URL and trigger
   * the runtime safety-net redirect — emitting a 308 that Semrush flags as
   * an extra hop. ALWAYS pass `translatedSlug` when available.
   */
  currentSlug?: string;
  /**
   * Slug of the SAME post in the OTHER locale. When set, the language
   * switcher links directly to this slug — no wrong-locale redirect needed.
   * If unset on a paired post the switcher falls back to `currentSlug`; if
   * unset and the post has no other-locale counterpart at all, the switcher
   * routes to `/[other-locale]/blog` so users at least land on a real page.
   */
  translatedSlug?: string;
  currentPath?: string;
}

const aboutLinks = {
  en: [
    { label: "About Dr. Dan Foss", href: "/about" },
    { label: "Mission Trips",        href: "/mission" },
    { label: "Testimonials",         href: "/testimonials" },
    { label: "Blog",                 href: "/blog" },
  ],
  es: [
    { label: "Sobre el Dr. Dan Foss", href: "/about" },
    { label: "Misiones Médicas",      href: "/mission" },
    { label: "Testimonios",           href: "/testimonials" },
    { label: "Blog",                  href: "/blog" },
  ],
};

const patientLinks = {
  en: [
    { label: "New Patient / Initial Visit", href: "/new-patient" },
    { label: "Patient Forms",               href: "/new-patient#forms" },
    { label: "Chiropractic FAQs",           href: "/faq" },
    { label: "For Providers (Referrals)",   href: "/provider-referral" },
    { label: "Contact Us",                  href: "/contact" },
  ],
  es: [
    { label: "Nuevo Paciente / Primera Visita", href: "/new-patient" },
    { label: "Formularios de Paciente",         href: "/new-patient#forms" },
    { label: "Preguntas Frecuentes",            href: "/faq" },
    { label: "Para Profesionales (Referidos)",  href: "/provider-referral" },
    { label: "Contáctenos",                     href: "/contact" },
  ],
};

const serviceLinks = {
  en: [
    { label: "Chiropractic Care",        href: "/services/chiropractic-care" },
    { label: "SOT Chiropractic",         href: "/services/sot-chiropractic" },
    { label: "CMRT Organ Adjusting",     href: "/blog/cmrt-organ-adjusting" },
    { label: "Cranial Adjusting (SOT)",  href: "/blog/cranial-adjusting-san-antonio" },
    { label: "Pediatric Chiropractor",   href: "/services/pediatric-chiropractor" },
    { label: "Prenatal Chiropractor",    href: "/services/prenatal-chiropractor" },
    { label: "Pregnancy Chiropractor",   href: "/services/pregnancy-chiropractor" },
    { label: "Infants & Chiropractic",   href: "/services/infants-chiropractic" },
    { label: "Auto Injury",              href: "/services/auto-injury" },
    { label: "SoftWave Therapy",         href: "/services/softwave-therapy" },
    { label: "Shockwave Therapy",        href: "/services/shockwave-therapy" },
    { label: "Class IV Laser",           href: "/services/class-iv-laser" },
    { label: "Sports Chiropractic",      href: "/sports-chiropractic" },
    { label: "Wellness Care",            href: "/services/wellness-care" },
    { label: "Latino Community",         href: "/services/latino-community" },
  ],
  es: [
    { label: "Cuidado Quiropráctico",         href: "/services/chiropractic-care" },
    { label: "Quiropráctica SOT",             href: "/services/quiropractica-sot" },
    { label: "Ajuste de Órganos (CMRT)",      href: "/blog/cmrt-organ-adjusting" },
    { label: "Ajuste Craneal (SOT)",          href: "/blog/cranial-adjusting-san-antonio" },
    { label: "Quiropráctico Pediátrico",      href: "/services/quiropractico-pediatrico" },
    { label: "Quiropráctico Prenatal",        href: "/services/quiropractico-prenatal" },
    { label: "Quiropráctica para Embarazo",   href: "/services/quiropractico-embarazo" },
    { label: "Quiropráctica para Bebés",      href: "/services/quiropractico-infantes" },
    { label: "Lesiones de Auto",              href: "/services/lesiones-de-auto" },
    { label: "Terapia SoftWave",              href: "/services/terapia-softwave" },
    { label: "Terapia de Ondas de Choque",    href: "/services/terapia-ondas-de-choque" },
    { label: "Láser Clase IV",                href: "/services/laser-clase-iv" },
    { label: "Quiropráctica Deportiva",       href: "/sports-chiropractic" },
    { label: "Cuidado de Bienestar",          href: "/services/wellness-care" },
    { label: "Comunidad Latina",              href: "/services/latino-community" },
  ],
};

const sotLinks = {
  en: [
    { label: "What is SOT?",              href: "/sot" },
    { label: "SOT FAQ",                   href: "/sot/faq" },
    { label: "SORSI Lineage",             href: "/sot/sorsi" },
    { label: "SOT Indicators",            href: "/sot/indicators" },
    { label: "Research & Evidence",       href: "/sot/research" },
    { label: "Is Chiropractic Safe?",     href: "/sot/safety" },
    { label: "Technic vs Technique",      href: "/sot/technic-vs-technique" },
    { label: "Free SOT Guide",            href: "/sot/free-guide" },
  ],
  es: [
    { label: "¿Qué es SOT?",              href: "/sot" },
    { label: "Preguntas Frecuentes SOT",  href: "/sot/faq" },
    { label: "Linaje SORSI",              href: "/sot/sorsi" },
    { label: "Indicadores SOT",           href: "/sot/indicators" },
    { label: "Investigación y Evidencia", href: "/sot/research" },
    { label: "¿Es Segura la Quiropráctica?", href: "/sot/safety" },
    { label: "Technic vs Technique",      href: "/sot/technic-vs-technique" },
    { label: "Guía Gratuita SOT",         href: "/sot/free-guide" },
  ],
};

const conditionLinks = {
  en: [
    { label: "Back Pain",              href: "/conditions/lower-back-pain" },
    { label: "Neck Pain",              href: "/conditions/neck-pain" },
    { label: "Sciatica",               href: "/conditions/sciatica" },
    { label: "Headaches & Migraines",  href: "/conditions/headaches" },
    { label: "Auto Accident Injuries", href: "/conditions/auto-accident-injuries" },
    { label: "Disc Problems",          href: "/conditions/disc-problems" },
    { label: "Scoliosis",              href: "/conditions/scoliosis" },
    { label: "Fibromyalgia",           href: "/conditions/fibromyalgia" },
    { label: "TMJ",                    href: "/conditions/tmj-jaw-pain" },
    { label: "Neuropathy",             href: "/conditions/neuropathy-numbness" },
    { label: "Knee Pain",              href: "/conditions/hip-knee-foot-ankle" },
    { label: "Shoulder Pain",          href: "/conditions/shoulder-arm-pain" },
    { label: "Hip Pain",               href: "/conditions/hip-knee-foot-ankle" },
    { label: "Plantar Fasciitis",      href: "/conditions/plantar-fasciitis" },
    { label: "All Conditions →",       href: "/conditions" },
  ],
  es: [
    { label: "Dolor de Espalda",           href: "/conditions/lower-back-pain" },
    { label: "Dolor de Cuello",            href: "/conditions/neck-pain" },
    { label: "Ciática",                    href: "/conditions/sciatica" },
    { label: "Dolores de Cabeza",          href: "/conditions/headaches" },
    { label: "Lesiones de Auto",           href: "/conditions/auto-accident-injuries" },
    { label: "Problemas de Disco",         href: "/conditions/disc-problems" },
    { label: "Escoliosis",                 href: "/conditions/scoliosis" },
    { label: "Fibromialgia",               href: "/conditions/fibromyalgia" },
    { label: "ATM / Mandíbula",            href: "/conditions/tmj-jaw-pain" },
    { label: "Neuropatía",                 href: "/conditions/neuropathy-numbness" },
    { label: "Dolor de Rodilla",           href: "/conditions/hip-knee-foot-ankle" },
    { label: "Dolor de Hombro",            href: "/conditions/shoulder-arm-pain" },
    { label: "Dolor de Cadera",            href: "/conditions/hip-knee-foot-ankle" },
    { label: "Fascitis Plantar",           href: "/conditions/plantar-fasciitis" },
    { label: "Ver Todas las Condiciones →", href: "/conditions" },
  ],
};

export default function Header({ locale: rawLocale, currentSlug, translatedSlug, currentPath }: HeaderProps) {
  const locale: "en" | "es" = rawLocale === "es" ? "es" : "en";
  const otherLocale = locale === "en" ? "es" : "en";

  // Build the language-switcher destination. Priority:
  //   1. translatedSlug — direct, no redirect (best — eliminates 307/308)
  //   2. currentSlug    — same slug at other locale; safety net 308s if absent
  //   3. currentPath    — non-blog pages; same path under other locale
  //   4. /[locale]      — final fallback to homepage
  // Semrush issue #109 flagged 899 temporary redirects from language-switch
  // links that ignored translatedSlug. Always pass translatedSlug from blog
  // pages where post.translatedSlug is set.
  let langHref: string;
  if (translatedSlug) {
    langHref = `/${otherLocale}/blog/${translatedSlug}`;
  } else if (currentSlug) {
    langHref = `/${otherLocale}/blog/${currentSlug}`;
  } else if (currentPath !== undefined) {
    langHref = `/${otherLocale}${currentPath}`;
  } else {
    langHref = `/${otherLocale}`;
  }

  return (
    <>
      {/* ── Urgency Phone Bar (red) ── */}
      <UrgencyBar locale={locale} />

      {/* ── Top Utility Bar ── */}
      <TopBar locale={locale} />

      {/* ── Announcement Bar ── */}
      <div className={styles.announcementBar}>
        <div className={styles.annInner}>
          <p className={styles.annLeft}>
            {locale === "en"
              ? <>There is No Risk to see what we can do for you —{" "}
                  <a href={`/${locale}/book-now`} target="_blank" rel="noopener noreferrer" className={styles.annLink}>
                    New Patient Special Offer →
                  </a>
                </>
              : <>No hay riesgo en ver lo que podemos hacer por usted —{" "}
                  <a href={`/${locale}/book-now`} target="_blank" rel="noopener noreferrer" className={styles.annLink}>
                    Oferta Especial →
                  </a>
                </>
            }
          </p>
          <div className={styles.annRight}>
            <span className={styles.annSpanish}>¡Hablamos Español!</span>
            {/* Locale flags. Each flag points either at the OTHER-locale
                equivalent of the current page (when the user is switching
                locales) or at the current-locale homepage (when clicking the
                already-active flag). Previously this used
                `langHref.replace("es", "en")` for the EN flag while on ES —
                which broke catastrophically because String.replace finds the
                FIRST "es" in the string, and many Spanish slugs contain "es"
                inside words (espalda, pulmones, tiroides, sesiones,
                espasmos, escoliosis...). The replace turned
                `/en/blog/dolor-de-espalda-...` into `/en/blog/dolor-de-enpalda-...`
                Semrush issue #2 traced 178 4XX errors to this exact pattern. */}
            <Link href={locale === "es" ? langHref : "/en"} className={`${styles.annLang} ${locale === "en" ? styles.annLangActive : ""}`}>
              🇺🇸 EN
            </Link>
            <span className={styles.annSep}>|</span>
            <Link href={locale === "en" ? langHref : "/es"} className={`${styles.annLang} ${locale === "es" ? styles.annLangActive : ""}`}>
              🇲🇽 ES
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Mobile drawer trigger + drawer (renders fixed-position; sits next
              to brand on small screens, hidden on desktop). */}
          <MobileNav locale={locale} langHref={langHref} />

          <Link
            href={`/${locale}`}
            className={styles.brand}
            aria-label={locale === "es" ? "Pura Vida Chiropractic — Inicio" : "Pura Vida Chiropractic — Home"}
            title="Pura Vida Chiropractic — San Antonio, TX"
          >
            <Image
              src="/images/puravidalogo.png"
              alt="Pura Vida Chiropractic"
              width={800}
              height={240}
              className={styles.logo}
              priority
              sizes="(max-width: 768px) 280px, 500px"
            />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>

              {/* Home */}
              <li>
                <Link href={`/${locale}`} className={styles.navLink}>
                  {locale === "en" ? "Home" : "Inicio"}
                </Link>
              </li>

              {/* About — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "About" : "Nosotros"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={styles.dropMenu}>
                  {aboutLinks[locale].map((item) => (
                    <li key={item.href}>
                      <Link href={`/${locale}${item.href}`} className={styles.dropItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Services — dropdown wide */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "Services" : "Servicios"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={`${styles.dropMenu} ${styles.dropMenuWide}`}>
                  {serviceLinks[locale].map((s) => (
                    <li key={s.href}>
                      <Link href={`/${locale}${s.href}`} className={styles.dropItem}>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* SOT — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  SOT
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={styles.dropMenu}>
                  {sotLinks[locale].map((item) => (
                    <li key={item.href}>
                      <Link href={`/${locale}${item.href}`} className={styles.dropItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Conditions — dropdown wide */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "Conditions" : "Condiciones"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={`${styles.dropMenu} ${styles.dropMenuWide}`}>
                  {conditionLinks[locale].map((c) => (
                    <li key={c.href}>
                      <Link href={`/${locale}${c.href}`} className={styles.dropItem}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Patients — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "Patients" : "Pacientes"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={styles.dropMenu}>
                  {patientLinks[locale].map((item) => (
                    <li key={item.href}>
                      <Link href={`/${locale}${item.href}`} className={styles.dropItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Blog */}
              <li>
                <Link href={`/${locale}/blog`} className={styles.navLink}>
                  Blog
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link href={`/${locale}/contact`} className={styles.navLink}>
                  {locale === "en" ? "Contact" : "Contacto"}
                </Link>
              </li>

            </ul>

            <div className={styles.navActions}>
              <a href="tel:+12106851994" className={styles.headerPhone}>
                (210) 685-1994
              </a>
              <a
                href={`/${locale}/book-now`}
                className={styles.cta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "en" ? "Free Consultation" : "Consulta Gratis"}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
