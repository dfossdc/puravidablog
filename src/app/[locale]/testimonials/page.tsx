import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./testimonials.module.css";

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
  const canonical = `${BASE_URL}/${locale}/testimonials`;
  return {
    title: isEs
      ? "Testimonios | Pura Vida Chiropractic San Antonio"
      : "Patient Testimonials | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "147 reseñas de cinco estrellas de pacientes de San Antonio, TX que encontraron alivio con el Dr. Dan Foss — quiropráctica SOT, terapia SoftWave y más."
      : "147 five-star reviews from San Antonio, TX patients who found relief with Dr. Dan Foss — SOT chiropractic, SoftWave therapy, and more.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/testimonials`,
        es: `${BASE_URL}/es/testimonials`,
        "x-default": `${BASE_URL}/en/testimonials`,
      },
    },
    openGraph: {
      title: isEs
        ? "Testimonios de Pacientes | Pura Vida Quiropráctica San Antonio"
        : "Patient Testimonials | Pura Vida Chiropractic San Antonio",
      description: isEs
        ? "Historias reales de pacientes que encontraron alivio del dolor con el Dr. Dan Foss en San Antonio, TX."
        : "Real patient stories of pain relief with Dr. Dan Foss in San Antonio, TX.",
      url: canonical,
      locale: isEs ? "es_MX" : "en_US",
    },
  };
}

const videoTestimonials = [
  { name: "Maria G.", condition: "Back Pain", conditionEs: "Dolor de Espalda" },
  { name: "James R.", condition: "Auto Injury", conditionEs: "Lesión de Auto" },
  { name: "Sofia L.", condition: "Prenatal Care", conditionEs: "Cuidado Prenatal" },
  { name: "Carlos M.", condition: "Neck Pain", conditionEs: "Dolor de Cuello" },
  { name: "Angela T.", condition: "Pediatric", conditionEs: "Quiropráctica Pediátrica" },
  { name: "David K.", condition: "Sciatica", conditionEs: "Ciática" },
  { name: "Rosa V.", condition: "Headaches", conditionEs: "Migrañas" },
  { name: "Michael S.", condition: "Sports Injury", conditionEs: "Lesión Deportiva" },
];

