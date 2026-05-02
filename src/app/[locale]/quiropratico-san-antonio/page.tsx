import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./seo-es3.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/quiropratico-san-antonio`;
  return {
    title: isEs
      ? "Quiropráctico San Antonio TX | Pura Vida Chiropractic | Dr. Dan Foss DC"
      : "Chiropractor San Antonio TX | Pura Vida Chiropractic | Dr. Dan Foss DC",
    description: isEs
      ? "Quiropráctico en San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC ofrece atención bilingüe, técnica SOT, láser clase IV y SoftWave. ¡Llame (210) 685-1994 para una evaluación gratuita!"
      : "Chiropractor in San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC offers bilingual care, SOT technique, Class IV laser, and SoftWave therapy. Call (210) 685-1994 for a free evaluation!",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/quiropratico-san-antonio`,
        es: `${BASE_URL}/es/quiropratico-san-antonio`,
        "x-default": `${BASE_URL}/es/quiropratico-san-antonio`,
      },
    },
    robots: { index: true, follow: true },
  };
}

const highlights = [
  {
    icon: "🏆",
    es: { title: "Certificación SOT Avanzada", desc: "El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con certificación SOT Avanzada del SORSI, una técnica especializada para condiciones complejas del sistema nervioso central." },
    en: { title: "Advanced SOT Certification", desc: "Dr. Foss is one of the few chiropractors in San Antonio with Advanced SOT Certification from SORSI, a specialized technique for complex central nervous system conditions." },
  },
  {
    icon: "🌐",
    es: { title: "Bilingüe Inglés–Español", desc: "Atiende a toda la comunidad hispanohablante de San Antonio con la misma excelencia clínica, sin barreras de idioma. Todo el personal está capacitado para atenderle en español." },
    en: { title: "Bilingual English–Spanish", desc: "Serves the entire Spanish-speaking community of San Antonio with the same clinical excellence, without language barriers. All staff are trained to serve you in Spanish." },
  },
  {
    icon: "⚡",
    es: { title: "Tecnología SoftWave y Láser", desc: "Pura Vida Chiropractic cuenta con terapia SoftWave de ondas de choque regenerativas y láser de clase IV de alta potencia para acelerar la recuperación y reducir el dolor crónico." },
    en: { title: "SoftWave & Laser Technology", desc: "Pura Vida Chiropractic features regenerative SoftWave shockwave therapy and high-power Class IV laser to accelerate recovery and reduce chronic pain." },
  },
  {
    icon: "👨‍👩‍👧‍👦",
    es: { title: "Atención para Toda la Familia", desc: "Desde bebés recién nacidos hasta abuelos, el Dr. Foss tiene la experiencia y formación para atender a todos los miembros de su familia con técnicas adaptadas a cada edad." },
    en: { title: "Care for the Whole Family", desc: "From newborns to grandparents, Dr. Foss has the experience and training to care for every family member with techniques adapted to every age." },
  },
  {
    icon: "🤝",
    es: { title: "Planes de Pago Flexibles", desc: "Somos insurance friendly — le proporcionamos superbills detallados que puede enviar a su seguro para reembolso fuera de red, y ofrecemos planes de pago accesibles para que el costo nunca sea un obstáculo." },
    en: { title: "Flexible Payment Plans", desc: "We are insurance friendly — we provide detailed superbills you can submit to your insurance for out-of-network reimbursement, plus accessible payment plans so cost is never an obstacle." },
  },
  {
    icon: "📍",
    es: { title: "Ubicación Conveniente en NW SA", desc: "Situados en el noroeste de San Antonio en NW Military Hwy, somos fácilmente accesibles desde Stone Oak, Helotes, Leon Valley, Medical Center y toda el área metropolitana." },
    en: { title: "Convenient NW SA Location", desc: "Located in northwest San Antonio on NW Military Hwy, we are easily accessible from Stone Oak, Helotes, Leon Valley, Medical Center, and the entire metro area." },
  },
];

