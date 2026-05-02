import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./seo-es2.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/san-antonio-quiropractico`;
  return {
    title: isEs
      ? "San Antonio Quiropráctico | Pura Vida Chiropractic — Dr. Dan Foss DC"
      : "San Antonio Chiropractor | Pura Vida Chiropractic — Dr. Dan Foss DC",
    description: isEs
      ? "Quiropráctico en San Antonio, TX con atención bilingüe en inglés y español. Dr. Dan Foss DC — certificación SOT Avanzada, 23+ años de experiencia, 147+ reseñas de 5 estrellas. ¡Llame al (210) 685-1994!"
      : "Chiropractor in San Antonio, TX offering bilingual care in English and Spanish. Dr. Dan Foss DC — Advanced SOT certification, 23+ years experience, 147+ five-star reviews. Call (210) 685-1994!",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/san-antonio-quiropractico`,
        es: `${BASE_URL}/es/san-antonio-quiropractico`,
        "x-default": `${BASE_URL}/es/san-antonio-quiropractico`,
      },
    },
    robots: { index: true, follow: true },
  };
}

const services = [
  { slug: "chiropractic-care", es: "Atención Quiropráctica General", en: "General Chiropractic Care" },
  { slug: "sot-chiropractic", es: "Quiropráctica SOT (Sacro-Occipital)", en: "SOT (Sacro-Occipital) Chiropractic" },
  { slug: "cranial-chiropractic", es: "Terapia Craneal y Cráneo-Sacral", en: "Cranial & Craniosacral Therapy" },
  { slug: "pediatric-chiropractor", es: "Quiropráctica Pediátrica y Prenatal", en: "Pediatric & Prenatal Chiropractic" },
  { slug: "softwave-therapy", es: "Terapia SoftWave / Ondas de Choque", en: "SoftWave / Shockwave Therapy" },
  { slug: "class-iv-laser", es: "Terapia Láser de Clase IV", en: "Class IV Laser Therapy" },
  { slug: "auto-injury", es: "Cuidado de Lesiones de Auto", en: "Auto Injury Care" },
];

const conditions = [
  { slug: "back-pain", es: "Dolor de Espalda", en: "Back Pain" },
  { slug: "neck-pain", es: "Dolor de Cuello", en: "Neck Pain" },
  { slug: "headaches-migraines", es: "Migrañas", en: "Migraines" },
  { slug: "sciatica", es: "Ciática", en: "Sciatica" },
  { slug: "scoliosis", es: "Escoliosis", en: "Scoliosis" },
  { slug: "auto-accident-injuries", es: "Lesiones de Auto", en: "Auto Injuries" },
  { slug: "sports-injuries", es: "Lesiones Deportivas", en: "Sports Injuries" },
  { slug: "pregnancy-chiropractic", es: "Embarazo", en: "Pregnancy" },
];

const faqs = [
  {
    es: { q: "¿Habla español el quiropráctico?", a: "Sí. El Dr. Dan Foss habla español con fluidez y atiende a pacientes en inglés y en español. Todo el proceso de consulta, diagnóstico y tratamiento se puede llevar a cabo en el idioma que usted prefiera." },
    en: { q: "Does the chiropractor speak Spanish?", a: "Yes. Dr. Dan Foss speaks Spanish fluently and sees patients in both English and Spanish. The entire consultation, diagnosis, and treatment process can be conducted in your preferred language." },
  },
  {
    es: { q: "¿Aceptan seguros médicos en San Antonio?", a: "Sí, aceptamos la mayoría de los principales seguros médicos. También ofrecemos planes de pago para quienes no tienen seguro o cuya cobertura es limitada. Contáctenos para verificar su cobertura." },
    en: { q: "Do you accept insurance in San Antonio?", a: "Yes, we are insurance friendly. We also offer payment plans for those without insurance or with limited coverage. Contact us to verify your coverage." },
  },
  {
    es: { q: "¿Atienden niños pequeños y bebés?", a: "Absolutamente. El Dr. Foss tiene formación especializada en quiropráctica pediátrica y prenatal. Hemos atendido a bebés desde el primer día de nacidos. La quiropráctica pediátrica es segura y suave." },
    en: { q: "Do you see young children and babies?", a: "Absolutely. Dr. Foss has specialized training in pediatric and prenatal chiropractic. We have cared for babies from their very first day of life. Pediatric chiropractic is safe and gentle." },
  },
  {
    es: { q: "¿Cuántas sesiones necesitaré?", a: "Esto varía según la condición de cada paciente. En su primera visita, el Dr. Foss realizará una evaluación completa y le presentará un plan de tratamiento personalizado con metas claras y plazos realistas." },
    en: { q: "How many sessions will I need?", a: "This varies depending on each patient's condition. At your first visit, Dr. Foss will perform a comprehensive evaluation and present you with a personalized treatment plan with clear goals and realistic timelines." },
  },
  {
    es: { q: "¿Dónde está ubicada la clínica en San Antonio?", a: "Estamos ubicados en el noroeste de San Antonio: 2318 NW Military Hwy, Suite 103, San Antonio, TX 78231. Atendemos a pacientes de toda la ciudad, incluyendo Stone Oak, Helotes, Leon Valley, Shavano Park y más." },
    en: { q: "Where is the clinic located in San Antonio?", a: "We are located in northwest San Antonio: 2318 NW Military Hwy, Suite 103, San Antonio, TX 78231. We serve patients from all over the city, including Stone Oak, Helotes, Leon Valley, Shavano Park, and more." },
  },
];

export default async function SanAntonioQuiropracticoPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/san-antonio-quiropractico`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["San Antonio Quiropráctico", "Pura Vida Quiropráctico San Antonio"],
    description: isEs
      ? "San Antonio quiropráctico bilingüe. Pura Vida Chiropractic — Dr. Dan Foss DC, atención en español, técnicas avanzadas."
      : "San Antonio bilingual chiropractor. Pura Vida Chiropractic — Dr. Dan Foss DC, Spanish-language care, advanced techniques.",
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
      { "@type": "ListItem", position: 2, name: isEs ? "San Antonio Quiropráctico" : "San Antonio Chiropractor", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/san-antonio-quiropractico" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>2318 NW Military Hwy, Suite 103 · San Antonio, TX 78231</p>
              <h1 className={styles.heroTitle}>
                {isEs
                  ? "Quiropráctico en San Antonio, TX"
                  : "Chiropractor in San Antonio, TX"}
              </h1>
              <p className={styles.heroSub}>
                {isEs
                  ? "Pura Vida Chiropractic, con el Dr. Dan Foss, DC, es su quiropráctico bilingüe de confianza en San Antonio. Con más de 23 años de experiencia, certificación SOT Avanzada y más de 147 reseñas de 5 estrellas, ofrecemos atención quiropráctica de excelencia para toda la familia en inglés y en español."
                  : "Pura Vida Chiropractic, with Dr. Dan Foss, DC, is your trusted bilingual chiropractor in San Antonio. With over 23 years of experience, Advanced SOT Certification, and over 147 five-star reviews, we offer exceptional chiropractic care for the whole family in English and Spanish."}
              </p>
              <div className={styles.heroBtns}>
                <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                  {isEs ? "Evaluación Gratuita" : "Free Evaluation"}
                </a>
                <a href="tel:+12106851994" className={styles.heroBtnOutline}>
                  📞 (210) 685-1994
                </a>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/dr-foss-about-hp.webp"
                alt={isEs ? "Dr. Dan Foss DC quiropráctico en San Antonio TX" : "Dr. Dan Foss DC chiropractor in San Antonio TX"}
                width={380}
                height={460}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}><span className={styles.statNum}>147+</span><span className={styles.statLabel}>{isEs ? "Reseñas ⭐⭐⭐⭐⭐" : "5-Star Reviews"}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>23+</span><span className={styles.statLabel}>{isEs ? "Años de Exp." : "Years of Exp."}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>2</span><span className={styles.statLabel}>{isEs ? "Idiomas" : "Languages"}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>7AM</span><span className={styles.statLabel}>{isEs ? "Abre Lun/Mar/Jue" : "Opens Mon/Tue/Thu"}</span></div>
        </div>

        <div className={styles.container}>

          {/* Intro */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? "Su Quiropráctico de Confianza en San Antonio"
                : "Your Trusted San Antonio Chiropractor"}
            </h2>
            <div className={styles.introGrid}>
              <div>
                <p className={styles.p}>
                  {isEs
                    ? "Buscar un buen quiropráctico en San Antonio puede ser abrumador, especialmente si necesita atención en español. En Pura Vida Chiropractic, el Dr. Dan Foss, DC, le ofrece lo mejor de dos mundos: la experiencia clínica de un quiropráctico con más de dos décadas de práctica en múltiples países, combinada con la calidez y comodidad de ser atendido en su propio idioma."
                    : "Finding a good chiropractor in San Antonio can be overwhelming, especially if you need care in Spanish. At Pura Vida Chiropractic, Dr. Dan Foss, DC, offers you the best of both worlds: the clinical experience of a chiropractor with over two decades of practice in multiple countries, combined with the warmth and comfort of being served in your own language."}
                </p>
                <p className={styles.p}>
                  {isEs
                    ? "El Dr. Foss comenzó su carrera quiropráctica en Costa Rica, donde desarrolló una sensibilidad especial hacia la cultura hispana y perfeccionó su español. A lo largo de su carrera ha practicado en España, Irlanda, los Países Bajos y los Estados Unidos, trayendo a San Antonio una perspectiva verdaderamente global del cuidado quiropráctic"
                    : "Dr. Foss began his chiropractic career in Costa Rica, where he developed a special sensitivity toward Hispanic culture and perfected his Spanish. Throughout his career he has practiced in Spain, Ireland, the Netherlands, and the United States, bringing to San Antonio a truly global perspective on chiropractic care."}
                </p>
                <p className={styles.p}>
                  {isEs
                    ? "Hoy, desde nuestra clínica en el noroeste de San Antonio, el Dr. Foss y su equipo atienden a pacientes de todas las edades — desde bebés recién nacidos hasta adultos mayores — con el mismo nivel de cuidado personalizado y profesionalismo que ha caracterizado su práctica durante más de 23 años."
                    : "Today, from our clinic in northwest San Antonio, Dr. Foss and his team serve patients of all ages — from newborns to seniors — with the same level of personalized care and professionalism that has characterized his practice for over 23 years."}
                </p>
                <p className={styles.p}>
                  {isEs
                    ? "Conozca más sobre el Dr. Foss en nuestra página "
                    : "Learn more about Dr. Foss on our "}
                  <Link href={`/${locale}/meet-dr-foss`} className={styles.linkInline}>
                    {isEs ? "Conozca al Dr. Foss" : "Meet Dr. Foss page"}
                  </Link>
                  {isEs ? "." : "."}
                </p>
              </div>
              <div className={styles.introCard}>
                <h3 className={styles.introCardTitle}>{isEs ? "¿Por Qué Elegir Pura Vida?" : "Why Choose Pura Vida?"}</h3>
                <ul className={styles.checkList}>
                  <li>{isEs ? "Atención bilingüe inglés–español" : "Bilingual English–Spanish care"}</li>
                  <li>{isEs ? "Certificación SOT Avanzada (única en SA)" : "Advanced SOT Certification (unique in SA)"}</li>
                  <li>{isEs ? "23+ años de experiencia clínica" : "23+ years of clinical experience"}</li>
                  <li>{isEs ? "147+ reseñas de 5 estrellas en Google" : "147+ five-star Google reviews"}</li>
                  <li>{isEs ? "Tecnología SoftWave y Láser Clase IV" : "SoftWave and Class IV Laser technology"}</li>
                  <li>{isEs ? "Quiropráctica pediátrica y prenatal" : "Pediatric and prenatal chiropractic"}</li>
                  <li>{isEs ? "Amigables con tu seguro" : "Insurance friendly"}</li>
                  <li>{isEs ? "Planes de pago disponibles" : "Payment plans available"}</li>
                </ul>
                <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.introCardBtn}>
                  {isEs ? "Reservar Cita" : "Book Appointment"}
                </a>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Servicios Quiroprácticos en San Antonio" : "Chiropractic Services in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Como su quiropráctico en San Antonio, el Dr. Foss ofrece una amplia gama de tratamientos para atender sus necesidades específicas. Cada plan de tratamiento es completamente personalizado y diseñado para abordar la causa raíz de su condición, no solo los síntomas."
                : "As your San Antonio chiropractor, Dr. Foss offers a wide range of treatments to address your specific needs. Every treatment plan is fully personalized and designed to address the root cause of your condition, not just the symptoms."}
            </p>
            <div className={styles.serviceList}>
              {services.map((s) => (
                <Link key={s.slug} href={`/${locale}/services/${s.slug}`} className={styles.serviceItem}>
                  <span className={styles.serviceItemCheck}>✓</span>
                  <span className={styles.serviceItemName}>{isEs ? s.es : s.en}</span>
                  <span className={styles.serviceItemArrow}>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Conditions */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Condiciones Tratadas" : "Conditions Treated"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "La quiropráctica puede beneficiar una amplia variedad de condiciones. Como quiropráctico en San Antonio con amplia experiencia, el Dr. Foss tiene la preparación para diagnosticar y tratar:"
                : "Chiropractic can benefit a wide variety of conditions. As a San Antonio chiropractor with extensive experience, Dr. Foss is prepared to diagnose and treat:"}
            </p>
            <div className={styles.conditionGrid}>
              {conditions.map((c) => (
                <Link key={c.slug} href={`/${locale}/conditions/${c.slug}`} className={styles.conditionCard}>
                  {isEs ? c.es : c.en}
                </Link>
              ))}
            </div>
            <p className={styles.p} style={{ marginTop: "1rem" }}>
              <Link href={`/${locale}/conditions`} className={styles.linkInline}>
                {isEs ? "Ver todas las condiciones →" : "View all conditions →"}
              </Link>
            </p>
          </section>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Preguntas Frecuentes sobre el Quiropráctico en San Antonio" : "Frequently Asked Questions About Your San Antonio Chiropractor"}
            </h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => {
                const item = isEs ? faq.es : faq.en;
                return (
                  <div key={i} className={styles.faqItem}>
                    <h3 className={styles.faqQ}>{item.q}</h3>
                    <p className={styles.faqA}>{item.a}</p>
                  </div>
                );
              })}
            </div>
            <p className={styles.p}>
              {isEs ? "¿Tiene más preguntas? Visite nuestra página de " : "Have more questions? Visit our "}
              <Link href={`/${locale}/faq`} className={styles.linkInline}>
                {isEs ? "Preguntas Frecuentes" : "FAQ page"}
              </Link>
              {isEs ? " o " : " or "}
              <Link href={`/${locale}/contact`} className={styles.linkInline}>
                {isEs ? "contáctenos directamente" : "contact us directly"}
              </Link>
              .
            </p>
          </section>

          {/* Location */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Cómo Llegar a Su Quiropráctico en San Antonio" : "How to Find Your San Antonio Chiropractor"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Nuestra clínica está convenientemente ubicada en la intersección de NW Military Hwy y Callaghan Rd, en el noroeste de San Antonio. Atendemos a pacientes de toda el área metropolitana, incluyendo:"
                : "Our clinic is conveniently located at the intersection of NW Military Hwy and Callaghan Rd in northwest San Antonio. We serve patients from throughout the metro area, including:"}
            </p>
            <div className={styles.neighborhoodGrid}>
              {["Stone Oak", "Helotes", "Leon Valley", "Shavano Park", "Alamo Heights", "Medical Center", "UTSA Area", "Castle Hills"].map((n) => (
                <span key={n} className={styles.neighborhood}>{n}</span>
              ))}
            </div>
            <div className={styles.locationBox}>
              <div className={styles.locationDetails}>
                <p><strong>Pura Vida Chiropractic</strong></p>
                <p>2318 NW Military Hwy, Suite 103, San Antonio, TX 78231</p>
                <p><a href="tel:+12106851994">(210) 685-1994</a> · <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a></p>
                <p className={styles.hoursText}>
                  <strong>{isEs ? "Horario:" : "Hours:"}</strong>{" "}
                  {isEs ? "Lun, Mar, Jue 7:00 AM–4:00 PM · Mié, Vie–Dom Cerrado" : "Mon, Tue, Thu 7:00 AM–4:00 PM · Wed, Fri–Sun Closed"}
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? "¿Listo para Conocer a Su Nuevo Quiropráctico en San Antonio?"
                : "Ready to Meet Your New San Antonio Chiropractor?"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve su evaluación gratuita hoy. El Dr. Foss analizará su condición, responderá todas sus preguntas y diseñará un plan de tratamiento personalizado — sin compromiso. Disponible en inglés y español."
                : "Book your free evaluation today. Dr. Foss will analyze your condition, answer all your questions, and design a personalized treatment plan — no commitment required. Available in English and Spanish."}
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                {isEs ? "Reservar Evaluación Gratuita" : "Book Free Evaluation"}
              </a>
              <Link href={`/${locale}/new-patient`} className={styles.ctaSecondary}>
                {isEs ? "Información para Nuevos Pacientes" : "New Patient Information"}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