const writtenTestimonials = [
  {
    name: "Patricia H.",
    stars: 5,
    condition: "Chronic Back Pain",
    conditionEs: "Dolor de Espalda Crónico",
    quote: "Dr. Foss completely changed my life. After years of chronic back pain, I can finally sleep through the night. His SOT technique is unlike anything I've experienced.",
    quoteEs: "El Dr. Foss cambió mi vida por completo. Después de años de dolor de espalda crónico, por fin puedo dormir toda la noche. Su técnica SOT es incomparable.",
  },
  {
    name: "Roberto A.",
    stars: 5,
    condition: "Auto Injury",
    conditionEs: "Lesión de Auto",
    quote: "After my car accident I was in terrible pain. Dr. Foss and his team helped me recover faster than I thought possible. Highly recommend for anyone with auto injuries.",
    quoteEs: "Después de mi accidente de auto tenía un dolor terrible. El Dr. Foss y su equipo me ayudaron a recuperarme más rápido de lo que creía posible. Muy recomendado.",
  },
  {
    name: "Jennifer W.",
    stars: 5,
    condition: "Prenatal Chiropractic",
    conditionEs: "Quiropráctica Prenatal",
    quote: "I saw Dr. Foss throughout my entire pregnancy. The relief I felt was incredible and my labor was much smoother. I now bring my baby too — he's wonderful with kids.",
    quoteEs: "Visité al Dr. Foss durante todo mi embarazo. El alivio que sentí fue increíble y mi parto fue mucho más fluido. Ahora también traigo a mi bebé — es maravilloso con los niños.",
  },
  {
    name: "Manuel R.",
    stars: 5,
    condition: "Neck & Shoulder Pain",
    conditionEs: "Dolor de Cuello y Hombro",
    quote: "Fui escéptico al principio pero el Dr. Foss me explicó todo en español, lo cual fue muy cómodo. Después de cuatro sesiones, el dolor en mi cuello desapareció completamente.",
    quoteEs: "Fui escéptico al principio pero el Dr. Foss me explicó todo en español, lo cual fue muy cómodo. Después de cuatro sesiones, el dolor en mi cuello desapareció completamente.",
  },
  {
    name: "Linda B.",
    stars: 5,
    condition: "SoftWave Therapy",
    conditionEs: "Terapia SoftWave",
    quote: "The SoftWave therapy for my knee was amazing. I avoided surgery thanks to Dr. Foss. His office is professional and everyone is so kind and welcoming.",
    quoteEs: "La terapia SoftWave para mi rodilla fue increíble. Evité la cirugía gracias al Dr. Foss. Su consultorio es profesional y todos son muy amables y acogedores.",
  },
  {
    name: "Thomas N.",
    stars: 5,
    condition: "Sciatica",
    conditionEs: "Ciática",
    quote: "Sciatica had me limping for months. One month with Dr. Foss and the Class IV laser and I'm back to jogging. The entire staff is outstanding.",
    quoteEs: "La ciática me tuvo cojeando durante meses. Un mes con el Dr. Foss y el láser Clase IV y ya estoy trotando de nuevo. Todo el personal es excelente.",
  },
  {
    name: "Ana C.",
    stars: 5,
    condition: "Infant Chiropractic",
    conditionEs: "Quiropráctica para Bebés",
    quote: "Traje a mi bebé de dos meses con problemas de cólicos y problemas para dormir. El Dr. Foss fue muy gentil y experto. En una semana mi bebé dormía mucho mejor.",
    quoteEs: "Traje a mi bebé de dos meses con problemas de cólicos y problemas para dormir. El Dr. Foss fue muy gentil y experto. En una semana mi bebé dormía mucho mejor.",
  },
  {
    name: "Kevin P.",
    stars: 5,
    condition: "Sports Injury",
    conditionEs: "Lesión Deportiva",
    quote: "As a runner I put a lot of stress on my body. Dr. Foss keeps me in top shape with regular adjustments and shockwave therapy. Best chiropractor I've ever seen.",
    quoteEs: "Como corredor pongo mucho estrés en mi cuerpo. El Dr. Foss me mantiene en óptimas condiciones con ajustes regulares y terapia de ondas de choque. El mejor quiropráctico que he visto.",
  },
  {
    name: "Isabel F.",
    stars: 5,
    condition: "Headaches & Migraines",
    conditionEs: "Dolores de Cabeza y Migrañas",
    quote: "I suffered from migraines twice a week for years. Dr. Foss identified the root cause and after six weeks of treatment I am virtually migraine-free. Life changing!",
    quoteEs: "Sufrí de migrañas dos veces por semana durante años. El Dr. Foss identificó la causa raíz y después de seis semanas de tratamiento estoy prácticamente libre de migrañas.",
  },
];

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": BASE_URL,
    "name": "Pura Vida Chiropractic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "147",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": writtenTestimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(t.stars),
        "bestRating": "5",
      },
      "reviewBody": t.quote,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isEs ? "Inicio" : "Home",
        "item": `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isEs ? "Testimonios" : "Testimonials",
        "item": `${BASE_URL}/${locale}/testimonials`,
      },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/testimonials" />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {isEs
              ? "Lo Que Dicen Nuestros Pacientes"
              : "What Our Patients Say"}
          </h1>
          <p className={styles.heroSub}>
            {isEs
              ? "147 reseñas de cinco estrellas de familias de San Antonio que encontraron alivio real con el Dr. Dan Foss y el equipo de Pura Vida."
              : "147 five-star reviews from San Antonio families who found real relief with Dr. Dan Foss and the Pura Vida team."}
          </p>
        </section>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNum}>147</span>
              <span className={styles.statLabel}>
                {isEs ? "Reseñas de 5 Estrellas" : "5-Star Reviews"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>23+</span>
              <span className={styles.statLabel}>
                {isEs ? "Años de Experiencia" : "Years of Experience"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>EN/ES</span>
              <span className={styles.statLabel}>
                {isEs ? "Clínica Bilingüe" : "Bilingual Clinic"}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>1000s</span>
              <span className={styles.statLabel}>
                {isEs ? "de Familias Atendidas" : "of Families Helped"}
              </span>
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Testimonios en Video" : "Video Testimonials"}
          </h2>
          <p className={styles.sectionSub}>
            {isEs
              ? "Escucha directamente de nuestros pacientes cómo la quiropráctica cambió sus vidas."
              : "Hear directly from our patients how chiropractic care changed their lives."}
          </p>
          <div className={styles.videoGrid}>
            {videoTestimonials.map((v) => (
              <a
                key={v.name}
                href="https://puravidasanantonio.com/testimonials/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoCard}
                aria-label={`${isEs ? "Ver testimonio de" : "Watch testimonial from"} ${v.name}`}
              >
                <div className={styles.videoThumb}>
                  <div className={styles.playIcon}>▶</div>
                </div>
                <div className={styles.videoInfo}>
                  <p className={styles.videoName}>{v.name}</p>
                  <p className={styles.videoCondition}>
                    {isEs ? v.conditionEs : v.condition}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Written Testimonials */}
        <section className={styles.section} style={{ paddingTop: 0 }}>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Reseñas Escritas" : "Written Reviews"}
          </h2>
          <p className={styles.sectionSub}>
            {isEs
              ? "Reseñas verificadas de Google de pacientes reales en San Antonio, TX."
              : "Verified Google reviews from real patients in San Antonio, TX."}
          </p>
          <div className={styles.writtenGrid}>
            {writtenTestimonials.map((t) => (
              <div key={t.name} className={styles.reviewCard}>
                <div className={styles.stars}>{"★".repeat(t.stars)}</div>
                <p className={styles.reviewQuote}>
                  &ldquo;{isEs ? t.quoteEs : t.quote}&rdquo;
                </p>
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewerName}>{t.name}</span>
                  <span className={styles.conditionBadge}>
                    {isEs ? t.conditionEs : t.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Google Review CTA */}
        <div className={styles.googleCta}>
          <h2>
            {isEs
              ? "¿Has Visitado Pura Vida?"
              : "Have You Visited Pura Vida?"}
          </h2>
          <p>
            {isEs
              ? "Su reseña ayuda a otras familias de San Antonio a encontrar el alivio que necesitan. ¡Comparta su experiencia en Google!"
              : "Your review helps other San Antonio families find the relief they need. Share your experience on Google!"}
          </p>
          <a
            href="https://puravidasanantonio.com/review-us/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            <span>G</span>
            {isEs ? "Dejar una Reseña en Google" : "Leave a Google Review"}
          </a>
        </div>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <h2>
            {isEs
              ? "¿Listo para Empezar su Recuperación?"
              : "Ready to Start Your Recovery?"}
          </h2>
          <p>
            {isEs
              ? "Únase a miles de pacientes satisfechos en San Antonio. Programe su evaluación gratuita con el Dr. Dan Foss hoy."
              : "Join thousands of satisfied patients in San Antonio. Schedule your free evaluation with Dr. Dan Foss today."}
          </p>
          <a
            href="https://puravidasanantonio.com/special/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            {isEs ? "Obtenga su Evaluación Gratis" : "Get Your Free Evaluation"}
          </a>
        </section>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
