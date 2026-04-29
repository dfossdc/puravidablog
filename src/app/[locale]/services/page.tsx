import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/services`;
  return {
    title: isEs
      ? "Nuestros Servicios | Pura Vida Chiropractic San Antonio"
      : "Our Services | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "El Dr. Dan Foss ofrece quiropráctica SOT, SoftWave, láser clase IV, quiropráctica prenatal y pediátrica, y más en San Antonio, TX."
      : "Dr. Dan Foss offers SOT chiropractic, SoftWave, Class IV laser, prenatal and pediatric chiropractic, and more in San Antonio, TX.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/services`,
        es: `${BASE_URL}/es/services`,
        "x-default": `${BASE_URL}/en/services`,
      },
    },
  };
}

const serviceList = {
  en: [
    { slug: "chiropractic-care", label: "Chiropractic Care" },
    { slug: "sot-chiropractic", label: "SOT Chiropractic" },
    { slug: "cranial-chiropractic", label: "Cranial Chiropractic" },
    { slug: "softwave-therapy", label: "SoftWave Therapy" },
    { slug: "shockwave-therapy", label: "Shockwave Therapy" },
    { slug: "class-iv-laser", label: "Class IV Laser" },
    { slug: "pregnancy-chiropractic", label: "Pregnancy Chiropractic" },
    { slug: "pediatric-chiropractic", label: "Pediatric Chiropractic" },
    { slug: "infant-chiropractic", label: "Infant Chiropractic" },
    { slug: "auto-injury-chiropractic", label: "Auto Injury" },
    { slug: "wellness-care", label: "Wellness Care" },
    { slug: "latino-community", label: "Latino Community" },
  ],
  es: [
    { slug: "chiropractic-care", label: "Cuidado Quiropráctico" },
    { slug: "quiropractica-sot", label: "Quiropráctica SOT" },
    { slug: "cranial-chiropractic", label: "Quiropráctica Craneal" },
    { slug: "terapia-softwave", label: "Terapia SoftWave" },
    { slug: "terapia-ondas-de-choque", label: "Terapia de Ondas de Choque" },
    { slug: "laser-clase-iv", label: "Láser Clase IV" },
    { slug: "pregnancy-chiropractic", label: "Quiropráctica Prenatal" },
    { slug: "pediatric-chiropractic", label: "Quiropráctica Pediátrica" },
    { slug: "infant-chiropractic", label: "Quiropráctica para Bebés" },
    { slug: "auto-injury-chiropractic", label: "Lesiones de Auto" },
    { slug: "wellness-care", label: "Cuidado de Bienestar" },
    { slug: "latino-community", label: "Comunidad Latina" },
  ],
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const list = serviceList[locale as "en" | "es"] ?? serviceList.en;

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/services" />
      <main style={{ background: "#f8fafc", minHeight: "60vh", padding: "3rem 1.25rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#0d1f2d", marginBottom: "0.5rem", fontWeight: 800 }}>
            {isEs ? "Nuestros Servicios" : "Our Services"}
          </h1>
          <p style={{ color: "#555", fontSize: "1.05rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            {isEs
              ? "El Dr. Dan Foss ofrece una variedad de servicios quiroprácticos avanzados para toda la familia en San Antonio, TX."
              : "Dr. Dan Foss offers a full range of advanced chiropractic services for the whole family in San Antonio, TX."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {list.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${locale}/services/${svc.slug}`}
                style={{
                  display: "block",
                  background: "#ffffff",
                  border: "1.5px solid #dce8f0",
                  borderRadius: 10,
                  padding: "1.1rem 1.25rem",
                  color: "#1a3a4a",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "border-color 0.18s, box-shadow 0.18s",
                }}
              >
                {svc.label} →
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <a
              href="/book-now"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#F5A800",
                color: "#1a1a1a",
                fontWeight: 800,
                fontSize: "1.05rem",
                padding: "0.9rem 2.25rem",
                borderRadius: 50,
                textDecoration: "none",
              }}
            >
              {isEs ? "Obtenga su Consulta Gratis →" : "Get Your Free Consultation →"}
            </a>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
