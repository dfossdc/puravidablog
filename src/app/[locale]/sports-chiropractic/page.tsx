import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../services/[service]/service.module.css";

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
  const canonical = `${BASE_URL}/${locale}/sports-chiropractic`;
  return {
    title: isEs
      ? "Quiropráctico Deportivo San Antonio | Pura Vida Chiropractic"
      : "Sports Chiropractor in San Antonio, TX | Pura Vida",
    description: isEs
      ? "Quiropráctico deportivo en San Antonio TX. El Dr. Dan Foss trata lesiones deportivas, esguinces, dolor de hombro, rodilla y columna. Atendemos Stone Oak, Castle Hills y Alamo Heights. Evaluación gratuita."
      : "Sports chiropractor San Antonio TX. Dr. Dan Foss treats sports injuries, sprains, shoulder pain, knee pain, and spinal conditions. Sports injury treatment San Antonio serving Stone Oak, Castle Hills, and Alamo Heights. Free consultation.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/sports-chiropractic`,
        es: `${BASE_URL}/es/sports-chiropractic`,
        "x-default": `${BASE_URL}/en/sports-chiropractic`,
      },
    },
    openGraph: {
      title: isEs
        ? "Quiropráctico Deportivo San Antonio | Pura Vida"
        : "Sports Chiropractor San Antonio, TX | Pura Vida",
      description: isEs
        ? "Recupere más rápido, rinda mejor y prevenga lesiones futuras con quiropráctica deportiva en San Antonio."
        : "Recover faster, perform better, and prevent future injuries with sports chiropractic in San Antonio.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function SportsChiropracticPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const h1 = isEs
    ? "Quiropráctico Deportivo en San Antonio, TX"
    : "Sports Chiropractor in San Antonio, TX";
  const ctaText = isEs ? "Reservar Consulta Gratis" : "Book Free Consultation";

  const body = isEs
    ? [
        "El cuidado quiropráctico ha recibido mucha atención por su **manejo exitoso de lesiones deportivas**. Ya sea que sea un guerrero de fin de semana, un atleta estudiante o un competidor profesional, la quiropráctica deportiva en Pura Vida Chiropractic le ayuda a recuperarse más rápido, rendir mejor y prevenir lesiones futuras.",
        "El Dr. Foss trata una gama completa de condiciones relacionadas con el deporte incluyendo esguinces y distensiones, **lesiones de hombro** (manguito rotador, articulación AC), dolor de rodilla, problemas de cadera, lesiones de tobillo, fascitis plantar, tendinopatías y condiciones espinales por impacto atlético.",
        "La quiropráctica deportiva aborda el sistema musculoesquelético de manera integral — no solo el sitio del dolor — para llegar a la raíz del problema y lograr una recuperación real y duradera.",
        "El Dr. Foss utiliza la **Técnica Sacro-Occipital (SOT)** para evaluar y corregir los desequilibrios biomecánicos que generan tanto lesiones agudas como patrones crónicos de sobreuso. Cuando la pelvis y la columna están bien alineadas, las extremidades trabajan de manera más eficiente y el riesgo de lesiones se reduce significativamente.",
        "Las **terapias complementarias** disponibles en Pura Vida Chiropractic son especialmente valiosas para los atletas. La terapia SoftWave activa las células madre y factores de crecimiento para acelerar la reparación tisular. La terapia láser Clase IV reduce la inflamación y acelera la recuperación muscular. La terapia de ondas de choque descompone las calcificaciones y libera los puntos gatillo en tendones y músculos crónicamente sobrecargados.",
        "Muchos atletas también buscan el cuidado quiropráctico **no solo para lesiones sino para optimizar el rendimiento**. Un cuerpo bien alineado transmite la fuerza de manera más eficiente, tiene mejor coordinación neuromuscular y se recupera más rápido entre entrenamientos. La quiropráctica deportiva preventiva puede ser la ventaja competitiva que marca la diferencia.",
      ]
    : [
        "Chiropractic care has received significant attention for its **successful management of sports injuries**. Whether you are a weekend warrior, a student athlete, or a professional competitor, sports chiropractic care at Pura Vida Chiropractic helps you recover faster, perform better, and prevent future injuries.",
        "Dr. Foss treats a full range of sports-related conditions including sprains and strains, **shoulder injuries** (rotator cuff, AC joint), knee pain, hip issues, ankle injuries, plantar fasciitis, tendinopathies, and spinal conditions from athletic impact.",
        "Sports chiropractic care addresses the musculoskeletal system comprehensively — not just the site of pain — so you get to the root of the problem and achieve real, lasting recovery.",
        "Dr. Foss uses the **Sacro-Occipital Technique (SOT)** to evaluate and correct the biomechanical imbalances that drive both acute injuries and chronic overuse patterns. When the pelvis and spine are properly aligned, the extremities function more efficiently and injury risk decreases significantly.",
        "The **complementary therapies** available at Pura Vida Chiropractic are especially valuable for athletes. SoftWave therapy activates stem cells and growth factors to accelerate tissue repair. Class IV laser therapy reduces inflammation and speeds muscle recovery. Shockwave therapy breaks up calcifications and releases trigger points in chronically overloaded tendons and muscles.",
        "Many athletes also seek chiropractic care **not just for injuries but for performance optimization**. A well-aligned body transmits force more efficiently, has better neuromuscular coordination, and recovers faster between training sessions. Preventive sports chiropractic can be the competitive edge that makes a real difference.",
      ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": isEs ? "Quiropráctica Deportiva" : "Sports Chiropractic",
    "procedureType": "Chiropractic",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pura Vida Chiropractic",
      "url": BASE_URL,
      "telephone": "+12106851994",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2318 NW Military Hwy #103",
        "addressLocality": "San Antonio",
        "addressRegion": "TX",
        "postalCode": "78231",
        "addressCountry": "US",
      },
    },
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/sports-chiropractic" />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <div className={styles.container}>
          <h1 className={styles.h1}>{h1}</h1>

          <div className={styles.heroWrap}>
            <Image
              src="/images/dr-foss-examining-neck.webp"
              alt={h1}
              width={780}
              height={420}
              priority
              className={styles.heroImg}
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>

          <div className={styles.body}>
            {body.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              }} />
            ))}
          </div>

          <div className={styles.ctaBox}>
            <p>{isEs
              ? "¿Listo para recuperarse más rápido y rendir al máximo? El Dr. Dan Foss está aquí para ayudarle."
              : "Ready to recover faster and perform at your best? Dr. Dan Foss is here to help."
            }</p>
            <a
              href={`/${locale}/book-now`}
              className={styles.ctaBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
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
