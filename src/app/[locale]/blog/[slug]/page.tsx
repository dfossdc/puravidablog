import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostHtml, getPostSlugs } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./post.module.css";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["en", "es"];
  const paths: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getPostSlugs(locale);
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = await getPostHtml(locale, slug);
  if (!data) return {};

  const { post } = data;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        es: `/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [],
      locale: locale === "es" ? "es_MX" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  const data = await getPostHtml(locale, slug);
  if (!data) notFound();

  const { post, html } = data;
  const isEs = locale === "es";

  const formattedDate = new Date(post.date).toLocaleDateString(
    isEs ? "es-MX" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <Header locale={locale as "en" | "es"} currentSlug={slug} />
      <main className={styles.main}>
        <article className={styles.article}>
          <Link href={`/${locale}/blog`} className={styles.back}>
            ← {isEs ? "Volver al blog" : "Back to blog"}
          </Link>

          <header className={styles.header}>
            <time className={styles.date} dateTime={post.date}>
              {formattedDate}
            </time>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <p className={styles.author}>
              {isEs ? "Por" : "By"} <strong>{post.author}</strong>
            </p>
          </header>

          {post.image && (
            <div className={styles.coverWrap}>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className={styles.cover}
                priority
              />
            </div>
          )}

          <div
            className={`prose ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
