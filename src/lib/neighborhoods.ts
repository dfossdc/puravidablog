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
  // ─── Phase 2 hyperlocal expansion: high-Hispanic-density underserved areas ───
  // Per Phase 2 Spanish keyword gap research (~65% of SA metro is Hispanic;
  // Southside and Westside SA are 90-95% Hispanic). Zero competitors mapped in
  // Spanish-language SA chiro keyword set compete in these neighborhoods.
  // These pages target both English and Spanish search via /{locale}/{slug}-chiropractor.
  {
    slug: "south-san-antonio",
    name: "South San Antonio",
    nameEs: "South San Antonio",
    distanceFromOffice: "about 25 minutes north via I-35 / Loop 410 (we are not located in South SA — patients drive to us at our NW Military Hwy office)",
    distanceFromOfficeEs: "aproximadamente 25 minutos al norte por I-35 / Loop 410 (no estamos ubicados en South SA — los pacientes manejan a nuestra oficina en NW Military Hwy)",
    areaDescription:
      "South San Antonio is one of the city's most historic and family-rooted regions — predominantly Hispanic, with deep cultural ties going back generations. Pura Vida Chiropractic isn't located in South SA, but Dr. Dan Foss, DC has built a loyal patient base of South Side families who drive 25 minutes north to our NW Military Hwy office for fully bilingual, root-cause chiropractic care they can't find locally. Whether you're in 78214, 78221, 78223, 78225, or 78237, we're easy to reach via I-35 / Loop 410 — and you'll be welcomed in Spanish from the front desk to the adjustment room.",
    areaDescriptionEs:
      "South San Antonio es una de las regiones más históricas y familiares de la ciudad — predominantemente hispana, con profundas raíces culturales que se remontan a generaciones. Pura Vida Chiropractic no está ubicado en South SA, pero el Dr. Dan Foss, DC ha construido una base leal de pacientes de familias del South Side que manejan 25 minutos al norte a nuestra oficina en NW Military Hwy por atención quiropráctica de causa raíz completamente bilingüe que no encuentran localmente. Sea que esté en 78214, 78221, 78223, 78225 o 78237, somos accesibles por I-35 / Loop 410 — y será recibido en español desde la recepción hasta la sala de ajustes.",
    title:
      "South San Antonio Chiropractor | Pura Vida Chiropractic | Bilingual Care",
    titleEs:
      "Quiropráctico en South San Antonio | Atención Bilingüe | Pura Vida",
    metaDescription:
      "South San Antonio chiropractor — fully bilingual care for Hispanic families. SOT chiropractic, SoftWave, Class IV laser. Pura Vida Chiropractic serves 78214, 78221, 78223, 78225, 78237. Free first visit. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para South San Antonio — atención completamente bilingüe para familias hispanas. Quiropráctica SOT, SoftWave, láser Clase IV. Pura Vida Chiropractic atiende 78214, 78221, 78223, 78225, 78237. Primera visita gratis. (210) 685-1994.",
    whyChooseUs: [
      "Fully bilingual chiropractic care — Spanish from first call to follow-up",
      "Trusted by Hispanic families across SA's South Side for 23+ years",
      "Insurance friendly. Bring your insurance card and ID to verify coverage",
      "Pediatric, prenatal, and family-focused — your whole family in one office",
    ],
    whyChooseUsEs: [
      "Atención quiropráctica completamente bilingüe — español desde la primera llamada hasta el seguimiento",
      "Confiado por familias hispanas en el lado sur de SA por más de 23 años",
      "Somos insurance friendly. Traiga su tarjeta de seguro e ID para verificar cobertura",
      "Pediátrica, prenatal y centrada en la familia — toda su familia en una oficina",
    ],
    commonConditions: [
      { en: "Lower back pain from physical labor", es: "Dolor lumbar por trabajo físico" },
      { en: "Neck pain", es: "Dolor de cuello" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "Pediatric care for infants and children", es: "Atención pediátrica para bebés y niños" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["Mission San Jose", "Texas A&M San Antonio", "Brooks City Base", "Mission Trail", "Stinson Municipal Airport"],
    landmarksEs: ["Misión San José", "Texas A&M San Antonio", "Brooks City Base", "Mission Trail", "Aeropuerto Stinson"],
    zipCodes: ["78214", "78221", "78223", "78225", "78237"],
    lat: 29.3822,
    lng: -98.4806,
  },
  {
    slug: "west-san-antonio",
    name: "West San Antonio",
    nameEs: "West San Antonio",
    distanceFromOffice: "about 20 minutes northeast via Bandera Rd / Loop 410 (we are not located in the Westside — patients drive to our NW Military Hwy office)",
    distanceFromOfficeEs: "aproximadamente 20 minutos al noreste por Bandera Rd / Loop 410 (no estamos ubicados en el Westside — los pacientes manejan a nuestra oficina en NW Military Hwy)",
    areaDescription:
      "West San Antonio is the heart of the city's Hispanic community — over 90% Hispanic across zip codes 78207, 78228, 78227, and 78237, including the Marbach corridor along Loop 410. Pura Vida Chiropractic isn't located in the Westside, but Dr. Dan Foss, DC has built a loyal patient base of Westside families who drive 20 minutes northeast to our NW Military Hwy office because they want fully bilingual care without language barriers — the same quality offered in any premium north-side practice. We're proud to serve Westside Hispanic families and treat language as zero-barrier from the front desk to the adjustment room.",
    areaDescriptionEs:
      "West San Antonio es el corazón de la comunidad hispana de la ciudad — más del 90% hispana en los códigos postales 78207, 78228, 78227 y 78237, incluyendo el corredor de Marbach a lo largo del Loop 410. Pura Vida Chiropractic no está ubicado en el Westside, pero el Dr. Dan Foss, DC ha construido una base leal de pacientes de familias del Westside que manejan 20 minutos al noreste a nuestra oficina en NW Military Hwy porque quieren atención completamente bilingüe sin barreras de idioma — la misma calidad ofrecida en cualquier práctica premium del lado norte. Atendemos a familias hispanas del Westside con orgullo, sin barreras de idioma desde la recepción hasta la mesa de ajustes.",
    title:
      "West San Antonio Chiropractor | Atención Bilingüe | Pura Vida Chiropractic",
    titleEs:
      "Quiropráctico en West San Antonio | Atención Bilingüe | Pura Vida",
    metaDescription:
      "West San Antonio chiropractor — fully bilingual care for the Westside Hispanic community. SOT, SoftWave, prenatal, pediatric. Pura Vida Chiropractic serves 78207, 78228, 78237. Free first visit. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para West San Antonio — atención completamente bilingüe para la comunidad hispana del Westside. SOT, SoftWave, prenatal, pediátrica. Pura Vida Chiropractic atiende 78207, 78228, 78237. Primera visita gratis. (210) 685-1994.",
    whyChooseUs: [
      "Fully bilingual practice — Spanish from front desk to adjustment table",
      "Family-focused care for SA's largest Hispanic community",
      "Insurance friendly. Bring your insurance card and ID to verify coverage",
      "Free first evaluation — no commitment, no high-pressure sales",
    ],
    whyChooseUsEs: [
      "Práctica completamente bilingüe — español desde recepción hasta la mesa de ajuste",
      "Atención centrada en la familia para la comunidad hispana más grande de SA",
      "Insurance friendly — se aceptan la mayoría de los planes principales",
      "Primera evaluación gratuita — sin compromiso, sin ventas de alta presión",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Neck pain and stiffness", es: "Dolor y rigidez de cuello" },
      { en: "Sciatica", es: "Ciática" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "Infant colic, torticollis, latching", es: "Cólicos infantiles, torticolis, agarre" },
      { en: "Auto accident injuries (PIP claims)", es: "Lesiones de accidentes de auto (reclamos PIP)" },
    ],
    landmarks: ["Market Square", "Plaza de Armas", "Westside Cultural Zone", "Our Lady of the Lake University", "Lanier High School", "Marbach Rd", "Las Palmas"],
    landmarksEs: ["Mercado de la Plaza", "Plaza de Armas", "Zona Cultural del Westside", "Universidad Our Lady of the Lake", "Lanier High School", "Marbach Rd", "Las Palmas"],
    zipCodes: ["78207", "78228", "78227", "78237"],
    lat: 29.4319,
    lng: -98.5564,
  },
  {
    slug: "marbach-410",
    name: "Marbach / Loop 410",
    nameEs: "Marbach / Loop 410",
    distanceFromOffice: "about 20 minutes northeast via Loop 410 (we are not located in Marbach — patients drive to our NW Military Hwy office)",
    distanceFromOfficeEs: "aproximadamente 20 minutos al noreste por el Loop 410 (no estamos ubicados en Marbach — los pacientes manejan a nuestra oficina en NW Military Hwy)",
    areaDescription:
      "The Marbach corridor along Loop 410 — covering zip codes 78227, 78211, 78224, and parts of 78237 — is one of San Antonio's largest underserved Latino-dense markets. Working families, military members from Lackland AFB, and multi-generational households fill this part of the Westside. Pura Vida Chiropractic isn't located in Marbach, but we serve a steady stream of Marbach corridor families who drive 20 minutes around Loop 410 to our NW Military Hwy office for fully bilingual care, insurance-friendly service, and accessible payment plans they can't easily find locally. Worth the drive — and the bilingual welcome is the same as if you walked in from down the street.",
    areaDescriptionEs:
      "El corredor de Marbach a lo largo del Loop 410 — cubriendo los códigos postales 78227, 78211, 78224 y partes de 78237 — es uno de los mercados latinos densos más grandes y desatendidos de San Antonio. Familias trabajadoras, miembros militares de Lackland AFB y hogares multigeneracionales llenan esta parte del Westside. Pura Vida Chiropractic no está ubicado en Marbach, pero atendemos un flujo constante de familias del corredor Marbach que manejan 20 minutos por el Loop 410 a nuestra oficina en NW Military Hwy por atención completamente bilingüe, servicio insurance-friendly y planes de pago accesibles que no encuentran fácilmente localmente. Vale el viaje — y la bienvenida bilingüe es la misma que si entraran desde la calle.",
    title:
      "Quiropráctico Marbach / Loop 410 | Atención Bilingüe | Pura Vida",
    titleEs:
      "Quiropráctico Marbach / Loop 410 | Atención Bilingüe | Pura Vida",
    metaDescription:
      "Marbach / Loop 410 chiropractor — bilingual care for the Westside Latino community. Insurance friendly. Bring your insurance card and ID to verify coverage. Accessible payment plans. Pura Vida Chiropractic serves 78227, 78211, 78224, 78237. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico Marbach / Loop 410 — atención bilingüe para la comunidad latina del Westside. Insurance friendly. Traiga su tarjeta de seguro e ID para verificar cobertura. Planes de pago accesibles. Pura Vida Chiropractic atiende 78227, 78211, 78224, 78237. (210) 685-1994.",
    whyChooseUs: [
      "Fully bilingual chiropractic care for Marbach corridor families",
      "Insurance friendly. Military families using TRICARE can verify coverage at the office",
      "Insurance friendly + accessible payment plans for self-pay patients",
      "Insurance friendly for auto injury cases (PIP)",
    ],
    whyChooseUsEs: [
      "Atención quiropráctica completamente bilingüe para familias del corredor Marbach",
      "Insurance friendly. Familias militares usando TRICARE pueden verificar cobertura en la oficina",
      "Insurance friendly + planes de pago accesibles para pacientes sin seguro",
      "Insurance friendly para casos de lesiones de auto (PIP)",
    ],
    commonConditions: [
      { en: "Lower back pain from physical labor", es: "Dolor lumbar por trabajo físico" },
      { en: "Auto accident injuries / whiplash (Loop 410 corridor)", es: "Lesiones de accidentes de auto / latigazo (corredor Loop 410)" },
      { en: "Neck pain", es: "Dolor de cuello" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "Pediatric care for infants and children", es: "Atención pediátrica para bebés y niños" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
    ],
    landmarks: ["Marbach Rd", "Loop 410", "Lackland AFB", "SeaWorld San Antonio", "Las Palmas Shopping Center", "South Park Mall"],
    landmarksEs: ["Marbach Rd", "Loop 410", "Lackland AFB", "SeaWorld San Antonio", "Las Palmas Shopping Center", "South Park Mall"],
    zipCodes: ["78227", "78211", "78224", "78237"],
    lat: 29.4063,
    lng: -98.6422,
  },
  {
    slug: "east-san-antonio",
    name: "East San Antonio",
    nameEs: "East San Antonio",
    distanceFromOffice: "about 20 minutes northwest via I-35 / Loop 410 (we are not located in East SA — patients drive to our NW Military Hwy office)",
    distanceFromOfficeEs: "aproximadamente 20 minutos al noroeste por I-35 / Loop 410 (no estamos ubicados en East SA — los pacientes manejan a nuestra oficina en NW Military Hwy)",
    areaDescription:
      "East San Antonio is a richly diverse, family-rooted community spanning zip codes 78202, 78203, 78208, 78215, 78219, and 78220 — including significant African American and Hispanic populations. Pura Vida Chiropractic isn't located in East SA, but Dr. Dan Foss, DC has built a loyal patient base of East Side families who drive 20 minutes northwest to our NW Military Hwy office for fully bilingual care, fair pricing, and advanced techniques (SOT, SoftWave, Class IV laser) not commonly offered locally. Reachable via I-35 / Loop 410 — and we welcome PIP / auto-accident referrals.",
    areaDescriptionEs:
      "East San Antonio es una comunidad ricamente diversa y familiar que abarca los códigos postales 78202, 78203, 78208, 78215, 78219 y 78220 — incluyendo poblaciones afroamericanas e hispanas significativas. Pura Vida Chiropractic no está ubicado en East SA, pero el Dr. Dan Foss, DC ha construido una base leal de pacientes de familias del East Side que manejan 20 minutos al noroeste a nuestra oficina en NW Military Hwy por atención completamente bilingüe, precios justos, y técnicas avanzadas (SOT, SoftWave, láser Clase IV) no comúnmente ofrecidas localmente.",
    title:
      "East San Antonio Chiropractor | Pura Vida Chiropractic | Bilingual Care",
    titleEs:
      "Quiropráctico en East San Antonio | Atención Bilingüe | Pura Vida",
    metaDescription:
      "East San Antonio chiropractor — bilingual care, auto-injury (PIP) accepted, insurance friendly. SOT, SoftWave, pediatric, prenatal. Pura Vida Chiropractic serves 78202, 78203, 78208, 78215, 78219, 78220. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para East San Antonio — atención bilingüe, lesiones de auto (PIP) aceptadas, insurance friendly. SOT, SoftWave, pediátrica, prenatal. Pura Vida Chiropractic atiende 78202, 78203, 78208, 78215, 78219, 78220.",
    whyChooseUs: [
      "Fully bilingual care — Spanish and English with no quality difference",
      "Insurance friendly + accepts auto-accident PIP claims",
      "Pediatric and prenatal specialty for East SA families",
      "Free first evaluation — meet Dr. Foss before any commitment",
    ],
    whyChooseUsEs: [
      "Atención completamente bilingüe — español e inglés sin diferencia de calidad",
      "Insurance friendly + acepta reclamos de PIP de accidentes de auto",
      "Especialidad pediátrica y prenatal para las familias de East SA",
      "Primera evaluación gratuita — conozca al Dr. Foss antes de cualquier compromiso",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Auto accident injuries / whiplash", es: "Lesiones de accidentes de auto / latigazo" },
      { en: "Neck pain", es: "Dolor de cuello" },
      { en: "Headaches", es: "Dolores de cabeza" },
      { en: "Pregnancy and prenatal", es: "Embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
    ],
    landmarks: ["AT&T Center", "Sunset Station", "St. Philip's College", "Dignowity Hill", "Fort Sam Houston"],
    landmarksEs: ["AT&T Center", "Sunset Station", "St. Philip's College", "Dignowity Hill", "Fort Sam Houston"],
    zipCodes: ["78202", "78203", "78208", "78215", "78219", "78220"],
    lat: 29.4256,
    lng: -98.4525,
  },
  // ─── Phase 2 hyperlocal expansion: suburban growth markets ───
  // Boerne, Schertz, Cibolo are growing northwest/northeast suburban markets
  // with strong commute patterns into our office. Capture local "{city} chiropractor"
  // searches that competitor Castle Hills currently dominates.
  {
    slug: "boerne",
    name: "Boerne",
    nameEs: "Boerne",
    distanceFromOffice: "about 25 minutes northwest via I-10",
    distanceFromOfficeEs: "aproximadamente 25 minutos al noroeste por I-10",
    areaDescription:
      "Boerne is the fast-growing Hill Country town just northwest of San Antonio (zip codes 78006, 78015) — known for its small-town charm, German heritage, and rapid family-driven growth. Pura Vida Chiropractic is a popular choice for Boerne families willing to drive 25 minutes for advanced SOT chiropractic, bilingual care, and specialty pediatric and prenatal services not available locally.",
    areaDescriptionEs:
      "Boerne es el pueblo de rápido crecimiento del Hill Country justo al noroeste de San Antonio (códigos postales 78006, 78015) — conocido por su encanto de pueblo pequeño, herencia alemana y crecimiento familiar rápido. Pura Vida Chiropractic es una opción popular para las familias de Boerne dispuestas a manejar 25 minutos por quiropráctica SOT avanzada, atención bilingüe y servicios especializados pediátricos y prenatales no disponibles localmente.",
    title:
      "Boerne Chiropractor | Pura Vida Chiropractic | Advanced SOT Care",
    titleEs:
      "Quiropráctico en Boerne | Pura Vida Chiropractic | Atención SOT",
    metaDescription:
      "Boerne chiropractor — Pura Vida Chiropractic offers Advanced SOT, SoftWave, Class IV laser, and bilingual care. Worth the 25-min drive from Boerne (78006, 78015). Free first visit. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para Boerne — Pura Vida Chiropractic ofrece SOT Avanzada, SoftWave, láser Clase IV y atención bilingüe. Vale el viaje de 25 min desde Boerne (78006, 78015). Primera visita gratis. (210) 685-1994.",
    whyChooseUs: [
      "Advanced SOT certification — only practice in greater San Antonio",
      "Pediatric and prenatal specialty unavailable in most Boerne practices",
      "Bilingual care for Boerne's growing Hispanic community",
      "Worth the 25-minute drive — many Boerne families make us their primary chiropractor",
    ],
    whyChooseUsEs: [
      "Certificación SOT Avanzada — única práctica en el área metropolitana de San Antonio",
      "Especialidad pediátrica y prenatal no disponible en la mayoría de prácticas de Boerne",
      "Atención bilingüe para la creciente comunidad hispana de Boerne",
      "Vale el viaje de 25 minutos — muchas familias de Boerne nos hacen su quiropráctico principal",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Sports injuries", es: "Lesiones deportivas" },
      { en: "Headaches and migraines", es: "Dolores de cabeza y migrañas" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["Main Street Boerne", "Cibolo Nature Center", "Boerne Lake", "Boerne High School", "I-10 corridor"],
    landmarksEs: ["Main Street Boerne", "Cibolo Nature Center", "Boerne Lake", "Boerne High School", "Corredor I-10"],
    zipCodes: ["78006", "78015"],
    lat: 29.7947,
    lng: -98.7320,
  },
  {
    slug: "schertz",
    name: "Schertz",
    nameEs: "Schertz",
    distanceFromOffice: "about 25 minutes northeast via Loop 1604",
    distanceFromOfficeEs: "aproximadamente 25 minutos al noreste por el Loop 1604",
    areaDescription:
      "Schertz is the family-friendly suburb in the Randolph AFB / military corridor northeast of San Antonio (zip codes 78108, 78154). Pura Vida Chiropractic serves Schertz families — including many active-duty and military families — with bilingual care, insurance-friendly service, and specialty pediatric and prenatal services.",
    areaDescriptionEs:
      "Schertz es el suburbio familiar en el corredor Randolph AFB / militar al noreste de San Antonio (códigos postales 78108, 78154). Pura Vida Chiropractic atiende a las familias de Schertz — incluyendo muchas familias militares en servicio activo — con atención bilingüe, servicio insurance-friendly y servicios pediátricos y prenatales especializados.",
    title:
      "Schertz Chiropractor | Pura Vida | Military Friendly Insurance",
    titleEs:
      "Quiropráctico en Schertz | Pura Vida | Militar Insurance Friendly",
    metaDescription:
      "Schertz chiropractor — Pura Vida Chiropractic is insurance friendly for military families and civilians. Bring your insurance card and ID to verify coverage. SOT, SoftWave, prenatal, pediatric. Bilingual. 25 min from Schertz (78108, 78154). (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para Schertz — Pura Vida Chiropractic es insurance friendly para familias militares y civiles. Traiga su tarjeta de seguro e ID para verificar cobertura. SOT, SoftWave, prenatal, pediátrica. Bilingüe. 25 min de Schertz (78108, 78154). (210) 685-1994.",
    whyChooseUs: [
      "Insurance friendly. Military families using TRICARE can verify coverage at the office",
      "Bilingual chiropractic care for Schertz's diverse population",
      "Pediatric specialty for Schertz's growing families",
      "Advanced SOT — the only Sacro-Occipital Technique specialist in the area",
    ],
    whyChooseUsEs: [
      "Insurance friendly. Familias militares usando TRICARE pueden verificar cobertura en la oficina",
      "Atención quiropráctica bilingüe para la diversa población de Schertz",
      "Especialidad pediátrica para las crecientes familias de Schertz",
      "SOT Avanzada — el único especialista en Técnica Sacro-Occipital en el área",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Neck pain (deployment / training related)", es: "Dolor de cuello (relacionado con despliegue / entrenamiento)" },
      { en: "Pregnancy and prenatal", es: "Embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Sports injuries", es: "Lesiones deportivas" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["Randolph AFB", "Schertz City Hall", "Crescent Bend Nature Park", "Steele High School", "FM 78"],
    landmarksEs: ["Randolph AFB", "Schertz City Hall", "Crescent Bend Nature Park", "Steele High School", "FM 78"],
    zipCodes: ["78108", "78154"],
    lat: 29.5511,
    lng: -98.2697,
  },
  {
    slug: "cibolo",
    name: "Cibolo",
    nameEs: "Cibolo",
    distanceFromOffice: "about 30 minutes northeast via Loop 1604",
    distanceFromOfficeEs: "aproximadamente 30 minutos al noreste por el Loop 1604",
    areaDescription:
      "Cibolo is the rapidly growing family suburb northeast of San Antonio (zip code 78108) — one of the fastest-growing communities in Texas. Pura Vida Chiropractic serves Cibolo families with bilingual chiropractic care, insurance-friendly service, and the specialty SOT, prenatal, and pediatric services families are willing to drive 30 minutes for.",
    areaDescriptionEs:
      "Cibolo es el suburbio familiar de rápido crecimiento al noreste de San Antonio (código postal 78108) — una de las comunidades de más rápido crecimiento en Texas. Pura Vida Chiropractic atiende a las familias de Cibolo con atención quiropráctica bilingüe, servicio insurance-friendly y servicios especializados SOT, prenatales y pediátricos por los que las familias están dispuestas a manejar 30 minutos.",
    title:
      "Cibolo Chiropractor | Pura Vida Chiropractic | Bilingual Family Care",
    titleEs:
      "Quiropráctico en Cibolo | Pura Vida Chiropractic | Familia Bilingüe",
    metaDescription:
      "Cibolo chiropractor — Pura Vida Chiropractic offers Advanced SOT, SoftWave, bilingual care for Cibolo families. Insurance friendly. Bring your insurance card and ID to verify coverage. Worth the 30-min drive (78108). Free first visit. (210) 685-1994.",
    metaDescriptionEs:
      "Quiropráctico para Cibolo — Pura Vida Chiropractic ofrece SOT Avanzada, SoftWave, atención bilingüe para familias de Cibolo. Insurance friendly. Traiga su tarjeta de seguro e ID para verificar cobertura. Vale el viaje de 30 min (78108). Primera visita gratis. (210) 685-1994.",
    whyChooseUs: [
      "Insurance friendly. Military families using TRICARE can verify coverage at the office",
      "Bilingual chiropractic care for Cibolo's diverse families",
      "Advanced SOT certification — rare in the suburban San Antonio area",
      "Pediatric and prenatal specialty unavailable in most Cibolo practices",
    ],
    whyChooseUsEs: [
      "Insurance friendly. Familias militares usando TRICARE pueden verificar cobertura en la oficina",
      "Atención quiropráctica bilingüe para las diversas familias de Cibolo",
      "Certificación SOT Avanzada — rara en el área suburbana de San Antonio",
      "Especialidad pediátrica y prenatal no disponible en la mayoría de prácticas de Cibolo",
    ],
    commonConditions: [
      { en: "Lower back pain", es: "Dolor lumbar" },
      { en: "Pregnancy and prenatal chiropractic", es: "Quiropráctica de embarazo y prenatal" },
      { en: "Pediatric chiropractic", es: "Quiropráctica pediátrica" },
      { en: "Sports injuries (Cibolo / Steele HS athletes)", es: "Lesiones deportivas (atletas de Cibolo / Steele HS)" },
      { en: "Headaches", es: "Dolores de cabeza" },
      { en: "Auto accident injuries", es: "Lesiones de accidentes de auto" },
    ],
    landmarks: ["Cibolo Valley Drive", "Niemietz Park", "Steele High School", "Loop 1604", "Cibolo Creek"],
    landmarksEs: ["Cibolo Valley Drive", "Niemietz Park", "Steele High School", "Loop 1604", "Cibolo Creek"],
    zipCodes: ["78108"],
    lat: 29.5688,
    lng: -98.2189,
  },
];

export const neighborhoodSlugs = neighborhoods.map((n) => n.slug);

export function getNeighborhood(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
