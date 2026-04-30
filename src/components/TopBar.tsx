import Link from "next/link";
import { Clock, Phone, MapPin } from "lucide-react";
import styles from "./TopBar.module.css";

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

interface TopBarProps {
  locale: "en" | "es";
}

const PHONE_TEL = "tel:+12106851994";
const GOOGLE_HREF =
  "https://google.com/maps/place/Pura+Vida+Chiropractic/data=!4m2!3m1!1s0x0:0x1c1e96c3d09ddb87?sa=X&ved=1t:2428&ictx=111";
const FACEBOOK_HREF = "https://www.facebook.com/puravidasanantonio/";

export default function TopBar({ locale }: TopBarProps) {
  const isEs = locale === "es";
  const BOOK_HREF = `/${locale}/book-now`;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {/* Left: nav links */}
        <ul className={styles.leftLinks}>
          <li>
            <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Clock size={13} aria-hidden="true" />
              <span>{isEs ? "Reservar Cita" : "Book Appointment"}</span>
            </a>
          </li>
          <li className={styles.sep} aria-hidden="true">|</li>
          <li>
            <Link href={`/${locale}/contact`} className={styles.link}>
              <span>{isEs ? "Horario de Oficina" : "Office Hours"}</span>
            </Link>
          </li>
          <li className={styles.sep} aria-hidden="true">|</li>
          <li>
            <Link href={`/${locale}/new-patient#forms`} className={styles.link}>
              <span>{isEs ? "Formularios" : "New Patient Forms"}</span>
            </Link>
          </li>
        </ul>

        {/* Right: icon links */}
        <ul className={styles.rightLinks}>
          <li>
            <a href={PHONE_TEL} className={styles.iconLink} aria-label="Call Pura Vida Chiropractic">
              <Phone size={14} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={GOOGLE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="Find us on Google Maps"
            >
              <MapPin size={14} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={FACEBOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="Pura Vida Chiropractic on Facebook"
            >
              <FbIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
