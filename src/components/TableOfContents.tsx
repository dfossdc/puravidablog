import Link from "next/link";
import type { Heading } from "@/lib/posts";
import styles from "./TableOfContents.module.css";

interface Props {
  headings: Heading[];
  locale: "en" | "es";
  /** Hide the TOC unless there are at least this many h2 headings. */
  minHeadings?: number;
}

/**
 * Compact "On this page" / "En esta página" table of contents rendered at the
 * top of long blog posts. Filters to H2s only for a clean outline.
 *
 * On mobile, the TOC is collapsible via <details>. On desktop, it displays open.
 * Helps Google generate jump-to sitelinks and gives AI search engines a
 * machine-readable outline of the article.
 */
export default function TableOfContents({ headings, locale, minHeadings = 3 }: Props) {
  // Filter to H2 headings only (depth=2) for a cleaner TOC.
  const h2Headings = headings.filter((h) => h.level === 2);
  if (h2Headings.length < minHeadings) return null;

  const isEs = locale === "es";
  const label = isEs ? "En esta página" : "On this page";

  return (
    <details className={styles.details} open>
      <summary className={styles.summary}>{label}</summary>
      <nav className={styles.toc} aria-label={label}>
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
    </details>
  );
}
