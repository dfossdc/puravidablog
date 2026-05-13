import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsuranceSection from "@/components/InsuranceSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import YouTubeFacade from "@/components/YouTubeFacade";
import styles from "./home.module.css";

// Below-fold CLIENT components — dynamic-imported to keep their JS out of
// the initial bundle until the user scrolls down. ReviewCarousel ships ~14 KB
// of "use client" code that doesn't need to load before LCP. Footer +
// InsuranceSection are Server Components (zero client JS) so they stay
// eagerly imported — dynamic-importing them would add overhead without
// shedding any KB.
const ReviewCarousel = dynamic(() => import("@/components/ReviewCarousel"));

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
  const canonical = `${BASE_URL}/${locale}`;
  return {
    // Title leads with the FULL brand "Pura Vida Chiropractic" so Google
    // strongly associates branded queries (pura vida chiropractic,
    // vidasanantonio.com) with this page. GSC May 6 2026 showed those
    // queries stuck at pos 11.9 and 46.8 respectively — brand was at the
    // END of the title (and EN was abbreviated to "Pura Vida"), which
    // weakened the brand-query signal.
    //
    // 2026-05-13 tune: keep the brand-first decision (it's working for
    // branded queries) but pack the head-term tail more tightly to chase
    // the "best chiropractor san antonio" / "chiropractor in san antonio
    // tx" cluster where competitor safamilychiro.com owns position 1-8
    // and Pura Vida sits at 30-40. Replaced "Top Chiropractor" with
    // "Best SOT Chiropractor" — the "Best ___ Chiropractor in San
    // Antonio TX" pattern matches the 260-vol "best chiropractor san
    // antonio" query while "SOT" reinforces the specialty differentiator
    // (you're not a generic family chiropractor, you're THE Advanced SOT
    // certified chiropractor in San Antonio).
    title: isEs
      ? "Pura Vida Chiropractic | Mejor Quiropráctico SOT San Antonio TX"
      : "Pura Vida Chiropractic | Best SOT Chiropractor in San Antonio TX",
    description: isEs
      ? "El Dr. Dan Foss — mejor quiropráctico en San Antonio TX. Ajuste quiropráctico San Antonio, terapia SoftWave, láser Clase IV. Quiropráctico cerca de mí en Stone Oak, Castle Hills, Alamo Heights y Helotes. Técnica SOT, quiropráctico que habla español, más de 23 años de experiencia. ¡Evaluación quiropráctica gratis San Antonio!"
      : "Pura Vida Chiropractic — top-rated chiropractor in San Antonio TX. Dr. Dan Foss DC offers chiropractic adjustment, SoftWave therapy, Class IV laser. Chiropractor near me serving Stone Oak, Castle Hills, Alamo Heights, and Helotes. SOT chiropractic, Spanish-speaking chiropractor in San Antonio TX, 23+ years experience. Free evaluation!",
    keywords: isEs
      ? ["quiropráctico San Antonio", "mejor quiropráctico San Antonio TX", "quiropráctico cerca de mí", "ajuste quiropráctico San Antonio", "quiropráctica SOT San Antonio", "quiropráctico que habla español San Antonio", "terapia SoftWave San Antonio", "láser Clase IV San Antonio"]
      : ["chiropractor San Antonio", "chiropractors in San Antonio TX", "chiropractor in San Antonio TX", "best chiropractor San Antonio TX", "chiropractor near me San Antonio", "chiropractic adjustment San Antonio", "SOT chiropractic San Antonio", "SoftWave therapy San Antonio", "Class IV laser San Antonio", "Spanish speaking chiropractor San Antonio"],
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: isEs
        ? "Pura Vida Chiropractic | Quiropráctico San Antonio TX"
        : "Pura Vida Chiropractic | Top Chiropractor in San Antonio TX",
      description: isEs
        ? "Quiropráctico bilingüe en San Antonio TX. Atendemos Stone Oak, Castle Hills, Alamo Heights y Helotes. Dr. Dan Foss, DC — más de 23 años de experiencia."
        : "Best chiropractor near me in San Antonio TX. Serving Stone Oak, Castle Hills, Alamo Heights, and Helotes. Dr. Dan Foss, DC — 23+ years experience.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/dr-foss-adjusting-patient.jpg",
          width: 1200,
          height: 630,
          alt: "Pura Vida Chiropractic San Antonio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/dr-foss-adjusting-patient.jpg"],
    },
  };
}

const services = [
  {
    slugEn: "chiropractic-care",
    slugEs: "chiropractic-care",
    nameEn: "Chiropractic Care",
    nameEs: "Cuidado Quiropráctico",
    image: "/images/dr-foss-adjusting-patient.webp",
    alt: "Chiropractic care adjustment",
  },
  {
    slugEn: "cranial-chiropractic",
    slugEs: "cranial-chiropractic",
    nameEn: "Cranial Chiropractic",
    nameEs: "Quiropráctica Craneal",
    image: "/images/dr-foss-adjusting-neck.webp",
    alt: "Cranial chiropractic therapy",
  },
  {
    slugEn: "softwave-therapy",
    slugEs: "terapia-softwave",
    nameEn: "SoftWave Therapy",
    nameEs: "Terapia SoftWave",
    image: "/images/softwave.jpg",
    alt: "SoftWave therapy treatment",
  },
  {
    slugEn: "shockwave-therapy",
    slugEs: "terapia-ondas-de-choque",
    nameEn: "Shockwave Therapy",
    nameEs: "Terapia de Ondas de Choque",
    image: "/images/shockwave.jpg",
    alt: "Shockwave therapy treatment",
  },
  {
    slugEn: "pediatric-chiropractic",
    slugEs: "pediatric-chiropractic",
    nameEn: "Pediatric Chiropractic",
    nameEs: "Quiropráctica Pediátrica",
    image: "/images/dr-foss-adjusting-child.webp",
    alt: "Pediatric chiropractic care",
  },
  {
    slugEn: "pregnancy-chiropractic",
    slugEs: "pregnancy-chiropractic",
    nameEn: "Pregnancy Chiropractic",
    nameEs: "Quiropráctica Prenatal",
    image: "/images/pregnant-patient.webp",
    alt: "Pregnancy chiropractic care",
  },
  {
    slugEn: "class-iv-laser",
    slugEs: "laser-clase-iv",
    nameEn: "Class IV Laser",
    nameEs: "Láser Clase IV",
    image: "/images/laser-therapy-knee.webp",
    alt: "Class IV laser therapy",
  },
  {
    slugEn: "latino-community",
    slugEs: "latino-community",
    nameEn: "Latino Community",
    nameEs: "Comunidad Latina",
    image: "/images/conditions/latinofamily.jpg",
    alt: "Bilingual chiropractic care for the Latino community in San Antonio TX",
  },
];

// Homepage condition cards — curated 8 highest-intent picks (handoff Change #5).
// The full ~90-condition library still lives at /[locale]/conditions/[slug] for SEO.
const homepageConditions = [
  { label: "Lower Back Pain",        labelEs: "Dolor de Espalda Baja",      image: "/images/conditions/backpain.jpg",        alt: "Lower back pain chiropractor San Antonio",                  href: "/[locale]/conditions/lower-back-pain" },
  { label: "Neck Pain",              labelEs: "Dolor de Cuello",            image: "/images/conditions/neck.jpg",            alt: "Neck pain chiropractor San Antonio",                        href: "/[locale]/conditions/neck-pain" },
  { label: "Headaches & Migraines",  labelEs: "Dolores de Cabeza y Migrañas", image: "/images/conditions/headache.jpg",      alt: "Headache and migraine relief San Antonio chiropractor",     href: "/[locale]/conditions/headaches" },
  { label: "Sciatica",               labelEs: "Ciática",                    image: "/images/conditions/sciatica.jpg",        alt: "Sciatica nerve pain relief San Antonio chiropractor",       href: "/[locale]/conditions/sciatica" },
  { label: "Auto Accident Injuries", labelEs: "Lesiones de Auto",           image: "/images/conditions/autoaccident.jpg",    alt: "Auto accident injury chiropractor San Antonio",             href: "/[locale]/conditions/auto-accident-injuries" },
  { label: "Pregnancy & Prenatal",   labelEs: "Embarazo y Prenatal",        image: "/images/conditions/pregnancy.webp",      alt: "Pregnancy chiropractic care San Antonio",                   href: "/[locale]/conditions/pregnancy-wellness" },
  { label: "Pediatric & Infant Care",labelEs: "Cuidado Pediátrico y de Bebés", image: "/images/conditions/torticollis.jpg",  alt: "Pediatric and infant chiropractic San Antonio",             href: "/[locale]/services/pediatric-chiropractor" },
  { label: "TMJ & Jaw Pain",         labelEs: "ATM y Dolor de Mandíbula",   image: "/images/conditions/tmj.webp",            alt: "TMJ and jaw pain chiropractor San Antonio",                 href: "/[locale]/conditions/tmj-jaw-pain" },
];

