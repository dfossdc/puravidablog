import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./office-hours.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/office-hours`;
  return {
    title: isEs
      ? "Horario de Oficina | Pura Vida Chiropractic San Antonio TX"
      : "Office Hours | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "Horario de atención de Pura Vida Chiropractic: lunes, martes y jueves de 7:00 AM a 4:00 PM. Ubicados en 2318 NW Military Hwy #103, San Antonio TX 78231. Llame al (210) 685-1994."
      : "Pura Vida Chiropractic office hours: Monday, Tuesday, and Thursday 7:00 AM – 4:00 PM. Located at 2318 NW Military Hwy #103, San Antonio TX 78231. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/office-hours`,
        es: `${BASE_URL}/es/office-hours`,
        "x-default": `${BASE_URL}/en/office-hours`,
      },
    },
    openGraph: {
      title: isEs ? "Horario de Oficina | Pura Vida Chiropractic" : "Office Hours | Pura Vida Chiropractic",
      description: isEs
        ? "Abierto lunes, martes y jueves — 7:00 AM a 4:00 PM. San Antonio, TX 78231."
        : "Open Monday, Tuesday & Thursday — 7:00 AM to 4:00 PM. San Antonio, TX 78231.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const hours = [
  { day: { en: "Monday", es: "Lunes" },      open: true,  time: "7:00 AM – 4:00 PM" },
  { day: { en: "Tuesday", es: "Martes" },     open: true,  time: "7:00 AM – 4:00 PM" },
  { day: { en: "Wednesday", es: "Miércoles"},  open: false, time: null },
  { day: { en: "Thursday", es: "Jueves" },    open: true,  time: "7:00 AM – 4:00 PM" },
  { day: { en: "Friday", es: "Viernes" },     open: false, time: null },
  { day: { en: "Saturday", es: "Sábado" },    open: false, time: null },
  { day: { en: "Sunday", es: "Domingo" },     open: false, time: null },
];

const faqs = {
  en: [
    {
      q: "Do I need an appointment?",
      a: "Yes — we operate by appointment to ensure Dr. Foss can dedicate adequate time to each patient. Same-day appointments are often available. Call (210) 685-1994 or book online.",
    },
    {
      q: "What if I need care outside regular hours?",
      a: "For urgent situations such as auto accidents, we do our best to accommodate patients quickly. Call us at (210) 685-1994 and we will find the earliest available slot.",
    },
    {
      q: "How long is a typical appointment?",
      a: "New patient visits typically take 60–90 minutes and include a full health history, examination, and your first adjustment. Follow-up appointments are generally 20–40 minutes.",
    },
    {
      q: "Do you accept walk-ins?",
      a: "We prefer scheduled appointments to minimize your wait time, but we welcome walk-ins when space allows. Call ahead to check availability.",
    },
    {
      q: "Is there parking available?",
      a: "Yes — we have free, convenient parking directly in front of our suite at 2318 NW Military Hwy #103, San Antonio, TX 78231.",
    },
  ],
  es: [
    {
      q: "¿Necesito hacer una cita?",
      a: "Sí — operamos con citas previas para garantizar que el Dr. Foss pueda dedicarle el tiempo suficiente a cada paciente. A menudo hay disponibilidad el mismo día. Llame al (210) 685-1994 o reserve en línea.",
    },
    {
      q: "¿Qué hago si necesito atención fuera del horario regular?",
      a: "Para situaciones urgentes como accidentes de auto, hacemos todo lo posible para atender a los pacientes rápidamente. Llámenos al (210) 685-1994 y encontraremos el primer espacio disponible.",
    },
    {
      q: "¿Cuánto dura una cita típica?",
      a: "Las visitas de nuevos pacientes generalmente duran 60–90 minutos e incluyen historial clínico completo, examen y su primer ajuste. Las citas de seguimiento son generalmente de 20–40 minutos.",
    },
    {
      q: "¿Aceptan pacientes sin cita?",
      a: "Preferimos citas programadas para minimizar el tiempo de espera, pero damos la bienvenida a quienes lleguen sin cita cuando hay espacio disponible. Llame primero para verificar disponibilidad.",
    },
    {
      q: "¿Hay estacionamiento disponible?",
      a: "Sí — contamos con estacionamiento gratuito y conveniente directamente frente a nuestra suite en 2318 NW Military Hwy #103, San Antonio, TX 78231.",
    },
  ],
};

