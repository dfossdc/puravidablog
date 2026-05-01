import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic();

// ── CONFIG ──────────────────────────────────────────────────────────────────
const OUTPUT_DIR = "./content/posts"; // adjust to your Next.js posts folder
const CLINIC_CONTEXT = `
You are writing blog posts for Dr. Dan Foss, DC at Pura Vida Chiropractic in San Antonio, TX.

ABOUT DR. DAN FOSS:
- Graduated Western States Chiropractic College 2003
- Advanced SOT Certification through SORSI (Sacro Occipital Research Society International)
- 23+ years of experience
- Practiced internationally in Costa Rica, Spain, Ireland, Netherlands, Guatemala
- Bilingual English/Spanish clinic serving San Antonio's Latino community
- Origin story: healed from childhood torticollis by a chiropractor after an MD prescribed pharmaceuticals
- Brand philosophy: treat root cause, not symptoms
- Tagline: "Get Healthy. Stay Healthy."
- Services: corrective chiro, cranial therapy, pediatric/prenatal, SoftWave, shockwave, Class IV laser, auto injury
- Protocol: Pura Vida Protocol (chiropractic + osteopathic + manual therapy + PT + energetic modalities)
- Address: 2318 NW Military Hwy #103, San Antonio, TX 78231
- Phone: (210) 685-1994
- Website: puravidasanantonio.com
- Hours: Mon/Tue/Thu 7am–4pm
- Christian faith, passionate about health freedom and whole-body wellness

WRITING STYLE:
- Warm, educational, and authoritative — like a trusted doctor explaining to a friend
- Never fear-mongering, never salesy
- Use simple language for complex concepts
- Include personal touches where natural ("In my 23 years of practice..." or "I see this in my San Antonio patients...")
- For Spanish posts: use formal usted form throughout
- Always end with a call to action to call (210) 685-1994 or visit the clinic
- Brand colors context: teal blue, olive green, amber gold

FORMATTING RULES:
- Output clean markdown with frontmatter
- Use ## and ### headings (not #)
- Include a "Key Takeaways" section near the end
- 800-1200 words per post (longer for technical topics, up to 1500)
- No keyword stuffing — write naturally
- Each post should be genuinely educational and useful on its own
`;