const conditions = [
  { label: "Headaches",                            labelEs: "Dolores de Cabeza",                    image: "/images/conditions/headache.jpg",        alt: "Headache and migraine relief San Antonio chiropractor",        href: "/[locale]/conditions/headaches" },
  { label: "Auto Accident Injuries",               labelEs: "Lesiones por Accidente de Auto",       image: "/images/conditions/autoaccident.jpg",    alt: "Auto accident injury chiropractor San Antonio",               href: "/[locale]/conditions/auto-accident-injuries" },
  { label: "Disc Problems",                        labelEs: "Problemas de Disco",                   image: "/images/conditions/discproblems.jpg",    alt: "Disc injury spine pain San Antonio chiropractor",             href: "/[locale]/conditions/disc-problems" },
  { label: "Sports Injury",                        labelEs: "Lesiones Deportivas",                  image: "/images/conditions/sports-injury.webp",  alt: "Sports injury treatment San Antonio chiropractor",            href: "/[locale]/conditions/sports-injury" },
  { label: "Neck Pain",                            labelEs: "Dolor de Cuello",                      image: "/images/conditions/neck.jpg",            alt: "Woman with neck pain San Antonio chiropractor",               href: "/[locale]/conditions/neck-pain" },
  { label: "Arthritis and Joint Pain",             labelEs: "Artritis y Dolor en las Articulaciones", image: "/images/conditions/arthritis.webp",    alt: "Arthritis and joint pain treatment San Antonio chiropractor", href: "/[locale]/conditions/arthritis-joint-pain" },
  { label: "Sciatica",                             labelEs: "Ciática",                              image: "/images/conditions/sciatica.jpg",        alt: "Sciatica nerve pain relief San Antonio chiropractor",         href: "/[locale]/conditions/sciatica" },
  { label: "TMJ & Jaw Pain",                       labelEs: "ATM y Dolor de Mandíbula",             image: "/images/conditions/tmj.webp",            alt: "TMJ and jaw pain treatment San Antonio chiropractor",         href: "/[locale]/conditions/tmj-jaw-pain" },
  { label: "Lower Back Pain",                      labelEs: "Dolor de Espalda Baja",                image: "/images/conditions/backpain.jpg",        alt: "Person with lower back pain San Antonio chiropractor",        href: "/[locale]/conditions/lower-back-pain" },
  { label: "Neuropathy & Numbness",                labelEs: "Neuropatía y Entumecimiento",          image: "/images/conditions/neuropathy.webp",     alt: "Neuropathy and numbness treatment San Antonio chiropractor",  href: "/[locale]/conditions/neuropathy-numbness" },
  { label: "Hip, Knee, Foot & Ankle",              labelEs: "Cadera, Rodilla, Pie y Tobillo",       image: "/images/conditions/hipkneefootankle.jpg",alt: "Hip knee foot ankle pain San Antonio chiropractor",           href: "/[locale]/conditions/hip-knee-foot-ankle" },
  { label: "Pregnancy Pain & Wellness",            labelEs: "Dolor en el Embarazo y Bienestar",     image: "/images/conditions/pregnancy.webp",      alt: "Pregnancy chiropractic care San Antonio",                     href: "/[locale]/conditions/pregnancy-wellness" },
  { label: "Plantar Fasciitis",                    labelEs: "Fascitis Plantar",                     image: "/images/conditions/footpain.jpg",        alt: "Plantar fasciitis treatment San Antonio chiropractor",        href: "/[locale]/conditions/plantar-fasciitis" },
  { label: "Postural Correction",                  labelEs: "Corrección Postural",                  image: "/images/conditions/postural-correction.webp", alt: "Corrective exercise and postural correction San Antonio", href: "/[locale]/conditions/postural-correction" },
  { label: "Shoulder, Elbow, Wrist & Hand",        labelEs: "Hombro, Codo, Muñeca y Mano",         image: "/images/conditions/shoulderpain.jpg",    alt: "Shoulder elbow wrist hand pain San Antonio chiropractor",     href: "/[locale]/conditions/shoulder-arm-pain" },

  // HEAD & NEUROLOGICAL
  { label: "Migraines",                  labelEs: "Migrañas",                          image: "/images/conditions/migrane.jpg",               alt: "Middle-aged woman holding head with migraine pain - chiropractor San Antonio TX",                   title: "Migraine relief at Pura Vida Chiropractic San Antonio",            href: "/[locale]/conditions/migraines" },
  { label: "Vertigo",                    labelEs: "Vértigo",                           image: "/images/conditions/vertigo.jpg",               alt: "3D illustration of vertigo and inner ear dizziness - chiropractor San Antonio TX",                  title: "Vertigo treatment at Pura Vida Chiropractic San Antonio",          href: "/[locale]/conditions/vertigo" },
  { label: "Dizziness",                  labelEs: "Mareos",                            image: "/images/conditions/dizziness.jpg",             alt: "Woman with dizziness and head pain - chiropractor San Antonio TX",                                  title: "Dizziness relief at Pura Vida Chiropractic San Antonio",           href: "/[locale]/conditions/dizziness" },
  { label: "Tinnitus (Ear Ringing)",     labelEs: "Tinnitus (Zumbido en el Oído)",    image: "/images/conditions/vertigo.jpg",              alt: "Woman with neck and head tension causing tinnitus ear ringing - chiropractor San Antonio TX",       title: "Tinnitus ear ringing treatment San Antonio chiropractor",           href: "/[locale]/conditions/tinnitus" },
  { label: "Sinus Congestion",           labelEs: "Congestión Sinusal",               image: "/images/conditions/sinuscongestion.jpg",       alt: "Person with facial pressure and sinus congestion pain - chiropractor San Antonio TX",               title: "Sinus congestion relief San Antonio chiropractor",                 href: "/[locale]/conditions/sinus-congestion" },
  { label: "Ear Infections",             labelEs: "Infecciones del Oído",             image: "/images/conditions/sinuscongestion.jpg",         alt: "Woman with neck and ear pain from ear infection - pediatric chiropractor San Antonio TX",            title: "Ear infection relief pediatric chiropractor San Antonio",           href: "/[locale]/conditions/ear-infections" },
  { label: "Chronic Fatigue Syndrome",   labelEs: "Síndrome de Fatiga Crónica",       image: "/images/conditions/chronicfatiguesyndrome.jpg",alt: "Exhausted woman with chronic fatigue syndrome head pain - chiropractor San Antonio TX",              title: "Chronic fatigue syndrome relief San Antonio chiropractor",          href: "/[locale]/conditions/chronic-fatigue-syndrome" },
  { label: "Fibromyalgia",               labelEs: "Fibromialgia",                     image: "/images/conditions/arthritic-hands.jpg",       alt: "Arthritic hands with fibromyalgia joint pain - chiropractor San Antonio TX",                        title: "Fibromyalgia pain relief San Antonio chiropractor",                href: "/[locale]/conditions/fibromyalgia" },
  { label: "Insomnia",                   labelEs: "Insomnio",                         image: "/images/conditions/insomnia.jpg",              alt: "Person with poor posture and spinal tension causing insomnia - chiropractor San Antonio TX",        title: "Insomnia treatment San Antonio chiropractor",                      href: "/[locale]/conditions/insomnia" },
  { label: "Sleep Apnea",                labelEs: "Apnea del Sueño",                  image: "/images/conditions/sleepapnea.jpg",            alt: "Woman with neck tension contributing to sleep apnea - chiropractor San Antonio TX",                 title: "Sleep apnea relief San Antonio chiropractor",                      href: "/[locale]/conditions/sleep-apnea" },

  // DIGESTIVE & INTERNAL
  { label: "Reflux / GERD",              labelEs: "Reflujo / ERGE",                   image: "/images/conditions/reflux.jpg",                alt: "Acid reflux GERD treatment San Antonio chiropractor",                                               title: "Reflux GERD relief San Antonio chiropractor",                      href: "/[locale]/conditions/acid-reflux-gerd" },
  { label: "Digestive Issues / IBS",     labelEs: "Problemas Digestivos / SII",       image: "/images/conditions/ibs.jpg",                   alt: "IBS digestive issues relief San Antonio chiropractor",                                              title: "IBS digestive issues relief San Antonio chiropractor",             href: "/[locale]/conditions/digestive-issues-ibs" },
  { label: "Dysmenorrhea",               labelEs: "Dismenorrea",                      image: "/images/conditions/dysmenorrhea.jpg",          alt: "Painful period dysmenorrhea relief San Antonio chiropractor",                                        title: "Painful period dysmenorrhea relief San Antonio chiropractor",       href: "/[locale]/conditions/dysmenorrhea" },
  { label: "Infertility Issues",         labelEs: "Problemas de Fertilidad",          image: "/images/conditions/infertility.jpg",           alt: "Pregnant woman with discomfort - infertility chiropractic care San Antonio TX",                     title: "Infertility chiropractic care San Antonio TX",                     href: "/[locale]/conditions/infertility" },
  { label: "Breech Presentation",        labelEs: "Bebé en Posición Podálica",        image: "/images/conditions/breechbaby.jpg",            alt: "Pregnant woman with breech presentation Webster technique - chiropractor San Antonio TX",           title: "Breech Webster technique San Antonio chiropractor",    href: "/[locale]/conditions/breech-presentation" },

  // INFANT & PEDIATRIC
  { label: "Colic (Infant)",             labelEs: "Cólico (Bebé)",                    image: "/images/conditions/infantcolic.jpg",           alt: "Infant colic relief pediatric chiropractor San Antonio",                                             title: "Infant colic relief pediatric chiropractor San Antonio",            href: "/[locale]/conditions/infant-colic" },
  { label: "Reflux (Infant)",            labelEs: "Reflujo (Bebé)",                   image: "/images/conditions/infantreflux.jpg",          alt: "Infant reflux treatment pediatric chiropractor San Antonio",                                         title: "Infant reflux treatment pediatric chiropractor San Antonio",        href: "/[locale]/conditions/infant-reflux" },
  { label: "Nursing / Latching",         labelEs: "Lactancia / Agarre",               image: "/images/conditions/nursinglactation.jpg",      alt: "Nursing latching difficulties chiropractor San Antonio TX",                                          title: "Nursing latching difficulties chiropractor San Antonio TX",         href: "/[locale]/conditions/nursing-latching" },
  { label: "Torticollis",                labelEs: "Tortícolis",                       image: "/images/conditions/torticollis.jpg",           alt: "Woman with neck pain and restricted rotation from torticollis - chiropractor San Antonio TX",        title: "Torticollis treatment chiropractor San Antonio TX",                href: "/[locale]/conditions/torticollis" },
  { label: "Growing Pains",              labelEs: "Dolores de Crecimiento",           image: "/images/conditions/growingpains.jpg",          alt: "Illustration of knee pain from growing pains - pediatric chiropractor San Antonio TX",               title: "Growing pains pediatric chiropractor San Antonio TX",              href: "/[locale]/conditions/growing-pains" },
  { label: "ADHD / Focus Issues",        labelEs: "TDAH / Problemas de Concentración", image: "/images/conditions/adhd.jpg",                alt: "ADHD focus issues pediatric chiropractor San Antonio TX",                                            title: "ADHD focus issues pediatric chiropractor San Antonio TX",           href: "/[locale]/conditions/adhd-focus" },
  { label: "Sensory Processing",         labelEs: "Procesamiento Sensorial",          image: "/images/conditions/sensoryprocessing.jpg",     alt: "Sensory processing disorder chiropractor San Antonio TX",                                            title: "Sensory processing disorder chiropractor San Antonio TX",           href: "/[locale]/conditions/sensory-processing" },
  { label: "Tongue Tie",                 labelEs: "Frenillo Lingual",                 image: "/images/conditions/tonguetie.jpg",             alt: "Tongue tie ankyloglossia infant pediatric chiropractor San Antonio TX",                              title: "Tongue tie treatment pediatric chiropractor San Antonio TX",        href: "/[locale]/conditions/tongue-tie" },

  // SPINE & POSTURE
  { label: "Scoliosis",                  labelEs: "Escoliosis",                       image: "/images/conditions/scoliosis.jpg",             alt: "3D illustration of spine with scoliosis lateral curvature - chiropractor San Antonio TX",            title: "Scoliosis treatment chiropractor San Antonio TX",                  href: "/[locale]/conditions/scoliosis" },
  { label: "Scheuermann's Disease",      labelEs: "Enfermedad de Scheuermann",        image: "/images/conditions/scheumanns.jpg",            alt: "X-ray showing Scheuermann's disease thoracic kyphosis - chiropractor San Antonio TX",               title: "Scheuermann's disease treatment chiropractor San Antonio TX",       href: "/[locale]/conditions/scheuermanns-disease" },
  { label: "Forward Head Posture",       labelEs: "Postura de Cabeza Adelantada",     image: "/images/conditions/forwardheadposture.jpg",    alt: "Person with forward head posture and spinal misalignment - chiropractor San Antonio TX",            title: "Forward head posture tech neck chiropractor San Antonio TX",        href: "/[locale]/conditions/forward-head-posture" },
  { label: "Thoracic Outlet Syndrome",   labelEs: "Síndrome del Outlet Torácico",    image: "/images/conditions/thoracicoutletsyndrome.jpg",alt: "Medical illustration of thoracic outlet syndrome brachial plexus anatomy - chiropractor San Antonio TX", title: "Thoracic outlet syndrome treatment San Antonio chiropractor", href: "/[locale]/conditions/thoracic-outlet-syndrome" },

  // SHOULDER & ARM
  { label: "Frozen Shoulder",            labelEs: "Hombro Congelado",                image: "/images/conditions/frozenshoulder.jpg",        alt: "Separated shoulder joint X-ray for frozen shoulder - chiropractor San Antonio TX",                 title: "Frozen shoulder chiropractor San Antonio TX",   href: "/[locale]/conditions/frozen-shoulder" },
  { label: "Rotator Cuff Injuries",      labelEs: "Lesiones del Manguito Rotador",   image: "/images/conditions/rotatorcufftear.jpg",       alt: "Rotator cuff tear medical image - chiropractor San Antonio TX",                                      title: "Rotator cuff injury treatment San Antonio chiropractor",            href: "/[locale]/conditions/rotator-cuff-injuries" },
  { label: "Tennis Elbow",               labelEs: "Codo de Tenista",                 image: "/images/conditions/tenniselbow.jpg",           alt: "Tennis elbow lateral epicondylitis photo - chiropractor San Antonio TX",                             title: "Tennis elbow lateral epicondylitis San Antonio chiropractor",       href: "/[locale]/conditions/tennis-elbow" },
  { label: "Golfer's Elbow",             labelEs: "Codo de Golfista",                image: "/images/conditions/golferselbow.jpg",          alt: "Office worker with medial elbow and arm pain from golfer's elbow - chiropractor San Antonio TX",   title: "Golfer's elbow medial epicondylitis San Antonio chiropractor",      href: "/[locale]/conditions/golfers-elbow" },
  { label: "Carpal Tunnel Syndrome",     labelEs: "Síndrome del Túnel Carpiano",     image: "/images/conditions/carpal-tunnel.jpg",         alt: "Hand with untreated carpal tunnel syndrome nerve compression - chiropractor San Antonio TX",         title: "Carpal tunnel syndrome treatment San Antonio chiropractor",         href: "/[locale]/conditions/carpal-tunnel-syndrome" },
  { label: "De Quervain's Tenosynovitis", labelEs: "Tenosinovitis de De Quervain",   image: "/images/conditions/dequervain.jpg",            alt: "Finkelstein test for De Quervain's tenosynovitis thumb wrist pain - chiropractor San Antonio TX",  title: "De Quervain's treatment San Antonio chiropractor",    href: "/[locale]/conditions/de-quervains-tenosynovitis" },
  { label: "Trigger Finger",             labelEs: "Dedo en Gatillo",                 image: "/images/conditions/trigger-finger.jpg",        alt: "Trigger finger locking condition of the hand - chiropractor San Antonio TX",                         title: "Trigger finger treatment San Antonio chiropractor",                href: "/[locale]/conditions/trigger-finger" },

  // MID BACK & CORE
  { label: "Rib Subluxation",            labelEs: "Subluxación de Costilla",         image: "/images/conditions/rib-xray.jpg",              alt: "X-ray of rib fracture and rib subluxation - chiropractor San Antonio TX",                           title: "Rib subluxation San Antonio chiropractor",    href: "/[locale]/conditions/rib-subluxation" },
  { label: "Mid-Back Pain",              labelEs: "Dolor de Espalda Media",          image: "/images/conditions/midbackpain.jpg",           alt: "Person with mid-back thoracic pain highlighted in red - chiropractor San Antonio TX",                title: "Mid back thoracic pain treatment San Antonio chiropractor",         href: "/[locale]/conditions/mid-back-pain" },
  { label: "Pelvic Girdle Pain",         labelEs: "Dolor de Cintura Pélvica",        image: "/images/conditions/pelvicgirdlepain.jpg",      alt: "Pregnant woman with pelvic girdle pain - chiropractor San Antonio TX",                               title: "Pelvic girdle pain treatment San Antonio chiropractor",             href: "/[locale]/conditions/pelvic-girdle-pain" },
  { label: "SI Joint Dysfunction",       labelEs: "Disfunción de la Articulación SI", image: "/images/conditions/si-joint.png",             alt: "Sacroiliac joint anatomy diagram SI joint dysfunction - chiropractor San Antonio TX",                title: "Sacroiliac SI joint dysfunction San Antonio chiropractor",          href: "/[locale]/conditions/si-joint-dysfunction" },

  // HIP & LOWER BODY
  { label: "Piriformis Syndrome",        labelEs: "Síndrome del Piriforme",          image: "/images/conditions/piriformis.jpg",            alt: "Piriformis syndrome muscle anatomy diagram - chiropractor San Antonio TX",                          title: "Piriformis syndrome treatment San Antonio chiropractor",            href: "/[locale]/conditions/piriformis-syndrome" },
  { label: "Hip Bursitis",               labelEs: "Bursitis de Cadera",              image: "/images/conditions/hipbursitis.jpg",           alt: "3D model showing hip bursitis joint pain - chiropractor San Antonio TX",                             title: "Hip bursitis treatment San Antonio chiropractor",                   href: "/[locale]/conditions/hip-bursitis" },
  { label: "IT Band Syndrome",           labelEs: "Síndrome de la Banda IT",         image: "/images/conditions/knee-pain-diagram.png",     alt: "Knee pain diagram showing IT band syndrome outer knee - chiropractor San Antonio TX",                title: "IT band syndrome treatment San Antonio chiropractor",               href: "/[locale]/conditions/it-band-syndrome" },
  { label: "Runner's Knee",              labelEs: "Rodilla del Corredor",            image: "/images/conditions/runnersknee.jpg",           alt: "Runner holding knee with patellofemoral runner's knee pain - chiropractor San Antonio TX",          title: "Runner's knee patellofemoral pain San Antonio chiropractor",        href: "/[locale]/conditions/runners-knee" },
  { label: "Meniscus Injuries",          labelEs: "Lesiones de Menisco",             image: "/images/conditions/meniscusinjury.jpg",        alt: "Anatomical diagram of knee meniscus injury - chiropractor San Antonio TX",                           title: "Meniscus injury treatment San Antonio chiropractor",                href: "/[locale]/conditions/meniscus-injuries" },

  // LOWER LEG & FOOT
  { label: "Shin Splints",               labelEs: "Periostitis Tibial",              image: "/images/conditions/shinsplint.jpg",            alt: "Tibia bone anatomy showing shin splints medial tibial stress syndrome - chiropractor San Antonio TX", title: "Shin splints treatment San Antonio chiropractor",              href: "/[locale]/conditions/shin-splints" },
  { label: "Achilles Tendonitis",        labelEs: "Tendinitis de Aquiles",           image: "/images/conditions/achillestendonitis.jpg",    alt: "Labeled anatomy of Achilles insertional calcific tendinosis - chiropractor San Antonio TX",          title: "Achilles tendonitis treatment San Antonio chiropractor",            href: "/[locale]/conditions/achilles-tendonitis" },
  { label: "Bunions",                    labelEs: "Juanetes",                        image: "/images/conditions/bunion.jpg",                alt: "Foot with hallux valgus bunion deformity - chiropractor San Antonio TX",                             title: "Bunion pain relief San Antonio chiropractor",                       href: "/[locale]/conditions/bunions" },
  { label: "Heel Spur",                  labelEs: "Espolón Calcáneo",                image: "/images/conditions/heelspur.jpg",              alt: "Heel spur calcaneal spur treatment shockwave therapy chiropractor San Antonio TX",                   title: "Heel spur treatment shockwave therapy San Antonio TX",              href: "/[locale]/conditions/heel-spur" },
  { label: "Hammer Toes",                labelEs: "Dedos en Martillo",               image: "/images/conditions/hammertoes.jpg",            alt: "Foot pain and hammer toes treatment - chiropractor San Antonio TX",                                  title: "Hammer toes foot pain San Antonio chiropractor",                    href: "/[locale]/conditions/hammer-toes" },
  { label: "Sprains and Strains",        labelEs: "Esguinces y Distensiones",        image: "/images/conditions/sprainandstrain.jpg",       alt: "Swollen sprained ankle 30 minutes after injury - chiropractor San Antonio TX",                       title: "Sprains and strains treatment San Antonio chiropractor",            href: "/[locale]/conditions/sprains-strains" },

  // VASCULAR & GENERAL WELLNESS
  { label: "Restless Leg Syndrome",      labelEs: "Síndrome de Piernas Inquietas",   image: "/images/conditions/restlesslegsyndrome.jpg",  alt: "Lower leg anatomy showing restless leg syndrome nerve and muscle areas - chiropractor San Antonio TX", title: "Restless leg syndrome relief San Antonio chiropractor",         href: "/[locale]/conditions/restless-leg-syndrome" },
  { label: "Poor Circulation",           labelEs: "Mala Circulación",                image: "/images/conditions/poorcirculation.jpg",       alt: "Lower body circulation anatomy - poor circulation treatment San Antonio chiropractor",                title: "Poor circulation treatment San Antonio chiropractor",               href: "/[locale]/conditions/poor-circulation" },
  { label: "Stress & Anxiety Tension",   labelEs: "Tensión por Estrés y Ansiedad",   image: "/images/conditions/stressanxietytension.jpg", alt: "Woman with stress and anxiety tension holding aching head - chiropractor San Antonio TX",              title: "Stress anxiety tension relief San Antonio chiropractor",            href: "/[locale]/conditions/stress-anxiety" },

  // NEW CONDITIONS — TIER 1: HIGH SEARCH VOLUME
  { label: "Spinal Stenosis",             labelEs: "Estenosis Espinal",                   image: "/images/conditions/spinal-stenosis.jpg",       alt: "Spinal stenosis narrowing of spinal canal - chiropractor San Antonio TX",                            title: "Spinal stenosis treatment San Antonio chiropractor",                href: "/[locale]/conditions/spinal-stenosis" },
  { label: "Whiplash",                    labelEs: "Latigazo Cervical",                   image: "/images/conditions/whiplash.jpg",              alt: "Whiplash neck injury from car accident - chiropractor San Antonio TX",                               title: "Whiplash injury treatment San Antonio chiropractor",                href: "/[locale]/conditions/whiplash" },
  { label: "Pinched Nerve",               labelEs: "Nervio Comprimido",                   image: "/images/conditions/pinched-nerve.jpg",         alt: "Pinched nerve compression in spine - chiropractor San Antonio TX",                                   title: "Pinched nerve treatment San Antonio chiropractor",                  href: "/[locale]/conditions/pinched-nerve" },
  { label: "Degenerative Disc Disease",   labelEs: "Enfermedad Degenerativa del Disco",   image: "/images/conditions/discproblems.jpg",     alt: "Degenerative disc disease spinal degeneration - chiropractor San Antonio TX",                        title: "Degenerative disc disease treatment San Antonio chiropractor",      href: "/[locale]/conditions/degenerative-disc-disease" },
  { label: "Bulging Disc",                labelEs: "Disco Abultado",                      image: "/images/conditions/bulging-disc.jpg",          alt: "Bulging disc pressing on spinal nerve - chiropractor San Antonio TX",                                title: "Bulging disc treatment San Antonio chiropractor",                   href: "/[locale]/conditions/bulging-disc" },
  { label: "Chronic Pain",                labelEs: "Dolor Crónico",                       image: "/images/conditions/chronic-pain.jpg",          alt: "Chronic pain management with chiropractic care - chiropractor San Antonio TX",                       title: "Chronic pain management San Antonio chiropractor",                  href: "/[locale]/conditions/chronic-pain" },
  { label: "Muscle Spasms",               labelEs: "Espasmos Musculares",                 image: "/images/conditions/muscle-spasms.jpg",         alt: "Muscle spasm tension in back and neck - chiropractor San Antonio TX",                                title: "Muscle spasm relief San Antonio chiropractor",                      href: "/[locale]/conditions/muscle-spasms" },

  // NEW CONDITIONS — TIER 2: SOT/CMRT DIFFERENTIATORS
  { label: "Postpartum Recovery",          labelEs: "Recuperación Posparto",               image: "/images/conditions/postpartum-recovery.jpg",   alt: "Postpartum recovery chiropractic care for new mothers - chiropractor San Antonio TX",                title: "Postpartum recovery chiropractic San Antonio",                      href: "/[locale]/conditions/postpartum-recovery" },
  { label: "Round Ligament Pain",          labelEs: "Dolor del Ligamento Redondo",         image: "/images/conditions/round-ligament-pain.jpg",   alt: "Round ligament pain during pregnancy - chiropractor San Antonio TX",                                 title: "Round ligament pain pregnancy chiropractor San Antonio",            href: "/[locale]/conditions/round-ligament-pain" },
  { label: "Post-Concussion Syndrome",     labelEs: "Síndrome Post-Conmoción",            image: "/images/conditions/post-concussion-syndrome.jpg",       alt: "Post-concussion syndrome cranial adjusting - chiropractor San Antonio TX",                           title: "Post-concussion syndrome treatment San Antonio chiropractor",       href: "/[locale]/conditions/post-concussion-syndrome" },
  { label: "BPPV (Positional Vertigo)",    labelEs: "VPPB (Vértigo Posicional)",          image: "/images/conditions/bppv.jpg",                  alt: "BPPV benign paroxysmal positional vertigo treatment - chiropractor San Antonio TX",                  title: "BPPV positional vertigo treatment San Antonio chiropractor",        href: "/[locale]/conditions/bppv" },
  { label: "Immune System Support",        labelEs: "Apoyo al Sistema Inmunológico",      image: "/images/conditions/immune-support.jpg",        alt: "Immune system support through chiropractic care - chiropractor San Antonio TX",                      title: "Immune system support San Antonio chiropractor",                    href: "/[locale]/conditions/immune-system-support" },
  { label: "Bed-Wetting (Enuresis)",       labelEs: "Enuresis (Mojar la Cama)",           image: "/images/conditions/bedwetting.jpg",            alt: "Pediatric bed-wetting enuresis chiropractic care - chiropractor San Antonio TX",                     title: "Bed-wetting enuresis pediatric chiropractor San Antonio",           href: "/[locale]/conditions/bed-wetting-enuresis" },
  { label: "Constipation",                 labelEs: "Estreñimiento",                      image: "/images/conditions/constipation.jpg",          alt: "Constipation digestive relief chiropractic care - chiropractor San Antonio TX",                      title: "Constipation relief San Antonio chiropractor",                      href: "/[locale]/conditions/constipation" },
  { label: "Bloating & Gas",               labelEs: "Hinchazón y Gases",                  image: "/images/conditions/bloating.jpg",              alt: "Bloating and gas digestive relief chiropractic care - chiropractor San Antonio TX",                  title: "Bloating gas relief San Antonio chiropractor",                      href: "/[locale]/conditions/bloating-gas" },

  // NEW CONDITIONS — TIER 3: COMPLETENESS
  { label: "Radiculopathy",               labelEs: "Radiculopatía",                       image: "/images/conditions/radiculopathy.jpg",         alt: "Radiculopathy nerve root compression treatment - chiropractor San Antonio TX",                       title: "Radiculopathy treatment San Antonio chiropractor",                  href: "/[locale]/conditions/radiculopathy" },
  { label: "Cluster Headaches",            labelEs: "Cefaleas en Racimo",                  image: "/images/conditions/cluster-headaches.jpg",     alt: "Cluster headache severe pain relief - chiropractor San Antonio TX",                                  title: "Cluster headache relief San Antonio chiropractor",                  href: "/[locale]/conditions/cluster-headaches" },
  { label: "Occipital Neuralgia",          labelEs: "Neuralgia Occipital",                 image: "/images/conditions/occipital-neuralgia.jpg",   alt: "Occipital neuralgia nerve pain back of head - chiropractor San Antonio TX",                          title: "Occipital neuralgia treatment San Antonio chiropractor",            href: "/[locale]/conditions/occipital-neuralgia" },
  { label: "Shoulder Impingement",         labelEs: "Pinzamiento de Hombro",               image: "/images/conditions/shoulder-impingement.jpg",  alt: "Shoulder impingement syndrome treatment - chiropractor San Antonio TX",                              title: "Shoulder impingement treatment San Antonio chiropractor",           href: "/[locale]/conditions/shoulder-impingement" },
  { label: "Bursitis",                     labelEs: "Bursitis",                            image: "/images/conditions/bursitis.jpg",              alt: "Bursitis joint inflammation treatment - chiropractor San Antonio TX",                                title: "Bursitis treatment San Antonio chiropractor",                       href: "/[locale]/conditions/bursitis" },
  { label: "Tendonitis",                   labelEs: "Tendinitis",                          image: "/images/conditions/tendonitis.jpg",            alt: "Tendonitis inflammation treatment - chiropractor San Antonio TX",                                    title: "Tendonitis treatment San Antonio chiropractor",                     href: "/[locale]/conditions/tendonitis" },
  { label: "Work Injuries",                labelEs: "Lesiones Laborales",                  image: "/images/conditions/work-injuries.jpg",         alt: "Work injury occupational injury treatment - chiropractor San Antonio TX",                            title: "Work injury treatment San Antonio chiropractor",                    href: "/[locale]/conditions/work-injuries" },
  { label: "Repetitive Strain Injury",     labelEs: "Lesión por Esfuerzo Repetitivo",     image: "/images/conditions/tendonitis.jpg",                   alt: "Repetitive strain injury RSI treatment - chiropractor San Antonio TX",                               title: "Repetitive strain injury treatment San Antonio chiropractor",       href: "/[locale]/conditions/repetitive-strain-injury" },
  { label: "Text Neck",                    labelEs: "Cuello de Texto",                     image: "/images/conditions/text-neck.jpg",             alt: "Text neck tech neck posture from phone use - chiropractor San Antonio TX",                           title: "Text neck tech neck treatment San Antonio chiropractor",            href: "/[locale]/conditions/text-neck" },
  { label: "Cervicogenic Headaches",       labelEs: "Cefaleas Cervicogénicas",            image: "/images/conditions/cervicogenic-headaches.jpg",alt: "Cervicogenic headache from neck dysfunction - chiropractor San Antonio TX",                          title: "Cervicogenic headache treatment San Antonio chiropractor",          href: "/[locale]/conditions/cervicogenic-headaches" },
  { label: "Osteoporosis Support",         labelEs: "Apoyo para Osteoporosis",             image: "/images/conditions/osteoporosis-support.jpg",          alt: "Osteoporosis bone density support chiropractic care - chiropractor San Antonio TX",                  title: "Osteoporosis support San Antonio chiropractor",                     href: "/[locale]/conditions/osteoporosis-support" },
  { label: "Costochondritis",              labelEs: "Costocondritis",                      image: "/images/conditions/costochondritis.jpg",       alt: "Costochondritis chest wall rib pain treatment - chiropractor San Antonio TX",                        title: "Costochondritis treatment San Antonio chiropractor",                href: "/[locale]/conditions/costochondritis" },
  { label: "Balance Disorders",            labelEs: "Trastornos del Equilibrio",           image: "/images/conditions/balance-disorders.jpg",     alt: "Balance disorders vestibular treatment - chiropractor San Antonio TX",                               title: "Balance disorder treatment San Antonio chiropractor",               href: "/[locale]/conditions/balance-disorders" },
  { label: "Numbness & Tingling",          labelEs: "Entumecimiento y Hormigueo",         image: "/images/conditions/numbness-tingling.jpg",     alt: "Numbness tingling in hands and feet treatment - chiropractor San Antonio TX",                        title: "Numbness tingling treatment San Antonio chiropractor",              href: "/[locale]/conditions/numbness-tingling" },
  { label: "Bruxism (Jaw Clenching)",      labelEs: "Bruxismo (Apretar la Mandíbula)",    image: "/images/conditions/bruxism.jpg",               alt: "Bruxism jaw clenching teeth grinding treatment - chiropractor San Antonio TX",                       title: "Bruxism jaw clenching treatment San Antonio chiropractor",          href: "/[locale]/conditions/bruxism" },
  { label: "Allergies",                    labelEs: "Alergias",                            image: "/images/conditions/allergies.jpg",             alt: "Allergy relief immune nervous system chiropractic - chiropractor San Antonio TX",                    title: "Allergy relief San Antonio chiropractor",                           href: "/[locale]/conditions/allergies" },
  { label: "Anxiety & Depression",         labelEs: "Ansiedad y Depresión",               image: "/images/conditions/anxiety-depression.jpg",    alt: "Anxiety depression nervous system regulation - chiropractor San Antonio TX",                         title: "Anxiety depression relief San Antonio chiropractor",                href: "/[locale]/conditions/anxiety-depression" },
];

