import styles from "./Footer.module.css";

interface FooterProps {
  locale: "en" | "es";
}

const content = {
  en: {
    hours: "Office Hours",
    schedule: [
      { day: "Mon – Wed", time: "8:00 AM – 6:00 PM" },
      { day: "Thu", time: "8:00 AM – 1:00 PM" },
      { day: "Fri", time: "8:00 AM – 6:00 PM" },
      { day: "Sat – Sun", time: "Closed" },
    ],
    address: "Address",
    phone: "Phone",
    copyright: "Pura Vida Chiropractic. All rights reserved.",
  },
  es: {
    hours: "Horario de Atención",
    schedule: [
      { day: "Lun – Mié", time: "8:00 AM – 6:00 PM" },
      { day: "Jue", time: "8:00 AM – 1:00 PM" },
      { day: "Vie", time: "8:00 AM – 6:00 PM" },
      { day: "Sáb – Dom", time: "Cerrado" },
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
            1234 Alamo Plaza Dr, Suite 100
            <br />
            San Antonio, TX 78205
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
