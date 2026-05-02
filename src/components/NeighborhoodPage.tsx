import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  neighborhoods,
  getNeighborhood,
} from "@/lib/neighborhoods";
import styles from "./NeighborhoodPage.module.css";

const BASE_URL = "https://puravidasanantonio.com";
const OFFICE_ADDRESS = "2318 NW Military Hwy, Suite 103";
const OFFICE_CITY = "San Antonio, TX 78231";
const PHONE_TEL = "tel:+12106851994";
const PHONE_DISPLAY = "(210) 685-1994";
const BOOK_URL = "https://puravidasanantonio.com/special/";

interface PageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Helper used by each /[locale]/{slug}-chiropractor/page.tsx to generate
 * its metadata. Pass the neighborhood slug.
 */
export async function generateNeighborhoodMetadata(
  params: Promise<{ locale: string }>,
  slug: string,
): Promise<Metadata> {
  const { locale } = await params;
  const data = getNeighborhood(slug);
  if (!data) return {};

  const isEs = locale === "es";
  const url = `${BASE_URL}/${locale}/${data.slug}-chiropractor`;

  return {
    title: isEs ? data.titleEs : data.title,
    description: isEs ? data.metaDescriptionEs : data.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en/${data.slug}-chiropractor`,
        es: `${BASE_URL}/es/${data.slug}-chiropractor`,
        "x-default": `${BASE_URL}/en/${data.slug}-chiropractor`,
      },
    },
    openGraph: {
      title: isEs ? data.titleEs : data.title,
      description: isEs ? data.metaDescriptionEs : data.metaDescription,
      url,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

interface NeighborhoodPageProps extends PageProps {
  slug: string;
}

export default async function NeighborhoodPage({
  params,
  slug,
}: NeighborhoodPageProps) {
  const { locale } = await params;
  const data = getNeighborhood(slug);
  if (!data) notFound();

  const isEs = locale === "es";
  const lc = (locale === "es" ? "es" : "en") as "en" | "es";

  // Local-business schema enriched with neighborhood-specific area-served data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    name: "Pura Vida Chiropractic",
    image: `${BASE_URL}/images/dr-foss-adjusting-patient.webp`,
    "@id": `${BASE_URL}/${locale}/${data.slug}-chiropractor`,
    url: `${BASE_URL}/${locale}/${data.slug}-chiropractor`,
    telephone: "+12106851994",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_ADDRESS,
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78231",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.lat,
      longitude: data.lng,
    },
    areaServed: [
      {
        "@type": "Place",
        name: data.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.name,
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      ...data.zipCodes.map((zip) => ({
        "@type": "PostalCodeSpecification",
        postalCode: zip,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    // medicalSpecialty removed — not a Schema.org MedicalSpecialty enum value.
    // Type + description already convey the chiropractic context.
    priceRange: "$$",
  };

  return (
    <>
      <Header locale={lc} currentPath={`/${data.slug}-chiropractor`} />
      <main className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>
              {isEs
                ? `Atendiendo ${data.nameEs}, San Antonio, TX`
                : `Serving ${data.name}, San Antonio, TX`}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? `Quiropráctico de Confianza para ${data.nameEs}`
                : `Trusted Chiropractor for ${data.name}`}
            </h1>
            <p className={styles.heroSub}>
              {isEs ? data.areaDescriptionEs : data.areaDescription}
            </p>
            <div className={styles.heroCtaGroup}>
              <a href={PHONE_TEL} className={styles.ctaPhone}>
                📞 {isEs ? `Llame: ${PHONE_DISPLAY}` : `Call ${PHONE_DISPLAY}`}
              </a>
              <a
                href={BOOK_URL}
                className={styles.ctaBook}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reserve Consulta Gratis →" : "Book Free Consultation →"}
              </a>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? `Por Qué los Residentes de ${data.nameEs} Eligen Pura Vida`
                : `Why ${data.name} Residents Choose Pura Vida`}
            </h2>
            <ul className={styles.reasonsList}>
              {(isEs ? data.whyChooseUsEs : data.whyChooseUs).map((r) => (
                <li key={r} className={styles.reasonItem}>
                  <span className={styles.reasonCheck}>✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Common conditions */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? `Condiciones que Tratamos para Pacientes de ${data.nameEs}`
                : `Conditions We Treat for ${data.name} Patients`}
            </h2>
            <p className={styles.sectionLead}>
              {isEs
                ? `Estos son los problemas más comunes que vemos en pacientes de ${data.nameEs}. Tratamos la causa raíz, no solo los síntomas.`
                : `These are the most common issues we see in patients from ${data.name}. We treat the root cause, not just the symptoms.`}
            </p>
            <div className={styles.conditionsGrid}>
              {data.commonConditions.map((c) => (
                <div key={c.en} className={styles.conditionCard}>
                  {isEs ? c.es : c.en}
                </div>
              ))}
            </div>
            <div className={styles.conditionsViewAllWrap}>
              <Link
                href={`/${locale}/conditions`}
                className={styles.viewAllLink}
              >
                {isEs ? "Ver Todas las 90+ Condiciones →" : "View All 90+ Conditions →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Location & directions */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.locationGrid}>
              <div>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                  {isEs
                    ? `Convenientemente Cerca de ${data.nameEs}`
                    : `Conveniently Near ${data.name}`}
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {isEs
                    ? `Nuestra oficina está a ${data.distanceFromOfficeEs}, fácil de alcanzar para residentes de ${data.nameEs} y vecindarios cercanos.`
                    : `Our office is ${data.distanceFromOffice} — easy to reach for ${data.name} residents and nearby neighborhoods.`}
                </p>

                <div className={styles.officeBlock}>
                  <p className={styles.officeAddress}>
                    <strong>Pura Vida Chiropractic</strong>
                    <br />
                    {OFFICE_ADDRESS}
                    <br />
                    {OFFICE_CITY}
                  </p>
                  <p style={{ marginTop: "0.5rem" }}>
                    <strong>{isEs ? "Teléfono: " : "Phone: "}</strong>
                    <a href={PHONE_TEL} className={styles.officeLink}>
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <strong>{isEs ? "Horario: " : "Hours: "}</strong>
                    {isEs
                      ? "Lunes, Martes y Jueves, 7:00 AM – 4:00 PM"
                      : "Monday, Tuesday, Thursday, 7:00 AM – 4:00 PM"}
                  </p>
                </div>

                <h3 style={{ marginTop: "1.5rem", fontSize: "1rem" }}>
                  {isEs ? "Puntos de referencia cercanos:" : "Nearby landmarks:"}
                </h3>
                <ul className={styles.landmarksList}>
                  {(isEs ? data.landmarksEs : data.landmarks).map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>

                <h3 style={{ marginTop: "1.25rem", fontSize: "1rem" }}>
                  {isEs ? "Códigos postales atendidos:" : "ZIP codes served:"}
                </h3>
                <p style={{ color: "#444" }}>{data.zipCodes.join(", ")}</p>
              </div>

              <div>
                <Image
                  src="/images/conditions/latinofamily.jpg"
                  alt={
                    isEs
                      ? `Familias de ${data.nameEs} confían en Pura Vida Chiropractic`
                      : `${data.name} families trust Pura Vida Chiropractic`
                  }
                  width={520}
                  height={400}
                  className={styles.sideImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other neighborhoods */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Otras Áreas Que Atendemos" : "Other Areas We Serve"}
            </h2>
            <div className={styles.otherAreasGrid}>
              {neighborhoods
                .filter((n) => n.slug !== data.slug)
                .map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${locale}/${n.slug}-chiropractor`}
                    className={styles.otherAreaCard}
                  >
                    {isEs ? n.nameEs : n.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.sectionInner}>
            <h2 className={styles.finalCtaTitle}>
              {isEs
                ? `¿Listo para Sentirse Mejor, ${data.nameEs}?`
                : `Ready to Feel Better, ${data.name}?`}
            </h2>
            <p className={styles.finalCtaSub}>
              {isEs
                ? "Llámenos hoy o reserve su consulta gratuita en línea. Atención bilingüe, sin riesgos."
                : "Call us today or book your free consultation online. Bilingual care, no risk."}
            </p>
            <div className={styles.finalCtaBtns}>
              <a href={PHONE_TEL} className={styles.ctaPhone}>
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={BOOK_URL}
                className={styles.ctaBookFinal}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reservar Consulta Gratis →" : "Book Free Consultation →"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={lc} />
    </>
  );
}
