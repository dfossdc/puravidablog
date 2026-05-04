import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { conditionsContent } from "@/lib/conditionsContent";
import { conditionsContentEs } from "@/lib/conditionsContentEs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineVideo from "@/components/InlineVideo";
import RelatedContent from "@/components/RelatedContent";
import { getRelatedConditions, getRelatedServicesForCondition } from "@/lib/relatedContent";
import styles from "./condition.module.css";

// Slugs that should display the pregnancy intro video inline.
// The same video plays on the English and Spanish pages.
const PREGNANCY_VIDEO_SLUGS = new Set([
  "pregnancy-wellness",
  "breech-presentation",
  "postpartum-recovery",
  "round-ligament-pain",
  "pelvic-girdle-pain",
  "infertility",
]);

// Merge Spanish content into base conditions
const conditionsWithEs = conditionsContent.map((c) => {
  const es = conditionsContentEs.find((x) => x.slug === c.slug);
  return es ? { ...c, ...es } : c;
});

export async function generateStaticParams() {
  const locales = ["en", "es"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const c of conditionsContent) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = conditionsWithEs.find((x) => x.slug === slug);
  if (!c) return {};
  const isEs = locale === "es";
  return {
    title: isEs
      ? `${c.titleEs ?? c.title} | Pura Vida`
      : `${c.title} | Pura Vida`,
    description: isEs ? (c.metaDescriptionEs ?? c.metaDescription) : c.metaDescription,
    alternates: {
      canonical: `/${locale}/conditions/${slug}`,
      languages: {
        en: `/en/conditions/${slug}`,
        es: `/es/conditions/${slug}`,
      },
    },
    openGraph: {
      title: isEs
        ? `${c.titleEs ?? c.title} en San Antonio | Pura Vida Chiropractic`
        : `${c.title} Treatment San Antonio TX | Pura Vida Chiropractic`,
      description: isEs ? (c.metaDescriptionEs ?? c.metaDescription) : c.metaDescription,
      type: "website",
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
    },
  };
}

