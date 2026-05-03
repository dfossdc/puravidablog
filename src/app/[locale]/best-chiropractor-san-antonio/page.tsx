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
  const canonical = `${BASE_URL}/${locale}/best-chiropractor-san-antonio`;
  return {
    title: isEs
      ? "El Mejor Quiropráctico en San Antonio TX | Cómo Elegir | Pura Vida"
      : "Best Chiropractor San Antonio TX | How to Choose — Pura Vida",
    description: isEs
      ? "Cómo elegir el mejor quiropráctico en San Antonio TX. Guía completa: credenciales, certificaciones, técnicas, qué preguntar. Conozca al Dr. Dan Foss DC en Pura Vida Chiropractic."
      : "How to choose the best chiropractor in San Antonio TX. Complete guide: credentials, certifications, techniques, what to ask. Meet Dr. Dan Foss DC at Pura Vida Chiropractic.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/best-chiropractor-san-antonio`,
        es: `${BASE_URL}/es/el-mejor-quiropractico-san-antonio`,
        "x-default": `${BASE_URL}/en/best-chiropractor-san-antonio`,
      },
    },
    openGraph: {
      title: isEs
        ? "El Mejor Quiropráctico en San Antonio TX"
        : "Best Chiropractor in San Antonio TX",
      description: isEs
        ? "Guía para elegir el mejor quiropráctico en San Antonio. Pura Vida Chiropractic — Dr. Dan Foss DC."
        : "Guide to choosing the best chiropractor in San Antonio. Pura Vida Chiropractic — Dr. Dan Foss DC.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

const criteria = [
  {
    icon: "🎓",
    en: { title: "Verified Credentials", desc: "The best chiropractors in San Antonio hold a Doctor of Chiropractic (DC) degree from an accredited college, plus active state licensure with the Texas Board of Chiropractic Examiners." },
    es: { title: "Credenciales Verificadas", desc: "Los mejores quiroprácticos en San Antonio tienen un título de Doctor en Quiropráctica (DC) de un colegio acreditado, además de licencia estatal activa con la Junta de Examinadores Quiroprácticos de Texas." },
  },
  {
    icon: "🏆",
    en: { title: "Specialty Certifications", desc: "Look for advanced certifications beyond the DC degree — like Advanced SOT (Sacro-Occipital Technique) certification from SORSI, Webster Technique for prenatal care, or pediatric chiropractic certifications." },
    es: { title: "Certificaciones Especializadas", desc: "Busque certificaciones avanzadas más allá del DC — como la certificación SOT Avanzada (Técnica Sacro-Occipital) del SORSI, Técnica Webster para cuidado prenatal, o certificaciones de quiropráctica pediátrica." },
  },
  {
    icon: "⏳",
    en: { title: "Years of Experience", desc: "Years in practice matter. The best chiropractors have decades of clinical experience treating thousands of patients across many condition types — not just back pain, but pediatric, prenatal, sports, and complex cases." },
    es: { title: "Años de Experiencia", desc: "Los años de práctica importan. Los mejores quiroprácticos tienen décadas de experiencia clínica tratando miles de pacientes con muchos tipos de condiciones — no solo dolor de espalda, sino también pediátricos, prenatales, deportivos y casos complejos." },
  },
  {
    icon: "⭐",
    en: { title: "Patient Reviews & Testimonials", desc: "Look for chiropractors with 100+ Google reviews and a 4.8+ star rating. Read recent reviews — patients describe specific results and the level of care they received." },
    es: { title: "Reseñas y Testimonios de Pacientes", desc: "Busque quiroprácticos con 100+ reseñas de Google y calificación de 4.8+ estrellas. Lea reseñas recientes — los pacientes describen resultados específicos y el nivel de cuidado recibido." },
  },
  {
    icon: "🔬",
    en: { title: "Technology & Modalities", desc: "The best chiropractic clinics use complementary technologies like Class IV laser, SoftWave shockwave therapy, decompression tables, and digital posture analysis — not just manual adjustments alone." },
    es: { title: "Tecnología y Modalidades", desc: "Las mejores clínicas quiroprácticas usan tecnologías complementarias como láser Clase IV, terapia SoftWave, mesas de descompresión y análisis postural digital — no solo ajustes manuales." },
  },
  {
    icon: "🤝",
    en: { title: "Bilingual / Cultural Fit", desc: "In San Antonio, the best chiropractors serve the city's majority-Hispanic population in Spanish AND English. Make sure language is never a barrier to your care." },
    es: { title: "Ajuste Bilingüe y Cultural", desc: "En San Antonio, los mejores quiroprácticos atienden a la población mayoritariamente hispana de la ciudad en español E inglés. Asegúrese que el idioma nunca sea una barrera para su cuidado." },
  },
  {
    icon: "💰",
    en: { title: "Insurance & Pricing Transparency", desc: "The best chiropractors are insurance-friendly, offer free benefit verification, transparent pricing for self-pay patients, and never high-pressure you into long contracts." },
    es: { title: "Transparencia en Seguros y Precios", desc: "Los mejores quiroprácticos son insurance-friendly, ofrecen verificación gratuita de beneficios, precios transparentes para pacientes sin seguro, y nunca le presionan para firmar contratos largos." },
  },
  {
    icon: "🌟",
    en: { title: "Free Initial Evaluation", desc: "Top chiropractors offer a free first visit so you can meet the doctor, ask questions, and understand the recommended treatment plan before committing financially." },
    es: { title: "Evaluación Inicial Gratuita", desc: "Los mejores quiroprácticos ofrecen una primera visita gratuita para que conozca al doctor, haga preguntas y entienda el plan de tratamiento recomendado antes de comprometerse financieramente." },
  },
];

const whyPuraVida = [
  { en: "Advanced SOT certification from SORSI (rare in San Antonio)", es: "Certificación SOT Avanzada del SORSI (raro en San Antonio)" },
  { en: "23+ years of chiropractic practice across 4 countries", es: "23+ años de práctica quiropráctica en 4 países" },
  { en: "Trained at Parker College of Chiropractic, cum laude", es: "Formado en Parker College of Chiropractic, cum laude" },
  { en: "Webster Technique certified for safe prenatal care", es: "Certificado en Técnica Webster para cuidado prenatal seguro" },
  { en: "147+ five-star Google reviews from real San Antonio patients", es: "147+ reseñas de 5 estrellas en Google de pacientes reales de San Antonio" },
  { en: "Fully bilingual practice — English & Spanish, no translator needed", es: "Práctica completamente bilingüe — inglés y español, sin traductor" },
  { en: "Class IV laser, SoftWave shockwave, and advanced decompression therapy", es: "Láser Clase IV, terapia SoftWave y terapia de descompresión avanzada" },
  { en: "Treats 90+ conditions — from back pain to infant colic to ADHD", es: "Trata 90+ condiciones — desde dolor de espalda hasta cólicos infantiles y TDAH" },
  { en: "Free first evaluation with no commitment", es: "Primera evaluación gratuita sin compromiso" },
  { en: "Insurance friendly", es: "Insurance friendly" },
];

const faqs = [
  {
    en: {
      q: "Who is the best chiropractor in San Antonio TX?",
      a: "The 'best' chiropractor depends on your specific needs. Pura Vida Chiropractic is consistently rated a top chiropractor in San Antonio with 147+ five-star Google reviews, an Advanced SOT certification (rare in the area), 23+ years of experience under Dr. Dan Foss, DC, and bilingual care. Book a free evaluation at (210) 685-1994 to see if we're the right fit.",
    },
    es: {
      q: "¿Quién es el mejor quiropráctico en San Antonio TX?",
      a: "El 'mejor' quiropráctico depende de sus necesidades específicas. Pura Vida Chiropractic está constantemente calificado entre los mejores quiroprácticos de San Antonio con 147+ reseñas de 5 estrellas, certificación SOT Avanzada (rara en el área), 23+ años de experiencia con el Dr. Dan Foss, DC, y atención bilingüe. Reserve una evaluación gratuita al (210) 685-1994.",
    },
  },
  {
    en: {
      q: "What credentials should the best chiropractor have?",
      a: "At minimum: a Doctor of Chiropractic (DC) degree from an accredited college, active Texas state licensure, and several years of clinical experience. The best practitioners go further — earning specialty certifications like Advanced SOT, Webster Technique, pediatric chiropractic, or sports chiropractic. Dr. Foss holds the rare Advanced SOT certification from SORSI plus Webster Technique certification.",
    },
    es: {
      q: "¿Qué credenciales debe tener el mejor quiropráctico?",
      a: "Como mínimo: título de Doctor en Quiropráctica (DC) de un colegio acreditado, licencia activa del estado de Texas, y varios años de experiencia clínica. Los mejores practicantes van más allá — obteniendo certificaciones especializadas como SOT Avanzada, Técnica Webster, quiropráctica pediátrica o quiropráctica deportiva.",
    },
  },
  {
    en: {
      q: "How do I read chiropractor reviews to spot the best ones?",
      a: "Look for: (1) High overall star rating (4.8+ on Google), (2) High review count (100+), (3) Recent reviews from the last 6 months, (4) Specific patient stories describing real results — not just generic 'great office' comments, (5) The chiropractor's responsiveness to negative reviews. All of these point to a high-quality practice.",
    },
    es: {
      q: "¿Cómo leo reseñas de quiroprácticos para identificar los mejores?",
      a: "Busque: (1) Calificación general alta (4.8+ en Google), (2) Alto número de reseñas (100+), (3) Reseñas recientes de los últimos 6 meses, (4) Historias específicas de pacientes que describen resultados reales — no solo comentarios genéricos, (5) La respuesta del quiropráctico a reseñas negativas.",
    },
  },
  {
    en: {
      q: "Should I choose a chiropractor based on price?",
      a: "Price matters, but it should not be the primary factor. The best chiropractors offer transparent pricing, are insurance friendly, and provide a free first visit so you can meet them before committing. Choosing the cheapest option often results in shorter visits, less personalized care, and worse outcomes. Pura Vida Chiropractic is insurance friendly and offers a free first evaluation.",
    },
    es: {
      q: "¿Debo elegir un quiropráctico basado en el precio?",
      a: "El precio importa, pero no debe ser el factor principal. Los mejores quiroprácticos ofrecen precios transparentes, son insurance friendly, y dan una primera visita gratuita. Elegir la opción más barata a menudo resulta en visitas más cortas, atención menos personalizada y peores resultados.",
    },
  },
  {
    en: {
      q: "What questions should I ask before choosing a chiropractor?",
      a: "Ask: (1) What are your credentials and certifications? (2) How many years have you been practicing? (3) Do you treat my specific condition? (4) What techniques do you use and why? (5) Do you take my insurance? (6) Is the first visit free? (7) Can you give me a clear treatment plan and timeline? (8) Do you speak Spanish (if relevant)? Pura Vida is happy to answer all of these on a free phone consultation at (210) 685-1994.",
    },
    es: {
      q: "¿Qué preguntas debo hacer antes de elegir un quiropráctico?",
      a: "Pregunte: (1) ¿Cuáles son sus credenciales? (2) ¿Cuántos años de práctica tiene? (3) ¿Trata mi condición específica? (4) ¿Qué técnicas usa y por qué? (5) ¿Acepta mi seguro? (6) ¿La primera visita es gratis? (7) ¿Me puede dar un plan de tratamiento claro? (8) ¿Habla español?",
    },
  },
];

export default async function BestChiropractorPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/best-chiropractor-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    description: isEs ? "El mejor quiropráctico en San Antonio TX." : "Best chiropractor in San Antonio TX.",
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
    geo: { "@type": "GeoCoordinates", latitude: 29.5447, longitude: -98.5394 },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+12106851994",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "147",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "07:00", closes: "16:00" },
    ],
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => {
      const item = isEs ? f.es : f.en;
      return { "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "El Mejor Quiropráctico en San Antonio" : "Best Chiropractor in San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/best-chiropractor-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              {isEs ? "Guía Completa para Pacientes en San Antonio" : "Complete Guide for San Antonio Patients"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Cómo Elegir el Mejor Quiropráctico en San Antonio, TX"
                : "How to Choose the Best Chiropractor in San Antonio, TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "Una guía honesta con los 8 criterios que separan a los mejores quiroprácticos en San Antonio del resto. Plus: por qué cientos de familias eligen Pura Vida Chiropractic."
                : "An honest guide to the 8 criteria that separate the best chiropractors in San Antonio from the rest. Plus: why hundreds of families choose Pura Vida Chiropractic."}
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Los 8 Criterios para Identificar al Mejor Quiropráctico" : "The 8 Criteria for Identifying the Best Chiropractor"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "San Antonio tiene cientos de quiroprácticos. Aquí están los criterios objetivos que separan a los mejores del resto, basados en 23+ años de experiencia clínica del Dr. Foss y miles de pacientes."
                : "San Antonio has hundreds of chiropractors. Here are the objective criteria that separate the best from the rest, based on Dr. Foss's 23+ years of clinical experience and thousands of patients."}
            </p>
            <div className={styles.criteriaGrid}>
              {criteria.map((c, i) => {
                const item = isEs ? c.es : c.en;
                return (
                  <div key={i} className={styles.criteriaCard}>
                    <div className={styles.criteriaIcon}>{c.icon}</div>
                    <h3 className={styles.criteriaTitle}>{item.title}</h3>
                    <p className={styles.criteriaDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Por Qué Pura Vida Chiropractic Cumple Cada Criterio" : "Why Pura Vida Chiropractic Meets Every Criterion"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "No le pediremos que confíe en nuestra palabra — aquí están los hechos verificables que hacen que Pura Vida Chiropractic sea reconocido entre los mejores quiroprácticos en San Antonio:"
                : "We won't ask you to take our word for it — here are the verifiable facts that make Pura Vida Chiropractic recognized as a top chiropractor in San Antonio:"}
            </p>
            <ul className={styles.checkList}>
              {whyPuraVida.map((w, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkMark}>✓</span>
                  <span>{isEs ? w.es : w.en}</span>
                </li>
              ))}
            </ul>
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
            <h2 className={styles.h2}>{isEs ? "Más Recursos" : "More Resources"}</h2>
            <div className={styles.linkGrid}>
              <Link href={`/${locale}/chiropractor-near-me-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Quiropráctico Cerca de Mí en SA" : "Chiropractor Near Me in SA"}</span>
              </Link>
              <Link href={`/${locale}/meet-dr-foss`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Conocer al Dr. Foss" : "Meet Dr. Foss"}</span>
              </Link>
              <Link href={`/${locale}/testimonials`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Testimonios de Pacientes" : "Patient Testimonials"}</span>
              </Link>
              <Link href={`/${locale}/services`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Todos Nuestros Servicios" : "All Our Services"}</span>
              </Link>
              <Link href={`/${locale}/conditions`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkLabel}>{isEs ? "Condiciones (90+)" : "Conditions (90+)"}</span>
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
                ? "Vea Si Pura Vida Es el Mejor Quiropráctico para Usted"
                : "See If Pura Vida Is the Best Chiropractor for You"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve una evaluación gratuita. Sin compromiso, sin obligación. Conozca al Dr. Foss, haga sus preguntas, y decida usted mismo."
                : "Book a free evaluation. No commitment, no obligation. Meet Dr. Foss, ask your questions, and decide for yourself."}
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
