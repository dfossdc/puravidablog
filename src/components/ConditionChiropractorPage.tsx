import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./ConditionChiropractorPage.module.css";

const BASE_URL = "https://puravidasanantonio.com";

const PHONE_TEL = "tel:+12106851994";
const PHONE_DISPLAY = "(210) 685-1994";
const BOOK_URL = "https://puravidasanantonio.com/special/";
const OFFICE_ADDRESS = "2318 NW Military Hwy, Suite 103";
const OFFICE_CITY = "San Antonio, TX 78231";

// Drive times reused across all condition-chiropractor pages
const DISTANCES = [
  { name: "Stone Oak", time: "15 min", miles: "9 mi" },
  { name: "Alamo Heights", time: "10 min", miles: "5 mi" },
  { name: "Castle Hills", time: "5 min", miles: "2 mi" },
  { name: "Helotes", time: "15 min", miles: "8 mi" },
  { name: "Leon Valley", time: "10 min", miles: "5 mi" },
  { name: "Medical Center", time: "8 min", miles: "4 mi" },
  { name: "Boerne", time: "25 min", miles: "20 mi" },
  { name: "Schertz", time: "25 min", miles: "18 mi" },
];

export interface ConditionChiropractorContent {
  /** URL slug for this condition-chiropractor page (e.g. "migraine-chiropractor-san-antonio"). */
  slug: string;
  /** Existing /conditions/[slug] educational counterpart to cross-link to. */
  conditionSlug: string;
  /** Singular condition word ("migraine") for use in meta titles and H1. */
  condition: { en: string; es: string };
  /** Plural form ("migraines") for body copy that reads more naturally in plural. */
  conditionPlural: { en: string; es: string };
  /** Page H1 — should contain the target keyword exactly. */
  h1: { en: string; es: string };
  /** Page <title> — should be ~60 chars and contain target keyword. */
  metaTitle: { en: string; es: string };
  /** Meta description — 140-160 chars. */
  metaDescription: { en: string; es: string };
  /** 1-2 paragraph intro explaining who we are + why this condition. */
  intro: { en: string[]; es: string[] };
  /** 4-8 short bullet points: what makes our approach for this condition specific. */
  approach: { en: string[]; es: string[] };
  /** Question + answer pairs specific to this condition + chiropractic. */
  faqs: Array<{
    en: { q: string; a: string };
    es: { q: string; a: string };
  }>;
}

interface Props {
  params: Promise<{ locale: string }>;
  content: ConditionChiropractorContent;
}

/**
 * Generate the Next.js Metadata for a condition-chiropractor page.
 * Each route file calls this with its own content payload.
 */
export function buildConditionChiropractorMetadata(
  params: Promise<{ locale: string }>,
  content: ConditionChiropractorContent,
): Promise<Metadata> {
  return params.then(({ locale }) => {
    const isEs = locale === "es";
    const canonical = `${BASE_URL}/${locale}/${content.slug}`;
    return {
      title: isEs ? content.metaTitle.es : content.metaTitle.en,
      description: isEs ? content.metaDescription.es : content.metaDescription.en,
      alternates: {
        canonical,
        languages: {
          en: `${BASE_URL}/en/${content.slug}`,
          es: `${BASE_URL}/es/${content.slug}`,
          "x-default": `${BASE_URL}/en/${content.slug}`,
        },
      },
      openGraph: {
        title: isEs ? content.metaTitle.es : content.metaTitle.en,
        description: isEs ? content.metaDescription.es : content.metaDescription.en,
        url: canonical,
        locale: isEs ? "es_MX" : "en_US",
        type: "website",
      },
      robots: { index: true, follow: true },
    };
  });
}

