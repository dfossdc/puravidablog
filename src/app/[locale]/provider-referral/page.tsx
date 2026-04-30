import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./provider-referral.module.css";

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
  return {
    title: isEs
      ? "Referidos Profesionales | Pura Vida Chiropractic San Antonio"
      : "Provider Referrals | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "Refiera a sus pacientes al Dr. Dan Foss, el único quiropráctico certificado en SOT Avanzado de San Antonio. Colaboramos con parteras, obstetras, abogados de lesiones personales, fisioterapeutas y proveedores de atención primaria."
      : "Refer your patients to Dr. Dan Foss, San Antonio's only Advanced SOT-certified chiropractor. We collaborate with midwives, OBs, personal-injury attorneys, physical therapists, and primary care providers across San Antonio.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/provider-referral`,
      languages: {
        en: `${BASE_URL}/en/provider-referral`,
        es: `${BASE_URL}/es/provider-referral`,
        "x-default": `${BASE_URL}/en/provider-referral`,
      },
    },
    openGraph: {
      title: isEs
        ? "Referidos Profesionales | Pura Vida Chiropractic San Antonio"
        : "Provider Referrals | Pura Vida Chiropractic San Antonio",
      url: `${BASE_URL}/${locale}/provider-referral`,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function ProviderReferralPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const lc = (locale === "es" ? "es" : "en") as "en" | "es";

  return (
    <>
      <Header locale={lc} currentPath="/provider-referral" />
      <main className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              {isEs
                ? "Para Profesionales de la Salud · Parteras · Abogados"
                : "For Healthcare Providers · Midwives · Attorneys"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Un Socio de Referidos de Confianza para la Comunidad Médica de San Antonio"
                : "A Trusted Referral Partner for San Antonio's Healthcare Community"}
            </h1>
            <p className={styles.heroLead}>
              {isEs
                ? "El Dr. Dan Foss es el único quiropráctico certificado en SOT Avanzado de San Antonio y el único proveedor certificado en CMRT de la región. Por más de 23 años, hemos trabajado junto a parteras, obstetras, abogados, fisioterapeutas y proveedores de atención primaria — ofreciendo cuidado quiropráctico especializado con comunicación cerrada y rigor clínico."
                : "Dr. Dan Foss is San Antonio's only Advanced SOT-certified chiropractor and the only CMRT-certified provider in the region. For 23+ years, we've worked alongside midwives, obstetricians, attorneys, physical therapists, and primary care providers — delivering specialized chiropractic care with closed-loop communication and clinical rigor."}
            </p>
            <div className={styles.heroCtaRow}>
              <a href="#refer-now" className={styles.heroPrimary}>
                {isEs ? "Refiera a un Paciente →" : "Refer a Patient →"}
              </a>
              <a href="tel:+12106851994" className={styles.heroSecondary}>
                📞 {isEs ? "Llame: (210) 685-1994" : "Call Our Office: (210) 685-1994"}
              </a>
            </div>
          </div>
        </section>

        {/* ── Why providers refer to us ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? "Por Qué los Profesionales de San Antonio Nos Refieren Pacientes"
                : "Why San Antonio Providers Refer to Us"}
            </h2>
            <p className={styles.sectionLead}>
              {isEs
                ? "Credenciales especializadas, comunicación cerrada y documentación rigurosa para apoyar el plan de cuidado de su paciente."
                : "Specialized credentials, closed-loop communication, and rigorous documentation that supports your patient's care plan."}
            </p>

            <div className={styles.reasonsGrid}>
              <div className={styles.reason}>
                <h3>{isEs ? "Credenciales Especializadas" : "Specialized Credentials"}</h3>
                <p>
                  {isEs
                    ? "Certificación SOT Avanzada a través de SORSI — el nivel más alto de capacitación en la Técnica Sacro-Occipital. El único proveedor de CMRT (ajuste de órganos) y Craneopatía en San Antonio."
                    : "Advanced SOT certification through SORSI — the highest level of training in Sacro-Occipital Technique. The only CMRT (organ-adjusting) and Craniopathy provider in San Antonio."}
                </p>
              </div>

              <div className={styles.reason}>
                <h3>{isEs ? "Comunicación Cerrada" : "Closed-Loop Communication"}</h3>
                <p>
                  {isEs
                    ? "Usted recibe una carta de hallazgos iniciales dentro de los 7 días de la primera visita, además de actualizaciones de progreso y un resumen de alta. Su paciente sigue siendo su paciente — lo mantenemos informado."
                    : "You receive an initial findings letter within 7 days of the first visit, plus progress updates and a discharge summary. Your patient is your patient — we keep you in the loop."}
                </p>
              </div>

              <div className={styles.reason}>
                <h3>{isEs ? "Atención Bilingüe" : "Bilingual Care"}</h3>
                <p>
                  {isEs
                    ? "Atención clínica completa en inglés y español — incluyendo historia detallada, planes de tratamiento y educación al paciente. Esencial para servir a la comunidad latina de San Antonio."
                    : "Full clinical care in English and Spanish — including detailed history, treatment plans, and patient education. Critical for serving San Antonio's Latino community."}
                </p>
              </div>

              <div className={styles.reason}>
                <h3>{isEs ? "Práctica Consciente del Alcance" : "Scope-Aware Practice"}</h3>
                <p>
                  {isEs
                    ? "Referimos de regreso al proveedor apropiado cuando la quiropráctica no es la respuesta correcta — incluyendo señales de alarma, fracturas, infecciones o enfermedades sistémicas que requieran manejo médico."
                    : "We refer back to the appropriate provider when chiropractic isn't the right answer — including for red flags, fractures, infections, or systemic disease requiring medical management."}
                </p>
              </div>

              <div className={styles.reason}>
                <h3>{isEs ? "Calidad de Documentación" : "Documentation Quality"}</h3>
                <p>
                  {isEs
                    ? "Notas SOAP completas, reportes narrativos, revisión de imágenes y medidas de resultado. Esencial para casos de lesiones personales, coordinación de compensación laboral y revisión médico-legal."
                    : "Complete SOAP notes, narrative reports, imaging review, and outcome measures. Critical for PI cases, workers' comp coordination, and medical-legal review."}
                </p>
              </div>

              <div className={styles.reason}>
                <h3>{isEs ? "Más de 23 Años de Experiencia" : "23+ Years Experience"}</h3>
                <p>
                  {isEs
                    ? "Decenas de miles de pacientes tratados en 3 continentes. Ex-miembro de la junta de SORSI e instructor internacional de SOT. Practicando en San Antonio desde 2010."
                    : "Tens of thousands of patients treated across 3 continents. Former SORSI board member and international SOT instructor. Practicing in San Antonio since 2010."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── For midwives, doulas, OBs ── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.split}>
              <div>
                <p className={styles.subEyebrow}>
                  {isEs
                    ? "Para Parteras, Doulas, Obstetras y Consultoras de Lactancia"
                    : "For Midwives, Doulas, OBs & Lactation Consultants"}
                </p>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLeft}`}>
                  {isEs
                    ? "Cuidado Quiropráctico Prenatal y Pediátrico Especializado"
                    : "Specialized Prenatal & Pediatric Chiropractic"}
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {isEs
                    ? "Pura Vida es una de las pocas prácticas en San Antonio que ofrece el espectro completo de cuidado quiropráctico prenatal e infantil, todo entregado bajo protocolos SOT Avanzados por un solo proveedor experimentado."
                    : "Pura Vida is one of the only practices in San Antonio offering the full spectrum of prenatal and infant chiropractic care, all delivered through Advanced SOT protocols by a single experienced provider."}
                </p>

                <h3 style={{ fontSize: "1rem", marginBottom: "0.55rem" }}>
                  {isEs ? "Casos que comúnmente co-manejamos:" : "We commonly co-manage:"}
                </h3>
                <ul className={styles.bulletList}>
                  {(isEs
                    ? [
                        "Técnica Webster para presentación pélvica (37+ semanas)",
                        "Dolor de cintura pélvica, dolor de ligamento redondo, ciática en el embarazo",
                        "Tortícolis infantil, plagiocefalia, preocupaciones de forma de cabeza",
                        "Dificultades de agarre en lactancia, amamantar de un solo lado",
                        "Apoyo pre/post-revisión de frenillo lingual",
                        "Cólico infantil, reflujo, problemas de sueño",
                        "Alineación pélvica posparto y recuperación del core",
                      ]
                    : [
                        "Webster Technique for breech presentation (37+ weeks)",
                        "Pelvic girdle pain, round ligament pain, sciatica in pregnancy",
                        "Infant torticollis, plagiocephaly, head-shape concerns",
                        "Breastfeeding latch difficulties, nursing on one side",
                        "Tongue tie pre/post-revision support",
                        "Infant colic, reflux, sleep issues",
                        "Postpartum pelvic alignment & core recovery",
                      ]
                  ).map((item) => (
                    <li key={item}>
                      <span className={styles.bulletCheck}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.italicNote}>
                  {isEs
                    ? "El Dr. Foss tuvo tortícolis en primer grado, a los 8 años — toda su carrera comenzó porque un quiropráctico la resolvió. El cuidado pediátrico no es un servicio adicional. Es el corazón de la práctica."
                    : "Dr. Foss had torticollis himself in first grade at age 8 — his entire career started because a chiropractor resolved it. Pediatric care is not an add-on service. It's the heart of the practice."}
                </p>
              </div>

              <div className={styles.splitImageWrap}>
                <Image
                  src="/images/conditions/pregnancy.webp"
                  alt={
                    isEs
                      ? "Cuidado quiropráctico prenatal en Pura Vida Chiropractic"
                      : "Prenatal chiropractic care at Pura Vida Chiropractic"
                  }
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                  className={styles.splitImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── For PI Attorneys ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.split}>
              <div className={styles.splitImageWrap}>
                <Image
                  src="/images/conditions/autoaccident.jpg"
                  alt={
                    isEs
                      ? "Cuidado quiropráctico de lesiones de auto en Pura Vida Chiropractic"
                      : "Auto injury chiropractic care at Pura Vida Chiropractic"
                  }
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                  className={styles.splitImg}
                />
              </div>

              <div>
                <p className={styles.subEyebrow}>
                  {isEs ? "Para Abogados de Lesiones Personales" : "For Personal Injury Attorneys"}
                </p>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLeft}`}>
                  {isEs
                    ? "Cuidado de Lesiones de Auto Que Apoya Su Caso"
                    : "Auto Injury Care That Supports Your Case"}
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {isEs
                    ? "Trabajamos directamente con abogados de lesiones personales en todo San Antonio en casos con Letter of Protection (LOP). El manejo bilingüe de casos significa que podemos servir a toda la población de víctimas de accidentes de San Antonio."
                    : "We work directly with PI attorneys throughout San Antonio on Letter of Protection (LOP) cases. Bilingual case management means we can serve the full breadth of San Antonio's accident victim population."}
                </p>

                <h3 style={{ fontSize: "1rem", marginBottom: "0.55rem" }}>
                  {isEs ? "Lo que ofrecemos:" : "What we provide:"}
                </h3>
                <ul className={styles.bulletList}>
                  {(isEs
                    ? [
                        "Tratamiento basado en Letter of Protection (LOP) / lien",
                        "Evaluación inicial el mismo día o al día siguiente",
                        "Narrativa inicial detallada con mecanismo de lesión, hallazgos del examen, diagnósticos (CIE-10) y plan de cuidado",
                        "Notas SOAP completas con medidas objetivas (ROM, orto/neuro)",
                        "Reporte narrativo final con pronóstico y calificación de impedimento",
                        "Coordinación de imágenes (rayos X, MRI cuando esté indicado)",
                        "Manejo de casos en español",
                        "Facturas y registros enviados directamente a su oficina",
                      ]
                    : [
                        "Letter of Protection (LOP) / lien-based treatment",
                        "Same-day or next-day initial evaluation",
                        "Detailed initial narrative with mechanism of injury, exam findings, diagnoses (ICD-10), and care plan",
                        "Complete SOAP notes with objective measures (ROM, ortho/neuro)",
                        "Final narrative report with prognosis & impairment rating",
                        "Imaging coordination (X-ray, MRI referral when indicated)",
                        "Spanish-speaking case management",
                        "Bills/records sent directly to your office",
                      ]
                  ).map((item) => (
                    <li key={item}>
                      <span className={styles.bulletCheck}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.diagnosesNote}>
                  <strong>{isEs ? "Diagnósticos comunes que tratamos:" : "Common diagnoses we treat:"}</strong>{" "}
                  {isEs
                    ? "Esguince/distensión cervical, trastorno asociado al latigazo (WAD I-III), distensión lumbar, cefalea post-traumática, síndrome post-conmoción, distensión torácica, ATM post-traumática."
                    : "Cervical strain/sprain, whiplash-associated disorder (WAD I-III), lumbar strain, post-traumatic headache, post-concussion syndrome, thoracic strain, post-traumatic TMJ."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── For Healthcare Providers ── */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.sectionInner}>
            <p
              className={styles.subEyebrow}
              style={{ textAlign: "center" }}
            >
              {isEs ? "Para Proveedores Médicos" : "For Healthcare Providers"}
            </p>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? "Atención Primaria · Fisioterapia · Neurología · Odontología · Urgencias"
                : "PCPs · PTs · Neurologists · Dentists · ER Providers"}
            </h2>
            <p className={styles.sectionLead}>
              {isEs
                ? "El Dr. Foss acepta referidos de proveedores médicos en toda el área metropolitana de San Antonio para casos donde la quiropráctica, la terapia manual y el trabajo craneal aportan valor al manejo médico."
                : "Dr. Foss accepts referrals from medical providers across the San Antonio metro for cases where chiropractic, manual therapy, and cranial work add value to medical management."}
            </p>

            <div className={styles.providerGrid}>
              {(isEs
                ? [
                    {
                      title: "Co-Manejo con Fisioterapia",
                      body:
                        "Pacientes que se estancan en fisioterapia, problemas estructurales que requieren manipulación, y mantenimiento post-alta. Coordinamos directamente con su plan de fisioterapia.",
                    },
                    {
                      title: "Co-Manejo Dental y de ATM",
                      body:
                        "La disfunción de ATM requiere manejo tanto oclusal como cráneo-cervical. La Craneopatía SOT aborda directamente el componente craneal que la mayoría de los protocolos de ATM pasan por alto.",
                    },
                    {
                      title: "Síndrome Post-Conmoción",
                      body:
                        "Los síntomas post-conmocionales persistentes — cefalea, vértigo, niebla cognitiva, dolor de cuello — frecuentemente involucran disfunción craneal que responde a los protocolos craneales SOT.",
                    },
                    {
                      title: "Referidos Pediátricos",
                      body:
                        "Tortícolis, plagiocefalia, infecciones de oído recurrentes, dificultades de alimentación, problemas de procesamiento sensorial, niños del espectro de TDAH que necesitan apoyo del sistema nervioso.",
                    },
                    {
                      title: "Casos Crónicos Estancados",
                      body:
                        "Dolor lumbar crónico, fibromialgia, presentaciones complejas de cefalea, y pacientes que no han respondido al manejo exclusivamente médico.",
                    },
                    {
                      title: "Visceral / Funcional",
                      body:
                        "CMRT aborda reflujo (ERGE), problemas funcionales gastrointestinales, disfunción menstrual y patrones de estrés adrenal a través de trabajo reflejo neurológico — complementario al manejo médico.",
                    },
                  ]
                : [
                    {
                      title: "Common PT Co-Management",
                      body:
                        "Patients who plateau on PT, structural issues that require manipulation, and post-discharge maintenance. We coordinate directly with your PT plan.",
                    },
                    {
                      title: "Dental & TMJ Co-Management",
                      body:
                        "TMJ dysfunction requires both occlusal and cranial-cervical management. SOT Craniopathy directly addresses the cranial component most TMJ protocols miss.",
                    },
                    {
                      title: "Post-Concussion Syndrome",
                      body:
                        "Persistent post-concussive symptoms — headache, vertigo, cognitive fog, neck pain — often involve cranial dysfunction that responds to SOT cranial protocols.",
                    },
                    {
                      title: "Pediatric Referrals",
                      body:
                        "Torticollis, plagiocephaly, recurrent ear infections, feeding difficulties, sensory processing concerns, ADHD-spectrum kids needing nervous-system support.",
                    },
                    {
                      title: "Chronic Pain Stuck Cases",
                      body:
                        "Chronic low back pain, fibromyalgia, complex headache presentations, and patients who haven't responded to medical-only management.",
                    },
                    {
                      title: "Visceral / Functional",
                      body:
                        "CMRT addresses GERD, functional GI issues, menstrual dysfunction, and adrenal-stress patterns through neurologic reflex work — complementary to medical management.",
                    },
                  ]
              ).map((card) => (
                <div key={card.title} className={styles.providerCard}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to refer ── */}
        <section id="refer-now" className={styles.referBlock}>
          <div className={styles.referInner}>
            <h2 className={styles.referTitle}>
              {isEs ? "Cómo Referir a un Paciente" : "How to Refer a Patient"}
            </h2>
            <p className={styles.referLead}>
              {isEs
                ? "Tres opciones simples. Elija la que funcione mejor para el flujo de trabajo de su oficina."
                : "Three simple options. Choose what works for your office workflow."}
            </p>

            <div className={styles.referRow}>
              <div className={styles.referCard}>
                <div className={styles.referIcon}>📞</div>
                <h3>{isEs ? "Llame a Nuestra Oficina" : "Call Our Office"}</h3>
                <p>
                  {isEs
                    ? "Hable directamente con nuestra recepción. Personal hispanohablante disponible."
                    : "Speak directly with our front desk. Spanish-speaking staff available."}
                </p>
                <a href="tel:+12106851994" className={styles.referLink}>
                  (210) 685-1994
                </a>
              </div>

              <div className={styles.referCard}>
                <div className={styles.referIcon}>✉️</div>
                <h3>{isEs ? "Fax o Correo Electrónico" : "Fax or Email Records"}</h3>
                <p>
                  {isEs
                    ? "Envíe una nota de referido y registros relevantes. Contactaremos al paciente para agendar."
                    : "Send a referral note + relevant records. We'll contact the patient to schedule."}
                </p>
                <a href="mailto:dfossdc@yahoo.com" className={styles.referLink}>
                  dfossdc@yahoo.com
                </a>
              </div>

              <div className={styles.referCard}>
                <div className={styles.referIcon}>📅</div>
                <h3>
                  {isEs ? "El Paciente Agenda Solo" : "Patient Self-Schedule"}
                </h3>
                <p>
                  {isEs
                    ? "Pídale al paciente que mencione su nombre al reservar — le notificaremos."
                    : "Have your patient mention your name when they book — we'll notify you of intake."}
                </p>
                <a
                  href="https://puravidasanantonio.com/special/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.referLink}
                >
                  {isEs ? "Reservar en Línea →" : "Online Booking →"}
                </a>
              </div>
            </div>

            <div className={styles.referBack}>
              <h3>{isEs ? "Lo que le enviamos a usted:" : "What we send back to you:"}</h3>
              <ul>
                <li>
                  ✓{" "}
                  {isEs
                    ? "Carta de hallazgos iniciales dentro de 7 días de la evaluación"
                    : "Initial findings letter within 7 days of evaluation"}
                </li>
                <li>
                  ✓{" "}
                  {isEs
                    ? "Actualización de progreso intermedia en el re-examen de la 6ª visita"
                    : "Mid-course progress update at the 6-visit re-exam"}
                </li>
                <li>
                  ✓{" "}
                  {isEs
                    ? "Resumen de alta con resultados y recomendaciones"
                    : "Discharge summary with outcomes and recommendations"}
                </li>
                <li>
                  ✓{" "}
                  {isEs
                    ? "Llamada telefónica directa para cualquier señal de alarma o preocupación"
                    : "Direct phone call for any red flags or concerns"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Office info ── */}
        <section className={styles.officeBlock}>
          <h2>Pura Vida Chiropractic</h2>
          <p>2318 NW Military Hwy, Suite 103</p>
          <p>San Antonio, TX 78231</p>
          <p style={{ marginTop: "0.85rem" }}>
            <strong>{isEs ? "Teléfono: " : "Phone: "}</strong>
            <a href="tel:+12106851994">(210) 685-1994</a>
          </p>
          <p>
            <strong>{isEs ? "Correo: " : "Email: "}</strong>
            <a href="mailto:dfossdc@yahoo.com">dfossdc@yahoo.com</a>
          </p>
          <p style={{ marginTop: "0.85rem" }}>
            <strong>{isEs ? "Horario: " : "Hours: "}</strong>
            {isEs
              ? "Lunes, Martes y Jueves 7:00 AM – 4:00 PM"
              : "Monday, Tuesday, Thursday 7:00 AM – 4:00 PM"}
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href={`/${lc}`} style={{ color: "#146BA6", textDecoration: "underline" }}>
              {isEs ? "← Volver al Inicio" : "← Back to Home"}
            </Link>
          </p>
        </section>
      </main>
      <Footer locale={lc} />
    </>
  );
}
