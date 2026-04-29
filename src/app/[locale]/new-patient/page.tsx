import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./new-patient.module.css";

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
  const canonical = `${BASE_URL}/${locale}/new-patient`;
  return {
    title: isEs
      ? "Nuevos Pacientes | Pura Vida Chiropractic San Antonio TX"
      : "New Patients | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "¿Primera visita a Pura Vida Chiropractic? Sepa qué esperar — consulta, examen, plan de atención y más. Oferta especial para nuevos pacientes en San Antonio, TX."
      : "First visit to Pura Vida Chiropractic? Know what to expect — consultation, exam, care plan and more. New patient special offer in San Antonio, TX.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/new-patient`,
        es: `${BASE_URL}/es/new-patient`,
        "x-default": `${BASE_URL}/en/new-patient`,
      },
    },
    openGraph: {
      title: isEs ? "Nuevos Pacientes | Pura Vida Chiropractic" : "New Patients | Pura Vida Chiropractic",
      description: isEs
        ? "Sepa qué esperar en su primera visita. Evaluación gratuita disponible."
        : "Know what to expect on your first visit. Free consultation available.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const steps = {
  en: [
    {
      title: "Health History & Consultation",
      desc: "We take time to understand your full health history, current concerns, and wellness goals.",
    },
    {
      title: "Examination & X-Rays",
      desc: "A complete physical, orthopedic, and neurological examination. Digital X-rays taken when clinically appropriate.",
    },
    {
      title: "Report of Findings",
      desc: "Dr. Foss reviews all findings with you in detail and presents a personalized care plan.",
    },
    {
      title: "Begin Care",
      desc: "Your first adjustment and the beginning of your journey to lasting health.",
    },
  ],
  es: [
    {
      title: "Historia Clínica y Consulta",
      desc: "Nos tomamos el tiempo para entender su historial de salud completo, preocupaciones actuales y objetivos de bienestar.",
    },
    {
      title: "Examen y Radiografías",
      desc: "Un examen físico, ortopédico y neurológico completo. Radiografías digitales cuando sea clínicamente apropiado.",
    },
    {
      title: "Reporte de Hallazgos",
      desc: "El Dr. Foss revisa todos los hallazgos con usted en detalle y presenta un plan de cuidado personalizado.",
    },
    {
      title: "Comenzar el Cuidado",
      desc: "Su primer ajuste y el comienzo de su camino hacia una salud duradera.",
    },
  ],
};

export default async function NewPatientPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const visitSteps = steps[isEs ? "es" : "en"];

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/new-patient" />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            {isEs ? "Información para Nuevos Pacientes" : "New Patient Information"}
          </h1>

          <p className={styles.intro}>
            {isEs
              ? "En Pura Vida Chiropractic nos aseguramos de que se sienta bienvenido, informado y cómodo desde el momento en que entra por nuestra puerta. Aquí le explicamos qué puede esperar en su primera visita."
              : "At Pura Vida Chiropractic we make sure you feel welcome, informed, and comfortable from the moment you walk through our door. Here's what to expect on your first visit."}
          </p>

          <section className={styles.stepsSection}>
            <h2 className={styles.h2}>
              {isEs ? "Qué Esperar en Su Primera Visita" : "What to Expect on Your First Visit"}
            </h2>
            <div className={styles.steps}>
              {visitSteps.map((s, i) => (
                <div key={i} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.specialBox}>
            <h2 className={styles.specialTitle}>
              {isEs ? "Oferta Especial para Nuevos Pacientes" : "New Patient Special Offer"}
            </h2>
            <p className={styles.specialDesc}>
              {isEs
                ? "No hay riesgo en ver lo que podemos hacer por usted."
                : "There is no risk to see what we can do for you."}
            </p>
            <a
              href="/book-now"
              className={styles.specialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isEs ? "Reclamar Su Consulta Gratis →" : "Claim Your Free Consultation →"}
            </a>
          </div>

          <div id="forms" className={styles.formsBox}>
            <span className={styles.formsIcon}>📋</span>
            <div>
              <p className={styles.formsText}>
                {isEs
                  ? "Descargue, imprima y complete los formularios antes de su visita para ahorrar tiempo."
                  : "Download, print, and complete the forms before your visit to save time."}
              </p>
              <div className={styles.formsList}>
                <a href="/forms/new-patient-adult-en.pdf" download className={styles.formItem}>
                  <span className={styles.formItemIcon}>⬇</span>
                  <span>{isEs ? "Formulario de Adulto (Inglés)" : "Adult Intake Form (English)"}</span>
                </a>
                <a href="/forms/new-patient-child-en.pdf" download className={styles.formItem}>
                  <span className={styles.formItemIcon}>⬇</span>
                  <span>{isEs ? "Formulario de Niño/Infante (Inglés)" : "Child / Infant Intake Form (English)"}</span>
                </a>
                <a href="/forms/new-patient-adult-es.pdf" download className={styles.formItem}>
                  <span className={styles.formItemIcon}>⬇</span>
                  <span>{isEs ? "Formulario de Adulto (Español)" : "Adult Intake Form (Spanish)"}</span>
                </a>
                <a href="/forms/new-patient-child-es.pdf" download className={styles.formItem}>
                  <span className={styles.formItemIcon}>⬇</span>
                  <span>{isEs ? "Formulario de Niño/Infante (Español)" : "Child / Infant Intake Form (Spanish)"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
