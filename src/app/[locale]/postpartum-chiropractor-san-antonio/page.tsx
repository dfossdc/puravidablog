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
  slug: "postpartum-chiropractor-san-antonio",
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
    en: "Postpartum chiropractor near you in San Antonio, TX. Pura Vida Chiropractic — Dr. Dan Foss DC offers Webster-certified postpartum recovery care for new moms. Pelvic alignment, lower back pain relief, breastfeeding support. Free first visit. (210) 685-1994.",
    es: "Quiropráctico postparto cerca de usted en San Antonio TX. Pura Vida Chiropractic — atención postparto certificada Webster para nuevas mamás. Alineación pélvica, alivio de dolor lumbar, apoyo a la lactancia. Primera visita gratis. (210) 685-1994.",
  },
  intro: {
    en: [
      "Looking for a postpartum chiropractor near you in San Antonio? At Pura Vida Chiropractic, Dr. Dan Foss, DC has 23+ years of experience helping new moms in San Antonio recover from pregnancy and childbirth — addressing pelvic misalignment, lower back pain, hip imbalance, breastfeeding posture issues, and even C-section recovery. Your first evaluation is free.",
      "Pregnancy and childbirth dramatically reshape your pelvis, sacrum, and lumbar spine — and these changes don't automatically reverse after delivery. Dr. Foss is Webster Technique certified and uses gentle, low-force SOT (Sacro-Occipital Technique) methods specifically appropriate for postpartum patients, including those who are nursing or recovering from C-section.",
      "Pura Vida Chiropractic is bilingual (English and Spanish), insurance friendly, and located in northwest San Antonio at 2318 NW Military Hwy — easy to reach with baby in tow from Stone Oak, Alamo Heights, Castle Hills, Helotes, Boerne, and surrounding areas. Babies are welcome in our family-friendly office.",
    ],
    es: [
      "¿Busca un quiropráctico postparto cerca de usted en San Antonio? En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene más de 23 años de experiencia ayudando a nuevas mamás en San Antonio a recuperarse del embarazo y parto — tratando desalineación pélvica, dolor lumbar, desequilibrio de cadera, problemas de postura de lactancia, e incluso recuperación de cesárea. Su primera evaluación es gratis.",
      "El embarazo y el parto remodelan dramáticamente su pelvis, sacro y columna lumbar — y estos cambios no se revierten automáticamente. El Dr. Foss está certificado en la Técnica Webster y usa métodos suaves de baja fuerza SOT específicamente apropiados para pacientes postparto, incluyendo lactantes y aquellas en recuperación de cesárea.",
      "Pura Vida Chiropractic es bilingüe (inglés y español), insurance friendly, y está ubicado en el noroeste de San Antonio en 2318 NW Military Hwy — fácil de alcanzar con bebé en brazos. Los bebés son bienvenidos en nuestra oficina familiar.",
    ],
  },
  approach: {
    en: [
      "Webster Technique certification — gold-standard postpartum and prenatal pelvic care",
      "Pelvic and sacral alignment to restore pre-pregnancy structure",
      "Diastasis recti assessment and referral to pelvic floor PT when needed",
      "Lower back, hip, and SI joint pain relief through gentle SOT adjustments",
      "Breastfeeding posture coaching to prevent neck and shoulder pain",
      "Babies welcome — your visits don't require childcare",
      "Pediatric chiropractic available for baby (colic, latching, sleep, torticollis)",
      "Bilingual care — full understanding of your treatment in your preferred language",
    ],
    es: [
      "Certificación en Técnica Webster — estándar de oro en atención pélvica postparto y prenatal",
      "Alineación pélvica y sacral para restaurar la estructura pre-embarazo",
      "Evaluación de diástasis recti y referencia a fisioterapia de piso pélvico cuando sea necesario",
      "Alivio del dolor lumbar, de cadera y articulación SI mediante ajustes SOT suaves",
      "Coaching de postura de lactancia para prevenir dolor de cuello y hombro",
      "Bebés bienvenidos — sus visitas no requieren cuidado infantil",
      "Quiropráctica pediátrica disponible para el bebé (cólicos, agarre, sueño, torticolis)",
      "Atención bilingüe — comprensión completa de su tratamiento en su idioma preferido",
    ],
  },
  faqs: [
    {
      en: {
        q: "When can I start chiropractic care after giving birth?",
        a: "Most patients can begin gentle postpartum chiropractic care 1-2 weeks after vaginal delivery, or 4-6 weeks after C-section once cleared by your OB. Dr. Foss uses low-force techniques (SOT) appropriate for early postpartum bodies. We always confirm with your delivering provider when you're ready.",
      },
      es: {
        q: "¿Cuándo puedo empezar la atención quiropráctica después del parto?",
        a: "La mayoría de las pacientes pueden empezar atención quiropráctica postparto suave 1-2 semanas después del parto vaginal, o 4-6 semanas después de cesárea una vez autorizadas por su OB. El Dr. Foss usa técnicas de baja fuerza (SOT) apropiadas para cuerpos postparto tempranos. Siempre confirmamos con su proveedor de parto.",
      },
    },
    {
      en: {
        q: "Can I bring my baby to my appointment?",
        a: "Absolutely — our office is family-friendly and babies are welcome. Many of our postpartum moms bring their newborns to every visit. We can also evaluate your baby for common pediatric issues (colic, breastfeeding latching, torticollis, sleep) at the same visit if you'd like.",
      },
      es: {
        q: "¿Puedo llevar a mi bebé a mi cita?",
        a: "Por supuesto — nuestra oficina es familiar y los bebés son bienvenidos. Muchas de nuestras mamás postparto llevan a sus recién nacidos a cada visita. También podemos evaluar a su bebé para problemas pediátricos comunes (cólicos, agarre de lactancia, torticolis, sueño) en la misma visita si lo desea.",
      },
    },
    {
      en: {
        q: "Will postpartum chiropractic help with breastfeeding pain?",
        a: "Yes — many breastfeeding moms suffer neck, shoulder, mid-back, and wrist pain from prolonged feeding postures. Chiropractic care relieves the structural pain AND we coach you on better breastfeeding ergonomics so the pain doesn't return. We can also evaluate your baby for tongue-tie, latching issues, and torticollis that can make breastfeeding harder.",
      },
      es: {
        q: "¿Ayudará la quiropráctica postparto con el dolor de lactancia?",
        a: "Sí — muchas mamás lactantes sufren dolor de cuello, hombro, espalda media y muñeca por posturas de alimentación prolongadas. La atención quiropráctica alivia el dolor estructural Y le enseñamos mejor ergonomía de lactancia. También podemos evaluar a su bebé para frenillo lingual, problemas de agarre y torticolis.",
      },
    },
    {
      en: {
        q: "How long does postpartum recovery typically take with chiropractic?",
        a: "Most postpartum patients see significant pain relief within 4-6 visits. Full structural recovery (pelvic alignment, core function) typically takes 8-12 weeks of intermittent care. Dr. Foss will give you a clear timeline at your free first evaluation, customized to whether you delivered vaginally or by C-section, your activity level, and any specific complaints.",
      },
      es: {
        q: "¿Cuánto tiempo tarda típicamente la recuperación postparto con quiropráctica?",
        a: "La mayoría de pacientes postparto ven alivio significativo del dolor dentro de 4-6 visitas. La recuperación estructural completa (alineación pélvica, función central) típicamente toma 8-12 semanas de atención intermitente. El Dr. Foss le dará un cronograma claro en su evaluación inicial gratuita.",
      },
    },
    {
      en: {
        q: "Do you accept insurance for postpartum chiropractic care?",
        a: "Yes — Pura Vida Chiropractic is insurance-friendly. We accept Medicare, Aetna, BCBS, Cigna, UHC, TRICARE, and most major plans. We verify your benefits at no cost before your first visit. Many maternity-coverage plans include postpartum chiropractic.",
      },
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
