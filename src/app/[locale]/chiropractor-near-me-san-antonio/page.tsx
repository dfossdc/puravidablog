import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/chiropractor-near-me-san-antonio`;
  return {
    title: isEs
      ? "Quiropráctico Cerca de Mí en San Antonio TX | Pura Vida"
      : "Chiropractor Near Me in San Antonio TX | Pura Vida Chiropractic",
    description: isEs
      ? "¿Buscas un quiropráctico cerca de ti en San Antonio TX? Pura Vida Chiropractic — Dr. Dan Foss DC ofrece evaluación gratuita, atención bilingüe y técnicas avanzadas. Llame (210) 685-1994."
      : "Looking for a chiropractor near you in San Antonio TX? Pura Vida Chiropractic — Dr. Dan Foss DC offers free evaluation, bilingual care, and advanced techniques. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/chiropractor-near-me-san-antonio`,
        es: `${BASE_URL}/es/chiropractor-near-me-san-antonio`,
        "x-default": `${BASE_URL}/en/chiropractor-near-me-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctico Cerca de Mí en San Antonio TX"
        : "Chiropractor Near Me in San Antonio TX",
      description: isEs
        ? "Pura Vida Chiropractic en San Antonio. Atención bilingüe, primera evaluación gratis."
        : "Pura Vida Chiropractic in San Antonio. Bilingual care, free first evaluation.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

const distances = [
  { name: "Stone Oak", time: "15 min", miles: "9 mi" },
  { name: "Alamo Heights", time: "10 min", miles: "5 mi" },
  { name: "Castle Hills", time: "5 min", miles: "2 mi" },
  { name: "Helotes", time: "15 min", miles: "8 mi" },
  { name: "Leon Valley", time: "10 min", miles: "5 mi" },
  { name: "Medical Center", time: "8 min", miles: "4 mi" },
  { name: "Boerne", time: "25 min", miles: "20 mi" },
  { name: "Schertz", time: "25 min", miles: "18 mi" },
  { name: "Cibolo", time: "30 min", miles: "22 mi" },
  { name: "Universal City", time: "25 min", miles: "16 mi" },
  { name: "Live Oak", time: "25 min", miles: "16 mi" },
  { name: "Northside / Westside SA", time: "12 min", miles: "6 mi" },
];

const faqs = [
  {
    en: {
      q: "How do I find a chiropractor near me in San Antonio?",
      a: "Pura Vida Chiropractic is centrally located in northwest San Antonio at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231. Most San Antonio neighborhoods reach our office in 15 minutes or less — including Stone Oak, Alamo Heights, Castle Hills, Helotes, Leon Valley, and Medical Center. Call (210) 685-1994 or book online at puravidasanantonio.com/special.",
    },
    es: {
      q: "¿Cómo encuentro un quiropráctico cerca de mí en San Antonio?",
      a: "Pura Vida Chiropractic está céntricamente ubicado en el noroeste de San Antonio en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231. La mayoría de los vecindarios de San Antonio llegan a nuestra oficina en 15 minutos o menos. Llame al (210) 685-1994 o reserve en línea en puravidasanantonio.com/special.",
    },
  },
  {
    en: {
      q: "What's the closest chiropractor to me right now?",
      a: "If you're searching 'chiropractor near me' from anywhere in San Antonio, Pura Vida Chiropractic is likely your closest top-rated option. We hold a 4.9-star Google rating across 147+ reviews, are insurance friendly, and offer a free first evaluation. Open Monday, Tuesday, and Thursday 7 AM – 4 PM.",
    },
    es: {
      q: "¿Cuál es el quiropráctico más cercano a mí ahora mismo?",
      a: "Si está buscando 'quiropráctico cerca de mí' desde cualquier parte de San Antonio, Pura Vida Chiropractic probablemente es su opción mejor calificada más cercana. Tenemos calificación de 4.9 estrellas en Google con 147+ reseñas, somos insurance friendly, y ofrecemos primera evaluación gratis.",
    },
  },
  {
    en: {
      q: "Are you open today?",
      a: "Pura Vida Chiropractic is open Monday, Tuesday, and Thursday from 7:00 AM to 4:00 PM. We are closed Wednesdays, Fridays, Saturdays, and Sundays. Call (210) 685-1994 to schedule your visit.",
    },
    es: {
      q: "¿Están abiertos hoy?",
      a: "Pura Vida Chiropractic está abierto los lunes, martes y jueves de 7:00 AM a 4:00 PM. Estamos cerrados los miércoles, viernes, sábados y domingos. Llame al (210) 685-1994 para agendar su visita.",
    },
  },
  {
    en: {
      q: "Is the first visit free?",
      a: "Yes — new patients get a complimentary initial evaluation, including consultation, postural assessment, and a clear explanation of treatment options. No commitment required. Call (210) 685-1994 to book.",
    },
    es: {
      q: "¿Es gratis la primera visita?",
      a: "Sí — los pacientes nuevos reciben una evaluación inicial gratuita que incluye consulta, evaluación postural y una explicación clara de las opciones de tratamiento. Sin compromiso. Llame al (210) 685-1994 para reservar.",
    },
  },
  {
    en: {
      q: "What insurance do you accept?",
      a: "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care.",
    },
    es: {
      q: "¿Qué seguros aceptan?",
      a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
    },
  },
  {
    en: {
      q: "Do you treat conditions other than back pain?",
      a: "Yes — we treat over 90 conditions including neck pain, headaches, migraines, sciatica, scoliosis, vertigo, auto injuries, pregnancy-related pain, infant colic, torticollis, ADHD, and many more. View our full conditions list at /en/conditions.",
    },
    es: {
      q: "¿Tratan otras condiciones además del dolor de espalda?",
      a: "Sí — tratamos más de 90 condiciones incluyendo dolor de cuello, dolores de cabeza, migrañas, ciática, escoliosis, vértigo, lesiones de auto, dolor relacionado con embarazo, cólicos infantiles, torticolis, TDAH y muchas más.",
    },
  },
];

export default async function ChiropractorNearMePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/chiropractor-near-me-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    description: isEs
      ? "Quiropráctico cerca de usted en San Antonio TX. Atención bilingüe."
      : "Chiropractor near you in San Antonio TX. Bilingual care.",
    image: `${BASE_URL}/images/dr-foss-adjusting-patient.webp`,
    url: canonical,
    telephone: "+12106851994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2318 NW Military Hwy, Suite 103",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78231",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5447,
      longitude: -98.5394,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+12106851994",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    areaServed: distances.map((d) => ({ "@type": "Place", name: d.name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => {
      const item = isEs ? f.es : f.en;
      return {
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Quiropráctico Cerca de Mí en San Antonio" : "Chiropractor Near Me in San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/chiropractor-near-me-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs
                ? "Pura Vida Chiropractic · 2318 NW Military Hwy · San Antonio TX 78231"
                : "Pura Vida Chiropractic · 2318 NW Military Hwy · San Antonio TX 78231"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Quiropráctico Cerca de Mí en San Antonio, TX"
                : "Chiropractor Near Me in San Antonio, TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "Pura Vida Chiropractic — el quiropráctico mejor calificado cerca de usted en San Antonio. Atención bilingüe, primera evaluación gratuita, 23+ años de experiencia. La mayoría de los pacientes llegan a nuestra oficina en 15 minutos o menos."
                : "Pura Vida Chiropractic — the top-rated chiropractor near you in San Antonio. Bilingual care, free first evaluation, 23+ years of experience. Most patients reach our office in 15 minutes or less."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 4.9/5 Google</span>
              <span className={styles.badge}>147+ {isEs ? "reseñas" : "reviews"}</span>
              <span className={styles.badge}>{isEs ? "Bilingüe" : "Bilingual EN/ES"}</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
              <span className={styles.badge}>{isEs ? "Insurance Friendly" : "Insurance Friendly"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "¿Qué Tan Cerca Estamos? Tiempos de Manejo" : "How Close Are We? Drive Times to Our Office"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Estos son los tiempos típicos de manejo desde los principales vecindarios de San Antonio hasta nuestra oficina en NW Military Hwy."
                : "Typical drive times from the main San Antonio neighborhoods to our office on NW Military Hwy."}
            </p>
            <div className={styles.distanceGrid}>
              {distances.map((d) => (
                <div key={d.name} className={styles.distanceCard}>
                  <h3 className={styles.distanceName}>{d.name}</h3>
                  <p className={styles.distanceTime}>🚗 {d.time}</p>
                  <p className={styles.distanceMiles}>{d.miles}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.napSection}>
            <div className={styles.napInfo}>
              <h2 className={styles.h2}>{isEs ? "Información de Contacto" : "Contact Information"}</h2>
              <p className={styles.napAddress}>
                <strong>Pura Vida Chiropractic</strong><br />
                2318 NW Military Hwy, Suite 103<br />
                San Antonio, TX 78231
              </p>
              <p className={styles.napPhone}>
                <strong>{isEs ? "Teléfono: " : "Phone: "}</strong>
                <a href="tel:+12106851994">(210) 685-1994</a>
              </p>
              <p className={styles.napHours}>
                <strong>{isEs ? "Horario:" : "Hours:"}</strong><br />
                {isEs ? "Lunes, Martes, Jueves" : "Monday, Tuesday, Thursday"}: 7:00 AM – 4:00 PM<br />
                {isEs ? "Miércoles, Viernes, Sábado, Domingo" : "Wednesday, Friday, Saturday, Sunday"}: {isEs ? "Cerrado" : "Closed"}
              </p>
              <div className={styles.napActions}>
                <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.napBtnPrimary}>
                  {isEs ? "Reservar Cita Gratuita" : "Book Free Appointment"}
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Pura+Vida+Chiropractic+San+Antonio+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.napBtnSecondary}
                >
                  {isEs ? "Cómo Llegar" : "Get Directions"}
                </a>
              </div>
            </div>
            <div className={styles.napMap}>
              <iframe
                title={isEs ? "Mapa de Pura Vida Chiropractic" : "Map of Pura Vida Chiropractic"}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Pura+Vida+Chiropractic,2318+NW+Military+Hwy,San+Antonio,TX+78231&zoom=14"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</h2>
            <div className={styles.faqList}>
              {faqs.map((f, i) => {
                const item = isEs ? f.es : f.en;
                return (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQ}>{item.q}</summary>
                    <p className={styles.faqA}>{item.a}</p>
                  </details>
                );
              })}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>{isEs ? "Más Información" : "More Information"}</h2>
            <div className={styles.linkGrid}>
              <Link href={`/${locale}/best-chiropractor-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Mejor Quiropráctico San Antonio" : "Best Chiropractor in San Antonio"}</span>
              </Link>
              <Link href={`/${locale}/services`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Todos Nuestros Servicios" : "All Our Services"}</span>
              </Link>
              <Link href={`/${locale}/conditions`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Condiciones que Tratamos (90+)" : "Conditions We Treat (90+)"}</span>
              </Link>
              <Link href={`/${locale}/meet-dr-foss`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Conocer al Dr. Foss" : "Meet Dr. Foss"}</span>
              </Link>
              <Link href={`/es/quiropractico-cerca-de-mi-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Versión en Español" : "En Español"}</span>
              </Link>
              <Link href={`/${locale}/new-patient`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Información para Nuevos Pacientes" : "New Patient Info"}</span>
              </Link>
            </div>
          </section>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? "Su Quiropráctico Cercano en San Antonio le Espera"
                : "Your Local Chiropractor in San Antonio is Waiting"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve su evaluación gratuita hoy. Sin compromiso. Llame ahora o reserve en línea las 24 horas."
                : "Book your free evaluation today. No commitment. Call now or book online 24/7."}
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.ctaPhone}>📞 (210) 685-1994</a>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
