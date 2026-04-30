/**
 * Neighborhood-specific landing page data.
 *
 * Each neighborhood gets its own SEO-optimized page targeting hyper-local
 * queries like "chiropractor stone oak" or "castle hills chiropractor".
 * The page is bilingual (English + Spanish) using `isEs` branching.
 *
 * URL pattern:
 *   English: /en/{slug}-chiropractor (e.g. /en/stone-oak-chiropractor)
 *   Spanish: /es/{slug}-chiropractor (same slug, Spanish content)
 *
 * Pura Vida Chiropractic office address (used for distance copy):
 *   2318 NW Military Hwy, Suite 103, San Antonio, TX 78231
 *   Located on the western edge of Castle Hills, ~5 mi from the
 *   intersection of Loop 410 and 281.
 */

export interface NeighborhoodData {
  /** URL slug fragment. Final URL is /{locale}/{slug}-chiropractor */
  slug: string;
  /** Display name in English */
  name: string;
  /** Display name in Spanish (often same; keep separate for flexibility) */
  nameEs: string;
  /** Approximate distance from office, in plain English */
  distanceFromOffice: string;
  distanceFromOfficeEs: string;
  /** Brief area description used in hero */
  areaDescription: string;
  areaDescriptionEs: string;
  /** Page metadata */
  title: string;
  titleEs: string;
  metaDescription: string;
  metaDescriptionEs: string;
  /** Why patients from this neighborhood come here (3-4 reasons) */
  whyChooseUs: string[];
  whyChooseUsEs: string[];
  /** Common conditions seen from this neighborhood */
  commonConditions: { en: string; es: string }[];
  /** Local landmarks mentioned to ground the page geographically */
  landmarks: string[];
  landmarksEs: string[];
  /** ZIP codes served (helps Google understand the geographic match) */
  zipCodes: string[];
  /** Latitude/longitude for schema markup (approximate neighborhood center) */
  lat: number;
  lng: number;
}