const techServices = [
  {
    slug: "sot-chiropractic",
    icon: "🦴",
    es: { name: "Quiropráctica SOT", desc: "La técnica Sacro-Occipital (SOT) aborda los desequilibrios estructurales desde la base de la columna hasta el cráneo para restaurar la función neurológica óptima." },
    en: { name: "SOT Chiropractic", desc: "Sacro-Occipital Technique (SOT) addresses structural imbalances from the base of the spine to the skull to restore optimal neurological function." },
  },
  {
    slug: "cranial-chiropractic",
    icon: "🧠",
    es: { name: "Terapia Craneal", desc: "Técnicas suaves para el cráneo y el sistema nervioso central que alivian migrañas, presión sinusal, problemas de ATM y condiciones neurológicas complejas." },
    en: { name: "Cranial Therapy", desc: "Gentle techniques for the skull and central nervous system that relieve migraines, sinus pressure, TMJ problems, and complex neurological conditions." },
  },
  {
    slug: "softwave-therapy",
    icon: "⚡",
    es: { name: "Terapia SoftWave", desc: "Ondas de choque regenerativas de última generación que estimulan la curación natural de tejidos, reducen la inflamación y alivian el dolor crónico sin cirugía ni medicamentos." },
    en: { name: "SoftWave Therapy", desc: "Next-generation regenerative shockwaves that stimulate natural tissue healing, reduce inflammation, and relieve chronic pain without surgery or medication." },
  },
  {
    slug: "class-iv-laser",
    icon: "🔦",
    es: { name: "Láser Clase IV", desc: "La terapia láser de alta potencia penetra profundamente en los tejidos para acelerar la recuperación, reducir el dolor y disminuir la inflamación con resultados visibles desde las primeras sesiones." },
    en: { name: "Class IV Laser", desc: "High-power laser therapy penetrates deeply into tissues to accelerate recovery, reduce pain, and decrease inflammation with visible results from the first sessions." },
  },
  {
    slug: "pediatric-chiropractor",
    icon: "👶",
    es: { name: "Quiropráctica Pediátrica", desc: "Ajustes suaves y seguros para bebés, niños y adolescentes. Ayuda con cólicos, problemas del sueño, TDAH, escoliosis infantil y desarrollo postural saludable." },
    en: { name: "Pediatric Chiropractic", desc: "Gentle and safe adjustments for babies, children, and teens. Helps with colic, sleep problems, ADHD, childhood scoliosis, and healthy postural development." },
  },
  {
    slug: "auto-injury",
    icon: "🚗",
    es: { name: "Lesiones de Auto", desc: "Especialistas en el tratamiento de lesiones por accidentes de auto (latigazo cervical, hernias de disco, dolor de espalda). Trabajamos con seguros de auto y abogados de accidentes." },
    en: { name: "Auto Injury Care", desc: "Specialists in treating auto accident injuries (whiplash, disc herniation, back pain). We work with auto insurance and accident attorneys." },
  },
];

