import styles from "./UrgencyBar.module.css";

interface UrgencyBarProps {
  locale: "en" | "es";
}

const PHONE_TEL = "tel:+12106851994";
const PHONE_DISPLAY = "(210) 685-1994";

export default function UrgencyBar({ locale }: UrgencyBarProps) {
  const isEs = locale === "es";

  return (
    <div className={styles.bar} role="region" aria-label={isEs ? "Llame ahora" : "Call now"}>
      <div className={styles.inner}>
        <a
          href={PHONE_TEL}
          className={styles.callLink}
          aria-label={isEs ? "Llamar a Pura Vida Quiropráctica" : "Call Pura Vida Chiropractic"}
        >
          📞 {isEs ? `Llame Hoy: ${PHONE_DISPLAY}` : `Call Today: ${PHONE_DISPLAY}`}
        </a>
        <span className={styles.meta}>
          {isEs
            ? "¡Hablamos Español! · Lun/Mar/Jue 7am–4pm"
            : "¡Hablamos Español! · Mon/Tue/Thu 7am–4pm"}
        </span>
      </div>
    </div>
  );
}
