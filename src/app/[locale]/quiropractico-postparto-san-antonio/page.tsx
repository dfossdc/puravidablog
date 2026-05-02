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
  slug: "quiropractico-postparto-san-antonio",
  conditionSlug: "postpartum-recovery",
  condition: { en: "Postpartum", es: "Postparto" },
  conditionPlural: { en: "Postpartum Recovery", es: "Recuperación Postparto" },
  h1: {
    en: "Postpartum Chiropractor in San Antonio, TX",
    es: "Quiropráctico Postparto en San Antonio, TX",
  },
  metaTitle: {
    en: "Postpartum Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico Postparto en San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Postpartum chiropractor in San Antonio TX.",
    es: "Quiropráctico postparto cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención postparto certificada Webster para nuevas mamás. Alineación pélvica, alivio de dolor lumbar, apoyo a la lactancia. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [""],
    es: [
      "¿Busca un quiropráctico postparto cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia ayudando a nuevas mamás en San Antonio a recuperarse del embarazo y parto — tratando desalineación pélvica, dolor lumbar, desequilibrio de cadera, problemas de postura de lactancia, e incluso recuperación de cesárea. Su primera evaluación es gratis.",
      "El embarazo y el parto remodelan dramáticamente su pelvis, sacro y columna lumbar — y estos cambios no se revierten automáticamente después del parto. El Dr. Foss está certificado en la Técnica Webster y usa métodos suaves de baja fuerza SOT (Técnica Sacro-Occipital) específicamente apropiados para pacientes postparto, incluyendo lactantes y aquellas en recuperación de cesárea.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar con bebé en brazos. Los bebés son bienvenidos en nuestra oficina familiar.",
    ],
  },
  approach: {
    en: [""],
    es: [
      "Certificación en Técnica Webster — estándar de oro en atención pélvica postparto y prenatal",
      "Alineación pélvica y sacral para restaurar la estructura pre-embarazo",
      "Evaluación de diástasis recti y referencia a fisioterapia de piso pélvico cuando sea necesario",
      "Alivio del dolor lumbar, de cadera y articulación SI mediante ajustes SOT suaves",
      "Coaching de postura de lactancia para prevenir dolor de cuello y hombro",
      "Bebés bienvenidos — sus visitas no requieren cuidado infantil",
      "Quiropráctica pediátrica disponible para el bebé (cólicos, agarre, sueño, torticolis)",
      "Atención bilingüe — comprensión completa en español",
    ],
  },
  faqs: [
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cuándo puedo empezar la atención quiropráctica después del parto?",
        a: "La mayoría de las pacientes pueden empezar atención quiropráctica postparto suave 1-2 semanas después del parto vaginal, o 4-6 semanas después de cesárea una vez autorizadas por su OB. El Dr. Foss usa técnicas de baja fuerza (SOT) apropiadas para cuerpos postparto tempranos. Siempre confirmamos con su proveedor de parto cuando esté lista.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Puedo llevar a mi bebé a mi cita?",
        a: "Por supuesto — nuestra oficina es familiar y los bebés son bienvenidos. Muchas de nuestras mamás postparto llevan a sus recién nacidos a cada visita. También podemos evaluar a su bebé para problemas pediátricos comunes (cólicos, agarre de lactancia, torticolis, sueño) en la misma visita si lo desea.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Ayudará la quiropráctica postparto con el dolor de lactancia?",
        a: "Sí — muchas mamás lactantes sufren dolor de cuello, hombro, espalda media y muñeca por posturas de alimentación prolongadas. La atención quiropráctica alivia el dolor estructural Y le enseñamos mejor ergonomía de lactancia para que el dolor no regrese. También podemos evaluar a su bebé para frenillo lingual, problemas de agarre y torticolis.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Cuánto tiempo tarda típicamente la recuperación postparto con quiropráctica?",
        a: "La mayoría de pacientes postparto ven alivio significativo del dolor dentro de 4-6 visitas. La recuperación estructural completa (alineación pélvica, función central) típicamente toma 8-12 semanas de atención intermitente. El Dr. Foss le dará un cronograma claro en su evaluación inicial gratuita, personalizado a si dio a luz vaginalmente o por cesárea.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Aceptan seguro para atención quiropráctica postparto?",
        a: "Sí — Pura Vida Chiropractic es insurance-friendly. Aceptamos Medicare, Aetna, BCBS, Cigna, UHC, TRICARE y la mayoría de los planes principales. Verificamos sus beneficios sin costo antes de su primera visita. Muchos planes de cobertura maternal incluyen quiropráctica postparto.",
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
