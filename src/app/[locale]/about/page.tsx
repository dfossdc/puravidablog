import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

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
  const canonical = `${BASE_URL}/${locale}/about`;
  return {
    title: isEs
      ? "Sobre el Dr. Dan Foss, DC | Pura Vida Chiropractic San Antonio"
      : "About Dr. Dan Foss, DC | Pura Vida Chiropractic San Antonio TX",
    description: isEs
      ? "Conozca al Dr. Dan Foss, DC — quiropráctico certificado SOT con más de 23 años de experiencia internacional, fundador de Pura Vida Chiropractic en San Antonio, TX. Bilingüe, especializado en SOT, pediatría y cuidado prenatal."
      : "Meet Dr. Dan Foss, DC — Advanced SOT-certified chiropractor with 23+ years of international clinical experience. Founder of Pura Vida Chiropractic in San Antonio, TX. Bilingual, pediatric and prenatal specialist.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/about`,
        es: `${BASE_URL}/es/about`,
        "x-default": `${BASE_URL}/en/about`,
      },
    },
    openGraph: {
      title: isEs
        ? "Dr. Dan Foss, DC | Pura Vida Chiropractic San Antonio"
        : "Dr. Dan Foss, DC | Pura Vida Chiropractic San Antonio TX",
      description: isEs
        ? "23+ años de experiencia quiropráctica internacional. Certificación Avanzada SOT. Bilingüe. San Antonio, TX."
        : "23+ years of international chiropractic experience. Advanced SOT Certification. Bilingual. San Antonio, TX.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "profile",
    },
  };
}