const videoTestimonials = [
  { id: "JrWGLXMUjTQ", titleEn: "Patient Testimony", titleEs: "Testimonio Paciente" },
  { id: "PiY9pCDDZTI", titleEn: "Quality of Life 100%", titleEs: "Calidad de Vida 100%" },
  { id: "MTkj64jX_bw", titleEn: "Webster Technique", titleEs: "Técnica Webster" },
  { id: "QZ5B9RrqkdU", titleEn: "Goodbye Back Pain", titleEs: "Adiós al Dolor de Espalda" },
  { id: "P6qk2XU-5ak", titleEn: "Couldn't Walk", titleEs: "No Podía Caminar" },
  { id: "-sa_NwGveV4", titleEn: "No More Pain or Fatigue!", titleEs: "¡No más Dolor ni Cansancio!" },
  { id: "zbRrK3LSrgI", titleEn: "No More Neck Pain", titleEs: "Sin Dolor de Cuello" },
  { id: "DgGkCHYhfjE", titleEn: "Car Accident & Sinusitis", titleEs: "Accidente y Sinusitis" },
];

function WaveDown({ fill }: { fill: string }) {
  return (
    <div className={styles.waveDivider}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z`} fill={fill} />
      </svg>
    </div>
  );
}

function WaveUp({ fill }: { fill: string }) {
  return (
    <div className={styles.waveDividerUp}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z`} fill={fill} />
      </svg>
    </div>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const welcomeVideoId = isEs ? "aQgkzlxAof0" : "XWHe6AukR0E";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Pura Vida Chiropractic",
    "description": "Bilingual chiropractic clinic in San Antonio, TX. Dr. Dan Foss, DC — SOT technique, 23+ years experience.",
    "url": BASE_URL,
    "telephone": "+12106851994",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2318 NW Military Hwy Suite 103",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78231",
      "addressCountry": "US",
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Thursday"], "opens": "07:00", "closes": "16:00" },
      { "@type": "OpeningHoursSpecification", "description": "Additional times by appointment", "dayOfWeek": ["Wednesday", "Friday", "Saturday"] },
    ],
    // 'medicalSpecialty: "Chiropractic"' removed — Schema.org's MedicalSpecialty
    // enum doesn't include "Chiropractic" so Semrush flags it as invalid on
    // every page that renders this schema. The @type ['MedicalBusiness',
    // 'LocalBusiness'] + description already convey the medical context.
    "priceRange": "$$",
  };

  // Homepage FAQs — brand-level questions that Perplexity, ChatGPT, Google
  // AI Overviews, and Gemini frequently get asked about Pura Vida specifically.
  // These also drive FAQPage JSON-LD for the homepage, which is the strongest
  // single AI-citation signal for "<practice name> + question" research queries.
  // Each FAQ exists in both EN and ES.
  const homepageFaqs = isEs
    ? [
        {
          q: "¿Qué hace que Pura Vida Chiropractic sea diferente de otros quiroprácticos en San Antonio?",
          a: "El Dr. Dan Foss tiene certificación Avanzada en la Técnica Sacro-Occipital (SOT) a través de SORSI — uno de los pocos quiroprácticos en San Antonio con esta credencial. SOT es un sistema quiropráctico suave basado en categorías que aborda la columna, la pelvis y el ritmo craneosacro como una unidad integrada. Sin manipulación de alta velocidad, sin torsiones, sin chasquidos. También ofrecemos terapia SoftWave y láser Clase IV bajo el mismo techo.",
        },
        {
          q: "¿Aceptan seguro médico?",
          a: "Sí, somos amigables con los seguros. Traiga su tarjeta de seguro y su identificación a la oficina y verificaremos cómo su seguro puede contribuir a su cuidado. Trabajamos con la mayoría de los planes principales y aceptamos PIP de auto-accidente, MedPay y casos de compensación laboral. Ofrecemos una consulta gratuita para nuevos pacientes para que pueda determinar el ajuste antes de comprometerse.",
        },
        {
          q: "¿Qué condiciones trata el Dr. Foss?",
          a: "El Dr. Foss trata más de 99 condiciones — desde dolor lumbar, ciática, dolores de cabeza y migrañas hasta cuidado durante el embarazo (Técnica Webster certificada), quiropráctica pediátrica para cólico infantil y tortícolis, ATM, vértigo, fibromialgia, lesiones de auto y deportivas, y mucho más. Visite /es/conditions para la lista completa.",
        },
        {
          q: "¿Qué debo esperar en mi primera visita?",
          a: "Su consulta gratuita incluye una cita individual con el Dr. Foss para discutir sus preocupaciones de salud y determinar si usted es un buen candidato para el cuidado quiropráctico. Recibirá recomendaciones expertas enfocadas en corregir la causa raíz, no solo los síntomas. Si determinamos que no podemos ayudarle, le guiaremos al proveedor adecuado.",
        },
        {
          q: "¿Cuáles son sus horarios de oficina?",
          a: "Estamos abiertos lunes, martes y jueves de 7 AM a 4 PM. Citas adicionales disponibles miércoles, viernes y sábado. Estamos ubicados en 2318 NW Military Hwy, Suite 103, San Antonio TX 78231, sirviendo a Stone Oak, Castle Hills, Alamo Heights, Helotes y todo San Antonio. Llame al (210) 685-1994 para reservar.",
        },
        {
          q: "¿Atienden a pacientes en español?",
          a: "Sí — Pura Vida Chiropractic es una clínica completamente bilingüe (inglés/español). El Dr. Foss y nuestro personal hablan español con fluidez. Atendemos a la comunidad latina de San Antonio con cuidado quiropráctico culturalmente competente, planes de pago accesibles y todo el sitio web disponible en español.",
        },
      ]
    : [
        {
          q: "What makes Pura Vida Chiropractic different from other San Antonio chiropractors?",
          a: "Dr. Dan Foss holds Advanced certification in Sacro-Occipital Technique (SOT) through SORSI — one of the small number of chiropractors in San Antonio with this credential. SOT is a gentle, category-based chiropractic system that addresses the spine, pelvis, and craniosacral rhythm as one integrated unit. No high-velocity manipulation, no twisting, no popping. We also offer SoftWave shockwave therapy and Class IV laser under the same roof.",
        },
        {
          q: "Do you accept insurance?",
          a: "Yes, we are insurance friendly. Bring your insurance card and ID to the office and we will verify how your insurance can contribute to your care. We work with most major plans and accept auto-accident PIP, MedPay, and workers' compensation cases. We offer a free new-patient consultation so you can determine fit before committing.",
        },
        {
          q: "What conditions does Dr. Foss treat?",
          a: "Dr. Foss treats 99+ conditions — from lower back pain, sciatica, headaches, and migraines to pregnancy care (Webster Technique certified), pediatric chiropractic for infant colic and torticollis, TMJ, vertigo, fibromyalgia, auto and sports injuries, and much more. Visit /en/conditions for the complete list.",
        },
        {
          q: "What should I expect on my first visit?",
          a: "Your free consultation includes a one-on-one appointment with Dr. Foss to discuss your health concerns and determine whether you are a good candidate for chiropractic care. You will receive expert recommendations focused on correcting the root cause — not just symptoms. If we determine we cannot help you, we will guide you to the right provider.",
        },
        {
          q: "What are your office hours?",
          a: "We are open Monday, Tuesday, and Thursday from 7 AM to 4 PM. Additional appointments are available Wednesday, Friday, and Saturday. We are located at 2318 NW Military Hwy, Suite 103, San Antonio TX 78231, serving Stone Oak, Castle Hills, Alamo Heights, Helotes, and all of San Antonio. Call (210) 685-1994 to book.",
        },
        {
          q: "Do you see Spanish-speaking patients?",
          a: "Yes — Pura Vida Chiropractic is a fully bilingual (English/Spanish) clinic. Dr. Foss and our staff speak Spanish fluently. We serve San Antonio's Latino community with culturally competent chiropractic care, accessible payment plans, and the entire website available in Spanish at /es.",
        },
      ];

  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
        />
        <LocalBusinessSchema />

        {/* ── HERO ──────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              {/*
                Eyebrow leads with the brand name so Google associates the
                branded query "Pura Vida Chiropractic" / "vidasanantonio.com"
                with this page. The H1 below is conversion-focused (value
                prop, no brand), so the eyebrow is where the on-page brand
                signal lives. Pairs with the title-tag fix in
                generateMetadata above.
              */}
              <p className={styles.heroEyebrow}>
                {isEs
                  ? "Pura Vida Chiropractic — Quiropráctico Bilingüe en San Antonio, TX | Atención en Español e Inglés"
                  : "Pura Vida Chiropractic — Top-Rated Bilingual Chiropractor in San Antonio, TX | Serving the Hispanic Community"}
              </p>
              <h1 className={styles.heroTitle}>
                {isEs ? "No Solo Ajustamos su Espalda. Tratamos Todo su Sistema." : "We Don't Just Adjust Your Back. We Treat Your Whole System."}
              </h1>
              <p className={styles.heroSub}>
                {isEs
                  ? "Pura Vida Chiropractic — la única práctica con certificación SOT Avanzada entre los quiroprácticos en San Antonio, TX. Como el chiropractor bilingüe en San Antonio que sirve a la comunidad hispana, tratamos la columna vertebral, los órganos y el cráneo como un sistema integrado, en inglés y español."
                  : "Pura Vida Chiropractic — the only Advanced SOT-certified chiropractor in San Antonio, TX. As a bilingual chiropractor in San Antonio who serves the Hispanic community, Dr. Dan Foss treats the spine, organs, and cranium as one connected system, in English and Spanish."}
              </p>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>⭐ {isEs ? "159+ Reseñas 5 Estrellas" : "159+ Five-Star Reviews"}</span>
                <span className={styles.heroTrustItem}>✓ {isEs ? "23+ Años de Experiencia" : "23+ Years Experience"}</span>
                <span className={styles.heroTrustItem}>🗣 {isEs ? "Bilingüe EN/ES" : "Bilingual EN/ES"}</span>
              </div>
              <div className={styles.heroCtaGroup}>
                <a
                  href="tel:+12106851994"
                  className={styles.heroCtaPhone}
                  aria-label={isEs ? "Llamar al (210) 685-1994" : "Call (210) 685-1994"}
                >
                  📞 {isEs ? "Llame: (210) 685-1994" : "Call (210) 685-1994"}
                </a>
                <a
                  href={`/${locale}/book-now`}
                  className={styles.heroCtaBook}
                >
                  {isEs ? "Reserve Ahora →" : "Book Now →"}
                </a>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/hero-dr-foss.webp"
                alt={isEs ? "Dr. Dan Foss — Quiropráctico en San Antonio, TX" : "Dr. Dan Foss — Chiropractor in San Antonio, TX"}
                fill
                className={styles.heroImg}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Wave: Hero (light) → Trust bar (blue) */}
        <WaveDown fill="#2E7EA6" />

        {/* ── TRUST BAR ─────────────────────────────── */}
        <section className={styles.trustBar}>
          <div className={styles.trustInner}>
            {(isEs
              ? ["23+ Años de Experiencia", "Certificado SOT Avanzado", "¡Hablamos Español!", "San Antonio desde 2010", "3 Continentes · 5 Países"]
              : ["23+ Years Experience", "Advanced SOT Certified", "Bilingual EN/ES — ¡Hablamos Español!", "San Antonio Since 2010", "3 Continents · 5 Countries"]
            ).map((item) => (
              <span key={item} className={styles.trustItem}>{item}</span>
            ))}
          </div>
        </section>

        {/* ── SPANISH RESOURCES HUB (only renders on /es) ─────────────
            Promotes the 11 Spanish-language landing pages with Spanish
            anchor text. Above-the-fold placement gives every Spanish page
            an inbound link from the Spanish homepage — a major Spanish
            internal-linking signal for Google. Eliminates the "orphaned
            Spanish landing pages" problem and concentrates ranking
            authority on the /es Spanish content cluster. */}
        {isEs && (
          <section style={{ background: "#fff", padding: "2.5rem 1.25rem" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "1.6rem", color: "#1a3a4a", marginBottom: "0.5rem", fontWeight: 700, textAlign: "center" }}>
                Recursos Quiroprácticos en Español
              </h2>
              <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1.75rem", textAlign: "center", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
                Páginas e información en español sobre quiropráctica en San Antonio, TX. Atención bilingüe del Dr. Dan Foss, DC en Pura Vida Chiropractic.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.75rem 1.25rem" }}>
                {[
                  { href: "/es/quiropractico-cerca-de-mi-san-antonio", label: "Quiropráctico Cerca de Mí en San Antonio", desc: "Encuentre el quiropráctico bilingüe más cercano." },
                  { href: "/es/el-mejor-quiropractico-san-antonio", label: "El Mejor Quiropráctico de San Antonio", desc: "Por qué Pura Vida es elegido por miles de pacientes." },
                  { href: "/es/san-antonio-quiropractico", label: "San Antonio Quiropráctico", desc: "Información completa sobre el quiropráctico en SA." },
                  { href: "/es/quiropratico-san-antonio", label: "Quiropratico San Antonio", desc: "Quiropráctico que habla español en San Antonio." },
                  { href: "/es/que-es-un-quiropractico", label: "¿Qué es un Quiropráctico?", desc: "Guía completa: qué hace, para qué sirve." },
                  { href: "/es/huesero-san-antonio", label: "Huesero en San Antonio", desc: "La diferencia entre huesero y quiropráctico licenciado." },
                  { href: "/es/quiropractico-para-migranas-san-antonio", label: "Quiropráctico para Migrañas", desc: "Alivio de migrañas con técnica SOT craneal." },
                  { href: "/es/quiropractico-dolor-de-cabeza-san-antonio", label: "Quiropráctico para Dolor de Cabeza", desc: "Tratamiento de dolores de cabeza crónicos." },
                  { href: "/es/quiropractico-escoliosis-san-antonio", label: "Quiropráctico para Escoliosis", desc: "Cuidado de escoliosis con SOT y técnicas avanzadas." },
                  { href: "/es/quiropractico-postparto-san-antonio", label: "Quiropráctico Postparto", desc: "Recuperación postparto con cuidado craneal SOT." },
                  { href: "/es/services/quiropractico-pediatrico", label: "Quiropráctico Pediátrico", desc: "Cuidado quiropráctico para bebés, niños y adolescentes." },
                  { href: "/es/services/quiropractico-embarazo", label: "Quiropráctico para Embarazo", desc: "Técnica Webster certificada para mujeres embarazadas." },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "0.85rem 1rem",
                      border: "1px solid #d6e4f0",
                      borderRadius: "10px",
                      background: "#fafbfd",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    <div style={{ color: "#1a5d80", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.4 }}>
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Wave: Trust bar (blue) → About (#F4F9FF) */}
        <WaveDown fill="#F4F9FF" />

        {/* ── WELCOME VIDEO ─────────────────────────── */}
        <section className={styles.videoSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Bienvenido a Pura Vida Quiropráctica" : "Welcome To Pura Vida Chiropractic"}
            </h2>
            <p className={styles.videoSub}>
              {isEs
                ? "Conozca al Dr. Dan Foss y descubra cómo nuestro Protocolo Pura Vida puede ayudarle."
                : "Meet Dr. Dan Foss and discover how our Pura Vida Protocol can help you achieve optimal health."}
            </p>
            <div className={styles.missionVisionBox}>
              <div className={styles.mvItem}>
                <span className={styles.mvLabel}>{isEs ? "Nuestra Misión" : "Our Mission"}</span>
                <p className={styles.mvText}>
                  {isEs
                    ? "Nuestra misión en Pura Vida Quiropráctica es restaurar la salud integral a la comunidad de San Antonio — tratando la columna vertebral, los órganos y el cráneo como un sistema integrado, encontrando y corrigiendo las causas raíz que otros profesionales pasan por alto, en inglés y español, para cada miembro de su familia."
                    : "Our mission at Pura Vida Chiropractic is to restore whole-body health to the San Antonio community — treating the spine, organs, and cranium as one connected system, finding and correcting root causes that other practitioners miss, in English and Spanish, for every member of your family."}
                </p>
              </div>
              <div className={styles.mvDivider} aria-hidden="true" />
              <div className={styles.mvItem}>
                <span className={styles.mvLabel}>{isEs ? "Nuestra Visión" : "Our Vision"}</span>
                <p className={styles.mvText}>
                  {isEs
                    ? "Un mundo donde la salud sea la norma, no solo un privilegio. Imaginamos un San Antonio donde cada familia — en cada vecindario y en cada idioma — tenga acceso a atención de causa raíz que trata a la persona completa, para que el dolor crónico y la dependencia de medicamentos sean la excepción y no la regla."
                    : "A world where health is the norm, not just a privilege. We envision a San Antonio where every family — in every neighborhood and every language — has access to root-cause care that treats the whole person, so chronic pain and medication dependency become the exception, not the rule."}
                </p>
              </div>
            </div>
            <div className={styles.videoWrap}>
              <YouTubeFacade
                videoId={welcomeVideoId}
                title={isEs ? "Bienvenido a Pura Vida Quiropráctica" : "Welcome To Pura Vida Chiropractic"}
                className={styles.videoEmbed}
                lazy
              />
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────── */}
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                {isEs ? "Sobre el Dr. Dan Foss" : "About Dr. Dan Foss"}
              </h2>
              <p>
                {isEs
                  ? "El Dr. Dan Foss es el único quiropráctico certificado en SOT Avanzado en San Antonio, Texas — uno de los pocos profesionales en el mundo que ha completado el currículo completo de SOT Avanzado a través de SORSI, incluyendo el dominio del ajuste de órganos CMRT y la Craniopatía SOT. Su práctica trata la columna vertebral, los órganos y el cráneo como un sistema integrado. Esa diferencia es la razón por la que los pacientes acuden a Pura Vida desde toda San Antonio — y por la que finalmente obtienen resultados después de años de ser tratados con síntomas en lugar de causas."
                  : "Dr. Dan Foss is the only Advanced SOT certified chiropractor in San Antonio, Texas — one of a small number of practitioners worldwide who have completed the full Advanced SOT curriculum through SORSI, including mastery of CMRT organ adjusting and SOT Craniopathy. His practice treats the spine, the organs, and the cranium as one integrated system. That difference is why patients come to Pura Vida from across San Antonio — and why they finally get results after years of being managed rather than healed."}
              </p>
              <p>
                {isEs
                  ? "Su camino hacia este nivel de especialización comenzó con una experiencia personal: en primer grado, a los 8 años, Dan tuvo tortícolis — la cabeza bloqueada hacia un lado. Un médico recetó medicamentos. Sus padres lo llevaron a un quiropráctico. Un ajuste cambió todo. Veintitrés años después, esa experiencia es la razón por la que existe el Protocolo Pura Vida."
                  : "His path to this level of specialization began with a personal experience: in first grade, when he was 8 years old, Dan had torticollis — his head locked to one side. A medical doctor prescribed pharmaceuticals. His parents took him to a chiropractor instead. One adjustment changed everything. Twenty-three years later, that experience is the reason the Pura Vida Protocol exists."}
              </p>
              <div className={styles.aboutBtns}>
                <Link href={`/${locale}/about`} className={styles.learnMore}>
                  {isEs ? "Conozca al Dr. Foss →" : "Meet Dr. Foss →"}
                </Link>
                <Link href={`/${locale}/testimonials`} className={styles.learnMoreSecondary}>
                  {isEs ? "Ver Testimonios →" : "Read Testimonials →"}
                </Link>
              </div>
            </div>
            <div className={styles.aboutPhoto}>
              <Image
                src="/images/dr-foss-about-hp.webp"
                alt="Dr. Dan Foss, chiropractor in San Antonio TX"
                width={480}
                height={540}
                className={styles.aboutImg}
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT — 3-step patient journey ────── */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionInner}>
            <p className={styles.howEyebrow}>
              {isEs ? "Su Primer Visita" : "Your First Visit"}
            </p>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Qué Esperar en Pura Vida Chiropractic" : "What to Expect at Pura Vida Chiropractic"}
            </h2>
            <p className={styles.howSub}>
              {isEs
                ? "Tres pasos simples — sin sorpresas, sin presión. Comenzamos con una conversación gratuita, no con un compromiso de tratamiento."
                : "Three simple steps — no surprises, no pressure. We start with a conversation, not a commitment to treatment."}
            </p>

            <div className={styles.howSteps}>
              <div className={styles.howStep}>
                <div className={styles.howStepNumber}>1</div>
                <h3 className={styles.howStepTitle}>
                  {isEs ? "Consulta Gratuita" : "Free Consultation"}
                </h3>
                <p className={styles.howStepBody}>
                  {isEs
                    ? "Una conversación gratuita, sin compromiso, en nuestra oficina. Hablamos sobre sus preocupaciones de salud y determinamos si el cuidado quiropráctico es adecuado para usted. Si no podemos ayudarle, lo guiaremos al proveedor correcto."
                    : "A free, no-commitment sit-down in our office. We discuss your health concerns and determine whether chiropractic care is the right fit. If we can't help you, we'll guide you to the provider who can."}
                </p>
              </div>

              <div className={styles.howStep}>
                <div className={styles.howStepNumber}>2</div>
                <h3 className={styles.howStepTitle}>
                  {isEs ? "Examen Integral" : "Comprehensive Exam"}
                </h3>
                <p className={styles.howStepBody}>
                  {isEs
                    ? "Si podemos ayudarle, realizamos un examen ortopédico, neurológico y físico completo, además de radiografías digitales si están indicadas. El Dr. Foss identifica la causa raíz, no solo los síntomas."
                    : "If we can help, we perform a thorough orthopedic, neurological, and physical exam — plus digital X-rays if indicated. Dr. Foss identifies the root cause, not just the symptoms."}
                </p>
              </div>

              <div className={styles.howStep}>
                <div className={styles.howStepNumber}>3</div>
                <h3 className={styles.howStepTitle}>
                  {isEs ? "Plan de Cuidado Personalizado" : "Personalized Care Plan"}
                </h3>
                <p className={styles.howStepBody}>
                  {isEs
                    ? "El Dr. Foss revisa los hallazgos con usted y diseña un plan de cuidado específico — usando SOT, CMRT, terapia SoftWave y láser Clase IV cuando sea apropiado. La atención comienza solo cuando usted está listo."
                    : "Dr. Foss reviews the findings with you and designs a tailored care plan — using SOT, CMRT, SoftWave therapy, and Class IV laser as appropriate. Care begins only when you're ready."}
                </p>
              </div>
            </div>

            <div className={styles.howCtaWrap}>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.howCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reservar Mi Consulta Gratis →" : "Book My Free Consultation →"}
              </a>
            </div>
          </div>
        </section>

        {/* Wave: How-it-works (#F4F9FF) → Stats (#0d1f2d) */}
        <WaveDown fill="#0d1f2d" />

        {/* ── STATS / IMPACT ────────────────────────── */}
        <section className={styles.statsSection}>
          <p className={styles.statsEyebrow}>
            {isEs ? "Comprometidos con San Antonio" : "Committed to San Antonio"}
          </p>
          <h2 className={styles.statsTitle}>
            {isEs
              ? "Descubre el Impacto del Cuidado Quiropráctico"
              : "Discover the Impact of Chiropractic Care"}
          </h2>
          <p className={styles.statsSub}>
            {isEs
              ? "Durante más de dos décadas, el Dr. Foss ha ayudado a familias de San Antonio a encontrar alivio real y recuperar su calidad de vida."
              : "For over two decades, Dr. Foss has helped San Antonio families find real relief and reclaim their quality of life."}
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>23</div>
              <div className={styles.statLabel}>
                {isEs ? "Años de Experiencia" : "Years of Experience"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>
                {isEs ? "Satisfacción del Paciente" : "Patient Satisfaction"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>159+</div>
              <div className={styles.statLabel}>
                {isEs ? "Reseñas de 5 Estrellas" : "Five-Star Reviews"}
              </div>
            </div>
          </div>

          <div className={styles.statsCtaWrap}>
            <div className={styles.statsCtaLine} aria-hidden="true" />
            <a
              href={`/${locale}/book-now`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.statsCta}
            >
              {isEs ? "Obtenga su Consulta Gratis" : "Get Your Free Consultation"}
            </a>
            <div className={styles.statsCtaLine} aria-hidden="true" />
          </div>

          <p className={styles.statsTagline}>
            {isEs
              ? "Únase a miles de familias de San Antonio que encontraron alivio real."
              : "Join thousands of San Antonio families who found real relief."}
          </p>
        </section>

        {/* Wave: Stats (#0d1f2d) → Why Different (#ffffff) */}
        <WaveUp fill="#0d1f2d" />
        <WaveDown fill="#ffffff" />

        {/* ── WHY DIFFERENT ─────────────────────────── */}
        <section className={styles.whySection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "¿Por Qué Nuestro Enfoque Es Diferente?" : "Why Is Our Approach Different?"}
            </h2>
            <p className={styles.whySub}>
              {isEs
                ? "El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con Certificación SOT Avanzada. El Protocolo Pura Vida ha ayudado a decenas de miles de pacientes."
                : "Dr. Foss is the only Advanced SOT-certified chiropractor in San Antonio (certified through SORSI). The Pura Vida Protocol has helped tens of thousands of patients."}
            </p>
            <div className={styles.pillarsGrid}>
              {(isEs
                ? [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss realizando ajuste quiropráctico SOT", title: "Pilar 1 — La Columna y la Pelvis (SOT)", desc: "La Técnica Sacro Occipital utiliza bloques pélvicos y análisis neurológico preciso para corregir la base estructural de su salud. Los protocolos de Categoría I, II y III abordan la inestabilidad sacroilíaca, problemas de disco, ciática y disfunción pélvica en cascada." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss realizando ajuste de órganos CMRT", title: "Pilar 2 — Los Órganos (CMRT)", desc: "La Técnica de Reflejo Manipulativo Quiropráctico es la rama de ajuste de órganos del SOT Avanzado. Cada vértebra torácica se conecta a un órgano a través del sistema nervioso autónomo. El Dr. Foss es el único quiropráctico certificado en CMRT en San Antonio." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss realizando ajuste craneal SOT Craniopatía", title: "Pilar 3 — El Cráneo (Craniopatía SOT)", desc: "Los 22 huesos del cráneo continúan moviéndose en la vida adulta, impulsando el flujo del líquido cefalorraquídeo. La Craniopatía SOT corrige dolores de cabeza, vértigo, ATM, infecciones de oído en niños y síndrome post-conmoción. El Dr. Foss es el único craniopático SOT Avanzado de San Antonio." },
                    { img: "/images/shockwave.jpg", imgAlt: "Dr. Foss realizando terapia de ondas de choque", title: "Modalidades Avanzadas", desc: "Las terapias SoftWave de Ondas de Choque y Láser Clase IV aceleran la cicatrización donde el ajuste quiropráctico por sí solo no es suficiente. SoftWave rompe el tejido cicatricial y estimula la migración de células madre; el Láser Clase IV penetra profundamente para reducir la inflamación. Combinadas con SOT, resuelven fascitis plantar, tendinitis, hombro congelado y dolor articular crónico que no han respondido a otros tratamientos." },
                  ]
                : [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss performing SOT chiropractic adjustment", title: "Pillar 1 — The Spine & Pelvis (SOT)", desc: "Sacro Occipital Technique uses pelvic blocks and precise neurological analysis to correct the structural foundation of your health. Category I, II, and III protocols address sacroiliac instability, disc involvement, sciatica, and cascading pelvic dysfunction." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss performing CMRT organ adjustment", title: "Pillar 2 — The Organs (CMRT)", desc: "Chiropractic Manipulative Reflex Technique is the organ-adjusting branch of Advanced SOT. Every thoracic vertebra connects to an organ through the autonomic nervous system. CMRT addresses GERD, adrenal fatigue, PMS, gallbladder dysfunction, allergies, and fertility challenges. Dr. Foss is the only CMRT-certified chiropractor in San Antonio." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss performing SOT Craniopathy cranial adjustment", title: "Pillar 3 — The Cranium (SOT Craniopathy)", desc: "The 22 bones of your skull continue to move in adulthood, driving cerebrospinal fluid flow that nourishes your brain and spinal cord. SOT Craniopathy corrects headaches, vertigo, TMJ, ear infections in children, post-concussion syndrome, and adjustments that won't hold. Dr. Foss is San Antonio's only Advanced SOT craniopath." },
                    { img: "/images/shockwave.jpg", imgAlt: "Dr. Foss performing shockwave therapy", title: "Advanced Modalities", desc: "SoftWave Shockwave and Class IV Laser therapies accelerate healing where chiropractic adjustment alone isn't enough. SoftWave breaks up scar tissue and stimulates stem-cell migration; Class IV Laser drives deep through tissue to reduce inflammation. Combined with SOT, these modalities resolve plantar fasciitis, tendonitis, frozen shoulder, and chronic joint pain that hasn't responded to other treatments." },
                  ]
              ).map((p) => (
                <div key={p.title} className={styles.pillar}>
                  <div className={styles.pillarImgWrap}>
                    <Image
                      src={p.img}
                      alt={p.imgAlt}
                      fill
                      className={styles.pillarImg}
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className={styles.pillarBody}>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: Why (#ffffff) → SA Chiropractor Hub (#F4F9FF) */}
        <WaveDown fill="#F4F9FF" />

        {/* ── SAN ANTONIO CHIROPRACTOR HUB ─────────────
            1,500-word head-term-pillar section added 2026-05-13 after
            Semrush competitor audit showed safamilychiro.com owns the
            top 8 positions on the 9 highest-volume "chiropractor san
            antonio" / "chiropractic san antonio" / "best chiropractor
            san antonio" queries (combined ~4,500 monthly searches),
            while Pura Vida sits at positions 21-40 (effectively
            invisible). Their advantage: brand name "San Antonio Family
            Chiropractic" literally contains the keyword.

            Counter-strategy: increase head-term keyword density on the
            homepage without diluting the SOT/CMRT/Cranial/bilingual
            specialty positioning. This section frames the head-term
            question ("how do I find a chiropractor in San Antonio?")
            with the specialty answer ("the only Advanced SOT
            certified chiropractor in the city"). */}
        <section className={styles.saChiroHubSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs
                ? "¿Buscando un Quiropráctico en San Antonio? Esto Es Lo Que Debe Saber"
                : "Looking for a Chiropractor in San Antonio? Here's What to Know"}
            </h2>

            <div className={styles.saChiroHubLead}>
              <p>
                {isEs
                  ? "Si ha buscado “quiropráctico San Antonio” y se ha sentido abrumado, no está solo. Hay más de 250 quiroprácticos en San Antonio, TX — y la mayoría ofrecen el mismo enfoque general: el ajuste rápido, el pop, el adiós. En Pura Vida Chiropractic, hacemos algo fundamentalmente diferente."
                  : "If you've searched \"chiropractor San Antonio\" and felt overwhelmed by the options, you're not alone. There are over 250 chiropractors in San Antonio, TX — and most offer the same general approach: the quick adjustment, the pop, the goodbye. At Pura Vida Chiropractic, we do something fundamentally different."}
              </p>
              <p>
                {isEs ? (
                  <>
                    Esta página le ayudará a entender qué buscar en un quiropráctico en San Antonio, por qué la técnica del Dr. Foss es única entre los quiroprácticos de San Antonio TX, y cómo nuestro enfoque ayuda con problemas que otros quiroprácticos en San Antonio no abordan. Para una guía completa, consulte nuestras páginas pilares:{" "}
                    <Link href={`/${locale}/quiropractico-cerca-de-mi-san-antonio`}>quiropráctico cerca de mí en San Antonio</Link>
                    {" y "}
                    <Link href={`/${locale}/el-mejor-quiropractico-san-antonio`}>cómo elegir el mejor quiropráctico de San Antonio</Link>.
                  </>
                ) : (
                  <>
                    This page will help you understand what to look for in a chiropractor in San Antonio, why Dr. Foss&apos;s technique is unique among San Antonio chiropractors, and how our approach helps with problems other chiropractors in San Antonio don&apos;t address. For a deeper guide, see our pillar pages:{" "}
                    <Link href={`/${locale}/chiropractor-near-me-san-antonio`}>chiropractor near me in San Antonio</Link>
                    {" and "}
                    <Link href={`/${locale}/best-chiropractor-san-antonio`}>how to choose the best chiropractor in San Antonio</Link>.
                  </>
                )}
              </p>
            </div>

            {/* What to look for — checklist format */}
            <div className={styles.saChiroHubBlock}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "5 Cosas Que Buscar en el Mejor Quiropráctico de San Antonio"
                  : "5 Things to Look For in the Best Chiropractor in San Antonio"}
              </h3>
              <p>
                {isEs
                  ? "No todos los quiroprácticos en San Antonio TX están entrenados al mismo nivel. Estos son los cinco criterios que separan a los mejores quiroprácticos de San Antonio del resto:"
                  : "Not all chiropractors in San Antonio TX are trained to the same level. These five criteria separate the best chiropractors in San Antonio from the rest:"}
              </p>
              <ol className={styles.saChiroHubList}>
                <li>
                  <strong>{isEs ? "Certificaciones avanzadas, no solo una licencia de DC." : "Advanced certifications, not just a DC license."}</strong>
                  {" "}
                  {isEs
                    ? "Cada quiropráctico en San Antonio tiene una licencia DC básica, pero solo unos pocos completan las certificaciones avanzadas de varios años que marcan el nivel más alto de la profesión. El Dr. Foss tiene Certificación SOT Avanzada a través de SORSI — una credencial que requiere dominio de los tres pilares de la Técnica Sacro-Occipital: bloqueo pélvico de Categoría I/II/III para corrección estructural, CMRT (Técnica de Reflejo Manipulativo Quiropráctico) para ajuste visceral de órganos, y Craniopatía SOT para corrección de huesos craneales — más la certificación de Técnica Webster para el embarazo. Él es el único quiropráctico en San Antonio con esta pila completa de certificaciones."
                    : "Every chiropractor in San Antonio has a basic DC license, but only a handful complete the multi-year advanced certifications that mark the top tier of the profession. Dr. Foss holds Advanced SOT certification through SORSI — a credential that requires mastery of all three Sacro-Occipital Technique pillars: Category I/II/III pelvic blocking for structural correction, CMRT (Chiropractic Manipulative Reflex Technique) for visceral organ adjusting, and SOT Craniopathy for cranial bone correction — plus Webster Technique certification for pregnancy. He is the only chiropractor in San Antonio holding this complete certification stack."}
                </li>
                <li>
                  <strong>{isEs ? "Un sistema, no una lista de técnicas." : "A system, not a list of techniques."}</strong>
                  {" "}
                  {isEs
                    ? "Muchos quiroprácticos en San Antonio TX enumeran 10 técnicas en su sitio web pero usan principalmente una (Diversificada). Pregunte cuál es su método principal y cómo lo eligen. El Protocolo Pura Vida es un método basado en SOT que evaluúa cada paciente neurológicamente y le asigna a una de tres categorías de tratamiento — sin adivinanzas."
                    : "Many chiropractors in San Antonio TX list 10 techniques on their website but mainly use one (Diversified). Ask what their primary method is and how they choose it. The Pura Vida Protocol is an SOT-based method that evaluates each patient neurologically and assigns them to one of three treatment categories — no guessing."}
                </li>
                <li>
                  <strong>{isEs ? "Enfoque en la causa raíz, no solo en el síntoma." : "Root-cause focus, not just symptom relief."}</strong>
                  {" "}
                  {isEs
                    ? "Si su quiropráctico de San Antonio solo se enfoca en el lugar del dolor, está perdiendo cómo el cuerpo se mantiene a sí mismo. El SOT trata la columna, los órganos (a través de CMRT) y el cráneo como un sistema conectado. Por eso vemos resultados en condiciones que otros quiroprácticos en San Antonio no pueden tocar: vertigo, ATM, GERD, fatiga adrenal, infecciones recurrentes de oído, fertilidad y síndrome post-conmoción."
                    : "If your San Antonio chiropractor only focuses on where it hurts, they're missing how the body holds itself together. SOT treats the spine, organs (through CMRT), and cranium as one connected system. That's why we get results on conditions other chiropractors in San Antonio can't touch: vertigo, TMJ, GERD, adrenal fatigue, recurring ear infections, fertility, and post-concussion syndrome."}
                </li>
                <li>
                  <strong>{isEs ? "Modalidades regenerativas en el consultorio." : "Regenerative modalities in-office."}</strong>
                  {" "}
                  {isEs
                    ? "Los mejores quiroprácticos en San Antonio combinan el ajuste con la regeneración de tejidos. Pura Vida ofrece terapia SoftWave Shockwave y láser Clase IV — dos tecnologías que aceleran la curación donde el ajuste por sí solo no es suficiente. Es por eso que ayudamos a pacientes con fascitis plantar, tendinitis crónica, hombro congelado y dolor articular que no han respondido a otros tratamientos."
                    : "The best chiropractors in San Antonio combine adjustment with tissue regeneration. Pura Vida offers SoftWave Shockwave therapy and Class IV laser — two technologies that accelerate healing where adjustment alone isn't enough. That's why we help patients with plantar fasciitis, chronic tendonitis, frozen shoulder, and joint pain that hasn't responded to other treatments."}
                </li>
                <li>
                  <strong>{isEs ? "Atención bilingüe para la diversidad de San Antonio." : "Bilingual care for San Antonio's diverse population."}</strong>
                  {" "}
                  {isEs
                    ? "El Dr. Foss es uno de los pocos quiroprácticos en San Antonio TX que ofrece atención completamente bilingüe en inglés y español. Tras años practicando en Costa Rica, España, Irlanda y los Países Bajos, entiende la cultura latina y las necesidades de salud específicas de la comunidad hispana de San Antonio. Si busca un “quiropráctico cerca de mí que hable español”, ha llegado al lugar correcto."
                    : "Dr. Foss is one of the few chiropractors in San Antonio TX offering fully bilingual care in English and Spanish. After years practicing in Costa Rica, Spain, Ireland, and the Netherlands, he understands Latino culture and the specific health needs of San Antonio's Hispanic community. If you're searching for a \"chiropractor near me who speaks Spanish,\" you've come to the right place."}
                </li>
              </ol>
            </div>

            {/* Conditions chiropractors in SA can/can't treat */}
            <div className={styles.saChiroHubBlock}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "Lo Que Otros Quiroprácticos en San Antonio No Tratan"
                  : "What Other Chiropractors in San Antonio Can't Treat"}
              </h3>
              <p>
                {isEs
                  ? "El quiropráctico promedio en San Antonio puede ayudarle con dolor de espalda básico y dolor de cuello. Pero estos son los problemas reales que vienen a Pura Vida después de probar a uno o dos quiroprácticos en San Antonio TX sin resultados:"
                  : "The average chiropractor in San Antonio can help you with basic back pain and neck pain. But these are the real problems that come to Pura Vida after trying one or two other San Antonio chiropractors without results:"}
              </p>
              <ul className={styles.saChiroHubList}>
                <li>{isEs ? "Dolores de cabeza y migrañas crónicos que no responden a medicamentos" : "Chronic headaches and migraines that don't respond to medication"}</li>
                <li>{isEs ? "Vértigo, tinnitus o problemas de equilibrio inexplicables" : "Vertigo, tinnitus, or unexplained balance issues"}</li>
                <li>{isEs ? "ATM y dolor mandibular que dispositivos dentales no resolvieron" : "TMJ and jaw pain that dental devices haven't resolved"}</li>
                <li>{isEs ? "Síntomas post-conmoción meses después de un accidente o lesión deportiva" : "Post-concussion symptoms months after an accident or sports injury"}</li>
                <li>{isEs ? "Reflujo GERD, fatiga adrenal o problemas digestivos que parecen “médicos”" : "GERD reflux, adrenal fatigue, or digestive issues that seem \"medical\""}</li>
                <li>{isEs ? "Cólicos, problemas de lactancia o tortícolis en bebés" : "Colic, latching issues, or torticollis in infants"}</li>
                <li>{isEs ? "Presentación podálica o dolor pélvico durante el embarazo (Técnica Webster)" : "Breech presentation or pelvic pain during pregnancy (Webster Technique)"}</li>
                <li>{isEs ? "Infecciones recurrentes de oído en niños" : "Recurring ear infections in children"}</li>
                <li>{isEs ? "Ajustes que “no se mantienen” — vuelve cada semana sin progreso" : "Adjustments that \"don't hold\" — coming back every week with no progress"}</li>
              </ul>
              <p>
                {isEs
                  ? "Si reconoce alguno de estos en su experiencia con quiroprácticos anteriores en San Antonio, hay una razón: faltaba el sistema correcto. SOT aborda la columna, los órganos y el cráneo como una unidad integrada — que es por qué los resultados llegan cuando otros tratamientos quiroprácticos en San Antonio fallan."
                  : "If you recognize any of these from your experience with previous chiropractors in San Antonio, there's a reason — the right system was missing. SOT addresses the spine, organs, and cranium as one integrated unit, which is why results come when other San Antonio chiropractic treatments fail."}
              </p>
            </div>

            {/* Neighborhoods we serve */}
            <div className={styles.saChiroHubBlock}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "Quiropráctico para Cada Vecindario de San Antonio"
                  : "Chiropractor for Every San Antonio Neighborhood"}
              </h3>
              <p>
                {isEs
                  ? "Nuestro consultorio en 2318 NW Military Hwy, Suite 103, está ubicado centralmente para los pacientes de toda el área de San Antonio. Aceptamos pacientes nuevos de:"
                  : "Our office at 2318 NW Military Hwy, Suite 103, is centrally located for patients across the San Antonio area. We accept new patients from:"}
              </p>
              {/* Neighborhood grid — each cell is now an internal link
                  to the existing neighborhood landing page, creating 12
                  high-equity homepage→spoke links. This is the SPOKE side
                  of the hub-and-spoke pattern: the homepage flows
                  authority down to the neighborhood pages, and each
                  neighborhood page links back to the homepage and to the
                  pillar hubs. */}
              <ul className={styles.saChiroHubGrid}>
                <li><Link href={`/${locale}/stone-oak-chiropractor`}><strong>Stone Oak</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/castle-hills-chiropractor`}><strong>Castle Hills</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/alamo-heights-chiropractor`}><strong>Alamo Heights</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/olmos-park-chiropractor`}><strong>Olmos Park</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/helotes-chiropractor`}><strong>Helotes</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/shavano-park-chiropractor`}><strong>Shavano Park</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/hill-country-village-chiropractor`}><strong>Hill Country Village</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/hollywood-park-chiropractor`}><strong>Hollywood Park</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/leon-valley-chiropractor`}><strong>Leon Valley</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/boerne-chiropractor`}><strong>Boerne</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/balcones-heights-chiropractor`}><strong>Balcones Heights</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
                <li><Link href={`/${locale}/live-oak-chiropractor`}><strong>Live Oak</strong> {isEs ? "— quiropráctico" : "— chiropractor"}</Link></li>
              </ul>
              <p>
                {isEs
                  ? "Si ha escrito “quiropráctico cerca de mí San Antonio” y vive dentro de 30 minutos del centro de San Antonio, está dentro de nuestra área principal de servicio."
                  : "If you've typed \"chiropractor near me San Antonio\" and you live within 30 minutes of central San Antonio, you're within our primary service area."}
              </p>
            </div>

            {/* Side-by-side comparison table — high-intent content for
                "best chiropractor san antonio" searchers comparing options.
                The 'comparison' search intent is the strongest signal for
                this query type; presenting it inline saves the user a
                Google tab and increases on-page time. */}
            <div className={styles.saChiroHubBlock}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "Pura Vida vs. el Quiropráctico Típico en San Antonio"
                  : "Pura Vida vs. the Typical San Antonio Chiropractor"}
              </h3>
              <p>
                {isEs
                  ? "Si está comparando quiroprácticos en San Antonio TX, esta tabla muestra exactamente cómo Pura Vida se diferencia de la oferta promedio en el mercado:"
                  : "If you're comparing chiropractors in San Antonio TX, this table shows exactly how Pura Vida differs from the typical offering in the market:"}
              </p>
              <div className={styles.saChiroHubCompareWrap}>
                <table className={styles.saChiroHubCompare}>
                  <thead>
                    <tr>
                      <th>{isEs ? "Criterio" : "Criterion"}</th>
                      <th>{isEs ? "Quiropráctico típico en SA" : "Typical SA chiropractor"}</th>
                      <th>{isEs ? "Pura Vida Chiropractic" : "Pura Vida Chiropractic"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{isEs ? "Técnica principal" : "Primary technique"}</td>
                      <td>{isEs ? "Diversificada (general)" : "Diversified (general)"}</td>
                      <td>{isEs ? "SOT Avanzado (específico)" : "Advanced SOT (specific)"}</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Trata columna, órganos y cráneo como un sistema" : "Treats spine, organs, and cranium as one system"}</td>
                      <td>❌</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Certificación CMRT (ajuste visceral de órganos)" : "CMRT certified (visceral organ adjusting)"}</td>
                      <td>❌</td>
                      <td>{isEs ? "✅ (el único en San Antonio)" : "✅ (only one in San Antonio)"}</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Craniopatía SOT (ajuste de huesos craneales)" : "SOT Craniopathy (cranial bone adjusting)"}</td>
                      <td>❌</td>
                      <td>{isEs ? "✅ (el único en San Antonio)" : "✅ (only one in San Antonio)"}</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Técnica Webster certificada (embarazo)" : "Webster Technique certified (pregnancy)"}</td>
                      <td>{isEs ? "A veces" : "Sometimes"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Bilingüe inglés/español" : "Bilingual English/Spanish"}</td>
                      <td>{isEs ? "Raro" : "Rare"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "SoftWave Shockwave + láser Clase IV en consultorio" : "SoftWave Shockwave + Class IV laser in-office"}</td>
                      <td>{isEs ? "Raro" : "Rare"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Consulta gratis para nuevos pacientes" : "Free consultation for new patients"}</td>
                      <td>{isEs ? "A veces" : "Sometimes"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Años de experiencia clínica" : "Years of clinical experience"}</td>
                      <td>{isEs ? "Variado" : "Varies"}</td>
                      <td>{isEs ? "23+ años en EE.UU., Costa Rica, España, Irlanda, Países Bajos, Guatemala" : "23+ years across US, Costa Rica, Spain, Ireland, Netherlands, Guatemala"}</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Trata cuidado prenatal pediátrico desde recién nacidos" : "Treats pediatric prenatal care from newborn"}</td>
                      <td>{isEs ? "Raro" : "Rare"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Ayuda con condiciones médicas (vértigo, ATM, GERD, fertilidad)" : "Helps with medical conditions (vertigo, TMJ, GERD, fertility)"}</td>
                      <td>{isEs ? "Limitado" : "Limited"}</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>{isEs ? "Calificación de Google" : "Google rating"}</td>
                      <td>{isEs ? "Variado" : "Varies"}</td>
                      <td>{isEs ? "4.8★ · 159+ reseñas verificadas" : "4.8★ · 159+ verified reviews"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why pura vida ranks for "best" */}
            <div className={styles.saChiroHubBlock}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "Por Qué Pura Vida Es Uno de los Mejores Quiroprácticos en San Antonio"
                  : "Why Pura Vida Is One of the Best Chiropractors in San Antonio"}
              </h3>
              <p>
                {isEs
                  ? "Decir que somos uno de los “mejores quiroprácticos en San Antonio” no es marketing — es un reflejo de tres hechos verificables sobre el Dr. Dan Foss:"
                  : "Calling ourselves one of the \"best chiropractors in San Antonio\" isn't marketing — it's a reflection of three verifiable facts about Dr. Dan Foss:"}
              </p>
              <ul className={styles.saChiroHubList}>
                <li>
                  <strong>{isEs ? "Credenciales avanzadas que pocos quiroprácticos en San Antonio tienen." : "Advanced credentials few chiropractors in San Antonio hold."}</strong>
                  {" "}
                  {isEs
                    ? "Certificación SOT Avanzada a través de SORSI (la sociedad de técnica quiropráctica más antigua del mundo, fundada en 1929). “SOT Avanzado” significa la finalización del currículo completo: bloqueo pélvico de Categoría I/II/III para corrección estructural, CMRT (Técnica de Reflejo Manipulativo Quiropráctico) para ajuste visceral de órganos, y Craniopatía SOT para corrección de huesos craneales. El Dr. Foss es el único quiropráctico en San Antonio TX que tiene la pila completa de Certificación SOT Avanzada."
                    : "Advanced SOT certification through SORSI (the world's oldest chiropractic technique society, founded 1929). \"Advanced SOT\" means completion of the full multi-year curriculum: Category I/II/III pelvic blocking for structural correction, CMRT (Chiropractic Manipulative Reflex Technique) for visceral organ adjusting, and SOT Craniopathy for cranial bone correction. Dr. Foss is the only chiropractor in San Antonio TX holding the complete Advanced SOT certification stack."}
                </li>
                <li>
                  <strong>{isEs ? "Experiencia internacional rara entre los quiroprácticos de San Antonio TX." : "International experience rare among San Antonio TX chiropractors."}</strong>
                  {" "}
                  {isEs
                    ? "23+ años de experiencia clínica que abarcan Estados Unidos, Costa Rica, España, Irlanda, los Países Bajos y Guatemala. Esto significa enfoques clínicos más amplios que muchos quiroprácticos en San Antonio simplemente no han encontrado."
                    : "23+ years of clinical experience spanning the United States, Costa Rica, Spain, Ireland, the Netherlands, and Guatemala. That breadth of clinical perspective is something most chiropractors in San Antonio simply haven't encountered."}
                </li>
                <li>
                  <strong>{isEs ? "Calificación verificable de pacientes." : "Verifiable patient ratings."}</strong>
                  {" "}
                  {isEs
                    ? "4.8 estrellas de más de 159 reseñas de Google. Cada reseña es un paciente real de San Antonio que ha pasado por nuestro proceso y ha visto resultados — muchos después de probar 2-3 otros quiroprácticos en San Antonio TX primero."
                    : "4.8 stars from 159+ Google reviews. Every review is a real San Antonio patient who has gone through our process and seen results — many after trying 2-3 other chiropractors in San Antonio TX first."}
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className={styles.saChiroHubCta}>
              <h3 className={styles.saChiroHubH3}>
                {isEs
                  ? "Listo Para Probar al Mejor Quiropráctico en San Antonio?"
                  : "Ready to Try the Best Chiropractor in San Antonio?"}
              </h3>
              <p>
                {isEs
                  ? "Su consulta inicial es gratuita. El Dr. Foss revisará su historial, hará un examen SOT completo y le dirá honestamente si podemos ayudarle. Si no podemos, le referiremos al proveedor correcto en San Antonio. Esa transparencia es por qué los pacientes se quedan."
                  : "Your initial consultation is free. Dr. Foss will review your history, perform a complete SOT exam, and tell you honestly whether we can help. If we can't, we'll refer you to the right provider in San Antonio. That transparency is why patients stay."}
              </p>
              <a
                href={`/${locale}/book-now`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.saChiroHubBtn}
              >
                {isEs ? "Reservar Consulta Gratis San Antonio" : "Book Your Free San Antonio Consultation"}
              </a>
              <p className={styles.saChiroHubPhone}>
                {isEs ? "O llame a nuestro consultorio quiropráctico de San Antonio:" : "Or call our San Antonio chiropractic office:"}
                {" "}
                <a href="tel:+12106851994" className={styles.saChiroHubPhoneLink}>
                  (210) 685-1994
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Wave: SA Chiropractor Hub (#F4F9FF) → Insurance (also #F4F9FF, no wave) */}

        {/* ── INSURANCE ─────────────────────────────── */}
        <InsuranceSection locale={locale} />

        {/* ── SERVICES ──────────────────────────────── */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Nuestros Servicios" : "Our Services"}
            </h2>
            <div className={styles.servicesGrid}>
              {services.map((svc) => {
                const slug = isEs ? svc.slugEs : svc.slugEn;
                const name = isEs ? svc.nameEs : svc.nameEn;
                return (
                  <Link key={svc.slugEn} href={`/${locale}/services/${slug}`} className={styles.serviceCard}>
                    <div className={styles.serviceImgWrap}>
                      <Image
                        src={svc.image}
                        alt={svc.alt}
                        fill
                        className={styles.serviceImg}
                        sizes="(max-width: 480px) 50vw, 25vw"
                      />
                    </div>
                    <div className={styles.serviceOverlay} aria-hidden="true" />
                    <span className={styles.serviceName}>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave: Services (#F4F9FF) → Conditions (#ffffff) */}
        <WaveDown fill="#ffffff" />

        {/* ── CONDITIONS PHOTO GRID — top 8 (full library at /conditions) ── */}
        <section className={styles.conditionsSection}>
          <div className={styles.sectionInner}>
            <p className={styles.conditionsSectionTitle}>
              {isEs ? "LAS CONDICIONES QUE TRATAMOS CON MÁS FRECUENCIA" : "THE MOST COMMON CONDITIONS WE TREAT"}
            </p>
            <p className={styles.conditionsHomeIntro}>
              {isEs
                ? "¿No ve su condición? Tratamos más de 90 condiciones de la columna, los órganos y el cráneo."
                : "Don't see your condition? We treat 90+ conditions across the spine, organs, and cranial systems."}
            </p>
            <div className={`${styles.conditionsGrid} ${styles.conditionsGridHome}`}>
              {homepageConditions.map((c) => (
                <a
                  key={c.label}
                  href={c.href.replace("[locale]", locale)}
                  className={styles.conditionCard}
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className={styles.conditionImg}
                    sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                  <div className={styles.conditionOverlay} aria-hidden="true" />
                  <span className={styles.conditionName}>{isEs ? c.labelEs : c.label}</span>
                </a>
              ))}
            </div>
            <div className={styles.conditionsViewAllWrap}>
              <Link
                href={`/${locale}/conditions`}
                className={styles.conditionsViewAll}
              >
                {isEs ? "Ver Todas las 90+ Condiciones →" : "View All 90+ Conditions We Treat →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Wave: Conditions (#ffffff) → Testimonials (dark) */}
        <WaveDown fill="#0d2a3a" />

        {/* ── VIDEO TESTIMONIALS ────────────────────── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle} style={{ color: "#ffffff" }}>
              {isEs ? "Lo Que Dicen Nuestros Pacientes" : "What Our Patients Say"}
            </h2>
            <p className={styles.testimonialsSub}>
              {isEs
                ? "Historias reales de pacientes que encontraron alivio con el Dr. Dan Foss en San Antonio, TX."
                : "Real patient stories of relief with Dr. Dan Foss in San Antonio, TX."}
            </p>
            <div className={styles.videosGrid}>
              {videoTestimonials.map((v) => (
                <div key={v.id} className={styles.videoCard}>
                  <div className={styles.videoCardEmbed}>
                    <YouTubeFacade
                      videoId={v.id}
                      title={isEs ? v.titleEs : v.titleEn}
                      className={styles.videoCardIframe}
                      lazy
                    />
                  </div>
                  <p className={styles.videoCardTitle}>{isEs ? v.titleEs : v.titleEn}</p>
                </div>
              ))}
            </div>
            <div className={styles.testimonialsMoreWrap}>
              <Link href={`/${locale}/testimonials`} className={styles.testimonialsMore}>
                {isEs ? "Ver Todos los Testimonios →" : "View All Testimonials →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Wave: Testimonials (dark) → Review Carousel (dark) */}
        <WaveUp fill="#0d2a3a" />

        {/* ── REVIEW CAROUSEL ───────────────────────── */}
        <ReviewCarousel locale={locale as "en" | "es"} />

        {/* ── NEW PATIENT SPECIAL ───────────────────── */}
        <section className={styles.newPatientSection}>
          <div className={styles.newPatientInner}>
            <div className={styles.newPatientText}>
              <h2 className={styles.newPatientTitle}>
                {isEs ? "¿Es Usted Nuevo en Nuestra Oficina?" : "Are You New to Our Office?"}
              </h2>
              <p className={styles.newPatientDesc}>
                {isEs
                  ? "Su consulta gratuita incluye una cita individual con el Dr. Dan Foss, donde tomaremos el tiempo para hablar sobre sus preocupaciones de salud actuales y determinar si usted es un buen candidato para el cuidado quiropráctico. Recibirá recomendaciones expertas enfocadas en corregir la causa raíz de su problema, no solo los síntomas. Y si determinamos que no podemos ayudarle, haremos todo lo posible para guiarle al proveedor adecuado."
                  : "Your free consultation includes a one-on-one appointment with Dr. Dan Foss, where we will take the time to discuss your current health concerns and determine if you are a good candidate for chiropractic care. You'll receive expert recommendations focused on correcting the root cause of your problem — not just the symptoms. And if we determine that we cannot help you, we will do everything we can to guide you to the right provider who can."}
              </p>
              <a href={`/${locale}/book-now`} className={styles.newPatientBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Comenzar Hoy →" : "Get Started Today →"}
              </a>
            </div>
            <div className={styles.newPatientPhoto}>
              <Image
                src="/images/newpatientphoto.jpg"
                alt={isEs
                  ? "Dr. Dan Foss en consulta con paciente en Pura Vida"
                  : "Dr. Dan Foss consulting with patient at Pura Vida"}
                width={550}
                height={500}
                className={styles.newPatientImg}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────
            Brand-level FAQs that match the patient-style research queries
            Perplexity, ChatGPT, Google AI Overviews, and Gemini ask about
            chiropractic practices. Each Q is rendered visibly here and
            mirrored in the FAQPage JSON-LD above for AI retrieval. */}
        <section className={styles.faqSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.faqTitle}>
              {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className={styles.faqList}>
              {homepageFaqs.map((f, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{f.q}</summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: FAQ (white) → Final CTA (dark blue) */}
        <WaveDown fill="#0d2a3a" />

        {/* ── FINAL CTA ─────────────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.sectionInner}>
            <h2 className={styles.finalCtaTitle}>
              {isEs ? "¿Listo para Sentirse Mejor?" : "Ready to Feel Better?"}
            </h2>
            <p className={styles.finalCtaSub}>
              {isEs
                ? "No hay riesgo en ver lo que podemos hacer por usted. Llámenos hoy o reserve su consulta gratuita en línea."
                : "There is no risk to see what we can do for you. Call us today or book your free consultation online."}
            </p>
            <div className={styles.finalCtaBtns}>
              <a href={`/${locale}/book-now`} className={styles.finalCtaBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Reservar Consulta Gratis" : "Book Free Consultation"}
              </a>
              <a href="tel:+12106851994" className={styles.finalCtaPhone}>(210) 685-1994</a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