// ── ALL 33 BLOG POSTS ────────────────────────────────────────────────────────
const posts = [
  // ── TIER 1: General Education (8 posts) ─────────────────────────────────
  {
    slug: "could-your-spine-be-causing-your-stomach-problems",
    title: "Could Your Spine Be Causing Your Stomach Problems?",
    tier: 1,
    language: "en",
    tags: ["CMRT", "digestive health", "somato-visceral", "organs", "SOT"],
    description:
      "Most people don't connect back pain with stomach issues — but they should. Learn how specific spinal vertebrae directly control your digestive organs through the somato-visceral reflex.",
    prompt: `Write a blog post titled "Could Your Spine Be Causing Your Stomach Problems?"

    Cover:
    - The somato-visceral reflex concept explained simply (spine → organ signal)
    - The viscero-somatic reflex (organ → spine signal — why the same vertebra keeps subluxating)
    - Specific examples: T5 and the stomach, T6-T9 and the liver/gallbladder
    - Why this means GERD, acid reflux, and digestive issues may have a spinal component
    - How CMRT at Pura Vida Chiropractic addresses both the vertebra AND the organ
    - Who this might help (people with chronic digestive issues who haven't found answers)

    Include San Antonio / Latino community context naturally.
    Frontmatter: title, date (use 2024-03-15), description, tags, author: "Dr. Dan Foss DC", category: "CMRT"`,
  },
  {
    slug: "what-is-cmrt-the-chiropractic-technique-that-adjusts-organs",
    title: "What Is CMRT? The Chiropractic Technique That Adjusts Organs",
    tier: 1,
    language: "en",
    tags: ["CMRT", "SOT", "organs", "DeJarnette", "chiropractic"],
    description:
      "CMRT — Chiropractic Manipulative Reflex Technique — is an advanced SOT method that works directly with your organs. Here's what it is, who developed it, and what conditions it can help.",
    prompt: `Write a blog post titled "What Is CMRT? The Chiropractic Technique That Adjusts Organs"

    Cover:
    - What CMRT stands for and who developed it (Dr. M.B. DeJarnette, chiropractor and osteopath)
    - The core concept: spinal vertebrae correspond to organ systems
    - How CMRT is different from standard chiropractic (soft tissue + reflex points + visceral work)
    - Who can perform CMRT (only Advanced SOT certified doctors — establish Dan's credential here)
    - List of conditions that respond to CMRT: GERD, PMS, menstrual cramps, menopausal symptoms, infertility, allergies, asthma, adrenal fatigue, constipation, diarrhea, gallbladder, liver, hypoglycemia
    - What a CMRT treatment session feels like at Pura Vida
    - Why this approach gets lasting results when other methods fail

    Frontmatter: title, date (2024-03-22), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "why-does-my-back-keep-going-out-in-the-same-spot",
    title: "Why Does My Back Keep Going Out in the Same Spot?",
    tier: 1,
    language: "en",
    tags: ["CMRT", "viscero-somatic", "subluxation", "chronic pain", "SOT"],
    description:
      "If you keep returning to the chiropractor for the same vertebra, there's a reason — and it's probably not what you think. The answer may be hiding in your organs.",
    prompt: `Write a blog post titled "Why Does My Back Keep Going Out in the Same Spot?"

    Cover:
    - The frustrating experience of getting adjusted and having the same spot go out again
    - The viscero-somatic reflex loop: when an organ is chronically stressed, it keeps pulling the vertebra back into subluxation
    - Specific examples: the person with chronic T5 issues who also has reflux; the person with recurring L1 who has kidney stress
    - Why standard chiropractic alone misses this (adjusts the spine but not the organ driving the problem)
    - How the Pura Vida Protocol addresses both — CMRT + spinal correction together
    - When to suspect an organ is driving your spinal problem (list of clues)

    Use Dan's voice naturally. Personal anecdote encouraged ("I had a patient who...").
    Frontmatter: title, date (2024-03-29), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "cranial-adjusting-san-antonio-what-it-is-and-who-needs-it",
    title: "Cranial Adjusting in San Antonio: What It Is and Who Needs It",
    tier: 1,
    language: "en",
    tags: ["cranial adjusting", "craniopathy", "SOT", "headaches", "San Antonio"],
    description:
      "Cranial adjusting is one of the most powerful and least understood techniques in chiropractic. Learn what it is, what conditions it helps, and why Dr. Dan Foss offers it in San Antonio.",
    prompt: `Write a blog post titled "Cranial Adjusting in San Antonio: What It Is and Who Needs It"

    Cover:
    - The 22 bones of the cranium and why they continue to move in adults (dispel the "fused skull" myth)
    - The cranial rhythmic impulse (CRI) and cerebrospinal fluid (CSF) flow — nourishment and toxin removal
    - What happens when cranial bones are restricted
    - Conditions that respond to cranial adjusting: headaches, vertigo, dizziness, TMJ/TMD, tinnitus, trigeminal neuralgia, learning difficulties, tooth pain, ear infections in babies, post-concussion symptoms, adjustments that won't hold
    - Dan's Advanced SOT certification through SORSI and what that means for cranial work
    - What a cranial session feels like (gentle, light contacts — patients usually love it)
    - Why San Antonio residents should know this option exists

    Frontmatter: title, date (2024-04-05), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "mi-bebe-tuvo-parto-dificil-quiropractico",
    title: "Mi bebé tuvo un parto difícil — ¿debería ver a un quiropráctico craneal?",
    tier: 1,
    language: "es",
    tags: ["pediatric", "cranial", "birth trauma", "plagiocephaly", "Spanish", "bebé"],
    description:
      "El parto es uno de los eventos más físicamente exigentes en la vida de un bebé. Aprenda cómo el ajuste craneal puede ayudar con el trauma del nacimiento, la plagiocefalia, los cólicos y más.",
    prompt: `Write a blog post IN SPANISH (formal usted form throughout) titled "Mi bebé tuvo un parto difícil — ¿debería ver a un quiropráctico craneal?"

    Cover (in Spanish):
    - El parto como evento físicamente exigente para el cráneo del bebé
    - Traumas craneales comunes del nacimiento: parto con forceps, vacuum, cesárea, parto prolongado
    - Condiciones que pueden resultar: plagiocefalia (cabeza plana), dificultad para lactar, cólicos, infecciones de oído recurrentes, tortícolis
    - Cómo el ajuste craneal suave (sin crujidos, con contactos muy suaves) puede restaurar el movimiento de los huesos craneales
    - La ventana de oportunidad: por qué es mejor intervenir temprano
    - El historial de Dan con pacientes pediátricos, incluyendo su propio origen (tortícolis de infancia)
    - Tranquilizar a los padres: es extremadamente suave y seguro para bebés
    - CTA en español con número de teléfono

    Frontmatter in English: title (Spanish), date (2024-04-12), description (Spanish), tags, author, category: "Pediatric Chiropractic"`,
  },
  {
    slug: "por-que-no-necesitas-el-crac-para-que-funcione-el-ajuste",
    title: "¿Por qué no necesitas escuchar el 'crac' para que el ajuste funcione?",
    tier: 1,
    language: "es",
    tags: ["SOT", "adjusting", "Spanish", "no-crack", "neurología"],
    description:
      "Muchos pacientes creen que el sonido del 'crac' es señal de que el ajuste funcionó. La ciencia dice algo diferente — y la técnica SOT lo demuestra.",
    prompt: `Write a blog post IN SPANISH (formal usted form) titled "¿Por qué no necesitas escuchar el 'crac' para que el ajuste funcione?"

    Cover (in Spanish):
    - El miedo común al sonido del crujido, especialmente en la comunidad latina
    - Qué es realmente ese sonido (intercambio de gas en la articulación — cavitación)
    - Por qué el sonido NO confirma que el ajuste fue exitoso
    - La neurología del ajuste: lo que importa es el cambio en el sistema nervioso, no el ruido
    - Técnica SOT: los bloques cuneiformes trabajan con la gravedad y la neurología, sin manipulación forzada
    - Quiénes NO deben recibir ajustes de alta velocidad (hiperlaxitud ligamentosa, EDS, articulaciones hipermóviles)
    - Mensaje tranquilizador: en Pura Vida, nunca se forzará nada
    - Invite a pacientes nerviosos a llamar primero

    Frontmatter in English: title (Spanish), date (2024-04-19), description (Spanish), tags, author, category: "SOT"`,
  },
  {
    slug: "sacroiliac-joint-the-one-joint-most-doctors-miss",
    title: "The Sacroiliac Joint: The One Joint Most Doctors Miss",
    tier: 1,
    language: "en",
    tags: ["sacroiliac joint", "SOT", "low back pain", "sciatica", "pelvic instability"],
    description:
      "The sacroiliac joint is involved in more pain conditions than most people realize — including shoulder pain, knee pain, and even TMJ. Here's why SOT is the best approach for a joint that most doctors miss entirely.",
    prompt: `Write a blog post titled "The Sacroiliac Joint: The One Joint Most Doctors Miss"

    Cover:
    - Anatomy: sacrum + ilium = SI joint, held together by ligaments
    - What happens when SI joint ligaments are stretched (hypermobility vs. hypomobility)
    - Why the body compensates with muscle activation — and how far-reaching those symptoms are
    - Why standard chiropractic (mobilizing the joint) can make hypermobile SI worse
    - The SOT approach: stabilization through blocks, gravity-assisted correction, trochanteric belt support
    - Healing timeline: 4-6 weeks for ligament healing
    - Why San Antonio active adults and athletes need to know about this

    Frontmatter: title, date (2024-04-26), description, tags, author, category: "SOT"`,
  },
  {
    slug: "chiropractic-hormones-pms-menopause-adrenal-fatigue",
    title: "Chiropractic and Hormones: What Your Spine Has to Do With PMS, Menopause, and Adrenal Fatigue",
    tier: 1,
    language: "en",
    tags: ["hormones", "CMRT", "PMS", "menopause", "adrenal fatigue", "women's health"],
    description:
      "The connection between your spine and your hormones is real — and it's one that CMRT directly addresses. Learn how spinal nerve interference affects the reproductive system, adrenals, and more.",
    prompt: `Write a blog post titled "Chiropractic and Hormones: What Your Spine Has to Do With PMS, Menopause, and Adrenal Fatigue"

    Cover:
    - The nervous system's role in hormone regulation
    - The T10-L2 zone and its connection to the adrenal glands and kidneys
    - The L1-S4 zone and reproductive organ innervation
    - How CMRT addresses: PMS, menstrual cramps, menopausal hot flashes, adrenal fatigue, fertility issues
    - Why these conditions often persist despite medication
    - Especially relevant for San Antonio's Latina women community
    - Emphasize: complement to gynecological care, not replacement

    Frontmatter: title, date (2024-05-03), description, tags, author, category: "CMRT"`,
  },

  // ── TIER 2: Specific CMRT Organ Posts (10 posts) ──────────────────────────
  {
    slug: "t5-subluxation-stomach-acid-reflux-gerd",
    title: "T5 and Your Stomach: The Spinal Root of Acid Reflux and GERD",
    tier: 2,
    language: "en",
    tags: ["CMRT", "GERD", "acid reflux", "T5", "stomach", "digestive"],
    description:
      "Thoracic vertebra 5 has a direct nerve connection to your stomach. When T5 subluxates, digestive symptoms follow. Here's the spinal root of acid reflux that most gastroenterologists never consider.",
    prompt: `Write a blog post titled "T5 and Your Stomach: The Spinal Root of Acid Reflux and GERD"

    Cover:
    - The T5 vertebra and its direct autonomic nerve connection to the stomach
    - How T5 subluxation reduces parasympathetic tone to the stomach
    - The somato-visceral reflex from T5 to stomach and the viscero-somatic feedback loop
    - Clinical signs: chronic T5 tightness, mid-back pain, left shoulder blade referral combined with digestive symptoms
    - DeJarnette's CMRT stomach protocol: anterior stomach contact points, T5 adjustment, Chapman's reflex points
    - Why PPIs and antacids address symptoms but not the nerve interference
    - Case type example ("I've seen patients who...")
    - What to expect from treatment: timeline, frequency, combined approach

    Frontmatter: title, date (2024-05-10), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "liver-gallbladder-right-shoulder-pain-cmrt",
    title: "Right Shoulder Pain You Didn't Know Was Coming From Your Liver and Gallbladder",
    tier: 2,
    language: "en",
    tags: ["CMRT", "liver", "gallbladder", "right shoulder pain", "T6-T9", "referred pain"],
    description:
      "Chronic right shoulder pain that doesn't respond to standard treatment may have an organ origin. Learn how the liver and gallbladder refer pain to the shoulder and how CMRT addresses the root cause.",
    prompt: `Write a blog post titled "Right Shoulder Pain You Didn't Know Was Coming From Your Liver and Gallbladder"

    Cover:
    - Visceral referred pain — organs referring to distant body areas
    - T6-T9 and their nerve connections to the liver and gallbladder
    - Right phrenic nerve referral pattern → right shoulder pain
    - Chapman's anterior liver reflex points and posterior points
    - Chapman's gallbladder points
    - The CMRT liver and gallbladder protocol
    - Lifestyle factors that compound the problem
    - Integration with Dan's Pura Vida Protocol
    - When to refer: signs that require medical evaluation

    Frontmatter: title, date (2024-05-17), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "adrenal-glands-spine-cmrt-chronic-fatigue",
    title: "Your Adrenal Glands and Your Spine: The CMRT Approach to Chronic Fatigue and Burnout",
    tier: 2,
    language: "en",
    tags: ["CMRT", "adrenal fatigue", "chronic fatigue", "T9-T11", "cortisol", "burnout"],
    description:
      "Adrenal fatigue is real — and it has a spinal component most doctors miss. Learn how T9-T11 vertebrae connect to the adrenal glands and how CMRT can help restore your energy and resilience.",
    prompt: `Write a blog post titled "Your Adrenal Glands and Your Spine: The CMRT Approach to Chronic Fatigue and Burnout"

    Cover:
    - What the adrenal glands do (cortisol, adrenaline, stress response, energy regulation)
    - T9-T11 vertebrae and their autonomic nerve connections to the adrenal glands
    - Adrenal fatigue symptoms: exhaustion, difficulty waking, afternoon crashes, salt cravings, low resilience
    - Chapman's adrenal reflex points
    - The CMRT adrenal protocol
    - Lifestyle integration: sleep, nutrition, stress reduction
    - Dan's San Antonio perspective on burnout culture

    Frontmatter: title, date (2024-05-24), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "ileocecal-valve-most-overlooked-organ-chiropractic",
    title: "The Ileocecal Valve: The Most Overlooked Structure in Chiropractic Care",
    tier: 2,
    language: "en",
    tags: ["CMRT", "ileocecal valve", "ICV", "constipation", "toxicity", "right hip pain"],
    description:
      "The ileocecal valve controls the flow between your small and large intestine — and when it malfunctions, it causes a cascade of symptoms that can mimic appendicitis, constipation, hip pain, and chronic toxicity.",
    prompt: `Write a blog post titled "The Ileocecal Valve: The Most Overlooked Structure in Chiropractic Care"

    Cover:
    - What the ileocecal valve (ICV) is and what it does
    - What happens when ICV gets stuck open vs stuck closed
    - The right iliac fossa reflex point (near McBurney's point)
    - How chiropractors trained in CMRT assess and treat the ICV
    - Dietary triggers that chronically stress the ICV
    - Why this is common in San Antonio patients (diet culture, spicy food, stress)

    Frontmatter: title, date (2024-05-31), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "chapmans-reflex-points-hidden-map-body",
    title: "Chapman's Reflex Points: The Hidden Diagnostic Map on Your Body",
    tier: 2,
    language: "en",
    tags: ["CMRT", "Chapman's points", "neurolymphatic reflexes", "diagnosis", "organ health"],
    description:
      "Chapman's neurolymphatic reflex points are specific locations on the body that become tender when certain organs are stressed. They're a powerful diagnostic and treatment tool used in CMRT.",
    prompt: `Write a blog post titled "Chapman's Reflex Points: The Hidden Diagnostic Map on Your Body"

    Cover:
    - Who Dr. Frank Chapman was and his discovery
    - What Chapman's points are: small, tender, nodular areas corresponding to specific organs
    - Anterior vs posterior points and how they're used
    - Examples of key points (liver, gallbladder, stomach, ICV, adrenals)
    - What it feels like when a Chapman's point is active
    - Treatment: sustained gentle pressure on anterior + posterior simultaneously
    - How Dan uses Chapman's points in his intake assessment

    Frontmatter: title, date (2024-06-07), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "kidney-protocol-cmrt-lower-back-pain",
    title: "The Kidney Protocol in CMRT: When Lower Back Pain Isn't Just Muscular",
    tier: 2,
    language: "en",
    tags: ["CMRT", "kidneys", "lower back pain", "T10-L2", "fluid retention"],
    description:
      "Not all lower back pain is muscular or disc-related. The kidneys sit in the T10-L2 zone and chronic kidney stress can drive persistent low back pain, fluid retention, and blood pressure issues.",
    prompt: `Write a blog post titled "The Kidney Protocol in CMRT: When Lower Back Pain Isn't Just Muscular"

    Cover:
    - The kidneys' location and their nerve supply from T10-L2
    - How kidney stress creates viscero-somatic subluxation and local flank/lower back pain
    - Differentiating kidney-driven back pain from muscular or disc pain
    - Chapman's reflex points for the kidney
    - The CMRT kidney protocol
    - Kidney stressors: dehydration, high protein diet, NSAIDs, caffeine, chronic stress
    - Blood pressure connection
    - When to refer: signs of true kidney pathology

    Frontmatter: title, date (2024-06-14), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "chiropractic-immune-system-spleen-lungs-respiratory",
    title: "Chiropractic and the Immune System: The Spleen, Lungs, and Spinal Connection",
    tier: 2,
    language: "en",
    tags: ["CMRT", "immune system", "spleen", "lungs", "allergies", "respiratory", "T2-T5"],
    description:
      "The 1918 flu pandemic revealed a stunning survival advantage for chiropractic patients. The reason comes down to the nervous system's direct control over immune function through T2-T5.",
    prompt: `Write a blog post titled "Chiropractic and the Immune System: The Spleen, Lungs, and Spinal Connection"

    Cover:
    - Historical chiropractic and immune research (1918 flu pandemic)
    - T2-T5 and their autonomic connections to the heart, lungs, bronchi, and thymus
    - The spleen's role in immunity — spleen reflex points in CMRT
    - CMRT applications for: chronic allergies, asthma, recurrent colds/flus, bronchitis, sinus infections
    - The lymphatic system connection: thoracic adjusting improves lymphatic drainage
    - San Antonio cedar season and air quality context

    Frontmatter: title, date (2024-06-21), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "cmrt-female-reproductive-health-periods-fertility-menopause",
    title: "CMRT and Female Reproductive Health: Periods, Fertility, and Menopause",
    tier: 2,
    language: "en",
    tags: ["CMRT", "reproductive health", "fertility", "menopause", "PMS", "uterus", "ovaries", "sacral"],
    description:
      "The sacral nerve plexus controls the uterus, ovaries, and reproductive organs. When sacral alignment is off, reproductive dysfunction follows. Here's the CMRT approach to women's health.",
    prompt: `Write a blog post titled "CMRT and Female Reproductive Health: Periods, Fertility, and Menopause"

    Cover:
    - The sacral plexus (S2-S4) and parasympathetic control of the reproductive organs
    - How sacral subluxation affects menstrual regularity, PMS, fertility, menopausal hot flashes
    - CMRT reflex points for the uterus and ovaries
    - The sacroiliac joint's role in pelvic floor tension and reproductive health
    - Cultural sensitivity for the Latina community
    - Emphasize: CMRT complements gynecological care

    Frontmatter: title, date (2024-06-28), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "vagus-nerve-gut-heart-spine-connection",
    title: "The Vagus Nerve: Why Your Gut, Heart, and Spine Are All Connected",
    tier: 2,
    language: "en",
    tags: ["vagus nerve", "CMRT", "cranial nerve X", "parasympathetic", "gut-brain axis", "heart rate"],
    description:
      "The vagus nerve is the longest cranial nerve in the body — and it connects your brain to nearly every major organ. Understanding it changes how you think about health, healing, and chiropractic.",
    prompt: `Write a blog post titled "The Vagus Nerve: Why Your Gut, Heart, and Spine Are All Connected"

    Cover:
    - What the vagus nerve is: cranial nerve X, the great parasympathetic highway
    - What it controls: heart rate, breathing, digestion, liver, spleen, kidneys, immune response
    - The gut-brain axis: 80% of vagal signals go FROM gut TO brain
    - High vagal tone = rest/digest/heal; low tone = chronic disease, inflammation, anxiety
    - The cranial connection: vagus exits through jugular foramen — cranial bone restriction compresses vagal output
    - Symptoms of poor vagal tone
    - How cranial adjusting + CMRT together restore vagal function
    - Heart rate variability (HRV) as a measurable marker

    Frontmatter: title, date (2024-07-05), description, tags, author, category: "CMRT"`,
  },
  {
    slug: "prostate-health-lumbar-spine-cmrt-mens-health",
    title: "Prostate Health and the Lumbar Spine: What CMRT Can Do for Men",
    tier: 2,
    language: "en",
    tags: ["CMRT", "prostate", "men's health", "lumbar", "sacral", "pelvic pain"],
    description:
      "Men rarely hear that chiropractic can help with prostate health — but the lumbar and sacral nerve plexus directly innervates the prostate gland. CMRT offers a non-pharmaceutical approach to chronic pelvic tension and prostate dysfunction.",
    prompt: `Write a blog post titled "Prostate Health and the Lumbar Spine: What CMRT Can Do for Men"

    Cover:
    - The prostate's nerve supply: L3-S3 and the sacral plexus
    - How sacral subluxation creates chronic pelvic tension affecting prostate health
    - Symptoms: chronic pelvic pain, urinary frequency/urgency, lower back pain, referred groin pain
    - CMRT reflex points for the prostate
    - Address machismo culture: safe, non-invasive, drug-free
    - Lifestyle factors: sitting all day, chronic stress, inflammatory diet
    - When to refer: PSA levels, urological evaluation

    Frontmatter: title, date (2024-07-12), description, tags, author, category: "CMRT"`,
  },

  // ── TIER 3: Cranial Technique Posts (12 posts) ───────────────────────────
  {
    slug: "sphenoid-bone-master-bone-of-the-skull",
    title: "The Sphenoid Bone: The Master Bone of Your Skull and Why It Matters",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "sphenoid", "craniopathy", "SOT", "pituitary", "vision", "sinuses"],
    description:
      "The sphenoid bone sits at the center of the skull and articulates with every other cranial bone. When it's restricted, the effects ripple through your entire nervous system — including your hormones.",
    prompt: `Write a blog post titled "The Sphenoid Bone: The Master Bone of Your Skull and Why It Matters"

    Cover:
    - Anatomy: the sphenoid sits behind the eyes like a butterfly, articulating with ALL other cranial bones
    - The pituitary gland sits in the sella turcica — connection to hormones
    - The optic canal runs through the sphenoid — connection to vision
    - The sphenoidal sinuses and chronic sinus issues
    - The sphenobasilar synchondrosis (SBS): where sphenoid meets occiput
    - What sphenoid restriction causes: headaches behind the eyes, vision changes, sinus pressure, hormonal disruption
    - How cranial adjusting corrects sphenoid dysfunction
    - Dan's SOT craniopathy training credential

    Frontmatter: title, date (2024-07-19), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "sphenobasilar-synchondrosis-most-important-joint-never-heard-of",
    title: "The Sphenobasilar Synchondrosis: The Most Important Joint You've Never Heard Of",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "SBS", "sphenobasilar", "craniopathy", "SOT", "flexion extension"],
    description:
      "The sphenobasilar synchondrosis is the junction between the sphenoid and occiput at the base of the skull. Its position and motion patterns govern the function of the entire cranium — and body.",
    prompt: `Write a blog post titled "The Sphenobasilar Synchondrosis: The Most Important Joint You've Never Heard Of"

    Cover:
    - What the SBS is: the articulation between the sphenoid bone and the basilar occiput
    - Why it matters: it governs the primary respiratory mechanism
    - The five SBS strain patterns and what each causes clinically (flexion/extension, torsion, lateral strain, vertical strain, compression)
    - What different strain patterns can cause: facial asymmetry, chronic headaches, scoliosis tendency
    - How SOT-trained craniopaths assess SBS position and motion
    - Birth trauma as a common cause

    Frontmatter: title, date (2024-07-26), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "temporal-bones-ears-vertigo-tinnitus-cranial-adjusting",
    title: "Temporal Bones and Your Ears: Vertigo, Tinnitus, and Hearing Loss from a Cranial Perspective",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "temporal bones", "vertigo", "tinnitus", "cranial nerve VIII", "ears"],
    description:
      "The temporal bones house the inner ear apparatus and the vestibulocochlear nerve (cranial nerve VIII). When temporal bone motion is restricted, vertigo, tinnitus, and hearing problems can follow.",
    prompt: `Write a blog post titled "Temporal Bones and Your Ears: Vertigo, Tinnitus, and Hearing Loss from a Cranial Perspective"

    Cover:
    - The temporal bones: location, anatomy, what they house (inner ear, CN VIII, Eustachian tube opening)
    - How temporal bone rotation is restricted or torqued: compression of CN VIII → vertigo, tinnitus, muffled hearing
    - Eustachian tube compression → chronic ear infections in children
    - Assessment: how a SOT craniopath palpates temporal bone motion
    - Treatment: the temporal bone adjustment
    - Clinical results with vertigo patients

    Frontmatter: title, date (2024-08-02), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "occiput-atlas-where-skull-meets-spine",
    title: "The Occiput and Atlas: Where Your Skull Meets Your Spine",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "occiput", "atlas", "C1", "atlanto-occipital", "dural tube", "vagus nerve"],
    description:
      "The atlanto-occipital joint — where the base of your skull meets C1 — is one of the most neurologically significant joints in the body. It cannot be fully corrected without addressing both the cranium and the upper cervical spine together.",
    prompt: `Write a blog post titled "The Occiput and Atlas: Where Your Skull Meets Your Spine"

    Cover:
    - The atlanto-occipital joint: anatomy, what passes through this area (brainstem, vagus nerve, vertebral arteries, CSF)
    - The dural tube connecting occiput to sacrum
    - You cannot fully correct C1 without correcting the occiput first
    - Symptoms of AO joint restriction: base of skull headaches, cervicogenic dizziness, swallowing difficulty
    - The vagus nerve compression at the jugular foramen
    - Post-concussion and whiplash: why the AO joint is always involved

    Frontmatter: title, date (2024-08-09), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "cranial-sutures-skull-was-never-meant-to-be-a-helmet",
    title: "Cranial Sutures: Why the Skull Was Never Meant to Be a Solid Helmet",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "cranial sutures", "craniopathy", "SOT", "adult cranial motion"],
    description:
      "Medical schools have long taught that cranial sutures fuse in adulthood — but modern research and clinical evidence tell a different story. The skull moves, and that motion is essential to health.",
    prompt: `Write a blog post titled "Cranial Sutures: Why the Skull Was Never Meant to Be a Solid Helmet"

    Cover:
    - The historical teaching (sutures fuse) vs. evidence of adult cranial motion
    - The three major sutures and what each does (coronal, sagittal, lambdoid)
    - Causes of suture restriction: birth trauma, head injury, dental trauma
    - Treatment: specific sutural spreading techniques
    - CSF flow through arachnoid granulations near sutures — brain detox connection
    - Dan's background teaching cranial at SORSI conferences

    Frontmatter: title, date (2024-08-16), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "maxilla-bone-tmj-sleep-apnea-forward-head-posture",
    title: "The Maxilla: The Hidden Bone Behind Your TMJ, Sleep Apnea, and Forward Head Posture",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "maxilla", "TMJ", "sleep apnea", "forward head posture", "palate"],
    description:
      "The maxilla — the bone your upper teeth grow from — is involved in far more than dental function. Its position affects the TMJ, airway, C1 vertebra, and even your head posture.",
    prompt: `Write a blog post titled "The Maxilla: The Hidden Bone Behind Your TMJ, Sleep Apnea, and Forward Head Posture"

    Cover:
    - What the maxilla is and what it does
    - The maxilla-C1 relationship: impossible to fully balance C1 without balancing the maxilla
    - Narrow or distorted palate effects: airway compromise → sleep apnea, forward head posture, TMJ dysfunction
    - Infant connection: narrow palate → nursing difficulty, latch problems
    - How Dan assesses and adjusts the maxilla
    - When dental collaboration is needed

    Frontmatter: title, date (2024-08-23), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "dural-tension-hidden-force-pulling-spine-out-of-alignment",
    title: "Dural Tension: The Hidden Force That Keeps Pulling Your Spine Out of Alignment",
    tier: 3,
    language: "en",
    tags: ["dura mater", "dural tension", "cranial adjusting", "SOT", "CSF", "sacrum", "occiput"],
    description:
      "The dura mater connects your skull to your sacrum in one continuous sleeve. When it's under tension, it pulls your entire spine out of alignment — and no amount of spinal adjusting will hold until the dural tension is released.",
    prompt: `Write a blog post titled "Dural Tension: The Hidden Force That Keeps Pulling Your Spine Out of Alignment"

    Cover:
    - What the dura mater is: the tough outer membrane surrounding the brain and spinal cord
    - The dural tube: continuous from the occiput, attaching firmly at C2, C3, and the sacrum
    - The occiput-sacrum reciprocal relationship: the anatomical basis of SOT
    - Signs of dural tension: adjustments that don't hold, bilateral tension, symptoms that alternate sides
    - How CSF flows through the dural tube and why restriction impairs brain nourishment
    - The SOT approach: sacral blocks + cranial correction together
    - Dan's protocol: always assess the cranium-sacrum relationship — they are one system

    Frontmatter: title, date (2024-08-30), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "frontal-bone-sinuses-focus-cognitive-clarity",
    title: "The Frontal Bone: Sinus Drainage, Mental Focus, and the Forehead Nobody Thinks About",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "frontal bone", "sinuses", "cognitive function", "ADHD", "focus", "children"],
    description:
      "The frontal bone covers your prefrontal cortex — the part of your brain responsible for focus, decisions, and emotional regulation. When the frontal bone is restricted, sinus drainage, concentration, and even behavior can be affected.",
    prompt: `Write a blog post titled "The Frontal Bone: Sinus Drainage, Mental Focus, and the Forehead Nobody Thinks About"

    Cover:
    - Anatomy: frontal bone covers the frontal lobes and contains the frontal sinuses
    - Frontal sinus drainage impairment → chronic congestion, headache, post-nasal drip
    - The prefrontal cortex connection: focus, emotional regulation, impulse control
    - How frontal restriction may contribute to: brain fog, mood instability, reading difficulties in children
    - Treatment: the frontal lift technique
    - Children especially benefit: learning difficulties, ADHD-like symptoms
    - Dan's pediatric cranial work in the San Antonio community

    Frontmatter: title, date (2024-09-06), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "cranial-adjusting-after-concussion-tbi",
    title: "Cranial Adjusting After Concussion and Traumatic Brain Injury: What Nobody Told You",
    tier: 3,
    language: "en",
    tags: ["cranial adjusting", "concussion", "TBI", "traumatic brain injury", "post-concussion syndrome", "CSF"],
    description:
      "After a concussion, the brain is evaluated — but the cranial bones that house it rarely are. Displaced cranial bones impair CSF flow and can keep someone in post-concussion syndrome for months or years.",
    prompt: `Write a blog post titled "Cranial Adjusting After Concussion and Traumatic Brain Injury: What Nobody Told You"

    Cover:
    - What happens to cranial bones in a concussion or head impact
    - Post-concussion syndrome symptoms and why they persist when imaging is normal
    - CSF flow disruption and the glymphatic system connection
    - How SOT craniopathy assesses post-concussion cranial bone displacement
    - Treatment: gentle, specific contacts — recovery timeline
    - Multiple concussions in athletes and military: cumulative effect
    - Dan's approach with auto injury patients

    Frontmatter: title, date (2024-09-13), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "plagiocephaly-flat-head-syndrome-chiropractic",
    title: "Plagiocephaly: What Causes Flat Head Syndrome and What a Cranial Chiropractor Can Do",
    tier: 3,
    language: "en",
    tags: ["plagiocephaly", "flat head", "cranial adjusting", "pediatric", "birth trauma", "infants"],
    description:
      "Plagiocephaly — flat head syndrome — is often treated with repositioning or helmets. But the underlying cranial bone displacement from birth is rarely addressed. Gentle cranial chiropractic offers a different approach.",
    prompt: `Write a blog post titled "Plagiocephaly: What Causes Flat Head Syndrome and What a Cranial Chiropractor Can Do"

    Cover:
    - What plagiocephaly is and its causes (birth trauma, forceps/vacuum, positioning)
    - Why the underlying cranial bone displacement matters beyond cosmetics
    - The conventional approach: repositioning, tummy time, helmets — and when helmets miss the root cause
    - How cranial adjusting addresses the underlying bone position
    - Critical intervention window: under 6 months is optimal
    - What a cranial session for an infant looks like: ultra-gentle
    - Associated conditions that resolve alongside: nursing difficulty, torticollis, colic
    - Dan's personal connection: childhood torticollis

    Frontmatter: title, date (2024-09-20), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "cranial-rhythmic-impulse-what-it-is-why-it-matters",
    title: "The Cranial Rhythmic Impulse: What It Is and Why It Matters for Your Health",
    tier: 3,
    language: "en",
    tags: ["cranial rhythmic impulse", "CRI", "CSF", "craniopathy", "Sutherland", "primary respiratory mechanism"],
    description:
      "The cranial rhythmic impulse — a subtle 6-12 cycles per minute rhythm felt throughout the body — is the foundation of cranial osteopathy and chiropractic craniopathy. Here's what it tells us about your nervous system health.",
    prompt: `Write a blog post titled "The Cranial Rhythmic Impulse: What It Is and Why It Matters for Your Health"

    Cover:
    - The history: Dr. William Sutherland's discovery of cranial bone motion
    - What the CRI is: 6-12 cycles per minute driven by CSF production and reabsorption
    - What a normal CRI feels like vs. a restricted or asymmetric CRI
    - What the CRI tells the practitioner about the nervous system
    - How CSF nourishes the brain and removes toxins (glymphatic system)
    - What happens when CRI is disrupted
    - How cranial treatment restores the CRI rhythm
    - Dan's experience palpating the CRI in clinic

    Frontmatter: title, date (2024-09-27), description, tags, author, category: "Cranial Adjusting"`,
  },
  {
    slug: "ear-infections-children-cranial-adjusting-eustachian",
    title: "Chronic Ear Infections in Children: Could Cranial Adjusting Help?",
    tier: 3,
    language: "en",
    tags: ["ear infections", "otitis media", "cranial adjusting", "children", "pediatric", "temporal bone", "Eustachian tube"],
    description:
      "Recurrent ear infections in children are often treated with antibiotics and eventually tubes. But the Eustachian tube dysfunction that causes them frequently has a cranial bone origin that's never addressed.",
    prompt: `Write a blog post titled "Chronic Ear Infections in Children: Could Cranial Adjusting Help?"

    Cover:
    - Why children get more ear infections (Eustachian tube angle — nearly horizontal in children)
    - The cranial connection: temporal bone torque from birth partially closes the Eustachian tube
    - CMRT reflex points for the Eustachian tube and middle ear drainage
    - Treatment: temporal bone correction + CMRT ear points + lymphatic drainage
    - Clinical results: what parents report after 3-6 sessions
    - Work alongside pediatricians — know when to refer
    - Latino community: cranial adjusting as alternative to explore before tubes/surgery

    Frontmatter: title, date (2024-10-04), description, tags, author, category: "Cranial Adjusting"`,
  },

  // ── TIER 4: SOT-Specific Posts (3 posts) ─────────────────────────────────
  {
    slug: "what-are-sot-blocks-how-do-they-work",
    title: "What Are SOT Blocks and How Do They Work? A Complete Patient Guide",
    tier: 4,
    language: "en",
    tags: ["SOT", "SOT blocks", "sacro occipital technique", "DeJarnette", "Category I II III", "low back pain"],
    description:
      "Those wedge-shaped blocks your chiropractor places under your pelvis may look simple — but they're working with gravity and your nervous system to make precise, lasting corrections to your sacroiliac joint and lumbar spine.",
    prompt: `Write a blog post titled "What Are SOT Blocks and How Do They Work? A Complete Patient Guide"

    Cover:
    - The history: Dr. M.B. DeJarnette developed SOT in the 1920s-30s
    - What the blocks look like and the basic principle: working WITH gravity, no force applied
    - The three SOT Categories (brief overview): Category I (SI imbalance), II (ligament sprain + dural), III (disc involvement)
    - How the doctor determines which category applies
    - What the patient experiences during a block treatment
    - Why blocks achieve results that manipulation alone often can't
    - What to expect in a typical SOT session at Pura Vida Chiropractic

    Frontmatter: title, date (2024-10-11), description, tags, author, category: "SOT"`,
  },
  {
    slug: "sot-category-I-II-III-what-your-doctor-means",
    title: "SOT Category I, II, and III: What Your Chiropractor Means and Why It Matters",
    tier: 4,
    language: "en",
    tags: ["SOT", "Category I", "Category II", "Category III", "disc", "SI joint", "dura"],
    description:
      "When your SOT chiropractor says you're a Category II, what does that actually mean? Understanding the three SOT categories helps you understand your own body and why your treatment looks the way it does.",
    prompt: `Write a blog post titled "SOT Category I, II, and III: What Your Chiropractor Means and Why It Matters"

    Cover:
    - Overview: the SOT category system classifies spinal problems from the pelvis-up
    - Category I: basic SI imbalance, symptoms, block placement
    - Category II: SI ligament sprain, dural tube tension, arm fossa test, why mobilizing makes it worse
    - Category III: disc involvement, specific block protocol, integration with laser and decompression
    - How categories change as healing progresses

    Frontmatter: title, date (2024-10-18), description, tags, author, category: "SOT"`,
  },
  {
    slug: "why-your-adjustment-doesnt-hold-what-sot-does-about-it",
    title: "Why Your Adjustment Doesn't Hold — And What SOT Does About It",
    tier: 4,
    language: "en",
    tags: ["SOT", "cranial adjusting", "dural tension", "adjustment holding", "subluxation", "lasting results"],
    description:
      "If you've ever had to return to the chiropractor week after week for the same problem without lasting improvement, there's a reason. The SOT approach addresses the structural, dural, and neurological reasons adjustments fail to hold.",
    prompt: `Write a blog post titled "Why Your Adjustment Doesn't Hold — And What SOT Does About It"

    Cover:
    - The frustrating cycle: get adjusted, feel better briefly, then it's back
    - Reason 1: Viscero-somatic reflex (organ driving the subluxation)
    - Reason 2: Dural tension
    - Reason 3: Cranial bone restriction
    - Reason 4: Category II SI ligament instability
    - Reason 5: Missing the primary lesion
    - The SOT pyramid: foundation-up approach (sacrum → spine → cranium)
    - Dan's comprehensive assessment process
    - What patients notice when the right approach is used
    - The Pura Vida Protocol: SOT + CMRT + cranial + adjunctive therapies

    Frontmatter: title, date (2024-10-25), description, tags, author, category: "SOT"`,
  },
];

// ── GENERATE MARKDOWN FROM API ───────────────────────────────────────────────
async function generatePost(post) {
  const userPrompt = `${post.prompt}

