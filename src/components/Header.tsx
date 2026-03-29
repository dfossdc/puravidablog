import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/images/logo.png"
            alt="Pura Vida Chiropractic"
            width={180}
            height={60}
            className={styles.logo}
            priority
          />
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
