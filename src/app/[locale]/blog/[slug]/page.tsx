import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchPostBySlug, fetchAllSlugs } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedContent from "@/components/RelatedContent";
import TableOfContents from "@/components/TableOfContents";
import { getRelatedPosts } from "@/lib/relatedContent";
import styles from "./post.module.css";

const BASE_URL = "https://puravidasanantonio.com";

export const revalidate = 60;
export const dynamicParams = true;

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = fetchAllSlugs();
    return slugs.map(({ slug, lang }) => ({ locale: lang, slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await fetchPostBySlug(slug, locale);
  if (!post) return {};
  const canonical = `${BASE_URL}/${locale}/blog/${slug}`;
  // Append brand suffix to <title> ONLY when the result stays within Google's
  // ~60-character title budget. The first attempt added the suffix
  // unconditionally and bumped 377 blog posts past the limit (Semrush flagged
  // them as 'Long title element'). Now: short titles get the brand suffix
  // (which solves the H1==title duplicate Semrush also flags), long titles
  // stay short (which avoids the long-title flag and Google truncation).
  // For pages where the strict 60-char budget can't accommodate the suffix
  // we use a much shorter " | Pura Vida" suffix instead — still
  // disambiguates from the H1 while staying under the limit.
  const SHORT_BRAND = " | Pura Vida";  // 13 chars
  const FULL_BRAND = " | Pura Vida Chiropractic"; // 26 chars
  const titleWithBrand = post.title.length + FULL_BRAND.length <= 60
    ? `${post.title}${FULL_BRAND}`
    : post.title.length + SHORT_BRAND.length <= 60
      ? `${post.title}${SHORT_BRAND}`
      : post.title; // raw title — already long enough to differ from H1 only by length
  return {
    title: titleWithBrand,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical,
      // Posts have language-specific slugs (EN and ES counterparts use
      // totally different file names). Cross-language hreflangs are only
      // emitted when the post explicitly declares its `translatedSlug`
      // counterpart in frontmatter — otherwise we'd link to slugs that
      // 404, which generated 966 broken internal links on Semrush.
      languages: (() => {
        const selfLang = post.lang === "es" ? "es" : "en";
        const otherLang = selfLang === "es" ? "en" : "es";
        const otherSlug = post.translatedSlug;
        const otherUrl = otherSlug
          ? `${BASE_URL}/${otherLang}/blog/${otherSlug}`
          : null;
        if (otherUrl) {
          return {
            [selfLang]: canonical,
            [otherLang]: otherUrl,
            "x-default": selfLang === "en" ? canonical : otherUrl,
          };
        }
        return {
          [selfLang]: canonical,
          "x-default": canonical,
        };
      })(),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      images: post.image
        ? [{ url: post.image, width: 800, height: 450, alt: post.title }]
        : [],
      locale: locale === "es" ? "es_MX" : "en_US",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  const post = await fetchPostBySlug(slug, locale);

  // Wrong-locale safety net: when a blog post doesn't exist at the requested
  // locale but DOES exist at the other locale (i.e. somebody linked
  // /en/blog/{spanish-slug} to a Spanish-only post), permanently redirect to
  // the post's canonical locale instead of 404. Semrush previously flagged
  // 479 wrong-locale 404s — this auto-resolves them and any future ones
  // without needing per-slug redirect rules in next.config.mjs.
  if (!post) {
    const otherLocale = locale === "es" ? "en" : "es";
    const otherPost = await fetchPostBySlug(slug, otherLocale);
    if (otherPost) {
      redirect(`/${otherLocale}/blog/${slug}`);
    }
    notFound();
  }

  const isEs = locale === "es";
  const formattedDate = new Date(post.date).toLocaleDateString(
    isEs ? "es-MX" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Google's Rich Results Test wants datePublished as full ISO 8601 with a
  // timezone (date-only is flagged "non-critical"). post.date is "YYYY-MM-DD";
  // we anchor it at 9am Central Time (-05:00 covers CDT, the dominant San
  // Antonio offset; minor DST drift is irrelevant for SEO).
  const datePublishedIso = /^\d{4}-\d{2}-\d{2}$/.test(post.date)
    ? `${post.date}T09:00:00-05:00`
    : post.date;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: datePublishedIso,
    author: {
      "@type": "Person",
      name: "Dr. Dan Foss, DC",
      url: `${BASE_URL}/${locale}/meet-dr-foss`,
    },
    publisher: {
      "@type": "Organization",
      name: "Pura Vida Chiropractic",
      url: BASE_URL,
    },
    url: `${BASE_URL}/${locale}/blog/${slug}`,
    image: post.image || "",
    // Speakable tells Google Assistant + AI engines which parts of the page
    // are safe to read aloud / cite. We point at the article title and the
    // dek (post.description) since both summarize the post in a self-
    // contained way. data-speakable hooks are added to the JSX below so the
    // selectors resolve regardless of CSS-module hashing.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable='title']", "[data-speakable='summary']"],
    },
    ...(post.mentions ? { mentions: post.mentions } : {}),
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }
      : null;

  // BreadcrumbList — Google may render this as breadcrumbs in mobile SERPs
  // and AI engines use it to understand page hierarchy. Castle Hills
  // Chiropractic emits this via Schema Pro; we hadn't yet.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/${locale}/blog/${slug}`,
      },
    ],
  };

  const relatedPosts = getRelatedPosts(slug, locale);

  return (
    <>
      <Header locale={locale as "en" | "es"} currentSlug={slug} />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <article className={styles.article}>
          <Link href={`/${locale}/blog`} className={styles.back}>
            {isEs ? "← Volver al blog" : "← Back to blog"}
          </Link>
          <header className={styles.header}>
            <time className={styles.date} dateTime={post.date}>
              {formattedDate}
            </time>
            <h1 className={styles.title} data-speakable="title">
              {post.title}
            </h1>
            <p className={styles.description} data-speakable="summary">
              {post.description}
            </p>
            <p className={styles.author}>
              {isEs ? "Por" : "By"} <strong>{post.author}</strong>
            </p>
          </header>
          {post.image && (
            <div className={styles.coverWrap}>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className={styles.cover}
                priority
                unoptimized={post.image.startsWith("http")}
              />
            </div>
          )}
          <TableOfContents headings={post.headings} locale={locale as "en" | "es"} />
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <RelatedContent
          items={relatedPosts}
          heading={isEs ? "Artículos Relacionados" : "Related Articles"}
          subheading={
            isEs
              ? "Sigue explorando temas similares de Pura Vida Chiropractic."
              : "Keep exploring similar topics from Pura Vida Chiropractic."
          }
        />
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