const credentials = {
  en: [
    "Doctor of Chiropractic (DC) — Western States Chiropractic College, Portland OR, 2003",
    "Advanced SOT® Certification — SORSI International",
    "Cranial Therapy & Organ Manipulation Certification",
    "Pediatric Chiropractic Certification",
    "Prenatal Chiropractic & Webster Technique Certification",
    "SORSI Board Member — served on the board of the Sacro-Occipital Research Society International",
    "International Instructor — teaches SOT advanced techniques internationally",
    "23+ Years of Clinical Experience across 3 continents",
    "International Practice: Costa Rica, Spain, Ireland, Netherlands, Guatemala",
    "Founder — Pura Vida Chiropractic, San Antonio TX, 2010",
    "Bilingual — English & Spanish (fluent)",
  ],
  es: [
    "Doctor en Quiropráctica (DC) — Western States Chiropractic College, Portland OR, 2003",
    "Certificación Avanzada SOT® — SORSI International",
    "Certificación en Terapia Craneal y Manipulación de Órganos",
    "Certificación en Quiropráctica Pediátrica",
    "Certificación Prenatal y Técnica Webster",
    "Miembro de la Junta Directiva de SORSI — Sacro-Occipital Research Society International",
    "Instructor Internacional — enseña técnicas avanzadas SOT a nivel mundial",
    "Más de 23 Años de Experiencia Clínica en 3 continentes",
    "Práctica Internacional: Costa Rica, España, Irlanda, Países Bajos, Guatemala",
    "Fundador — Pura Vida Chiropractic, San Antonio TX, 2010",
    "Bilingüe — Inglés y Español (fluido)",
  ],
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const originStory = isEs
    ? "De niño sufrí una condición llamada tortícolis. Estaba en 3er grado y al agacharme a recoger un lápiz, mi cuello quedó torcido hacia un lado. Mi maestra me envió a la enfermería escolar, quien llamó a mi mamá, quien me llevó al médico familiar. El doctor recetó Valium y Vicodina para un niño de tercer grado. Mi mamá, que no aprobaba esa medicación tan fuerte para un niño, salió y cruzó la calle a un quiropráctico. Después de un examen completo el quiropráctico dijo 'encontramos el problema.' Me acostó en la mesa y sentí un clic indoloro — y mi cuello se enderezó de inmediato. Desde ese día quise estudiar quiropráctica y ayudar a otros como me ayudaron a mí."
    : "As a child I suffered from a condition called torticollis. I was in 3rd grade and bent down to pick up a pencil and my neck got stuck to one side. My teacher sent me to the school nurse, who sent for my mom, who took me to our family doctor. The doctor prescribed Valium and Vicodin for a 3rd grader. My mom, who did not approve of such strong medicine for a child, walked out and across the street to a chiropractor. After a complete examination the chiropractor said 'we found the problem.' He laid me down on the table and I felt a painless snap and pop — and my neck straightened out immediately. From that day forward I wanted to study chiropractic and help others the way I was helped.";

  const philosophy = isEs
    ? "Mi misión es simple: Mejore su Salud. Mantenga su Salud. Creo que los síntomas son solo la punta del iceberg. El verdadero cuidado de la salud significa encontrar y corregir la causa subyacente — no enmascarar el dolor con medicamentos. A través del Protocolo Pura Vida, integro principios probados de quiropráctica, osteopatía, terapia manual, fisioterapia y modalidades energéticas para ayudar a cada paciente a lograr resultados reales y duraderos."
    : "My mission is simple: Get Healthy. Stay Healthy. I believe symptoms are only the tip of the iceberg. True health care means finding and correcting the underlying cause — not masking pain with drugs. Through the Pura Vida Protocol, I integrate proven principles from chiropractic, osteopathic, manual therapy, physical therapy, and energetic modalities to help every patient achieve real, lasting results.";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/about" />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            {isEs ? "Conozca al Dr. Dan Foss, DC" : "Meet Dr. Dan Foss, DC"}
          </h1>

          {/* Hero photo */}
          <div className={styles.heroPhoto}>
            <Image
              src="/images/sideposture.jpg"
              alt="Dr. Dan Foss performing chiropractic adjustment in San Antonio TX"
              width={1100}
              height={500}
              priority
              className={styles.heroImg}
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>

          {/* Stats strip */}
          <div className={styles.statsStrip}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>23+</div>
              <div className={styles.statLabel}>{isEs ? "Años de Experiencia Clínica" : "Years of Clinical Experience"}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>5</div>
              <div className={styles.statLabel}>{isEs ? "Países donde ha Ejercido" : "Countries Practiced In"}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>3</div>
              <div className={styles.statLabel}>{isEs ? "Continentes de Práctica" : "Continents of Practice"}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>2010</div>
              <div className={styles.statLabel}>{isEs ? "Fundó Pura Vida en San Antonio" : "Founded Pura Vida in San Antonio"}</div>
            </div>
          </div>

          {/* Two-column: story + credentials */}
          <div className={styles.twoCol}>
            <div className={styles.leftCol}>
              <section className={styles.section}>
                <h2 className={styles.h2}>
                  {isEs ? "Por Qué Me Convertí en Quiropráctico" : "Why I Became a Chiropractor"}
                </h2>
                <p className={styles.story}>{originStory}</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>
                  {isEs ? "Mi Filosofía" : "My Philosophy"}
                </h2>
                <blockquote className={styles.philosophy}>
                  {philosophy}
                </blockquote>
                <p className={styles.philosophyCite}>— Dr. Dan Foss, DC</p>
              </section>
            </div>

            <div className={styles.rightCol}>
              <section className={styles.credSection}>
                <h2 className={styles.h2}>
                  {isEs ? "Credenciales y Certificaciones" : "Credentials & Certifications"}
                </h2>
                <ul className={styles.credList}>
                  {credentials[isEs ? "es" : "en"].map((c, i) => (
                    <li key={i} className={styles.credItem}>
                      <span className={styles.credCheck}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              <div className={styles.sidePhoto}>
                <Image
                  src="/images/dr-foss-about-hp.webp"
                  alt="Dr. Dan Foss at Pura Vida Chiropractic San Antonio TX"
                  width={480}
                  height={540}
                  className={styles.sideImg}
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className={styles.bioSection}>
            <h2 className={styles.h2}>
              {isEs ? "Educación y Formación" : "Education & Training"}
            </h2>
            <p>
              {isEs
                ? "El Dr. Foss obtuvo su Doctorado en Quiropráctica en el Western States Chiropractic College en Portland, Oregón, en 2003. Western States es uno de los colegios de quiropráctica más prestigiosos del mundo, reconocido por su riguroso plan de estudios en ciencias básicas, diagnóstico y técnica clínica. Pero su educación no terminó ahí — desde que obtuvo su título, el Dr. Foss ha dedicado su carrera a estudiar con los maestros más avanzados de la quiropráctica, la medicina osteopática, la naturopatía y las terapias manuales en todo el mundo."
                : "Dr. Foss earned his Doctor of Chiropractic degree from Western States Chiropractic College in Portland, Oregon in 2003. Western States is one of the most prestigious chiropractic colleges in the world, recognized for its rigorous curriculum in basic sciences, diagnosis, and clinical technique. But his education didn't stop there — since earning his degree, Dr. Foss has dedicated his career to studying with the most advanced masters in chiropractic, osteopathic medicine, naturopathy, and manual therapies around the world."}
            </p>
            <p>
              {isEs
                ? "Obtuvo la Certificación Avanzada en SOT® a través de SORSI (Sacro-Occipital Research Society International) — el nivel más alto disponible en la Técnica Sacro-Occipital. Ha servido en la junta directiva de SORSI y enseña técnicas avanzadas de SOT a quiroprácticos a nivel internacional, formando a la próxima generación de practicantes. Su formación adicional incluye certificaciones en terapia craneal, manipulación de órganos, cuidado pediátrico y técnica Webster para embarazo."
                : "He earned Advanced Certification in SOT® through SORSI (Sacro-Occipital Research Society International) — the highest level available in Sacro-Occipital Technique. He has served on the SORSI board of directors and teaches advanced SOT techniques to chiropractors internationally, training the next generation of practitioners. His additional training includes certifications in cranial therapy, organ manipulation, pediatric care, and the Webster Technique for pregnancy."}
            </p>
          </div>

          {/* Specialties grid */}
          <div className={styles.specialtyGrid}>
            <div className={styles.specialtyCard}>
              <h3>{isEs ? "Técnica Sacro-Occipital (SOT)" : "Sacro-Occipital Technique (SOT)"}</h3>
              <p>
                {isEs
                  ? "La SOT es un sistema quiropráctico integral que aborda la columna vertebral, la pelvis y el ritmo cráneo-sacral como una unidad integrada. El Dr. Foss posee la Certificación Avanzada SOT — el nivel más alto de certificación disponible — y es uno de los pocos quiroprácticos en San Antonio con este nivel de formación especializada."
                  : "SOT is a comprehensive chiropractic system addressing the spine, pelvis, and craniosacral rhythm as one integrated unit. Dr. Foss holds Advanced SOT Certification — the highest level of certification available — and is one of the few chiropractors in San Antonio with this level of specialized training."}
              </p>
            </div>
            <div className={styles.specialtyCard}>
              <h3>{isEs ? "Quiropráctica Pediátrica y Prenatal" : "Pediatric & Prenatal Chiropractic"}</h3>
              <p>
                {isEs
                  ? "El Dr. Foss está certificado en quiropráctica pediátrica y en la Técnica Webster para cuidado prenatal. Atiende a bebés desde los primeros días de vida — desde cólico y reflujo hasta problemas de lactancia y tortícolis. Sus ajustes para bebés y niños son extremadamente suaves, usando solo la presión equivalente a revisar la madurez de un tomate."
                  : "Dr. Foss is certified in pediatric chiropractic and the Webster Technique for prenatal care. He sees infants from the earliest days of life — from colic and reflux to nursing difficulties and torticollis. His adjustments for babies and children are extremely gentle, using only the pressure equivalent to checking the ripeness of a tomato."}
              </p>
            </div>
            <div className={styles.specialtyCard}>
              <h3>{isEs ? "Terapia Craneal y Cráneo-Sacral" : "Cranial & Craniosacral Therapy"}</h3>
              <p>
                {isEs
                  ? "La terapia craneal es una de las especialidades más avanzadas y menos comunes en la quiropráctica. El Dr. Foss está certificado en ajuste craneal y corrección sacro-occipital, abordando condiciones como el TMJ, vértigo, infecciones del oído, sinusitis y problemas del neurodesarrollo a través del sistema cráneo-sacral."
                  : "Cranial therapy is one of the most advanced and least common specialties in chiropractic. Dr. Foss is certified in cranial adjusting and sacro-occipital correction, addressing conditions like TMJ, vertigo, ear infections, sinus congestion, and neurodevelopmental challenges through the craniosacral system."}
              </p>
            </div>
            <div className={styles.specialtyCard}>
              <h3>{isEs ? "Manipulación de Órganos" : "Organ Manipulation"}</h3>
              <p>
                {isEs
                  ? "Más allá de la columna vertebral, el Dr. Foss está entrenado en manipulación visceral — técnicas suaves que abordan el sistema nervioso autónomo y su relación con los órganos internos. Este trabajo puede beneficiar a pacientes con reflujo, problemas digestivos, dismenorrea y otras condiciones donde la columna torácica o lumbar afecta la función de los órganos."
                  : "Beyond the spine, Dr. Foss is trained in visceral manipulation — gentle techniques addressing the autonomic nervous system and its relationship with internal organs. This work can benefit patients with acid reflux, digestive issues, dysmenorrhea, and other conditions where the thoracic or lumbar spine impacts organ function."}
              </p>
            </div>
          </div>

          {/* Pura Vida Protocol */}
          <div className={styles.highlightBox}>
            <h2>{isEs ? "El Protocolo Pura Vida" : "The Pura Vida Protocol"}</h2>
            <p>
              {isEs
                ? "A lo largo de más de dos décadas de práctica en tres continentes, el Dr. Foss desarrolló el Protocolo Pura Vida — un sistema de atención integral que combina la corrección espinal quiropráctica con las tecnologías regenerativas más avanzadas disponibles: Terapia SoftWave, Terapia de Onda de Choque y Láser de Clase IV."
                : "Over more than two decades of practice across three continents, Dr. Foss developed the Pura Vida Protocol — a comprehensive care system that combines chiropractic spinal correction with the most advanced regenerative technologies available: SoftWave Therapy, Shockwave Therapy, and Class IV Laser."}
            </p>
            <p>
              {isEs
                ? "El protocolo fue diseñado para resolver la causa raíz de las condiciones de los pacientes — no solo aliviar los síntomas. Cada plan de cuidado es personalizado según la categoría SOT del paciente, su historial clínico y sus objetivos de salud. El resultado es un enfoque de cuerpo completo que genera resultados más rápidos y más duraderos que los enfoques convencionales de quiropráctica o fisioterapia por sí solos."
                : "The protocol was designed to resolve the root cause of patients' conditions — not merely relieve symptoms. Every care plan is customized to the patient's SOT category, clinical history, and health goals. The result is a whole-body approach that generates faster and longer-lasting results than conventional chiropractic or physical therapy approaches alone."}
            </p>
          </div>

          {/* International Journey */}
          <div className={styles.bioSection}>
            <h2 className={styles.h2}>
              {isEs ? "Una Carrera Internacional" : "An International Career"}
            </h2>
            <p>
              {isEs
                ? "Pocos quiroprácticos en los Estados Unidos pueden reclamar la amplitud de experiencia clínica del Dr. Foss. Durante su carrera ha vivido y practicado en Costa Rica, España, Irlanda, los Países Bajos y Guatemala — acumulando más de 23 años de experiencia en tres continentes. Esta trayectoria internacional lo expuso a una diversidad extraordinaria de casos clínicos y le permitió estudiar con maestros de la quiropráctica, la medicina osteopática y la naturopatía de todo el mundo."
                : "Few chiropractors in the United States can claim the breadth of clinical experience that Dr. Foss has. During his career he has lived and practiced in Costa Rica, Spain, Ireland, the Netherlands, and Guatemala — accumulating more than 23 years of experience across three continents. This international journey exposed him to an extraordinary diversity of clinical cases and allowed him to study with masters of chiropractic, osteopathic medicine, and naturopathy from around the world."}
            </p>
            <p>
              {isEs
                ? "En 2010, el Dr. Foss regresó a los Estados Unidos y eligió San Antonio, Texas como el hogar de Pura Vida Chiropractic — una ciudad con una comunidad hispana vibrante y grande a la que quería servir en su propio idioma. Hoy, la clínica atiende a pacientes de todo San Antonio y sus alrededores, así como a pacientes internacionales de Chile, Colombia, Argentina, Brasil, Panamá, Costa Rica, Puerto Rico, España, Francia, Irlanda, Rumania y Canadá."
                : "In 2010, Dr. Foss returned to the United States and chose San Antonio, Texas as the home of Pura Vida Chiropractic — a city with a large, vibrant Hispanic community he wanted to serve in their own language. Today, the clinic serves patients from throughout San Antonio and surrounding areas, as well as international patients from Chile, Colombia, Argentina, Brazil, Panama, Costa Rica, Puerto Rico, Spain, France, Ireland, Romania, and Canada."}
            </p>
          </div>

          {/* Community Mission */}
          <div className={styles.communitySection}>
            <h2>{isEs ? "Un Compromiso con la Comunidad Latina de San Antonio" : "A Commitment to San Antonio's Latino Community"}</h2>
            <p>
              {isEs
                ? "Desde el primer día, la misión de Pura Vida Chiropractic ha sido brindar a la comunidad hispana de San Antonio el cuidado de salud y bienestar que merece. El Dr. Foss es completamente bilingüe en inglés y español, y toda la clínica opera en ambos idiomas. Nadie debería tener que navegar una consulta médica en un idioma que no domina."
                : "From day one, Pura Vida Chiropractic's mission has been to bring the Hispanic community of San Antonio the health and wellness care they deserve. Dr. Foss is fully bilingual in English and Spanish, and the entire clinic operates in both languages. No one should have to navigate a health visit in a language they don't speak fluently."}
            </p>
            <p>
              {isEs
                ? "El nombre 'Pura Vida' — una expresión costarricense que significa 'vida pura' o 'vida buena' — refleja la filosofía del Dr. Foss: que la salud verdadera no es simplemente la ausencia de dolor, sino una vida llena de vitalidad, movimiento y bienestar. Esa es la vida que el Dr. Foss se compromete a ayudar a cada paciente a alcanzar."
                : "'Pura Vida' — a Costa Rican expression meaning 'pure life' or 'good life' — reflects Dr. Foss's philosophy: that true health is not merely the absence of pain, but a life full of vitality, movement, and well-being. That is the life Dr. Foss is committed to helping every patient achieve."}
            </p>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <p>
              {isEs
                ? "¿Listo para experimentar el cuidado del Dr. Foss de primera mano?"
                : "Ready to experience Dr. Foss's care firsthand?"}
            </p>
            <Link href={`/${locale}/new-patient`} className={styles.ctaBtn}>
              {isEs ? "Reserve Su Evaluación →" : "Book Your New Patient Evaluation →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
