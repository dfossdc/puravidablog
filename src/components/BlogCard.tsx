import Link from "next/link";
import Image from "next/image";
import type { PostFrontmatter } from "@/lib/posts";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: PostFrontmatter;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "es" ? "es-MX" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link href={`/${locale}/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            width={640}
            height={360}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>🌿</span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <time className={styles.date} dateTime={post.date}>
          {formattedDate}
        </time>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.description}</p>
        <span className={styles.readMore}>
          {locale === "es" ? "Leer más →" : "Read more →"}
        </span>
      </div>
    </Link>
  );
}
