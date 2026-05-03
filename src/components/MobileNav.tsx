"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  locale: "en" | "es";
  langHref: string;
}

/* ───────────────────────────── nav data ─────────────────────────────
   Mirrors the data in Header.tsx. Kept as a separate copy here so the
   client bundle for the mobile drawer doesn't drag the entire Header
   server component into the client tree. If you add or rename a link
   in Header.tsx, update it here too.
*/

const aboutLinks = {
  en: [
    { label: "About Dr. Dan Foss", href: "/about" },
    { label: "Mission Trips", href: "/mission" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
  es: [
    { label: "Sobre el Dr. Dan Foss", href: "/about" },
    { label: "Misiones Médicas", href: "/mission" },
    { label: "Testimonios", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
};

const patientLinks = {
  en: [
    { label: "New Patient / Initial Visit", href: "/new-patient" },
    { label: "Patient Forms", href: "/new-patient#forms" },
    { label: "Chiropractic FAQs", href: "/faq" },
    { label: "For Providers (Referrals)", href: "/provider-referral" },
    { label: "Contact Us", href: "/contact" },
  ],
  es: [
    { label: "Nuevo Paciente / Primera Visita", href: "/new-patient" },
    { label: "Formularios de Paciente", href: "/new-patient#forms" },
    { label: "Preguntas Frecuentes", href: "/faq" },
    { label: "Para Profesionales (Referidos)", href: "/provider-referral" },
    { label: "Contáctenos", href: "/contact" },
  ],
};

const serviceLinks = {
  en: [
    { label: "Chiropractic Care", href: "/services/chiropractic-care" },
    { label: "SOT Chiropractic", href: "/services/sot-chiropractic" },
    { label: "CMRT Organ Adjusting", href: "/blog/cmrt-organ-adjusting" },
    { label: "Cranial Adjusting (SOT)", href: "/blog/cranial-adjusting-san-antonio" },
    { label: "Pediatric Chiropractor", href: "/services/pediatric-chiropractor" },
    { label: "Prenatal Chiropractor", href: "/services/prenatal-chiropractor" },
    { label: "Pregnancy Chiropractor", href: "/services/pregnancy-chiropractor" },
    { label: "Infants & Chiropractic", href: "/services/infants-chiropractic" },
    { label: "Auto Injury", href: "/services/auto-injury" },
    { label: "SoftWave Therapy", href: "/services/softwave-therapy" },
    { label: "Shockwave Therapy", href: "/services/shockwave-therapy" },
    { label: "Class IV Laser", href: "/services/class-iv-laser" },
    { label: "Sports Chiropractic", href: "/sports-chiropractic" },
    { label: "Wellness Care", href: "/services/wellness-care" },
    { label: "Latino Community", href: "/services/latino-community" },
  ],
  es: [
    { label: "Cuidado Quiropráctico", href: "/services/chiropractic-care" },
    { label: "Quiropráctica SOT", href: "/services/quiropractica-sot" },
    { label: "Ajuste de Órganos (CMRT)", href: "/blog/cmrt-organ-adjusting" },
    { label: "Ajuste Craneal (SOT)", href: "/blog/cranial-adjusting-san-antonio" },
    { label: "Quiropráctico Pediátrico", href: "/services/quiropractico-pediatrico" },
    { label: "Quiropráctico Prenatal", href: "/services/quiropractico-prenatal" },
    { label: "Quiropráctica para Embarazo", href: "/services/quiropractico-embarazo" },
    { label: "Quiropráctica para Bebés", href: "/services/quiropractico-infantes" },
    { label: "Lesiones de Auto", href: "/services/lesiones-de-auto" },
    { label: "Terapia SoftWave", href: "/services/terapia-softwave" },
    { label: "Terapia de Ondas de Choque", href: "/services/terapia-ondas-de-choque" },
    { label: "Láser Clase IV", href: "/services/laser-clase-iv" },
    { label: "Quiropráctica Deportiva", href: "/sports-chiropractic" },
    { label: "Cuidado de Bienestar", href: "/services/wellness-care" },
    { label: "Comunidad Latina", href: "/services/latino-community" },
  ],
};

const sotLinks = {
  en: [
    { label: "What is SOT?", href: "/sot" },
    { label: "SOT FAQ", href: "/sot/faq" },
    { label: "SORSI Lineage", href: "/sot/sorsi" },
    { label: "SOT Indicators", href: "/sot/indicators" },
    { label: "Research & Evidence", href: "/sot/research" },
    { label: "Is Chiropractic Safe?", href: "/sot/safety" },
    { label: "Technic vs Technique", href: "/sot/technic-vs-technique" },
    { label: "Free SOT Guide", href: "/sot/free-guide" },
  ],
  es: [
    { label: "¿Qué es SOT?", href: "/sot" },
    { label: "Preguntas Frecuentes SOT", href: "/sot/faq" },
    { label: "Linaje SORSI", href: "/sot/sorsi" },
    { label: "Indicadores SOT", href: "/sot/indicators" },
    { label: "Investigación y Evidencia", href: "/sot/research" },
    { label: "¿Es Segura la Quiropráctica?", href: "/sot/safety" },
    { label: "Technic vs Technique", href: "/sot/technic-vs-technique" },
    { label: "Guía Gratuita SOT", href: "/sot/free-guide" },
  ],
};

const conditionLinks = {
  en: [
    { label: "Back Pain", href: "/conditions/lower-back-pain" },
    { label: "Neck Pain", href: "/conditions/neck-pain" },
    { label: "Sciatica", href: "/conditions/sciatica" },
    { label: "Headaches & Migraines", href: "/conditions/headaches" },
    { label: "Auto Accident Injuries", href: "/conditions/auto-accident-injuries" },
    { label: "Disc Problems", href: "/conditions/disc-problems" },
    { label: "Scoliosis", href: "/conditions/scoliosis" },
    { label: "Fibromyalgia", href: "/conditions/fibromyalgia" },
    { label: "TMJ", href: "/conditions/tmj-jaw-pain" },
    { label: "Neuropathy", href: "/conditions/neuropathy-numbness" },
    { label: "Knee Pain", href: "/conditions/hip-knee-foot-ankle" },
    { label: "Shoulder Pain", href: "/conditions/shoulder-arm-pain" },
    { label: "Hip Pain", href: "/conditions/hip-knee-foot-ankle" },
    { label: "Plantar Fasciitis", href: "/conditions/plantar-fasciitis" },
    { label: "All Conditions →", href: "/conditions" },
  ],
  es: [
    { label: "Dolor de Espalda", href: "/conditions/lower-back-pain" },
    { label: "Dolor de Cuello", href: "/conditions/neck-pain" },
    { label: "Ciática", href: "/conditions/sciatica" },
    { label: "Dolores de Cabeza", href: "/conditions/headaches" },
    { label: "Lesiones de Auto", href: "/conditions/auto-accident-injuries" },
    { label: "Problemas de Disco", href: "/conditions/disc-problems" },
    { label: "Escoliosis", href: "/conditions/scoliosis" },
    { label: "Fibromialgia", href: "/conditions/fibromyalgia" },
    { label: "ATM / Mandíbula", href: "/conditions/tmj-jaw-pain" },
    { label: "Neuropatía", href: "/conditions/neuropathy-numbness" },
    { label: "Dolor de Rodilla", href: "/conditions/hip-knee-foot-ankle" },
    { label: "Dolor de Hombro", href: "/conditions/shoulder-arm-pain" },
    { label: "Dolor de Cadera", href: "/conditions/hip-knee-foot-ankle" },
    { label: "Fascitis Plantar", href: "/conditions/plantar-fasciitis" },
    { label: "Ver Todas las Condiciones →", href: "/conditions" },
  ],
};

const t = {
  en: {
    open: "Open menu",
    close: "Close menu",
    home: "Home",
    about: "About",
    services: "Services",
    sot: "SOT",
    conditions: "Conditions",
    patients: "Patients",
    blog: "Blog",
    contact: "Contact",
    book: "Free Consultation",
    call: "Call (210) 685-1994",
  },
  es: {
    open: "Abrir menú",
    close: "Cerrar menú",
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    sot: "SOT",
    conditions: "Condiciones",
    patients: "Pacientes",
    blog: "Blog",
    contact: "Contacto",
    book: "Consulta Gratis",
    call: "Llamar (210) 685-1994",
  },
} as const;

export default function MobileNav({ locale, langHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const copy = t[locale] ?? t.en;

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close drawer on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleSection(id: string) {
    setOpenSection((prev) => (prev === id ? null : id));
  }

  const sections: Array<{
    id: string;
    label: string;
    items: { label: string; href: string }[];
  }> = [
    { id: "about", label: copy.about, items: aboutLinks[locale] },
    { id: "services", label: copy.services, items: serviceLinks[locale] },
    { id: "sot", label: copy.sot, items: sotLinks[locale] },
    { id: "conditions", label: copy.conditions, items: conditionLinks[locale] },
    { id: "patients", label: copy.patients, items: patientLinks[locale] },
  ];

  return (
    <>
      {/* Hamburger trigger — shown only at mobile/tablet via CSS */}
      <button
        type="button"
        className={styles.trigger}
        aria-label={copy.open}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
      >
        <span className={styles.bar} aria-hidden="true" />
        <span className={styles.bar} aria-hidden="true" />
        <span className={styles.bar} aria-hidden="true" />
      </button>

      {/* Backdrop + drawer (rendered always; toggled with `open` class) */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-nav-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-label={copy.open}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Pura Vida</span>
          <button
            type="button"
            className={styles.closeBtn}
            aria-label={copy.close}
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <Link
            href={`/${locale}`}
            className={styles.topLink}
            onClick={() => setOpen(false)}
          >
            {copy.home}
          </Link>

          {sections.map((s) => {
            const isOpen = openSection === s.id;
            return (
              <div key={s.id} className={styles.section}>
                <button
                  type="button"
                  className={styles.sectionBtn}
                  aria-expanded={isOpen}
                  onClick={() => toggleSection(s.id)}
                >
                  <span>{s.label}</span>
                  <span
                    className={`${styles.caret} ${isOpen ? styles.caretOpen : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                <ul
                  className={`${styles.sectionItems} ${
                    isOpen ? styles.sectionItemsOpen : ""
                  }`}
                >
                  {s.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={`/${locale}${item.href}`}
                        className={styles.sectionItem}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <Link
            href={`/${locale}/blog`}
            className={styles.topLink}
            onClick={() => setOpen(false)}
          >
            {copy.blog}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className={styles.topLink}
            onClick={() => setOpen(false)}
          >
            {copy.contact}
          </Link>
        </nav>

        <div className={styles.drawerFooter}>
          <Link
            href={langHref}
            className={styles.langSwitch}
            onClick={() => setOpen(false)}
          >
            {locale === "en" ? "🇲🇽 Ver en Español" : "🇺🇸 View in English"}
          </Link>
          <a
            href={`/${locale}/book-now`}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.book}
          </a>
          <a href="tel:+12106851994" className={styles.callBtn}>
            📞 {copy.call}
          </a>
        </div>
      </aside>
    </>
  );
}
