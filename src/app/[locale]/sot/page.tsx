import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchSotPageBySlug, fetchSotPages } from "@/lib/sot";
import styles from "./sot.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = await fetchSotPageBySlug("pillar", locale);
  if (!page) return {};
  const canonical = `${BASE_URL}/${locale}/sot`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/sot`,
        es: `${BASE_URL}/es/sot`,
        "x-default": `${BASE_URL}/en/sot`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: locale === "es" ? "es_MX" : "en_US",
    },
  };
}

const labels = {
  en: {
    back: "← Back",
    explore: "Explore the SOT Section",
    ctaTitle: "Ready to experience SOT?",
    ctaBody: "Dr. Dan Foss offers a free consultation at Pura Vida Chiropractic in San Antonio.",
    ctaBtn: "Book Free Consultation",
  },
  es: {
    back: "← Volver",
    explore: "Explora la Sección SOT",
    ctaTitle: "¿Listo para experimentar SOT?",
    ctaBody: "El Dr. Dan Foss ofrece una consulta gratuita en Pura Vida Quiropráctica en San Antonio.",
    ctaBtn: "Reservar Consulta Gratis",
  },
} as const;

export default async function SotPillar({ params }: Props) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";
  const page = await fetchSotPageBySlug("pillar", lang);
  if (!page) notFound();

  const siblings = fetchSotPages(lang).filter((p) => p.slug !== "pillar");
  const t = labels[lang as "en" | "es"];

  return (
    <>
      <Header locale={lang as "en" | "es"} currentPath="/sot" />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{page.title.split("|")[0].trim()}</h1>
            <p className={styles.description}>{page.description}</p>
          </header>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: page.content }}
          />

          {siblings.length > 0 && (
            <nav className={styles.subnav} aria-label="SOT sub-pages">
              <p className={styles.subnavTitle}>{t.explore}</p>
              <ul className={styles.subnavList}>
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${lang}/sot/${s.slug}`}>
                      {s.title.split("|")[0].trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className={styles.cta}>
            <h3>{t.ctaTitle}</h3>
            <p>{t.ctaBody}</p>
            <a
              href="/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {t.ctaBtn}
            </a>
          </div>
        </article>
      </main>
      <Footer locale={lang as "en" | "es"} />
    </>
  );
}
