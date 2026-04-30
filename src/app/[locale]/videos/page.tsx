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
      ? "Videos | Pura Vida Chiropractic San Antonio"
      : "Videos | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "Mire videos del Dr. Dan Foss de Pura Vida Chiropractic explicando técnicas SOT, ajustes craneales y consejos de bienestar."
      : "Watch videos from Dr. Dan Foss of Pura Vida Chiropractic explaining SOT techniques, cranial adjusting, and wellness tips.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/videos`,
      languages: {
        en: `${BASE_URL}/en/videos`,
        es: `${BASE_URL}/es/videos`,
        "x-default": `${BASE_URL}/en/videos`,
      },
    },
  };
}

// Featured YouTube videos. Add or rearrange entries as new content publishes.
const videos = [
  {
    id: "dQw4w9WgXcQ", // placeholder — replace with real Pura Vida channel videos
    titleEn: "What is SOT Chiropractic?",
    titleEs: "¿Qué es la Quiropráctica SOT?",
  },
  {
    id: "dQw4w9WgXcQ",
    titleEn: "Cranial Adjusting Explained",
    titleEs: "Ajuste Craneal Explicado",
  },
  {
    id: "dQw4w9WgXcQ",
    titleEn: "Pediatric Chiropractic Care",
    titleEs: "Cuidado Quiropráctico Pediátrico",
  },
];

export default async function VideosPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as "en" | "es";
  const isEs = loc === "es";

  return (
    <>
      <Header locale={loc} />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.4rem", color: "#1a4d2e", marginBottom: "12px" }}>
            {isEs ? "Videos Educativos" : "Educational Videos"}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "700px", margin: "0 auto" }}>
            {isEs
              ? "Aprenda sobre las técnicas únicas que usamos en Pura Vida Chiropractic — desde ajustes SOT hasta atención craneal y cuidado pediátrico."
              : "Learn about the unique techniques we use at Pura Vida Chiropractic — from SOT adjusting to cranial care and pediatric chiropractic."}
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {videos.map((v, i) => (
            <article
              key={i}
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "#f0f0f0",
                }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={isEs ? v.titleEs : v.titleEn}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a4d2e", margin: 0 }}>
                  {isEs ? v.titleEs : v.titleEn}
                </h2>
              </div>
            </article>
          ))}
        </div>

        <section
          style={{
            marginTop: "60px",
            padding: "32px",
            background: "#f3faf6",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#1a4d2e", marginBottom: "8px" }}>
            {isEs ? "¿Listo para experimentarlo en persona?" : "Ready to experience it in person?"}
          </h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            {isEs
              ? "Reserve su consulta gratuita con el Dr. Dan Foss hoy."
              : "Book your free consultation with Dr. Dan Foss today."}
          </p>
          <Link
            href={`/${loc}/book-now`}
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "#2f7547",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            {isEs ? "Reservar Consulta Gratis" : "Book Free Consultation"}
          </Link>
        </section>
      </main>
      <Footer locale={loc} />
    </>
  );
}