export default async function OfficeHoursPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/office-hours" />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.heroEyebrow}>Pura Vida Chiropractic · San Antonio, TX</p>
          <h1 className={styles.heroTitle}>
            {isEs ? "Horario de Oficina" : "Office Hours"}
          </h1>
          <p className={styles.heroSub}>
            {isEs
              ? "Estamos aquí para usted — reserve su evaluación gratuita con el Dr. Dan Foss hoy."
              : "We're here for you — book your free evaluation with Dr. Dan Foss today."}
          </p>
        </section>

        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Hours card */}
            <div className={styles.hoursCard}>
              <h2 className={styles.cardTitle}>
                {isEs ? "Horario de Atención" : "Office Hours"}
              </h2>
              <ul className={styles.hoursList}>
                {hours.map((h) => (
                  <li key={h.day.en} className={`${styles.hourRow} ${h.open ? styles.hourOpen : styles.hourClosed}`}>
                    <span className={styles.dayName}>{isEs ? h.day.es : h.day.en}</span>
                    <span className={styles.timeValue}>
                      {h.open ? h.time : (isEs ? "Cerrado" : "Closed")}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={styles.hoursNote}>
                {isEs
                  ? "¡Hablamos Español! Toda la clínica opera en inglés y español."
                  : "¡Hablamos Español! The entire clinic operates in English and Spanish."}
              </p>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.bookBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reservar Cita →" : "Book Appointment →"}
              </a>
            </div>

            {/* Location card */}
            <div className={styles.locationCard}>
              <h2 className={styles.cardTitle}>
                {isEs ? "Cómo Llegar" : "How to Find Us"}
              </h2>
              <address className={styles.address}>
                <strong>Pura Vida Chiropractic</strong><br />
                2318 NW Military Hwy, Suite 103<br />
                San Antonio, TX 78231
              </address>
              <p className={styles.areaNote}>
                {isEs
                  ? "Convenientemente ubicados en NW Military Hwy, sirviendo a Castle Hills, Stone Oak, Alamo Heights, Helotes y el norte de San Antonio."
                  : "Conveniently located on NW Military Hwy, serving Castle Hills, Stone Oak, Alamo Heights, Helotes, and North San Antonio."}
              </p>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <a href="tel:+12106851994" className={styles.contactLink}>(210) 685-1994</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href="mailto:dfossdc@yahoo.com" className={styles.contactLink}>dfossdc@yahoo.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <a
                    href="https://google.com/maps/place/Pura+Vida+Chiropractic/data=!4m2!3m1!1s0x0:0x1c1e96c3d09ddb87?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    {isEs ? "Ver en Google Maps" : "View on Google Maps"}
                  </a>
                </div>
              </div>
              <div className={styles.mapWrap}>
                <iframe
                  title={isEs ? "Mapa de Pura Vida Chiropractic" : "Pura Vida Chiropractic location map"}
                  src="https://maps.google.com/maps?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Insurance & payment */}
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Seguros y Formas de Pago" : "Insurance & Payment"}
            </h2>
            <p className={styles.sectionText}>
              {isEs
                ? "Aceptamos la mayoría de los planes de seguro médico principales, incluyendo Blue Cross Blue Shield de Texas, UnitedHealthcare, Humana, Aetna, Ambetter, Oscar Health, Community First y Molina Healthcare. También aceptamos casos de seguro de auto para lesiones relacionadas con accidentes de tráfico. Ofrecemos planes de pago flexibles para pacientes sin seguro o con cobertura limitada. Nadie debería quedarse sin atención quiropráctica por razones financieras — hable con nosotros sobre sus opciones."
                : "We accept most major health insurance plans including Blue Cross Blue Shield of Texas, UnitedHealthcare, Humana, Aetna, Ambetter, Oscar Health, Community First, and Molina Healthcare. We also accept auto insurance for accident-related injuries. Flexible payment plans are available for patients without insurance or with limited coverage. No one should go without chiropractic care for financial reasons — talk to us about your options."}
            </p>
          </section>

          {/* FAQ */}
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className={styles.faqList}>
              {faqs[isEs ? "es" : "en"].map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{faq.q}</h3>
                  <p className={styles.faqA}>{faq.a}</p>
                </div>
              ))}
            </div>
            <p className={styles.faqMore}>
              {isEs ? "¿Más preguntas? Vea nuestra " : "More questions? See our "}
              <Link href={`/${locale}/faq`} className={styles.inlineLink}>
                {isEs ? "página completa de Preguntas Frecuentes" : "full FAQ page"}
              </Link>
              {isEs ? " o " : " or "}
              <Link href={`/${locale}/contact`} className={styles.inlineLink}>
                {isEs ? "contáctenos directamente." : "contact us directly."}
              </Link>
            </p>
          </section>

          {/* New patient CTA */}
          <section className={styles.ctaBox}>
            <h2>{isEs ? "¿Primera Vez en Nuestra Clínica?" : "First Time at Our Clinic?"}</h2>
            <p>
              {isEs
                ? "Descubra qué esperar en su primera visita, cómo prepararse y cómo descargar los formularios de nuevo paciente antes de llegar."
                : "Learn what to expect on your first visit, how to prepare, and how to download new patient forms before you arrive."}
            </p>
            <div className={styles.ctaBtns}>
              <Link href={`/${locale}/new-patient`} className={styles.ctaPrimary}>
                {isEs ? "Información de Nuevos Pacientes →" : "New Patient Information →"}
              </Link>
              <Link href={`/${locale}/new-patient#forms`} className={styles.ctaSecondary}>
                {isEs ? "Descargar Formularios" : "Download Forms"}
              </Link>
            </div>
          </section>
        </div>

      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
