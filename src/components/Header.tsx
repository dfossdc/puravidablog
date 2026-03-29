import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderProps {
  locale: "en" | "es";
  currentSlug?: string;
}

export default function Header({ locale, currentSlug }: HeaderProps) {
  const otherLocale = locale === "en" ? "es" : "en";
  const langLabel = locale === "en" ? "ES" : "EN";
  const langHref = currentSlug
    ? `/${otherLocale}/blog/${currentSlug}`
    : `/${otherLocale}/blog`;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}/blog`} className={styles.brand}>
          <span className={styles.brandLeaf}>🌿</span>
          <span className={styles.brandName}>Pura Vida Chiropractic</span>
        </Link>

        <nav className={styles.nav}>
          <Link href={langHref} className={styles.langToggle} aria-label="Toggle language">
            {langLabel}
          </Link>
          <Link
            href="tel:+12102345678"
            className={styles.cta}
            aria-label={locale === "en" ? "Free Evaluation" : "Evaluación Gratis"}
          >
            {locale === "en" ? "Free Evaluation" : "Evaluación Gratis"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
