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
            src="/images/logo.svg"
            alt="Pura Vida Chiropractic"
            width={220}
            height={60}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href={langHref} className={styles.langToggle} aria-label="Toggle language">
            {langLabel}
          </Link>
          <a
            href="https://www.puravidasanantonio.com/special/"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={locale === "en" ? "Free Evaluation" : "Evaluación Gratis"}
          >
            {locale === "en" ? "Free Evaluation" : "Evaluación Gratis"}
          </a>
        </nav>
      </div>
    </header>
  );
}
