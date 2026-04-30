import Link from "next/link";
import Image from "next/image";
import type { RelatedItem } from "@/lib/relatedContent";
import styles from "./RelatedContent.module.css";

interface RelatedContentProps {
  /** Items to render. Pass an empty array to skip rendering entirely. */
  items: RelatedItem[];
  /** Section heading. Pass locale-appropriate text from the parent. */
  heading: string;
  /** Sub-heading / kicker (optional). */
  subheading?: string;
  /** Compact variant uses a smaller card style; default is full image cards. */
  variant?: "default" | "compact";
}

export default function RelatedContent({
  items,
  heading,
  subheading,
  variant = "default",
}: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section} aria-label={heading}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          {subheading && <p className={styles.subheading}>{subheading}</p>}
        </header>
        <ul className={`${styles.grid} ${variant === "compact" ? styles.compact : ""}`}>
          {items.map((item) => (
            <li key={item.href} className={styles.card}>
              <Link href={item.href} className={styles.cardLink}>
                {item.image && variant !== "compact" && (
                  <div className={styles.thumbWrap}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.thumb}
                    />
                  </div>
                )}
                <div className={styles.body}>
                  <span className={styles.kicker}>
                    {item.type === "blog" && "Article"}
                    {item.type === "condition" && "Condition"}
                    {item.type === "service" && "Service"}
                  </span>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
