import styles from "./UrgencyBar.module.css";

interface UrgencyBarProps {
  locale: "en" | "es";
}

const PHONE_TEL = "tel:+12106851994";
const PHONE_DISPLAY = "(210) 685-1994";

export default function UrgencyBar({ locale }: UrgencyBarProps) {
  const isEs = locale === "es";
  const bookHref = `/${locale}/book-now`;

  return (
    <div className={styles.bar} role="region" aria-label={isEs ? "Llame ahora" : "Call now"}>
      <div className={styles.inner}>
        <a
          href={PHONE_TEL}
          className={styles.callLink}
          aria-label={isEs ? "Llamar a Pura Vida Quiropráctica" : "Call Pura Vida Chiropractic"}
        >
          📞 {PHONE_DISPLAY}
        </a>
        <span className={styles.spanishBadge}>¡Hablamos Español!</span>
        <span className={styles.meta}>
          {isEs
            ? "Consultas Gratis Disponibles · "
            : "Free Consultations Available · "}
          <a href={bookHref} className={styles.bookLink}>
            {isEs ? "Reservar en Línea →" : "Book Online →"}
          </a>
        </span>
      </div>
    </div>
  );
}
