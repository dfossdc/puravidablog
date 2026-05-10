import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterProps {
  locale: "en" | "es";
}

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/puravidasanantonio/" },
  { name: "Instagram", href: "https://www.instagram.com/puravidasatx/" },
  { name: "YouTube", href: "https://www.youtube.com/@puravidadc/videos" },
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
            src="/images/puravidalogo.png"
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
            <h4 className={styles.quickTitle}>{isEs ? "Páginas Populares" : "Popular Pages"}</h4>
            <ul className={styles.quickList}>
              {isEs ? (
                <>
                  <li><Link href={`/es/quiropractico-cerca-de-mi-san-antonio`}>Quiropráctico Cerca de Mí</Link></li>
                  <li><Link href={`/es/el-mejor-quiropractico-san-antonio`}>El Mejor Quiropráctico SA</Link></li>
                  <li><Link href={`/es/que-es-un-quiropractico`}>¿Qué es un Quiropráctico?</Link></li>
                  <li><Link href={`/es/huesero-san-antonio`}>Huesero en San Antonio</Link></li>
                  <li><Link href={`/es/quiropractico-para-migranas-san-antonio`}>Quiropráctico para Migrañas</Link></li>
                  <li><Link href={`/es/quiropractico-postparto-san-antonio`}>Quiropráctico Postparto</Link></li>
                </>
              ) : (
                <>
                  <li><Link href={`/en/chiropractor-near-me-san-antonio`}>Chiropractor Near Me</Link></li>
                  <li><Link href={`/en/best-chiropractor-san-antonio`}>Best Chiropractor SA</Link></li>
                  <li><Link href={`/en/migraine-chiropractor-san-antonio`}>Migraine Chiropractor</Link></li>
                  <li><Link href={`/en/headache-chiropractor-san-antonio`}>Headache Chiropractor</Link></li>
                  <li><Link href={`/en/scoliosis-chiropractor-san-antonio`}>Scoliosis Chiropractor</Link></li>
                  <li><Link href={`/en/postpartum-chiropractor-san-antonio`}>Postpartum Chiropractor</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Areas served (sitewide internal linking for hyper-local SEO) ── */}
      <div className={styles.areasServedWrap}>
        <div className={styles.areasServed}>
          <span className={styles.areasServedLabel}>
            {isEs ? "Atendemos:" : "Areas served:"}
          </span>
          <Link href={`/${locale}/stone-oak-chiropractor`}>Stone Oak</Link>
          <Link href={`/${locale}/castle-hills-chiropractor`}>Castle Hills</Link>
          <Link href={`/${locale}/alamo-heights-chiropractor`}>Alamo Heights</Link>
          <Link href={`/${locale}/helotes-chiropractor`}>Helotes</Link>
          <Link href={`/${locale}/olmos-park-chiropractor`}>Olmos Park</Link>
          <Link href={`/${locale}/south-san-antonio-chiropractor`}>South San Antonio</Link>
          <Link href={`/${locale}/west-san-antonio-chiropractor`}>West San Antonio</Link>
          <Link href={`/${locale}/east-san-antonio-chiropractor`}>East San Antonio</Link>
          <Link href={`/${locale}/marbach-410-chiropractor`}>Marbach / 410</Link>
          <Link href={`/${locale}/boerne-chiropractor`}>Boerne</Link>
          <Link href={`/${locale}/schertz-chiropractor`}>Schertz</Link>
          <Link href={`/${locale}/cibolo-chiropractor`}>Cibolo</Link>
        </div>
      </div>

      {/* ── Verified Profiles ── */}
      <div className={styles.verifiedWrap}>
      <div className={styles.verified}>
        <span className={styles.verifiedLabel}>{isEs ? "Perfiles verificados:" : "Verified profiles:"}</span>
        <a href="https://www.google.com/maps/place/Pura+Vida+Chiropractic/@29.5275,-98.5647,17z" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on Google Maps San Antonio TX">Google</a>
        <a href="https://www.facebook.com/puravidasanantonio/" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on Facebook">Facebook</a>
        <a href="https://www.instagram.com/puravidasatx/" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on Instagram">Instagram</a>
        <a href="https://www.youtube.com/@puravidadc/videos" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on YouTube">YouTube</a>
        <a href="https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic reviews on Yelp San Antonio">Yelp</a>
        <a href="https://www.healthgrades.com/providers/daniel-foss-2h2pq" target="_blank" rel="noopener noreferrer" title="Dr. Daniel Foss DC on Healthgrades San Antonio chiropractor">Healthgrades</a>
        <a href="https://www.vitals.com/doctors/Dr_Daniel_Foss.html" target="_blank" rel="noopener noreferrer" title="Dr. Dan Foss DC on Vitals">Vitals</a>
        <a href="https://www.zocdoc.com/practice/pura-vida-chiropractic-san-antonio-tx" target="_blank" rel="noopener noreferrer" title="Book Dr. Dan Foss on Zocdoc">Zocdoc</a>
        <a href="https://www.yellowpages.com/san-antonio-tx/mip/pura-vida-chiropractic-472722413" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on YellowPages San Antonio TX">YellowPages</a>
        <a href="https://www.mapquest.com/us/texas/pura-vida-chiropractic-452406523" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on MapQuest">MapQuest</a>
        <a href="https://nextdoor.com/pages/pura-vida-chiropractic-san-antonio-tx/" target="_blank" rel="noopener noreferrer" title="Pura Vida Chiropractic on Nextdoor San Antonio">Nextdoor</a>
      </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.bottomCopy}>
          © {new Date().getFullYear()} Pura Vida Chiropractic.{" "}
          {isEs ? "Todos los derechos reservados." : "All rights reserved."}
        </p>
        <div className={styles.bottomLinks}>
          <Link href={isEs ? '/privacy/es' : '/privacy'}>
            {isEs ? "Privacidad" : "Privacy Policy"}
          </Link>
          <span className={styles.bottomSep}>|</span>
          <Link href={`/${locale}/terms`}>
            {isEs ? "Términos" : "Terms"}
          </Link>
          <span className={styles.bottomSep}>|</span>
          <Link href={`/${locale}/healthcare-disclaimer`}>
            {isEs ? "Aviso Médico" : "Healthcare Disclaimer"}
          </Link>
          <span className={styles.bottomSep}>|</span>
          {/* Patient Rights & Consumer Notices — required "prominent" posting
              under Texas Health & Safety Code §181.105 (HB 4224, eff. 9/1/2025).
              Must contain detailed instructions for: requesting health records,
              contacting the licensing authority (TBCE), and filing a consumer
              complaint per §181.103. Sitewide footer placement satisfies the
              "prominently post on the entity's Internet website" requirement. */}
          <Link href={`/${locale}/patient-rights`}>
            {isEs ? "Derechos del Paciente" : "Patient Rights"}
          </Link>
          <span className={styles.bottomSep}>|</span>
          {/* Site map link surfaces the HTML sitemap that lists every page on
              the domain. Sitewide footer placement collapses crawl depth for
              all 313+ blog posts, condition pages, neighborhood pages, etc.
              to depth 2 (home → /site-map → page) — fixes the Semrush
              "240 pages need >3 clicks" notice without any crawl-budget cost. */}
          <Link href={`/${locale}/site-map`}>
            {isEs ? "Mapa del Sitio" : "Site Map"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
