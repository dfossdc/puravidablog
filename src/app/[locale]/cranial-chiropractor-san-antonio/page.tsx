import type { Metadata } from "next";
import ConditionChiropractorPage, {
  buildConditionChiropractorMetadata,
  type ConditionChiropractorContent,
} from "@/components/ConditionChiropractorPage";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

const content: ConditionChiropractorContent = {
  slug: "cranial-chiropractor-san-antonio",
  slugEn: "cranial-chiropractor-san-antonio",
  slugEs: "quiropractico-craneal-san-antonio",
  conditionSlug: "tmj-jaw-pain",
  condition: { en: "Cranial Issue", es: "Problema Craneal" },
  conditionPlural: { en: "Cranial Issues", es: "Problemas Craneales" },
  h1: {
    en: "Cranial Chiropractor in San Antonio, TX",
    es: "Quiropráctico Craneal en San Antonio, TX",
  },
  metaTitle: {
    en: "Cranial Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico Craneal en San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Cranial chiropractor in San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC, SORSI Advanced SOT certified, treats TMJ, trigeminal neuralgia, chronic migraines, vertigo, infant plagiocephaly. Free evaluation. Bilingual. Call (210) 685-1994.",
    es: "Quiropráctico craneal en San Antonio TX. Dr. Dan Foss, certificación SOT Avanzada SORSI. Trata ATM, neuralgia del trigémino, migrañas crónicas, vértigo, plagiocefalia infantil. Evaluación gratuita. Bilingüe. (210) 685-1994.",
  },
  intro: {
    en: [
      "Looking for a cranial chiropractor in San Antonio? Dr. Dan Foss, DC at Pura Vida Chiropractic is one of the few SORSI-Advanced-SOT-certified craniopaths in Texas. He uses gentle cranial bone adjustments and Sacro-Occipital Technique (SOT) to treat conditions that traditional chiropractic, dentistry, and ENT often can't resolve — TMJ, trigeminal neuralgia, chronic migraines, vertigo, plagiocephaly in infants, and post-concussion symptoms. Your first evaluation is free.",
      "Cranial chiropractic recognizes that the 22 bones of the skull have small, measurable motion — and when that motion is restricted, it can drive headaches, jaw dysfunction, ear pressure, sinus issues, and neurological symptoms. Dr. Foss has 23+ years of international experience with cranial work and serves on the SORSI board of directors, teaching advanced cranial assessment to other chiropractors.",
      "Pura Vida Chiropractic is bilingual (English and Spanish), insurance friendly, and located in northwest San Antonio at 2318 NW Military Hwy — easy to reach from Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz, and the entire metro area. Cranial work is gentle enough for newborns and pregnant patients.",
    ],
    es: [
      "¿Busca un quiropráctico craneal en San Antonio? El Dr. Dan Foss, DC en Pura Vida Chiropractic es uno de los pocos craniópatas certificados con SOT Avanzada SORSI en Texas. Usa ajustes craneales suaves y la Técnica Sacro-Occipital (SOT) para tratar condiciones que la quiropráctica tradicional, la odontología y los otorrinolaringólogos a menudo no pueden resolver — ATM, neuralgia del trigémino, migrañas crónicas, vértigo, plagiocefalia infantil y síntomas post-conmoción. Su primera evaluación es gratis.",
      "La quiropráctica craneal reconoce que los 22 huesos del cráneo tienen un movimiento pequeño y medible — y cuando ese movimiento está restringido, puede causar dolores de cabeza, disfunción de la mandíbula, presión en el oído, problemas sinusales y síntomas neurológicos. El Dr. Foss tiene más de 23 años de experiencia internacional en trabajo craneal y sirve en la junta directiva de SORSI, enseñando evaluación craneal avanzada a otros quiroprácticos.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar desde Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz y toda el área metropolitana. El trabajo craneal es suficientemente suave para recién nacidos y embarazadas.",
    ],
  },
  approach: {
    en: [
      "SORSI Advanced SOT certification — the highest level of Sacro-Occipital Technique credential, with specific cranial assessment training",
      "Manual evaluation of all 22 cranial bones — temporal, sphenoid, occipital, parietal, frontal, ethmoid, and more — for restriction patterns",
      "CMRT (Chiropractic Manipulative Reflex Technique) protocols that link cranial restrictions to organ and visceral function",
      "Webster Technique certified for prenatal cranial-sacral balance during pregnancy",
      "Pediatric and infant cranial work — extremely gentle, often used for plagiocephaly, torticollis, latching/nursing issues, and infant colic",
      "Post-concussion and TBI cranial decompression protocols for patients with head injury history",
      "Class IV laser therapy and SoftWave regenerative therapy as adjuncts to cranial work",
      "Bilingual care so language is never a barrier to understanding your treatment plan",
    ],
    es: [
      "Certificación SOT Avanzada SORSI — el nivel más alto de la Técnica Sacro-Occipital, con entrenamiento específico de evaluación craneal",
      "Evaluación manual de los 22 huesos craneales — temporal, esfenoides, occipital, parietal, frontal, etmoides y más — para patrones de restricción",
      "Protocolos CMRT (Técnica de Reflejo Quiropráctico Manipulativo) que vinculan restricciones craneales con función orgánica y visceral",
      "Certificado en Técnica Webster para balance cráneo-sacro prenatal durante el embarazo",
      "Trabajo craneal pediátrico e infantil — extremadamente suave, usado para plagiocefalia, tortícolis, problemas de lactancia y cólicos infantiles",
      "Protocolos de descompresión craneal post-conmoción/TBI para pacientes con historia de lesión craneal",
      "Terapia láser Clase IV y terapia regenerativa SoftWave como complementos al trabajo craneal",
      "Atención bilingüe para que el idioma nunca sea una barrera para entender su plan de tratamiento",
    ],
  },
  faqs: [
    {
      en: {
        q: "What does a cranial chiropractor actually do?",
        a: "A cranial chiropractor performs gentle, precise adjustments to the 22 bones of the skull (and their surrounding membranes and fluid pathways) to restore micro-motion that's been restricted by trauma, dental work, birth, or chronic stress. Unlike traditional chiropractic, which focuses on the spine, cranial work directly addresses the structures involved in TMJ, headaches, vertigo, sinus pressure, ear function, and neurological symptoms. Dr. Foss uses Sacro-Occipital Technique (SOT) — the most thoroughly researched cranial method.",
      },
      es: {
        q: "¿Qué hace exactamente un quiropráctico craneal?",
        a: "Un quiropráctico craneal realiza ajustes suaves y precisos a los 22 huesos del cráneo (y sus membranas y vías de líquido cráneo-espinal) para restaurar el micro-movimiento restringido por trauma, trabajo dental, parto o estrés crónico. A diferencia de la quiropráctica tradicional que se enfoca en la columna, el trabajo craneal trata directamente las estructuras involucradas en ATM, dolores de cabeza, vértigo, presión sinusal, función del oído y síntomas neurológicos. El Dr. Foss usa la Técnica Sacro-Occipital (SOT) — el método craneal más investigado.",
      },
    },
    {
      en: {
        q: "What conditions does cranial chiropractic treat?",
        a: "TMJ/jaw pain, chronic migraines and tension headaches, trigeminal neuralgia, vertigo (BPPV and cervicogenic), tinnitus, sinus pressure and chronic sinusitis, post-concussion symptoms, post-dental-work jaw and head pain, infant plagiocephaly (flat-head syndrome), torticollis, latching/nursing difficulties, and infant colic. Many adult patients also benefit when chronic neck and upper-back issues haven't responded to standard adjustments — the cranial component is often the missing piece.",
      },
      es: {
        q: "¿Qué condiciones trata la quiropráctica craneal?",
        a: "ATM/dolor mandibular, migrañas crónicas y dolores de cabeza tensionales, neuralgia del trigémino, vértigo (VPPB y cervicogénico), tinnitus, presión sinusal y sinusitis crónica, síntomas post-conmoción, dolor mandibular y de cabeza post-trabajo dental, plagiocefalia infantil (cabeza plana), tortícolis, dificultades de lactancia y cólicos infantiles. Muchos pacientes adultos también se benefician cuando problemas crónicos de cuello y espalda alta no han respondido a ajustes estándar — el componente craneal es a menudo la pieza faltante.",
      },
    },
    {
      en: {
        q: "Is cranial chiropractic safe for babies and pregnant women?",
        a: "Yes — cranial work is one of the gentlest forms of bodywork available, using pressures often less than the weight of a nickel. Dr. Foss is ICPA-certified in the Webster Technique for pregnancy and has decades of experience with newborns. Cranial work is commonly used for infant plagiocephaly, torticollis, and breastfeeding difficulties precisely because it's safe and effective for the youngest patients. Side effects are rare and typically limited to mild fatigue or transient soreness.",
      },
      es: {
        q: "¿Es segura la quiropráctica craneal para bebés y embarazadas?",
        a: "Sí — el trabajo craneal es una de las formas más suaves de terapia corporal disponible, usando presiones a menudo menores que el peso de una moneda de cinco centavos. El Dr. Foss está certificado por ICPA en la Técnica Webster para embarazo y tiene décadas de experiencia con recién nacidos. El trabajo craneal se usa comúnmente para plagiocefalia infantil, tortícolis y dificultades de lactancia precisamente porque es seguro y efectivo para los pacientes más jóvenes. Los efectos secundarios son raros y típicamente limitados a fatiga leve o dolor transitorio.",
      },
    },
    {
      en: {
        q: "How is this different from craniosacral therapy?",
        a: "Cranial chiropractic and craniosacral therapy share roots but differ in scope. Craniosacral therapy (developed by Upledger) is typically a soft-tissue-only approach. Cranial chiropractic (specifically SORSI-style SOT) integrates cranial bone work with full-spine analysis, pelvic alignment, and CMRT visceral protocols — addressing the cranial-sacral axis as one connected system. Dr. Foss holds the rare Advanced SOT certification, which trains practitioners in this integrated approach. Many patients who got partial relief from craniosacral therapy alone find a more complete resolution with cranial chiropractic.",
      },
      es: {
        q: "¿En qué se diferencia esto de la terapia craneosacral?",
        a: "La quiropráctica craneal y la terapia craneosacral comparten raíces pero difieren en alcance. La terapia craneosacral (desarrollada por Upledger) es típicamente un enfoque solo de tejido blando. La quiropráctica craneal (específicamente SOT estilo SORSI) integra trabajo de huesos craneales con análisis de columna completa, alineación pélvica y protocolos viscerales CMRT — tratando el eje craneal-sacro como un sistema conectado. El Dr. Foss tiene la rara certificación SOT Avanzada que entrena practicantes en este enfoque integrado. Muchos pacientes que obtuvieron alivio parcial solo con terapia craneosacral encuentran una resolución más completa con quiropráctica craneal.",
      },
    },
    {
      en: {
        q: "How many sessions until I notice cranial-related relief?",
        a: "Most patients notice changes within 3-6 visits — often sooner for acute issues like post-dental jaw pain or recent vertigo, longer for chronic conditions like decade-long migraines or post-concussion symptoms. Pediatric cranial work for plagiocephaly typically shows visible improvement within 4-8 visits. Dr. Foss will give you a clear, honest treatment plan and timeline at your free initial evaluation — no high-pressure long-term contracts.",
      },
      es: {
        q: "¿Cuántas sesiones hasta notar alivio relacionado con el cráneo?",
        a: "La mayoría de los pacientes nota cambios dentro de 3-6 visitas — a menudo antes para problemas agudos como dolor mandibular post-dental o vértigo reciente, más tiempo para condiciones crónicas como migrañas de una década o síntomas post-conmoción. El trabajo craneal pediátrico para plagiocefalia típicamente muestra mejora visible dentro de 4-8 visitas. El Dr. Foss le dará un plan de tratamiento claro y honesto en su evaluación inicial gratuita — sin contratos a largo plazo de alta presión.",
      },
    },
    {
      en: {
        q: "Do you accept insurance for cranial chiropractic?",
        a: "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care. Cranial chiropractic is billed under standard chiropractic codes — most plans that cover chiropractic also cover cranial work performed by a licensed DC.",
      },
      es: {
        q: "¿Aceptan seguro para quiropráctica craneal?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro e identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado. La quiropráctica craneal se factura bajo códigos quiroprácticos estándar — la mayoría de planes que cubren quiropráctica también cubren trabajo craneal realizado por un DC licenciado.",
      },
    },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return buildConditionChiropractorMetadata(params, content);
}

export default async function Page({ params }: Props) {
  return <ConditionChiropractorPage params={params} content={content} />;
}
