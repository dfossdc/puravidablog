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
  const canonical = `${BASE_URL}/${locale}/mission`;
  return {
    title: isEs
      ? "Misiones Médicas | Pura Vida Chiropractic San Antonio"
      : "Mission Trips | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "El Dr. Dan Foss lleva cuidado quiropráctico a comunidades desatendidas en Costa Rica, Guatemala, España e Irlanda a través de misiones internacionales."
      : "Dr. Dan Foss brings chiropractic care to underserved communities in Costa Rica, Guatemala, Spain, and Ireland through international mission trips.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/mission`,
        es: `${BASE_URL}/es/mission`,
        "x-default": `${BASE_URL}/en/mission`,
      },
    },
    openGraph: {
      title: isEs ? "Misiones Médicas | Pura Vida Chiropractic" : "Mission Trips | Pura Vida Chiropractic",
      description: isEs
        ? "Cuidado quiropráctico internacional en Costa Rica, Guatemala, España, Irlanda y los Países Bajos."
        : "International chiropractic care in Costa Rica, Guatemala, Spain, Ireland, and the Netherlands.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function MissionPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const h1 = isEs ? "Misiones Médicas" : "Mission Trips";
  const ctaText = isEs ? "Reservar Consulta Gratis" : "Book Free Consultation";

  const body = isEs
    ? [
        "El Dr. Dan Foss ha dedicado gran parte de su carrera no solo a atender a los pacientes de San Antonio sino también a llevar el cuidado quiropráctico a **comunidades desatendidas en todo el mundo**. A través de misiones internacionales, el Dr. Foss ha proporcionado cuidado quiropráctico en Costa Rica, Guatemala, España, Irlanda y los Países Bajos.",
        "Estas experiencias han moldeado profundamente su enfoque del cuidado del paciente y su creencia de que **todo el mundo merece acceso a quiropráctica de alta calidad** — independientemente de su ubicación geográfica o situación económica.",
        "En Costa Rica, el Dr. Foss estudió en la Universidad de Costa Rica y estableció vínculos duraderos con la comunidad local que inspiraron el nombre de su práctica: **Pura Vida**. Esta expresión costarricense — que significa literalmente «vida pura» pero que representa una filosofía de bienestar, gratitud y alegría de vivir — refleja exactamente el tipo de cuidado que el Dr. Foss se esfuerza por ofrecer a cada paciente.",
        "En Guatemala y otros destinos de misión, el Dr. Foss y su equipo han atendido a cientos de pacientes que de otro modo no habrían tenido acceso a atención quiropráctico. Estas experiencias refuerzan su convicción de que el cuidado compasivo y efectivo trasciende las fronteras culturales y geográficas.",
        "El Dr. Foss habla español con fluidez — un activo invaluable tanto en sus misiones internacionales como en su práctica en San Antonio, donde una parte significativa de sus pacientes son hispanohablantes. En Pura Vida Chiropractic, **todo el equipo es completamente bilingüe**.",
        "Su experiencia internacional le da una perspectiva única y sensibilidad cultural que beneficia a cada paciente que cruza las puertas de Pura Vida Chiropractic. Él entiende que la salud es un valor universal — y trata a cada persona con el mismo nivel de cuidado y atención, sin importar su origen.",
      ]
    : [
        "Dr. Dan Foss has dedicated much of his career not only to serving San Antonio patients but also to bringing chiropractic care to **underserved communities around the world**. Through international mission trips, Dr. Foss has provided chiropractic care in Costa Rica, Guatemala, Spain, Ireland, and the Netherlands.",
        "These experiences have deeply shaped his approach to patient care and his belief that **everyone deserves access to high-quality chiropractic** — regardless of geographic location or economic circumstance.",
        "In Costa Rica, Dr. Foss studied at the University of Costa Rica and formed lasting ties with the local community that inspired the name of his practice: **Pura Vida**. This Costa Rican expression — which literally means \"pure life\" but represents a philosophy of wellness, gratitude, and joy in living — reflects exactly the kind of care Dr. Foss strives to bring to every patient.",
        "In Guatemala and other mission destinations, Dr. Foss and his team have cared for hundreds of patients who otherwise would have had no access to chiropractic treatment. These experiences reinforce his conviction that compassionate, effective care transcends cultural and geographic boundaries.",
        "Dr. Foss is fully bilingual in English and Spanish — an invaluable asset both in his international missions and in his San Antonio practice, where a significant portion of his patients are Spanish speakers. At Pura Vida Chiropractic, the **entire team is fully bilingual**.",
        "His international background gives him a unique perspective and cultural sensitivity that benefits every patient who walks through the doors of Pura Vida Chiropractic. He understands that health is a universal value — and he treats every person with the same level of care and attention, regardless of their background.",
      ];

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/mission" />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>{h1}</h1>

          <div className={styles.heroWrap}>
            <Image
              src="/images/our-mission.jpg"
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

          <div style={{ margin: "2rem 0" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "720px" }}>
              <iframe
                src="https://www.youtube.com/embed/dC1qG3CAlaI"
                title={isEs ? "Misiones Médicas — Dr. Dan Foss Pura Vida Chiropractic" : "Mission Trips — Dr. Dan Foss Pura Vida Chiropractic"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <p>{isEs
              ? "¿Listo para experimentar el mismo nivel de cuidado compasivo que el Dr. Foss lleva por todo el mundo?"
              : "Ready to experience the same compassionate care Dr. Foss brings around the world?"
            }</p>
            <a
              href="/book-now"
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
