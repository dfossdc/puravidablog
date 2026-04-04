import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ReviewCarousel from "@/components/ReviewCarousel";
import InsuranceSection from "@/components/InsuranceSection";
import styles from "./home.module.css";

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
    title: isEs
      ? "Quiropráctico San Antonio TX | Mejor Quiropráctico | Pura Vida Chiropractic"
      : "Chiropractor San Antonio TX | Best Chiropractor Near Me | Pura Vida Chiropractic",
    description: isEs
      ? "El Dr. Dan Foss — mejor quiropráctico en San Antonio TX. Ajuste quiropráctico San Antonio, terapia SoftWave, láser Clase IV. Quiropráctico cerca de mí en Stone Oak, Castle Hills, Alamo Heights y Helotes. Técnica SOT, quiropráctico que habla español, más de 23 años de experiencia. ¡Evaluación quiropráctica gratis San Antonio!"
      : "Dr. Dan Foss — best chiropractor in San Antonio TX. Chiropractic adjustment San Antonio, SoftWave therapy, Class IV laser. Chiropractor near me serving Stone Oak, Castle Hills, Alamo Heights, and Helotes. SOT chiropractic, Spanish-speaking chiropractor, 23+ years experience. Free chiropractic evaluation San Antonio!",
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
        ? "Quiropráctico San Antonio TX | Pura Vida Chiropractic"
        : "Chiropractor San Antonio TX | Best Chiropractor Near Me | Pura Vida Chiropractic",
      description: isEs
        ? "Quiropráctico bilingüe en San Antonio TX. Atendemos Stone Oak, Castle Hills, Alamo Heights y Helotes. Dr. Dan Foss, DC — más de 23 años de experiencia."
        : "Best chiropractor near me in San Antonio TX. Serving Stone Oak, Castle Hills, Alamo Heights, and Helotes. Dr. Dan Foss, DC — 23+ years experience.",
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const services = [
  {
    slugEn: "chiropractic-care",
    slugEs: "chiropractic-care",
    nameEn: "Chiropractic Care",
    nameEs: "Cuidado Quiropráctico",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp",
    alt: "Chiropractic care adjustment",
  },
  {
    slugEn: "cranial-chiropractic",
    slugEs: "cranial-chiropractic",
    nameEn: "Cranial Chiropractic",
    nameEs: "Quiropráctica Craneal",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Performing-Cranial-Adjustment.webp",
    alt: "Cranial chiropractic therapy",
  },
  {
    slugEn: "softwave-therapy",
    slugEs: "terapia-softwave",
    nameEn: "SoftWave Therapy",
    nameEs: "Terapia SoftWave",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractic-San-Antonio-TX-Softwave-Instrument-Being-Used-On-Patients-Knee.webp",
    alt: "SoftWave therapy treatment",
  },
  {
    slugEn: "shockwave-therapy",
    slugEs: "terapia-ondas-de-choque",
    nameEn: "Shockwave Therapy",
    nameEs: "Terapia de Ondas de Choque",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Shockwave-Instrument-Being-Used-On-Patients-Back-HP-circle.webp",
    alt: "Shockwave therapy treatment",
  },
  {
    slugEn: "pediatric-chiropractic",
    slugEs: "pediatric-chiropractic",
    nameEn: "Pediatric Chiropractic",
    nameEs: "Quiropráctica Pediátrica",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp",
    alt: "Pediatric chiropractic care",
  },
  {
    slugEn: "pregnancy-chiropractic",
    slugEs: "pregnancy-chiropractic",
    nameEn: "Pregnancy Chiropractic",
    nameEs: "Quiropráctica Prenatal",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Pregnant-Patient-HP-circle.webp",
    alt: "Pregnancy chiropractic care",
  },
  {
    slugEn: "class-iv-laser",
    slugEs: "laser-clase-iv",
    nameEn: "Class IV Laser",
    nameEs: "Láser Clase IV",
    image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Laser-Therapy-Being-Used-On-A-Knee-HP-circle.webp",
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
  { label: "Breech Presentation",        labelEs: "Bebé en Posición Podálica",        image: "/images/conditions/breechbaby.jpg",            alt: "Pregnant woman with breech presentation Webster technique - chiropractor San Antonio TX",           title: "Breech presentation Webster technique San Antonio chiropractor",    href: "/[locale]/conditions/breech-presentation" },

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
  { label: "Frozen Shoulder",            labelEs: "Hombro Congelado",                image: "/images/conditions/frozenshoulder.jpg",        alt: "Separated shoulder joint X-ray for frozen shoulder - chiropractor San Antonio TX",                 title: "Frozen shoulder adhesive capsulitis chiropractor San Antonio TX",   href: "/[locale]/conditions/frozen-shoulder" },
  { label: "Rotator Cuff Injuries",      labelEs: "Lesiones del Manguito Rotador",   image: "/images/conditions/rotatorcufftear.jpg",       alt: "Rotator cuff tear medical image - chiropractor San Antonio TX",                                      title: "Rotator cuff injury treatment San Antonio chiropractor",            href: "/[locale]/conditions/rotator-cuff-injuries" },
  { label: "Tennis Elbow",               labelEs: "Codo de Tenista",                 image: "/images/conditions/tenniselbow.jpg",           alt: "Tennis elbow lateral epicondylitis photo - chiropractor San Antonio TX",                             title: "Tennis elbow lateral epicondylitis San Antonio chiropractor",       href: "/[locale]/conditions/tennis-elbow" },
  { label: "Golfer's Elbow",             labelEs: "Codo de Golfista",                image: "/images/conditions/golferselbow.jpg",          alt: "Office worker with medial elbow and arm pain from golfer's elbow - chiropractor San Antonio TX",   title: "Golfer's elbow medial epicondylitis San Antonio chiropractor",      href: "/[locale]/conditions/golfers-elbow" },
  { label: "Carpal Tunnel Syndrome",     labelEs: "Síndrome del Túnel Carpiano",     image: "/images/conditions/carpal-tunnel.jpg",         alt: "Hand with untreated carpal tunnel syndrome nerve compression - chiropractor San Antonio TX",         title: "Carpal tunnel syndrome treatment San Antonio chiropractor",         href: "/[locale]/conditions/carpal-tunnel-syndrome" },
  { label: "De Quervain's Tenosynovitis", labelEs: "Tenosinovitis de De Quervain",   image: "/images/conditions/dequervain.jpg",            alt: "Finkelstein test for De Quervain's tenosynovitis thumb wrist pain - chiropractor San Antonio TX",  title: "De Quervain's tenosynovitis treatment San Antonio chiropractor",    href: "/[locale]/conditions/de-quervains-tenosynovitis" },
  { label: "Trigger Finger",             labelEs: "Dedo en Gatillo",                 image: "/images/conditions/trigger-finger.jpg",        alt: "Trigger finger locking condition of the hand - chiropractor San Antonio TX",                         title: "Trigger finger treatment San Antonio chiropractor",                href: "/[locale]/conditions/trigger-finger" },

  // MID BACK & CORE
  { label: "Rib Subluxation",            labelEs: "Subluxación de Costilla",         image: "/images/conditions/rib-xray.jpg",              alt: "X-ray of rib fracture and rib subluxation - chiropractor San Antonio TX",                           title: "Rib subluxation intercostal neuralgia San Antonio chiropractor",    href: "/[locale]/conditions/rib-subluxation" },
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
    ],
    "medicalSpecialty": "Chiropractic",
    "priceRange": "$$",
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath="" />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <LocalBusinessSchema />

        {/* ── HERO ──────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>
                {isEs ? "Cuidado Quiropráctico Bilingüe — San Antonio, TX" : "Bilingual Chiropractic Care — San Antonio, TX"}
              </p>
              <h1 className={styles.heroTitle}>
                {isEs ? "Quiropráctico de San Antonio Mejor Calificado" : "Top Rated San Antonio Chiropractor"}
              </h1>
              <p className={styles.heroSub}>
                {isEs
                  ? "El Dr. Dan Foss de Pura Vida Quiropráctica es un destacado quiropráctico bilingüe que sirve a San Antonio, Castle Hills, Stone Oak, Alamo Heights, Leon Valley, Helotes y Shavano Park — brindando cuidado personalizado para toda su familia."
                  : "Dr. Dan Foss of Pura Vida Chiropractic is a leading bilingual chiropractor serving San Antonio, Castle Hills, Stone Oak, Alamo Heights, Leon Valley, Helotes, and Shavano Park — providing personalized care for your entire family."}
              </p>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>⭐ {isEs ? "147+ Reseñas 5 Estrellas" : "147+ Five-Star Reviews"}</span>
                <span className={styles.heroTrustItem}>✓ {isEs ? "23+ Años de Experiencia" : "23+ Years Experience"}</span>
                <span className={styles.heroTrustItem}>🗣 {isEs ? "Bilingüe EN/ES" : "Bilingual EN/ES"}</span>
              </div>
              <a
                href="https://puravidasanantonio.com/special/"
                className={styles.heroCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEs ? "Reserve Ahora →" : "Book Now →"}
              </a>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                src="https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-About.webp"
                alt={isEs ? "Dr. Dan Foss Quiropráctico San Antonio TX" : "Dr. Dan Foss Chiropractor San Antonio TX"}
                fill
                className={styles.heroImg}
                priority
                unoptimized
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
            <div className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${welcomeVideoId}`}
                title={isEs ? "Bienvenido a Pura Vida Quiropráctica" : "Welcome To Pura Vida Chiropractic"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
                loading="lazy"
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
                  ? "En Pura Vida Quiropráctica, creemos que su cuerpo fue diseñado para sanar. El Dr. Dan Foss trae más de 23 años de experiencia quiropráctica internacional — estudiando en 3 continentes y 5 países — a las familias de San Antonio. Su exclusivo Protocolo Pura Vida integra quiropráctica, osteopatía, terapia manual y modalidades energéticas, tratando la causa raíz, no solo los síntomas."
                  : "At Pura Vida Chiropractic, we believe your body was designed to heal. Dr. Dan Foss brings over 23 years of international chiropractic experience — studying across 3 continents and 5 countries — to San Antonio families. His unique Pura Vida Protocol integrates chiropractic, osteopathic, manual therapy, and energetic modalities, treating the root cause, not just the symptoms."}
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

        {/* Wave: About (#F4F9FF) → Stats (#0d1f2d) */}
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
              <div className={styles.statNumber}>147+</div>
              <div className={styles.statLabel}>
                {isEs ? "Reseñas de 5 Estrellas" : "Five-Star Reviews"}
              </div>
            </div>
          </div>

          <div className={styles.statsCtaWrap}>
            <div className={styles.statsCtaLine} aria-hidden="true" />
            <a
              href="https://puravidasanantonio.com/special/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.statsCta}
            >
              {isEs ? "Obtenga su Evaluación Gratis" : "Get Your Free Evaluation"}
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
                : "Dr. Foss is one of the few chiropractors in San Antonio with Advanced SOT Certification through SORSI. The Pura Vida Protocol has helped tens of thousands of patients."}
            </p>
            <div className={styles.pillarsGrid}>
              {(isEs
                ? [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss realizando ajuste quiropráctico", title: "Quiropráctica", desc: "Ajustes SOT® Certificado Avanzado de columna y pelvis que restauran la alineación correcta y la función del sistema nervioso." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss realizando ajuste craneal", title: "Ajuste Craneal", desc: "Técnicas precisas de huesos craneales que alivian la presión, mejoran la función cerebral y abordan dolores de cabeza, mandíbula y cuello." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss realizando manipulación de órganos", title: "Manipulación de Órganos", desc: "Técnicas viscerales suaves para restaurar la posición, movilidad y función correcta de los órganos, mejorando la salud integral." },
                    { img: "/images/shockwave-back.webp", imgAlt: "Dr. Foss realizando terapia de ondas de choque", title: "Modalidades Avanzadas", desc: "Terapias SoftWave, Ondas de Choque y Láser Clase IV para cicatrización acelerada y alivio del dolor." },
                  ]
                : [
                    { img: "/images/sideposture.jpg", imgAlt: "Dr. Foss performing chiropractic adjustment", title: "Chiropractic", desc: "Advanced SOT® Certified spinal and pelvic adjustments that restore proper alignment and full nervous system function." },
                    { img: "/images/cranialadult.jpg", imgAlt: "Dr. Foss performing cranial adjusting", title: "Cranial Adjusting", desc: "Precise cranial bone techniques that relieve pressure, improve brain function, and address headaches, jaw pain, and more." },
                    { img: "/images/adrenals.jpg", imgAlt: "Dr. Foss performing organ manipulation", title: "Organ Manipulation", desc: "Gentle visceral techniques to restore proper organ position, mobility, and function for improved whole-body health." },
                    { img: "/images/shockwave-back.webp", imgAlt: "Dr. Foss performing shockwave therapy", title: "Advanced Modalities", desc: "SoftWave, Shockwave, and Class IV Laser therapies for accelerated healing and lasting pain relief." },
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

        {/* Wave: Why (#ffffff) → Insurance (#F4F9FF) */}
        <WaveDown fill="#F4F9FF" />

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

        {/* ── CONDITIONS PHOTO GRID ─────────────────── */}
        <section className={styles.conditionsSection}>
          <div className={styles.sectionInner}>
            <p className={styles.conditionsSectionTitle}>
              {isEs ? "TRATAMOS LAS SIGUIENTES CONDICIONES" : "WE HELP WITH THE FOLLOWING CONDITIONS"}
            </p>
            <div className={styles.conditionsGrid}>
              {conditions.map((c) => (
                <a
                  key={c.label}
                  href={c.href.replace("[locale]", locale)}
                  className={styles.conditionCard}
                >
                  {c.image ? (
                    <>
                      <Image
                        src={c.image}
                        alt={c.alt}
                        {...(c.title ? { title: c.title } : {})}
                        fill
                        className={styles.conditionImg}
                        sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 20vw"
                      />
                      <div className={styles.conditionOverlay} aria-hidden="true" />
                      <span className={styles.conditionName}>{isEs ? c.labelEs : c.label}</span>
                    </>
                  ) : (
                    <span className={styles.conditionNameNoImg}>{isEs ? c.labelEs : c.label}</span>
                  )}
                </a>
              ))}
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
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={isEs ? v.titleEs : v.titleEn}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.videoCardIframe}
                      loading="lazy"
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
              <a href="https://puravidasanantonio.com/special/" className={styles.newPatientBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Comenzar Hoy →" : "Get Started Today →"}
              </a>
            </div>
            <div className={styles.newPatientPhoto}>
              <Image
                src="/images/newpatientphoto.jpg"
                alt={isEs
                  ? "Dr. Dan Foss en consulta con paciente en Pura Vida Quiropráctica San Antonio"
                  : "Dr. Dan Foss consulting with patient at Pura Vida Chiropractic San Antonio"}
                width={550}
                height={500}
                className={styles.newPatientImg}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>
        </section>

        {/* Wave: New Patient (white) → Final CTA (dark blue) */}
        <WaveDown fill="#0d2a3a" />

        {/* ── FINAL CTA ─────────────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.sectionInner}>
            <h2 className={styles.finalCtaTitle}>
              {isEs ? "¿Listo para Sentirse Mejor?" : "Ready to Feel Better?"}
            </h2>
            <p className={styles.finalCtaSub}>
              {isEs
                ? "No hay riesgo en ver lo que podemos hacer por usted. Llámenos hoy o reserve su evaluación gratuita en línea."
                : "There is no risk to see what we can do for you. Call us today or book your free evaluation online."}
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="https://puravidasanantonio.com/special/" className={styles.finalCtaBtn} target="_blank" rel="noopener noreferrer">
                {isEs ? "Reservar Evaluación Gratis" : "Book Free Evaluation"}
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
