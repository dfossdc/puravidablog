import type { Metadata } from "next";
import ConditionChiropractorPage, {
  buildConditionChiropractorMetadata,
  type ConditionChiropractorContent,
} from "@/components/ConditionChiropractorPage";

interface Props { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return [{ locale: "es" }];
}

const content: ConditionChiropractorContent = {
  slug: "quiropractico-dolor-de-cabeza-san-antonio",
  conditionSlug: "headaches",
  condition: { en: "Headache", es: "Dolor de Cabeza" },
  conditionPlural: { en: "Headaches", es: "Dolores de Cabeza" },
  h1: {
    en: "Headache Chiropractor in San Antonio, TX",
    es: "Quiropráctico para Dolor de Cabeza en San Antonio, TX",
  },
  metaTitle: {
    en: "Headache Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico para Dolor de Cabeza San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Headache chiropractor near you in San Antonio TX.",
    es: "Quiropráctico para dolor de cabeza cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención bilingüe, técnica SOT craneal para alivio de cefaleas tensionales y crónicas. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [""],
    es: [
      "¿Busca un quiropráctico para dolor de cabeza cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia tratando dolores de cabeza tensionales, cervicogénicos (de origen cervical), en racimo y crónicos diarios — sin efectos secundarios de medicamentos. Su primera evaluación es gratis y todo se explica completamente en español.",
      "La mayoría de los dolores de cabeza crónicos se originan de tensión cervical superior, postura de cabeza adelantada, disfunción mandibular (ATM) o restricciones de huesos craneales. El Dr. Foss usa SOT Avanzada (Técnica Sacro-Occipital) — un enfoque quiropráctico especializado que trata estos generadores específicos cervicales superiores y craneales, no solo manipulación espinal genérica.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en 2318 NW Military Hwy en el noroeste de San Antonio.",
    ],
  },
  approach: {
    en: [""],
    es: [
      "Identificación del tipo de dolor de cabeza — tensional, cervicogénico, en racimo, sinusal o migraña — en la admisión",
      "Quiropráctica craneal SOT Avanzada tratando restricciones temporales, esfenoidales y occipitales",
      "Análisis cervical superior y corrección suave (C1-C2) para liberar desencadenantes primarios",
      "Evaluación postural y ergonómica para postura de cabeza adelantada y cuello tecnológico",
      "Evaluación y tratamiento de ATM para dolores de cabeza relacionados con la mandíbula",
      "Terapia láser Clase IV para reducir inflamación cervical y craneal",
      "Revisión de desencadenantes de tensión y estrés — sueño, hidratación, tiempo de pantalla",
      "Atención bilingüe — comprensión completa en español",
    ],
  },
  faqs: [
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Puede un quiropráctico ayudar con dolores de cabeza tensionales?",
        a: "Sí — la atención quiropráctica es uno de los tratamientos no farmacéuticos más efectivos para dolores de cabeza tensionales. La mayoría de los dolores tensionales se originan de tensión muscular cervical superior, postura de cabeza adelantada o disfunción mandibular — todo directamente tratable con ajuste quiropráctico, corrección postural y técnicas craneales. Muchos de nuestros pacientes ven alivio significativo en las primeras 4-6 visitas.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cuál es la diferencia entre un dolor tensional y una migraña?",
        a: "Los dolores tensionales se sienten como una banda apretada alrededor de la cabeza, son bilaterales (ambos lados) y rara vez incluyen náuseas. Las migrañas son usualmente unilaterales, pulsátiles, y a menudo incluyen náuseas, sensibilidad a la luz o aura. Ambos pueden responder bien a la quiropráctica — pero el enfoque del tratamiento difiere.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Qué tan rápido veré alivio de dolor de cabeza con quiropráctica?",
        a: "Muchos pacientes reportan reducción en intensidad dentro de las primeras 1-3 visitas. La frecuencia típicamente se reduce notablemente para la visita 6-8. Los patrones crónicos de muchos años pueden tomar más tiempo. En su evaluación gratuita, el Dr. Foss le dará un cronograma claro basado en su caso específico.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Aceptan seguro para tratamiento de dolores de cabeza?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Es segura la quiropráctica para pacientes con dolores diarios crónicos?",
        a: "Sí — la atención quiropráctica está bien documentada como segura incluso para personas con dolores crónicos diarios. Usamos técnicas suaves de baja fuerza (SOT) particularmente apropiadas para pacientes propensos a dolores de cabeza.",
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
