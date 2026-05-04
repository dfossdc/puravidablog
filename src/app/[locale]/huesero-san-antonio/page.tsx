import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

// Spanish-only page — culturally bridges the traditional Mexican folk-healer
// term "huesero" / "sobador" to modern licensed chiropractic care.
//
// Search context (Semrush US database):
//   huesero — KD 19, low difficulty
//   huesero near me — 90 vol, KD 27, CPC $3.69 (high commercial intent)
//   hueseros cerca de mi ubicacion — 90+ vol
//   sobador y huesero — related folk-healer cluster (48+ keywords)
//
// CULTURAL NOTES (important for tone):
//   - "Huesero" literally means "bone person" — the Mexican folk healer who
//     manipulates bones, joints, and soft tissue. Often informal, sometimes
//     unlicensed, deeply trusted in Mexican-American communities.
//   - "Sobador" is related — typically a folk masseur who works with sobadas
//     (massages) for empacho and other traditional concerns.
//   - This page must RESPECT the cultural term while EDUCATING that licensed
//     chiropractic care provides the same modality with proper training,
//     diagnostics, and safety protocols. Never disparage folk healers.
//
// /en/huesero-san-antonio 301-redirects to /es/ (next.config.mjs).
export async function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `${BASE_URL}/${locale}/huesero-san-antonio`;
  return {
    title: "Huesero San Antonio | Quiropráctico Bilingüe Licenciado",
    description:
      "¿Busca un huesero en San Antonio, TX? El Dr. Dan Foss, DC ofrece atención quiropráctica bilingüe y licenciada — la versión moderna y segura del huesero tradicional. Acomoda huesos, alivia dolor de espalda y cuello. Primera visita gratis. (210) 685-1994.",
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/es/huesero-san-antonio`,
        "x-default": `${BASE_URL}/es/huesero-san-antonio`,
      },
    },
    openGraph: {
      title: "Huesero en San Antonio TX | Quiropráctico Bilingüe",
      description: "El Dr. Dan Foss, DC — la versión moderna y licenciada del huesero. Atención bilingüe en San Antonio.",
      url: canonical,
      locale: "es_MX",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

const faqs = [
  {
    q: "¿Qué es un huesero?",
    a: "Un huesero es el nombre tradicional en español mexicano para una persona que ajusta o 'acomoda' huesos y articulaciones para aliviar dolor. Es una tradición de medicina popular muy respetada en la comunidad mexicana e hispana. Hoy en día, la práctica moderna y segura del huesero se llama quiropráctica — y en Estados Unidos requiere una licencia médica del estado. El Dr. Dan Foss, DC en Pura Vida Chiropractic ofrece esta atención con licencia completa del estado de Texas, certificación SOT Avanzada y más de 23 años de experiencia.",
  },
  {
    q: "¿Hay un huesero cerca de mí en San Antonio?",
    a: "Sí. Pura Vida Chiropractic en San Antonio (2318 NW Military Hwy, Suite 103) ofrece la versión moderna y licenciada del huesero — atención completamente en español, con técnicas modernas y seguras, respaldadas por evidencia científica. Atendemos pacientes hispanos de todo San Antonio, incluyendo el Westside, Marbach, South San Antonio, East San Antonio y suburbios cercanos. Llame al (210) 685-1994 o reserve una primera evaluación gratis.",
  },
  {
    q: "¿Cuál es la diferencia entre un huesero tradicional y un quiropráctico?",
    a: "Ambos comparten una idea fundamental: que ajustar huesos y articulaciones puede aliviar dolor y mejorar la función del cuerpo. Las diferencias principales son: (1) Educación — un quiropráctico completa 8 años de universidad y 4,200+ horas de formación clínica supervisada; un huesero tradicional aprende típicamente por aprendizaje informal. (2) Licencia — los quiroprácticos están licenciados por la Junta de Examinadores Quiroprácticos de Texas; los hueseros tradicionales no. (3) Diagnóstico — los quiroprácticos pueden ordenar rayos X, identificar contraindicaciones (osteoporosis, fractura, infección) y referir a otros especialistas. (4) Técnicas — los quiroprácticos modernos usan técnicas suaves y específicas (SOT, Activator, Diversificada) basadas en investigación.",
  },
  {
    q: "¿Es seguro ir a un huesero?",
    a: "Depende. Un quiropráctico licenciado (DC) es notablemente seguro — los efectos secundarios serios son extremadamente raros. Los hueseros tradicionales sin licencia médica pueden ser efectivos en muchos casos, pero existen riesgos serios cuando trabajan sin diagnóstico apropiado: pueden empeorar fracturas no diagnosticadas, hernias de disco, osteoporosis severa, o condiciones neurológicas. Para máxima seguridad, recomendamos buscar un quiropráctico licenciado que entienda y respete la tradición del huesero — como el Dr. Dan Foss, DC en Pura Vida Chiropractic.",
  },
  {
    q: "¿El Dr. Foss habla español?",
    a: "Sí. El Dr. Dan Foss, DC ha practicado en Costa Rica, España, Irlanda y los Países Bajos. Habla español con fluidez y todo el equipo de Pura Vida Chiropractic atiende a pacientes hispanos completamente en español — desde la primera llamada hasta cada visita de seguimiento. No necesita traductor. Le explicaremos cada paso del tratamiento en su idioma.",
  },
  {
    q: "¿Cuánto cuesta una visita con el huesero / quiropráctico?",
    a: "En Pura Vida Chiropractic, la primera evaluación es completamente gratis para nuevos pacientes. Las visitas de seguimiento varían según el plan de tratamiento. Somos insurance friendly. Traiga su tarjeta de seguro e identificación a la oficina y verificaremos cómo su seguro puede contribuir a su cuidado.",
  },
  {
    q: "¿Pueden los hueseros tratar bebés y niños?",
    a: "El Dr. Foss tiene amplia experiencia en quiropráctica pediátrica — desde recién nacidos hasta adolescentes. Los ajustes pediátricos son extremadamente suaves: usamos solo la presión de un dedo para bebés. Tratamos cólicos infantiles, torticolis, problemas de lactancia, reflujo, problemas de oído recurrentes, escoliosis adolescente y más. La atención pediátrica licenciada es mucho más segura que las técnicas de hueseros tradicionales sin formación pediátrica especializada.",
  },
  {
    q: "¿Qué condiciones puede tratar un huesero / quiropráctico?",
    a: "El Dr. Foss trata más de 90 condiciones, incluyendo: dolor de espalda baja, dolor de cuello, dolores de cabeza y migrañas, ciática, hernia de disco, escoliosis, lesiones de auto, problemas de embarazo y parto, cólicos infantiles, torticolis, vértigo (BPPV), ATM (problemas de mandíbula), TDAH, dolores de cabeza tensionales, y muchas más. Si tiene dolor o una condición que no encuentra en la lista, llámenos al (210) 685-1994 para una consulta gratuita.",
  },
];

export default async function HueseroSanAntonioPage({ params }: Props) {
  const { locale } = await params;
  const canonical = `${BASE_URL}/${locale}/huesero-san-antonio`;

  // Chiropractor schema with cultural alternateName covering huesero/sobador
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": canonical,
    name: "Pura Vida Chiropractic",
    alternateName: [
      "Huesero San Antonio",
      "Quiropráctico Pura Vida",
      "Pura Vida Quiropráctico",
      "El Huesero — Dr. Dan Foss DC",
    ],
    description:
      "Huesero en San Antonio TX — la versión moderna y licenciada del huesero tradicional. Atención quiropráctica bilingüe del Dr. Dan Foss, DC.",
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
      availableLanguage: ["Spanish", "English", "es", "en"],
    },
    knowsLanguage: ["es", "en"],
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Huesero en San Antonio", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/huesero-san-antonio" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              Pura Vida Chiropractic · 2318 NW Military Hwy · San Antonio TX 78231
            </p>
            <h1 className={styles.heroTitle}>Huesero en San Antonio, TX — Versión Moderna y Licenciada</h1>
            <p className={styles.heroSub}>
              El Dr. Dan Foss, DC es lo que muchos en la comunidad hispana llaman "el huesero" — pero con licencia médica del estado de Texas, certificación SOT Avanzada y más de 23 años de experiencia clínica. Atendemos pacientes hispanos de todo San Antonio en español, con técnicas modernas, seguras y respaldadas por evidencia científica. Su primera evaluación es gratis.
            </p>
            <div className={styles.heroActions}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                Reservar Evaluación Gratuita
              </a>
              <a href="tel:+12106851994" className={styles.heroPhone}>📞 (210) 685-1994</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>Bilingüe español/inglés</span>
              <span className={styles.badge}>Licenciado en Texas</span>
              <span className={styles.badge}>23+ años de experiencia</span>
              <span className={styles.badge}>4.9⭐ Google · 147+ reseñas</span>
              <span className={styles.badge}>Insurance friendly</span>
            </div>
          </div>
        </section>

        <div className={styles.container}>

          {/* Cultural respect intro */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Respetando la Tradición del Huesero</h2>
            <p className={styles.p}>
              El <strong>huesero</strong> — la persona que "acomoda los huesos" — es una figura profundamente respetada en la medicina tradicional mexicana. Por generaciones, las familias hispanas han confiado en el huesero para aliviar dolor de espalda, cuello, hombros y articulaciones, ajustando manualmente lo que está fuera de lugar. Esta tradición tiene raíces antiguas y representa un conocimiento popular valioso del cuerpo humano.
            </p>
            <p className={styles.p}>
              En Pura Vida Chiropractic, <strong>respetamos profundamente esta tradición</strong>. El Dr. Dan Foss, DC ofrece esencialmente la misma idea — ajustar huesos y articulaciones para aliviar dolor — pero usando la formación, las herramientas de diagnóstico, las técnicas modernas y las protecciones de seguridad de la quiropráctica licenciada moderna. Es lo mejor de ambos mundos: el conocimiento ancestral del huesero, modernizado y certificado para la máxima seguridad de su familia.
            </p>
          </section>

          {/* Comparison */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Huesero Tradicional vs. Quiropráctico Licenciado</h2>
            <p className={styles.p}>
              Ambos pueden ayudar con dolor — pero hay diferencias importantes en seguridad, formación y diagnóstico:
            </p>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th></th>
                  <th>Huesero Tradicional</th>
                  <th>Quiropráctico Licenciado (DC)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Formación</strong></td>
                  <td>Aprendizaje informal, generación a generación</td>
                  <td>8 años de universidad + 4,200 horas de formación clínica</td>
                </tr>
                <tr>
                  <td><strong>Licencia médica</strong></td>
                  <td>No</td>
                  <td>Sí — licencia activa del estado de Texas</td>
                </tr>
                <tr>
                  <td><strong>Diagnóstico</strong></td>
                  <td>Por palpación y experiencia</td>
                  <td>Examen físico completo + rayos X cuando sea necesario</td>
                </tr>
                <tr>
                  <td><strong>Identificación de riesgos</strong></td>
                  <td>Limitada</td>
                  <td>Entrenado para detectar fractura, hernia, osteoporosis, infección</td>
                </tr>
                <tr>
                  <td><strong>Técnicas modernas</strong></td>
                  <td>Manuales tradicionales</td>
                  <td>SOT, Activator, Diversificada + láser Clase IV, SoftWave</td>
                </tr>
                <tr>
                  <td><strong>Seguros médicos</strong></td>
                  <td>Generalmente no cubierto</td>
                  <td>Insurance friendly</td>
                </tr>
                <tr>
                  <td><strong>Pacientes pediátricos</strong></td>
                  <td>Sin formación pediátrica especializada</td>
                  <td>Formación específica en bebés, niños y adolescentes</td>
                </tr>
                <tr>
                  <td><strong>Pacientes embarazadas</strong></td>
                  <td>Sin protocolos prenatales certificados</td>
                  <td>Certificación Webster Technique para cuidado prenatal</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.p}>
              <strong>Conclusión:</strong> Si valora la tradición del huesero pero quiere la máxima seguridad para su familia — especialmente para bebés, niños, embarazadas o pacientes con condiciones médicas — un quiropráctico licenciado bilingüe es la mejor opción. El Dr. Foss respeta la tradición y la moderniza con licencia, diagnóstico y técnicas seguras.
            </p>
          </section>

          {/* Why patients trust us */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Por Qué la Comunidad Hispana de San Antonio Confía en el Dr. Foss</h2>
            <ul className={styles.checkList}>
              <li><span className={styles.checkMark}>✓</span><span>Atención completamente bilingüe — español desde la primera llamada hasta cada visita</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Más de 23 años de experiencia, incluyendo años practicando en Costa Rica, España e Irlanda</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Certificación SOT Avanzada — única en San Antonio, ideal para casos complejos</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Certificación Webster Technique para cuidado prenatal seguro</span></li>
              <li><span className={styles.checkMark}>✓</span><span>147+ reseñas de 5 estrellas en Google de pacientes reales de San Antonio</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Insurance friendly</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Primera evaluación completamente gratis — sin compromiso</span></li>
              <li><span className={styles.checkMark}>✓</span><span>Atendemos a familias del Westside, Marbach, South SA, East SA y suburbios</span></li>
            </ul>
          </section>

          {/* What we treat */}
          <section className={styles.section}>
            <h2 className={styles.h2}>¿Qué Tipo de Dolor Puede Aliviar el Huesero / Quiropráctico?</h2>
            <p className={styles.p}>
              Las condiciones más comunes que tratamos en pacientes hispanos en San Antonio:
            </p>
            <div className={styles.condGrid}>
              <div className={styles.condCard}>
                <h3>Dolor de espalda</h3>
                <p>Lumbago, dolor lumbar crónico, ciática, hernia de disco, dolor entre los omóplatos.</p>
              </div>
              <div className={styles.condCard}>
                <h3>Dolor de cuello</h3>
                <p>Cervicalgia, latigazo (whiplash), tortícolis, "cuello tecnológico" por uso de pantallas.</p>
              </div>
              <div className={styles.condCard}>
                <h3>Dolor de cabeza</h3>
                <p>Cefaleas tensionales, migrañas, cefaleas cervicogénicas, dolor sinusal.</p>
              </div>
              <div className={styles.condCard}>
                <h3>Embarazo y postparto</h3>
                <p>Dolor de pelvis, dolor lumbar de embarazo, recuperación postparto, posición fetal (técnica Webster).</p>
              </div>
              <div className={styles.condCard}>
                <h3>Bebés y niños</h3>
                <p>Cólicos, torticolis, problemas de lactancia, reflujo, oídos recurrentes, escoliosis adolescente.</p>
              </div>
              <div className={styles.condCard}>
                <h3>Lesiones de auto</h3>
                <p>Latigazo cervical, dolor lumbar post-accidente, hernia de disco. Insurance friendly.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Su Huesero Bilingüe en San Antonio le Espera</h2>
            <p className={styles.ctaSub}>
              Reserve su evaluación gratuita con el Dr. Dan Foss, DC. Sin compromiso. Atención completamente en español, con licencia médica del estado de Texas y respeto profundo por la tradición del huesero.
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                Reservar Evaluación Gratuita
              </a>
              <a href="tel:+12106851994" className={styles.ctaPhone}>📞 (210) 685-1994</a>
            </div>
          </div>

          {/* FAQ */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Preguntas Frecuentes sobre el Huesero</h2>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{f.q}</summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Más Información</h2>
            <div className={styles.linkGrid}>
              <Link href={`/${locale}/quiropractico-cerca-de-mi-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>Quiropráctico Cerca de Mí en San Antonio</span>
              </Link>
              <Link href={`/${locale}/que-es-un-quiropractico`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>¿Qué es un Quiropráctico? Guía Completa</span>
              </Link>
              <Link href={`/${locale}/el-mejor-quiropractico-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>El Mejor Quiropráctico en San Antonio</span>
              </Link>
              <Link href={`/${locale}/quiropratico-san-antonio`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>Servicios Quiroprácticos en San Antonio</span>
              </Link>
              <Link href={`/${locale}/west-san-antonio-chiropractor`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>Quiropráctico para West San Antonio</span>
              </Link>
              <Link href={`/${locale}/marbach-410-chiropractor`} className={styles.linkCard}>
                <span className={styles.linkArrow}>→</span>
                <span>Quiropráctico Marbach / Loop 410</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