export default async function ConditionChiropractorPage({ params, content }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/${content.slug}`;

  // Chiropractor LocalBusiness schema specific to this condition
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    description: isEs
      ? `Quiropráctico para ${content.conditionPlural.es} en San Antonio, TX. Atención bilingüe.`
      : `Chiropractor for ${content.conditionPlural.en} in San Antonio, TX. Bilingual care.`,
    image: `${BASE_URL}/images/dr-foss-adjusting-patient.webp`,
    url: canonical,
    telephone: "+12106851994",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_ADDRESS,
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78231",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 29.5447, longitude: -98.5394 },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+12106851994",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    knowsLanguage: ["en", "es"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "147",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "07:00", closes: "16:00" },
    ],
    priceRange: "$$",
  };

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => {
      const item = isEs ? f.es : f.en;
      return {
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      };
    }),
  };

  // BreadcrumbList schema — establishes hierarchy with the condition page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Condiciones" : "Conditions", item: `${BASE_URL}/${locale}/conditions` },
      { "@type": "ListItem", position: 3, name: isEs ? content.h1.es : content.h1.en, item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath={`/${content.slug}`} />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              Pura Vida Chiropractic · {OFFICE_ADDRESS} · {OFFICE_CITY}
            </p>
            <h1 className={styles.heroTitle}>{isEs ? content.h1.es : content.h1.en}</h1>
            <p className={styles.heroSub}>
              {(isEs ? content.intro.es : content.intro.en)[0]}
            </p>
            <div className={styles.heroActions}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href={PHONE_TEL} className={styles.heroPhone}>📞 {PHONE_DISPLAY}</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 4.9/5 Google</span>
              <span className={styles.badge}>147+ {isEs ? "reseñas" : "reviews"}</span>
              <span className={styles.badge}>{isEs ? "Bilingüe" : "Bilingual EN/ES"}</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
              <span className={styles.badge}>{isEs ? "Insurance Friendly" : "Insurance Friendly"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>

          {/* Intro paragraphs (after the first which is in the hero) */}
          {(isEs ? content.intro.es : content.intro.en).slice(1).length > 0 && (
            <section className={styles.section}>
              {(isEs ? content.intro.es : content.intro.en).slice(1).map((para, i) => (
                <p key={i} className={styles.p}>{para}</p>
              ))}
            </section>
          )}

          {/* Our approach for this condition */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? `Nuestro Enfoque para ${content.conditionPlural.es} en San Antonio`
                : `Our Approach to ${content.conditionPlural.en} in San Antonio`}
            </h2>
            <ul className={styles.checkList}>
              {(isEs ? content.approach.es : content.approach.en).map((item, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkMark}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Drive times */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Cerca de Usted en San Antonio" : "Close to You in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Tiempos típicos de manejo desde los principales vecindarios de San Antonio hasta nuestra oficina."
                : "Typical drive times from the main San Antonio neighborhoods to our office."}
            </p>
            <div className={styles.distanceGrid}>
              {DISTANCES.map((d) => (
                <div key={d.name} className={styles.distanceCard}>
                  <h3 className={styles.distanceName}>{d.name}</h3>
                  <p className={styles.distanceTime}>🚗 {d.time}</p>
                  <p className={styles.distanceMiles}>{d.miles}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NAP + Map */}
          <section className={styles.napSection}>
            <div className={styles.napInfo}>
              <h2 className={styles.h2}>{isEs ? "Información de Contacto" : "Contact Information"}</h2>
              <p className={styles.napAddress}>
                <strong>Pura Vida Chiropractic</strong><br />
                {OFFICE_ADDRESS}<br />
                {OFFICE_CITY}
              </p>
              <p className={styles.napPhone}>
                <strong>{isEs ? "Teléfono: " : "Phone: "}</strong>
                <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              </p>
              <p className={styles.napHours}>
                <strong>{isEs ? "Horario:" : "Hours:"}</strong><br />
                {isEs ? "Lunes, Martes, Jueves" : "Monday, Tuesday, Thursday"}: 7:00 AM – 4:00 PM<br />
                {isEs ? "Otros días" : "Other days"}: {isEs ? "Cerrado" : "Closed"}
              </p>
              <div className={styles.napActions}>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.napBtnPrimary}>
                  {isEs ? "Reservar Cita Gratuita" : "Book Free Appointment"}
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Pura+Vida+Chiropractic+San+Antonio+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.napBtnSecondary}
                >
                  {isEs ? "Cómo Llegar" : "Get Directions"}
                </a>
              </div>
            </div>
            <div className={styles.napMap}>
              <iframe
                title={isEs ? "Mapa de Pura Vida Chiropractic" : "Map of Pura Vida Chiropractic"}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Pura+Vida+Chiropractic,2318+NW+Military+Hwy,San+Antonio,TX+78231&zoom=14"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</h2>
            <div className={styles.faqList}>
              {content.faqs.map((f, i) => {
                const item = isEs ? f.es : f.en;
                return (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQ}>{item.q}</summary>
                    <p className={styles.faqA}>{item.a}</p>
                  </details>
                );
              })}
            </div>
          </section>

          {/* Cross-link to the educational condition page */}
          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Más Información" : "More Information"}</h2>
            <div className={styles.linkGrid}>
              <Link href={`/${locale}/conditions/${content.conditionSlug}`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>
                  {isEs
                    ? `Información Detallada sobre ${content.conditionPlural.es}`
                    : `Detailed Information About ${content.conditionPlural.en}`}
                </span>
              </Link>
              <Link href={`/${locale}/chiropractor-near-me-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>
                  {isEs ? "Quiropráctico Cerca de Mí en SA" : "Chiropractor Near Me in SA"}
                </span>
              </Link>
              <Link href={`/${locale}/best-chiropractor-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>
                  {isEs ? "El Mejor Quiropráctico en SA" : "Best Chiropractor in SA"}
                </span>
              </Link>
              <Link href={`/${locale}/services`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Todos Nuestros Servicios" : "All Our Services"}</span>
              </Link>
              <Link href={`/${locale}/conditions`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Las 90+ Condiciones que Tratamos" : "All 90+ Conditions We Treat"}</span>
              </Link>
              <Link href={`/${locale}/meet-dr-foss`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Conocer al Dr. Foss" : "Meet Dr. Foss"}</span>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? `Su Quiropráctico para ${content.conditionPlural.es} en San Antonio le Espera`
                : `Your ${content.condition.en} Chiropractor in San Antonio is Waiting`}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve una evaluación gratuita hoy. Sin compromiso. Atención bilingüe, técnicas avanzadas, 23+ años de experiencia."
                : "Book a free evaluation today. No commitment. Bilingual care, advanced techniques, 23+ years of experience."}
            </p>
            <div className={styles.ctaBtns}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href={PHONE_TEL} className={styles.ctaPhone}>📞 {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
