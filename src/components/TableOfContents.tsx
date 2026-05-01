import Link from "next/link";
import type { Heading } from "@/lib/posts";
import styles from "./TableOfContents.module.css";

interface Props {
  headings: Heading[];
  locale: string;
  /** Hide the TOC unless there are at least this many h2/h3 headings. */
  minHeadings?: number;
}

/**
 * Compact "On this page" / "En esta página" table of contents rendered at the
 * top of long blog posts. Helps Google generate jump-to sitelinks and gives
 * AI search engines a clean machine-readable outline of the article.
 */
export default function TableOfContents({ headings, locale, minHeadings = 3 }: Props) {
  // Only show the TOC for posts with enough structure to benefit from one.
  const h2Headings = headings.filter((h) => h.level === 2);
  if (h2Headings.length < minHeadings) return null;

  const isEs = locale === "es";

  return (
    <nav className={styles.toc} aria-labelledby="toc-heading">
      <h2 id="toc-heading" className={styles.heading}>
        {isEs ? "En esta página" : "On this page"}
      </h2>
      <ol className={styles.list}>
        {h2Headings.map((h) => (
          <li key={h.id} className={styles.item}>
            <Link href={`#${h.id}`} className={styles.link}>
              {h.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
