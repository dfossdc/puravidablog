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
  const canonical = `${BASE_URL}/${locale}/quiropractico-cerca-de-mi-san-antonio`;
  return {
    title: isEs
      ? "Quiropráctico Cerca de Mí en San Antonio TX | Atención Bilingüe"
      : "Spanish-Speaking Chiropractor Near You in San Antonio TX | Pura Vida",
    description: isEs
      ? "¿Busca un quiropráctico cerca de mí que hable español en San Antonio TX? Pura Vida Chiropractic — Dr. Dan Foss DC ofrece atención quiropráctica bilingüe a familias hispanas en San Antonio. Llame (210) 685-1994."
      : "Looking for a Spanish-speaking chiropractor near you in San Antonio, TX? Pura Vida Chiropractic offers bilingual chiropractic care for Hispanic families. Call (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/quiropractico-cerca-de-mi-san-antonio`,
        es: `${BASE_URL}/es/quiropractico-cerca-de-mi-san-antonio`,
        "x-default": `${BASE_URL}/es/quiropractico-cerca-de-mi-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctico Cerca de Mí en San Antonio TX | Atención Bilingüe"
        : "Spanish-Speaking Chiropractor Near You in San Antonio TX",
      description: isEs
        ? "Quiropráctico bilingüe cerca de usted en San Antonio. Dr. Dan Foss DC, atención en español, 23+ años de experiencia."
        : "Bilingual chiropractor near you in San Antonio. Dr. Dan Foss DC, Spanish-language care, 23+ years experience.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

// Distance/time from popular SA neighborhoods to our office
const distances = [
  { es: "Stone Oak", en: "Stone Oak", time: "15 min", miles: "9 mi" },
  { es: "Alamo Heights", en: "Alamo Heights", time: "10 min", miles: "5 mi" },
  { es: "Castle Hills", en: "Castle Hills", time: "5 min", miles: "2 mi" },
  { es: "Helotes", en: "Helotes", time: "15 min", miles: "8 mi" },
  { es: "Leon Valley", en: "Leon Valley", time: "10 min", miles: "5 mi" },
  { es: "Medical Center", en: "Medical Center", time: "8 min", miles: "4 mi" },
  { es: "Boerne", en: "Boerne", time: "25 min", miles: "20 mi" },
  { es: "Schertz", en: "Schertz", time: "25 min", miles: "18 mi" },
  { es: "Cibolo", en: "Cibolo", time: "30 min", miles: "22 mi" },
  { es: "Universal City", en: "Universal City", time: "25 min", miles: "16 mi" },
  { es: "Live Oak", en: "Live Oak", time: "25 min", miles: "16 mi" },
  { es: "Northside / Westside", en: "Northside / Westside SA", time: "12 min", miles: "6 mi" },
];

// Spanish FAQ targeting the cerca-de-mi cluster + SA-specific concerns
const faqs = [
  {
    es: {
      q: "¿Hay un quiropráctico cerca de mí en San Antonio que hable español?",
      a: "Sí. En Pura Vida Chiropractic, el Dr. Dan Foss, DC y todo nuestro equipo hablan español con fluidez. Atendemos a la comunidad hispana de San Antonio sin barreras de idioma — desde la primera consulta, durante todo el tratamiento y en cada visita de seguimiento. Nuestra oficina está en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231, fácil de alcanzar desde cualquier vecindario del área metropolitana.",
    },
    en: {
      q: "Is there a Spanish-speaking chiropractor near me in San Antonio?",
      a: "Yes. At Pura Vida Chiropractic, Dr. Dan Foss, DC and our entire team speak Spanish fluently. We serve the Hispanic community of San Antonio without language barriers — from the first consultation, throughout treatment, and at every follow-up. Our office is at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231, easy to reach from any neighborhood in the metro area.",
    },
  },
  {
    es: {
      q: "¿Cuánto cuesta una visita al quiropráctico en San Antonio?",
      a: "En Pura Vida Chiropractic ofrecemos una evaluación inicial gratuita para nuevos pacientes. Las visitas regulares varían según el plan de tratamiento que necesite. Somos insurance friendly — le proporcionamos superbills detallados que puede enviar a su seguro para reembolso fuera de red, y ofrecemos planes de pago accesibles. Llame al (210) 685-1994 para discutir su caso específico — sin costo, sin compromiso.",
    },
    en: {
      q: "How much does a chiropractor visit cost in San Antonio?",
      a: "At Pura Vida Chiropractic we offer a free initial evaluation for new patients. Regular visits vary based on the treatment plan you need. We are insurance friendly and offer accessible payment plans. Call (210) 685-1994 to discuss your specific case — no cost, no commitment.",
    },
  },
  {
    es: {
      q: "¿Cuál quiropráctico en San Antonio está abierto hoy?",
      a: "Pura Vida Chiropractic está abierto de lunes a jueves. Lunes, martes y jueves de 7:00 AM a 4:00 PM. Estamos cerrados los miércoles, viernes, sábados y domingos. Llame al (210) 685-1994 para reservar su cita o usar nuestro formulario en línea.",
    },
    en: {
      q: "Which chiropractor in San Antonio is open today?",
      a: "Pura Vida Chiropractic is open Monday through Thursday. Monday, Tuesday, and Thursday from 7:00 AM to 4:00 PM. We are closed Wednesdays, Fridays, Saturdays, and Sundays. Call (210) 685-1994 to book your appointment or use our online form.",
    },
  },
  {
    es: {
      q: "¿Mi seguro médico cubre la quiropráctica en San Antonio?",
      a: "Muchos planes de seguros médicos cubren atención quiropráctica. Pura Vida Chiropractic es insurance friendly — le proporcionamos superbills detallados que puede enviar a su seguro para reembolso fuera de red. También ofrecemos planes de pago accesibles para pacientes sin seguro.",
    },
    en: {
      q: "Does my health insurance cover chiropractic in San Antonio?",
      a: "Many health insurance plans cover chiropractic care. Pura Vida Chiropractic is insurance friendly — we provide detailed superbills you can submit to your insurance for out-of-network reimbursement. We also offer accessible payment plans for uninsured patients.",
    },
  },
  {
    es: {
      q: "¿Qué condiciones trata un quiropráctico en San Antonio?",
      a: "Tratamos más de 90 condiciones, incluyendo dolor de espalda baja, dolor de cuello, dolor de cabeza y migrañas, ciática, hernia de disco, escoliosis, lesiones de auto, problemas durante el embarazo, cólicos infantiles, torticolis, vértigo (BPPV), TDAH, y muchas más. Si tiene dolor o una condición que no encuentra en la lista, llámenos al (210) 685-1994 para una consulta gratuita.",
    },
    en: {
      q: "What conditions does a chiropractor treat in San Antonio?",
      a: "We treat over 90 conditions including low back pain, neck pain, headaches and migraines, sciatica, herniated discs, scoliosis, auto injuries, pregnancy issues, infant colic, torticollis, vertigo (BPPV), ADHD, and many more. If you have pain or a condition not listed, call us at (210) 685-1994 for a free consultation.",
    },
  },
  {
    es: {
      q: "¿Es seguro ir al quiropráctico durante el embarazo?",
      a: "Sí, es seguro y muy recomendado. El Dr. Foss tiene formación especializada en cuidado prenatal usando la técnica Webster, que es suave y segura durante todo el embarazo. La quiropráctica prenatal puede aliviar el dolor de espalda y pelvis del embarazo, mejorar la posición fetal, reducir la duración del trabajo de parto y facilitar un embarazo más cómodo.",
    },
    en: {
      q: "Is it safe to see a chiropractor during pregnancy?",
      a: "Yes, it is safe and highly recommended. Dr. Foss has specialized training in prenatal care using the Webster Technique, which is gentle and safe throughout pregnancy. Prenatal chiropractic can relieve pregnancy back and pelvis pain, improve fetal positioning, reduce labor duration, and make pregnancy more comfortable.",
    },
  },
  {
    es: {
      q: "¿Pueden los niños y bebés ir al quiropráctico?",
      a: "Absolutamente. El Dr. Foss tiene amplia experiencia en quiropráctica pediátrica y trata bebés desde los primeros días de vida. Los ajustes pediátricos son extremadamente suaves — usamos solo la presión de un dedo para bebés. La quiropráctica infantil puede ayudar con cólicos, problemas de sueño, torticolis, reflujo, problemas de lactancia, problemas de oído recurrentes, TDAH y desarrollo postural saludable.",
    },
    en: {
      q: "Can children and babies see a chiropractor?",
      a: "Absolutely. Dr. Foss has extensive experience in pediatric chiropractic and treats babies from the first days of life. Pediatric adjustments are extremely gentle — we use only finger-pressure for babies. Pediatric chiropractic can help with colic, sleep problems, torticollis, reflux, breastfeeding issues, recurrent ear problems, ADHD, and healthy postural development.",
    },
  },
  {
    es: {
      q: "¿Cuántas sesiones de quiropráctica voy a necesitar?",
      a: "Depende completamente de su condición. Algunos pacientes mejoran significativamente en 3-6 visitas, otros necesitan un plan más largo. En su primera evaluación gratuita, el Dr. Foss revisará su caso, le explicará exactamente qué espera y le dará un cronograma claro. Nunca recomendamos más visitas de las que realmente necesita.",
    },
    en: {
      q: "How many chiropractic sessions will I need?",
      a: "It depends entirely on your condition. Some patients improve significantly in 3-6 visits, others need a longer plan. At your free initial evaluation, Dr. Foss will review your case, explain exactly what to expect, and give you a clear timeline. We never recommend more visits than you actually need.",
    },
  },
  {
    es: {
      q: "¿El ajuste quiropráctico duele?",
      a: "No. El ajuste quiropráctico no debe ser doloroso. La mayoría de los pacientes describen una sensación de alivio inmediato. En Pura Vida Chiropractic usamos técnicas suaves y específicas — incluyendo SOT (Sacro-Occipital Technique) y ajustes de baja fuerza para pacientes sensibles, ancianos, embarazadas y bebés.",
    },
    en: {
      q: "Does the chiropractic adjustment hurt?",
      a: "No. Chiropractic adjustments should not be painful. Most patients describe an immediate sense of relief. At Pura Vida Chiropractic we use gentle, specific techniques — including SOT (Sacro-Occipital Technique) and low-force adjustments for sensitive patients, elderly, pregnant women, and babies.",
    },
  },
  {
    es: {
      q: "¿Cómo reservo una cita con un quiropráctico hispano cerca de mí en San Antonio?",
      a: "Es muy fácil. Llame al (210) 685-1994 para hablar directamente con nuestro equipo bilingüe, o reserve en línea las 24 horas en puravidasanantonio.com/special. Su primera evaluación es gratuita. Estamos en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231 — fácil de alcanzar desde cualquier punto del área metropolitana.",
    },
    en: {
      q: "How do I book an appointment with a Hispanic chiropractor near me in San Antonio?",
      a: "It is very easy. Call (210) 685-1994 to speak directly with our bilingual team, or book online 24/7 at puravidasanantonio.com/special. Your first evaluation is free. We are at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231 — easy to reach from anywhere in the metro area.",
    },
  },
];

// Other Spanish SA pages to cross-link
const relatedSpanishPages = [
  { slug: "el-mejor-quiropractico-san-antonio", es: "El Mejor Quiropráctico San Antonio", en: "Best Chiropractor San Antonio" },
  { slug: "quiropratico-san-antonio", es: "Quiropráctico San Antonio (Servicios)", en: "Chiropractor San Antonio (Services)" },
  { slug: "san-antonio-quiropractico", es: "San Antonio Quiropráctico (Información)", en: "San Antonio Chiropractor (Info)" },
];

export default async function QuiropracticoCercaDeMiSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/quiropractico-cerca-de-mi-san-antonio`;

  // Chiropractor LocalBusiness schema with bilingual ContactPoint
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["Pura Vida Quiropráctico", "Quiropráctico Pura Vida San Antonio"],
    description: isEs
      ? "Quiropráctico cerca de usted en San Antonio TX que habla español. Dr. Dan Foss, DC ofrece atención quiropráctica bilingüe."
      : "Spanish-speaking chiropractor near you in San Antonio TX. Dr. Dan Foss, DC offers bilingual chiropractic care.",
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
      availableLanguage: ["English", "Spanish", "es", "en"],
      areaServed: {
        "@type": "City",
        name: "San Antonio",
      },
    },
    areaServed: [
      { "@type": "City", name: "San Antonio" },
      { "@type": "City", name: "Boerne" },
      { "@type": "City", name: "Schertz" },
      { "@type": "City", name: "Cibolo" },
      { "@type": "City", name: "Helotes" },
      { "@type": "City", name: "Universal City" },
      { "@type": "Place", name: "Stone Oak" },
      { "@type": "Place", name: "Alamo Heights" },
      { "@type": "Place", name: "Castle Hills" },
      { "@type": "Place", name: "Leon Valley" },
      { "@type": "Place", name: "Medical Center San Antonio" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    sameAs: [
      "https://www.youtube.com/@puravidadc",
      "https://www.facebook.com/puravidasanantonio",
      "https://www.instagram.com/puravidasanantonio",
    ],
  };

  // FAQPage schema — every question and answer in the user's language
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => {
      const item = isEs ? f.es : f.en;
      return {
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      };
    }),
  };

  // Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Quiropráctico Cerca de Mí en San Antonio" : "Spanish-Speaking Chiropractor Near You in San Antonio",
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/quiropractico-cerca-de-mi-san-antonio" />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs
                ? "Pura Vida Chiropractic · Atención Bilingüe en San Antonio"
                : "Pura Vida Chiropractic · Bilingual Care in San Antonio"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Quiropráctico Cerca de Mí en San Antonio"
                : "Spanish-Speaking Chiropractor Near You in San Antonio"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "¿Está buscando un quiropráctico cerca de mí en San Antonio TX que hable español? En Pura Vida Chiropractic, el Dr. Dan Foss, DC y todo el equipo lo atienden completamente en español. Más de 23 años de experiencia, 147+ reseñas de 5 estrellas, y atención personalizada para toda su familia. Su primera evaluación es gratuita."
                : "Looking for a Spanish-speaking chiropractor near you in San Antonio, TX? At Pura Vida Chiropractic, Dr. Dan Foss, DC and the entire team serve you completely in Spanish (and English). 23+ years of experience, 147+ five-star reviews, and personalized care for your whole family. Your first evaluation is free."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>{isEs ? "Bilingüe Inglés/Español" : "Bilingual EN/ES"}</span>
              <span className={styles.badge}>⭐ 4.9/5 Google</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
              <span className={styles.badge}>{isEs ? "Insurance Friendly" : "Insurance Friendly"}</span>
              <span className={styles.badge}>{isEs ? "Primera visita gratis" : "Free first visit"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>

          {/* Why "near me" matters */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? "El Quiropráctico Bilingüe Más Cercano para Familias Hispanas en San Antonio"
                : "The Closest Bilingual Chiropractor for Hispanic Families in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "San Antonio es una ciudad mayoritariamente hispana, y muchas familias prefieren atención médica en su idioma. En Pura Vida Chiropractic encontrará un quiropráctico cerca de usted que habla español con fluidez — desde la primera llamada, durante todo el examen físico, en cada explicación de tratamiento, y en cada visita de seguimiento. No necesita traductores ni adivinar términos médicos en inglés. Le explicamos cada paso en su idioma."
                : "San Antonio is a majority-Hispanic city, and many families prefer medical care in their language. At Pura Vida Chiropractic you will find a chiropractor near you who speaks Spanish fluently — from the first phone call, during the entire physical exam, in every treatment explanation, and at every follow-up visit. No need for translators or guessing medical terms in English. We explain every step in your language."}
            </p>
            <p className={styles.p}>
              {isEs
                ? "Nuestra oficina está convenientemente ubicada en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231 — al norte de la ciudad, fácil de alcanzar desde cualquier vecindario del área metropolitana, incluyendo Stone Oak, Alamo Heights, Castle Hills, Helotes, Leon Valley, Medical Center, Boerne, Schertz, Cibolo, Northside, Westside y más."
                : "Our office is conveniently located at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231 — in the north of the city, easy to reach from any neighborhood in the metro area including Stone Oak, Alamo Heights, Castle Hills, Helotes, Leon Valley, Medical Center, Boerne, Schertz, Cibolo, Northside, Westside, and more."}
            </p>
          </section>

          {/* Distance table */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? "¿Qué Tan Cerca Estamos? Tiempos de Manejo desde Su Vecindario"
                : "How Close Are We? Driving Times from Your Neighborhood"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Estos son los tiempos típicos de manejo desde los principales vecindarios de San Antonio hasta nuestra oficina en NW Military Hwy. Sin tráfico de hora pico, la mayoría de los pacientes llegan en 15 minutos o menos."
                : "Here are typical drive times from the main San Antonio neighborhoods to our office on NW Military Hwy. Without rush-hour traffic, most patients arrive in 15 minutes or less."}
            </p>
            <div className={styles.distanceGrid}>
              {distances.map((d) => (
                <div key={d.es} className={styles.distanceCard}>
                  <h3 className={styles.distanceName}>{isEs ? d.es : d.en}</h3>
                  <p className={styles.distanceTime}>🚗 {d.time}</p>
                  <p className={styles.distanceMiles}>{d.miles}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NAP + Map */}
          <section className={styles.napSection}>
            <div className={styles.napInfo}>
              <h2 className={styles.h2}>
                {isEs ? "Información de Contacto" : "Contact Information"}
              </h2>
              <p className={styles.napAddress}>
                <strong>Pura Vida Chiropractic</strong>
                <br />
                2318 NW Military Hwy, Suite 103
                <br />
                San Antonio, TX 78231
              </p>
              <p className={styles.napPhone}>
                <strong>{isEs ? "Teléfono: " : "Phone: "}</strong>
                <a href="tel:+12106851994">(210) 685-1994</a>
              </p>
              <p className={styles.napHours}>
                <strong>{isEs ? "Horario:" : "Hours:"}</strong>
                <br />
                {isEs ? "Lunes, Martes, Jueves" : "Monday, Tuesday, Thursday"}: 7:00 AM – 4:00 PM
                <br />
                {isEs ? "Miércoles, Viernes, Sábado, Domingo" : "Wednesday, Friday, Saturday, Sunday"}: {isEs ? "Cerrado" : "Closed"}
              </p>
              <p className={styles.napLanguages}>
                <strong>{isEs ? "Idiomas:" : "Languages:"}</strong> {isEs ? "Inglés y Español (atención completamente bilingüe)" : "English and Spanish (fully bilingual care)"}
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
                  {isEs ? "Cómo Llegar (Google Maps)" : "Get Directions (Google Maps)"}
                </a>
              </div>
            </div>
            <div className={styles.napMap}>
              <iframe
                title={isEs ? "Mapa de Pura Vida Chiropractic en San Antonio" : "Map of Pura Vida Chiropractic in San Antonio"}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Pura+Vida+Chiropractic,2318+NW+Military+Hwy,San+Antonio,TX+78231&zoom=14"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
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

          {/* Cross-links */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Más Información Sobre Quiropráctica en San Antonio" : "More Information About Chiropractic in San Antonio"}
            </h2>
            <div className={styles.linkGrid}>
              {relatedSpanishPages.map((p) => (
                <Link key={p.slug} href={`/${locale}/${p.slug}`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span className={styles.linkLabel}>{isEs ? p.es : p.en}</span>
                </Link>
              ))}
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
                <span className={styles.linkLabel}>{isEs ? "Conocer al Dr. Dan Foss" : "Meet Dr. Dan Foss"}</span>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? "Su Quiropráctico Bilingüe en San Antonio le Espera"
                : "Your Bilingual Chiropractor in San Antonio is Waiting"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve su evaluación gratuita hoy. Atención quiropráctica completa en español, sin compromiso, sin esperas largas. Llame ahora o reserve en línea las 24 horas."
                : "Book your free evaluation today. Complete chiropractic care in Spanish (and English), no commitment, no long waits. Call now or book online 24/7."}
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
