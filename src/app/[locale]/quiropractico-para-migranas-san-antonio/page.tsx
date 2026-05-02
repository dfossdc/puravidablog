import type { Metadata } from "next";
import ConditionChiropractorPage, {
  buildConditionChiropractorMetadata,
  type ConditionChiropractorContent,
} from "@/components/ConditionChiropractorPage";

interface Props { params: Promise<{ locale: string }> }

// Spanish-slug route — only generated at /es. Each Spanish-slug page mirrors
// the English-slug counterpart's content but lives at a Spanish URL so Google
// reads the locale signal from the URL itself (better than relying purely on
// hreflang). The /en variant of this slug 404s — see next.config.mjs which
// 301-redirects /en → /es for Spanish-slug pages.
export async function generateStaticParams() {
  return [{ locale: "es" }];
}

const content: ConditionChiropractorContent = {
  slug: "quiropractico-para-migranas-san-antonio",
  conditionSlug: "migraines",
  condition: { en: "Migraine", es: "Migraña" },
  conditionPlural: { en: "Migraines", es: "Migrañas" },
  h1: {
    en: "Migraine Chiropractor in San Antonio, TX",
    es: "Quiropráctico para Migrañas en San Antonio, TX",
  },
  metaTitle: {
    en: "Migraine Chiropractor in San Antonio TX | Pura Vida Chiropractic",
    es: "Quiropráctico para Migrañas en San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Migraine chiropractor near you in San Antonio, TX. Pura Vida Chiropractic — bilingual care.",
    es: "Quiropráctico para migrañas cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención bilingüe, técnica SOT craneal para alivio de migrañas crónicas. Evaluación gratuita. (210) 685-1994.",
  },
  intro: {
    en: [""],
    es: [
      "¿Busca un quiropráctico para migrañas cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia ayudando a pacientes hispanos de San Antonio a reducir la frecuencia, intensidad y duración de las migrañas mediante atención quiropráctica craneal especializada — sin efectos secundarios de medicamentos. Su primera evaluación es gratis, y todo se explica completamente en español.",
      "Las migrañas no son solo dolores de cabeza fuertes. Involucran disfunción neurológica compleja que a menudo se origina de restricciones cervicales superiores (cuello) y craneales. El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con certificación SOT Avanzada (Técnica Sacro-Occipital) — una técnica diseñada específicamente para tratar la disfunción craneal y cervical superior en la raíz de la mayoría de las migrañas.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar desde Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, Schertz y toda el área metropolitana.",
    ],
  },
  approach: {
    en: [""],
    es: [
      "Certificación SOT Avanzada (Técnica Sacro-Occipital) — rara en San Antonio, diseñada específicamente para patrones de migraña y dolor de cabeza",
      "Ajustes quiroprácticos craneales que tratan las restricciones temporales, esfenoidales y occipitales vinculadas con migrañas crónicas",
      "Análisis cervical superior y corrección suave (C1-C2) — donde se originan la mayoría de los desencadenantes de migrañas",
      "Terapia láser Clase IV para reducir la inflamación nerviosa entre visitas",
      "Evaluación postural para postura de cabeza adelantada, un desencadenante silencioso común",
      "Identificación de desencadenantes: revisamos patrones de estilo de vida, ergonomía y dieta",
      "Protocolos seguros para pediátricos y prenatales — niños y embarazadas incluidos",
      "Atención completamente en español para que el idioma nunca sea una barrera",
    ],
  },
  faqs: [
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Realmente puede un quiropráctico ayudar con las migrañas?",
        a: "Sí — para muchos pacientes, la atención quiropráctica reduce la frecuencia de migrañas en 50% o más, especialmente cuando las migrañas están vinculadas con disfunción cervical superior (cuello), restricciones craneales o problemas posturales. Varios estudios revisados por pares lo respaldan. Pura Vida Chiropractic usa técnicas SOT craneales avanzadas diseñadas específicamente para personas que sufren migrañas — un enfoque más dirigido que los ajustes espinales típicos.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cómo se diferencia un quiropráctico para migrañas de uno regular?",
        a: "Un quiropráctico enfocado en migrañas usa técnicas craneales (como SOT), análisis cervical superior (C1-C2 específicamente) y revisión de patrones de desencadenantes — no solo manipulación espinal genérica. El Dr. Foss tiene la rara certificación SOT Avanzada del SORSI, que capacita quiroprácticos específicamente en evaluación craneal relevante para pacientes con migrañas, vértigo y ATM.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cuántas sesiones hasta notar alivio de migrañas?",
        a: "La mayoría de los pacientes con migrañas notan reducción en la intensidad o frecuencia dentro de 3-6 visitas. La severidad, duración y cronicidad de sus migrañas determinan la duración total del cuidado. El Dr. Foss le dará un plan claro y honesto en su evaluación inicial gratuita — sin contratos a largo plazo de alta presión.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Es segura la quiropráctica para personas con migrañas crónicas?",
        a: "Sí — la atención quiropráctica está bien documentada como segura para pacientes con migrañas. Pura Vida Chiropractic usa técnicas suaves de baja fuerza como SOT (sin agresión), particularmente apropiadas para pacientes con migrañas y propensos a vértigo. Los efectos secundarios son raros y típicamente leves (dolor transitorio).",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Aceptan seguro para tratamiento de migrañas?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Qué condiciones tratan además de migrañas?",
        a: "Tratamos más de 90 condiciones incluyendo dolores de cabeza tensionales, vértigo (BPPV), ATM, presión sinusal, dolor de cuello, ciática, escoliosis, lesiones de auto, dolor de embarazo y más. Muchos pacientes con migrañas también tienen problemas relacionados — los tratamos como un sistema conectado usando quiropráctica craneal y SOT.",
      },
    },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return buildConditionChiropractorMetadata(params, content);
}

export default async function Page({ params }: Props) {
  return ConditionChiropractorPage({ params, content });
}
