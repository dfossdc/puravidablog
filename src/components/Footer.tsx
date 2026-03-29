import styles from "./Footer.module.css";

interface FooterProps {
  locale: "en" | "es";
}

const content = {
  en: {
    hours: "Office Hours",
    schedule: [
      { day: "Mon, Tue, Thu", time: "7:00 AM – 4:00 PM" },
      { day: "Wed, Fri – Sun", time: "Closed" },
    ],
    address: "Address",
    phone: "Phone",
    copyright: "Pura Vida Chiropractic. All rights reserved.",
  },
  es: {
    hours: "Horario de Atención",
    schedule: [
      { day: "Lun, Mar, Jue", time: "7:00 AM – 4:00 PM" },
      { day: "Mié, Vie – Dom", time: "Cerrado" },
    ],
    address: "Dirección",
    phone: "Teléfono",
    copyright: "Pura Vida Chiropractic. Todos los derechos reservados.",
  },
};

export default function Footer({ locale }: FooterProps) {
  const t = content[locale];
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <p className={styles.brand}>🌿 Pura Vida Chiropractic</p>
          <p className={styles.tagline}>
            {locale === "en"
              ? "Holistic chiropractic care in San Antonio, TX."
              : "Atención quiropráctica holística en San Antonio, TX."}
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>{t.address}</h3>
          <address className={styles.address}>
            2318 NW Military Hwy Suite 103
            <br />
            San Antonio, TX 78231
          </address>
          <p className={styles.phone}>
            <span className={styles.label}>{t.phone}:</span>{" "}
            <a href="tel:+12102345678">(210) 234-5678</a>
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>{t.hours}</h3>
          <ul className={styles.schedule}>
            {t.schedule.map(({ day, time }) => (
              <li key={day}>
                <span className={styles.day}>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {t.copyright}</p>
      </div>
    </footer>
  );
}
