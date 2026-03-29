import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./service.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface ServiceData {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  body: string[];
  schema: object;
}

type ServiceMap = Record<string, ServiceData>;

const services: Record<"en" | "es", ServiceMap> = {
  en: {
    "sot-chiropractic": {
      title: "SOT Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Expert SOT chiropractic care in San Antonio, TX. Dr. Dan Foss uses the Sacro-Occipital Technique to relieve pain and restore balance. Free evaluation.",
      keywords: ["SOT chiropractor San Antonio", "Sacro-Occipital Technique San Antonio", "chiropractic San Antonio TX"],
      h1: "SOT Chiropractic in San Antonio",
      body: [
        "The **Sacro-Occipital Technique (SOT)** is a gentle, comprehensive chiropractic method that focuses on the foundational relationship between your sacrum and skull. At Pura Vida Chiropractic, Dr. Dan Foss, DC has extensive training in SOT and uses it to address back pain, neck pain, headaches, sciatica, and more.",
        "Unlike high-velocity adjustments, SOT uses specially designed wedge-shaped blocks and gravity to gently realign the pelvis and spine. The result is lasting relief without forceful manipulation — making it ideal for patients of all ages, including children, pregnant women, and seniors.",
        "Dr. Foss performs a thorough SOT Category Assessment to determine the exact pattern of imbalance in your body, then designs a personalized care plan to address the root cause of your pain.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Sacro-Occipital Technique (SOT)", "procedureType": "Chiropractic" },
    },
    "softwave-therapy": {
      title: "SoftWave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "SoftWave tissue regeneration therapy in San Antonio, TX. Stimulate your body's natural healing without surgery or injections. Book a free evaluation.",
      keywords: ["SoftWave therapy San Antonio", "tissue regeneration San Antonio", "non-surgical pain relief San Antonio"],
      h1: "SoftWave Therapy in San Antonio",
      body: [
        "**SoftWave Therapy** is a cutting-edge, FDA-cleared treatment that uses broadfocused shockwave technology to stimulate tissue regeneration at the cellular level. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC offers SoftWave as part of a comprehensive, non-surgical approach to healing chronic pain.",
        "SoftWave activates stem cells, increases blood flow, and reduces inflammation in damaged tissues. It is highly effective for conditions such as plantar fasciitis, tendinopathies, rotator cuff injuries, knee pain, and chronic soft tissue injuries.",
        "Treatments are fast (15–20 minutes), non-invasive, and require no downtime. Many San Antonio patients experience significant improvement in as few as 3–6 sessions.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "SoftWave Tissue Regeneration Therapy", "procedureType": "Physical Therapy" },
    },
    "auto-injury": {
      title: "Auto Injury Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Injured in a car accident in San Antonio? Dr. Dan Foss specializes in whiplash and auto injury chiropractic care. Free evaluation. We work with auto insurance.",
      keywords: ["auto injury chiropractor San Antonio", "car accident chiropractor San Antonio", "whiplash treatment San Antonio TX"],
      h1: "Auto Injury Chiropractic in San Antonio",
      body: [
        "Car accidents — even minor ones — can cause significant musculoskeletal injuries that may not become apparent until days or weeks after the collision. **Whiplash**, spinal misalignment, disc injuries, and soft tissue damage are among the most common results of auto accidents in San Antonio.",
        "At Pura Vida Chiropractic, Dr. Dan Foss, DC specializes in diagnosing and treating auto injury patients using the Sacro-Occipital Technique and complementary therapies. Early chiropractic care after an accident can dramatically improve recovery outcomes and prevent chronic pain.",
        "We work with auto insurance and personal injury cases. Don't wait — the sooner you seek care, the better your recovery. Contact us today for a free post-accident evaluation.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Auto Injury Chiropractic Care", "procedureType": "Chiropractic" },
    },
    "pediatric-prenatal": {
      title: "Pediatric & Prenatal Chiropractor San Antonio | Pura Vida",
      description:
        "Gentle pediatric and prenatal chiropractic care in San Antonio, TX. SOT technique safe for all ages. Free evaluation for mom and baby.",
      keywords: ["pediatric chiropractor San Antonio", "prenatal chiropractor San Antonio", "chiropractic pregnancy San Antonio TX"],
      h1: "Pediatric & Prenatal Chiropractic in San Antonio",
      body: [
        "Children and expectant mothers deserve the gentlest, most effective care available. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC is trained in **pediatric and prenatal chiropractic** using the SOT technique — one of the safest approaches for these special populations.",
        "For **pregnant women**, SOT helps relieve pelvic pain, sciatica, round ligament discomfort, and prepares the pelvis for an optimal birth. The Webster Technique, a specific SOT protocol, supports ideal fetal positioning. For **infants and children**, gentle SOT adjustments address birth trauma, colic, ear infections, torticollis, and developmental concerns.",
        "Adjustments for infants use no more pressure than a light fingertip touch. Our San Antonio office is a welcoming space for families at every stage of life.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric and Prenatal Chiropractic", "procedureType": "Chiropractic" },
    },
    "shockwave-therapy": {
      title: "Shockwave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Shockwave therapy for chronic pain in San Antonio, TX. Non-invasive treatment for tendons, plantar fasciitis, and more. Free evaluation at Pura Vida Chiropractic.",
      keywords: ["shockwave therapy San Antonio", "ESWT San Antonio", "chronic pain treatment San Antonio TX"],
      h1: "Shockwave Therapy in San Antonio",
      body: [
        "**Extracorporeal Shockwave Therapy (ESWT)** delivers high-energy acoustic waves into damaged tissue, triggering a powerful regenerative response. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC uses shockwave therapy to treat chronic musculoskeletal conditions that haven't responded to other treatments.",
        "Shockwave therapy is clinically proven for conditions including **plantar fasciitis**, Achilles tendinopathy, tennis elbow, calcific shoulder tendinitis, patellar tendinopathy, and hip pain. It breaks down calcifications, stimulates collagen production, and increases blood flow to the treated area.",
        "Most patients require 3–6 sessions spaced 1 week apart. The procedure takes 10–15 minutes and is performed in our San Antonio office with no anesthesia or downtime required.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Shockwave Therapy (ESWT)", "procedureType": "Physical Therapy" },
    },
    "class-iv-laser": {
      title: "Class IV Laser Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Class IV laser therapy in San Antonio, TX. Deep tissue healing for arthritis, disc pain, sports injuries, and neuropathy. Book a free evaluation today.",
      keywords: ["Class IV laser therapy San Antonio", "laser therapy San Antonio TX", "photobiomodulation San Antonio"],
      h1: "Class IV Laser Therapy in San Antonio",
      body: [
        "**Class IV Laser Therapy** (photobiomodulation) uses specific wavelengths of light to penetrate deep into tissues, stimulating cellular repair and reducing inflammation and pain. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC incorporates Class IV laser as a powerful complement to SOT chiropractic care.",
        "Class IV laser is effective for a wide range of conditions including **disc herniation**, arthritis, peripheral neuropathy, sports injuries, post-surgical recovery, and chronic muscle pain. The laser stimulates mitochondrial activity, accelerating the production of ATP (cellular energy) and speeding up tissue repair.",
        "Laser therapy sessions are painless — most patients feel a gentle warmth — and typically last 5–15 minutes. Many San Antonio patients notice reduced pain and improved function within their first few treatments.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Class IV Laser Therapy", "procedureType": "Physical Therapy" },
    },
  },
  es: {
    "quiropractica-sot": {
      title: "Quiropráctico SOT San Antonio | Pura Vida Chiropractic",
      description:
        "Atención quiropráctica SOT experta en San Antonio, TX. El Dr. Dan Foss usa la Técnica Sacro-Occipital para aliviar el dolor. Evaluación gratuita.",
      keywords: ["quiropráctico SOT San Antonio", "Técnica Sacro-Occipital San Antonio", "quiropráctica San Antonio TX"],
      h1: "Quiropráctica SOT en San Antonio",
      body: [
        "La **Técnica Sacro-Occipital (SOT)** es un método quiropráctico suave y completo que se centra en la relación fundamental entre el sacro y el cráneo. En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene una formación extensa en SOT y la utiliza para tratar dolor de espalda, cuello, cabeza, ciática y mucho más.",
        "A diferencia de los ajustes de alta velocidad, el SOT utiliza bloques cuña especialmente diseñados y la gravedad para realinear suavemente la pelvis y la columna. El resultado es un alivio duradero sin manipulación forzada, lo que lo hace ideal para pacientes de todas las edades, incluyendo niños, mujeres embarazadas y adultos mayores.",
        "El Dr. Foss realiza una evaluación completa de la Categoría SOT para determinar el patrón exacto de desequilibrio en su cuerpo y diseñar un plan de atención personalizado para abordar la causa raíz de su dolor.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Técnica Sacro-Occipital (SOT)", "procedureType": "Chiropractic" },
    },
    "terapia-softwave": {
      title: "Terapia SoftWave San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia SoftWave de regeneración tisular en San Antonio, TX. Estimule la curación natural sin cirugía ni inyecciones. Reserve su evaluación gratuita.",
      keywords: ["terapia SoftWave San Antonio", "regeneración tisular San Antonio", "alivio del dolor sin cirugía San Antonio"],
      h1: "Terapia SoftWave en San Antonio",
      body: [
        "La **Terapia SoftWave** es un tratamiento de vanguardia aprobado por la FDA que utiliza tecnología de ondas de choque de enfoque amplio para estimular la regeneración tisular a nivel celular. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC ofrece SoftWave como parte de un enfoque integral y no quirúrgico para sanar el dolor crónico.",
        "SoftWave activa células madre, aumenta el flujo sanguíneo y reduce la inflamación en tejidos dañados. Es altamente efectivo para condiciones como fascitis plantar, tendinopatías, lesiones del manguito rotador, dolor de rodilla y lesiones crónicas de tejidos blandos.",
        "Los tratamientos son rápidos (15–20 minutos), no invasivos y no requieren tiempo de recuperación. Muchos pacientes de San Antonio experimentan una mejora significativa en tan solo 3–6 sesiones.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia SoftWave de Regeneración Tisular", "procedureType": "Physical Therapy" },
    },
    "lesiones-de-auto": {
      title: "Quiropráctico Lesiones de Auto San Antonio | Pura Vida",
      description:
        "¿Lesionado en un accidente de auto en San Antonio? El Dr. Dan Foss se especializa en latigazo y lesiones de auto. Evaluación gratuita. Trabajamos con seguros.",
      keywords: ["quiropráctico lesiones de auto San Antonio", "accidente de carro quiropráctico San Antonio", "latigazo tratamiento San Antonio TX"],
      h1: "Quiropráctica para Lesiones de Auto en San Antonio",
      body: [
        "Los accidentes de automóvil, incluso los menores, pueden causar lesiones musculoesqueléticas significativas que pueden no manifestarse hasta días o semanas después de la colisión. El **latigazo cervical**, la desalineación espinal, las lesiones de disco y el daño a tejidos blandos son las consecuencias más frecuentes de los accidentes de auto en San Antonio.",
        "En Pura Vida Chiropractic, el Dr. Dan Foss, DC se especializa en diagnosticar y tratar pacientes con lesiones de auto utilizando la Técnica Sacro-Occipital y terapias complementarias. La atención quiropráctica temprana después de un accidente puede mejorar dramáticamente los resultados de recuperación y prevenir el dolor crónico.",
        "Trabajamos con seguros de auto y casos de lesiones personales. No espere — cuanto antes busque atención, mejor será su recuperación. Contáctenos hoy para una evaluación gratuita posterior al accidente.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Atención Quiropráctica por Lesiones de Auto", "procedureType": "Chiropractic" },
    },
    "quiropractica-pediatrica": {
      title: "Quiropráctico Pediátrico y Prenatal San Antonio | Pura Vida",
      description:
        "Atención quiropráctica pediátrica y prenatal gentil en San Antonio, TX. Técnica SOT segura para todas las edades. Evaluación gratuita para mamá y bebé.",
      keywords: ["quiropráctico pediátrico San Antonio", "quiropráctica prenatal San Antonio", "quiropráctica embarazo San Antonio TX"],
      h1: "Quiropráctica Pediátrica y Prenatal en San Antonio",
      body: [
        "Los niños y las futuras mamás merecen la atención más gentil y efectiva disponible. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC está capacitado en **quiropráctica pediátrica y prenatal** utilizando la técnica SOT — uno de los enfoques más seguros para estas poblaciones especiales.",
        "Para las **mujeres embarazadas**, el SOT ayuda a aliviar el dolor pélvico, la ciática, la molestia del ligamento redondo y prepara la pelvis para un parto óptimo. Para los **bebés y niños**, los ajustes SOT suaves abordan el trauma del nacimiento, los cólicos, las infecciones de oído, la tortícolis y las preocupaciones del desarrollo.",
        "Los ajustes para bebés utilizan una presión no mayor que la de la punta de un dedo. Nuestra consulta en San Antonio es un espacio acogedor para familias en cada etapa de la vida.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica Pediátrica y Prenatal", "procedureType": "Chiropractic" },
    },
    "terapia-ondas-de-choque": {
      title: "Terapia de Ondas de Choque San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia de ondas de choque para dolor crónico en San Antonio, TX. Tratamiento no invasivo para tendones, fascitis plantar y más. Evaluación gratuita.",
      keywords: ["terapia ondas de choque San Antonio", "ESWT San Antonio", "tratamiento dolor crónico San Antonio TX"],
      h1: "Terapia de Ondas de Choque en San Antonio",
      body: [
        "La **Terapia de Ondas de Choque Extracorpóreas (ESWT)** envía ondas acústicas de alta energía al tejido dañado, desencadenando una potente respuesta regenerativa. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC utiliza la terapia de ondas de choque para tratar condiciones musculoesqueléticas crónicas que no han respondido a otros tratamientos.",
        "La terapia de ondas de choque está clínicamente probada para condiciones como **fascitis plantar**, tendinopatía de Aquiles, codo de tenista, tendinitis calcificante de hombro, tendinopatía rotuliana y dolor de cadera. Descompone las calcificaciones, estimula la producción de colágeno y aumenta el flujo sanguíneo.",
        "La mayoría de los pacientes requieren 3–6 sesiones con una semana de separación. El procedimiento dura 10–15 minutos y se realiza en nuestra consulta de San Antonio sin anestesia ni tiempo de recuperación.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia de Ondas de Choque (ESWT)", "procedureType": "Physical Therapy" },
    },
    "laser-clase-iv": {
      title: "Terapia Láser Clase IV San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia láser Clase IV en San Antonio, TX. Sanación profunda para artritis, dolor de disco, lesiones deportivas y neuropatía. Reserve su evaluación gratuita.",
      keywords: ["láser clase IV San Antonio", "terapia láser San Antonio TX", "fotobiomodulación San Antonio"],
      h1: "Terapia Láser Clase IV en San Antonio",
      body: [
        "La **Terapia Láser Clase IV** (fotobiomodulación) utiliza longitudes de onda específicas de luz para penetrar profundamente en los tejidos, estimulando la reparación celular y reduciendo la inflamación y el dolor. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC incorpora el láser Clase IV como un poderoso complemento a la atención quiropráctica SOT.",
        "El láser Clase IV es efectivo para una amplia gama de condiciones, incluyendo **hernia de disco**, artritis, neuropatía periférica, lesiones deportivas, recuperación post-quirúrgica y dolor muscular crónico. El láser estimula la actividad mitocondrial, acelerando la producción de ATP y la reparación tisular.",
        "Las sesiones de terapia láser son indoloras — la mayoría de los pacientes sienten un calor suave — y duran típicamente 5–15 minutos. Muchos pacientes de San Antonio notan reducción del dolor y mejor función en sus primeros tratamientos.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia Láser Clase IV", "procedureType": "Physical Therapy" },
    },
  },
};

interface Props {
  params: Promise<{ locale: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; service: string }[] = [];
  for (const locale of Object.keys(services)) {
    for (const service of Object.keys(services[locale as "en" | "es"])) {
      params.push({ locale, service });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service } = await params;
  const data = services[locale as "en" | "es"]?.[service];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}/services/${service}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}/${locale}/services/${service}`,
      siteName: "Pura Vida Chiropractic",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, service } = await params;
  const data = services[locale as "en" | "es"]?.[service];
  if (!data) return <div>Service not found</div>;

  const isEs = locale === "es";
  const ctaText = isEs ? "Reservar Evaluación Gratis" : "Book Free Evaluation";
  const ctaHref = "https://puravidasanantonio.com/contact";

  const schemaJson = {
    "@context": "https://schema.org",
    ...data.schema,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pura Vida Chiropractic",
      "url": BASE_URL,
    },
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href={`/${locale}/blog`}>
              {isEs ? "Blog" : "Blog"}
            </Link>
            {" › "}
            <span>{data.h1}</span>
          </nav>

          <h1 className={styles.h1}>{data.h1}</h1>

          <div className={styles.body}>
            {data.body.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              }} />
            ))}
          </div>

          <div className={styles.ctaBox}>
            <p>{isEs
              ? "¿Listo para experimentar la diferencia? El Dr. Dan Foss, DC está aquí para ayudarle."
              : "Ready to experience the difference? Dr. Dan Foss, DC is here to help."
            }</p>
            <a href={ctaHref} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
              {ctaText} →
            </a>
            <p className={styles.contact}>
              <strong>{isEs ? "Teléfono" : "Phone"}:</strong>{" "}
              <a href="tel:+12106851994">(210) 685-1994</a>
              {"  |  "}
              <strong>{isEs ? "Dirección" : "Address"}:</strong>{" "}
              2318 NW Military Hwy Suite 103, San Antonio, TX 78231
            </p>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
