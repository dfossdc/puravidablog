import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./faq.module.css";

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
  const canonical = `${BASE_URL}/${locale}/faq`;
  return {
    title: isEs
      ? "Preguntas Frecuentes sobre Quiropráctica | Pura Vida San Antonio TX"
      : "Chiropractic FAQs | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "Respuestas a sus preguntas sobre atención quiropráctica en Pura Vida Chiropractic, San Antonio TX. Seguridad, visitas, niños, seguro, bilingüe y más."
      : "Answers to your chiropractic questions at Pura Vida Chiropractic, San Antonio TX. Safety, visits, children, insurance, bilingual care, and more.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/faq`,
        es: `${BASE_URL}/es/faq`,
        "x-default": `${BASE_URL}/en/faq`,
      },
    },
    openGraph: {
      title: isEs ? "Preguntas Frecuentes | Pura Vida Chiropractic" : "FAQ | Pura Vida Chiropractic",
      description: isEs
        ? "Respuestas a sus preguntas sobre quiropráctica en San Antonio, TX."
        : "Answers to your questions about chiropractic care in San Antonio, TX.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const faqsEn = [
  {
    q: "Is chiropractic care safe?",
    a: "Chiropractic is one of the safest drug-free, non-invasive therapies available for musculoskeletal conditions. Dr. Foss uses gentle SOT techniques appropriate for all ages including newborns, children, pregnant women, and seniors.",
  },
  {
    q: "How many visits will I need?",
    a: "Every patient is unique. After your first visit Dr. Foss will present a personalized care plan with a clear timeline and measurable goals.",
  },
  {
    q: "Do you treat children and babies?",
    a: "Yes. Dr. Foss specializes in pediatric chiropractic care from newborns through teenagers. Adjustments for infants use no more pressure than a gentle fingertip touch.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes! Dr. Foss and the entire Pura Vida team are fully bilingual. ¡Hablamos español!",
  },
  {
    q: "Do you accept insurance?",
    a: "Please call our office at (210) 685-1994 to verify your specific coverage before your visit.",
  },
  {
    q: "What is the Pura Vida Protocol?",
    a: "The Pura Vida Protocol is Dr. Foss's comprehensive approach developed over 23 years integrating chiropractic, osteopathic, manual therapy, physical therapy, and energetic modalities — designed to treat the root cause and achieve lasting results.",
  },
  {
    q: "What is SOT Chiropractic?",
    a: "SOT stands for Sacro-Occipital Technique — an advanced chiropractic system focusing on the relationship between the base of the spine and the base of the skull. Dr. Foss holds the highest level of SOT certification through SORSI.",
  },
];

const faqsEs = [
  {
    q: "¿Es segura la atención quiropráctica?",
    a: "La quiropráctica es una de las terapias más seguras sin medicamentos disponibles para condiciones musculoesqueléticas. El Dr. Foss usa técnicas SOT suaves apropiadas para todas las edades, incluyendo recién nacidos, niños, mujeres embarazadas y adultos mayores.",
  },
  {
    q: "¿Cuántas visitas necesitaré?",
    a: "Cada paciente es único. Después de su primera visita el Dr. Foss le presentará un plan de cuidado personalizado con un cronograma claro y objetivos medibles.",
  },
  {
    q: "¿Atiende a niños y bebés?",
    a: "Sí. El Dr. Foss se especializa en cuidado quiropráctico pediátrico desde recién nacidos hasta adolescentes. Los ajustes para bebés usan no más presión que un toque suave con la yema del dedo.",
  },
  {
    q: "¿Hablan español?",
    a: "¡Sí! El Dr. Foss y todo el equipo de Pura Vida son completamente bilingües. ¡Hablamos español!",
  },
  {
    q: "¿Aceptan seguro médico?",
    a: "Por favor llame a nuestra oficina al (210) 685-1994 para verificar su cobertura específica antes de su visita.",
  },
  {
    q: "¿Qué es el Protocolo Pura Vida?",
    a: "El Protocolo Pura Vida es el enfoque integral del Dr. Foss desarrollado durante 23 años integrando quiropráctica, osteopatía, terapia manual, fisioterapia y modalidades energéticas — diseñado para tratar la causa raíz y lograr resultados duraderos.",
  },
  {
    q: "¿Qué es la Quiropráctica SOT?",
    a: "SOT significa Técnica Sacro-Occipital — un sistema quiropráctico avanzado que se enfoca en la relación entre la base de la columna y la base del cráneo. El Dr. Foss posee el nivel más alto de certificación SOT a través de SORSI.",
  },
];

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const faqs = isEs ? faqsEs : faqsEn;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/faq" />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <div className={styles.container}>
          <h1 className={styles.h1}>
            {isEs ? "Preguntas Frecuentes sobre Quiropráctica" : "Chiropractic FAQs"}
          </h1>
          <p className={styles.intro}>
            {isEs
              ? "¿Tiene preguntas sobre la atención quiropráctica? Aquí encontrará respuestas a las preguntas más comunes. Si no encuentra su respuesta, llámenos al (210) 685-1994."
              : "Have questions about chiropractic care? Find answers to the most common questions below. If you don't find your answer, call us at (210) 685-1994."}
          </p>

          <div className={styles.accordion}>
            {faqs.map(({ q, a }, i) => (
              <details key={i} className={styles.item}>
                <summary className={styles.question}>
                  <span>{q}</span>
                  <span className={styles.chevron} aria-hidden="true">›</span>
                </summary>
                <div className={styles.answer}>
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* FAQ Video */}
          <div style={{margin:"2rem 0"}}>
            <h2 style={{marginBottom:"1rem"}}>
              {isEs ? "Vea al Dr. Foss Responder Sus Preguntas" : "Watch Dr. Foss Answer Your Questions"}
            </h2>
            <div style={{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",maxWidth:"720px"}}>
              <iframe
                src="https://www.youtube.com/embed/hp1kpDReRfQ"
                title="Chiropractic FAQ — Dr. Dan Foss Pura Vida San Antonio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0}}
              />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <p>
              {isEs
                ? "¿Aún tiene preguntas? Estamos aquí para ayudarlo."
                : "Still have questions? We're here to help."}
            </p>
            <div className={styles.ctaRow}>
              <a href="tel:+12106851994" className={styles.callBtn}>
                {isEs ? "Llamar (210) 685-1994" : "Call (210) 685-1994"}
              </a>
              <a
                href={`/${locale}/book-now`}
                className={styles.bookBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Consulta Gratis →" : "Free Consultation →"}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
