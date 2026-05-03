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
  slug: "scoliosis-chiropractor-san-antonio",
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
    en: "Scoliosis chiropractor in San Antonio TX. Pura Vida Chiropractic — Dr. Dan Foss DC offers SOT-based scoliosis care for adolescents and adults. Postural assessment, gentle correction, no surgery. Free first visit. (210) 685-1994.",
    es: "Quiropráctico para escoliosis en San Antonio TX. Pura Vida Chiropractic — atención quiropráctica para escoliosis en adolescentes y adultos. Evaluación postural, corrección suave, sin cirugía. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [
      "Looking for a scoliosis chiropractor in San Antonio? At Pura Vida Chiropractic, Dr. Dan Foss, DC has 23+ years of experience caring for adolescent idiopathic scoliosis (AIS), adult degenerative scoliosis, and post-surgical scoliosis patients in San Antonio. Our approach focuses on gentle correction, postural rehabilitation, and quality of life — not aggressive manipulation. Your first evaluation is free.",
      "Chiropractic care for scoliosis cannot reverse a structural curve, but it can significantly reduce associated pain, improve postural balance, slow curve progression in growing adolescents, and improve mobility and quality of life. Dr. Foss uses Advanced SOT (Sacro-Occipital Technique) — particularly well-suited to scoliosis because it addresses the pelvis, sacrum, and cranium as a connected system rather than focusing only on the curved segment.",
      "Pura Vida Chiropractic is bilingual (English and Spanish), insurance friendly, and located in northwest San Antonio at 2318 NW Military Hwy — easy to reach from Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, and surrounding areas.",
    ],
    es: [
      "¿Busca un quiropráctico para escoliosis en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia atendiendo escoliosis idiopática del adolescente (EIA), escoliosis degenerativa adulta y pacientes post-quirúrgicos en San Antonio. Nuestro enfoque se centra en corrección suave, rehabilitación postural y calidad de vida. Su primera evaluación es gratis.",
      "La atención quiropráctica para escoliosis no puede revertir una curva estructural, pero puede reducir significativamente el dolor asociado, mejorar el equilibrio postural, retardar la progresión de la curva en adolescentes en crecimiento, y mejorar la movilidad y calidad de vida. El Dr. Foss usa SOT Avanzada (Técnica Sacro-Occipital) — particularmente adecuada para escoliosis porque trata la pelvis, el sacro y el cráneo como un sistema conectado.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy.",
    ],
  },
  approach: {
    en: [
      "Detailed postural assessment with photographic documentation for tracking",
      "Cobb angle review (when X-rays are available) to track progression objectively",
      "Advanced SOT addresses pelvis, sacrum, and cranium as a connected system",
      "Gentle, low-force adjustments — appropriate for adolescents and post-surgical patients",
      "Custom postural rehabilitation exercises to support spinal balance between visits",
      "Coordination with your orthopedist or pediatric specialist when relevant",
      "Class IV laser therapy for inflamed scoliosis-related muscle dysfunction",
      "Bilingual care so families fully understand the long-term plan",
    ],
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
      en: {
        q: "Can a chiropractor fix scoliosis?",
        a: "No — neither chiropractic nor any conservative treatment can structurally reverse a scoliosis curve. What chiropractic CAN do is significantly reduce associated pain, improve postural balance, support spinal mobility, and in growing adolescents potentially slow curve progression. Dr. Foss is honest with every scoliosis patient about realistic outcomes — no inflated promises.",
      },
      es: {
        q: "¿Puede un quiropráctico curar la escoliosis?",
        a: "No — ni la quiropráctica ni ningún tratamiento conservador pueden revertir estructuralmente una curva de escoliosis. Lo que la quiropráctica SÍ puede hacer es reducir significativamente el dolor asociado, mejorar el equilibrio postural, apoyar la movilidad espinal, y en adolescentes en crecimiento, potencialmente retardar la progresión de la curva. El Dr. Foss es honesto con cada paciente sobre resultados realistas.",
      },
    },
    {
      en: {
        q: "Is chiropractic safe for a child or teen with scoliosis?",
        a: "Yes — pediatric chiropractic for scoliosis is safe when performed by a qualified, experienced practitioner. Dr. Foss has decades of pediatric experience and uses extremely gentle, low-force techniques appropriate for growing spines. We never use aggressive manipulation on adolescents and always coordinate with your child's pediatrician or orthopedist.",
      },
      es: {
        q: "¿Es segura la quiropráctica para un niño o adolescente con escoliosis?",
        a: "Sí — la quiropráctica pediátrica para escoliosis es segura cuando la realiza un practicante calificado y experimentado. El Dr. Foss tiene décadas de experiencia pediátrica y usa técnicas extremadamente suaves de baja fuerza apropiadas para columnas en crecimiento. Nunca usamos manipulación agresiva en adolescentes.",
      },
    },
    {
      en: {
        q: "Will I need X-rays before chiropractic care for scoliosis?",
        a: "If you have recent X-rays from your doctor, please bring them — they help us track your Cobb angle objectively over time. If you don't have recent imaging, we can refer you for X-rays at a local facility. We won't take unnecessary X-rays in our office.",
      },
      es: {
        q: "¿Necesitaré rayos X antes de la atención quiropráctica para escoliosis?",
        a: "Si tiene rayos X recientes de su doctor, por favor tráigalos — nos ayudan a rastrear su ángulo Cobb objetivamente. Si no tiene imágenes recientes, podemos referirle para rayos X en una clínica local. No tomamos rayos X innecesarios en nuestra oficina.",
      },
    },
    {
      en: {
        q: "What if my scoliosis is severe? Can I still benefit from chiropractic?",
        a: "Yes — severe scoliosis patients (Cobb angles of 40°+) often benefit from chiropractic for pain management and quality of life, even when bracing or surgery is also part of their plan. We coordinate with your orthopedic surgeon or specialist as needed. Dr. Foss has worked with many post-surgical and severe scoliosis patients across his 23+ year career.",
      },
      es: {
        q: "¿Puede beneficiarme la quiropráctica si mi escoliosis es severa?",
        a: "Sí — los pacientes con escoliosis severa (ángulos Cobb de 40°+) a menudo se benefician de la quiropráctica para manejo del dolor y calidad de vida, incluso cuando el corsé o la cirugía también son parte de su plan. Coordinamos con su cirujano ortopédico o especialista según sea necesario.",
      },
    },
    {
      en: {
        q: "Do you accept insurance for scoliosis chiropractic?",
        a: "We are insurance friendly. Bring your insurance card and ID to the office to verify how your insurance can contribute to your care.",
      },
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
  return <ConditionChiropractorPage params={params} content={content} />;
}
