import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterProps {
  locale: "en" | "es";
}

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/puravidasanantonio/" },
  { name: "Instagram", href: "https://www.instagram.com/puravidasatx/" },
  { name: "YouTube", href: "https://www.youtube.com/@puravidasanantonio" },
  { name: "Yelp", href: "https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio" },
];

export default function Footer({ locale }: FooterProps) {
  const isEs = locale === "es";
  return (
    <footer className={styles.footer}>

      {/* ── Top: Logo + Tagline ── */}
      <div className={styles.footerTop}>
        <div className={styles.footerTopInner}>
          <Image
            src="/images/puravidalogo.jpg"
            alt="Pura Vida Chiropractic"
            width={260}
            height={80}
            className={styles.topLogo}
          />
          <p className={styles.topTagline}>
            {isEs ? "Mejore su Salud. Mantenga su Salud." : "Get Healthy. Stay Healthy."}
          </p>
        </div>
      </div>

      {/* ── Middle: 3 columns ── */}
      <div className={styles.inner}>
        <div className={styles.col}>
          <h3 className={styles.colTitle}>{isEs ? "Pura Vida Quiropráctica" : "Pura Vida Chiropractic"}</h3>
          <p className={styles.tagline}>
            {isEs
              ? "Atención quiropráctica bilingüe en San Antonio, TX. Certificado SOT Avanzado. 23+ años de experiencia."
              : "Bilingual chiropractic care in San Antonio, TX. Advanced SOT Certified. 23+ years experience."}
          </p>
          <div className={styles.social}>
            <p className={styles.socialLabel}>{isEs ? "Síguenos" : "Follow Us"}</p>
            <div className={styles.socialIcons}>
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>{isEs ? "Dirección" : "Address"}</h3>
          <address className={styles.address}>
            2318 NW Military Hwy Suite 103<br />
            San Antonio, TX 78231
          </address>
          <p className={styles.phone}>
            <span className={styles.label}>{isEs ? "Teléfono" : "Phone"}:</span>{" "}
            <a href="tel:+12106851994">(210) 685-1994</a>
          </p>
          <p className={styles.email}>
            <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a>
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>{isEs ? "Horario" : "Office Hours"}</h3>
          <ul className={styles.schedule}>
            <li>
              <span className={styles.day}>{isEs ? "Lun, Mar, Jue" : "Mon, Tue, Thu"}</span>
              <span>7:00 AM – 4:00 PM</span>
            </li>
            <li>
              <span className={styles.day}>{isEs ? "Mié, Vie–Dom" : "Wed, Fri–Sun"}</span>
              <span>{isEs ? "Cerrado" : "Closed"}</span>
            </li>
          </ul>
          <div className={styles.quickLinks}>
            <h4 className={styles.quickTitle}>{isEs ? "Acceso Rápido" : "Quick Links"}</h4>
            <ul className={styles.quickList}>
              <li><Link href={`/${locale}/about`}>{isEs ? "Sobre Nosotros" : "About"}</Link></li>
              <li><Link href={`/${locale}/services/chiropractic-care`}>{isEs ? "Servicios" : "Services"}</Link></li>
              <li><Link href={`/${locale}/blog`}>Blog</Link></li>
              <li><Link href={`/${locale}/contact`}>{isEs ? "Contacto" : "Contact"}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Verified Profiles ── */}
      <div className={styles.verified}>
        <span className={styles.verifiedLabel}>{isEs ? "Perfiles verificados:" : "Verified profiles:"}</span>
        <a href="https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic reviews on Yelp San Antonio">Yelp</a>
        <a href="https://www.healthgrades.com/providers/daniel-foss-2h2pq" target="_blank" rel="noopener noreferrer" title="Dr. Daniel Foss DC on Healthgrades San Antonio chiropractor">Healthgrades</a>
        <a href="https://www.yellowpages.com/san-antonio-tx/mip/pura-vida-chiropractic-472722413" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on YellowPages San Antonio TX">YellowPages</a>
        <a href="https://www.google.com/maps/place/Pura+Vida+Chiropractic/@29.5275,-98.5647,17z" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on Google Maps San Antonio TX">Google Maps</a>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.bottomCopy}>
          © {new Date().getFullYear()} Pura Vida Chiropractic.{" "}
          {isEs ? "Todos los derechos reservados." : "All rights reserved."}
        </p>
        <div className={styles.bottomLinks}>
          <a href="https://puravidasanantonio.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            {isEs ? "Privacidad" : "Privacy Policy"}
          </a>
          <span className={styles.bottomSep}>|</span>
          <a href="https://puravidasanantonio.com/terms-of-service/" target="_blank" rel="noopener noreferrer">
            {isEs ? "Términos" : "Terms"}
          </a>
          <span className={styles.bottomSep}>|</span>
          <a href="https://puravidasanantonio.com/healthcare-disclaimer/" target="_blank" rel="noopener noreferrer">
            {isEs ? "Aviso Médico" : "Healthcare Disclaimer"}
          </a>
        </div>
      </div>
    </footer>
  );
}
