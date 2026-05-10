import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface Props { params: Promise<{ locale: string }> }

// Spanish-only page — captures the high-volume Spanish definition cluster:
//   que es un quiropractico (390 vol, KD 15)
//   quiropractico (720 vol, KD 13)
//   quiropractico que es (260 vol, KD 0)
//   que hace un quiropractico (210 vol, KD 10)
//   quiropractica para que sirve (140 vol, KD 11)
//   que es un quiropractico y que hace (140 vol, KD 14)
// Total addressable monthly searches: ~1,860.
//
// /en/que-es-un-quiropractico 301-redirects to /es/ (next.config.mjs).
export async function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `${BASE_URL}/${locale}/que-es-un-quiropractico`;
  return {
    title: "¿Qué es un Quiropráctico y Qué Hace? Guía Completa 2026 (En Español)",
    description:
      "Quiropráctico vs huesero, vs masajista, vs fisioterapeuta — ¿cuál es la diferencia? Esta guía completa explica qué hace un quiropráctico, formación universitaria, técnicas como SOT, costos típicos y cuándo (y cuándo NO) acudir. Por el Dr. Dan Foss, San Antonio TX.",
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/es/que-es-un-quiropractico`,
        "x-default": `${BASE_URL}/es/que-es-un-quiropractico`,
      },
    },
    openGraph: {
      title: "¿Qué es un Quiropráctico? Guía Completa",
      description: "Definición, formación, técnicas, beneficios y costos de la quiropráctica. Pura Vida Chiropractic San Antonio.",
      url: canonical,
      locale: "es_MX",
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

const tableOfContents = [
  { id: "definicion", label: "¿Qué es un quiropráctico?" },
  { id: "que-hace", label: "¿Qué hace un quiropráctico?" },
  { id: "para-que-sirve", label: "¿Para qué sirve la quiropráctica?" },
  { id: "formacion", label: "Formación de un quiropráctico" },
  { id: "tecnicas", label: "Técnicas quiroprácticas comunes" },
  { id: "beneficios", label: "Beneficios comprobados" },
  { id: "riesgos", label: "Riesgos y seguridad" },
  { id: "diferencias", label: "Diferencias con otros profesionales" },
  { id: "cuanto-cuesta", label: "¿Cuánto cuesta?" },
  { id: "cuando-ir", label: "¿Cuándo debo ir al quiropráctico?" },
  { id: "primera-visita", label: "Qué esperar en la primera visita" },
  { id: "san-antonio", label: "Quiropráctico en San Antonio" },
];

const faqs = [
  {
    q: "¿Qué es un quiropráctico?",
    a: "Un quiropráctico es un profesional de la salud con título de Doctor en Quiropráctica (DC) que se especializa en el diagnóstico, tratamiento y prevención de trastornos del sistema neuromusculoesquelético — particularmente de la columna vertebral y las articulaciones — y los efectos que estos trastornos tienen en la salud general. Los quiroprácticos usan técnicas manuales (ajustes), terapias complementarias y ejercicios para restaurar la función óptima del cuerpo.",
  },
  {
    q: "¿Qué hace un quiropráctico exactamente?",
    a: "Un quiropráctico evalúa, diagnostica y trata problemas de columna vertebral y articulaciones. La técnica principal es el ajuste quiropráctico — una manipulación específica de baja amplitud y alta velocidad de una articulación para restaurar movimiento y función. También usan masaje terapéutico, terapia con láser, ultrasonido, terapia de descompresión espinal, y prescriben ejercicios correctivos. Pueden tratar dolor de espalda, cuello, dolores de cabeza, ciática, lesiones deportivas, problemas de embarazo y muchas otras condiciones.",
  },
  {
    q: "¿Para qué sirve la quiropráctica?",
    a: "La quiropráctica sirve principalmente para tratar dolor musculoesquelético (espalda, cuello, articulaciones), dolores de cabeza tensionales y migrañas, ciática, lesiones de auto, dolor durante el embarazo, problemas posturales, lesiones deportivas, y problemas pediátricos como cólicos infantiles y torticolis. También se usa preventivamente para mantener la salud de la columna vertebral.",
  },
  {
    q: "¿Cuántos años de estudios tiene un quiropráctico?",
    a: "Un quiropráctico en Estados Unidos completa aproximadamente 8 años de educación universitaria: 4 años de pregrado en ciencias y 4 años de Doctor en Quiropráctica (DC) en una escuela acreditada. El programa de DC incluye más de 4,200 horas de instrucción en anatomía, fisiología, neurología, biomecánica, técnicas de ajuste, diagnóstico clínico, radiología y ética profesional.",
  },
  {
    q: "¿Es seguro ir al quiropráctico?",
    a: "Sí, la atención quiropráctica está bien documentada como segura cuando la realiza un profesional licenciado. Los efectos secundarios graves son extremadamente raros. Los efectos secundarios menores como dolor leve después del primer ajuste son comunes y temporales (24-48 horas). Los quiroprácticos están entrenados para identificar contraindicaciones y referir a otros especialistas cuando es apropiado.",
  },
  {
    q: "¿Cuál es la diferencia entre un quiropráctico y un fisioterapeuta?",
    a: "Un quiropráctico se especializa en el diagnóstico y tratamiento de trastornos del sistema neuromusculoesquelético, con énfasis en la columna vertebral y los ajustes manuales. Un fisioterapeuta se enfoca en la rehabilitación funcional y el ejercicio terapéutico. Ambos pueden tratar dolor de espalda, pero usan enfoques diferentes. Muchos pacientes se benefician de trabajar con ambos profesionales.",
  },
  {
    q: "¿Cuál es la diferencia entre un quiropráctico y un osteópata?",
    a: "Un osteópata (DO) es un médico completo con licencia para prescribir medicamentos y realizar cirugías, además de manipulación osteopática manual. Un quiropráctico (DC) se especializa específicamente en el sistema neuromusculoesquelético sin prescribir medicamentos. Los osteópatas pasan por la escuela de medicina; los quiroprácticos pasan por una escuela de quiropráctica. Ambos pueden tratar dolor con técnicas manuales.",
  },
  {
    q: "¿Cuánto cuesta una visita al quiropráctico?",
    a: "El costo varía según la región y el tipo de visita. En Estados Unidos, una primera evaluación generalmente cuesta entre $50 y $200, y las visitas de seguimiento entre $30 y $80. La mayoría de los seguros médicos cubren cierta atención quiropráctica. En Pura Vida Chiropractic en San Antonio, ofrecemos primera evaluación gratis para nuevos pacientes.",
  },
  {
    q: "¿Cuándo debo ver a un quiropráctico?",
    a: "Considere ver a un quiropráctico si tiene: dolor de espalda o cuello persistente, dolores de cabeza recurrentes o migrañas, ciática o dolor irradiado en la pierna, dolor articular crónico, lesión de accidente de auto o deportiva, dolor durante el embarazo, o si simplemente quiere mejorar su movilidad y postura. No es necesario tener dolor severo para beneficiarse — la atención preventiva también es común.",
  },
  {
    q: "¿El ajuste quiropráctico duele?",
    a: "No, el ajuste quiropráctico no debe ser doloroso. La mayoría de los pacientes describen una sensación de alivio inmediato. El sonido de 'crujido' que a veces se escucha es la liberación de gas en la articulación, no es hueso quebrándose. Algunos pacientes pueden sentir dolor leve durante 24-48 horas después del primer ajuste, similar a después del ejercicio.",
  },
  {
    q: "¿Cuántas sesiones voy a necesitar?",
    a: "Depende completamente de su condición. Algunos pacientes mejoran significativamente en 3-6 visitas. Casos más complejos o crónicos pueden requerir un plan de tratamiento de 8-12 semanas. Su quiropráctico debe darle un plan claro y honesto en su primera evaluación. Desconfíe de quiroprácticos que insisten en compromisos largos sin justificación clara.",
  },
  {
    q: "¿Mi seguro cubre la quiropráctica?",
    a: "Muchos planes de seguros médicos en Estados Unidos cubren cierta atención quiropráctica. La cobertura específica varía por plan. En Pura Vida Chiropractic somos insurance friendly — traiga su tarjeta de seguro y identificación a la oficina y verificaremos cómo su seguro puede contribuir a su cuidado.",
  },
];

export default async function QueEsUnQuiropracticoPage({ params }: Props) {
  const { locale } = await params;
  const canonical = `${BASE_URL}/${locale}/que-es-un-quiropractico`;

  // Article schema for the educational pillar — Google rewards definition pages with article markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es un Quiropráctico? Guía Completa",
    description:
      "Definición completa de qué es un quiropráctico, qué hace, formación, técnicas, beneficios, riesgos y cuándo ver uno.",
    image: `${BASE_URL}/images/dr-foss-adjusting-patient.webp`,
    url: canonical,
    datePublished: "2026-05-01T09:00:00-05:00",
    dateModified: "2026-05-02T09:00:00-05:00",
    inLanguage: "es",
    author: {
      "@type": "Person",
      name: "Dr. Dan Foss, DC",
      url: `${BASE_URL}/${locale}/meet-dr-foss`,
    },
    publisher: {
      "@type": "Organization",
      name: "Pura Vida Chiropractic",
      url: BASE_URL,
    },
  };

  // FAQPage schema — every Q&A is in Spanish
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "¿Qué es un Quiropráctico?", item: canonical },
    ],
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/que-es-un-quiropractico" />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Guía Completa · Pura Vida Chiropractic San Antonio</p>
            <h1 className={styles.heroTitle}>¿Qué es un Quiropráctico? Guía Completa</h1>
            <p className={styles.heroSub}>
              Una guía completa y honesta sobre qué es un quiropráctico, qué hace, qué técnicas usa, cuáles son los beneficios y riesgos, cuánto cuesta, y cuándo deberías considerar verlo. Escrito por el Dr. Dan Foss, DC con más de 23 años de experiencia clínica.
            </p>
          </div>
        </section>

        <div className={styles.container}>
          {/* TOC */}
          <aside className={styles.toc}>
            <h2 className={styles.tocTitle}>Tabla de Contenidos</h2>
            <ol className={styles.tocList}>
              {tableOfContents.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className={styles.article}>
            <section id="definicion" className={styles.section}>
              <h2 className={styles.h2}>¿Qué es un quiropráctico?</h2>
              <p className={styles.p}>
                Un <strong>quiropráctico</strong> es un profesional de la salud con título de Doctor en Quiropráctica (DC) que se especializa en el diagnóstico, tratamiento y prevención de trastornos del sistema neuromusculoesquelético, con énfasis particular en la columna vertebral. Los quiroprácticos usan técnicas manuales (conocidas como ajustes), junto con terapias complementarias, ejercicios y consejos sobre el estilo de vida, para ayudar al cuerpo a funcionar de forma óptima sin medicamentos ni cirugía.
              </p>
              <p className={styles.p}>
                La palabra "quiropráctica" viene del griego <em>cheir</em> (mano) y <em>praxis</em> (acción) — literalmente "hecho con las manos". La profesión fue fundada en 1895 en Iowa por Daniel David Palmer y hoy está reconocida y regulada en más de 90 países alrededor del mundo.
              </p>
              <p className={styles.p}>
                En Estados Unidos, los quiroprácticos están licenciados por cada estado individual, con requisitos estrictos de educación continua y mantenimiento de licencia. En Texas, los quiroprácticos están regulados por la Junta de Examinadores Quiroprácticos de Texas (Texas Board of Chiropractic Examiners).
              </p>
            </section>

            <section id="que-hace" className={styles.section}>
              <h2 className={styles.h2}>¿Qué hace un quiropráctico?</h2>
              <p className={styles.p}>
                Un quiropráctico hace mucho más que "tronar espaldas". El trabajo típico de un quiropráctico incluye:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Evaluación clínica completa:</strong> historia médica, examen físico, análisis postural, y a veces rayos X cuando es necesario.</li>
                <li><strong>Diagnóstico:</strong> identificar la causa raíz del dolor o disfunción, no solo los síntomas.</li>
                <li><strong>Ajustes quiroprácticos:</strong> manipulaciones específicas de baja amplitud y alta velocidad para restaurar movimiento articular.</li>
                <li><strong>Técnicas de tejido blando:</strong> masaje terapéutico, liberación miofascial, terapia de puntos gatillo.</li>
                <li><strong>Modalidades:</strong> terapia con láser Clase IV, ultrasonido, terapia de ondas de choque (SoftWave), descompresión espinal.</li>
                <li><strong>Rehabilitación:</strong> ejercicios correctivos, estiramientos, fortalecimiento del core.</li>
                <li><strong>Educación al paciente:</strong> ergonomía, postura, hábitos de sueño, manejo del estrés.</li>
                <li><strong>Coordinación con otros profesionales:</strong> referir a fisioterapeutas, ortopedistas, neurólogos cuando es necesario.</li>
              </ul>
            </section>

            <section id="para-que-sirve" className={styles.section}>
              <h2 className={styles.h2}>¿Para qué sirve la quiropráctica?</h2>
              <p className={styles.p}>
                La quiropráctica es efectiva para una amplia gama de condiciones, incluyendo:
              </p>
              <div className={styles.conditionGrid}>
                <div className={styles.conditionGroup}>
                  <h3>Dolor musculoesquelético</h3>
                  <ul>
                    <li>Dolor de espalda baja</li>
                    <li>Dolor de cuello</li>
                    <li>Dolor entre los hombros</li>
                    <li>Dolor de cadera y articulación SI</li>
                    <li>Dolor de rodilla y hombro</li>
                  </ul>
                </div>
                <div className={styles.conditionGroup}>
                  <h3>Dolores de cabeza</h3>
                  <ul>
                    <li>Cefaleas tensionales</li>
                    <li>Migrañas</li>
                    <li>Cefaleas cervicogénicas</li>
                    <li>Cefaleas en racimo</li>
                  </ul>
                </div>
                <div className={styles.conditionGroup}>
                  <h3>Lesiones</h3>
                  <ul>
                    <li>Lesiones de accidentes de auto</li>
                    <li>Latigazo cervical (whiplash)</li>
                    <li>Lesiones deportivas</li>
                    <li>Lesiones laborales</li>
                  </ul>
                </div>
                <div className={styles.conditionGroup}>
                  <h3>Embarazo y postparto</h3>
                  <ul>
                    <li>Dolor lumbar de embarazo</li>
                    <li>Dolor de pelvis</li>
                    <li>Recuperación postparto</li>
                    <li>Posición fetal (técnica Webster)</li>
                  </ul>
                </div>
                <div className={styles.conditionGroup}>
                  <h3>Pediátrica</h3>
                  <ul>
                    <li>Cólicos infantiles</li>
                    <li>Torticolis</li>
                    <li>Problemas de lactancia</li>
                    <li>TDAH y problemas de concentración</li>
                  </ul>
                </div>
                <div className={styles.conditionGroup}>
                  <h3>Otras</h3>
                  <ul>
                    <li>Ciática</li>
                    <li>Hernia de disco</li>
                    <li>Vértigo (BPPV)</li>
                    <li>ATM (mandíbula)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="formacion" className={styles.section}>
              <h2 className={styles.h2}>Formación de un quiropráctico</h2>
              <p className={styles.p}>
                Convertirse en quiropráctico en Estados Unidos requiere aproximadamente 8 años de educación universitaria:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>4 años de pregrado universitario</strong> con énfasis en ciencias (biología, química, física, anatomía).</li>
                <li><strong>4 años de programa de Doctor en Quiropráctica (DC)</strong> en una escuela acreditada por el Council on Chiropractic Education (CCE) — más de 4,200 horas de instrucción.</li>
                <li><strong>Cuatro exámenes nacionales</strong> de la National Board of Chiropractic Examiners (NBCE).</li>
                <li><strong>Examen de licencia estatal</strong> en cada estado donde practiquen.</li>
                <li><strong>Educación continua anual</strong> para mantener la licencia activa.</li>
              </ul>
              <p className={styles.p}>
                Muchos quiroprácticos también obtienen <strong>certificaciones avanzadas</strong> en áreas especializadas como técnica SOT (Sacro-Occipital Technique), técnica Webster para cuidado prenatal, quiropráctica pediátrica, quiropráctica deportiva, neurología quiropráctica, o radiología quiropráctica. El Dr. Dan Foss, DC en Pura Vida Chiropractic tiene la rara certificación SOT Avanzada del SORSI.
              </p>
            </section>

            <section id="tecnicas" className={styles.section}>
              <h2 className={styles.h2}>Técnicas quiroprácticas comunes</h2>
              <p className={styles.p}>
                Hay más de 100 técnicas quiroprácticas reconocidas. Las más comunes incluyen:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Diversificada:</strong> la técnica más común, ajustes manuales con audible "tronido".</li>
                <li><strong>SOT (Sacro-Occipital Technique):</strong> aborda el sacro y el cráneo como un sistema conectado, usa bloques en lugar de manipulación rápida.</li>
                <li><strong>Activador:</strong> instrumento de baja fuerza, ideal para pacientes sensibles, ancianos, embarazadas y bebés.</li>
                <li><strong>Gonstead:</strong> análisis muy específico con énfasis en rayos X y palpación.</li>
                <li><strong>Thompson Drop:</strong> usa una mesa especial con segmentos que "caen" durante el ajuste.</li>
                <li><strong>Webster:</strong> técnica especializada para cuidado prenatal y posición fetal.</li>
                <li><strong>Cox Flexión-Distracción:</strong> técnica suave para hernia de disco y estenosis.</li>
                <li><strong>Quiropráctica pediátrica:</strong> técnicas extremadamente suaves usando solo la presión de un dedo para bebés.</li>
              </ul>
            </section>

            <section id="beneficios" className={styles.section}>
              <h2 className={styles.h2}>Beneficios comprobados de la quiropráctica</h2>
              <p className={styles.p}>
                La investigación científica respalda múltiples beneficios de la quiropráctica:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Alivio de dolor de espalda y cuello</strong> — guías clínicas la recomiendan como tratamiento de primera línea.</li>
                <li><strong>Reducción de dolores de cabeza</strong> — particularmente cefaleas tensionales y cervicogénicas.</li>
                <li><strong>Mejora de movilidad articular</strong> — restaura rango de movimiento.</li>
                <li><strong>Reducción del uso de medicamentos</strong> — alternativa no farmacéutica para dolor crónico.</li>
                <li><strong>Mejor postura</strong> — corrige patrones de postura adelantada y tech neck.</li>
                <li><strong>Recuperación más rápida de lesiones deportivas</strong> — menor tiempo fuera del juego.</li>
                <li><strong>Embarazo más cómodo</strong> — técnica Webster reduce dolor pélvico y mejora alineación.</li>
                <li><strong>Atención preventiva</strong> — mantiene la columna saludable a largo plazo.</li>
              </ul>
            </section>

            <section id="riesgos" className={styles.section}>
              <h2 className={styles.h2}>Riesgos y seguridad</h2>
              <p className={styles.p}>
                La quiropráctica es notablemente segura cuando la realiza un profesional licenciado. Los efectos secundarios son generalmente leves y temporales:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Comunes (1 de cada 3 pacientes):</strong> dolor leve, rigidez o fatiga durante 24-48 horas después del primer ajuste — similar al ejercicio.</li>
                <li><strong>Raros:</strong> dolor de cabeza temporal, mareos leves.</li>
                <li><strong>Extremadamente raros:</strong> complicaciones serias como disección arterial. La incidencia se estima en menos de 1 en 5.85 millones de manipulaciones cervicales (estudio de Cassidy et al, 2008).</li>
              </ul>
              <p className={styles.p}>
                Los quiroprácticos están entrenados para identificar contraindicaciones (osteoporosis severa, fractura reciente, ciertas patologías) y referir a otros especialistas cuando es apropiado. Una buena clínica siempre revisará su historial médico antes del tratamiento.
              </p>
            </section>

            <section id="diferencias" className={styles.section}>
              <h2 className={styles.h2}>Diferencias con otros profesionales</h2>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Profesional</th>
                    <th>Enfoque principal</th>
                    <th>Puede prescribir medicamentos</th>
                    <th>Puede operar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Quiropráctico (DC)</strong></td>
                    <td>Sistema neuromusculoesquelético, ajustes manuales</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Fisioterapeuta (PT, DPT)</strong></td>
                    <td>Rehabilitación funcional, ejercicio terapéutico</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Osteópata (DO)</strong></td>
                    <td>Médico completo + manipulación osteopática</td>
                    <td>Sí</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td><strong>Ortopedista (MD)</strong></td>
                    <td>Cirugía ortopédica, problemas musculoesqueléticos severos</td>
                    <td>Sí</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td><strong>Masajista (LMT)</strong></td>
                    <td>Manipulación de tejido blando, relajación muscular</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.p}>
                Estos profesionales no son mutuamente excluyentes — muchos pacientes se benefician de trabajar con varios al mismo tiempo. Por ejemplo, es común combinar quiropráctica con fisioterapia o masaje.
              </p>
            </section>

            <section id="cuanto-cuesta" className={styles.section}>
              <h2 className={styles.h2}>¿Cuánto cuesta un quiropráctico?</h2>
              <p className={styles.p}>
                El costo de la quiropráctica varía según la región, el tipo de visita y si tiene seguro:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Primera evaluación:</strong> $50–$200 en la mayoría de las clínicas. Algunas clínicas (incluyendo Pura Vida Chiropractic) ofrecen primera evaluación gratis.</li>
                <li><strong>Visita de seguimiento:</strong> $30–$80.</li>
                <li><strong>Modalidades adicionales</strong> (láser, descompresión, SoftWave): $20–$100 por sesión.</li>
                <li><strong>Plan de tratamiento típico</strong> (8-12 visitas): $300–$1,200 según complejidad.</li>
              </ul>
              <p className={styles.p}>
                <strong>Muchos planes de seguros médicos en Estados Unidos cubren cierta atención quiropráctica.</strong> La cobertura específica varía por plan. En Pura Vida Chiropractic somos insurance friendly — traiga su tarjeta de seguro y identificación a la oficina y verificaremos cómo su seguro puede contribuir a su cuidado.
              </p>
            </section>

            <section id="cuando-ir" className={styles.section}>
              <h2 className={styles.h2}>¿Cuándo debo ir al quiropráctico?</h2>
              <p className={styles.p}>
                Considere ver a un quiropráctico si tiene:
              </p>
              <ul className={styles.bulletList}>
                <li>Dolor de espalda o cuello que persiste más de una semana</li>
                <li>Dolores de cabeza recurrentes o migrañas</li>
                <li>Ciática o dolor irradiado en la pierna o brazo</li>
                <li>Lesión reciente de accidente de auto o deporte</li>
                <li>Dolor durante el embarazo</li>
                <li>Su bebé tiene cólicos, torticolis o problemas de lactancia</li>
                <li>Vértigo o mareos</li>
                <li>Dolor de mandíbula (ATM)</li>
                <li>Postura adelantada o "tech neck"</li>
                <li>Quiere atención preventiva para mantener la salud de su columna</li>
              </ul>
              <p className={styles.p}>
                <strong>Busque atención médica de emergencia inmediatamente</strong> si tiene dolor severo después de un trauma significativo, pérdida de control de vejiga o intestino, debilidad progresiva, o entumecimiento en el área genital — estos son signos de una emergencia médica, no una visita de quiropráctica de rutina.
              </p>
            </section>

            <section id="primera-visita" className={styles.section}>
              <h2 className={styles.h2}>Qué esperar en la primera visita</h2>
              <p className={styles.p}>
                Una primera visita típica al quiropráctico incluye:
              </p>
              <ol className={styles.bulletList}>
                <li><strong>Historia clínica detallada</strong> (15-20 minutos): preguntas sobre su dolor, lesiones previas, medicamentos, estilo de vida.</li>
                <li><strong>Examen físico</strong>: análisis postural, rango de movimiento, palpación, pruebas neurológicas y ortopédicas.</li>
                <li><strong>Rayos X u otras imágenes</strong>: solo si es médicamente necesario, no de rutina.</li>
                <li><strong>Diagnóstico y plan de tratamiento</strong>: explicación clara de qué encontró el quiropráctico y qué recomienda.</li>
                <li><strong>Primer ajuste</strong> (a veces): si es apropiado, puede recibir su primer tratamiento el mismo día.</li>
                <li><strong>Discusión de costos y cobertura de seguro</strong>: transparencia desde el inicio.</li>
              </ol>
              <p className={styles.p}>
                <strong>Una buena primera visita dura 45-60 minutos.</strong> Desconfíe de clínicas que apuran su primera visita o que no le dan tiempo para hacer preguntas.
              </p>
            </section>

            <section id="san-antonio" className={styles.section}>
              <h2 className={styles.h2}>Quiropráctico en San Antonio: Pura Vida Chiropractic</h2>
              <p className={styles.p}>
                Si está buscando un quiropráctico en San Antonio, TX, <strong>Pura Vida Chiropractic</strong> es la práctica bilingüe del Dr. Dan Foss, DC — con más de 23 años de experiencia, certificación SOT Avanzada (rara en San Antonio), y atención completamente en español e inglés.
              </p>
              <p className={styles.p}>
                Atendemos a familias hispanas en todo San Antonio: Stone Oak, Castle Hills, Alamo Heights, Helotes, Olmos Park, South San Antonio, West San Antonio, East San Antonio, Marbach, Boerne, Schertz y Cibolo. Nuestra oficina está en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231 — fácil de alcanzar desde cualquier vecindario del área metropolitana.
              </p>
              <p className={styles.p}>
                <strong>Su primera evaluación es gratis.</strong> Llame al (210) 685-1994 o reserve en línea en puravidasanantonio.com/special. Atención bilingüe garantizada.
              </p>
              <div className={styles.ctaInline}>
                <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                  Reservar Evaluación Gratuita
                </a>
                <a href="tel:+12106851994" className={styles.ctaPhone}>📞 (210) 685-1994</a>
              </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
              <h2 className={styles.h2}>Preguntas Frecuentes</h2>
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
                <Link href={`/${locale}/el-mejor-quiropractico-san-antonio`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span>El Mejor Quiropráctico en San Antonio</span>
                </Link>
                <Link href={`/${locale}/quiropratico-san-antonio`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span>Servicios de Quiropráctica</span>
                </Link>
                <Link href={`/${locale}/conditions`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span>Las 90+ Condiciones que Tratamos</span>
                </Link>
                <Link href={`/${locale}/meet-dr-foss`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span>Conocer al Dr. Foss</span>
                </Link>
                <Link href={`/${locale}/new-patient`} className={styles.linkCard}>
                  <span className={styles.linkArrow}>→</span>
                  <span>Información para Nuevos Pacientes</span>
                </Link>
              </div>
            </section>
          </article>

          {/* Final CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>¿Listo para Conocer un Quiropráctico Bilingüe en San Antonio?</h2>
            <p className={styles.ctaSub}>
              Reserve su evaluación gratuita con el Dr. Dan Foss, DC. Sin compromiso. Atención completamente en español. 23+ años de experiencia.
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                Reservar Evaluación Gratuita
              </a>
              <a href="tel:+12106851994" className={styles.ctaPhone}>📞 (210) 685-1994</a>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