const treatments = {
  en: {
    shockwave: {
      name: "Shockwave Therapy",
      desc: "High-energy acoustic waves penetrate deep into tissue to break up calcifications, stimulate collagen production, and accelerate the body's natural repair process — all without surgery or downtime.",
    },
    softwave: {
      name: "SoftWave Therapy",
      desc: "Patented unfocused shock waves spread over a broad treatment area to reduce inflammation, increase blood flow, and activate stem cells — promoting cellular regeneration and long-term pain relief.",
    },
    laser: {
      name: "Class IV Laser Therapy",
      desc: "Photobiomodulation with a 10–15W Class IV laser delivers therapeutic light energy deep into tissue, reducing inflammation, blocking pain signals, and speeding healing at the cellular level.",
    },
  },
  es: {
    shockwave: {
      name: "Terapia de Onda de Choque",
      desc: "Las ondas acústicas de alta energía penetran profundamente en el tejido para romper calcificaciones, estimular la producción de colágeno y acelerar el proceso de reparación natural de su cuerpo — todo sin cirugía ni tiempo de recuperación.",
    },
    softwave: {
      name: "Terapia SoftWave",
      desc: "Las ondas de choque no enfocadas y patentadas se distribuyen sobre una amplia área de tratamiento para reducir la inflamación, aumentar el flujo sanguíneo y activar las células madre — promoviendo la regeneración celular y el alivio del dolor a largo plazo.",
    },
    laser: {
      name: "Terapia con Láser de Clase IV",
      desc: "La fotobiomodulación con un láser de Clase IV de 10–15 W administra energía luminosa terapéutica profunda en el tejido, reduciendo la inflamación, bloqueando las señales de dolor y acelerando la curación a nivel celular.",
    },
  },
};

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const c = conditionsWithEs.find((x) => x.slug === slug);
  if (!c) notFound();

  const isEs = locale === "es";
  const t = isEs ? treatments.es : treatments.en;

  const title = isEs ? (c.titleEs ?? c.title) : c.title;
  const intro = isEs ? (c.introEs ?? c.intro) : c.intro;
  const whatIs = isEs ? (c.whatIsEs ?? c.whatIs) : c.whatIs;
  const symptoms = isEs ? (c.symptomsEs ?? c.symptoms) : c.symptoms;
  const causes = isEs ? (c.causesEs ?? c.causes) : c.causes;
  const chiropracticTreatment = isEs
    ? (c.chiropracticTreatmentEs ?? c.chiropracticTreatment)
    : c.chiropracticTreatment;

  // Strip the SEO suffix ("| Chiropractor San Antonio TX" / "| Quiropráctico
  // San Antonio TX") from the schema name so it reads as a clean condition
  // label for AI search and Google's MedicalCondition rich result.
  const conditionName = title.replace(/\s*\|.*$/, "").trim();

  const BASE_URL = "https://puravidasanantonio.com";
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: conditionName,
    description: intro,
    url: `${BASE_URL}/${locale}/conditions/${slug}`,
    ...(symptoms?.length
      ? {
          signOrSymptom: symptoms.map((s) => ({
            "@type": "MedicalSymptom",
            name: s,
          })),
        }
      : {}),
    ...(causes?.length
      ? {
          cause: causes.map((c) => ({
            "@type": "MedicalCause",
            name: c,
          })),
        }
      : {}),
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: isEs ? "Cuidado Quiropráctico" : "Chiropractic Care",
      description: chiropracticTreatment,
      performedBy: {
        "@type": "Person",
        name: "Dr. Dan Foss, DC",
        url: `${BASE_URL}/${locale}/meet-dr-foss`,
      },
    },
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Chiropractic",
    },
  };

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
        name: isEs ? "Condiciones" : "Conditions",
        item: `${BASE_URL}/${locale}/conditions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: conditionName,
        item: `${BASE_URL}/${locale}/conditions/${slug}`,
      },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath={`/conditions/${slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <Image
          src={c.image}
          alt={
            isEs
              ? `Tratamiento de ${title} en Pura Vida Chiropractic San Antonio`
              : `${title} treatment at Pura Vida Chiropractic San Antonio`
          }
          fill
          priority
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label={isEs ? "Ruta de navegación" : "Breadcrumb"}>
        <Link href={`/${locale}`}>{isEs ? "Inicio" : "Home"}</Link>
        {" › "}
        <Link href={`/${locale}#conditions`}>{isEs ? "Condiciones" : "Conditions"}</Link>
        {" › "}
        {title}
      </nav>

      <div className={styles.content}>
        {/* Intro */}
        <p className={styles.intro}>{intro}</p>

        {/* Optional inline video — pregnancy intro for pregnancy-related conditions */}
        {(c.video || PREGNANCY_VIDEO_SLUGS.has(c.slug)) && (
          <InlineVideo
            src={c.video ?? "/videos/pregnancy.mp4"}
            poster={c.videoPoster ?? "/videos/pregnancy-poster.jpg"}
            caption={
              isEs
                ? c.videoCaptionEs ??
                  "Cuidado quiropráctico prenatal y posparto en Pura Vida Chiropractic, San Antonio TX"
                : c.videoCaption ??
                  "Prenatal & postpartum chiropractic care at Pura Vida Chiropractic, San Antonio TX"
            }
            ariaLabel={
              isEs
                ? "Video sobre cuidado quiropráctico durante el embarazo"
                : "Video about chiropractic care during pregnancy"
            }
          />
        )}

        {/* What Is */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs ? `¿Qué Es ${title}?` : `What Is ${title}?`}
          </h2>
          <p className={styles.sectionText}>{whatIs}</p>
        </div>

        {/* Symptoms */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Síntomas Comunes" : "Common Symptoms"}
          </h2>
          <ul className={styles.list}>
            {symptoms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Causes */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs
              ? "Causas Comunes y Factores Contribuyentes"
              : "Common Causes & Contributing Factors"}
          </h2>
          <ul className={styles.list}>
            {causes.map((ca) => (
              <li key={ca}>{ca}</li>
            ))}
          </ul>
        </div>

        {/* Pura Vida Protocol */}
        <div className={styles.protocolBox}>
          <h2>
            {isEs
              ? `El Protocolo Pura Vida: Tratamiento Quiropráctico para ${title}`
              : `The Pura Vida Protocol: Chiropractic Care for ${title}`}
          </h2>
          <p>{chiropracticTreatment}</p>
          <p style={{ marginTop: "0.75rem" }}>
            {isEs
              ? "En Pura Vida Chiropractic, el Dr. Foss utiliza la Técnica Sacro-Occipital (SOT) — un sistema suave basado en categorías que aborda la columna vertebral, la pelvis y el ritmo cráneo-sacral como una unidad integrada. La SOT restaura la biomecánica adecuada, reduce la interferencia nerviosa y crea el entorno neurológico que su cuerpo necesita para sanar por sí mismo."
              : "At Pura Vida Chiropractic, Dr. Foss uses Sacro-Occipital Technique (SOT) — a gentle, category-based system that addresses the spine, pelvis, and craniosacral rhythm as one integrated unit. SOT restores proper biomechanics, reduces nerve interference, and creates the neurological environment your body needs to heal itself."}
          </p>
        </div>

        {/* Additional Treatments */}
        {c.additionalTreatments.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? "Terapias Avanzadas que Combinamos con la Quiropráctica"
                : "Advanced Therapies We Combine With Chiropractic"}
            </h2>
            <p className={styles.sectionText} style={{ marginBottom: "1rem" }}>
              {isEs
                ? "Para muchos pacientes, combinar la corrección espinal con terapias regenerativas produce resultados más rápidos y duraderos. Según su condición, el Dr. Foss puede incorporar una o más de las siguientes:"
                : "For many patients, combining spinal correction with regenerative therapies produces faster and more lasting results. Depending on your condition, Dr. Foss may incorporate one or more of the following:"}
            </p>
            <div className={styles.treatmentsGrid}>
              {c.additionalTreatments.map((tx) => (
                <div key={tx} className={styles.treatmentCard}>
                  <h3>{t[tx].name}</h3>
                  <p>{t[tx].desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Pura Vida */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {isEs
              ? "¿Por Qué Elegir Pura Vida Chiropractic en San Antonio?"
              : "Why Choose Pura Vida Chiropractic in San Antonio?"}
          </h2>
          <p className={styles.sectionText}>
            {isEs
              ? "Pura Vida Chiropractic es una clínica familiar y bilingüe (inglés/español) que atiende a San Antonio, TX. El Dr. Dan Foss está capacitado en la Técnica Sacro-Occipital (SOT), un sistema quiropráctico integral que aborda el cuerpo completo — no solo el área de dolor. Combinamos la corrección espinal con la tecnología regenerativa más avanzada para ayudar a los pacientes a resolver la causa raíz de su condición en lugar de enmascarar los síntomas."
              : "Pura Vida Chiropractic is a family-friendly, bilingual (English/Spanish) clinic serving San Antonio, TX. Dr. Dan Foss is trained in Sacro-Occipital Technique (SOT), a comprehensive chiropractic system that addresses the whole body — not just the area of pain. We combine hands-on spinal correction with the latest regenerative technology to help patients resolve the root cause of their condition rather than masking symptoms."}
          </p>
          <p className={styles.sectionText}>
            {isEs
              ? "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado. Las citas para nuevos pacientes están disponibles con prontitud."
              : "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care. New patient appointments are available promptly."}
          </p>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>
            {isEs
              ? `¿Listo para Aliviar ${title}?`
              : `Ready to Get Relief from ${title}?`}
          </h2>
          <p>
            {isEs
              ? "Reserve su cita de nuevo paciente con el Dr. Foss en Pura Vida Chiropractic en San Antonio, TX. Identificaremos la causa raíz y elaboraremos un plan de cuidado personalizado para usted."
              : "Schedule your new patient appointment with Dr. Foss at Pura Vida Chiropractic in San Antonio, TX. We'll identify the root cause and build a personalized care plan."}
          </p>
          <Link href={`/${locale}/book-now`} className={styles.ctaBtn}>
            {isEs ? "Reserve Su Cita" : "Book Your Appointment"}
          </Link>
        </div>
      </div>
    </div>
      <RelatedContent
        items={[
          ...getRelatedServicesForCondition(slug, locale),
          ...getRelatedConditions(slug, locale, 3),
        ]}
        heading={isEs ? "Tratamientos y Condiciones Relacionadas" : "Related Treatments & Conditions"}
        subheading={
          isEs
            ? "Explore las terapias que usamos y otras condiciones que tratamos."
            : "Explore the therapies we use and other conditions we treat."
        }
      />
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