export const neighborhoods: NeighborhoodData[] = [
  {
    slug: "stone-oak",
    name: "Stone Oak",
    nameEs: "Stone Oak",
    distanceFromOffice: "about 12 minutes north on US-281",
    distanceFromOfficeEs: "aproximadamente 12 minutos al norte por la US-281",
    areaDescription:
      "Stone Oak is one of San Antonio's premier master-planned communities — home to thousands of families, professionals, and active retirees in zip codes 78258 and 78259. As your neighborhood chiropractor, Pura Vida Chiropractic serves Stone Oak residents with bilingual, family-focused care tailored to the demands of a busy north-side lifestyle.",
    areaDescriptionEs:
      "Stone Oak es una de las comunidades planificadas más prestigiosas de San Antonio, hogar de miles de familias, profesionales y jubilados activos en los códigos postales 78258 y 78259. Como su quiropráctico de barrio, Pura Vida Chiropractic atiende a los residentes de Stone Oak con cuidado bilingüe y centrado en la familia, adaptado a las exigencias de un estilo de vida activo del lado norte.",
    title:
      "Stone Oak Chiropractor | Pura Vida Chiropractic | San Antonio TX",
    titleEs:
      "Quiropráctico en Stone Oak | Pura Vida Chiropractic | San Antonio TX",
    metaDescription:
      "Looking for a chiropractor in Stone Oak? Pura Vida Chiropractic offers SOT chiropractic, SoftWave, and bilingual care for back pain, neck pain, sports injuries, prenatal, and pediatric — minutes from Stone Oak.",
    metaDescriptionEs:
      "¿Busca un quiropráctico en Stone Oak? Pura Vida Chiropractic ofrece quiropráctica SOT, SoftWave y atención bilingüe para dolor de espalda, cuello, lesiones deportivas, prenatal y pediátrica — a minutos de Stone Oak.",
    whyChooseUs: [
      "Bilingual chiropractic care (English/Spanish) — convenient for Stone Oak's diverse families",
      "Advanced SOT certification — the only practice in San Antonio with this credential",
      "Specialized prenatal and pediatric care — popular among Stone Oak's growing families",
      "Same-day appointments and a quick drive south on 281 from Stone Oak",
    ],
    whyChooseUsEs: [
      "Atención quiropráctica bilingüe (inglés/español) — conveniente para las familias diversas de Stone Oak",
      "Certificación SOT Avanzada — la única práctica en San Antonio con esta credencial",
      "Atención prenatal y pediátrica especializada — popular entre las familias en crecimiento de Stone Oak",
      "Citas el mismo día y un viaje rápido al sur por la 281 desde Stone Oak",
    ],
    commonConditions: [
      { en: "Lower back pain from desk-job sitting", es: "Dolor lumbar por trabajo de oficina sentado" },
      { en: "Neck pain and tech neck", es: "Dolor de cuello y cuello tecnológico" },
      { en: "Pregnancy and prenatal care", es: "Embarazo y cuidado prenatal" },
      { en: "Pediatric chiropractic for active kids", es: "Quiropráctica pediátrica para niños activos" },
      { en: "Sports injuries from running, golf, tennis", es: "Lesiones deportivas de correr, golf, tenis" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
    ],
    landmarks: ["The Rim", "La Cantera", "Stone Oak Parkway", "Hardy Oak Boulevard", "TPC San Antonio"],
    landmarksEs: ["The Rim", "La Cantera", "Stone Oak Parkway", "Hardy Oak Boulevard", "TPC San Antonio"],
    zipCodes: ["78258", "78259", "78260"],
    lat: 29.6131,
    lng: -98.4773,
  },
  {
    slug: "castle-hills",
    name: "Castle Hills",
    nameEs: "Castle Hills",
    distanceFromOffice: "minutes from our office on NW Military Hwy",
    distanceFromOfficeEs: "a minutos de nuestra oficina en NW Military Hwy",
    areaDescription:
      "Castle Hills is the small incorporated city just east of our office — a tight-knit, family-oriented community in the heart of north-central San Antonio (zip code 78213). Pura Vida Chiropractic is your truly local Castle Hills chiropractor, offering bilingual, whole-system care without the drive across town.",
    areaDescriptionEs:
      "Castle Hills es la pequeña ciudad incorporada justo al este de nuestra oficina — una comunidad unida y familiar en el corazón del centro-norte de San Antonio (código postal 78213). Pura Vida Chiropractic es su quiropráctico verdaderamente local en Castle Hills, ofreciendo atención bilingüe e integral sin tener que cruzar la ciudad.",
    title:
      "Castle Hills Chiropractor | Pura Vida Chiropractic | San Antonio TX",
    titleEs:
      "Quiropráctico en Castle Hills | Pura Vida Chiropractic | San Antonio TX",
    metaDescription:
      "Castle Hills chiropractor — Pura Vida Chiropractic on NW Military Hwy. Advanced SOT chiropractic, SoftWave therapy, bilingual care for back pain, sciatica, pregnancy, pediatric. Walk-in distance for Castle Hills.",
    metaDescriptionEs:
      "Quiropráctico en Castle Hills — Pura Vida Chiropractic en NW Military Hwy. Quiropráctica SOT Avanzada, terapia SoftWave, atención bilingüe para dolor de espalda, ciática, embarazo, pediatría. A distancia caminable desde Castle Hills.",
    whyChooseUs: [
      "Office located in Castle Hills proper — your truly local chiropractor",
      "Bilingual chiropractic care (English/Spanish)",
      "23+ years of experience treating Castle Hills families",
      "Advanced SOT certification — the only Sacro-Occipital Technique specialist in the area",
    ],
    whyChooseUsEs: [
      "Oficina ubicada en Castle Hills — su quiropráctico verdaderamente local",
      "Atención quiropráctica bilingüe (inglés/español)",
      "Más de 23 años de experiencia atendiendo a familias de Castle Hills",
      "Certificación SOT Avanzada — el único especialista en Técnica Sacro-Occipital en el área",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Neck pain and stiffness", es: "Dolor y rigidez de cuello" },
      { en: "Sciatica", es: "Ciática" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "TMJ and jaw pain", es: "ATM y dolor de mandíbula" },
    ],
    landmarks: ["Northwood Center", "NW Military Hwy", "Loop 410", "North Star Mall", "Castle Hills Elementary"],
    landmarksEs: ["Northwood Center", "NW Military Hwy", "Loop 410", "North Star Mall", "Castle Hills Elementary"],
    zipCodes: ["78213", "78230"],
    lat: 29.5239,
    lng: -98.5208,
  },
  {
    slug: "alamo-heights",
    name: "Alamo Heights",
    nameEs: "Alamo Heights",
    distanceFromOffice: "about 8 minutes east via Loop 410",
    distanceFromOfficeEs: "aproximadamente 8 minutos al este por el Loop 410",
    areaDescription:
      "Alamo Heights — known locally as the \"09\" area — is one of San Antonio's most established and family-oriented neighborhoods (zip code 78209). Pura Vida Chiropractic is the trusted bilingual chiropractor for Alamo Heights residents seeking root-cause care without surgery or long-term medication.",
    areaDescriptionEs:
      "Alamo Heights — conocida localmente como el área \"09\" — es uno de los vecindarios más establecidos y familiares de San Antonio (código postal 78209). Pura Vida Chiropractic es el quiropráctico bilingüe de confianza para los residentes de Alamo Heights que buscan atención de causa raíz sin cirugía ni medicación a largo plazo.",
    title:
      "Alamo Heights Chiropractor | Pura Vida Chiropractic | San Antonio TX",
    titleEs:
      "Quiropráctico en Alamo Heights | Pura Vida Chiropractic | San Antonio TX",
    metaDescription:
      "Alamo Heights chiropractor — bilingual SOT chiropractic, SoftWave, Class IV laser. Pura Vida Chiropractic serves Alamo Heights (78209) with prenatal, pediatric, and auto-injury care minutes from your home.",
    metaDescriptionEs:
      "Quiropráctico en Alamo Heights — quiropráctica SOT bilingüe, SoftWave, láser Clase IV. Pura Vida Chiropractic atiende Alamo Heights (78209) con atención prenatal, pediátrica y de lesiones de auto a minutos de su hogar.",
    whyChooseUs: [
      "Trusted bilingual chiropractic care for Alamo Heights families",
      "Advanced SOT certification — only practice in San Antonio with this credential",
      "Specialized care for athletes, students, and busy professionals",
      "Quick drive west on Loop 410 — easier than crossing downtown",
    ],
    whyChooseUsEs: [
      "Atención quiropráctica bilingüe de confianza para las familias de Alamo Heights",
      "Certificación SOT Avanzada — la única práctica en San Antonio con esta credencial",
      "Atención especializada para atletas, estudiantes y profesionales ocupados",
      "Viaje rápido al oeste por el Loop 410 — más fácil que cruzar el centro",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
      { en: "Sports injuries (Alamo Heights students/athletes)", es: "Lesiones deportivas (estudiantes/atletas de Alamo Heights)" },
      { en: "Pregnancy and prenatal", es: "Embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["Broadway", "Olmos Basin", "McNay Art Museum", "Cambridge Elementary", "Witte Museum"],
    landmarksEs: ["Broadway", "Olmos Basin", "Museo McNay", "Cambridge Elementary", "Museo Witte"],
    zipCodes: ["78209"],
    lat: 29.4847,
    lng: -98.4658,
  },
  {
    slug: "helotes",
    name: "Helotes",
    nameEs: "Helotes",
    distanceFromOffice: "about 15 minutes northwest via Loop 1604",
    distanceFromOfficeEs: "aproximadamente 15 minutos al noroeste por el Loop 1604",
    areaDescription:
      "Helotes is the small, fast-growing community on San Antonio's northwest edge (zip code 78023) — known for its ranch heritage, Bandera Road shopping, and family-friendly suburbs. Pura Vida Chiropractic offers Helotes families bilingual, hands-on chiropractic care worth the short drive south on 1604.",
    areaDescriptionEs:
      "Helotes es la pequeña comunidad de rápido crecimiento en el extremo noroeste de San Antonio (código postal 78023), conocida por su herencia de ranchos, las compras en Bandera Road y los suburbios familiares. Pura Vida Chiropractic ofrece a las familias de Helotes atención quiropráctica bilingüe y práctica que vale la pena el corto viaje al sur por la 1604.",
    title:
      "Helotes Chiropractor | Pura Vida Chiropractic | San Antonio TX",
    titleEs:
      "Quiropráctico en Helotes | Pura Vida Chiropractic | San Antonio TX",
    metaDescription:
      "Helotes chiropractor — Pura Vida Chiropractic offers bilingual SOT chiropractic, SoftWave therapy, prenatal, pediatric, and auto-injury care for Helotes (78023) families. Short drive on Loop 1604.",
    metaDescriptionEs:
      "Quiropráctico en Helotes — Pura Vida Chiropractic ofrece quiropráctica SOT bilingüe, terapia SoftWave, prenatal, pediátrica y lesiones de auto para las familias de Helotes (78023). Viaje corto por el Loop 1604.",
    whyChooseUs: [
      "Bilingual chiropractic care (English/Spanish)",
      "Advanced SOT certification — only practice in San Antonio with this credential",
      "Family-focused care: pediatric, prenatal, auto-injury",
      "Quick 15-minute drive on 1604 from Helotes",
    ],
    whyChooseUsEs: [
      "Atención quiropráctica bilingüe (inglés/español)",
      "Certificación SOT Avanzada — la única práctica en San Antonio con esta credencial",
      "Atención centrada en la familia: pediátrica, prenatal, lesiones de auto",
      "Viaje rápido de 15 minutos por la 1604 desde Helotes",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Sports injuries (rodeo, ranch work, athletics)", es: "Lesiones deportivas (rodeo, trabajo de rancho, atletismo)" },
      { en: "Auto accident injuries from 1604", es: "Lesiones de accidentes de auto en la 1604" },
      { en: "Pregnancy and prenatal care", es: "Embarazo y cuidado prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Neck pain and headaches", es: "Dolor de cuello y dolores de cabeza" },
    ],
    landmarks: ["Bandera Rd", "Loop 1604", "Old Town Helotes", "Government Canyon", "Floyd Elementary"],
    landmarksEs: ["Bandera Rd", "Loop 1604", "Old Town Helotes", "Government Canyon", "Floyd Elementary"],
    zipCodes: ["78023"],
    lat: 29.5783,
    lng: -98.6878,
  },
  {
    slug: "olmos-park",
    name: "Olmos Park",
    nameEs: "Olmos Park",
    distanceFromOffice: "about 6 minutes east via Loop 410",
    distanceFromOfficeEs: "aproximadamente 6 minutos al este por el Loop 410",
    areaDescription:
      "Olmos Park is the small, leafy enclave just south of Alamo Heights and north of downtown San Antonio (zip code 78212) — known for its quiet streets, mid-century homes, and walkable neighborhoods. Pura Vida Chiropractic is the bilingual chiropractor of choice for Olmos Park families wanting whole-system care close to home.",
    areaDescriptionEs:
      "Olmos Park es el pequeño y arbolado enclave justo al sur de Alamo Heights y al norte del centro de San Antonio (código postal 78212), conocido por sus calles tranquilas, casas de mediados de siglo y vecindarios caminables. Pura Vida Chiropractic es el quiropráctico bilingüe preferido por las familias de Olmos Park que buscan atención integral cerca de casa.",
    title:
      "Olmos Park Chiropractor | Pura Vida Chiropractic | San Antonio TX",
    titleEs:
      "Quiropráctico en Olmos Park | Pura Vida Chiropractic | San Antonio TX",
    metaDescription:
      "Olmos Park chiropractor — bilingual SOT chiropractic, SoftWave therapy, Class IV laser. Pura Vida Chiropractic serves Olmos Park (78212) with prenatal, pediatric, sports, and auto-injury care.",
    metaDescriptionEs:
      "Quiropráctico en Olmos Park — quiropráctica SOT bilingüe, terapia SoftWave, láser Clase IV. Pura Vida Chiropractic atiende Olmos Park (78212) con atención prenatal, pediátrica, deportiva y de lesiones de auto.",
    whyChooseUs: [
      "Just minutes from Olmos Park via Loop 410",
      "Bilingual chiropractic care (English/Spanish)",
      "Advanced SOT certification — only such practitioner in San Antonio",
      "Trusted by Olmos Park families for 23+ years",
    ],
    whyChooseUsEs: [
      "A solo minutos de Olmos Park por el Loop 410",
      "Atención quiropráctica bilingüe (inglés/español)",
      "Certificación SOT Avanzada — el único profesional así en San Antonio",
      "De confianza para las familias de Olmos Park por más de 23 años",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Neck pain", es: "Dolor de cuello" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
      { en: "Pregnancy and prenatal", es: "Embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["McCullough Ave", "Olmos Park City Hall", "Olmos Basin", "Trinity University area", "Brackenridge Park"],
    landmarksEs: ["McCullough Ave", "Olmos Park City Hall", "Olmos Basin", "Trinity University area", "Brackenridge Park"],
    zipCodes: ["78212"],
    lat: 29.4717,
    lng: -98.4855,
  },
];

export const neighborhoodSlugs = neighborhoods.map((n) => n.slug);

export function getNeighborhood(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
