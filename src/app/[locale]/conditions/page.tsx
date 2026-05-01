import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { conditionsContent } from "@/lib/conditionsContent";
import styles from "./conditions-index.module.css";

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
  const url = `${BASE_URL}/${locale}/conditions`;

  return {
    title: isEs
      ? "Condiciones que Tratamos | Pura Vida Chiropractic San Antonio"
      : "Conditions We Treat | Pura Vida Chiropractic San Antonio",
    description: isEs
      ? "Más de 90 condiciones tratadas en San Antonio, TX — desde dolor de espalda y migrañas hasta cuidado pediátrico y prenatal. Quiropráctica SOT Avanzada con el Dr. Dan Foss."
      : "Over 90 conditions treated in San Antonio, TX — from back pain and migraines to pediatric and prenatal care. Advanced SOT chiropractic with Dr. Dan Foss.",
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en/conditions`,
        es: `${BASE_URL}/es/conditions`,
        "x-default": `${BASE_URL}/en/conditions`,
      },
    },
    openGraph: {
      title: isEs ? "Condiciones que Tratamos | Pura Vida Chiropractic" : "Conditions We Treat | Pura Vida Chiropractic",
      url,
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

// Categorization of all 99 conditions into intuitive patient-facing groups.
// Order within each group follows highest-search-intent first.
interface Category {
  key: string;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
  slugs: string[];
}

const categories: Category[] = [
  {
    key: "back-neck-spine",
    titleEn: "Back, Neck & Spine",
    titleEs: "Espalda, Cuello y Columna",
    descEn: "The most common reasons patients walk through our door — disc problems, sciatica, postural issues, and chronic spine pain.",
    descEs: "Las razones más comunes por las que los pacientes vienen a nuestra clínica — problemas de disco, ciática, problemas posturales y dolor crónico de columna.",
    slugs: [
      "lower-back-pain",
      "neck-pain",
      "sciatica",
      "disc-problems",
      "bulging-disc",
      "degenerative-disc-disease",
      "pinched-nerve",
      "scoliosis",
      "spinal-stenosis",
      "mid-back-pain",
      "scheuermanns-disease",
      "forward-head-posture",
      "postural-correction",
      "text-neck",
      "rib-subluxation",
      "si-joint-dysfunction",
      "pelvic-girdle-pain",
    ],
  },
  {
    key: "headaches-neurological",
    titleEn: "Headaches & Neurological",
    titleEs: "Dolores de Cabeza y Neurológico",
    descEn: "Many headaches, dizziness, and balance issues originate in the upper cervical spine — and respond well to gentle SOT correction.",
    descEs: "Muchos dolores de cabeza, mareos y problemas de equilibrio se originan en la columna cervical superior — y responden bien a la corrección suave SOT.",
    slugs: [
      "headaches",
      "migraines",
      "cluster-headaches",
      "cervicogenic-headaches",
      "occipital-neuralgia",
      "vertigo",
      "dizziness",
      "tinnitus",
      "balance-disorders",
      "bppv",
      "post-concussion-syndrome",
      "sinus-congestion",
      "ear-infections",
    ],
  },
  {
    key: "pediatric-infants",
    titleEn: "Pediatric & Infants",
    titleEs: "Pediátrico y Bebés",
    descEn: "Gentle, specialty chiropractic care for newborns through teens. Dr. Foss had torticollis as a child himself — pediatric care is the heart of his practice.",
    descEs: "Atención quiropráctica especializada y suave desde recién nacidos hasta adolescentes. El Dr. Foss tuvo tortícolis cuando era niño — el cuidado pediátrico es el corazón de su práctica.",
    slugs: [
      "torticollis",
      "infant-colic",
      "infant-reflux",
      "nursing-latching",
      "tongue-tie",
      "growing-pains",
      "adhd-focus",
      "sensory-processing",
      "bed-wetting-enuresis",
    ],
  },
  {
    key: "pregnancy-postpartum",
    titleEn: "Pregnancy & Postpartum",
    titleEs: "Embarazo y Posparto",
    descEn: "Webster Technique and SOT prenatal care for a more comfortable pregnancy and easier delivery. Postpartum recovery for moms.",
    descEs: "Técnica Webster y atención prenatal SOT para un embarazo más cómodo y un parto más fácil. Recuperación posparto para mamás.",
    slugs: [
      "pregnancy-wellness",
      "breech-presentation",
      "round-ligament-pain",
      "postpartum-recovery",
    ],
  },
  {
    key: "joints-extremities",
    titleEn: "Joints, Sports & Extremities",
    titleEs: "Articulaciones, Deportes y Extremidades",
    descEn: "Shoulder, elbow, wrist, hip, knee, ankle, and foot pain. Sports injuries, repetitive strain, and joint conditions.",
    descEs: "Dolor de hombro, codo, muñeca, cadera, rodilla, tobillo y pie. Lesiones deportivas, esfuerzo repetitivo y condiciones articulares.",
    slugs: [
      "shoulder-arm-pain",
      "hip-knee-foot-ankle",
      "frozen-shoulder",
      "rotator-cuff-injuries",
      "shoulder-impingement",
      "tennis-elbow",
      "golfers-elbow",
      "carpal-tunnel-syndrome",
      "de-quervains-tenosynovitis",
      "trigger-finger",
      "thoracic-outlet-syndrome",
      "piriformis-syndrome",
      "hip-bursitis",
      "it-band-syndrome",
      "runners-knee",
      "meniscus-injuries",
      "shin-splints",
      "achilles-tendonitis",
      "plantar-fasciitis",
      "heel-spur",
      "bunions",
      "hammer-toes",
      "sports-injury",
      "sprains-strains",
      "arthritis-joint-pain",
      "bursitis",
      "tendonitis",
      "repetitive-strain-injury",
      "work-injuries",
    ],
  },
  {
    key: "nerve-pain",
    titleEn: "Nerve Pain & Numbness",
    titleEs: "Dolor Nervioso y Entumecimiento",
    descEn: "Burning, tingling, numbness, and shooting pain from compressed or irritated nerves.",
    descEs: "Ardor, hormigueo, entumecimiento y dolor punzante de nervios comprimidos o irritados.",
    slugs: ["neuropathy-numbness", "numbness-tingling", "radiculopathy"],
  },
  {
    key: "auto-accidents",
    titleEn: "Auto Accidents & Whiplash",
    titleEs: "Accidentes de Auto y Latigazo",
    descEn: "Same-day or next-day evaluation for auto injury patients. Letter of Protection cases welcome.",
    descEs: "Evaluación el mismo día o al día siguiente para pacientes de lesiones de auto. Casos con Letter of Protection bienvenidos.",
    slugs: ["auto-accident-injuries", "whiplash"],
  },
  {
    key: "internal-wellness",
    titleEn: "Internal Health & Wellness",
    titleEs: "Salud Interna y Bienestar",
    descEn: "Many internal-organ and chronic conditions trace back to spinal nerve dysfunction. CMRT addresses the visceral component most chiropractors miss.",
    descEs: "Muchas condiciones de órganos internos y crónicas se remontan a la disfunción nerviosa espinal. CMRT aborda el componente visceral que la mayoría de los quiroprácticos pasan por alto.",
    slugs: [
      "tmj-jaw-pain",
      "fibromyalgia",
      "chronic-pain",
      "chronic-fatigue-syndrome",
      "muscle-spasms",
      "restless-leg-syndrome",
      "costochondritis",
      "bruxism",
      "stress-anxiety",
      "anxiety-depression",
      "insomnia",
      "sleep-apnea",
      "acid-reflux-gerd",
      "digestive-issues-ibs",
      "dysmenorrhea",
      "infertility",
      "constipation",
      "bloating-gas",
      "allergies",
      "immune-system-support",
      "osteoporosis-support",
      "poor-circulation",
    ],
  },
];

export default async function ConditionsIndexPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const lc = (locale === "es" ? "es" : "en") as "en" | "es";

  // Build a slug → condition lookup so we can resolve title+image per slug
  const bySlug = new Map(conditionsContent.map((c) => [c.slug, c]));

  return (
    <>
      <Header locale={lc} currentPath="/conditions" />
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              {isEs ? "Atendemos en San Antonio, TX" : "Serving San Antonio, TX"}
            </p>
            <h1 className={styles.heroTitle}>
              {isEs
                ? "Más de 90 Condiciones que Tratamos"
                : "90+ Conditions We Treat"}
            </h1>
            <p className={styles.heroSub}>
              {isEs
                ? "Desde dolor de espalda crónico hasta cuidado infantil — el Dr. Foss usa SOT, CMRT y Craneopatía para encontrar las causas raíz que otros profesionales pasan por alto. Si su condición no aparece aquí, llámenos: probablemente podemos ayudarle."
                : "From chronic back pain to infant care — Dr. Foss uses SOT, CMRT, and Craniopathy to find root causes other practitioners miss. If your condition isn't listed, call us — we likely can help."}
            </p>
            <div className={styles.heroCtaRow}>
              <a href="tel:+12106851994" className={styles.heroCtaPhone}>
                📞 {isEs ? "Llame: (210) 685-1994" : "Call (210) 685-1994"}
              </a>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.heroCtaBook}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Consulta Gratis →" : "Free Consultation →"}
              </a>
            </div>
          </div>
        </section>

        {/* Category navigation */}
        <section className={styles.tocSection}>
          <div className={styles.tocInner}>
            <p className={styles.tocLabel}>
              {isEs ? "Saltar a una categoría:" : "Jump to a category:"}
            </p>
            <div className={styles.tocLinks}>
              {categories.map((cat) => (
                <a key={cat.key} href={`#${cat.key}`} className={styles.tocLink}>
                  {isEs ? cat.titleEs : cat.titleEn}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat, idx) => (
          <section
            key={cat.key}
            id={cat.key}
            className={`${styles.category} ${idx % 2 === 1 ? styles.categoryAlt : ""}`}
          >
            <div className={styles.categoryInner}>
              <h2 className={styles.categoryTitle}>
                {isEs ? cat.titleEs : cat.titleEn}
              </h2>
              <p className={styles.categoryDesc}>
                {isEs ? cat.descEs : cat.descEn}
              </p>
              <div className={styles.conditionsGrid}>
                {cat.slugs.map((slug) => {
                  const condition = bySlug.get(slug);
                  if (!condition) return null;
                  const label = isEs
                    ? condition.titleEs?.split("|")[0]?.trim() ?? condition.title.split("|")[0].trim()
                    : condition.title.split("|")[0].trim();
                  return (
                    <Link
                      key={slug}
                      href={`/${locale}/conditions/${slug}`}
                      className={styles.conditionCard}
                    >
                      <span className={styles.conditionName}>{label}</span>
                      <span className={styles.conditionArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.sectionInner}>
            <h2 className={styles.finalCtaTitle}>
              {isEs
                ? "¿No Ve Su Condición?"
                : "Don't See Your Condition?"}
            </h2>
            <p className={styles.finalCtaSub}>
              {isEs
                ? "Llámenos. Si podemos ayudarle, lo trataremos. Si no podemos, lo guiaremos al proveedor adecuado. Sin compromisos, sin costo para la consulta inicial."
                : "Call us. If we can help, we will. If we can't, we'll guide you to the right provider. No pressure, no cost for the initial consultation."}
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12106851994" className={styles.heroCtaPhone}>
                📞 (210) 685-1994
              </a>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.heroCtaBookFinal}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reservar Consulta Gratis →" : "Book Free Consultation →"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={lc} />
    </>
  );
}
