import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  fetchAllSotSlugs,
  fetchSotPageBySlug,
  fetchSotPages,
} from "@/lib/sot";
import styles from "../sot.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = fetchAllSotSlugs();
  return slugs.map(({ slug, lang }) => ({ locale: lang, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = await fetchSotPageBySlug(slug, locale);
  if (!page) return {};
  const canonical = `${BASE_URL}/${locale}/sot/${slug}`;
  // Append brand suffix so the <title> differs from in-page <h1>
  // (which strips everything after the first "|"). Some SOT page titles
  // don't contain a pipe so the H1 and <title> would otherwise be
  // identical — Semrush flags that as duplicate H1+title.
  const titleWithBrand = page.title.includes("|")
    ? page.title
    : `${page.title} | Pura Vida Chiropractic SA`;
  return {
    title: titleWithBrand,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/sot/${slug}`,
        es: `${BASE_URL}/es/sot/${slug}`,
        "x-default": `${BASE_URL}/en/sot/${slug}`,
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
    back: "← Back to SOT overview",
    more: "More in the SOT Section",
    ctaTitle: "Ready to experience SOT?",
    ctaBody:
      "Dr. Dan Foss offers a free consultation at Pura Vida Chiropractic in San Antonio.",
    ctaBtn: "Book Free Consultation",
  },
  es: {
    back: "← Volver a la página principal de SOT",
    more: "Más en la Sección SOT",
    ctaTitle: "¿Listo para experimentar SOT?",
    ctaBody:
      "El Dr. Dan Foss ofrece una consulta gratuita en Pura Vida Quiropráctica en San Antonio.",
    ctaBtn: "Reservar Consulta Gratis",
  },
} as const;

export default async function SotSubPage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = (locale === "es" ? "es" : "en") as "en" | "es";
  const page = await fetchSotPageBySlug(slug, lang);

  // Wrong-locale safety net (mirrors blog/[slug]/page.tsx). If a SOT page
  // doesn't exist at the requested locale but does at the other, redirect
  // permanently to the canonical locale instead of 404. Prevents the same
  // wrong-locale 404 pattern Semrush flagged on blog posts.
  if (!page) {
    const otherLang = lang === "es" ? "en" : "es";
    const otherPage = await fetchSotPageBySlug(slug, otherLang);
    if (otherPage) {
      redirect(`/${otherLang}/sot/${slug}`);
    }
    notFound();
  }

  const siblings = fetchSotPages(lang).filter(
    (p) => p.slug !== "pillar" && p.slug !== slug
  );
  const t = labels[lang];

  return (
    <>
      <Header locale={lang} currentPath={`/sot/${slug}`} />
      <main className={styles.main}>
        <article className={styles.article}>
          <Link href={`/${lang}/sot`} className={styles.back}>
            {t.back}
          </Link>
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
              <p className={styles.subnavTitle}>{t.more}</p>
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
              href={`/${locale}/book-now`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {t.ctaBtn}
            </a>
          </div>
        </article>
      </main>
      <Footer locale={lang} />
    </>
  );
}
