import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import styles from "./blog.module.css";

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
      ? "Blog de Quiropráctica | Pura Vida Chiropractic San Antonio"
      : "Chiropractic Blog | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "Artículos sobre salud quiropráctica, la técnica SOT, bienestar y cuidado de la columna vertebral en San Antonio, TX."
      : "Articles on chiropractic health, the SOT technique, wellness, and spinal care in San Antonio, TX.",
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: "/en/blog",
        es: "/es/blog",
      },
    },
    openGraph: {
      title: isEs
        ? "Blog Quiropráctica San Antonio | Pura Vida"
        : "Chiropractic Blog San Antonio | Pura Vida",
      description: isEs
        ? "Consejos de salud y bienestar del equipo de Pura Vida Chiropractic en San Antonio."
        : "Health and wellness tips from the Pura Vida Chiropractic team in San Antonio.",
      locale: isEs ? "es_MX" : "en_US",
    },
  };
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts(locale);
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {isEs ? "Blog de Quiropráctica" : "Chiropractic Blog"}
          </h1>
          <p className={styles.heroSub}>
            {isEs
              ? "Consejos de salud, bienestar y técnicas quiroprácticas del equipo de Pura Vida en San Antonio, TX."
              : "Health tips, wellness, and chiropractic techniques from the Pura Vida team in San Antonio, TX."}
          </p>
        </section>

        {posts.length === 0 ? (
          <p className={styles.empty}>
            {isEs ? "No hay artículos todavía." : "No posts yet."}
          </p>
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        )}
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
