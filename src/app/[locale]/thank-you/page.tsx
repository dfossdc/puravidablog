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
  return {
    title: isEs
      ? "Gracias | Pura Vida Chiropractic San Antonio"
      : "Thank You | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "Gracias por contactar a Pura Vida Chiropractic. Nos pondremos en contacto con usted muy pronto."
      : "Thank you for contacting Pura Vida Chiropractic. We will be in touch with you very soon.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/thank-you`,
      languages: {
        en: `${BASE_URL}/en/thank-you`,
        es: `${BASE_URL}/es/thank-you`,
        "x-default": `${BASE_URL}/en/thank-you`,
      },
    },
    robots: { index: false, follow: true },
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as "en" | "es";
  const isEs = loc === "es";

  return (
    <>
      <Header locale={loc} />
      <main
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
          lineHeight: "1.7",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "16px" }} aria-hidden="true">
          ✓
        </div>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "16px", color: "#1a4d2e" }}>
          {isEs ? "¡Gracias!" : "Thank You!"}
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#444", marginBottom: "32px" }}>
          {isEs
            ? "Hemos recibido su mensaje. Un miembro de nuestro equipo se pondrá en contacto con usted en el próximo día hábil."
            : "We've received your message. A member of our team will be in touch with you within the next business day."}
        </p>
        <p style={{ fontSize: "1rem", color: "#666", marginBottom: "40px" }}>
          {isEs ? "¿Necesita atención inmediata? " : "Need to reach us right away? "}
          <a href="tel:+12106851994" style={{ color: "#2f7547", fontWeight: 600 }}>
            (210) 685-1994
          </a>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link
            href={`/${loc}`}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: "#2f7547",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            {isEs ? "Volver al Inicio" : "Back to Home"}
          </Link>
          <Link
            href={`/${loc}/blog`}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: "#fff",
              color: "#2f7547",
              border: "2px solid #2f7547",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            {isEs ? "Lea Nuestro Blog" : "Read Our Blog"}
          </Link>
        </div>
      </main>
      <Footer locale={loc} />
    </>
  );
}
