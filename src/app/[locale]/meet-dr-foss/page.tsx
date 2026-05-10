import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./meet-dr-foss.module.css";

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
  const canonical = `${BASE_URL}/${locale}/meet-dr-foss`;
  return {
    title: isEs
      ? "Conozca al Dr. Dan Foss, DC | Quiropráctico San Antonio TX"
      : "Meet Dr. Dan Foss, DC | Chiropractor San Antonio TX",
    description: isEs
      ? "Conozca al Dr. Dan Foss, DC — fundador de Pura Vida Chiropractic en San Antonio TX. Doctor en Quiropráctica con Certificación Avanzada SOT, más de 23 años de experiencia en 3 continentes, bilingüe en inglés y español. Historia personal, filosofía y misión."
      : "Meet Dr. Dan Foss, DC — founder of Pura Vida Chiropractic in San Antonio TX. Doctor of Chiropractic with Advanced SOT Certification, 23+ years of experience across 3 continents, bilingual English and Spanish. Personal story, philosophy, and mission.",
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/meet-dr-foss`,
        es: `${BASE_URL}/es/meet-dr-foss`,
        "x-default": `${BASE_URL}/en/meet-dr-foss`,
      },
    },
    openGraph: {
      title: isEs
        ? "Conozca al Dr. Dan Foss, DC | Pura Vida Chiropractic San Antonio"
        : "Meet Dr. Dan Foss, DC | Pura Vida San Antonio",
      description: isEs
        ? "La historia personal, filosofía y misión del Dr. Dan Foss — quiropráctico bilingüe en San Antonio, TX con más de 23 años de experiencia internacional."
        : "The personal story, philosophy, and mission of Dr. Dan Foss — bilingual chiropractor in San Antonio, TX with 23+ years of international experience.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "profile",
      images: [
        {
          url: "/images/social-cards/meet-dr-foss-portrait.jpg",
          width: 1200,
          height: 630,
          alt: "Dr. Dan Foss, DC — Pura Vida Chiropractic San Antonio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/social-cards/meet-dr-foss-portrait.jpg"],
    },
  };
}

export default async function MeetDrFossPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="/meet-dr-foss" />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>
                {isEs ? "Fundador — Pura Vida Chiropractic" : "Founder — Pura Vida Chiropractic"}
              </p>
              <h1 className={styles.heroTitle}>
                {isEs ? "Dr. Dan Foss, DC" : "Dr. Dan Foss, DC"}
              </h1>
              <p className={styles.heroTagline}>
                {isEs
                  ? "Quiropráctico bilingüe certificado SOT · San Antonio, TX · 23+ años de experiencia internacional"
                  : "Bilingual SOT-Certified Chiropractor · San Antonio, TX · 23+ years of international experience"}
              </p>
              <div className={styles.heroBadges}>
                <span className={styles.badge}>{isEs ? "Certificación Avanzada SOT®" : "Advanced SOT® Certified"}</span>
                <span className={styles.badge}>{isEs ? "Bilingüe EN/ES" : "Bilingual EN/ES"}</span>
                <span className={styles.badge}>{isEs ? "Técnica Webster" : "Webster Technique"}</span>
                <span className={styles.badge}>{isEs ? "Instructor Internacional" : "International Instructor"}</span>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/dr-foss-about-hp.webp"
                alt={isEs ? "Dr. Dan Foss, DC — Quiropráctico en San Antonio TX" : "Dr. Dan Foss, DC — Chiropractor in San Antonio TX"}
                width={420}
                height={500}
                className={styles.heroImage}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>23+</span>
            <span className={styles.statLabel}>{isEs ? "Años de Experiencia" : "Years Experience"}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>{isEs ? "Países donde ha Ejercido" : "Countries Practiced"}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>{isEs ? "Continentes" : "Continents"}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>159+</span>
            <span className={styles.statLabel}>{isEs ? "Reseñas de 5 Estrellas" : "5-Star Reviews"}</span>
          </div>
        </div>

        <div className={styles.container}>

          {/* Origin story */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Cómo Todo Comenzó — Mi Historia Personal" : "How It All Began — My Personal Story"}
            </h2>
            {isEs ? (
              <>
                <p>De niño sufrí una condición llamada tortícolis. Estaba en 3er grado y al agacharme a recoger un lápiz, mi cuello quedó torcido hacia un lado. Mi maestra me envió a la enfermería escolar, quien llamó a mi mamá, quien me llevó al médico familiar. El doctor recetó Valium y Vicodina — para un niño de tercer grado.</p>
                <p>Mi mamá, que no aprobaba esa medicación tan fuerte para un niño tan pequeño, salió del consultorio médico y cruzó la calle hasta una clínica quiropráctica. Después de un examen completo, el quiropráctico dijo: <em>&ldquo;Encontramos el problema.&rdquo;</em> Me acostó en la mesa y sentí un clic indoloro — y mi cuello se enderezó de inmediato.</p>
                <p>Ese momento cambió el curso de mi vida. Desde ese día supe que quería estudiar quiropráctica y ayudar a otras personas de la misma manera que me habían ayudado a mí. No me imagino haber tomado un camino diferente.</p>
              </>
            ) : (
              <>
                <p>As a child I suffered from a condition called torticollis. I was in 3rd grade and bent down to pick up a pencil — and my neck got stuck, twisted completely to one side. My teacher sent me to the school nurse, who called my mom, who took me to our family doctor. The doctor prescribed Valium and Vicodin for a 3rd grader.</p>
                <p>My mom, who didn't believe in putting a child on that kind of medication, walked out of the doctor's office and crossed the street to a chiropractic clinic. After a complete examination, the chiropractor said: <em>&ldquo;We found the problem.&rdquo;</em> He laid me down on the table and I felt a painless snap and pop — and my neck straightened out immediately.</p>
                <p>That moment changed the entire course of my life. From that day forward I knew I wanted to study chiropractic and help people the way I had been helped. I can't imagine any other path.</p>
              </>
            )}
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Educación y Formación" : "Education & Training"}
            </h2>
            {isEs ? (
              <>
                <p>El Dr. Foss obtuvo su Doctorado en Quiropráctica en el <strong>Western States Chiropractic College</strong> en Portland, Oregón, en 2003 — uno de los colegios de quiropráctica más rigurosos y respetados del mundo. Pero su educación nunca se detuvo ahí. Desde que obtuvo su título, ha pasado cada año perfeccionando su dominio técnico, estudiando con los maestros más avanzados de la quiropráctica, la medicina osteopática y la naturopatía en todo el mundo.</p>
                <p>Obtuvo la <strong>Certificación Avanzada SOT®</strong> a través de SORSI (Sacro-Occipital Research Society International) — el nivel más alto disponible en la Técnica Sacro-Occipital. Sirvió en la junta directiva de SORSI y viaja internacionalmente para enseñar técnicas SOT avanzadas a quiroprácticos en todo el mundo. Su formación adicional incluye:</p>
                <ul className={styles.credList}>
                  <li>Certificación en Terapia Craneal y Corrección Sacro-Occipital</li>
                  <li>Certificación en Manipulación Visceral y Órganos</li>
                  <li>Certificación en Quiropráctica Pediátrica</li>
                  <li>Técnica Webster para Cuidado Prenatal (certificado por ICPA)</li>
                  <li>Fisioterapia avanzada y modalidades de rehabilitación</li>
                  <li>Estudios en medicina naturopática y ayurvédica</li>
                  <li>SoftWave Tissue Regeneration Technology</li>
                  <li>Terapia de Ondas de Choque Extracorpóreas (ESWT)</li>
                  <li>Terapia Láser de Clase IV</li>
                </ul>
              </>
            ) : (
              <>
                <p>Dr. Foss earned his Doctor of Chiropractic degree from <strong>Western States Chiropractic College</strong> in Portland, Oregon in 2003 — one of the most rigorous and respected chiropractic colleges in the world. But his education never stopped there. Since earning his degree, he has spent every year deepening his technical mastery, studying with the most advanced masters of chiropractic, osteopathic medicine, and naturopathy around the world.</p>
                <p>He earned <strong>Advanced SOT® Certification</strong> through SORSI (Sacro-Occipital Research Society International) — the highest level available in Sacro-Occipital Technique. He has served on the SORSI board of directors and travels internationally to teach advanced SOT techniques to chiropractors worldwide. His additional training includes:</p>
                <ul className={styles.credList}>
                  <li>Cranial Therapy & Sacro-Occipital Correction Certification</li>
                  <li>Visceral & Organ Manipulation Certification</li>
                  <li>Pediatric Chiropractic Certification</li>
                  <li>Webster Technique for Prenatal Care (ICPA certified)</li>
                  <li>Advanced physical therapy and rehabilitation modalities</li>
                  <li>Studies in naturopathic and Ayurvedic medicine</li>
                  <li>SoftWave Tissue Regeneration Technology</li>
                  <li>Extracorporeal Shockwave Therapy (ESWT)</li>
                  <li>Class IV Laser Therapy</li>
                </ul>
              </>
            )}
          </section>

          {/* International career */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Una Carrera Verdaderamente Internacional" : "A Truly International Career"}
            </h2>
            {isEs ? (
              <>
                <p>Pocos quiroprácticos en los Estados Unidos pueden reclamar la amplitud de experiencia clínica del Dr. Foss. Durante su carrera ha vivido y ejercido en <strong>Costa Rica, España, Irlanda, los Países Bajos y Guatemala</strong> — acumulando más de 23 años de experiencia en tres continentes. Esta trayectoria internacional lo expuso a una diversidad extraordinaria de casos clínicos y lo llevó a estudiar con maestros de vanguardia en Europa, Centroamérica y más allá.</p>
                <p>Esta exposición global moldea la manera en que el Dr. Foss aborda cada caso: con curiosidad, humildad y un repertorio técnico que va mucho más allá de lo que un quiropráctico promedio ve en toda su carrera. Cuando usted se sienta con el Dr. Foss en Pura Vida, se beneficia de décadas de estudio y práctica acumulados alrededor del mundo.</p>
                <p>En 2010, el Dr. Foss regresó a los Estados Unidos y eligió San Antonio, Texas como el hogar permanente de <Link href={`/${locale}/about`} className={styles.inlineLink}>Pura Vida Chiropractic</Link> — atraído por la vibrante comunidad bilingüe de la ciudad y su deseo de servir a la comunidad latina en su propio idioma.</p>
              </>
            ) : (
              <>
                <p>Few chiropractors in the United States can claim the breadth of clinical experience that Dr. Foss has accumulated. During his career he has lived and practiced in <strong>Costa Rica, Spain, Ireland, the Netherlands, and Guatemala</strong> — accumulating more than 23 years of experience across three continents. This international journey exposed him to an extraordinary diversity of clinical cases and led him to study with cutting-edge masters in Europe, Central America, and beyond.</p>
                <p>This global exposure shapes the way Dr. Foss approaches every case: with curiosity, humility, and a technical repertoire that goes far beyond what the average chiropractor encounters in an entire career. When you sit down with Dr. Foss at Pura Vida, you benefit from decades of study and practice accumulated around the world.</p>
                <p>In 2010, Dr. Foss returned to the United States and chose San Antonio, Texas as the permanent home of <Link href={`/${locale}/about`} className={styles.inlineLink}>Pura Vida Chiropractic</Link> — drawn by the city's vibrant bilingual community and his desire to serve the Latino community in their own language.</p>
              </>
            )}
          </section>

          {/* Specialties */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Especialidades Clínicas" : "Clinical Specialties"}
            </h2>
            <div className={styles.specialtyGrid}>
              <Link href={`/${locale}/services/sot-chiropractic`} className={styles.specialtyCard}>
                <h3>{isEs ? "Técnica Sacro-Occipital (SOT)" : "Sacro-Occipital Technique (SOT)"}</h3>
                <p>{isEs ? "El nivel más alto de certificación SOT disponible. Una de las pocas clínicas en San Antonio con Certificación Avanzada SOT." : "The highest level of SOT certification available. One of the few clinics in San Antonio with Advanced SOT Certification."}</p>
              </Link>
              <Link href={`/${locale}/services/sot-chiropractic`} className={styles.specialtyCard}>
                <h3>{isEs ? "Terapia Craneal y Cráneo-Sacral" : "Cranial & Craniosacral Therapy"}</h3>
                <p>{isEs ? "Ajuste craneal avanzado para TMJ, vértigo, infecciones del oído, sinusitis y condiciones del neurodesarrollo." : "Advanced cranial adjusting for TMJ, vertigo, ear infections, sinus congestion, and neurodevelopmental conditions."}</p>
              </Link>
              <Link href={`/${locale}/services/pediatric-chiropractor`} className={styles.specialtyCard}>
                <h3>{isEs ? "Quiropráctica Pediátrica" : "Pediatric Chiropractic"}</h3>
                <p>{isEs ? "Cuidado extremadamente suave para bebés desde los primeros días de vida. Cólico, reflujo, tortícolis, problemas de lactancia y más." : "Extremely gentle care for infants from the earliest days of life. Colic, reflux, torticollis, nursing difficulties, and more."}</p>
              </Link>
              <Link href={`/${locale}/services/prenatal-chiropractor`} className={styles.specialtyCard}>
                <h3>{isEs ? "Quiropráctica Prenatal y Técnica Webster" : "Prenatal & Webster Technique"}</h3>
                <p>{isEs ? "Certificado por ICPA en la Técnica Webster. Alinea la pelvis para un embarazo más cómodo y un parto más fluido." : "ICPA-certified in the Webster Technique. Balances the pelvis for a more comfortable pregnancy and smoother delivery."}</p>
              </Link>
              <Link href={`/${locale}/services/softwave-therapy`} className={styles.specialtyCard}>
                <h3>{isEs ? "Terapia SoftWave" : "SoftWave Therapy"}</h3>
                <p>{isEs ? "Tecnología regenerativa de tejidos de última generación para curación acelerada sin cirugía ni medicamentos." : "Cutting-edge tissue regeneration technology for accelerated healing without surgery or medication."}</p>
              </Link>
              <Link href={`/${locale}/services/auto-injury`} className={styles.specialtyCard}>
                <h3>{isEs ? "Lesiones de Auto" : "Auto Injury Chiropractic"}</h3>
                <p>{isEs ? "Especialista en latigazo cervical e injuries de colisión. Trabajamos con seguros de auto y casos de lesiones personales." : "Specialist in whiplash and collision injuries. We work with auto insurance and personal injury cases."}</p>
              </Link>
            </div>
          </section>

          {/* Philosophy */}
          <section className={styles.highlightBox}>
            <h2>{isEs ? "Mi Filosofía" : "My Philosophy"}</h2>
            {isEs ? (
              <>
                <blockquote className={styles.quote}>
                  &ldquo;Mi misión es simple: Mejore su Salud. Mantenga su Salud. Los síntomas son solo la punta del iceberg. El verdadero cuidado de la salud significa encontrar y corregir la causa subyacente — no enmascarar el dolor con medicamentos. A través del Protocolo Pura Vida, integro principios probados de quiropráctica, osteopatía, terapia manual y modalidades regenerativas avanzadas para ayudar a cada paciente a lograr resultados reales y duraderos.&rdquo;
                </blockquote>
                <p className={styles.quoteCite}>— Dr. Dan Foss, DC, Fundador de Pura Vida Chiropractic</p>
              </>
            ) : (
              <>
                <blockquote className={styles.quote}>
                  &ldquo;My mission is simple: Get Healthy. Stay Healthy. Symptoms are only the tip of the iceberg. True health care means finding and correcting the underlying cause — not masking pain with drugs. Through the Pura Vida Protocol, I integrate proven principles from chiropractic, osteopathic, manual therapy, and advanced regenerative modalities to help every patient achieve real, lasting results.&rdquo;
                </blockquote>
                <p className={styles.quoteCite}>— Dr. Dan Foss, DC, Founder of Pura Vida Chiropractic</p>
              </>
            )}
          </section>

          {/* Community commitment */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Compromiso con la Comunidad Latina de San Antonio" : "Commitment to San Antonio's Latino Community"}
            </h2>
            {isEs ? (
              <>
                <p>Desde el primer día, la misión de Pura Vida Chiropractic ha sido brindar a la comunidad hispana de San Antonio el cuidado de salud que merece. El Dr. Foss es completamente bilingüe en inglés y español, y toda la clínica opera en ambos idiomas. Nadie debería tener que navegar una consulta médica en un idioma que no domina — especialmente cuando se trata de su salud.</p>
                <p>El nombre <em>Pura Vida</em> — una expresión costarricense que significa &ldquo;vida pura&rdquo; o &ldquo;vida buena&rdquo; — refleja la filosofía del Dr. Foss: que la verdadera salud es una vida llena de vitalidad, movimiento y bienestar, no simplemente la ausencia de dolor. Esa es la vida que él está comprometido a ayudar a cada paciente a alcanzar.</p>
                <p>Además de su práctica clínica, el Dr. Foss ha realizado <Link href={`/${locale}/mission`} className={styles.inlineLink}>viajes de misión médica</Link> a comunidades desatendidas en Centroamérica y más allá, llevando cuidado quiropráctico a personas que de otro modo no tendrían acceso a él.</p>
              </>
            ) : (
              <>
                <p>From day one, Pura Vida Chiropractic's mission has been to bring San Antonio's Hispanic community the health care it deserves. Dr. Foss is fully bilingual in English and Spanish, and the entire clinic operates in both languages. No one should have to navigate a medical visit in a language they don't speak fluently — especially when their health is at stake.</p>
                <p>The name <em>Pura Vida</em> — a Costa Rican expression meaning &ldquo;pure life&rdquo; or &ldquo;good life&rdquo; — reflects Dr. Foss's philosophy: that true health is a life full of vitality, movement, and well-being, not simply the absence of pain. That is the life he is committed to helping every patient achieve.</p>
                <p>Beyond his clinical practice, Dr. Foss has conducted <Link href={`/${locale}/mission`} className={styles.inlineLink}>medical mission trips</Link> to underserved communities in Central America and beyond, bringing chiropractic care to people who would otherwise have no access to it.</p>
              </>
            )}
          </section>

          {/* Video */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Conozca al Dr. Foss en Video" : "Meet Dr. Foss on Video"}
            </h2>
            <div className={styles.videoGrid}>
              <div className={styles.videoWrap}>
                <iframe
                  src="https://www.youtube.com/embed/eyMlgOcLfGs"
                  title={isEs ? "Conozca al Dr. Dan Foss — Pura Vida Chiropractic San Antonio" : "Meet Dr. Dan Foss — Pura Vida Chiropractic San Antonio"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoFrame}
                />
              </div>
              <div className={styles.videoWrap}>
                <iframe
                  src="https://www.youtube.com/embed/h1DTJL0brg0"
                  title={isEs ? "Acerca de Pura Vida Chiropractic San Antonio TX" : "About Pura Vida Chiropractic San Antonio TX"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoFrame}
                />
              </div>
            </div>
            <p className={styles.videoMore}>
              <Link href={`/${locale}/videos`} className={styles.inlineLink}>
                {isEs ? "Ver todos los videos →" : "View all videos →"}
              </Link>
            </p>
          </section>

          {/* Patient testimonials snippet */}
          <section className={styles.section}>
            <h2 className={styles.h2}>
              {isEs ? "Lo Que Dicen los Pacientes" : "What Patients Say"}
            </h2>
            <div className={styles.testimonialGrid}>
              {[
                {
                  name: "Sarah M.",
                  quote: isEs
                    ? "El Dr. Foss cambió completamente mi vida. Después de años de dolor de espalda crónico, por fin puedo dormir toda la noche. Su técnica SOT es incomparable."
                    : "Dr. Foss completely changed my life. After years of chronic back pain I can finally sleep through the night. His SOT technique is unlike anything I have experienced.",
                },
                {
                  name: "Jennifer W.",
                  quote: isEs
                    ? "Visité al Dr. Foss durante todo mi embarazo. El alivio fue increíble y mi parto fue mucho más fluido. Ahora también traigo a mi bebé — es maravilloso con los niños."
                    : "I saw Dr. Foss throughout my entire pregnancy. The relief was incredible and my labor was much smoother. I now bring my baby too — he's wonderful with children.",
                },
                {
                  name: "Marcus J.",
                  quote: isEs
                    ? "La terapia SoftWave para mi rodilla fue increíble. Me habían dicho que necesitaba cirugía y decidí intentar esto primero. Tres meses después mi resonancia magnética mostró mejoría significativa."
                    : "The SoftWave therapy for my knee was nothing short of amazing. I was told I needed surgery and decided to try this first. Three months later my MRI showed significant improvement.",
                },
              ].map((t) => (
                <div key={t.name} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>★★★★★</div>
                  <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <p className={styles.testimonialName}>{t.name}</p>
                </div>
              ))}
            </div>
            <p className={styles.videoMore}>
              <Link href={`/${locale}/testimonials`} className={styles.inlineLink}>
                {isEs ? "Ver todos los testimonios →" : "Read all testimonials →"}
              </Link>
            </p>
          </section>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2>{isEs ? "¿Listo para Conocer al Dr. Foss?" : "Ready to Meet Dr. Foss?"}</h2>
            <p>
              {isEs
                ? "Reserve su evaluación gratuita de nuevo paciente hoy y experimente el cuidado del Dr. Foss de primera mano."
                : "Book your free new patient evaluation today and experience Dr. Foss's care firsthand."}
            </p>
            <div className={styles.ctaBtns}>
              <a href="https://puravidasanantonio.com/special/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                {isEs ? "Reservar Evaluación Gratis →" : "Book Free Evaluation →"}
              </a>
              <Link href={`/${locale}/about`} className={styles.ctaSecondary}>
                {isEs ? "Sobre la Clínica" : "About the Clinic"}
              </Link>
              <Link href={`/${locale}/new-patient`} className={styles.ctaSecondary}>
                {isEs ? "Info para Nuevos Pacientes" : "New Patient Info"}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