export default async function QuiropraticoSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/quiropratico-san-antonio`;

  // Chiropractor LocalBusiness schema with bilingual ContactPoint
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["Pura Vida Quiropráctico", "Quiropráctico San Antonio Pura Vida", "Quiropráctico en San Antonio"],
    description: isEs
      ? "Quiropráctico en San Antonio TX. Atención bilingüe, técnica SOT, láser Clase IV y SoftWave."
      : "Chiropractor in San Antonio TX. Bilingual care, SOT technique, Class IV laser, SoftWave therapy.",
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
      availableLanguage: ["English", "Spanish", "es", "en"],
    },
    knowsLanguage: ["en", "es"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "07:00", closes: "16:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "147",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.youtube.com/@puravidadc",
      "https://www.facebook.com/puravidasanantonio",
      "https://www.instagram.com/puravidasanantonio",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Quiropráctico San Antonio" : "Chiropractor San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/quiropratico-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Pura Vida Chiropractic · 2318 NW Military Hwy Suite 103 · San Antonio, TX 78231</p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Quiropráctico en San Antonio, TX"
                : "Chiropractor in San Antonio, TX"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "Bienvenido a Pura Vida Chiropractic — clínica quiropráctica bilingüe dirigida por el Dr. Dan Foss, DC, con más de 23 años de experiencia y una pasión genuina por ayudar a las familias de San Antonio a vivir sin dolor. Ofrecemos atención de calidad superior en inglés y español, con las últimas tecnologías terapéuticas y un enfoque completamente personalizado para cada paciente."
                : "Welcome to Pura Vida Chiropractic — a bilingual chiropractic clinic led by Dr. Dan Foss, DC, with over 23 years of experience and a genuine passion for helping San Antonio families live without pain. We offer superior quality care in English and Spanish, with the latest therapeutic technologies and a completely personalized approach for every patient."}
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
              <span className={styles.badge}>{isEs ? "Bilingüe" : "Bilingual"}</span>
              <span className={styles.badge}>SOT {isEs ? "Avanzado" : "Advanced"}</span>
              <span className={styles.badge}>{isEs ? "23+ años" : "23+ years"}</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>

          {/* Highlights */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? "Por Qué las Familias de San Antonio Eligen Pura Vida Chiropractic"
                : "Why San Antonio Families Choose Pura Vida Chiropractic"}
            </h2>
            <div className={styles.highlightGrid}>
              {highlights.map((h, i) => {
                const item = isEs ? h.es : h.en;
                return (
                  <div key={i} className={styles.highlightCard}>
                    <span className={styles.highlightIcon}>{h.icon}</span>
                    <h3 className={styles.highlightTitle}>{item.title}</h3>
                    <p className={styles.highlightDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Services with descriptions */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Servicios Avanzados de Quiropráctica en San Antonio" : "Advanced Chiropractic Services in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "En Pura Vida Chiropractic, combinamos técnicas quiroprácticas tradicionales con tecnologías de vanguardia para ofrecerle los mejores resultados posibles. Cada servicio que ofrecemos ha sido seleccionado cuidadosamente por el Dr. Foss basándose en la evidencia científica y su efectividad comprobada."
                : "At Pura Vida Chiropractic, we combine traditional chiropractic techniques with cutting-edge technologies to deliver the best possible results. Every service we offer has been carefully selected by Dr. Foss based on scientific evidence and proven effectiveness."}
            </p>
            <div className={styles.techGrid}>
              {techServices.map((ts) => {
                const item = isEs ? ts.es : ts.en;
                return (
                  <Link key={ts.slug} href={`/${locale}/services/${ts.slug}`} className={styles.techCard}>
                    <span className={styles.techIcon}>{ts.icon}</span>
                    <h3 className={styles.techName}>{item.name}</h3>
                    <p className={styles.techDesc}>{item.desc}</p>
                    <span className={styles.techLearn}>
                      {isEs ? "Saber más →" : "Learn more →"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* About section */}
          <section className={styles.aboutSection}>
            <div className={styles.aboutContent}>
              <h2 className={styles.h2}>
                {isEs ? "Sobre el Dr. Dan Foss, DC" : "About Dr. Dan Foss, DC"}
              </h2>
              <p className={styles.p}>
                {isEs
                  ? "El Dr. Dan Foss, DC nació en Texas y creció con una pasión por la salud y el bienestar. De niño sufrió torticolis severa que lo llevó a descubrir los beneficios transformadores de la quiropráctica. Esta experiencia personal lo inspiró a dedicar su vida a ayudar a otros a liberarse del dolor."
                  : "Dr. Dan Foss, DC was born in Texas and grew up with a passion for health and wellness. As a child, he suffered from severe torticollis that led him to discover the transformative benefits of chiropractic. This personal experience inspired him to dedicate his life to helping others become free from pain."}
              </p>
              <p className={styles.p}>
                {isEs
                  ? "Se graduó cum laude del Parker College of Chiropractic en Dallas y obtuvo su certificación SOT Avanzada del SORSI. A continuación comenzó una carrera internacional que lo llevó a Costa Rica, España, Irlanda y los Países Bajos antes de regresar a San Antonio para abrir Pura Vida Chiropractic."
                  : "He graduated cum laude from Parker College of Chiropractic in Dallas and earned his Advanced SOT Certification from SORSI. He then began an international career that took him to Costa Rica, Spain, Ireland, and the Netherlands before returning to San Antonio to open Pura Vida Chiropractic."}
              </p>
              <p className={styles.p}>
                {isEs
                  ? "Hoy, con más de 23 años de experiencia y más de 147 reseñas de 5 estrellas en Google, el Dr. Foss es reconocido como uno de los quiroprácticos más destacados de San Antonio, especialmente entre la comunidad hispanohablante de la ciudad."
                  : "Today, with over 23 years of experience and over 147 five-star Google reviews, Dr. Foss is recognized as one of San Antonio's most distinguished chiropractors, especially among the city's Spanish-speaking community."}
              </p>
              <div className={styles.aboutLinks}>
                <Link href={`/${locale}/meet-dr-foss`} className={styles.linkPrimary}>
                  {isEs ? "Conocer más al Dr. Foss →" : "Learn more about Dr. Foss →"}
                </Link>
                <Link href={`/${locale}/testimonials`} className={styles.linkSecondary}>
                  {isEs ? "Ver testimonios de pacientes →" : "See patient testimonials →"}
                </Link>
              </div>
            </div>
            <div className={styles.contactSidebar}>
              <h3 className={styles.sidebarTitle}>{isEs ? "Contáctenos Hoy" : "Contact Us Today"}</h3>
              <div className={styles.sidebarInfo}>
                <p><strong>Pura Vida Chiropractic</strong></p>
                <p>2318 NW Military Hwy, Suite 103<br />San Antonio, TX 78231</p>
                <p><a href="tel:+12106851994">(210) 685-1994</a></p>
                <p><a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a></p>
              </div>
              <div className={styles.sidebarHours}>
                <p><strong>{isEs ? "Horario:" : "Hours:"}</strong></p>
                <p>{isEs ? "Lun, Mar, Jue" : "Mon, Tue, Thu"}: 7 AM–4 PM</p>
                <p>{isEs ? "Mié, Vie–Dom" : "Wed, Fri–Sun"}: {isEs ? "Cerrado" : "Closed"}</p>
              </div>
              <Link href={`/${locale}/office-hours`} className={styles.sidebarLink}>
                {isEs ? "Ver horario completo →" : "View full hours →"}
              </Link>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.sidebarBtn}>
                {isEs ? "Reservar Cita" : "Book Appointment"}
              </a>
            </div>
          </section>

          {/* New patients */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Información para Nuevos Pacientes en San Antonio" : "New Patient Information in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Si es la primera vez que visita un quiropráctico en San Antonio, queremos que se sienta completamente cómodo y bien informado. En Pura Vida Chiropractic, su primera visita incluye una evaluación completa, historia clínica detallada, examen postural y neurológico, y una explicación clara de sus opciones de tratamiento."
                : "If this is your first time visiting a chiropractor in San Antonio, we want you to feel completely comfortable and well-informed. At Pura Vida Chiropractic, your first visit includes a comprehensive evaluation, detailed clinical history, postural and neurological examination, and a clear explanation of your treatment options."}
            </p>
            <div className={styles.newPatientLinks}>
              <Link href={`/${locale}/new-patient`} className={styles.npCard}>
                <span className={styles.npIcon}>📋</span>
                <span className={styles.npLabel}>{isEs ? "Información de Nuevos Pacientes" : "New Patient Information"}</span>
              </Link>
              <Link href={`/${locale}/new-patient#forms`} className={styles.npCard}>
                <span className={styles.npIcon}>📄</span>
                <span className={styles.npLabel}>{isEs ? "Descargar Formularios" : "Download Forms"}</span>
              </Link>
              <Link href={`/${locale}/faq`} className={styles.npCard}>
                <span className={styles.npIcon}>❓</span>
                <span className={styles.npLabel}>{isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</span>
              </Link>
              <Link href={`/${locale}/contact`} className={styles.npCard}>
                <span className={styles.npIcon}>✉️</span>
                <span className={styles.npLabel}>{isEs ? "Contáctenos" : "Contact Us"}</span>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? "Dé el Primer Paso Hacia una Vida Sin Dolor"
                : "Take the First Step Toward a Pain-Free Life"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve su evaluación gratuita con el Dr. Dan Foss, DC hoy mismo. Sin compromiso. Sin listas de espera largas. Atención disponible en inglés y español."
                : "Book your free evaluation with Dr. Dan Foss, DC today. No commitment. No long wait lists. Care available in English and Spanish."}
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
