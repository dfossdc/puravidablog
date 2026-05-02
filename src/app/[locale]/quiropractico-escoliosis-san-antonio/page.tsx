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
  slug: "quiropractico-escoliosis-san-antonio",
  conditionSlug: "scoliosis",
  condition: { en: "Scoliosis", es: "Escoliosis" },
  conditionPlural: { en: "Scoliosis", es: "Escoliosis" },
  h1: {
    en: "Scoliosis Chiropractor in San Antonio, TX",
    es: "Quiropráctico para Escoliosis en San Antonio, TX",
  },
  metaTitle: {
    en: "Scoliosis Chiropractor in San Antonio TX | Pura Vida",
    es: "Quiropráctico para Escoliosis en San Antonio TX | Pura Vida",
  },
  metaDescription: {
    en: "Scoliosis chiropractor in San Antonio TX.",
    es: "Quiropráctico para escoliosis en San Antonio TX. Pura Vida Chiropractic — atención quiropráctica para escoliosis en adolescentes y adultos. Evaluación postural, corrección suave, sin cirugía. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [""],
    es: [
      "¿Busca un quiropráctico para escoliosis en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia atendiendo escoliosis idiopática del adolescente (EIA), escoliosis degenerativa adulta y pacientes post-quirúrgicos en San Antonio. Nuestro enfoque se centra en corrección suave, rehabilitación postural y calidad de vida — no manipulación agresiva. Su primera evaluación es gratis.",
      "La atención quiropráctica para escoliosis no puede revertir una curva estructural, pero puede reducir significativamente el dolor asociado, mejorar el equilibrio postural, retardar la progresión de la curva en adolescentes en crecimiento, y mejorar la movilidad y calidad de vida. El Dr. Foss usa SOT Avanzada (Técnica Sacro-Occipital) — particularmente adecuada para escoliosis porque trata la pelvis, el sacro y el cráneo como un sistema conectado.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio.",
    ],
  },
  approach: {
    en: [""],
    es: [
      "Evaluación postural detallada con documentación fotográfica para seguimiento",
      "Revisión del ángulo Cobb (cuando hay rayos X disponibles) para rastrear progresión objetivamente",
      "SOT Avanzada trata pelvis, sacro y cráneo como un sistema conectado",
      "Ajustes suaves de baja fuerza — apropiados para adolescentes y pacientes post-quirúrgicos",
      "Ejercicios de rehabilitación postural personalizados para apoyar el equilibrio entre visitas",
      "Coordinación con su ortopedista o especialista pediátrico cuando sea relevante",
      "Terapia láser Clase IV para disfunción muscular inflamada relacionada con escoliosis",
      "Atención bilingüe para que las familias entiendan el plan a largo plazo",
    ],
  },
  faqs: [
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Puede un quiropráctico curar la escoliosis?",
        a: "No — ni la quiropráctica ni ningún tratamiento conservador pueden revertir estructuralmente una curva de escoliosis. Lo que la quiropráctica SÍ puede hacer es reducir significativamente el dolor asociado, mejorar el equilibrio postural, apoyar la movilidad espinal, y en adolescentes en crecimiento, potencialmente retardar la progresión de la curva. El Dr. Foss es honesto con cada paciente sobre resultados realistas — sin promesas infladas.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Es segura la quiropráctica para un niño o adolescente con escoliosis?",
        a: "Sí — la quiropráctica pediátrica para escoliosis es segura cuando la realiza un practicante calificado y experimentado. El Dr. Foss tiene décadas de experiencia pediátrica y usa técnicas extremadamente suaves de baja fuerza apropiadas para columnas en crecimiento. Nunca usamos manipulación agresiva en adolescentes y siempre coordinamos con el pediatra u ortopedista.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Necesitaré rayos X antes de la atención quiropráctica para escoliosis?",
        a: "Si tiene rayos X recientes de su doctor, por favor tráigalos — nos ayudan a rastrear su ángulo Cobb objetivamente. Si no tiene imágenes recientes, podemos referirle para rayos X en una clínica local. No tomamos rayos X innecesarios en nuestra oficina.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Puede beneficiarme la quiropráctica si mi escoliosis es severa?",
        a: "Sí — los pacientes con escoliosis severa (ángulos Cobb de 40°+) a menudo se benefician de la quiropráctica para manejo del dolor y calidad de vida, incluso cuando el corsé o la cirugía también son parte de su plan. Coordinamos con su cirujano ortopédico o especialista según sea necesario.",
      },
    },
    {
      en: { q: "", a: "" },
      es: {
        q: "¿Aceptan seguro para quiropráctica de escoliosis?",
        a: "Somos insurance friendly. Traiga su tarjeta de seguro y identificación a la oficina para verificar cómo su seguro puede contribuir a su cuidado.",
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