OUTPUT FORMAT — return ONLY valid markdown with this frontmatter structure at the top:

---
title: "${post.title}"
date: "YYYY-MM-DD"
description: "${post.description}"
tags: [${post.tags.map((t) => `"${t}"`).join(", ")}]
author: "Dr. Dan Foss DC"
lang: "${post.language}"
slug: "${post.slug}"
image: "/images/conditions/${post.language === "es" ? "latinofamily.jpg" : "backpain.jpg"}"
---

Then write the full blog post body in markdown. 800-1400 words. Use ## and ### headings. Include:
- An engaging opening paragraph (no heading)
- Well-structured sections with clear headings
- A "## Key Takeaways" section near the end
- A closing paragraph with a warm CTA to call (210) 685-1994 or visit Pura Vida Chiropractic

Do NOT include a level-1 heading (# Title) — the title comes from frontmatter.
Return ONLY the markdown. No preamble, no explanation.`;

  const response = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 2000,
    messages: [{ role: "user", content: userPrompt }],
    system: CLINIC_CONTEXT,
  });

  return response.content[0].text;
}

// ── FILE WRITER ───────────────────────────────────────────────────────────────
function savePost(slug, content) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
}

// ── SLEEP HELPER ──────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║   Pura Vida Blog Generator — Dr. Dan Foss DC      ║");
  console.log("║   33 SOT / CMRT / Cranial Posts — Bilingual       ║");
  console.log("╚════════════════════════════════════════════════════╝");
  console.log(`\nOutput directory: ${path.resolve(OUTPUT_DIR)}`);
  console.log(`Total posts to generate: ${posts.length}\n`);

  const results = { success: [], failed: [] };

  // Check for already-generated posts to allow resuming
  const existing = fs.existsSync(OUTPUT_DIR)
    ? fs.readdirSync(OUTPUT_DIR).map((f) => f.replace(".md", ""))
    : [];

  if (existing.length > 0) {
    console.log(`Found ${existing.length} existing posts — skipping those.\n`);
  }

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    if (existing.includes(post.slug)) {
      console.log(`  SKIPPED (exists): ${post.slug}`);
      results.success.push(post.slug);
      continue;
    }

    const pct = Math.round(((i + 1) / posts.length) * 100);
    const bar = "█".repeat(Math.floor(pct / 5)) + "░".repeat(20 - Math.floor(pct / 5));
    console.log(`\n[${bar}] ${pct}% (${i + 1}/${posts.length})`);
    console.log(`  Generating: ${post.slug}`);

    try {
      const content = await generatePost(post);
      const filePath = savePost(post.slug, content);
      results.success.push(post.slug);
      console.log(`  ✓ Saved → ${filePath}`);
    } catch (err) {
      console.error(`  ✗ FAILED: ${err.message}`);
      results.failed.push({ slug: post.slug, error: err.message });
    }

    // Rate limiting: 3 second pause between posts
    if (i < posts.length - 1) {
      await sleep(3000);
    }
  }

  // ── SUMMARY ────────────────────────────────────────────────────────────────
  console.log("\n╔════════════════════════════════════════════════════╗");
  console.log("║                    COMPLETE                        ║");
  console.log("╚════════════════════════════════════════════════════╝");
  console.log(`✓ Generated: ${results.success.length} posts`);
  console.log(`✗ Failed:    ${results.failed.length} posts`);

  if (results.failed.length > 0) {
    console.log("\nFailed posts:");
    results.failed.forEach((f) => console.log(`  - ${f.slug}: ${f.error}`));
    console.log("\nRe-run the script to retry failed posts.");
  }

  console.log(`\nFiles saved to: ${path.resolve(OUTPUT_DIR)}`);
}

main().catch(console.error);
