import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  locale: "en" | "es";
  currentSlug?: string;
  currentPath?: string;
}

const aboutLinks = {
  en: [
    { label: "Meet Dr. Foss", href: "/about" },
    { label: "Mission Trips", href: "/mission" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
  es: [
    { label: "Conoce al Dr. Foss", href: "/about" },
    { label: "Misiones Médicas", href: "/mission" },
    { label: "Testimonios", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
};

const patientLinks = {
  en: [
    { label: "Initial Visit", href: "/new-patient" },
    { label: "FAQs", href: "/faq" },
  ],
  es: [
    { label: "Primera Visita", href: "/new-patient" },
    { label: "Preguntas Frecuentes", href: "/faq" },
  ],
};

const serviceLinks = {
  en: [
    { label: "Chiropractic Care", href: "/services/chiropractic-care" },
    { label: "Cranial Chiropractic", href: "/services/cranial-chiropractic" },
    { label: "Infant Chiropractic", href: "/services/infant-chiropractic" },
    { label: "Pediatric Chiropractic", href: "/services/pediatric-chiropractic" },
    { label: "Pregnancy Chiropractic", href: "/services/pregnancy-chiropractic" },
    { label: "Auto Injury", href: "/services/auto-injury-chiropractic" },
    { label: "SoftWave Therapy", href: "/services/softwave-therapy" },
    { label: "Shockwave Therapy", href: "/services/shockwave-therapy" },
    { label: "Class IV Laser", href: "/services/class-iv-laser" },
    { label: "SOT Chiropractic", href: "/services/sot-chiropractic" },
    { label: "Wellness Care", href: "/services/wellness-care" },
    { label: "Latino Community", href: "/services/latino-community" },
    { label: "Sports Chiropractic", href: "/sports-chiropractic" },
  ],
  es: [
    { label: "Cuidado Quiropráctico", href: "/services/chiropractic-care" },
    { label: "Quiropráctica Craneal", href: "/services/cranial-chiropractic" },
    { label: "Quiropráctica para Bebés", href: "/services/infant-chiropractic" },
    { label: "Quiropráctica Pediátrica", href: "/services/pediatric-chiropractic" },
    { label: "Quiropráctica Prenatal", href: "/services/pregnancy-chiropractic" },
    { label: "Lesiones de Auto", href: "/services/auto-injury-chiropractic" },
    { label: "Terapia SoftWave", href: "/services/terapia-softwave" },
    { label: "Terapia de Ondas de Choque", href: "/services/terapia-ondas-de-choque" },
    { label: "Láser Clase IV", href: "/services/laser-clase-iv" },
    { label: "Quiropráctica SOT", href: "/services/quiropractica-sot" },
    { label: "Cuidado de Bienestar", href: "/services/wellness-care" },
    { label: "Comunidad Latina", href: "/services/latino-community" },
    { label: "Quiropráctica Deportiva", href: "/sports-chiropractic" },
  ],
};

export default function Header({ locale, currentSlug, currentPath }: HeaderProps) {
  const otherLocale = locale === "en" ? "es" : "en";

  let langHref: string;
  if (currentSlug) {
    langHref = `/${otherLocale}/blog/${currentSlug}`;
  } else if (currentPath !== undefined) {
    langHref = `/${otherLocale}${currentPath}`;
  } else {
    langHref = `/${otherLocale}`;
  }

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className={styles.announcementBar}>
        <div className={styles.annInner}>
          <p className={styles.annLeft}>
            {locale === "en"
              ? <>There is No Risk to see what we can do for you —{" "}
                  <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.annLink}>
                    New Patient Special Offer →
                  </a>
                </>
              : <>No hay riesgo en ver lo que podemos hacer por usted —{" "}
                  <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.annLink}>
                    Oferta Especial →
                  </a>
                </>
            }
          </p>
          <div className={styles.annRight}>
            <span className={styles.annSpanish}>¡Hablamos Español!</span>
            <Link href={locale === "es" ? langHref.replace("es", "en") : `/${locale}`} className={`${styles.annLang} ${locale === "en" ? styles.annLangActive : ""}`}>
              🇺🇸 EN
            </Link>
            <span className={styles.annSep}>|</span>
            <Link href={langHref} className={`${styles.annLang} ${locale === "es" ? styles.annLangActive : ""}`}>
              🇲🇽 ES
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href={`/${locale}`} className={styles.brand}>
            <Image
              src="/images/puravidalogo.jpg"
              alt="Pura Vida Chiropractic"
              width={800}
              height={240}
              className={styles.logo}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {/* Home */}
              <li>
                <Link href={`/${locale}`} className={styles.navLink}>
                  {locale === "en" ? "Home" : "Inicio"}
                </Link>
              </li>

              {/* About — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "About" : "Sobre Nosotros"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={styles.dropMenu}>
                  {aboutLinks[locale].map((item) => (
                    <li key={item.href}>
                      <Link href={`/${locale}${item.href}`} className={styles.dropItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Patients — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "Patients" : "Pacientes"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={styles.dropMenu}>
                  {patientLinks[locale].map((item) => (
                    <li key={item.href}>
                      <Link href={`/${locale}${item.href}`} className={styles.dropItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Services — dropdown */}
              <li className={styles.dropdown}>
                <button className={styles.dropbtn} type="button">
                  {locale === "en" ? "Services" : "Servicios"}
                  <span className={styles.dropArrow} aria-hidden="true">▾</span>
                </button>
                <ul className={`${styles.dropMenu} ${styles.dropMenuWide}`}>
                  {serviceLinks[locale].map((s) => (
                    <li key={s.href}>
                      <Link href={`/${locale}${s.href}`} className={styles.dropItem}>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Contact */}
              <li>
                <Link href={`/${locale}/contact`} className={styles.navLink}>
                  {locale === "en" ? "Contact" : "Contacto"}
                </Link>
              </li>
            </ul>

            <div className={styles.navActions}>
              <a href="tel:+12106851994" className={styles.headerPhone}>
                (210) 685-1994
              </a>
              <a
                href="https://www.puravidasanantonio.com/special/"
                className={styles.cta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "en" ? "Free Evaluation" : "Evaluación Gratis"}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
