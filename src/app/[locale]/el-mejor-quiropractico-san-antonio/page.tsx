import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./seo-es.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/el-mejor-quiropractico-san-antonio`;
  return {
    title: isEs
      ? "El Mejor Quiropráctico en San Antonio TX | Dr. Dan Foss DC"
      : "Best Chiropractor in San Antonio TX | Dr. Dan Foss DC | Pura Vida Chiropractic",
    description: isEs
      ? "¿Busca el mejor quiropráctico en San Antonio? Dr. Dan Foss DC ofrece atención quiropráctica bilingüe con certificación SOT avanzada. Más de 23 años de experiencia. Llame hoy: (210) 685-1994."
      : "Looking for the best chiropractor in San Antonio? Dr. Dan Foss DC offers bilingual chiropractic care with Advanced SOT certification. 23+ years of experience. Call today: (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/el-mejor-quiropractico-san-antonio`,
        es: `${BASE_URL}/es/el-mejor-quiropractico-san-antonio`,
        "x-default": `${BASE_URL}/es/el-mejor-quiropractico-san-antonio`,
      },
    },
    robots: { index: true, follow: true },
  };
}

const googleReviews = [
  {
    name: "María G.",
    stars: 5,
    quote: "El Dr. Foss es absolutamente el mejor quiropráctico que he visitado en San Antonio. Su conocimiento y su trato personalizado son incomparables. ¡Lo recomiendo a todos!",
    condition: "Dolor de espalda",
  },
  {
    name: "Roberto L.",
    stars: 5,
    quote: "Después de sufrir un accidente de auto, pensé que jamás volvería a sentirme bien. El Dr. Foss me devolvió mi calidad de vida en pocas semanas. Gracias a Pura Vida Chiropractic.",
    condition: "Lesión de auto",
  },
  {
    name: "Carmen V.",
    stars: 5,
    quote: "Mi hija tenía cólicos y problemas para dormir. Después de unas pocas visitas con el Dr. Foss, era otra niña completamente. Es el mejor quiropráctico pediátrico en San Antonio.",
    condition: "Atención pediátrica",
  },
  {
    name: "Jorge M.",
    stars: 5,
    quote: "Llevaba años sufriendo de migraña. El Dr. Foss identificó el problema en la primera consulta y con unas pocas sesiones mis dolores de cabeza desaparecieron. ¡Increíble!",
    condition: "Migrañas y dolores de cabeza",
  },
];

const services = [
  { slug: "sot-chiropractic", es: "Quiropráctica SOT", en: "SOT Chiropractic" },
  { slug: "cranial-chiropractic", es: "Terapia Craneal", en: "Cranial Therapy" },
  { slug: "pediatric-chiropractor", es: "Quiropráctica Pediátrica", en: "Pediatric Chiropractic" },
  { slug: "softwave-therapy", es: "Terapia SoftWave", en: "SoftWave Therapy" },
  { slug: "class-iv-laser", es: "Láser Clase IV", en: "Class IV Laser" },
  { slug: "auto-injury", es: "Lesiones de Auto", en: "Auto Injuries" },
];

export default async function ElMejorQuiropracticoPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const canonical = `${BASE_URL}/${locale}/el-mejor-quiropractico-san-antonio`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: ["El Mejor Quiropráctico San Antonio", "Pura Vida Quiropráctico", "Best Chiropractor San Antonio"],
    description: isEs
      ? "El mejor quiropráctico en San Antonio TX. Atención bilingüe, certificación SOT Avanzada, 23+ años de experiencia."
      : "Best chiropractor in San Antonio TX. Bilingual care, Advanced SOT certification, 23+ years experience.",
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
      { "@type": "ListItem", position: 2, name: isEs ? "El Mejor Quiropráctico San Antonio" : "Best Chiropractor San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/el-mejor-quiropractico-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>Pura Vida Chiropractic · San Antonio, TX</p>
              <h1 className={styles.heroTitle}>
                {isEs
                  ? "El Mejor Quiropráctico en San Antonio, TX"
                  : "The Best Chiropractor in San Antonio, TX"}
              </h1>
              <p className={styles.heroSub}>
                {isEs
                  ? "El Dr. Dan Foss, DC ofrece atención quiropráctica bilingüe con más de 23 años de experiencia, certificación SOT Avanzada y un enfoque personalizado para cada paciente. Descubra por qué miles de familias de San Antonio confían en Pura Vida Chiropractic para mejorar su salud y bienestar."
                  : "Dr. Dan Foss, DC provides bilingual chiropractic care with over 23 years of experience, Advanced SOT Certification, and a personalized approach for every patient. Discover why thousands of San Antonio families trust Pura Vida Chiropractic to improve their health and well-being."}
              </p>
              <div className={styles.heroBtns}>
                <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                  {isEs ? "Reserve su Consulta Gratuita" : "Book Your Free Consultation"}
                </a>
                <a href="tel:+12106851994" className={styles.heroBtnOutline}>
                  (210) 685-1994
                </a>
              </div>
              <div className={styles.heroBadges}>
                <span className={styles.badge}>⭐ 147+ {isEs ? "Reseñas de 5 Estrellas" : "5-Star Reviews"}</span>
                <span className={styles.badge}>✓ {isEs ? "23+ Años de Experiencia" : "23+ Years Experience"}</span>
                <span className={styles.badge}>🌎 {isEs ? "Bilingüe" : "Bilingual"}</span>
                <span className={styles.badge}>🏆 SOT {isEs ? "Certificado Avanzado" : "Advanced Certified"}</span>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/dr-foss-about-hp.webp"
                alt={isEs ? "Dr. Dan Foss DC — El mejor quiropráctico en San Antonio TX" : "Dr. Dan Foss DC — Best chiropractor in San Antonio TX"}
                width={400}
                height={480}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className={styles.stats}>
          <div className={styles.stat}><span className={styles.statNum}>23+</span><span className={styles.statLabel}>{isEs ? "Años de Experiencia" : "Years Experience"}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>147+</span><span className={styles.statLabel}>{isEs ? "Reseñas de Google" : "Google Reviews"}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>5</span><span className={styles.statLabel}>{isEs ? "Países de Práctica" : "Countries Practiced"}</span></div>
          <div className={styles.stat}><span className={styles.statNum}>SOT</span><span className={styles.statLabel}>{isEs ? "Certificación Avanzada" : "Advanced Certified"}</span></div>
        </div>

        <div className={styles.container}>

          {/* Why choose section */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs
                ? "¿Por Qué el Dr. Dan Foss es el Mejor Quiropráctico en San Antonio?"
                : "Why Dr. Dan Foss is San Antonio's Best Chiropractor"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Cuando usted busca el mejor quiropráctico en San Antonio, TX, está buscando a alguien que no solo tenga las credenciales académicas, sino también la experiencia práctica, el enfoque personalizado y el historial comprobado de resultados reales. El Dr. Dan Foss, DC reúne todo esto y más."
                : "When you search for the best chiropractor in San Antonio, TX, you're looking for someone who has not only academic credentials, but also hands-on experience, a personalized approach, and a proven track record of real results. Dr. Dan Foss, DC has all of this and more."}
            </p>
            <div className={styles.reasonGrid}>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🎓</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Formación de Élite" : "Elite Training"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "Graduado cum laude del Parker College of Chiropractic. Certificación SOT Avanzada del SORSI. Estudios de posgrado en neurología y rehabilitación."
                    : "Graduated cum laude from Parker College of Chiropractic. Advanced SOT Certification from SORSI. Graduate studies in neurology and rehabilitation."}
                </p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🌍</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Experiencia Internacional" : "International Experience"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "El Dr. Foss ha practicado quiropráctica en 5 países en 3 continentes: EE.UU., Costa Rica, España, Irlanda y los Países Bajos. Esta experiencia internacional le da una perspectiva única en el cuidado del paciente."
                    : "Dr. Foss has practiced chiropractic in 5 countries on 3 continents: USA, Costa Rica, Spain, Ireland, and the Netherlands. This international experience gives him a unique perspective on patient care."}
                </p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🗣️</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Atención Bilingüe" : "Bilingual Care"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "Como hablante nativo de inglés y español fluido, el Dr. Foss puede atender a pacientes en ambos idiomas con la misma calidad y profundidad de comunicación. Toda la comunidad hispana de San Antonio es bienvenida."
                    : "As a native English speaker and fluent Spanish speaker, Dr. Foss can serve patients in both languages with the same quality and depth of communication. The entire Hispanic community of San Antonio is welcome."}
                </p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>👶</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Especialista en Familia" : "Family Specialist"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "Desde bebés recién nacidos hasta adultos mayores, el Dr. Foss tiene la formación y experiencia para atender a toda la familia. Especialista en quiropráctica pediátrica y prenatal."
                    : "From newborns to seniors, Dr. Foss has the training and experience to care for the whole family. Specialist in pediatric and prenatal chiropractic."}
                </p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>⚡</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Tecnología Avanzada" : "Advanced Technology"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "Pura Vida Chiropractic ofrece los últimos avances en terapia quiropráctica: terapia SoftWave de ondas de choque, láser clase IV de alta potencia, y más — todo bajo un mismo techo."
                    : "Pura Vida Chiropractic offers the latest advances in chiropractic therapy: SoftWave shockwave therapy, high-power Class IV laser, and more — all under one roof."}
                </p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>❤️</div>
                <h3 className={styles.reasonTitle}>{isEs ? "Compromiso Comunitario" : "Community Commitment"}</h3>
                <p className={styles.reasonText}>
                  {isEs
                    ? "El Dr. Foss es un miembro activo de la comunidad de San Antonio. Su misión es hacer que la atención quiropráctica de alta calidad sea accesible para todas las familias, independientemente de su origen o idioma."
                    : "Dr. Foss is an active member of the San Antonio community. His mission is to make high-quality chiropractic care accessible to all families, regardless of background or language."}
                </p>
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
                ? "El mejor quiropráctico en San Antonio ofrece una gama completa de servicios para atender a pacientes de todas las edades y condiciones. En Pura Vida Chiropractic, usted encontrará soluciones para el dolor de espalda, cuello, cabeza, lesiones de auto, y mucho más."
                : "The best chiropractor in San Antonio offers a full range of services to care for patients of all ages and conditions. At Pura Vida Chiropractic, you'll find solutions for back pain, neck pain, headaches, auto injuries, and much more."}
            </p>
            <div className={styles.serviceGrid}>
              {services.map((s) => (
                <Link key={s.slug} href={`/${locale}/services/${s.slug}`} className={styles.serviceCard}>
                  <span className={styles.serviceCardTitle}>{isEs ? s.es : s.en}</span>
                  <span className={styles.serviceCardArrow}>→</span>
                </Link>
              ))}
            </div>
            <p className={styles.pCenter}>
              <Link href={`/${locale}/services/chiropractic-care`} className={styles.linkPrimary}>
                {isEs ? "Ver todos los servicios →" : "View all services →"}
              </Link>
            </p>
          </section>

          {/* Google reviews */}
          <section className={styles.reviewSection}>
            <h2 className={styles.h2}>
              {isEs
                ? "Lo Que Dicen Nuestros Pacientes de San Antonio"
                : "What Our San Antonio Patients Are Saying"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Con más de 147 reseñas de 5 estrellas en Google, Pura Vida Chiropractic es consistentemente reconocida como la mejor clínica quiropráctica en San Antonio. Estos son solo algunos testimonios de nuestros pacientes satisfechos."
                : "With over 147 five-star Google reviews, Pura Vida Chiropractic is consistently recognized as the top chiropractic clinic in San Antonio. Here are just a few testimonials from our satisfied patients."}
            </p>
            <div className={styles.reviewGrid}>
              {googleReviews.map((r, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewTop}>
                    <div className={styles.reviewAvatar}>{r.name[0]}</div>
                    <div>
                      <p className={styles.reviewName}>{r.name}</p>
                      <p className={styles.reviewCondition}>{r.condition}</p>
                    </div>
                    <div className={styles.reviewStars}>{"★".repeat(r.stars)}</div>
                  </div>
                  <p className={styles.reviewQuote}>"{r.quote}"</p>
                </div>
              ))}
            </div>
            <p className={styles.pCenter}>
              <a
                href="https://www.google.com/maps/place/Pura+Vida+Chiropractic/data=!4m2!3m1!1s0x0:0x1c1e96c3d09ddb87?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                {isEs ? "Ver todas las reseñas en Google →" : "See all Google reviews →"}
              </a>
            </p>
          </section>

          {/* Conditions treated */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Condiciones que Tratamos en San Antonio" : "Conditions We Treat in San Antonio"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "El Dr. Dan Foss tiene la experiencia para tratar una amplia variedad de condiciones musculoesqueléticas y neurológicas. Si usted sufre de alguna de las siguientes condiciones, contáctenos hoy para una evaluación gratuita."
                : "Dr. Dan Foss has the experience to treat a wide variety of musculoskeletal and neurological conditions. If you suffer from any of the following conditions, contact us today for a free evaluation."}
            </p>
            <div className={styles.conditionGrid}>
              {[
                { slug: "back-pain", es: "Dolor de Espalda", en: "Back Pain" },
                { slug: "neck-pain", es: "Dolor de Cuello", en: "Neck Pain" },
                { slug: "headaches-migraines", es: "Migrañas y Dolores de Cabeza", en: "Headaches & Migraines" },
                { slug: "sciatica", es: "Ciática", en: "Sciatica" },
                { slug: "scoliosis", es: "Escoliosis", en: "Scoliosis" },
                { slug: "auto-accident-injuries", es: "Lesiones de Accidente de Auto", en: "Auto Accident Injuries" },
                { slug: "sports-injuries", es: "Lesiones Deportivas", en: "Sports Injuries" },
                { slug: "pregnancy-chiropractic", es: "Quiropráctica en el Embarazo", en: "Pregnancy Chiropractic" },
              ].map((c) => (
                <Link key={c.slug} href={`/${locale}/conditions/${c.slug}`} className={styles.conditionChip}>
                  {isEs ? c.es : c.en}
                </Link>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Ubicación en San Antonio, TX" : "Located in San Antonio, TX"}
            </h2>
            <p className={styles.p}>
              {isEs
                ? "Convenientemente ubicados en el noroeste de San Antonio, cerca de la Autopista NW Military, atendemos a pacientes de toda la ciudad: Northwest San Antonio, Stone Oak, Helotes, Leon Valley, Shavano Park, Alamo Heights y más."
                : "Conveniently located in northwest San Antonio near NW Military Highway, we serve patients from across the city: Northwest San Antonio, Stone Oak, Helotes, Leon Valley, Shavano Park, Alamo Heights, and more."}
            </p>
            <div className={styles.locationCard}>
              <div className={styles.locationInfo}>
                <p><strong>Pura Vida Chiropractic</strong></p>
                <p>2318 NW Military Hwy, Suite 103<br />San Antonio, TX 78231</p>
                <p><a href="tel:+12106851994">(210) 685-1994</a></p>
                <p><a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a></p>
                <p className={styles.hours}>
                  <strong>{isEs ? "Horario:" : "Hours:"}</strong><br />
                  {isEs ? "Lunes, Martes, Jueves: 7:00 AM – 4:00 PM" : "Monday, Tuesday, Thursday: 7:00 AM – 4:00 PM"}<br />
                  {isEs ? "Miércoles, Viernes–Domingo: Cerrado" : "Wednesday, Friday–Sunday: Closed"}
                </p>
                <Link href={`/${locale}/office-hours`} className={styles.linkPrimary}>
                  {isEs ? "Ver horario completo →" : "View full schedule →"}
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              {isEs
                ? "Experimente la Diferencia del Mejor Quiropráctico en San Antonio"
                : "Experience the Difference of San Antonio's Best Chiropractor"}
            </h2>
            <p className={styles.ctaSub}>
              {isEs
                ? "Reserve su evaluación gratuita hoy y dé el primer paso hacia una vida sin dolor. El Dr. Dan Foss y el equipo de Pura Vida Chiropractic están listos para atenderle en inglés o español."
                : "Book your free evaluation today and take the first step toward a pain-free life. Dr. Dan Foss and the Pura Vida Chiropractic team are ready to serve you in English or Spanish."}
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                {isEs ? "Reserve su Consulta Gratuita" : "Book Your Free Consultation"}
              </a>
              <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>
                {isEs ? "Contáctenos" : "Contact Us"}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
