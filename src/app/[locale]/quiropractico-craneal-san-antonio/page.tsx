import type { Metadata } from "next";
import ConditionChiropractorPage, {
  buildConditionChiropractorMetadata,
  type ConditionChiropractorContent,
} from "@/components/ConditionChiropractorPage";

interface Props { params: Promise<{ locale: string }> }

// Spanish-slug route — only generated at /es. Each Spanish-slug page mirrors
// the English-slug counterpart's content but lives at a Spanish URL so Google
// reads the locale signal from the URL itself (better than relying purely on
// hreflang). The /en variant of this slug 308s — see next.config.mjs which
// 301-redirects /en → /es for Spanish-slug pages.
export async function generateStaticParams() {
  return [{ locale: "es" }];
}

const content: ConditionChiropractorContent = {
  slug: "quiropractico-craneal-san-antonio",
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
    en: "Cranial chiropractor in San Antonio, TX. Pura Vida Chiropractic — bilingual care.",
    es: "Quiropráctico craneal cerca de usted en San Antonio TX. Pura Vida Chiropractic — Dr. Dan Foss DC, certificación SOT Avanzada SORSI. Trata ATM, neuralgia del trigémino, migrañas crónicas, vértigo, plagiocefalia infantil. Evaluación gratuita. (210) 685-1994.",
  },
  intro: {
    en: [""],
    es: [
      "¿Busca un quiropráctico craneal cerca de usted en San Antonio? El Dr. Dan Foss, DC en Pura Vida Chiropractic es uno de los pocos craniópatas certificados con SOT Avanzada SORSI en Texas. Usa ajustes craneales suaves y la Técnica Sacro-Occipital (SOT) para tratar condiciones que la quiropráctica tradicional, la odontología y los otorrinolaringólogos a menudo no pueden resolver — ATM, neuralgia del trigémino, migrañas crónicas, vértigo, plagiocefalia infantil y síntomas post-conmoción. Su primera evaluación es gratis, y todo se explica completamente en español.",
      "La quiropráctica craneal reconoce que los 22 huesos del cráneo tienen un movimiento pequeño y medible — y cuando ese movimiento está restringido, puede causar dolores de cabeza, disfunción de la mandíbula, presión en el oído, problemas sinusales y síntomas neurológicos. El Dr. Foss tiene más de 23 años de experiencia internacional en trabajo craneal y sirve en la junta directiva de SORSI, enseñando evaluación craneal avanzada a otros quiroprácticos en todo el mundo.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar desde Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz y toda el área metropolitana. El trabajo craneal es suficientemente suave para recién nacidos y embarazadas.",
    ],
  },
  approach: {
    en: [""],
    es: [
      "Certificación SOT Avanzada SORSI — el nivel más alto de la Técnica Sacro-Occipital, con entrenamiento específico de evaluación craneal",
      "Evaluación manual de los 22 huesos craneales — temporal, esfenoides, occipital, parietal, frontal, etmoides y más — para patrones de restricción",
      "Protocolos CMRT (Técnica de Reflejo Quiropráctico Manipulativo) que vinculan restricciones craneales con función orgánica y visceral",
      "Certificado en Técnica Webster para balance cráneo-sacro prenatal durante el embarazo",
      "Trabajo craneal pediátrico e infantil — extremadamente suave, usado para plagiocefalia, tortícolis, problemas de lactancia y cólicos infantiles",
      "Protocolos de descompresión craneal post-conmoción/TBI para pacientes con historia de lesión craneal",
      "Terapia láser Clase IV y terapia regenerativa SoftWave como complementos al trabajo craneal",
      "Atención completamente en español para que el idioma nunca sea una barrera",
    ],
  },
  faqs: [
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Qué hace exactamente un quiropráctico craneal?",
        a: "Un quiropráctico craneal realiza ajustes suaves y precisos a los 22 huesos del cráneo (y sus membranas y vías de líquido cráneo-espinal) para restaurar el micro-movimiento restringido por trauma, trabajo dental, parto o estrés crónico. A diferencia de la quiropráctica tradicional que se enfoca en la columna, el trabajo craneal trata directamente las estructuras involucradas en ATM, dolores de cabeza, vértigo, presión sinusal, función del oído y síntomas neurológicos. El Dr. Foss usa la Técnica Sacro-Occipital (SOT) — el método craneal más investigado.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Qué condiciones trata la quiropráctica craneal?",
        a: "ATM/dolor mandibular, migrañas crónicas y dolores de cabeza tensionales, neuralgia del trigémino, vértigo (VPPB y cervicogénico), tinnitus, presión sinusal y sinusitis crónica, síntomas post-conmoción, dolor mandibular y de cabeza post-trabajo dental, plagiocefalia infantil (cabeza plana), tortícolis, dificultades de lactancia y cólicos infantiles. Muchos pacientes adultos también se benefician cuando problemas crónicos de cuello y espalda alta no han respondido a ajustes estándar — el componente craneal es a menudo la pieza faltante.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Es segura la quiropráctica craneal para bebés y embarazadas?",
        a: "Sí — el trabajo craneal es una de las formas más suaves de terapia corporal disponible, usando presiones a menudo menores que el peso de una moneda de cinco centavos. El Dr. Foss está certificado por ICPA en la Técnica Webster para embarazo y tiene décadas de experiencia con recién nacidos. El trabajo craneal se usa comúnmente para plagiocefalia infantil, tortícolis y dificultades de lactancia precisamente porque es seguro y efectivo para los pacientes más jóvenes. Los efectos secundarios son raros y típicamente limitados a fatiga leve o dolor transitorio.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿En qué se diferencia esto de la terapia craneosacral?",
        a: "La quiropráctica craneal y la terapia craneosacral comparten raíces pero difieren en alcance. La terapia craneosacral (desarrollada por Upledger) es típicamente un enfoque solo de tejido blando. La quiropráctica craneal (específicamente SOT estilo SORSI) integra trabajo de huesos craneales con análisis de columna completa, alineación pélvica y protocolos viscerales CMRT — tratando el eje craneal-sacro como un sistema conectado. El Dr. Foss tiene la rara certificación SOT Avanzada que entrena practicantes en este enfoque integrado. Muchos pacientes que obtuvieron alivio parcial solo con terapia craneosacral encuentran una resolución más completa con quiropráctica craneal.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cuántas sesiones hasta notar alivio relacionado con el cráneo?",
        a: "La mayoría de los pacientes nota cambios dentro de 3-6 visitas — a menudo antes para problemas agudos como dolor mandibular post-dental o vértigo reciente, más tiempo para condiciones crónicas como migrañas de una década o síntomas post-conmoción. El trabajo craneal pediátrico para plagiocefalia típicamente muestra mejora visible dentro de 4-8 visitas. El Dr. Foss le dará un plan de tratamiento claro y honesto en su evaluación inicial gratuita — sin contratos a largo plazo de alta presión.",
      },
    },
    {
      en: { q: "", a: "" },
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
