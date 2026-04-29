export interface ConditionData {
  slug: string;
  title: string;
  titleEs?: string;
  image: string;
  metaDescription: string;
  metaDescriptionEs?: string;
  intro: string;
  introEs?: string;
  whatIs: string;
  whatIsEs?: string;
  symptoms: string[];
  symptomsEs?: string[];
  causes: string[];
  causesEs?: string[];
  chiropracticTreatment: string;
  chiropracticTreatmentEs?: string;
  additionalTreatments: Array<"shockwave" | "softwave" | "laser">;
}

export const conditionsContent: ConditionData[] = [
  {
    slug: "headaches",
    title: "Headaches & Migraines | Chiropractor San Antonio TX",
    image: "/images/conditions/headache.jpg",
    metaDescription:
      "Chiropractic care for headaches and migraines in San Antonio, TX. Dr. Foss — best chiropractor San Antonio — uses SOT chiropractic, SoftWave, and Class IV laser to resolve the root cause of recurring headaches. Serving Stone Oak, Castle Hills, and Alamo Heights.",
    intro:
      "Headaches are one of the most common reasons patients visit Pura Vida Chiropractic in San Antonio. Rather than simply masking pain with medication, our approach targets the underlying spinal and neurological dysfunction driving your headaches.",
    whatIs:
      "A headache is pain or discomfort in the head, scalp, or neck. Tension headaches arise from muscle tension and joint restriction in the upper cervical spine, while cervicogenic headaches originate directly from structures in the neck. Misaligned vertebrae in the upper neck — particularly C1 and C2 — can irritate surrounding nerves and blood vessels, triggering pain that radiates into the head. Chronic headaches are rarely a medication deficiency; they signal underlying structural or neurological imbalance that conservative chiropractic care is uniquely positioned to address.",
    symptoms: [
      "Dull, aching pain across the forehead or sides of the head",
      "Pressure or tightness around the temples",
      "Pain that worsens with neck movement or prolonged sitting",
      "Sensitivity to light or sound",
      "Tenderness in the scalp, neck, or shoulder muscles",
      "Headaches occurring daily or multiple times per week",
    ],
    causes: [
      "Upper cervical vertebral subluxations (C1–C3)",
      "Poor posture and forward head position from screen use",
      "Muscle tension in the suboccipital and trapezius muscles",
      "Stress and its physical effects on spinal tension",
      "TMJ dysfunction contributing to referred head pain",
      "Dehydration and lifestyle factors compounding spinal stress",
    ],
    chiropracticTreatment:
      "Dr. Foss begins with a thorough evaluation of your cervical spine, posture, and craniosacral rhythm to identify the exact vertebral levels contributing to your headaches. Using Sacro-Occipital Technique (SOT), he gently realigns the upper cervical spine — especially the atlas (C1) and axis (C2) — restoring normal joint motion and reducing pressure on the surrounding nerves and blood vessels. SOT also addresses the dural tension system, which connects the skull to the sacrum, and can be a hidden contributor to chronic head pain. Most headache patients notice significant improvement within the first few visits, with lasting relief developing over a consistent course of care.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "auto-accident-injuries",
    title: "Auto Accident Injuries | Car Accident Chiropractor San Antonio TX",
    image: "/images/conditions/autoaccident.jpg",
    metaDescription:
      "Car accident chiropractor in San Antonio, TX. Pura Vida Chiropractic specializes in whiplash, neck pain, and soft-tissue injuries from auto accidents. Best chiropractor San Antonio for car accident injuries — SOT chiropractic and regenerative therapies. Free consultation.",
    intro:
      "Car accidents — even at low speeds — can cause significant spinal trauma that doesn't always show up on X-rays right away. Pura Vida Chiropractic helps San Antonio accident victims recover fully by addressing the spine, joints, and soft tissues injured during the collision.",
    whatIs:
      "Auto accident injuries encompass a wide range of musculoskeletal and neurological traumas resulting from the sudden forces of a vehicle collision. Whiplash — rapid back-and-forth acceleration of the head and neck — is the most common, causing ligament tears, disc injuries, and vertebral misalignment. Even a 5 mph impact can generate forces sufficient to strain the delicate structures of the cervical spine. Without proper treatment, these injuries often develop into chronic neck pain, headaches, arm numbness, and postural dysfunction. Early chiropractic care reduces inflammation, restores spinal alignment, and prevents acute injuries from becoming chronic problems.",
    symptoms: [
      "Neck pain and stiffness following the accident",
      "Headaches starting at the base of the skull",
      "Shoulder pain or muscle spasms",
      "Pain, tingling, or numbness into the arms or hands",
      "Lower back pain and mid-back soreness",
      "Difficulty concentrating or fatigue (post-concussive symptoms)",
      "Jaw pain or TMJ dysfunction",
    ],
    causes: [
      "Rapid deceleration/acceleration forces during rear-end collisions",
      "Ligament and muscle tears from sudden head movement",
      "Vertebral subluxations from impact forces",
      "Disc herniation or bulging from compressive forces",
      "Seatbelt-related chest and shoulder injuries",
    ],
    chiropracticTreatment:
      "Following an auto accident, time matters. Dr. Foss performs a comprehensive spinal evaluation to locate all areas of trauma — not just where you feel pain. SOT chiropractic care gently restores normal vertebral alignment without aggressive manipulation, which is critical in the acute post-injury phase. He uses wedge-based blocking and soft-tissue techniques to decompress injured discs, reduce nerve irritation, and reset the body's neurological signaling. Detailed documentation is also provided for insurance and legal purposes. We work with personal injury cases and can help coordinate care throughout your recovery process.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "disc-problems",
    title: "Disc Problems | Back Pain Doctor San Antonio TX",
    image: "/images/conditions/discproblems.jpg",
    metaDescription:
      "Non-surgical disc herniation treatment in San Antonio, TX. Dr. Dan Foss — back pain doctor San Antonio — uses SOT chiropractic, SoftWave, and Class IV Laser at Pura Vida Chiropractic. Chiropractor near me serving Stone Oak and NW Military Hwy.",
    intro:
      "Disc problems — including bulges, herniations, and degenerative disc disease — are among the most painful and debilitating spinal conditions. Pura Vida Chiropractic offers a non-surgical approach that decompresses the affected disc and supports the body's natural ability to heal.",
    whatIs:
      "Spinal discs are gel-filled shock absorbers that sit between each vertebra. When a disc bulges or herniates, the inner nucleus material pushes outward, irritating or compressing nearby nerves. This produces localized back pain as well as radiating pain, numbness, or weakness in the arms or legs depending on the location. Degenerative disc disease occurs as discs lose hydration and height over time, reducing spinal cushioning and increasing the risk of joint irritation. Most disc conditions respond very well to conservative chiropractic care, which can decompress the disc space and reduce nerve inflammation without drugs or surgery.",
    symptoms: [
      "Sharp, localized back or neck pain",
      "Radiating pain down the arms (cervical) or legs (lumbar)",
      "Numbness, tingling, or burning sensation in extremities",
      "Weakness in arms, legs, or grip",
      "Pain that worsens with sitting, bending, or coughing",
      "Relief when lying down or walking",
    ],
    causes: [
      "Prolonged sitting and compressive posture",
      "Heavy lifting with improper mechanics",
      "Degenerative changes and age-related disc thinning",
      "Trauma or sudden injury to the spine",
      "Vertebral misalignment increasing disc stress",
    ],
    chiropracticTreatment:
      "Dr. Foss uses SOT's pelvic blocking technique to gently decompress lumbar discs using the patient's own body weight and gravity — no forceful manipulation. For cervical discs, he applies specific low-force traction and mobilization to create space between vertebrae and reduce disc pressure. The craniosacral system is also evaluated, as dural tube tension can maintain disc compression even after alignment is restored. This comprehensive approach reduces nerve irritation, allows the disc to rehydrate, and supports long-term spinal health.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "sports-injury",
    title: "Sports Injuries | Sports Chiropractor San Antonio TX",
    image: "/images/conditions/sports-injury.webp",
    metaDescription:
      "Sports chiropractor in San Antonio, TX. Pura Vida Chiropractic helps athletes recover from sprains, strains, and overuse injuries with SOT chiropractic, Shockwave, SoftWave, and Class IV Laser. Best sports injury treatment San Antonio near Stone Oak and NW Military Hwy.",
    intro:
      "Whether you're a weekend warrior or a competitive athlete, sports injuries disrupt performance and sideline you from what you love. Pura Vida Chiropractic helps San Antonio athletes recover faster and perform better by addressing injury at its root.",
    whatIs:
      "Sports injuries range from acute traumatic events — such as sprains, fractures, and dislocations — to chronic overuse conditions like tendinopathy, stress fractures, and repetitive strain injuries. In most cases, the underlying issue is not just tissue damage but also a biomechanical dysfunction that predisposed the athlete to injury. Misalignments in the spine or extremities alter movement patterns, overload specific structures, and impair the nervous system's ability to coordinate muscles properly. Chiropractic care corrects these dysfunctions, accelerates tissue repair, and helps athletes return to sport more quickly and safely.",
    symptoms: [
      "Localized pain at the site of injury",
      "Swelling, bruising, or warmth around the injured area",
      "Reduced range of motion or joint stiffness",
      "Muscle weakness or difficulty bearing weight",
      "Recurring injuries in the same area",
      "Performance decline or compensatory movement patterns",
    ],
    causes: [
      "Acute trauma from contact or sudden movement",
      "Repetitive overuse and microtrauma accumulation",
      "Muscle imbalances and poor biomechanics",
      "Inadequate warm-up or recovery protocols",
      "Spinal or extremity misalignment altering movement mechanics",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates not just the injured area but the entire kinetic chain — because a knee injury often reflects a pelvic imbalance, and a shoulder injury frequently originates in the thoracic spine. SOT adjustments restore proper joint alignment throughout the spine and extremities, correcting the mechanical dysfunctions that led to injury. He also addresses soft-tissue tension patterns that limit healing. Athletes appreciate the gentle, specific nature of SOT, which allows treatment even in the acute phase without aggravating the injury. The goal is to return you to full performance faster and more safely than rest alone would allow.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "neck-pain",
    title: "Neck Pain | Neck Pain Chiropractor San Antonio TX",
    image: "/images/conditions/neck.jpg",
    metaDescription:
      "Neck pain chiropractor in San Antonio, TX. Pura Vida Chiropractic addresses cervical spine dysfunction, whiplash, and nerve irritation causing neck pain using SOT chiropractic and Class IV laser therapy. Best chiropractor San Antonio — serving Stone Oak, Castle Hills, and Alamo Heights.",
    intro:
      "Neck pain is one of the most common musculoskeletal complaints in modern life — driven by hours of screen time, poor posture, and unresolved spinal tension. Pura Vida Chiropractic in San Antonio provides effective, non-invasive care that addresses the root cause.",
    whatIs:
      "Neck pain arises from dysfunction in the seven cervical vertebrae, the discs between them, the surrounding muscles and ligaments, or the nerves that travel through the cervical spine. The cervical spine is highly mobile and supports the full weight of the head (approximately 10–12 pounds), making it vulnerable to postural stress and misalignment. Vertebral subluxations reduce joint mobility, irritate nerves, and trigger muscle guarding — creating a cycle of pain and stiffness. Left untreated, cervical dysfunction progresses to disc degeneration, chronic headaches, and nerve-related arm symptoms.",
    symptoms: [
      "Aching or sharp pain in the neck, base of skull, or upper shoulders",
      "Stiffness limiting head rotation or tilting",
      "Cracking or grinding sounds with movement",
      "Headaches radiating from the neck to the forehead or temples",
      "Tingling or numbness into the arms, hands, or fingers",
      "Pain that worsens after prolonged sitting or screen use",
    ],
    causes: [
      "Forward head posture from device and screen use",
      "Prolonged sitting in poor ergonomic positions",
      "Whiplash from car accidents or sports trauma",
      "Sleeping in awkward positions or on unsupportive pillows",
      "Chronic stress and tension held in the upper trapezius",
      "Degenerative changes in cervical discs and facet joints",
    ],
    chiropracticTreatment:
      "Cervical care at Pura Vida begins with a detailed assessment of your posture, range of motion, and upper cervical alignment. Dr. Foss uses SOT techniques targeting the C1–C7 vertebrae with gentle, specific corrective force — no high-velocity cracking. By restoring proper cervical curve and joint mobility, nerve interference is reduced and muscle tension naturally releases. He also addresses the deeper craniosacral system, which often perpetuates cervical dysfunction when left unevaluated. Patients typically experience meaningful pain relief and improved mobility within their first several visits.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "arthritis-joint-pain",
    title: "Arthritis & Joint Pain",
    image: "/images/conditions/arthritis.webp",
    metaDescription:
      "Arthritis and joint pain relief in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic, SoftWave, and Class IV Laser to reduce joint inflammation and slow arthritis progression.",
    intro:
      "Arthritis doesn't have to mean a lifetime of pain and medication. Chiropractic care at Pura Vida can reduce joint inflammation, improve mobility, and slow the degenerative process — giving you better quality of life without drugs or surgery.",
    whatIs:
      "Arthritis refers to inflammation of one or more joints, with osteoarthritis and rheumatoid arthritis being the most common types. Osteoarthritis results from cartilage breakdown in joints subjected to years of improper mechanics and compressive stress. Rheumatoid arthritis is an autoimmune condition where the immune system attacks joint lining. In both cases, misaligned joints accelerate cartilage wear and increase inflammation. Chiropractic care doesn't reverse arthritis, but it significantly reduces the mechanical stress on arthritic joints, decreases inflammation, and restores as much mobility as possible — allowing patients to remain active and reduce their dependence on pain medications.",
    symptoms: [
      "Joint pain that worsens with activity or weather changes",
      "Morning stiffness lasting more than 30 minutes",
      "Swelling, warmth, or redness around joints",
      "Reduced range of motion and joint flexibility",
      "Grinding, clicking, or crunching sensations in joints",
      "Fatigue associated with chronic pain",
    ],
    causes: [
      "Cumulative joint wear from years of misalignment",
      "Traumatic injury to joint cartilage",
      "Autoimmune dysregulation (rheumatoid arthritis)",
      "Obesity and excess joint loading",
      "Genetic predisposition and aging",
      "Chronic inflammation from diet or lifestyle factors",
    ],
    chiropracticTreatment:
      "Dr. Foss adapts his approach for arthritic patients, using the gentle SOT blocking and category-based system that avoids aggressive manipulation of inflamed joints. The focus is on restoring proper biomechanics around arthritic joints to reduce compressive forces, decreasing nerve interference that amplifies pain signals, and improving the overall neurological environment to support the immune system. For rheumatoid arthritis patients, reducing subluxation-related neurological stress can help modulate the inflammatory response. Most arthritic patients experience a meaningful reduction in pain and stiffness with consistent care.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "sciatica",
    title: "Sciatica | Sciatica Chiropractor San Antonio TX",
    image: "/images/conditions/sciatica.jpg",
    metaDescription:
      "Sciatica chiropractor in San Antonio, TX. Pura Vida Chiropractic resolves sciatic nerve pain with SOT disc decompression, SoftWave therapy, and Class IV Laser — without drugs or surgery. Best chiropractor San Antonio for sciatica near Stone Oak and NW Military Hwy.",
    intro:
      "Sciatica — the searing, electric pain that radiates from the lower back down through the buttock and leg — can be completely debilitating. At Pura Vida Chiropractic, we identify and correct the exact spinal or muscular cause of your sciatic nerve compression.",
    whatIs:
      "Sciatica is not a diagnosis but a symptom — irritation or compression of the sciatic nerve, the body's longest nerve, which runs from the lumbar spine through the piriformis muscle and down each leg. The most common causes are a lumbar disc herniation pressing on a nerve root, lumbar vertebral misalignment, or piriformis muscle entrapment of the sciatic nerve as it passes through the buttock. The result is intense radiating pain, numbness, or weakness that can extend from the low back all the way to the foot. Chiropractic care has an excellent track record of resolving sciatica by addressing the underlying cause of nerve compression.",
    symptoms: [
      "Sharp, shooting, or electric pain from the low back into one leg",
      "Buttock pain that worsens with sitting or driving",
      "Numbness or tingling down the thigh, calf, or foot",
      "Leg weakness or difficulty lifting the foot (foot drop)",
      "Pain that improves with walking but worsens with prolonged sitting",
      "Burning sensation along the path of the sciatic nerve",
    ],
    causes: [
      "Lumbar disc herniation (L4–S1) compressing a nerve root",
      "Lumbar vertebral subluxation reducing spinal canal space",
      "Piriformis muscle spasm entrapping the sciatic nerve",
      "Spinal stenosis narrowing the nerve exit foramina",
      "Prolonged sitting and hip flexor tightness",
      "Pelvic imbalance altering lumbar biomechanics",
    ],
    chiropracticTreatment:
      "SOT's pelvic blocking is ideally suited for sciatica because it uses the patient's own body weight to gently decompress the lumbar disc and nerve root — no forceful lumbar manipulation. Dr. Foss also evaluates the sacroiliac joints and piriformis muscle, as entrapment at these levels is often missed in conventional treatment. Category-specific wedge placements allow the pelvis to unwind and create space for the compressed nerve. Concurrent soft-tissue work on the piriformis and surrounding hip musculature releases additional entrapment points. Most sciatica cases respond within a consistent course of care.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "tmj-jaw-pain",
    title: "TMJ & Jaw Pain | TMJ Chiropractor San Antonio TX",
    image: "/images/conditions/tmj.webp",
    metaDescription:
      "TMJ chiropractor in San Antonio, TX. Pura Vida Chiropractic addresses TMJ dysfunction through craniosacral therapy, SOT chiropractic, and Class IV laser — resolving jaw pain without a mouthguard alone. Chiropractor near me San Antonio serving Stone Oak and Castle Hills.",
    intro:
      "TMJ dysfunction — pain, clicking, locking, or limited opening of the jaw — has a direct connection to the upper cervical spine and craniosacral system. Pura Vida Chiropractic addresses this link to provide lasting TMJ relief.",
    whatIs:
      "The temporomandibular joint (TMJ) connects the lower jaw to the skull and is responsible for chewing, speaking, and yawning. TMJ dysfunction (TMD) encompasses a range of conditions affecting this joint and the surrounding muscles. Because the TMJ is intimately connected to the upper cervical spine and the temporal bones of the skull, spinal misalignment — particularly at the atlas (C1) — frequently contributes to or directly causes TMJ dysfunction. The craniosacral system's rhythmic motion also passes through the temporal bones, and restriction here can perpetuate jaw tension and pain. Chiropractic care addresses these underlying structural causes that a mouthguard alone cannot correct.",
    symptoms: [
      "Jaw pain, tenderness, or aching — especially upon waking",
      "Clicking, popping, or grinding sounds when opening or closing the mouth",
      "Limited mouth opening or jaw locking",
      "Ear pain, fullness, or ringing (tinnitus) on one or both sides",
      "Headaches at the temples or behind the eyes",
      "Facial muscle soreness and tension",
    ],
    causes: [
      "Upper cervical subluxation (C1–C2) affecting temporal bone motion",
      "Craniosacral restriction at the temporal bones",
      "Teeth clenching or grinding (bruxism) — often stress-driven",
      "Trauma to the jaw or head (fall, accident)",
      "Dental procedures or prolonged mouth opening",
      "Postural imbalance pulling on the jaw musculature",
    ],
    chiropracticTreatment:
      "SOT chiropractic includes specific craniosacral protocols for TMJ dysfunction that are rarely offered in conventional chiropractic offices. Dr. Foss evaluates the temporal bones, occiput, sphenoid, and upper cervical spine as an integrated unit. Gentle craniosacral corrections at the temporal bones restore normal motion and reduce tension on the TMJ. Concurrent upper cervical adjustments address the neurological component. This combination is highly effective and is especially valuable for patients who have tried mouthguards and dental splints without lasting relief.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "lower-back-pain",
    title: "Lower Back Pain | Back Pain Doctor San Antonio TX",
    image: "/images/conditions/backpain.jpg",
    metaDescription:
      "Back pain doctor in San Antonio, TX. Pura Vida Chiropractic uses SOT chiropractic adjustment to correct lumbar and pelvic dysfunction — the root cause of most lower back pain. Best chiropractor San Antonio near Stone Oak, NW Military Hwy. Free chiropractic evaluation.",
    intro:
      "Lower back pain is the leading cause of disability worldwide, yet most cases stem from correctable spinal and pelvic misalignment. At Pura Vida Chiropractic, we identify exactly what's causing your low back pain and correct it at the source.",
    whatIs:
      "The lumbar spine — five large vertebrae sitting above the sacrum and pelvis — carries the majority of the body's weight and bears significant mechanical stress with every step, lift, and twist. Lower back pain can arise from disc dysfunction, facet joint irritation, sacroiliac joint instability, muscular strain, or nerve compression. In the vast majority of cases, the underlying driver is pelvic imbalance and lumbar vertebral subluxation — a pattern that SOT chiropractic is specifically designed to identify and correct. Without addressing the structural foundation of the spine, lower back pain tends to recur regardless of how much rest, physical therapy, or medication is used.",
    symptoms: [
      "Dull, aching, or sharp pain in the lower back",
      "Pain that worsens with prolonged sitting, standing, or bending",
      "Stiffness in the morning that improves with movement",
      "Radiating pain into the buttocks or backs of the thighs",
      "Muscle spasm or tightness across the lumbar area",
      "Difficulty standing upright or shifting posture",
    ],
    causes: [
      "Pelvic imbalance and sacroiliac joint dysfunction",
      "Lumbar disc herniation or degenerative disc disease",
      "Facet joint arthrosis and joint restriction",
      "Muscle imbalances between anterior and posterior chains",
      "Prolonged sitting and sedentary posture",
      "Improper lifting mechanics causing acute injury",
    ],
    chiropracticTreatment:
      "SOT was developed specifically around the pelvis and sacrum as the foundation of the spine — making it uniquely suited for lower back pain. Dr. Foss uses SOT's three-category system to classify the exact type of pelvic-lumbar dysfunction present and applies the precise correction needed. Pelvic blocking positions use gravity and the patient's body weight to restore sacroiliac joint alignment, decompress lumbar discs, and normalize the dural tube tension running from the sacrum to the skull. This approach is safe, effective, and well-tolerated even in acute low back pain flares.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "neuropathy-numbness",
    title: "Neuropathy & Numbness | Chiropractor San Antonio TX",
    image: "/images/conditions/neuropathy.webp",
    metaDescription:
      "Peripheral neuropathy treatment in San Antonio, TX. Pura Vida Chiropractic — chiropractor near me San Antonio — uses SOT chiropractic, SoftWave, and Class IV Laser to improve nerve function and reduce numbness and tingling. Serving Stone Oak, Castle Hills, and Helotes.",
    intro:
      "Peripheral neuropathy — numbness, tingling, burning, and weakness in the hands or feet — significantly impacts quality of life. Pura Vida Chiropractic addresses the neurological and vascular components of neuropathy to help restore sensation and function.",
    whatIs:
      "Neuropathy refers to dysfunction or damage to peripheral nerves — the network of nerves outside the brain and spinal cord. Symptoms arise when these nerves are compressed, starved of blood supply, or chemically damaged. While diabetes is the most common systemic cause, neuropathy also results from spinal nerve compression, poor circulation, autoimmune conditions, or nutritional deficiencies. Chiropractic care addresses the spinal component — nerve root compression in the lumbar or cervical spine — and regenerative therapies directly stimulate nerve repair and improve microcirculation in the affected extremities.",
    symptoms: [
      "Numbness or loss of sensation in the feet, toes, hands, or fingers",
      "Burning or electric pain in the extremities",
      "Tingling or pins-and-needles sensation",
      "Weakness in the legs or difficulty with balance",
      "Sensitivity to touch — even light contact feels painful",
      "Symptoms that worsen at night",
    ],
    causes: [
      "Diabetes-related nerve damage (diabetic neuropathy)",
      "Lumbar or cervical nerve root compression",
      "Poor peripheral circulation reducing nerve oxygenation",
      "Autoimmune conditions (Guillain-Barré, CIDP)",
      "Nutritional deficiencies (B12, folate)",
      "Chemotherapy-induced peripheral neuropathy",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the lumbar and cervical spine to identify any nerve root compression contributing to peripheral symptoms. SOT adjustments restore spinal canal space and reduce nerve root irritation, which can significantly reduce neuropathic symptoms originating from the spine. Concurrently, regenerative therapies are applied directly to the affected extremities to stimulate nerve regeneration and improve local blood flow. This comprehensive, multi-modal approach provides meaningful improvement for many neuropathy patients who have not responded to medication alone.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "hip-knee-foot-ankle",
    title: "Hip, Knee, Foot & Ankle Pain | Chiropractor San Antonio TX",
    image: "/images/conditions/hipkneefootankle.jpg",
    metaDescription:
      "Hip, knee, foot, and ankle pain treatment in San Antonio, TX. Pura Vida Chiropractic — best chiropractor San Antonio — corrects the pelvic and spinal imbalances that drive lower extremity pain. Sports chiropractor San Antonio serving Stone Oak and NW Military Hwy.",
    intro:
      "Pain in the hips, knees, feet, and ankles is rarely isolated to those joints alone — it almost always reflects a pelvic or lumbar biomechanical imbalance. At Pura Vida, we treat the whole kinetic chain so your lower extremity pain stays resolved.",
    whatIs:
      "The lower extremity joints — hips, knees, feet, and ankles — form a kinetic chain that transmits forces from the ground up to the pelvis and spine. When the pelvis is unlevel or the lumbar spine is misaligned, abnormal forces are distributed unevenly through this chain, overloading specific joints and leading to pain and early degeneration. Hip pain may involve bursitis, labral tears, or impingement. Knee pain commonly involves the patellofemoral joint, meniscus, or ligaments. Foot and ankle issues range from plantar fasciitis to chronic ankle instability. Correcting the root pelvic and spinal imbalance is essential for lasting relief in all these conditions.",
    symptoms: [
      "Hip pain with walking, sitting, or climbing stairs",
      "Knee pain during activity or after prolonged sitting",
      "Inner or outer knee pain with a clicking or locking sensation",
      "Foot or arch pain — especially with first steps in the morning",
      "Ankle instability, chronic sprains, or swelling",
      "Leg length discrepancy or uneven gait",
    ],
    causes: [
      "Pelvic imbalance creating a functional leg length discrepancy",
      "Overpronation or supination of the foot altering knee and hip mechanics",
      "Prior ankle sprains leading to chronic instability",
      "Tight IT band, hip flexors, or piriformis muscle",
      "Degeneration of cartilage in the hip or knee",
      "Improper footwear or training surface",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a full lower extremity evaluation alongside spinal and pelvic assessment. SOT pelvic leveling is the foundation of lower extremity care — correcting the pelvic imbalance that drives uneven joint loading. Extremity adjustments to the hip, knee, and ankle restore proper joint mechanics and reduce pain. Gait analysis identifies any compensatory patterns that may be perpetuating the problem. Patients with lower extremity conditions often experience rapid improvement once the upstream pelvic cause is addressed.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "pregnancy-wellness",
    title: "Pregnancy Wellness",
    image: "/images/conditions/pregnancy.webp",
    metaDescription:
      "Prenatal chiropractic care in San Antonio TX. Pura Vida Chiropractic helps pregnant mothers relieve low back pain, pelvic girdle pain, and sciatica, and optimize fetal positioning using Webster Technique.",
    intro:
      "Pregnancy places extraordinary demands on the spine and pelvis. Chiropractic care at Pura Vida Chiropractic keeps expectant mothers comfortable, mobile, and optimally positioned for an easier labor and delivery.",
    whatIs:
      "During pregnancy, the body undergoes rapid structural changes — hormonal ligament laxity, a shifting center of gravity, and significant pelvic widening — that strain the lumbar spine, sacroiliac joints, and supporting musculature. Pelvic misalignment during pregnancy (intrauterine constraint) can also restrict the space available for the developing baby, potentially contributing to malpresentation and difficult labor. Prenatal chiropractic care, including the Webster Technique, is safe, gentle, and remarkably effective for managing pregnancy-related musculoskeletal pain and optimizing pelvic balance for both mother and baby.",
    symptoms: [
      "Low back and sacral pain throughout pregnancy",
      "Pelvic girdle pain (symphysis pubis dysfunction)",
      "Sciatic nerve pain radiating into the buttock and leg",
      "Round ligament pain from pelvic tension",
      "Rib and mid-back pain from postural shifts",
      "Difficulty walking, turning in bed, or climbing stairs",
    ],
    causes: [
      "Hormonal ligament laxity (relaxin) reducing pelvic stability",
      "Shifting center of gravity increasing lumbar lordosis",
      "Sacroiliac joint dysfunction from pelvic widening",
      "Rapid weight gain increasing spinal load",
      "Postural adaptations to accommodate growing uterus",
    ],
    chiropracticTreatment:
      "Dr. Foss is trained in the Webster Technique, a specific chiropractic protocol for pregnant patients that balances the pelvis, reduces sacral subluxation, and relaxes the round ligaments and uterine muscles. This technique is safe throughout all trimesters and is performed with the patient comfortable on a specially designed pregnancy table with drop sections for the abdomen. Regular prenatal adjustments reduce pain, improve pelvic balance, and may support optimal fetal positioning as the due date approaches. Many of our prenatal patients also report shorter and less complicated labors.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "plantar-fasciitis",
    title: "Plantar Fasciitis | Shockwave Therapy San Antonio TX",
    image: "/images/conditions/footpain.jpg",
    metaDescription:
      "Plantar fasciitis treatment in San Antonio, TX. Pura Vida Chiropractic combines SOT chiropractic, Shockwave Therapy, SoftWave therapy San Antonio, and Class IV Laser to resolve heel and arch pain fast. Best chiropractor San Antonio near Stone Oak and NW Military Hwy.",
    intro:
      "Plantar fasciitis — stabbing heel and arch pain with your first steps in the morning — is one of the most common and frustrating foot conditions. At Pura Vida, we treat both the foot and the underlying pelvic mechanics driving it.",
    whatIs:
      "The plantar fascia is a thick band of connective tissue running along the bottom of the foot from the heel to the toes. When subjected to excessive tension — from overpronation, pelvic imbalance, tight calf muscles, or repetitive impact — the fascia develops microtears at its calcaneal (heel bone) insertion, leading to inflammation and pain. The characteristic morning pain occurs because the fascia tightens overnight, and the first weight-bearing steps re-tear the healing tissue. Traditional treatments address only the foot, but lasting resolution requires correcting the pelvic and lumbar mechanics that create abnormal foot loading.",
    symptoms: [
      "Sharp heel pain with first steps in the morning",
      "Pain at the base of the heel or along the inner arch",
      "Discomfort that eases after walking for a few minutes but returns after rest",
      "Increased pain after prolonged standing, walking, or running",
      "Tenderness to pressure on the bottom of the heel",
      "Tightness in the calf and Achilles tendon",
    ],
    causes: [
      "Overpronation (flat feet) or high arches creating abnormal fascia tension",
      "Pelvic imbalance and functional leg length discrepancy",
      "Tight gastrocnemius and soleus muscles",
      "Sudden increase in activity or training volume",
      "Prolonged standing on hard surfaces",
      "Worn footwear without adequate arch support",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses plantar fasciitis at multiple levels. Pelvic balancing via SOT corrects the upstream biomechanical cause of abnormal foot loading. Foot and ankle adjustments restore proper calcaneal alignment, reducing fascia tension. Soft-tissue work on the calf and Achilles tendon addresses the downstream muscle tightness that perpetuates the condition. This chiropractic foundation is then paired with regenerative therapies targeting the plantar fascia insertion directly to accelerate tissue healing.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "postural-correction",
    title: "Postural Correction",
    image: "/images/conditions/postural-correction.webp",
    metaDescription:
      "Postural correction in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic to correct forward head posture, scoliosis, and spinal misalignment — improving posture and long-term health.",
    intro:
      "Poor posture is not just an aesthetic concern — it is a primary driver of pain, fatigue, and early spinal degeneration. Pura Vida Chiropractic uses structural chiropractic care to correct postural imbalances at their source.",
    whatIs:
      "Posture reflects the cumulative position of the spine and body in space. When the spine deviates from its neutral curves — through forward head carriage, loss of cervical lordosis, hyperkyphosis (rounded upper back), or anterior pelvic tilt — it creates unequal mechanical stress on joints, discs, muscles, and nerves. For every inch the head moves forward, approximately 10 extra pounds of load are placed on the cervical spine. Over years, postural dysfunction drives early disc degeneration, chronic pain, reduced lung capacity, and decreased energy. Corrective chiropractic care restructures the spine back toward optimal alignment.",
    symptoms: [
      "Head positioned in front of the shoulders rather than above them",
      "Rounded upper back (kyphosis) or hump at the base of the neck",
      "One shoulder or hip noticeably higher than the other",
      "Neck, mid-back, or low back pain associated with prolonged sitting",
      "Fatigue and decreased energy from constant muscular compensation",
      "Decreased range of motion in the spine",
    ],
    causes: [
      "Prolonged device use creating forward head posture",
      "Sedentary lifestyle weakening postural support muscles",
      "Carrying heavy bags on one shoulder repeatedly",
      "Old injuries that were never fully rehabilitated",
      "Structural scoliosis or pelvic obliquity",
      "Poor workstation ergonomics",
    ],
    chiropracticTreatment:
      "Postural correction at Pura Vida begins with a thorough postural analysis — measuring head position, shoulder height, spinal curves, and pelvic level. Dr. Foss uses SOT to systematically correct the pelvic, lumbar, thoracic, and cervical components of postural dysfunction in the correct biomechanical order. Home care exercises and lifestyle guidance are integrated into the care plan. Progress photos at regular intervals track improvement objectively. Most patients notice significant postural changes within the first 30–60 days of consistent care.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "shoulder-arm-pain",
    title: "Shoulder & Arm Pain | Sports Chiropractor San Antonio TX",
    image: "/images/conditions/shoulderpain.jpg",
    metaDescription:
      "Shoulder and arm pain treatment in San Antonio, TX. Pura Vida Chiropractic — sports chiropractor San Antonio — addresses rotator cuff dysfunction, cervical nerve compression, and shoulder biomechanics. Chiropractor near me San Antonio serving Stone Oak, Castle Hills, and Alamo Heights.",
    intro:
      "Shoulder and arm pain can originate from the shoulder joint itself, the cervical spine, or both. Pura Vida Chiropractic evaluates the entire upper extremity chain to find and fix the real source of your pain.",
    whatIs:
      "The shoulder is the most mobile joint in the body, making it inherently vulnerable to instability and injury. Pain in the shoulder and arm may arise from rotator cuff tendinopathy or tears, shoulder impingement, AC joint dysfunction, bicep tendinitis, or frozen shoulder. Equally common — and frequently missed — is referred pain from the cervical spine. Nerve roots exiting C4–C8 supply sensation and motor control to the shoulder, arm, and hand, so a cervical disc herniation or facet joint irritation at any of these levels can cause pain, weakness, or numbness far from the spine. A comprehensive evaluation distinguishing local shoulder pathology from cervical referral is essential.",
    symptoms: [
      "Pain at the outer shoulder, deltoid, or upper arm",
      "Difficulty raising the arm overhead or behind the back",
      "Pain worsening at night, especially lying on the affected side",
      "Radiating pain, tingling, or numbness into the forearm or hand",
      "Weakness in grip strength or arm lifting",
      "Clicking or catching sensation in the shoulder joint",
    ],
    causes: [
      "Rotator cuff tendinopathy from repetitive overhead activity",
      "Cervical disc herniation (C4–C7) referring pain into the arm",
      "Shoulder impingement from poor scapular mechanics",
      "AC joint separation from trauma",
      "Thoracic outlet syndrome compressing brachial plexus nerves",
      "Poor posture rounding the shoulders forward",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the cervical spine, thoracic spine, shoulder girdle, and shoulder joint as an integrated unit. SOT cervical adjustments decompress nerve roots that may be referring pain into the arm. Shoulder and AC joint adjustments restore proper glenohumeral and scapulothoracic mechanics. Myofascial release targeting the rotator cuff, pectorals, and upper trapezius addresses the muscular contributors to shoulder dysfunction. This combined approach resolves pain faster and more thoroughly than treating only the shoulder in isolation.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "migraines",
    title: "Migraines",
    image: "/images/conditions/migrane.jpg",
    metaDescription:
      "Migraine treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT chiropractic and Class IV Laser to reduce migraine frequency and severity naturally.",
    intro:
      "Migraines are not just bad headaches — they are complex neurological events often triggered by spinal and vascular dysfunction that chiropractic care can directly address. Many of our migraine patients achieve significant reductions in frequency and severity.",
    whatIs:
      "Migraines are recurrent headache attacks lasting 4–72 hours, often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. The trigeminovascular system — involving the trigeminal nerve and its connections to blood vessels in the brain — plays a central role in migraine generation. Upper cervical subluxations, particularly at the atlas (C1) and axis (C2), directly influence trigeminal nerve function, vertebral artery blood flow, and brainstem signaling — all of which are implicated in migraine. Research consistently shows that upper cervical chiropractic care reduces migraine frequency and severity in a significant percentage of patients.",
    symptoms: [
      "Throbbing or pulsating head pain, usually on one side",
      "Nausea, vomiting, or loss of appetite",
      "Extreme sensitivity to light (photophobia) and sound (phonophobia)",
      "Visual disturbances (aura) — zigzag lines, blind spots, or flashing lights",
      "Pain lasting 4–72 hours",
      "Postdrome ('migraine hangover') — fatigue, brain fog after the attack",
    ],
    causes: [
      "Upper cervical vertebral subluxation affecting trigeminal nerve function",
      "Vertebral artery compression or reduced blood flow",
      "Hormonal fluctuations (especially estrogen-driven migraines)",
      "Dietary triggers (tyramine, alcohol, nitrates, MSG)",
      "Sleep disruption and circadian rhythm changes",
      "Emotional stress and its neurological effects",
    ],
    chiropracticTreatment:
      "The upper cervical spine — C1 and C2 — is the primary focus of migraine care at Pura Vida. These vertebrae are in direct proximity to the trigeminal nucleus and vertebral arteries, and their misalignment is a well-documented migraine trigger. Dr. Foss uses precise, gentle SOT craniosacral protocols and upper cervical corrections to normalize atlas positioning, restore vertebral artery flow, and reduce trigeminal nerve irritation. Many patients report that migraine attacks decrease in both frequency and intensity within the first few weeks of care, with some achieving complete resolution.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "vertigo",
    title: "Vertigo",
    image: "/images/conditions/vertigo.jpg",
    metaDescription:
      "Vertigo treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT and craniosacral therapy to resolve vertigo and dizziness caused by cervicogenic and BPPV dysfunction.",
    intro:
      "Vertigo — the sensation that the room is spinning — can be profoundly disabling. Upper cervical chiropractic care at Pura Vida is highly effective for the most common types of vertigo, often producing rapid and lasting relief.",
    whatIs:
      "Vertigo is the illusion of movement — either the patient feels as if they are spinning, or the environment appears to spin around them. The most common cause is benign paroxysmal positional vertigo (BPPV), where calcium carbonate crystals (otoconia) become displaced in the semicircular canals of the inner ear. Cervicogenic vertigo arises from dysfunction in the upper cervical spine — C1 and C2 proprioceptors send signals to the vestibular system, and their misalignment creates conflicting sensory input perceived as spinning. Chiropractic care addresses both mechanisms effectively through upper cervical adjustments and craniosacral therapy.",
    symptoms: [
      "Spinning sensation triggered by head movement or position change",
      "Nausea and vomiting accompanying dizziness",
      "Loss of balance or unsteady gait",
      "Nystagmus (involuntary eye movement during an episode)",
      "Sensation of pressure or fullness in the ear",
      "Episodes lasting seconds (BPPV) to minutes or hours (Menière's)",
    ],
    causes: [
      "Displaced otoconia in the semicircular canals (BPPV)",
      "Upper cervical subluxation disrupting vestibular proprioception",
      "Craniosacral restriction at the temporal bones affecting inner ear",
      "Menière's disease from endolymphatic hydrops",
      "Head injury or whiplash disturbing inner ear crystals",
      "Vertebrobasilar insufficiency from cervical misalignment",
    ],
    chiropracticTreatment:
      "Dr. Foss assesses the upper cervical spine and temporal bones for dysfunction contributing to vertigo. SOT craniosacral corrections at the occiput, atlas, and temporal bones normalize proprioceptive signals from the cervical spine to the vestibular system. Canalith repositioning maneuvers (Epley or Semont) are performed for BPPV to guide displaced crystals back to their proper location. Most BPPV patients experience resolution within one to three sessions. Cervicogenic vertigo responds well to sustained upper cervical care over several weeks.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "dizziness",
    title: "Dizziness",
    image: "/images/conditions/dizziness.jpg",
    metaDescription:
      "Dizziness treatment in San Antonio TX. Pura Vida Chiropractic addresses cervicogenic dizziness and lightheadedness through upper cervical SOT and craniosacral therapy.",
    intro:
      "Dizziness — feeling lightheaded, unsteady, or off-balance — is a symptom with many causes, including cervical spine dysfunction that chiropractic care directly addresses. Our evaluation identifies whether your dizziness is spinal in origin.",
    whatIs:
      "Dizziness is a broad term encompassing lightheadedness, unsteadiness, pre-syncope, and the spinning sensation of vertigo. Unlike true vertigo, general dizziness often arises from autonomic imbalances, reduced cerebral blood flow, or proprioceptive errors from the cervical spine. Cervicogenic dizziness specifically results from abnormal afferent signals from the upper cervical joint receptors, which confuse the brain's spatial orientation system. Poor posture, whiplash, and chronic upper cervical subluxation are common contributors. Addressing the cervical spine often resolves this type of dizziness effectively.",
    symptoms: [
      "Lightheadedness or feeling faint with position changes",
      "Unsteadiness when walking or in crowds",
      "Dizziness that worsens with neck movement",
      "Brain fog or difficulty concentrating accompanying dizziness",
      "Headache or neck pain coinciding with dizzy spells",
      "Visual disturbances during episodes",
    ],
    causes: [
      "Upper cervical subluxation disrupting proprioceptive signaling",
      "Vertebrobasilar insufficiency from cervical artery compromise",
      "Autonomic dysregulation related to spinal dysfunction",
      "Dehydration and orthostatic hypotension",
      "Inner ear dysfunction (see also: Vertigo)",
      "Medication side effects or cardiovascular factors",
    ],
    chiropracticTreatment:
      "For dizziness that is cervicogenic in origin, Dr. Foss focuses on the upper cervical spine and craniosacral system. SOT atlas and axis corrections restore normal proprioceptive signaling from the neck to the vestibular and visual systems. Craniosacral evaluation identifies any restrictions at the occiput and temporal bones that may be perpetuating symptoms. Patients with cervicogenic dizziness typically see improvement within a few weeks of consistent upper cervical care. A thorough history and examination helps distinguish spinal dizziness from other causes that may require additional co-management.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "tinnitus",
    title: "Tinnitus",
    image: "/images/conditions/vertigo.jpg",
    metaDescription:
      "Tinnitus treatment in San Antonio TX. Pura Vida Chiropractic uses upper cervical SOT and craniosacral therapy to address the cervicogenic and TMJ causes of ringing in the ears.",
    intro:
      "Ringing, buzzing, or hissing in the ears — tinnitus — is often connected to upper cervical spine dysfunction and TMJ problems that chiropractic care can address. Many tinnitus patients find significant improvement through structural correction.",
    whatIs:
      "Tinnitus is the perception of sound — ringing, buzzing, hissing, or clicking — in the absence of an external source. While noise-induced hearing loss and acoustic neuroma are well-known causes, a significant subset of tinnitus cases is somatic in origin — meaning it arises from dysfunction in the musculoskeletal system, particularly the upper cervical spine and temporomandibular joint. The cochlear nerve and auditory brainstem pathways are in close proximity to the upper cervical spine and temporal bones, and misalignment at these structures can directly modulate tinnitus perception. SOT chiropractic care targeting these regions offers measurable relief for many tinnitus sufferers.",
    symptoms: [
      "Constant or intermittent ringing, buzzing, or hissing in one or both ears",
      "Tinnitus that changes with neck or jaw position",
      "Tinnitus accompanied by ear fullness or pressure",
      "Difficulty concentrating or sleeping due to the constant noise",
      "Accompanying neck pain, jaw pain, or headache",
      "Tinnitus that began after whiplash or dental work",
    ],
    causes: [
      "Upper cervical subluxation (C1–C2) affecting cochlear nerve pathways",
      "Temporal bone restriction disrupting inner ear mechanics",
      "TMJ dysfunction referring tension to the ear structures",
      "Noise-induced cochlear damage",
      "Whiplash or head trauma",
      "Sinus congestion and Eustachian tube dysfunction",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the upper cervical spine, temporal bones, and TMJ for dysfunction contributing to tinnitus. SOT craniosacral corrections at the temporal bones — which form the bony housing of the inner ear — can directly influence tinnitus perception. Upper cervical adjustments at C1 and C2 reduce neurological interference with the cochlear nerve pathways. TMJ corrections address the jaw-ear connection that frequently perpetuates somatic tinnitus. While results vary depending on the underlying cause, many patients with cervicogenic or somatosensory tinnitus experience meaningful reduction in intensity.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sinus-congestion",
    title: "Sinus Congestion",
    image: "/images/conditions/sinuscongestion.jpg",
    metaDescription:
      "Sinus congestion relief in San Antonio TX. Pura Vida Chiropractic uses craniosacral therapy and SOT to improve sinus drainage and reduce chronic nasal congestion.",
    intro:
      "Chronic sinus congestion often persists despite repeated antibiotic courses — because the underlying cause is structural and neurological, not just infectious. SOT craniosacral therapy at Pura Vida provides drugless sinus relief.",
    whatIs:
      "Sinus congestion occurs when the mucous membranes lining the paranasal sinuses become inflamed and swollen, impairing normal drainage. The craniosacral system plays a direct role in sinus health: the sphenoid and ethmoid bones, which form the walls of the sinuses, must move freely for proper sinus drainage. When craniosacral motion is restricted — from trauma, birth stress, or chronic subluxation — drainage is impaired and congestion becomes chronic. Additionally, the autonomic nervous system regulates mucosal secretion, and upper cervical subluxations that disrupt autonomic balance can perpetuate congestion independent of infection.",
    symptoms: [
      "Persistent nasal stuffiness or blockage",
      "Facial pressure or pain around the forehead, cheeks, or eyes",
      "Post-nasal drip leading to chronic throat clearing",
      "Reduced sense of smell or taste",
      "Chronic low-grade sinus headaches",
      "Congestion that recurs despite multiple antibiotic courses",
    ],
    causes: [
      "Craniosacral restriction at the sphenoid or ethmoid bones",
      "Upper cervical subluxation dysregulating sinus nerve supply",
      "Allergies and environmental irritants",
      "Deviated nasal septum reducing drainage capacity",
      "Chronic infections that scar and narrow drainage pathways",
      "Polyp formation from persistent mucosal inflammation",
    ],
    chiropracticTreatment:
      "SOT craniosacral corrections at the sphenoid, ethmoid, frontal, and temporal bones restore normal rhythmic motion through the cranial system, directly improving sinus drainage pathways. Dr. Foss may also apply specific intraoral techniques (when indicated) to mobilize the palatine and vomer bones, further facilitating drainage. Upper cervical adjustments normalize autonomic nerve tone, reducing the chronic mucosal secretion driven by sympathetic nervous system overactivity. Many patients notice immediate improvement in breathing and drainage following craniosacral treatment.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "ear-infections",
    title: "Ear Infections",
    image: "/images/conditions/sinuscongestion.jpg",
    metaDescription:
      "Ear infection care in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to improve Eustachian tube drainage, reducing the frequency of ear infections in children and adults.",
    intro:
      "Recurrent ear infections — especially in children — often have a structural cause: impaired Eustachian tube drainage from upper cervical and craniosacral dysfunction. Chiropractic care addresses this root cause without repeated antibiotics.",
    whatIs:
      "Ear infections (otitis media) occur when fluid accumulates in the middle ear and becomes infected. The Eustachian tube, which connects the middle ear to the back of the throat, normally drains this fluid continuously. When the tube is blocked — by dysfunction in the surrounding craniosacral system, upper cervical misalignment, or chronic mucosal swelling — fluid builds up and becomes a breeding ground for bacteria. Children are particularly susceptible because their Eustachian tubes are shorter and more horizontal. Upper cervical chiropractic care and craniosacral therapy improve Eustachian tube function and dramatically reduce the recurrence of ear infections.",
    symptoms: [
      "Ear pain (otalgia) — especially when lying down",
      "Tugging or pulling at the ear (in infants and toddlers)",
      "Fluid draining from the ear",
      "Muffled hearing or apparent hearing loss",
      "Fever accompanying the infection",
      "Recurrent infections requiring repeated antibiotic courses",
    ],
    causes: [
      "Eustachian tube dysfunction from craniosacral restriction",
      "Upper cervical subluxation impairing lymphatic drainage from the head",
      "Chronic mucosal swelling from allergies or chronic congestion",
      "Exposure to secondhand smoke",
      "Daycare attendance increasing pathogen exposure",
      "Bottle-feeding while lying flat (for infants)",
    ],
    chiropracticTreatment:
      "For children with recurrent ear infections, Dr. Foss applies extremely gentle craniosacral corrections targeting the occiput, temporal bones, and upper cervical spine (C1–C2). These gentle corrections restore normal motion through the craniosacral system, improve Eustachian tube drainage, and normalize autonomic nerve supply to the middle ear. The technique used for children is very light-touch — often no more pressure than a dime resting on the skin. Parents are often amazed at how quickly ear infection frequency decreases following chiropractic care. This approach also reduces the need for repeated antibiotic courses and ear tubes.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "chronic-fatigue-syndrome",
    title: "Chronic Fatigue Syndrome",
    image: "/images/conditions/chronicfatiguesyndrome.jpg",
    metaDescription:
      "Chronic fatigue syndrome care in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic and Class IV Laser to address neurological dysfunction contributing to chronic fatigue.",
    intro:
      "Chronic fatigue syndrome is a complex, multi-system condition that conventional medicine often struggles to treat effectively. Pura Vida Chiropractic addresses the neurological and spinal components that drive fatigue, brain fog, and systemic dysfunction.",
    whatIs:
      "Chronic fatigue syndrome (CFS), also known as myalgic encephalomyelitis (ME/CFS), is characterized by profound, persistent fatigue that is not relieved by rest and is worsened by physical or mental exertion (post-exertional malaise). The condition involves dysregulation of the autonomic nervous system, immune system, and cellular energy metabolism. Upper cervical subluxations — particularly at the atlas — can compress the brainstem, impair vagal nerve function, and disrupt the autonomic balance that governs energy production, sleep, and immune regulation. Restoring proper neurological function through gentle chiropractic care is a meaningful component of a comprehensive CFS treatment approach.",
    symptoms: [
      "Profound, unexplained fatigue lasting more than 6 months",
      "Post-exertional malaise — symptoms worsen after activity",
      "Unrefreshing sleep and difficulty maintaining sleep",
      "Cognitive impairment ('brain fog') — memory and concentration problems",
      "Orthostatic intolerance — symptoms worsen when standing",
      "Muscle pain, joint pain, and headaches",
    ],
    causes: [
      "Autonomic nervous system dysfunction (vagal insufficiency)",
      "Post-viral immune dysregulation",
      "Upper cervical subluxation compressing brainstem function",
      "Mitochondrial dysfunction impairing cellular energy production",
      "Hypothalamic-pituitary-adrenal axis dysregulation",
      "Sleep disorder and circadian rhythm disruption",
    ],
    chiropracticTreatment:
      "Dr. Foss uses the gentlest SOT protocols for CFS patients, who are sensitive to any overtreatment. The focus is on upper cervical correction — particularly C1 — to decompress brainstem function and restore vagal nerve integrity. Improved vagal tone supports autonomic balance, immune regulation, and sleep quality. Craniosacral therapy to the occiput and sphenoid complements this work by improving cerebrospinal fluid circulation. Care is introduced gradually, respecting the post-exertional sensitivity of CFS patients. Most patients notice incremental improvements in energy, sleep quality, and cognitive clarity over a sustained course of care.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "fibromyalgia",
    title: "Fibromyalgia | Chiropractor San Antonio TX",
    image: "/images/conditions/arthritic-hands.jpg",
    metaDescription:
      "Fibromyalgia care in San Antonio, TX. Pura Vida Chiropractic — chiropractor near me San Antonio — uses gentle SOT chiropractic and Class IV Laser to reduce widespread pain and improve quality of life. Best chiropractor San Antonio serving Stone Oak, Castle Hills, and Alamo Heights.",
    intro:
      "Fibromyalgia — widespread pain, tenderness, and fatigue — involves central nervous system sensitization that chiropractic care can meaningfully modulate. Pura Vida Chiropractic helps fibromyalgia patients experience real, lasting reductions in pain.",
    whatIs:
      "Fibromyalgia is a central sensitization syndrome characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive dysfunction. The nervous system becomes amplified — pain signals are processed as more intense than they should be. Spinal subluxations contribute to this sensitization by maintaining chronic afferent nerve bombardment to the spinal cord and brain, lowering the pain threshold over time. By reducing this constant source of aberrant neurological input, chiropractic care lowers central sensitization and allows the nervous system to 'reset' to a more normal pain processing state.",
    symptoms: [
      "Widespread, diffuse pain throughout the body",
      "Tenderness at specific tender points (neck, shoulders, hips, knees)",
      "Profound fatigue not relieved by sleep",
      "Cognitive difficulties — brain fog, memory lapses",
      "Sleep disturbances including non-restorative sleep",
      "Heightened sensitivity to pressure, temperature, and sound",
    ],
    causes: [
      "Central nervous system sensitization from chronic spinal subluxation",
      "Post-traumatic sensitization after injury or illness",
      "Autonomic nervous system dysregulation",
      "Sleep deprivation perpetuating pain amplification",
      "Psychosocial stress and trauma history",
      "Genetic predisposition to central sensitization",
    ],
    chiropracticTreatment:
      "Fibromyalgia patients at Pura Vida receive a very gentle, low-force SOT approach that avoids aggressive spinal manipulation, which can trigger flares. The focus is on reducing chronic neurological irritation through gentle pelvic balancing, upper cervical corrections, and craniosacral therapy. As subluxation-driven nerve bombardment decreases, the central nervous system's pain amplification gradually reduces. Patients report decreased pain intensity, improved sleep quality, and better cognitive function with consistent care. We also collaborate with the patient's other providers for a comprehensive, integrated approach.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "insomnia",
    title: "Insomnia",
    image: "/images/conditions/insomnia.jpg",
    metaDescription:
      "Insomnia treatment in San Antonio TX. Pura Vida Chiropractic uses SOT chiropractic and craniosacral therapy to balance the nervous system and restore natural sleep patterns.",
    intro:
      "Poor sleep affects every aspect of health, and its root cause is often neurological — an overactivated sympathetic nervous system that chiropractic care is highly effective at calming. Many patients sleep better after their very first adjustment.",
    whatIs:
      "Insomnia — difficulty falling asleep, staying asleep, or achieving restorative sleep — is one of the most common health complaints in modern society. While stress, anxiety, and poor sleep hygiene play significant roles, the nervous system's autonomic balance is fundamental: the sympathetic (fight-or-flight) nervous system must downregulate and the parasympathetic (rest-and-digest) system must activate for sleep to occur. Spinal subluxations — particularly in the upper cervical spine — maintain chronic sympathetic activation that prevents this transition. Chiropractic adjustments restore autonomic balance, allowing the body's natural sleep mechanisms to function.",
    symptoms: [
      "Difficulty falling asleep despite feeling tired",
      "Waking frequently during the night",
      "Waking too early and being unable to return to sleep",
      "Unrefreshing or non-restorative sleep",
      "Daytime fatigue, irritability, and difficulty concentrating",
      "Reliance on sleep medication to achieve rest",
    ],
    causes: [
      "Sympathetic nervous system overactivation from spinal subluxation",
      "Chronic pain keeping the body in a heightened alert state",
      "Cortisol and stress hormone dysregulation",
      "Poor sleep hygiene and irregular circadian rhythm",
      "Anxiety, depression, and psychological factors",
      "Caffeine, alcohol, and stimulant use",
    ],
    chiropracticTreatment:
      "Upper cervical SOT corrections are particularly effective for insomnia because the upper cervical spine directly modulates brainstem activity and autonomic nervous system tone. Restoring normal atlas positioning reduces sympathetic overactivation and enhances parasympathetic output — essentially pressing the 'calm' button in the nervous system. Craniosacral therapy further deepens this relaxation response by normalizing the cerebrospinal fluid rhythm and releasing dural tension. Many patients report sleeping better within days of beginning care. Sleep quality improvement is one of the most common and gratifying patient responses to chiropractic treatment.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea",
    image: "/images/conditions/sleepapnea.jpg",
    metaDescription:
      "Sleep apnea care in San Antonio TX. Pura Vida Chiropractic addresses the craniocervical and airway structural factors contributing to sleep-disordered breathing.",
    intro:
      "While CPAP therapy manages sleep apnea symptoms, it does not address the structural causes. Chiropractic care at Pura Vida targets the craniocervical and airway mechanics that contribute to airway collapse during sleep.",
    whatIs:
      "Obstructive sleep apnea (OSA) occurs when the upper airway collapses during sleep, causing breathing to stop repeatedly throughout the night. This leads to oxygen desaturation, fragmented sleep, and significant cardiovascular strain. While obesity and anatomy are primary contributors, craniocervical junction misalignment — particularly at the atlas — can reduce pharyngeal space and contribute to airway obstruction. Additionally, tongue tie restrictions, oral-facial muscular imbalances, and forward head posture all narrow the upper airway. Chiropractic care addresses these structural contributors as part of a comprehensive airway-supportive approach.",
    symptoms: [
      "Loud, chronic snoring",
      "Witnessed breathing pauses during sleep",
      "Gasping or choking awakenings",
      "Unrefreshing sleep and excessive daytime sleepiness",
      "Morning headaches",
      "Difficulty concentrating and mood changes",
    ],
    causes: [
      "Upper airway anatomical narrowing and soft tissue excess",
      "Obesity increasing soft tissue pressure on the airway",
      "Atlas misalignment reducing pharyngeal space",
      "Forward head posture closing the posterior airway space",
      "Tongue tie or oral restriction impairing tongue posture",
      "Nasal congestion forcing mouth breathing",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses sleep apnea from a structural perspective: correcting the atlas position to improve craniocervical airway geometry, reducing forward head posture that closes posterior airway space, and addressing any tongue tie or oral-facial restrictions limiting proper tongue posture. Craniosacral corrections to the sphenoid, occiput, and hyoid bone area support optimal airway dynamics. This chiropractic care does not replace CPAP for severe OSA, but it can meaningfully reduce AHI (apnea-hypopnea index) and improve CPAP tolerance for many patients.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "acid-reflux-gerd",
    title: "Acid Reflux & GERD",
    image: "/images/conditions/reflux.jpg",
    metaDescription:
      "Acid reflux and GERD care in San Antonio TX. Pura Vida Chiropractic addresses the thoracic and vagal nerve dysfunction contributing to acid reflux without relying solely on medication.",
    intro:
      "Acid reflux and GERD are often treated as a medication problem, but the underlying neurological and mechanical contributors respond well to chiropractic care. Many patients reduce or eliminate their reliance on antacids through spinal correction.",
    whatIs:
      "Gastroesophageal reflux disease (GERD) occurs when stomach acid repeatedly flows back into the esophagus, causing heartburn, regurgitation, and esophageal irritation. While dietary factors and hiatal hernia are often cited causes, the thoracic spine and vagus nerve play a critical role in regulating digestive function — including lower esophageal sphincter (LES) tone. Subluxations in the mid-thoracic spine (T5–T9) irritate the sympathetic nerve supply to the stomach and esophagus, impairing normal LES function. Vagal nerve compromise from upper cervical subluxation further disrupts gastric motility. Chiropractic correction of these levels can meaningfully improve GERD symptoms.",
    symptoms: [
      "Burning sensation in the chest (heartburn) after eating",
      "Regurgitation of acid or food into the throat",
      "Difficulty swallowing or sensation of a lump in the throat",
      "Chronic cough, especially at night",
      "Hoarseness or sore throat in the morning",
      "Worsening symptoms when lying down or bending over",
    ],
    causes: [
      "Thoracic subluxation (T5–T9) irritating gastric nerve supply",
      "Vagal nerve compromise from upper cervical dysfunction",
      "Hiatal hernia from diaphragm and thoracic dysfunction",
      "Dietary triggers — spicy, fatty, acidic foods",
      "Obesity increasing intra-abdominal pressure",
      "Stress activating sympathetic digestion inhibition",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the thoracic spine for subluxations — particularly T5 through T9 — that directly control the nerve supply to the stomach and esophagus. SOT thoracic corrections restore normal autonomic nerve function to these digestive structures, improving LES tone and gastric motility. Upper cervical adjustments enhance vagal nerve integrity, which is fundamental to healthy digestive function. Patients often notice a reduction in reflux frequency and severity within a few weeks of consistent thoracic spinal care.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "digestive-issues-ibs",
    title: "Digestive Issues & IBS",
    image: "/images/conditions/ibs.jpg",
    metaDescription:
      "IBS and digestive issues care in San Antonio TX. Pura Vida Chiropractic uses SOT to correct the spinal nerve dysfunction that disrupts gut motility and causes irritable bowel symptoms.",
    intro:
      "Irritable bowel syndrome and chronic digestive dysfunction have a strong neurological component — the gut-brain axis runs through the spine. Chiropractic care at Pura Vida restores the nerve supply that coordinates normal digestive function.",
    whatIs:
      "Irritable bowel syndrome (IBS) and other functional digestive disorders involve dysregulation of the enteric nervous system — the complex nerve network governing the gastrointestinal tract. This system is controlled by the vagus nerve and the thoracolumbar sympathetic nervous system, both of which are profoundly influenced by spinal health. Subluxations in the thoracic and lumbar spine alter the autonomic input to the gut, disrupting normal motility, secretion, and visceral sensitivity. The result is the hallmark IBS symptoms of alternating constipation and diarrhea, bloating, cramping, and pain. Spinal correction normalizes this nerve supply and helps restore digestive balance.",
    symptoms: [
      "Alternating constipation and diarrhea",
      "Abdominal cramping and bloating",
      "Excessive gas and flatulence",
      "Urgency and frequency of bowel movements",
      "Mucus in the stool",
      "Symptoms worsened by stress or certain foods",
    ],
    causes: [
      "Thoracolumbar subluxation disrupting gut autonomic nerve supply",
      "Vagal nerve insufficiency impairing gut-brain signaling",
      "Gut microbiome dysbiosis",
      "Chronic stress activating the sympathetic nervous system",
      "Food sensitivities (gluten, dairy, FODMAPs)",
      "Post-infectious gut hypersensitivity",
    ],
    chiropracticTreatment:
      "Dr. Foss targets the thoracic spine (T10–L2) and upper lumbar spine — the primary spinal levels controlling autonomic nerve supply to the small and large intestines. SOT corrections at these levels restore normal sympathetic and parasympathetic balance to the gut, improving motility and reducing visceral hypersensitivity. Upper cervical adjustments address vagal nerve function, which governs peristalsis and digestive secretion throughout the GI tract. Patients with chronic IBS often experience the most improvement when they commit to a consistent course of spinal care combined with dietary modifications.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "dysmenorrhea",
    title: "Dysmenorrhea (Painful Periods)",
    image: "/images/conditions/dysmenorrhea.jpg",
    metaDescription:
      "Painful period treatment in San Antonio TX. Pura Vida Chiropractic addresses the lumbar and sacral nerve dysfunction that causes dysmenorrhea and menstrual pain.",
    intro:
      "Severe menstrual pain — dysmenorrhea — is common but not normal. The lumbar and sacral spine directly controls the nerve supply to the uterus, and misalignment at these levels is a frequently overlooked cause of menstrual pain.",
    whatIs:
      "Dysmenorrhea refers to painful menstrual cramps that occur just before or during a menstrual period. Primary dysmenorrhea involves no underlying pelvic pathology and is driven by prostaglandin-induced uterine contractions. Secondary dysmenorrhea involves conditions like endometriosis or fibroids. The lumbar and sacral spinal nerves (L1–S4) govern uterine nerve supply and blood flow. Subluxations at these levels — particularly in the sacrum — can increase uterine muscle tension, impair blood flow, and amplify pain signals. Chiropractic correction of lumbosacral dysfunction reduces these neurological contributors to menstrual pain.",
    symptoms: [
      "Cramping pain in the lower abdomen beginning 1–2 days before menstruation",
      "Pain radiating to the lower back, thighs, or hips",
      "Nausea, vomiting, or diarrhea accompanying cramps",
      "Pain severe enough to limit daily activities",
      "Headache and fatigue coinciding with menstruation",
      "Clotting or heavy flow",
    ],
    causes: [
      "Lumbosacral subluxation (L4–S4) altering uterine nerve supply",
      "Sacral misalignment creating pelvic floor tension",
      "Prostaglandin overproduction causing uterine hypersensitivity",
      "Pelvic floor dysfunction and tension",
      "Endometriosis, fibroids, or ovarian cysts (secondary dysmenorrhea)",
      "Estrogen dominance and hormonal imbalance",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a thorough lumbosacral and pelvic evaluation to identify subluxations at the nerve levels governing uterine function. SOT sacral corrections gently restore normal sacral position and pelvic floor balance, reducing the neurological irritation that amplifies uterine cramping. Lumbar corrections address the sympathetic nerve supply to the uterus. Many women report significantly reduced menstrual pain beginning with their first cycle after starting chiropractic care, with continued improvement over subsequent months as spinal alignment is maintained.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "infertility",
    title: "Infertility Support",
    image: "/images/conditions/infertility.jpg",
    metaDescription:
      "Fertility chiropractic support in San Antonio TX. Pura Vida Chiropractic uses SOT to optimize pelvic and spinal neurological function as part of a natural fertility approach.",
    intro:
      "While chiropractic care is not a fertility treatment, optimizing spinal and pelvic neurological function creates a better physiological environment for conception. Many couples undergoing fertility care benefit from concurrent chiropractic support.",
    whatIs:
      "Fertility is governed by a complex interplay of hormonal, neurological, vascular, and structural factors. The lumbar and sacral spine supplies nerve innervation to the reproductive organs, and pelvic misalignment can create physical barriers — such as intrauterine constraint and compromised blood flow to the ovaries and uterus. The hypothalamic-pituitary-gonadal (HPG) axis, which regulates reproductive hormones, is influenced by the overall state of the nervous system. Chronic subluxations that maintain sympathetic overactivation can suppress HPG axis function. Chiropractic care optimizes spinal and neurological function as a supportive component of holistic fertility care.",
    symptoms: [
      "Difficulty conceiving after 12 months of regular unprotected intercourse",
      "Irregular or absent menstrual cycles",
      "Recurrent pregnancy loss",
      "Polycystic ovarian syndrome (PCOS)",
      "Endometriosis contributing to infertility",
      "Pelvic pain or structural issues reducing implantation potential",
    ],
    causes: [
      "Lumbosacral subluxation affecting reproductive organ nerve supply",
      "Pelvic misalignment reducing uterine blood flow",
      "Sympathetic overactivation suppressing HPG hormonal axis",
      "Structural uterine or tubal factors",
      "Male factor infertility (sperm motility and count)",
      "Unexplained infertility (multifactorial)",
    ],
    chiropracticTreatment:
      "Dr. Foss focuses on optimizing lumbosacral alignment and pelvic balance to support the best possible neurological and vascular environment for the reproductive organs. SOT pelvic corrections normalize the nerve supply to the uterus, ovaries, and fallopian tubes while reducing pelvic floor tension that may contribute to structural barriers to conception. Craniosacral therapy supports the hypothalamic-pituitary system through occiput and sphenoid corrections. Chiropractic care in this context is best understood as removing neurological obstacles to the body's natural fertility mechanisms — a supportive complement to medical fertility treatment.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "breech-presentation",
    title: "Breech Presentation",
    image: "/images/conditions/breechbaby.jpg",
    metaDescription:
      "Webster Technique for breech presentation in San Antonio TX. Pura Vida Chiropractic uses the Webster Technique to balance the pelvis and support optimal fetal positioning.",
    intro:
      "Breech presentation near term is a significant concern for expectant mothers. The Webster Technique — a specific chiropractic protocol — reduces pelvic tension and intrauterine constraint, supporting the baby's natural ability to assume a head-down position.",
    whatIs:
      "Breech presentation occurs when the baby is positioned feet-first or bottom-first in the uterus as the due date approaches. While spontaneous version (baby turning on its own) can occur up to 36 weeks, persistent breech often leads to cesarean delivery. Intrauterine constraint — restriction of the space available to the baby from pelvic misalignment, round ligament tightness, or uterine ligament asymmetry — is a major contributor to malpresentation. The Webster Technique, developed by Dr. Larry Webster, is a specific chiropractic analysis and treatment approach that restores pelvic balance and reduces intrauterine constraint, supporting the baby's ability to assume the optimal vertex (head-down) position.",
    symptoms: [
      "Baby confirmed in breech (frank, complete, or footling) position at 34+ weeks",
      "Hard, round mass felt at the top of the uterus (baby's head)",
      "Soft mass or feet palpable at the lower uterus",
      "Kicks felt low in the pelvis rather than high under the ribs",
      "Confirmation of malpresentation by obstetric ultrasound",
    ],
    causes: [
      "Pelvic misalignment creating intrauterine constraint",
      "Round ligament asymmetry restricting fetal movement",
      "Uterine muscle tension from sacral subluxation",
      "Placenta previa or other structural uterine factors",
      "Multiple gestation reducing available space",
      "Prior uterine surgery (fibroids, C-section scar)",
    ],
    chiropracticTreatment:
      "Dr. Foss is trained in the Webster Technique and has helped many expectant mothers support optimal fetal positioning. The technique involves specific sacral analysis and adjustment to correct sacral subluxation, followed by gentle release of the round ligaments and uterine ligaments to reduce intrauterine constraint. Treatment is performed with the mother lying comfortably on the pregnancy table. Sessions are typically brief and comfortable. The ICPA (International Chiropractic Pediatric Association) recommends Webster Technique beginning at 32–34 weeks for breech presentation, though earlier care produces the best outcomes.",
    additionalTreatments: [],
  },
  {
    slug: "infant-colic",
    title: "Infant Colic",
    image: "/images/conditions/infantcolic.jpg",
    metaDescription:
      "Infant colic care in San Antonio TX. Pura Vida Chiropractic uses gentle SOT and craniosacral therapy to address the neurological and structural causes of infant colic.",
    intro:
      "Infant colic — inconsolable crying for hours in an otherwise healthy baby — is exhausting for the whole family. Gentle chiropractic care addresses the birth-related spinal tension and craniosacral dysfunction that are often the hidden cause.",
    whatIs:
      "Colic is defined as crying for more than three hours per day, more than three days per week, in a baby under three months of age, without an identifiable medical cause. Birth — even a routine vaginal delivery — places significant compressive and torsional forces on the newborn's cervical spine and cranium. Craniosacral restrictions from birth stress, upper cervical subluxation, and vagal nerve compression are common findings in colicky infants. The vagus nerve governs gut motility, and when compromised, can produce the abdominal discomfort, gas, and dysregulated gut function that underlies colic. Gentle chiropractic care often resolves colic remarkably quickly.",
    symptoms: [
      "Inconsolable crying lasting 3+ hours daily without clear cause",
      "Baby draws knees to chest and arches the back during episodes",
      "Episodes typically occur in the late afternoon or evening",
      "Baby passes excessive gas or has difficulty burping",
      "Difficulty settling or nursing",
      "Normal between episodes — baby appears healthy otherwise",
    ],
    causes: [
      "Craniosacral restriction from birth trauma",
      "Upper cervical subluxation (C1–C2) compressing vagal nerve",
      "Gut dysbiosis and immature microbiome",
      "Cow's milk protein sensitivity (if breastfed or formula-fed)",
      "Tongue tie impairing feeding and causing air swallowing",
      "Parental stress and maternal cortisol in breast milk",
    ],
    chiropracticTreatment:
      "Infant chiropractic at Pura Vida uses the lightest possible touch — the pressure is comparable to checking the ripeness of a tomato. Dr. Foss evaluates the occiput, atlas, temporal bones, and upper cervical spine for restrictions and applies gentle sustained contact to release them. Vagal nerve function is restored, gut motility normalizes, and the infant's cry pattern typically changes within a few sessions. Parents are often present and can observe the treatment. Studies support chiropractic care as an effective and safe intervention for infantile colic, with significant reductions in daily crying time.",
    additionalTreatments: [],
  },
  {
    slug: "infant-reflux",
    title: "Infant Reflux",
    image: "/images/conditions/infantreflux.jpg",
    metaDescription:
      "Infant reflux care in San Antonio TX. Pura Vida Chiropractic uses gentle craniosacral therapy to address the vagal and hiatal factors causing reflux in babies.",
    intro:
      "Infant reflux — spitting up, arching after feeds, and feeding distress — is often neurological rather than purely mechanical. Gentle chiropractic care addresses the upper cervical and craniosacral dysfunction that impairs the lower esophageal sphincter in infants.",
    whatIs:
      "Gastroesophageal reflux in infants (GER) occurs when stomach contents flow back into the esophagus, causing spitting up, irritability, and feeding difficulties. While some degree of reflux is normal in young infants as the lower esophageal sphincter (LES) matures, pathological reflux (GERD) involves significant discomfort and feeding aversion. Vagal nerve function is critical for LES tone — and upper cervical subluxations from birth stress can compromise vagal output, reducing LES competence. Craniosacral restrictions at the occiput and atlas are frequently found in infants with significant reflux. Gentle corrections at these sites often produce rapid improvement.",
    symptoms: [
      "Frequent spitting up or vomiting after feeds",
      "Arching the back during or after feeding",
      "Crying and irritability during or after feeds",
      "Feeding aversion or refusing the breast or bottle",
      "Poor weight gain or failure to thrive",
      "Persistent hiccuping",
    ],
    causes: [
      "Upper cervical subluxation compromising vagal nerve and LES tone",
      "Craniosacral restriction at the occiput from birth forces",
      "Immature lower esophageal sphincter",
      "Tongue tie impairing latch and increasing air swallowing",
      "Cow's milk protein sensitivity",
      "Overfeeding or inappropriate feeding position",
    ],
    chiropracticTreatment:
      "Dr. Foss applies extremely gentle sustained craniosacral contact at the occiput and upper cervical spine to release birth-related restrictions and restore vagal nerve function. Treatment is feather-light and well-tolerated by infants. Improved vagal output enhances LES tone and esophageal peristalsis, reducing the upward movement of stomach contents. Any concurrent tongue tie is assessed, as it is a common co-contributor to infant reflux through impaired feeding mechanics and air swallowing. Parents typically report a reduction in spitting up and feeding distress within the first two to three sessions.",
    additionalTreatments: [],
  },
  {
    slug: "nursing-latching",
    title: "Nursing & Latching Difficulties",
    image: "/images/conditions/nursinglactation.jpg",
    metaDescription:
      "Nursing and latching difficulty care in San Antonio TX. Pura Vida Chiropractic addresses cervical, craniosacral, and tongue tie restrictions affecting infant breastfeeding.",
    intro:
      "Difficulty latching is one of the most stressful early parenting challenges — but it is often structural, not a failure of mother or baby. Chiropractic care identifies and resolves the anatomical restrictions preventing a good latch.",
    whatIs:
      "Successful breastfeeding requires a coordinated neuromuscular effort from the baby — involving the jaw, tongue, lips, and neck. When any of these structures are restricted — from birth trauma, cervical subluxation, tongue tie (ankyloglossia), or upper lip tie — the baby cannot achieve and maintain the deep, effective latch needed for proper milk transfer. A shallow latch causes nipple pain and damage for the mother and insufficient milk intake for the baby. Upper cervical subluxations also affect the baby's neck rotation, making it difficult to position comfortably on both sides. Chiropractic evaluation of the cervical spine and oral cavity is essential for nursing difficulties that persist despite lactation support.",
    symptoms: [
      "Inability to latch deeply or repeatedly losing the latch",
      "Clicking or chomping sounds during nursing",
      "Nipple pain or damage from incorrect latch position",
      "Poor milk transfer and inadequate infant weight gain",
      "Preference for nursing on one side only (cervical rotation restriction)",
      "Frustrated, fussy baby at the breast",
    ],
    causes: [
      "Tongue tie (ankyloglossia) restricting tongue elevation and reach",
      "Upper lip tie preventing lip flanging",
      "Upper cervical subluxation (C1–C2) limiting neck rotation",
      "Jaw restriction from craniosacral compression during birth",
      "Torticollis (neck muscle tightness) creating feeding position preference",
      "Low muscle tone affecting sucking strength",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the infant's upper cervical spine, craniosacral system, and oral cavity to identify all structural contributors to feeding difficulty. Gentle cervical adjustments restore full neck rotation, allowing the baby to feed symmetrically from both sides. Craniosacral corrections at the temporal bones and jaw improve mandibular mobility and sucking coordination. Tongue and lip tie assessment is performed, and when indicated, referral to a pediatric dentist or ENT for frenotomy is coordinated. Combining chiropractic care with lactation support and, when needed, a frenotomy procedure typically results in successful breastfeeding establishment.",
    additionalTreatments: [],
  },
  {
    slug: "torticollis",
    title: "Torticollis",
    image: "/images/conditions/torticollis.jpg",
    metaDescription:
      "Torticollis treatment in San Antonio TX. Pura Vida Chiropractic uses gentle SOT and craniosacral therapy to resolve infant and adult torticollis — the head-tilting neck condition.",
    intro:
      "Torticollis — the involuntary tilting or rotating of the head to one side — responds well to gentle chiropractic care that addresses the cervical and craniosacral restrictions driving the condition.",
    whatIs:
      "Torticollis is characterized by a lateral head tilt and rotation to one side, caused by spasm or shortening of the sternocleidomastoid (SCM) muscle. In infants, congenital muscular torticollis typically results from positioning in utero or compressive forces during delivery. In adults, acute torticollis can develop from sleeping awkwardly, cervical subluxation, or whiplash. Upper cervical misalignment — particularly atlas subluxation — is the primary chiropractic finding in torticollis, as the atlas controls the proprioceptive balance between left and right neck muscles. Correcting atlas positioning allows the SCM to relax and the head to return to neutral.",
    symptoms: [
      "Head consistently tilted to one side and rotated toward the opposite shoulder",
      "Limited range of motion turning the head in one direction",
      "Palpable tightness or a firm lump in the SCM muscle",
      "Facial asymmetry in infants (plagiocephaly) from persistent positional preference",
      "Feeding preference for one breast side in nursing infants",
      "Neck pain and muscle soreness in adults",
    ],
    causes: [
      "Atlas (C1) subluxation creating muscle tone asymmetry",
      "In utero positioning (common in multiple gestations or breech)",
      "Birth trauma from forceps, vacuum, or prolonged labor",
      "SCM muscle tearing or hematoma during delivery",
      "Acute adult onset from sudden movement or sleeping position",
      "Cervical disc herniation causing protective muscle spasm",
    ],
    chiropracticTreatment:
      "For infant torticollis, Dr. Foss uses feather-light craniosacral and upper cervical corrections to restore atlas alignment and release the dural tension contributing to SCM imbalance. Parents are taught gentle home stretching exercises to complement in-office treatment. For adult torticollis, SOT upper cervical adjustments are combined with myofascial release to the affected SCM and suboccipital muscles. Results are typically rapid — most patients notice significant improvement in cervical rotation within the first two to four sessions. Early treatment prevents the secondary complications of torticollis, including plagiocephaly in infants.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "growing-pains",
    title: "Growing Pains",
    image: "/images/conditions/growingpains.jpg",
    metaDescription:
      "Growing pains treatment in San Antonio TX. Pura Vida Chiropractic addresses the spinal and biomechanical factors behind growing pains in children and adolescents.",
    intro:
      "Growing pains in children are real and often intense — but they are not simply inevitable. Chiropractic care identifies and corrects the spinal and biomechanical factors that amplify growing pain and prevents long-term postural dysfunction.",
    whatIs:
      "Growing pains are recurrent, typically nocturnal, aching pain in the legs — most commonly in the calves, shins, or thighs — affecting children aged 3–12. The exact cause is debated, but current evidence suggests that musculoskeletal mechanics play a significant role: reduced pain threshold, tight muscles from daily activity, and pelvic/spinal imbalances that create abnormal lower extremity loading. Children who experience growing pains have measurably lower pain thresholds, and spinal subluxations that maintain chronic neurological irritation lower this threshold further. Chiropractic care reduces this neurological background noise and addresses the biomechanical contributors.",
    symptoms: [
      "Aching or throbbing pain in both legs, typically at night",
      "Pain in the calves, shins, thighs, or behind the knees",
      "No joint swelling, redness, or fever (distinguishing from pathological causes)",
      "Pain gone by morning",
      "Child is able to walk normally and plays without restriction",
      "Episodes occurring several times per week",
    ],
    causes: [
      "Pelvic imbalance creating uneven lower extremity loading",
      "Tight quadriceps, hamstrings, and calf muscles from activity",
      "Central neurological pain sensitization from spinal subluxation",
      "Rapid bone growth outpacing muscle length adaptation",
      "Low pain threshold in constitutionally predisposed children",
      "Nutritional deficiencies (vitamin D, magnesium)",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the child's spine, pelvis, and lower extremities for the subluxations and biomechanical imbalances that amplify growing pain. SOT pelvic corrections restore even loading across both legs. Gentle lumbar and sacral adjustments reduce the spinal nerve irritation that lowers pain threshold. Extremity adjustments to the hip, knee, and ankle address joint restrictions contributing to muscle tension. Parents often report that their children's leg pain improves significantly within the first few weeks of chiropractic care, and the cycle of nighttime episodes decreases in frequency and intensity.",
    additionalTreatments: [],
  },
  {
    slug: "adhd-focus",
    title: "ADHD & Focus Issues",
    image: "/images/conditions/adhd.jpg",
    metaDescription:
      "ADHD and focus support in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to improve neurological regulation in children and adults with ADHD.",
    intro:
      "ADHD and focus difficulties involve neurological dysregulation that spinal and craniosacral dysfunction can worsen. Chiropractic care at Pura Vida supports better brain-body communication — without medication side effects.",
    whatIs:
      "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental condition characterized by inattention, impulsivity, and hyperactivity that impairs daily functioning. While neurochemical factors (dopamine and norepinephrine dysregulation) are well-established, the role of spinal health in neurological regulation is increasingly recognized. Upper cervical subluxations and craniosacral restrictions can impair cerebrospinal fluid flow, prefrontal cortex function, and the brain's ability to self-regulate. The cerebellum — which coordinates not just movement but also cognitive function and attention — is directly affected by spinal afferent input. Chiropractic care that improves spinal neurological input may support better frontal lobe regulation and attention.",
    symptoms: [
      "Difficulty sustaining attention on tasks or during play",
      "Easily distracted by extraneous stimuli",
      "Impulsive behavior and difficulty waiting",
      "Hyperactivity — unable to sit still, always 'on the go'",
      "Disorganization, forgetfulness, and difficulty following instructions",
      "Poor sleep quality worsening daytime focus",
    ],
    causes: [
      "Neurochemical dysregulation (dopamine/norepinephrine)",
      "Upper cervical subluxation impairing cerebellar and frontal lobe input",
      "Craniosacral restriction affecting cerebrospinal fluid flow",
      "Genetic factors and family history",
      "Environmental exposures (lead, heavy metals)",
      "Sleep deprivation and dysregulated circadian rhythm",
    ],
    chiropracticTreatment:
      "Dr. Foss applies gentle upper cervical and craniosacral corrections to optimize the neurological input reaching the brain from the spine. Improved cerebellar activation and prefrontal cortex input can enhance self-regulation, impulse control, and attention. Craniosacral corrections at the sphenoid and occiput support cerebrospinal fluid circulation, which is important for brain detoxification and optimal neurological function. Chiropractic care for ADHD is a complement to behavioral therapy and other interventions — it addresses the structural neurological component that medications do not.",
    additionalTreatments: [],
  },
  {
    slug: "sensory-processing",
    title: "Sensory Processing Disorders",
    image: "/images/conditions/sensoryprocessing.jpg",
    metaDescription:
      "Sensory processing disorder care in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to help children and adults with sensory sensitivity and integration difficulties.",
    intro:
      "Sensory processing difficulties — over-sensitivity or under-sensitivity to touch, sound, light, or movement — have a neurological basis that chiropractic care can address by normalizing spinal and craniosacral input to the brain.",
    whatIs:
      "Sensory processing disorder (SPD) occurs when the brain has difficulty receiving and responding appropriately to sensory input from the environment. Children and adults with SPD may be hypersensitive (over-responding) or hyposensitive (under-responding) to various sensory stimuli, significantly affecting daily functioning, behavior, and social interaction. The brainstem plays a central role in sensory modulation, filtering the enormous amount of sensory input the body receives and prioritizing what reaches conscious attention. Upper cervical subluxations and craniosacral restrictions that impair brainstem function disrupt this filtering process, potentially contributing to sensory dysregulation. Optimizing brainstem function through gentle chiropractic care can improve sensory integration.",
    symptoms: [
      "Overreaction to touch, sound, light, or movement",
      "Meltdowns triggered by clothing textures or unexpected touch",
      "Difficulty in noisy or visually busy environments",
      "Sensory-seeking behavior — craving movement, deep pressure, or specific textures",
      "Poor balance, coordination, or motor planning",
      "Social difficulties related to sensory overwhelm",
    ],
    causes: [
      "Brainstem dysregulation from upper cervical subluxation",
      "Craniosacral restriction affecting sensory processing pathways",
      "Autism spectrum disorder (common comorbidity)",
      "Birth trauma or prematurity",
      "Developmental differences in sensory pathway maturation",
      "Chronic stress sensitizing the nervous system",
    ],
    chiropracticTreatment:
      "For children with sensory processing challenges, Dr. Foss uses an extremely gentle, developmentally appropriate approach. Upper cervical and craniosacral corrections improve brainstem function and normalize the sensory gating mechanisms that filter incoming signals. SOT Category II protocols address the sacroiliac and pelvic proprioceptive input that contributes to postural and vestibular sensory integration. Many families report improved sensory tolerance, better sleep, and easier daily routines following consistent chiropractic care. Chiropractic care is best integrated with occupational therapy sensory integration protocols for comprehensive benefit.",
    additionalTreatments: [],
  },
  {
    slug: "tongue-tie",
    title: "Tongue Tie (Ankyloglossia)",
    image: "/images/conditions/tonguetie.jpg",
    metaDescription:
      "Tongue tie care in San Antonio TX. Pura Vida Chiropractic provides chiropractic and craniosacral support for tongue tie — before and after frenotomy — for optimal nursing, speech, and airway outcomes.",
    intro:
      "Tongue tie affects far more than nursing — it impacts airway development, speech, and whole-body posture. Pura Vida Chiropractic provides the chiropractic and craniosacral support that makes tongue tie treatment more complete and lasting.",
    whatIs:
      "Ankyloglossia (tongue tie) occurs when the lingual frenulum — the tissue connecting the tongue to the floor of the mouth — is too short, tight, or incorrectly attached, restricting tongue mobility. The tongue is the body's natural palate expander and airway maintainer: proper tongue posture resting on the roof of the mouth is essential for maxillary arch development, nasal breathing, and craniofacial growth. When restricted, the tongue cannot maintain this posture, contributing to a narrow palate, mouth breathing, sleep-disordered breathing, and spinal postural changes that extend all the way down the spine. Chiropractic and craniosacral care addresses these whole-body downstream effects.",
    symptoms: [
      "Difficulty latching for breastfeeding or prolonged nursing sessions",
      "Speech articulation difficulties (especially 't', 'd', 'l', 'r', 'n')",
      "Narrow, high-arched palate or crowded teeth",
      "Mouth breathing, especially during sleep",
      "Neck tension, forward head posture, and spinal changes",
      "Sleep apnea or snoring in children and adults",
    ],
    causes: [
      "Genetic factors affecting frenulum development",
      "Disruption of frenulum resorption during fetal development",
      "Family history of tongue or lip tie",
      "Associated with MTHFR genetic variant in some families",
    ],
    chiropracticTreatment:
      "Dr. Foss provides chiropractic and craniosacral support that is essential before and after tongue tie release (frenotomy). Before release, chiropractic care prepares the craniosacral system and releases the compensatory tensions in the upper cervical spine, temporal bones, and jaw that have developed due to the tongue restriction. After release, chiropractic care helps the nervous system integrate the new range of tongue motion and prevents the same compensatory patterns from re-emerging. This integrated approach significantly improves frenotomy outcomes and supports optimal craniofacial and spinal development.",
    additionalTreatments: [],
  },
  {
    slug: "scoliosis",
    title: "Scoliosis | SOT Chiropractor San Antonio TX",
    image: "/images/conditions/scoliosis.jpg",
    metaDescription:
      "Scoliosis care in San Antonio, TX. Pura Vida Chiropractic — SOT chiropractic San Antonio — uses SOT to improve functional scoliosis, reduce progression risk, and relieve spinal curvature pain. Pediatric chiropractor San Antonio serving Stone Oak, Castle Hills, and Helotes.",
    intro:
      "Scoliosis — abnormal lateral curvature of the spine — can be significantly improved with the right chiropractic care, especially when detected early. Dr. Foss uses SOT to address the functional components of scoliosis.",
    whatIs:
      "Scoliosis is a lateral curvature of the spine of 10 degrees or more. Idiopathic scoliosis — the most common type — has no single known cause but involves a combination of genetic, neurological, and biomechanical factors. Functional scoliosis arises from pelvic imbalance, leg length discrepancy, or muscle imbalance and is highly responsive to chiropractic correction. Structural scoliosis involves fixed curves that are more resistant to change but can still be managed to reduce progression and relieve associated symptoms. SOT chiropractic addresses both the structural asymmetry of the spine and the neurological factors that may be driving or perpetuating the curvature.",
    symptoms: [
      "Visible lateral curvature of the spine",
      "One shoulder or hip higher than the other",
      "One shoulder blade more prominent than the other",
      "Uneven waist or rib hump on forward bending",
      "Back pain, fatigue, and reduced flexibility",
      "Respiratory difficulty in severe cases",
    ],
    causes: [
      "Idiopathic factors (most adolescent scoliosis)",
      "Pelvic obliquity and functional leg length discrepancy",
      "Neuromuscular conditions affecting postural muscle balance",
      "Congenital vertebral anomalies",
      "Connective tissue disorders (Marfan syndrome, Ehlers-Danlos)",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a detailed postural and spinal analysis to characterize the scoliosis — its type, location, degree of curvature, and functional vs. structural components. SOT pelvic leveling addresses the foundational imbalance that drives and perpetuates many scoliosis patterns. Specific spinal corrections target the areas of greatest restriction and rotation. For adolescents still growing, regular monitoring tracks progression and early intervention provides the best outcomes. Chiropractic scoliosis care does not guarantee curve reduction but consistently reduces progression risk, alleviates associated pain, and improves spinal function and quality of life.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "scheuermanns-disease",
    title: "Scheuermann's Disease",
    image: "/images/conditions/scheumanns.jpg",
    metaDescription:
      "Scheuermann's disease care in San Antonio TX. Pura Vida Chiropractic uses SOT and Class IV Laser to manage the thoracic kyphosis and pain of Scheuermann's disease.",
    intro:
      "Scheuermann's disease — a structural thoracic kyphosis developing in adolescence — causes progressive rounding of the upper back, pain, and postural changes that respond well to chiropractic management.",
    whatIs:
      "Scheuermann's disease is a growth disorder of the thoracic spine in which the anterior portions of multiple vertebral bodies grow less than the posterior portions, causing a wedge-shaped deformity and progressive kyphosis (rounding) of the thoracic spine. It typically becomes apparent during the adolescent growth spurt and is diagnosed when three or more consecutive thoracic vertebrae each show 5 or more degrees of anterior wedging. The resulting hyperkyphosis causes back pain, reduced thoracic mobility, and significant postural changes. Early chiropractic management can slow progression, relieve pain, and maintain as much thoracic mobility as possible.",
    symptoms: [
      "Visible rounding of the upper back (hyperkyphosis)",
      "Mid and upper back pain — often worse with activity",
      "Reduced flexibility in thoracic extension",
      "Fatigue in the back muscles from postural compensation",
      "Tight hamstrings and anterior chest muscles",
      "Adolescent onset, typically between ages 10–15",
    ],
    causes: [
      "Abnormal endochondral ossification during the adolescent growth spurt",
      "Genetic predisposition",
      "Repetitive loading of the immature thoracic spine",
      "Rapid growth relative to thoracic extensibility",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses Scheuermann's disease through SOT thoracic mobilization and extension-based corrections that work with the spine's available mobility without forcing restricted segments. Pelvic balancing reduces the compensatory lumbar hyperlordosis that accompanies thoracic kyphosis. Myofascial release targeting the tight anterior chest musculature and hip flexors helps address the secondary postural adaptations. For adolescents still growing, consistent chiropractic care combined with targeted home exercises provides the best outcome for managing progression and maintaining quality of life.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "forward-head-posture",
    title: "Forward Head Posture",
    image: "/images/conditions/forwardheadposture.jpg",
    metaDescription:
      "Forward head posture correction in San Antonio TX. Pura Vida Chiropractic uses SOT to restore the cervical curve and correct head-forward posture causing neck pain and headaches.",
    intro:
      "Forward head posture — the head sitting inches in front of the shoulders — is one of the most common postural dysfunctions of the digital age. Correcting it requires more than exercises; it requires restoring the cervical spinal curves that hold the head properly.",
    whatIs:
      "Forward head posture (FHP) occurs when the head sits anterior to the gravitational centerline of the body rather than directly over the shoulders. For every inch the head moves forward, an additional 10 pounds of effective load is placed on the cervical spine — so a head positioned 3 inches forward creates 30 extra pounds of force on the neck. This progressive stress degenerates cervical discs, strains the supporting musculature, and compresses nerves — leading to neck pain, headaches, shoulder tension, and over time, permanent changes to cervical spinal curves. Restoring proper head position requires correcting both the vertebral subluxations and the loss of cervical lordosis that allows FHP to persist.",
    symptoms: [
      "Head visibly in front of the shoulders when viewed from the side",
      "Neck, upper back, and shoulder muscle fatigue and tension",
      "Reduced cervical lordosis (flattening of the neck curve)",
      "Headaches at the base of the skull",
      "Jaw pain and TMJ tension",
      "Rounded upper back compensating for forward head position",
    ],
    causes: [
      "Prolonged phone, computer, and tablet use pulling the head forward",
      "Extended sitting without lumbar and thoracic support",
      "Loss of cervical lordosis from prior injury or chronic subluxation",
      "Weak deep cervical flexor and scapular stabilizing muscles",
      "Sleeping on too many pillows",
    ],
    chiropracticTreatment:
      "Correcting FHP requires restoring the natural cervical curve (lordosis) that is lost as the head migrates forward. Dr. Foss uses SOT cervical corrections and cervical curve rehabilitation techniques to restore lordosis and reduce the load on the spine. Thoracic adjustments address the compensatory rounding of the upper back that accompanies FHP. Home stretching and strengthening exercises targeting the deep cervical flexors and scapular stabilizers are prescribed to support the structural correction between visits. Many patients notice visible postural improvement within 30–60 days of consistent care.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "thoracic-outlet-syndrome",
    title: "Thoracic Outlet Syndrome",
    image: "/images/conditions/thoracicoutletsyndrome.jpg",
    metaDescription:
      "Thoracic outlet syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT and soft-tissue therapy to decompress the brachial plexus and relieve TOS symptoms.",
    intro:
      "Thoracic outlet syndrome causes arm pain, numbness, and weakness from nerve and blood vessel compression in the neck and chest. Chiropractic care at Pura Vida addresses the structural causes of this compression.",
    whatIs:
      "Thoracic outlet syndrome (TOS) involves compression of the nerves (brachial plexus), arteries, or veins as they pass through the thoracic outlet — the space between the collarbone and the first rib. Neurogenic TOS (the most common type) compresses the brachial plexus, causing arm pain, numbness, and weakness. Compression can occur at three anatomical sites: the scalene triangle (between anterior and middle scalene muscles), the costoclavicular space (between the clavicle and first rib), and the subcoracoid space (beneath the pectoralis minor). Poor posture, forward head position, and first rib subluxation are primary contributors. Chiropractic correction of these structural factors is central to TOS management.",
    symptoms: [
      "Pain, numbness, or tingling in the arm, hand, or fingers",
      "Weakness in the hand or difficulty with fine motor tasks",
      "Arm fatigue with overhead activities",
      "Neck and shoulder pain on the affected side",
      "Hands that turn cold or white with activity (vascular TOS)",
      "Symptoms worsening with arms raised or carrying objects",
    ],
    causes: [
      "First rib subluxation narrowing the costoclavicular space",
      "Scalene muscle hypertrophy or spasm from cervical subluxation",
      "Forward head posture and rounded shoulder positioning",
      "Cervical rib (accessory bone) narrowing the thoracic outlet",
      "Prior clavicle fracture or AC joint injury",
      "Repetitive overhead work or throwing",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses TOS through first rib adjustments — correcting the elevated or anteriorly displaced first rib that narrows the costoclavicular space. Upper cervical and thoracic corrections reduce the tension in the scalene muscles that compress the brachial plexus at the scalene triangle. Soft-tissue release targeting the pectoralis minor and scalene muscles further decompresses the neurovascular structures. Forward head posture and rounded shoulder corrections eliminate the postural component. Most TOS patients experience significant symptom reduction within a structured course of chiropractic care.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder",
    image: "/images/conditions/frozenshoulder.jpg",
    metaDescription:
      "Frozen shoulder treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to restore shoulder range of motion and resolve adhesive capsulitis.",
    intro:
      "Frozen shoulder (adhesive capsulitis) — the progressive loss of shoulder mobility accompanied by severe pain — is a challenging condition that responds well to a combination of chiropractic and regenerative therapies.",
    whatIs:
      "Adhesive capsulitis is characterized by inflammation and thickening of the shoulder joint capsule, followed by the formation of adhesions (scar tissue bands) that progressively restrict shoulder movement. The condition typically progresses through three phases: freezing (painful and increasingly stiff), frozen (stiff with reduced pain), and thawing (gradual return of motion). The cervical spine plays an important role — cervical nerve root irritation disrupts the normal neurological signaling to the shoulder, and sympathetic nervous system activation from upper thoracic subluxation perpetuates the inflammatory cascade. Addressing both the shoulder and the spinal contributors is essential for comprehensive recovery.",
    symptoms: [
      "Gradual onset of shoulder pain over weeks to months",
      "Progressive loss of shoulder range of motion in all directions",
      "Severe pain with end-range movement",
      "Inability to raise the arm overhead or reach behind the back",
      "Night pain — unable to lie on the affected shoulder",
      "Muscle atrophy from disuse",
    ],
    causes: [
      "Post-immobilization (after injury, surgery, or sling use)",
      "Diabetes mellitus increasing capsular inflammation risk",
      "Cervical nerve root irritation disrupting shoulder innervation",
      "Upper thoracic subluxation activating sympathetic inflammation",
      "Rotator cuff injury triggering inflammatory capsulitis",
      "Autoimmune dysregulation",
    ],
    chiropracticTreatment:
      "Dr. Foss takes a multi-dimensional approach to frozen shoulder. SOT cervical corrections at C4–C6 reduce the nerve root irritation that perpetuates shoulder inflammation. Upper thoracic adjustments normalize autonomic nerve tone and reduce the sympathetic-driven inflammation in the joint capsule. Glenohumeral joint mobilization within the available range maintains and gradually improves mobility. Regenerative therapies are applied directly to the shoulder capsule to break down adhesions, reduce inflammation, and accelerate the remodeling of scar tissue. This combined approach typically shortens the frozen phase significantly and accelerates the thawing phase.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "rotator-cuff-injuries",
    title: "Rotator Cuff Injuries",
    image: "/images/conditions/rotatorcufftear.jpg",
    metaDescription:
      "Rotator cuff injury treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, SoftWave, and Class IV Laser to heal rotator cuff tears and tendinopathy without surgery.",
    intro:
      "Rotator cuff injuries — from tendinopathy to partial and full tears — are among the most common shoulder conditions. Our multi-modal approach combining chiropractic correction with regenerative therapies provides an effective non-surgical path to recovery.",
    whatIs:
      "The rotator cuff is a group of four muscles and their tendons (supraspinatus, infraspinatus, teres minor, subscapularis) that stabilize the humeral head in the shoulder socket. Rotator cuff injuries range from tendinopathy (tendon degeneration and inflammation) to partial or full-thickness tears. Most injuries develop from a combination of repetitive microtrauma, age-related degeneration, and abnormal shoulder biomechanics secondary to cervical or thoracic dysfunction. The supraspinatus tendon is most commonly affected and, when torn, fails to heal well on its own due to poor blood supply. Regenerative therapies combined with chiropractic correction of the underlying biomechanical cause provide the best non-surgical outcome.",
    symptoms: [
      "Shoulder pain with arm elevation, reaching overhead, or reaching behind",
      "Weakness in the shoulder — difficulty lifting objects",
      "Night pain — unable to sleep on the affected shoulder",
      "Clicking, catching, or grinding with shoulder movement",
      "Pain at the outer shoulder or deltoid with resisted movement",
      "Gradual onset or sudden onset from a fall or forceful movement",
    ],
    causes: [
      "Repetitive overhead activity causing cumulative tendon microtrauma",
      "Age-related tendon degeneration (degenerative tear)",
      "Abnormal shoulder biomechanics from cervical or thoracic dysfunction",
      "Shoulder impingement progressively fraying the supraspinatus",
      "Acute trauma — fall on outstretched arm or forceful pulling",
      "Poor scapular stabilization allowing humeral head migration",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the cervical and thoracic spine first, correcting the nerve root irritation (C5–C6) and scapular stabilizer dysfunction that predispose the rotator cuff to injury and impair its healing. Glenohumeral and AC joint adjustments restore normal shoulder mechanics, reducing impingement and abnormal tendon loading. This chiropractic foundation is then complemented by regenerative therapies targeting the damaged tendon directly to stimulate collagen synthesis and reduce inflammation. Most patients with tendinopathy and partial tears achieve excellent outcomes without surgery.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "tennis-elbow",
    title: "Tennis Elbow",
    image: "/images/conditions/tenniselbow.jpg",
    metaDescription:
      "Tennis elbow treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve lateral epicondylitis without cortisone or surgery.",
    intro:
      "Tennis elbow (lateral epicondylitis) causes debilitating pain at the outer elbow that limits gripping and daily activity. Our combination of chiropractic correction and regenerative therapy gets to the root of this tendon injury.",
    whatIs:
      "Lateral epicondylitis is a degenerative tendinopathy affecting the common extensor tendon origin at the lateral epicondyle of the humerus — primarily the extensor carpi radialis brevis. Despite the name 'epicondylitis' (implying inflammation), the primary pathology is tendon degeneration (tendinosis) with failed healing, not acute inflammation. Cervical nerve root involvement (C6–C7) is frequently overlooked — nerve root irritation at these levels directly innervates the forearm extensors and can maintain tendon pain even when the tendon itself has partially healed. A complete evaluation must include the cervical spine, not just the elbow.",
    symptoms: [
      "Pain at the outer elbow, especially with gripping or wrist extension",
      "Weakness in grip strength",
      "Pain when shaking hands, turning a doorknob, or lifting with the palm down",
      "Morning stiffness at the elbow",
      "Tenderness directly over the lateral epicondyle",
      "Pain radiating down the forearm toward the wrist",
    ],
    causes: [
      "Repetitive wrist extension and gripping activities",
      "Cervical nerve root irritation (C6–C7) sensitizing the lateral forearm",
      "Poor technique in racquet sports or manual work",
      "Weakened rotator cuff altering shoulder and elbow mechanics",
      "Prolonged keyboard and mouse use",
      "Prior cortisone injections weakening the tendon",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the cervical spine (C6–C7), elbow, and wrist as part of a comprehensive upper extremity assessment. SOT cervical corrections address the nerve root component that sensitizes the lateral forearm and perpetuates tendon pain. Elbow joint adjustments restore normal radiohumeral mechanics. Regenerative therapies are then applied to the lateral epicondyle to directly stimulate tendon healing. This combined approach addresses both the local tendon pathology and the cervical neurological sensitization — producing better outcomes than treating the elbow in isolation.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "golfers-elbow",
    title: "Golfer's Elbow",
    image: "/images/conditions/golferselbow.jpg",
    metaDescription:
      "Golfer's elbow treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve medial epicondylitis and inner elbow pain.",
    intro:
      "Golfer's elbow (medial epicondylitis) causes pain and weakness at the inner elbow that interferes with gripping, forearm rotation, and sport. Our regenerative approach heals the tendon and corrects the cervical factors perpetuating it.",
    whatIs:
      "Medial epicondylitis is a degenerative tendinopathy of the common flexor-pronator tendon origin at the medial epicondyle of the humerus. Like lateral epicondylitis, the primary pathology is tendinosis rather than acute inflammation. The medial forearm flexors and pronators are affected — the muscles used in gripping with a pronated forearm, as in golf, throwing, or typing. Cervical nerve root involvement (C7–C8) contributes a neurological sensitization component that can maintain inner elbow pain despite local treatment. The ulnar nerve passes through the medial elbow and can be an additional site of entrapment contributing to inner elbow and ring/small finger symptoms.",
    symptoms: [
      "Pain at the inner elbow, especially with gripping or wrist flexion",
      "Tenderness directly over the medial epicondyle",
      "Weakness in grip strength and difficulty with fine motor tasks",
      "Pain worsened by throwing, swinging, or forearm pronation",
      "Tingling or numbness into the ring and small fingers (ulnar involvement)",
      "Morning stiffness at the inner elbow",
    ],
    causes: [
      "Repetitive forearm flexion and wrist pronation (golf, throwing, manual labor)",
      "Cervical nerve root irritation (C7–C8) sensitizing the medial forearm",
      "Ulnar nerve entrapment at the cubital tunnel",
      "Sudden forceful exertion overloading the medial epicondyle",
      "Weakened shoulder stability altering elbow biomechanics",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the lower cervical spine (C7–C8) and the medial elbow together. SOT cervical corrections reduce nerve root sensitization of the medial forearm. Elbow adjustments restore normal ulnohumeral mechanics and reduce cubital tunnel compression on the ulnar nerve. Regenerative therapies applied to the medial epicondyle stimulate tendon healing and reduce the chronic inflammatory cycle. Most medial epicondylitis patients achieve full resolution with a complete course of combined chiropractic and regenerative care.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "carpal-tunnel-syndrome",
    title: "Carpal Tunnel Syndrome",
    image: "/images/conditions/carpal-tunnel.jpg",
    metaDescription:
      "Carpal tunnel syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to address the cervical and wrist components of carpal tunnel without surgery or bracing alone.",
    intro:
      "Carpal tunnel syndrome — numbness, tingling, and weakness in the hand — often has a double-crush component in the cervical spine that surgical wrist release alone cannot fix. Chiropractic care addresses both sites of nerve compression.",
    whatIs:
      "Carpal tunnel syndrome (CTS) occurs when the median nerve is compressed as it passes through the carpal tunnel at the wrist, causing numbness, tingling, and weakness in the thumb, index, middle, and half of the ring finger. The 'double crush' phenomenon — compression of the median nerve at two points along its course — is a significant and often underrecognized contributor to CTS. Cervical nerve root irritation at C5–C6 sensitizes the median nerve proximally, dramatically lowering its threshold for symptomatic compression at the carpal tunnel. Addressing both sites — the cervical spine and the wrist — produces significantly better outcomes than wrist treatment alone.",
    symptoms: [
      "Numbness and tingling in the thumb, index, and middle fingers",
      "Symptoms worsening at night or with sustained hand use",
      "Weakness in grip and difficulty with fine pinch tasks",
      "Dropping objects due to hand weakness",
      "Relief with shaking the hand (Flick sign)",
      "Pain radiating up the forearm toward the elbow",
    ],
    causes: [
      "Repetitive wrist and hand use creating carpal tunnel inflammation",
      "Cervical nerve root irritation (C5–C6) — double crush mechanism",
      "Fluid retention (pregnancy, thyroid dysfunction) increasing canal pressure",
      "Wrist anatomy and genetics predisposing to compression",
      "Prolonged wrist flexion during sleep or work",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates and treats both the cervical spine and the wrist. SOT cervical corrections at C5–C6 decompress the nerve roots contributing to the double crush mechanism. Wrist and carpal bone adjustments restore normal carpal tunnel geometry, reducing pressure on the median nerve. Myofascial release of the forearm flexors and the pronator teres — another entrapment site — is incorporated. Thoracic outlet evaluation rules out brachial plexus compression. Most CTS patients avoid surgery with this comprehensive, multi-level approach.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "de-quervains-tenosynovitis",
    title: "De Quervain's Tenosynovitis",
    image: "/images/conditions/dequervain.jpg",
    metaDescription:
      "De Quervain's tenosynovitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, and Class IV Laser to resolve thumb-side wrist pain without cortisone injections.",
    intro:
      "De Quervain's tenosynovitis — painful inflammation of the tendons on the thumb side of the wrist — limits gripping, pinching, and lifting. Our regenerative approach heals the tendon sheath without repeated cortisone injections.",
    whatIs:
      "De Quervain's tenosynovitis involves inflammation and thickening of the tendon sheath surrounding the abductor pollicis longus and extensor pollicis brevis tendons as they pass through the first dorsal compartment of the wrist. This causes significant pain, swelling, and restriction at the thumb-side wrist and radial styloid. It is common in new parents (from carrying infants), musicians, office workers, and manual laborers. Wrist joint biomechanics and cervical nerve root involvement (C6) contribute to tendon irritation and impaired healing. Regenerative therapies combined with chiropractic correction of the wrist and cervical spine provide effective resolution.",
    symptoms: [
      "Pain and tenderness at the base of the thumb and radial wrist",
      "Swelling at the thumb-side wrist",
      "Positive Finkelstein test (pain with thumb tucked and wrist tilted)",
      "Difficulty gripping, pinching, or lifting with the affected hand",
      "Pain when making a fist or turning the wrist",
      "Squeaking or catching sensation with thumb movement",
    ],
    causes: [
      "Repetitive thumb abduction and wrist radial deviation",
      "New parent lifting (also called 'mommy wrist' or 'daddy wrist')",
      "Cervical nerve root involvement (C6) sensitizing the radial forearm",
      "Hormonal changes (pregnancy, postpartum estrogen drops)",
      "Prior wrist injury or sustained overuse",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the cervical spine (C6) to reduce the neurological sensitization that perpetuates tendon pain, combined with wrist and thumb CMC joint adjustments to restore normal first compartment mechanics. Myofascial release of the forearm extensor musculature reduces tendon sheath pressure. Regenerative therapies applied directly to the first dorsal compartment reduce inflammation and stimulate healing of the tendon sheath. Most patients achieve resolution without surgery or repeated cortisone injections.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "trigger-finger",
    title: "Trigger Finger",
    image: "/images/conditions/trigger-finger.jpg",
    metaDescription:
      "Trigger finger treatment in San Antonio TX. Pura Vida Chiropractic uses Shockwave Therapy, SoftWave, and Class IV Laser to resolve trigger finger tendon nodules without cortisone or surgery.",
    intro:
      "Trigger finger — the locking or catching of a finger in a bent position — is caused by tendon nodule formation in the flexor tendon sheath. Regenerative therapies at Pura Vida can resolve the nodule and restore smooth finger movement.",
    whatIs:
      "Stenosing tenosynovitis (trigger finger) develops when a nodule forms in the flexor tendon, which then catches on the narrow A1 pulley at the base of the finger as the tendon slides through during finger flexion and extension. Mild cases cause clicking or catching; severe cases result in the finger locking in flexion. It is more common in diabetics, those with rheumatoid arthritis, and people who perform repetitive gripping. While cortisone injections provide temporary relief, they often need to be repeated and do not address the underlying tendon nodule. Regenerative therapies can reduce the nodule and restore tendon gliding.",
    symptoms: [
      "Clicking, catching, or locking of a finger when bending or straightening",
      "Finger that becomes stuck in a bent position and must be straightened manually",
      "Tenderness and a palpable nodule at the base of the affected finger",
      "Morning stiffness and pain in the palm",
      "Ring finger and thumb most commonly affected",
      "Pain that worsens with gripping activity",
    ],
    causes: [
      "Repetitive gripping causing tendon and sheath thickening",
      "Tendon nodule formation from cumulative microtrauma",
      "Diabetes mellitus increasing tendon glycosylation and nodule formation",
      "Rheumatoid arthritis involving flexor tendon sheaths",
      "Prolonged pinching and gripping occupations or hobbies",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses trigger finger primarily with regenerative therapies targeted directly at the flexor tendon nodule and A1 pulley. Wrist and finger joint adjustments restore optimal mechanics. Myofascial release of the forearm flexors and the intrinsic hand muscles reduces tendon sheath pressure. Regenerative modalities are applied to reduce the nodule, decrease tendon sheath inflammation, and restore smooth tendon gliding — allowing most trigger finger patients to recover without surgical release.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "rib-subluxation",
    title: "Rib Subluxation",
    image: "/images/conditions/rib-xray.jpg",
    metaDescription:
      "Rib subluxation treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to gently reposition subluxated ribs and relieve the sharp, stabbing pain of a 'rib out of place.'",
    intro:
      "A 'rib out of place' — sharp, stabbing pain with breathing, twisting, or coughing — is one of the most dramatically painful conditions we treat, and one of the most satisfying to correct quickly with chiropractic care.",
    whatIs:
      "Rib subluxation occurs when one or more ribs shift out of their normal articulation at either the costovertebral joint (where the rib meets the thoracic vertebra) or the costochondral junction (where the rib meets the sternum). The resulting pain is typically sharp, localized, and intensely worsened by deep breathing, twisting, coughing, or sneezing — leading many patients to fear they have a fractured rib or cardiac event. Rib subluxations can occur from a single awkward movement, prolonged coughing, sleeping in an unusual position, or chronic thoracic spinal dysfunction. Chiropractic correction of the subluxated rib and the associated thoracic vertebra provides rapid relief.",
    symptoms: [
      "Sharp, localized pain at a specific rib, typically one side",
      "Pain that worsens sharply with deep breathing, coughing, or sneezing",
      "Pain with twisting the torso",
      "Referred pain radiating around the chest wall toward the sternum",
      "Shallow breathing to avoid triggering pain",
      "Palpable rib tenderness at the costovertebral junction",
    ],
    causes: [
      "Sudden awkward movement or twisting",
      "Prolonged coughing or sneezing",
      "Sleeping in an unusual position or on an unsupportive mattress",
      "Thoracic spinal dysfunction predisposing ribs to subluxation",
      "Sports collision or direct rib impact",
    ],
    chiropracticTreatment:
      "Dr. Foss performs a specific rib palpation exam to identify the subluxated rib and its direction of displacement. SOT rib corrections use gentle, specific low-force techniques to restore normal rib position — often producing immediate relief. The associated thoracic vertebral segment is also adjusted to restore normal costovertebral joint mechanics. In most cases, rib subluxations respond within one to three treatments. Patients often notice that deep breathing is significantly less painful immediately following the correction.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "mid-back-pain",
    title: "Mid-Back Pain",
    image: "/images/conditions/midbackpain.jpg",
    metaDescription:
      "Mid-back pain treatment in San Antonio TX. Pura Vida Chiropractic corrects thoracic vertebral dysfunction, rib joint restrictions, and postural imbalances driving middle back pain.",
    intro:
      "Mid-back pain — aching, stiffness, or sharp pain between the shoulder blades and lower ribcage — is typically driven by thoracic joint dysfunction and postural strain. SOT chiropractic care at Pura Vida provides effective relief.",
    whatIs:
      "The thoracic spine consists of twelve vertebrae, each articulating with a pair of ribs. Mid-back pain commonly arises from thoracic vertebral subluxations, costovertebral joint restrictions, paraspinal muscle strain, or postural hyperkyphosis placing chronic compressive stress on the thoracic segments. The thoracic spine also houses the autonomic nerve supply to thoracic and abdominal organs — making thoracic dysfunction a contributor not just to back pain but to visceral symptoms including digestive issues, cardiac-like chest discomfort, and respiratory restriction. Addressing thoracic dysfunction comprehensively improves both structural and autonomic health.",
    symptoms: [
      "Aching or stiffness between the shoulder blades",
      "Sharp pain at specific thoracic levels with movement",
      "Pain that worsens with prolonged sitting or slouching",
      "Reduced mobility rotating the upper body",
      "Referral pain wrapping around the ribs toward the chest",
      "Thoracic pain accompanying headaches or neck pain",
    ],
    causes: [
      "Thoracic vertebral subluxation from postural overload",
      "Costovertebral joint restriction and rib fixation",
      "Hyperkyphosis from prolonged sitting and poor ergonomics",
      "Compensatory thoracic tension from lumbar or cervical dysfunction",
      "Muscle strain from heavy lifting or awkward reach",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the entire thoracic spine and rib cage, identifying the specific segments restricted and the direction of correction needed. SOT thoracic adjustments restore normal costovertebral joint mobility and spinal alignment. Because the thoracic spine is structurally linked to both the cervical and lumbar regions, thoracic corrections also improve global spinal function. Patients with chronic mid-back pain often note improvements not only in back pain but in breathing, digestion, and energy levels as thoracic autonomic nerve function is restored.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "pelvic-girdle-pain",
    title: "Pelvic Girdle Pain",
    image: "/images/conditions/pelvicgirdlepain.jpg",
    metaDescription:
      "Pelvic girdle pain treatment in San Antonio TX. Pura Vida Chiropractic uses SOT to stabilize the SI joints and pubic symphysis driving pelvic girdle pain in pregnancy and beyond.",
    intro:
      "Pelvic girdle pain — affecting the SI joints, pubic symphysis, and surrounding structures — is debilitating and often inadequately treated. SOT chiropractic care restores pelvic stability and eliminates the root cause.",
    whatIs:
      "Pelvic girdle pain (PGP) encompasses pain arising from the sacroiliac joints, pubic symphysis, or surrounding ligaments and muscles of the pelvis. It is particularly common during and after pregnancy, when hormonal ligament laxity reduces pelvic stability. PGP causes pain with walking, stair climbing, rolling in bed, and prolonged standing — often severely limiting daily function. The sacroiliac joint, which connects the sacrum to the ileum, is the most frequently involved structure. Hormonal, mechanical, and neurological factors interact to produce PGP. SOT chiropractic is specifically designed to address sacroiliac dysfunction and restore pelvic stability.",
    symptoms: [
      "Pain in the lower back, buttocks, groin, or inner thighs",
      "Pain with walking, especially a waddling gait",
      "Sharp pain when climbing stairs or getting in/out of a car",
      "Pain rolling over in bed or separating the legs",
      "Clicking or grinding in the SI joint or pubic symphysis",
      "Instability feeling in the pelvis with weight-bearing",
    ],
    causes: [
      "Sacroiliac joint dysfunction from ligament laxity or hypermobility",
      "Hormonal relaxin effects during pregnancy weakening pelvic ligaments",
      "Lumbar disc herniation referring pain to the pelvic region",
      "Pelvic floor dysfunction contributing to SI joint instability",
      "Leg length discrepancy creating uneven pelvic loading",
      "Prior pelvic trauma or difficult childbirth",
    ],
    chiropracticTreatment:
      "SOT's Category II protocol is the definitive chiropractic approach for sacroiliac joint dysfunction and pelvic girdle pain. Dr. Foss uses specific pelvic blocking positions to gently restore normal SI joint alignment and reduce ligamentous tension. For pregnant patients, the Webster Technique is used to balance the pelvis safely throughout pregnancy. Pubic symphysis corrections are performed when anterior pelvic pain is present. Pelvic floor muscle assessment guides recommendations for concurrent pelvic floor physiotherapy when indicated. Most PGP patients experience significant reduction in pain within the first several visits.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "si-joint-dysfunction",
    title: "SI Joint Dysfunction",
    image: "/images/conditions/si-joint.png",
    metaDescription:
      "SI joint dysfunction treatment in San Antonio TX. Pura Vida Chiropractic uses SOT Category II protocols to correct sacroiliac joint misalignment and resolve SI joint pain.",
    intro:
      "Sacroiliac joint dysfunction is one of the most common and most frequently missed causes of low back and buttock pain. SOT chiropractic at Pura Vida is specifically designed around the SI joint.",
    whatIs:
      "The sacroiliac (SI) joint connects the sacrum (base of the spine) to the ileum (part of the pelvis) on each side. These joints are stabilized by some of the strongest ligaments in the body and normally allow only a few millimeters of movement. When the SI joint is hypomobile (locked) or hypermobile (unstable), it causes significant pain in the low back, buttock, and sometimes the groin or posterior thigh. SI joint dysfunction is estimated to account for 15–30% of all low back pain — yet it is often misdiagnosed as lumbar disc disease or sciatica. SOT Category II chiropractic protocols were developed specifically to diagnose and correct SI joint dysfunction.",
    symptoms: [
      "Unilateral low back and buttock pain, worse on one side",
      "Pain that worsens with prolonged standing, sitting on one side, or climbing stairs",
      "Pain with transitions — standing up, getting out of a car",
      "Tenderness directly over the SI joint (posterior superior iliac spine)",
      "Pain mimicking sciatica — radiating into the hip and posterior thigh",
      "Relief when lying down",
    ],
    causes: [
      "Acute injury from a fall or sudden load",
      "Leg length discrepancy creating chronic asymmetric SI loading",
      "Pregnancy and hormonal ligament laxity",
      "Hypermobility disorders loosening SI joint stabilizing ligaments",
      "Lumbar fusion surgery above the SI joint (adjacent segment stress)",
      "Repetitive asymmetric activities (golf, tennis, running)",
    ],
    chiropracticTreatment:
      "SOT Category II is the gold standard chiropractic approach for SI joint dysfunction. Dr. Foss uses specific wedge-based blocking to assess and correct the specific direction of SI joint displacement on each side. This low-force, gravity-assisted technique gently restores normal SI joint position and mobility without aggressive manipulation. It is safe for acute flares, post-surgical patients, and pregnant patients. Many SI joint pain patients experience dramatic relief within the first one to three treatments, followed by progressive stabilization of the joint over a full course of care.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "piriformis-syndrome",
    title: "Piriformis Syndrome",
    image: "/images/conditions/piriformis.jpg",
    metaDescription:
      "Piriformis syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT and soft-tissue therapy to release piriformis muscle spasm and relieve sciatic nerve entrapment.",
    intro:
      "Piriformis syndrome — deep buttock pain with sciatic nerve irritation — is frequently confused with disc sciatica. At Pura Vida, we identify and treat the piriformis muscle and the pelvic imbalance that drives it into spasm.",
    whatIs:
      "The piriformis is a small muscle deep in the buttock that externally rotates the hip. The sciatic nerve passes either beneath, through, or above the piriformis muscle (anatomic variation exists). When the piriformis is tight or in spasm — from pelvic imbalance, SI joint dysfunction, or prolonged sitting — it compresses or irritates the sciatic nerve, producing buttock pain and sciatic symptoms that mimic lumbar disc radiculopathy. Piriformis syndrome is frequently present concurrently with or as a consequence of SI joint dysfunction and lumbar subluxation. Effective treatment addresses both the muscle and the upstream spinal drivers of its spasm.",
    symptoms: [
      "Deep, aching pain in the buttock",
      "Sciatica-like pain, tingling, or numbness down the back of the leg",
      "Pain worsening with prolonged sitting, especially on hard surfaces",
      "Tenderness deep in the buttock, especially with compression",
      "Pain with hip external rotation (crossing the leg)",
      "Buttock pain worsening with climbing stairs or hills",
    ],
    causes: [
      "Sacroiliac joint dysfunction creating piriformis protective spasm",
      "Pelvic imbalance overloading one piriformis",
      "Prolonged sitting (especially with hip externally rotated)",
      "Trauma to the buttock from a fall or motor vehicle accident",
      "Anatomic variant with sciatic nerve piercing the piriformis",
      "Overuse in runners and cyclists",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses piriformis syndrome at both the muscular and pelvic levels. SOT SI joint corrections remove the sacroiliac dysfunction that causes the piriformis to remain in protective spasm. Deep soft-tissue release directly to the piriformis — through the gluteal tissue — releases the muscle's grip on the sciatic nerve. Hip joint adjustments normalize external rotator mechanics. Once the pelvic foundation is corrected and the muscle is released, sciatic symptoms typically resolve without the need for cortisone injections or surgery.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "hip-bursitis",
    title: "Hip Bursitis",
    image: "/images/conditions/hipbursitis.jpg",
    metaDescription:
      "Hip bursitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to reduce trochanteric bursitis inflammation and pain.",
    intro:
      "Hip bursitis — outer hip pain that worsens with walking, lying on the side, or climbing stairs — responds well to a combination of pelvic correction and regenerative therapies that address the underlying cause.",
    whatIs:
      "Greater trochanteric bursitis (GTBS) involves inflammation of the bursa sac overlying the greater trochanter of the femur — the bony prominence on the outer hip. The IT band and gluteal tendons pass over this bursa, and repetitive friction from pelvic imbalance or muscular tightness causes bursal inflammation. GTBS is now more accurately understood as greater trochanteric pain syndrome (GTPS) — recognizing that gluteal tendinopathy is often the primary pathology rather than pure bursitis. Pelvic imbalance from lumbar or SI joint dysfunction creates asymmetric IT band tension and gluteal tendon overload. Correcting the pelvic cause is essential for lasting relief.",
    symptoms: [
      "Outer hip pain, often radiating down the outer thigh",
      "Pain lying on the affected side at night",
      "Pain climbing stairs, rising from sitting, or walking on inclines",
      "Tenderness over the greater trochanter",
      "Pain that worsens with prolonged activity",
      "Snapping hip sensation (coxa saltans) in some patients",
    ],
    causes: [
      "Pelvic imbalance increasing IT band tension across the trochanteric bursa",
      "Gluteal tendinopathy from repetitive compressive and tensile loading",
      "Leg length discrepancy increasing lateral pelvic drop",
      "Tight IT band and weak hip abductor muscles",
      "Running on cambered surfaces or with a narrow stride",
      "Prior hip surgery or arthroplasty altering biomechanics",
    ],
    chiropracticTreatment:
      "Dr. Foss corrects the pelvic imbalance driving abnormal IT band and gluteal tendon loading through SOT Category II adjustments. Hip joint and lumbar corrections restore normal femoral mechanics. Myofascial release targeting the IT band, TFL, and gluteal muscles reduces compressive bursal loading. Regenerative therapies are applied to the trochanteric bursa and gluteal tendon insertion to reduce inflammation and stimulate tissue repair. Hip abductor strengthening exercises are provided as home care to prevent recurrence.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "it-band-syndrome",
    title: "IT Band Syndrome",
    image: "/images/conditions/runnersknee.jpg",
    metaDescription:
      "IT band syndrome treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve iliotibial band friction and lateral knee pain.",
    intro:
      "IT band syndrome — the bane of runners and cyclists — causes sharp lateral knee pain that builds with activity. Correcting the pelvic imbalance driving IT band tension is the key to lasting relief.",
    whatIs:
      "Iliotibial band syndrome (ITBS) is an overuse injury affecting the iliotibial band — a thick fascial band running from the hip down the outer thigh to the lateral knee. As the knee repeatedly flexes and extends during running or cycling, the IT band rubs against the lateral femoral epicondyle, creating friction and inflammation. The primary driver of excessive IT band tension is pelvic imbalance — a dropped pelvis on the swing leg (Trendelenburg pattern) or a laterally shifted center of mass forces the IT band to work harder with each stride. Correcting pelvic alignment is as important as stretching the IT band and treating the local knee friction.",
    symptoms: [
      "Sharp, burning pain at the outer knee during and after running",
      "Pain that begins consistently at a specific distance or duration of exercise",
      "Tenderness over the lateral femoral epicondyle",
      "Pain descending stairs",
      "Tightness extending up the outer thigh toward the hip",
      "Occasional outer hip pain from TFL and gluteal involvement",
    ],
    causes: [
      "Pelvic drop pattern from hip abductor weakness or imbalance",
      "Increased training volume or sudden mileage increase",
      "Running on cambered roads or tracks in one direction",
      "Overpronation altering tibial rotation and IT band stress",
      "Leg length discrepancy creating asymmetric pelvic loading",
      "Tight TFL and hip flexors maintaining IT band tension",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses IT band syndrome through pelvic leveling (SOT Category II), hip joint adjustments, and myofascial release targeting the IT band, TFL, and gluteal muscles. Foot and ankle corrections address overpronation contributing to tibial rotation forces. Pelvic balance is the key upstream intervention that allows the IT band to release its chronic tension. Regenerative therapies are applied to the lateral knee to resolve the local inflammation and accelerate tissue healing. Graduated return-to-running guidance prevents recurrence.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "runners-knee",
    title: "Runner's Knee",
    image: "/images/conditions/runnersknee.jpg",
    metaDescription:
      "Runner's knee treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave, and Class IV Laser to resolve patellofemoral pain syndrome and get you back to running.",
    intro:
      "Runner's knee (patellofemoral pain syndrome) — dull, aching pain around and behind the kneecap — limits athletes and active people of all levels. Correcting patellar tracking through pelvic and hip mechanics is the key to lasting relief.",
    whatIs:
      "Patellofemoral pain syndrome (PFPS) involves pain arising from the patellofemoral joint — where the kneecap (patella) glides in the trochlear groove of the femur. When the patella tracks laterally out of its groove due to weak hip abductors, tight lateral structures, or pelvic imbalance, abnormal compressive forces create cartilage irritation and pain. The condition is extremely common in runners, cyclists, and anyone who does a lot of stair climbing or squatting. Unlike structural pathology, PFPS responds very well to correcting the biomechanical cause of patellar maltracking — which includes the entire kinetic chain from the pelvis and hip down to the foot.",
    symptoms: [
      "Dull ache around or behind the kneecap, typically both sides",
      "Pain worsening with running, cycling, squatting, or stair climbing",
      "Pain sitting for prolonged periods with knee flexed ('movie sign')",
      "Knee stiffness after rest that improves with movement",
      "Grinding or crunching sensation (crepitus) under the kneecap",
      "Occasional mild knee swelling",
    ],
    causes: [
      "Hip abductor and external rotator weakness allowing femoral adduction",
      "Pelvic imbalance altering femoral angle and patellar groove alignment",
      "Tight quadriceps or IT band pulling the patella laterally",
      "Foot overpronation causing tibial internal rotation",
      "Sudden increase in training volume or intensity",
      "Weak VMO (vastus medialis oblique) — the 'teardrop' quad muscle",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates patellar tracking, hip mechanics, and pelvic balance to identify all contributors to PFPS. SOT pelvic leveling corrects the hip and femoral mechanics that drive lateral patellar maltracking. Patella mobilization and knee joint adjustments restore normal patellofemoral glide. Foot and ankle corrections address overpronation. VMO activation and hip strengthening exercises are integrated as home care. Regenerative therapies reduce local inflammation and support cartilage recovery. This comprehensive approach resolves PFPS far more reliably than quadriceps stretching and bracing alone.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "meniscus-injuries",
    title: "Meniscus Injuries",
    image: "/images/conditions/meniscusinjury.jpg",
    metaDescription:
      "Meniscus injury treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, SoftWave, and Class IV Laser to support meniscus healing and restore knee function without surgery.",
    intro:
      "Meniscus tears are one of the most common knee injuries — and many heal without surgery when the right conservative care is applied. Our combination of chiropractic correction and regenerative therapies supports the meniscus repair process.",
    whatIs:
      "The menisci are two C-shaped fibrocartilage pads that sit between the femur and tibia in the knee joint, functioning as shock absorbers and stabilizers. Meniscus tears occur acutely from twisting injuries under load or gradually from degeneration. Degenerative tears — especially in patients over 40 — often heal with conservative care. Even acute tears frequently respond well to non-surgical management when the knee's biomechanics are corrected and regenerative healing is supported. Surgery (meniscectomy) removes meniscal tissue permanently, accelerating knee arthritis — making successful conservative care the preferred outcome whenever possible.",
    symptoms: [
      "Joint line pain at the inner or outer knee",
      "Swelling developing over hours after acute injury",
      "Locking or giving way of the knee",
      "Pain with deep squatting or kneeling",
      "Stiffness and limited range of motion",
      "Gradual onset of knee pain with activity in degenerative tears",
    ],
    causes: [
      "Twisting injury under load in sports or daily activity",
      "Degenerative thinning and tearing from years of abnormal knee loading",
      "Pelvic imbalance creating asymmetric knee joint stress",
      "Ligament laxity reducing knee stability and increasing shear forces",
      "Obesity increasing compressive knee loading",
      "Prior ACL injury changing knee biomechanics",
    ],
    chiropracticTreatment:
      "Dr. Foss restores normal knee biomechanics through pelvic leveling (removing the upstream source of asymmetric knee loading), knee joint adjustments (restoring normal femoral-tibial mechanics), and foot and ankle corrections (addressing overpronation contributing to tibial internal rotation). With the biomechanical environment improved, regenerative therapies are applied directly to the meniscus injury to stimulate the healing of fibrocartilage — a tissue with limited innate blood supply and regenerative capacity. This combined approach gives the meniscus the best possible opportunity to heal without surgery.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "shin-splints",
    title: "Shin Splints",
    image: "/images/conditions/shinsplint.jpg",
    metaDescription:
      "Shin splints treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, and Class IV Laser to resolve medial tibial stress syndrome and return athletes to training.",
    intro:
      "Shin splints — pain along the inner shin during and after running — are a common overuse injury that responds well to correcting the biomechanical overload driving the condition.",
    whatIs:
      "Medial tibial stress syndrome (MTSS) — commonly called shin splints — involves pain along the medial (inner) border of the tibia from periosteal inflammation, fascial stress, or early stress reaction at the tibial cortex. Abnormal tibial torsion from overpronation, pelvic imbalance causing increased tibial loading, and running biomechanics collectively drive MTSS. Without correction of the underlying biomechanical cause, the condition progresses despite rest — returning as soon as training resumes. In severe cases, ignored shin splints progress to tibial stress fractures.",
    symptoms: [
      "Dull or aching pain along the inner lower leg (tibia)",
      "Pain beginning during runs and persisting afterward",
      "Tenderness to palpation over the medial tibial border",
      "Mild swelling along the shin",
      "Pain worse at the start of a run, sometimes improving mid-run, then worsening",
      "Morning stiffness and tightness in the lower leg",
    ],
    causes: [
      "Overpronation causing excessive tibial internal rotation and periosteal stress",
      "Pelvic imbalance creating asymmetric tibial loading",
      "Sudden increase in training volume, frequency, or surface hardness",
      "Running in worn shoes without adequate motion control",
      "Tight gastrocnemius and soleus muscles increasing tibial fascial tension",
      "Weak hip abductors and glutes reducing lower extremity stability",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses shin splints through a kinetic chain approach: pelvic leveling removes the upstream biomechanical driver of asymmetric tibial stress; foot and ankle adjustments correct overpronation; tibiofibular joint corrections restore normal fibular mechanics. Myofascial release targeting the deep posterior compartment muscles reduces periosteal tension. Regenerative therapies are applied along the medial tibia to reduce inflammation and support periosteal healing. Graduated training modifications and footwear recommendations prevent recurrence.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "achilles-tendonitis",
    title: "Achilles Tendonitis",
    image: "/images/conditions/achillestendonitis.jpg",
    metaDescription:
      "Achilles tendonitis treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, Shockwave Therapy, SoftWave, and Class IV Laser to heal Achilles tendinopathy and prevent rupture.",
    intro:
      "Achilles tendonitis — pain, stiffness, and swelling in the Achilles tendon — is a serious overuse injury that requires more than rest and ice. Our regenerative approach heals the tendon while chiropractic care corrects the biomechanical cause.",
    whatIs:
      "Achilles tendinopathy ranges from reactive tendinopathy (early, reversible) to degenerative tendinosis (advanced, with structural disorganization of collagen). The Achilles tendon, the largest and strongest tendon in the body, undergoes progressive degeneration from repetitive overloading — particularly when pelvic imbalance and overpronation create abnormal medial column loading that torques the Achilles with each step. Untreated Achilles tendinopathy progresses to rupture risk. Regenerative therapies combined with biomechanical correction of the underlying cause provide the most effective path to tendon recovery.",
    symptoms: [
      "Pain and stiffness at the back of the heel and lower leg",
      "Morning pain that eases with movement ('warm-up phenomenon')",
      "Tendon thickening, swelling, or nodule formation",
      "Pain with running, jumping, or stair climbing",
      "Tenderness 2–6 cm above the calcaneal insertion",
      "Crepitus (squeaking) with ankle movement",
    ],
    causes: [
      "Overpronation creating torsional stress on the Achilles",
      "Pelvic imbalance altering lower extremity biomechanics",
      "Sudden increase in training load without adequate tendon adaptation",
      "Tight gastrocnemius and soleus increasing Achilles tendon load",
      "Prior fluoroquinolone antibiotic use weakening tendon collagen",
      "Poor footwear (low drop to high drop change too rapidly)",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses Achilles tendinopathy from the kinetic chain up. Pelvic leveling and lumbar corrections remove the upstream forces driving overpronation and asymmetric tendon loading. Calcaneal and ankle joint adjustments restore normal hindfoot mechanics. Myofascial release of the gastrocnemius and soleus reduces tendon compressive loading. Regenerative therapies are applied directly to the Achilles tendon to stimulate collagen synthesis, restore tendon architecture, and reduce the risk of progression to rupture.",
    additionalTreatments: ["shockwave", "softwave", "laser"],
  },
  {
    slug: "bunions",
    title: "Bunions",
    image: "/images/conditions/bunion.jpg",
    metaDescription:
      "Bunion care in San Antonio TX. Pura Vida Chiropractic addresses the pelvic and foot biomechanics driving bunion formation to slow progression and relieve bunion pain.",
    intro:
      "Bunions — the bony prominence at the base of the big toe — are driven by abnormal foot mechanics that begin at the pelvis. Chiropractic care and regenerative therapies address both the local pain and the upstream cause.",
    whatIs:
      "A bunion (hallux valgus) is a deformity where the big toe deviates toward the second toe and a bony prominence develops at the metatarsophalangeal (MTP) joint. The primary cause is abnormal forefoot loading — typically from overpronation, which causes the first metatarsal to splay medially while the big toe is pushed laterally by footwear. Pelvic imbalance and leg length discrepancy create asymmetric foot loading that preferentially affects one foot more than the other. While surgery (bunionectomy) may ultimately be needed for severe deformities, conservative care can significantly slow progression, reduce pain, and improve foot function.",
    symptoms: [
      "Bony prominence at the base of the big toe joint",
      "Redness, swelling, and pain over the MTP joint",
      "Big toe angling toward the second toe",
      "Pain with walking, especially in narrow or pointed footwear",
      "Calluses and corns between the first and second toes",
      "Limited range of motion of the big toe",
    ],
    causes: [
      "Overpronation driving first metatarsal medial deviation",
      "Pelvic imbalance creating asymmetric foot loading",
      "Narrow, pointed, or high-heeled footwear compressing toes",
      "Hypermobility of the first tarsometatarsal joint",
      "Genetic predisposition to forefoot valgus",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the biomechanical root of bunion formation through pelvic leveling, which normalizes leg symmetry and foot loading, and calcaneal and first metatarsal joint adjustments that restore foot arch mechanics and reduce first ray instability. Myofascial release of the plantar fascia and intrinsic foot muscles supports better forefoot alignment. Regenerative therapies reduce the inflammation and chronic bursitis at the MTP joint that cause day-to-day pain. Custom or over-the-counter orthotics are recommended to maintain foot correction between visits.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "heel-spur",
    title: "Heel Spur",
    image: "/images/conditions/heelspur.jpg",
    metaDescription:
      "Heel spur treatment in San Antonio TX. Pura Vida Chiropractic uses Shockwave Therapy and Class IV Laser to break down heel spurs and relieve calcaneal pain without surgery.",
    intro:
      "Heel spurs — calcium deposits on the underside of the heel bone — cause debilitating heel pain that limits walking and activity. Shockwave therapy at Pura Vida is highly effective at breaking down these calcifications and restoring painless movement.",
    whatIs:
      "A heel spur is a calcium deposit that forms at the site of chronic fascial tension on the calcaneus (heel bone) — most commonly at the plantar fascia insertion or, less often, at the Achilles tendon insertion. Heel spurs develop over months and years in response to the same biomechanical overload that causes plantar fasciitis and Achilles tendinopathy. The spur itself is often not painful — the inflammation of the surrounding soft tissue is the true source of pain. Shockwave therapy, which was originally developed to break down kidney stones, is now recognized as one of the most effective treatments for calcific heel pathology.",
    symptoms: [
      "Sharp, stabbing heel pain with weight-bearing — especially with first steps",
      "Pain at the bottom of the heel (plantar spur) or back of the heel (insertional Achilles)",
      "Palpable bony prominence in severe cases",
      "Pain confirmed by X-ray showing calcaneal spur formation",
      "Heel pain that has persisted for months or years",
      "Limited ability to walk, exercise, or stand for prolonged periods",
    ],
    causes: [
      "Chronic plantar fascia tension at the calcaneal insertion",
      "Insertional Achilles tendinopathy at the posterior calcaneus",
      "Overpronation and pelvic imbalance creating chronic heel overload",
      "Calcium deposit formation as a response to chronic microtrauma",
      "Obesity increasing calcaneal compressive loading",
    ],
    chiropracticTreatment:
      "Dr. Foss combines the biomechanical correction of plantar fasciitis (pelvic leveling, calcaneal adjustment, calf release) with targeted shockwave therapy at the heel spur site. Shockwave energy disrupts the calcific deposit, stimulates localized blood flow, and activates the body's healing response to remove the calcium and resolve the surrounding inflammation. Class IV laser therapy further reduces pain and promotes tissue repair. Most heel spur patients experience significant pain reduction within 3–6 shockwave sessions.",
    additionalTreatments: ["shockwave", "laser"],
  },
  {
    slug: "hammer-toes",
    title: "Hammer Toes",
    image: "/images/conditions/hammertoes.jpg",
    metaDescription:
      "Hammer toe care in San Antonio TX. Pura Vida Chiropractic addresses the foot and pelvic biomechanics contributing to hammer toe deformity and provides pain relief.",
    intro:
      "Hammer toes — abnormal toe joint flexion causing curled, painful toes — result from biomechanical imbalances in the foot and gait that chiropractic care can address to reduce pain and slow progression.",
    whatIs:
      "Hammer toe is a deformity where the middle joint of a toe is permanently or semi-permanently flexed, causing the toe to appear bent or curled. It most commonly affects the second, third, and fourth toes. Hammer toe develops from an imbalance between the long toe flexor tendons and the short intrinsic muscles, typically driven by overpronation, tight footwear, and forefoot biomechanical overload. In flexible hammer toe (early stage), the toe can still be straightened passively. In rigid hammer toe (advanced), the joint is fixed. Conservative care focuses on restoring forefoot mechanics, reducing tendon tension, and slowing progression.",
    symptoms: [
      "Toe that is bent at the middle joint, unable to fully straighten",
      "Corns or calluses on the top of the bent joint from shoe friction",
      "Pain in the affected toe with walking or wearing shoes",
      "Swelling and redness at the bent joint",
      "Difficulty fitting into standard footwear",
      "Progressive stiffening of the toe over time",
    ],
    causes: [
      "Overpronation forcing forefoot loading onto the second and third rays",
      "Muscle imbalance between long and short toe flexors",
      "Tight or narrow footwear compressing and bending toes",
      "Bunion deformity pushing the big toe into the second toe",
      "Rheumatoid arthritis affecting MTP joints",
      "High arched foot (cavus foot) changing forefoot loading",
    ],
    chiropracticTreatment:
      "Dr. Foss addresses the forefoot mechanics driving hammer toe progression — calcaneal and midfoot joint adjustments restore arch mechanics, while pelvic leveling normalizes gait. Metatarsophalangeal joint mobilization improves the range of motion at the base of the affected toe. Intrinsic foot muscle exercises are prescribed to strengthen the short toe flexors and reduce the tendon imbalance. Footwear and orthotic guidance helps redistribute forefoot pressure. Regenerative therapies reduce pain and inflammation in symptomatic toe joints.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "sprains-strains",
    title: "Sprains & Strains",
    image: "/images/conditions/sprainandstrain.jpg",
    metaDescription:
      "Sprain and strain treatment in San Antonio TX. Pura Vida Chiropractic uses SOT, SoftWave, and Class IV Laser to accelerate recovery from ligament and muscle injuries throughout the body.",
    intro:
      "Sprains and strains — ligament and muscle injuries from trauma or overuse — are among the most common acute injuries. Our combination of joint correction and regenerative therapies speeds recovery and prevents chronic instability.",
    whatIs:
      "A sprain is a stretching or tearing of a ligament (bone-to-bone), while a strain involves a muscle or tendon (muscle-to-bone). Grade I injuries involve microscopic tearing with intact structural integrity; Grade II involve partial tears with some functional loss; Grade III involve complete tears requiring surgical assessment. The most common sites are the ankle, knee, wrist, and low back. After acute ligament injury, joint mechanics are invariably disrupted — the injured joint develops compensatory positioning, surrounding muscles guard protectively, and the nervous system alters motor control patterns. Chiropractic correction of these secondary joint dysfunctions is essential for complete recovery.",
    symptoms: [
      "Pain at the injured area, especially with movement or weight-bearing",
      "Swelling and bruising in the first 24–48 hours",
      "Joint instability or giving way (Grade II–III)",
      "Muscle spasm protecting the injured area",
      "Reduced range of motion",
      "Lingering weakness and re-injury risk if not fully rehabilitated",
    ],
    causes: [
      "Sudden twisting or inversion force (ankle sprain)",
      "Contact trauma in sports",
      "Falls and sudden deceleration injuries",
      "Overexertion and sudden overloading of unprepared tissue",
      "Prior incompletely healed injuries predisposing to re-injury",
      "Joint misalignment increasing ligament stress",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates both the injured structure and the surrounding joint mechanics. After the acute phase, joint adjustments restore normal alignment that was disrupted by the injury — preventing the development of chronic instability and compensation patterns. Regenerative therapies are applied to the injured ligament or muscle to accelerate tissue repair and restore full collagen organization. Progressive rehabilitation exercise prevents recurrence. A complete recovery plan that includes joint correction, tissue healing, and strength restoration prevents the all-too-common cycle of re-injury.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "restless-leg-syndrome",
    title: "Restless Leg Syndrome",
    image: "/images/conditions/restlesslegsyndrome.jpg",
    metaDescription:
      "Restless leg syndrome care in San Antonio TX. Pura Vida Chiropractic addresses the lumbar and neurological contributors to restless legs for improved sleep and comfort.",
    intro:
      "Restless leg syndrome — the irresistible urge to move the legs at rest — significantly disrupts sleep and quality of life. Chiropractic care addresses the lumbar nerve and vascular components contributing to RLS symptoms.",
    whatIs:
      "Restless legs syndrome (RLS) is a neurological sensorimotor disorder characterized by uncomfortable sensations in the legs (creeping, crawling, itching, or aching) and an irresistible urge to move them — worse at rest and in the evening. While iron deficiency, dopamine dysregulation, and genetic factors are primary contributors, lumbar nerve root irritation and vascular insufficiency in the lower extremities play a significant secondary role. Patients with lumbar subluxations affecting the L4–S3 nerve roots — which supply the legs — frequently develop or worsen RLS symptoms from the chronic low-grade nerve irritation. Correcting this spinal component can measurably improve RLS.",
    symptoms: [
      "Uncomfortable sensations in the legs at rest — especially evenings and nights",
      "Irresistible urge to move the legs for temporary relief",
      "Involuntary periodic limb movements during sleep",
      "Significant sleep disruption from nightly leg discomfort",
      "Daytime fatigue from poor sleep quality",
      "Worsening with extended sitting or lying",
    ],
    causes: [
      "Dopamine pathway dysregulation",
      "Iron deficiency reducing dopamine synthesis",
      "Lumbar nerve root irritation (L4–S3) sensitizing lower extremity nerves",
      "Poor lower extremity circulation and venous insufficiency",
      "Genetic predisposition",
      "Pregnancy (often resolves postpartum)",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the lumbar spine — particularly L4–S3 — for subluxations and disc-related nerve root irritation that may be contributing to lower extremity neurological hypersensitivity. SOT lumbar and sacral corrections reduce nerve root irritation, potentially decreasing the sensory threshold that triggers RLS symptoms. Lower extremity circulation is also assessed, and soft-tissue techniques to the lower legs improve venous and lymphatic return. While chiropractic care addresses the spinal component of RLS rather than the central dopaminergic pathways, many patients report meaningful improvement in symptom frequency and severity with consistent lumbar care.",
    additionalTreatments: ["laser"],
  },
  {
    slug: "poor-circulation",
    title: "Poor Circulation",
    image: "/images/conditions/poorcirculation.jpg",
    metaDescription:
      "Poor circulation care in San Antonio TX. Pura Vida Chiropractic uses SOT and SoftWave Therapy to improve peripheral vascular function and reduce cold hands and feet.",
    intro:
      "Poor circulation — cold hands and feet, numbness, and swelling — often has a spinal component that chiropractic care can directly improve. The sympathetic nervous system controls vascular tone, and subluxations that disrupt it impair circulation.",
    whatIs:
      "Poor circulation encompasses a range of conditions where blood flow to the extremities is insufficient — including Raynaud's phenomenon, peripheral artery disease, venous insufficiency, and generalized vasoconstriction from sympathetic overactivation. The sympathetic nervous system, which runs through the thoracic and lumbar spine, controls arterial smooth muscle tone and directly regulates peripheral blood flow. Thoracic subluxations — particularly in the upper thoracic spine (T1–T5) — increase sympathetic tone and produce chronic peripheral vasoconstriction. Restoring normal thoracic alignment reduces sympathetic output and improves blood flow to the extremities.",
    symptoms: [
      "Cold hands and feet, especially in cool environments",
      "Numbness or tingling in the fingers and toes at rest",
      "Skin color changes — pale, blue, or red extremities",
      "Leg swelling from venous pooling",
      "Slow wound healing in the extremities",
      "Fatigue and heaviness in the legs with activity",
    ],
    causes: [
      "Thoracic subluxation increasing sympathetic vasoconstriction",
      "Peripheral arterial disease from atherosclerosis",
      "Raynaud's phenomenon — exaggerated vasospastic response",
      "Diabetes damaging peripheral blood vessels",
      "Sedentary lifestyle reducing cardiovascular efficiency",
      "Smoking causing arterial constriction and damage",
    ],
    chiropracticTreatment:
      "Dr. Foss evaluates the thoracic spine for subluxations — particularly T1–T5 — that maintain elevated sympathetic tone and peripheral vasoconstriction. SOT thoracic adjustments at these levels normalize sympathetic output, allowing peripheral arteries to dilate and improving blood flow to the extremities. Ribcage mobility is also addressed, as rib restriction limits thoracic cage expansion and reduces cardiac output indirectly. SoftWave therapy applied to the extremities stimulates angiogenesis — the formation of new blood vessels — and improves microcirculation in the tissue.",
    additionalTreatments: ["softwave", "laser"],
  },
  {
    slug: "stress-anxiety",
    title: "Stress & Anxiety",
    image: "/images/conditions/stressanxietytension.jpg",
    metaDescription:
      "Stress and anxiety relief in San Antonio TX. Pura Vida Chiropractic uses SOT and craniosacral therapy to calm the nervous system, reduce physical stress symptoms, and support wellbeing.",
    intro:
      "Stress and anxiety have profound physical effects — chronic muscle tension, elevated cortisol, impaired sleep, and immune suppression. Chiropractic care at Pura Vida calms the nervous system at its structural source.",
    whatIs:
      "Stress and anxiety activate the sympathetic nervous system — triggering the fight-or-flight response, elevating cortisol, increasing muscle tension, accelerating heart rate, and disrupting sleep. While psychological stressors are the primary trigger, the nervous system's capacity to regulate stress is directly influenced by spinal health. Upper cervical subluxations compress the brainstem and impair vagal nerve tone — reducing the body's primary parasympathetic (calming) pathway. Craniosacral restrictions reduce the rhythmic motion that regulates the autonomic nervous system. Chiropractic correction of these structural contributors genuinely calms the nervous system and enhances the body's stress resilience.",
    symptoms: [
      "Chronic muscle tension in the neck, shoulders, and upper back",
      "Difficulty relaxing or racing thoughts",
      "Sleep disruption — difficulty falling or staying asleep",
      "Fatigue that does not resolve with rest",
      "Digestive upset, headaches, and tight jaw",
      "Heightened emotional reactivity and irritability",
    ],
    causes: [
      "Chronic life stressors activating the sympathetic nervous system",
      "Upper cervical subluxation impairing vagal nerve tone",
      "Craniosacral restriction dysregulating autonomic nervous system",
      "Disrupted sleep perpetuating cortisol elevation",
      "Nutritional deficiencies (magnesium, B-vitamins) reducing stress resilience",
      "Trauma history and nervous system sensitization",
    ],
    chiropracticTreatment:
      "Upper cervical and craniosacral care is profoundly calming for the nervous system. Dr. Foss uses gentle SOT protocols and craniosacral corrections at the occiput and sphenoid to enhance vagal nerve function — the primary parasympathetic pathway responsible for the rest-and-digest state. Patients frequently describe a deep sense of relaxation and ease following these adjustments. The physical tension held in the cervical and thoracic spine is released, reducing the musculoskeletal manifestations of chronic stress. Many patients report improved sleep, better emotional regulation, and reduced anxiety within their first few weeks of chiropractic care.",
    additionalTreatments: ["laser"],
  },

  // ─── 33 NEW CONDITIONS ───────────────────────────────────────────────────────

  {
    slug: "spinal-stenosis",
    title: "Spinal Stenosis",
    titleEs: "Estenosis Espinal",
    image: "/images/conditions/spinal-stenosis.jpg",
    metaDescription: "Spinal stenosis treatment in San Antonio TX. Dr. Foss uses SOT chiropractic to decompress the spinal canal, reduce nerve pressure, and restore mobility without surgery.",
    metaDescriptionEs: "Tratamiento de estenosis espinal en San Antonio TX. El Dr. Foss usa quiropráctica SOT para descomprimir el canal espinal y reducir la presión nerviosa sin cirugía.",
    intro: "Spinal stenosis — the narrowing of the spinal canal — compresses nerves and causes pain, numbness, and weakness that can severely limit walking and daily activity. SOT chiropractic care decompresses the spine and restores function.",
    whatIs: "Spinal stenosis is a narrowing of the spaces within the spine that puts pressure on the nerves traveling through it. It most commonly occurs in the lumbar spine (causing leg pain with walking) and cervical spine (causing arm weakness and balance problems). Causes include osteoarthritis, disc bulging, thickened ligaments, and bone spurs. The condition progresses gradually and worsens with prolonged standing or walking, typically relieving with sitting or forward bending.",
    symptoms: [
      "Pain, numbness, or cramping in the legs that worsens with walking (neurogenic claudication)",
      "Lower back pain that eases when sitting or bending forward",
      "Weakness in legs, feet, or arms",
      "Balance problems and difficulty walking long distances",
      "Neck pain with arm weakness or numbness in cervical stenosis",
      "Bladder or bowel dysfunction in severe cases",
    ],
    causes: [
      "Osteoarthritis and age-related degeneration of spinal joints",
      "Disc bulging and herniation narrowing the spinal canal",
      "Thickened ligamentum flavum reducing canal space",
      "Bone spurs (osteophytes) growing into the canal",
      "Spondylolisthesis — slippage of one vertebra over another",
      "Previous spinal injury or surgery creating scar tissue",
    ],
    chiropracticTreatment: "SOT chiropractic care for spinal stenosis focuses on reducing mechanical loading on the spinal canal through precise pelvic and spinal correction. Dr. Foss uses gentle category-based SOT protocols that decompress the lumbar segments without forced manipulation. By correcting sacropelvic mechanics, axial loading through the degenerative segments is reduced and neurological function improves. Many patients with moderate stenosis experience significant relief in walking distance and daily comfort. Advanced regenerative therapies further reduce inflammation within the stenotic levels.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "whiplash",
    title: "Whiplash",
    titleEs: "Latigazo Cervical",
    image: "/images/conditions/whiplash.jpg",
    metaDescription: "Whiplash treatment San Antonio TX. Pura Vida Chiropractic addresses cervical ligament injuries, muscle tears, and cranial distortions from auto accident whiplash with SOT protocols.",
    metaDescriptionEs: "Tratamiento de latigazo cervical en San Antonio TX. Quiropráctica SOT para lesiones de ligamentos cervicales, espasmos musculares y traumatismo craneal por accidente.",
    intro: "Whiplash from auto accidents or falls injures the cervical spine ligaments, muscles, and joint capsules. Symptoms often delay 24–72 hours after impact and can become chronic without proper treatment. SOT chiropractic addresses the full biomechanical picture.",
    whatIs: "Whiplash is a rapid acceleration-deceleration injury to the neck most commonly caused by rear-end auto collisions. The neck is forced into hyperextension then hyperflexion, straining or tearing the anterior and posterior ligaments, joint capsules, muscle attachments, and intervertebral discs. The impact also transmits forces through the base of the skull, causing cranial distortions that affect the craniosacral system. Delayed-onset symptoms are characteristic — full symptoms may not appear until 24–72 hours post-impact.",
    symptoms: [
      "Neck pain and stiffness worsening 24–72 hours after the accident",
      "Headaches originating at the base of the skull",
      "Shoulder, upper back, and arm pain or numbness",
      "Dizziness, visual disturbances, and ringing in the ears",
      "Jaw pain and difficulty chewing (TMJ involvement)",
      "Cognitive difficulties, difficulty concentrating, and sleep disruption",
    ],
    causes: [
      "Rear-end and side-impact auto collisions",
      "Sports collisions and contact injuries",
      "Falls that jerk the head and neck",
      "Ligament and joint capsule overstretching or tearing",
      "Cranial distortion from the force transmitted through the skull",
      "Disc injury and cervical joint inflammation",
    ],
    chiropracticTreatment: "Dr. Foss uses SOT whiplash protocols that address both the cervical spine and the craniosacral system — two areas critically injured in whiplash but often missed in standard care. Pelvic stabilization is established first (Category I/II), then gentle cervical corrections restore vertebral alignment and joint mobility. Cranial adjusting addresses the temporal, occipital, and sphenoid distortions that cause persistent headaches, tinnitus, and cognitive symptoms. Early intervention is critical — chronic whiplash is far more difficult to resolve than acute injury.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "pinched-nerve",
    title: "Pinched Nerve",
    titleEs: "Nervio Comprimido",
    image: "/images/conditions/pinched-nerve.jpg",
    metaDescription: "Pinched nerve treatment San Antonio TX. SOT chiropractic decompresses nerve roots from disc bulges, bone spurs, and spinal misalignment — relieving radiating pain without surgery.",
    metaDescriptionEs: "Tratamiento de nervio comprimido en San Antonio TX. La quiropráctica SOT descomprime las raíces nerviosas de hernias, espolones óseos y subluxaciones vertebrales.",
    intro: "A pinched nerve — nerve root compression — causes sharp radiating pain, numbness, tingling, or weakness along the nerve's pathway. SOT chiropractic removes the structural cause of compression to give lasting relief.",
    whatIs: "A pinched nerve occurs when surrounding tissues — bones, discs, tendons, or muscles — apply excessive pressure to a nerve root as it exits the spinal canal. In the lumbar spine, pinched nerves cause sciatica-type pain radiating into the leg. In the cervical spine, they cause arm pain and weakness. The compression irritates the nerve, creating the characteristic combination of sharp, burning, or electric pain with numbness and weakness in the distribution of that nerve.",
    symptoms: [
      "Sharp or burning pain radiating along the arm or leg",
      "Numbness and tingling in a specific pattern following nerve distribution",
      "Muscle weakness in the affected extremity",
      "Pain that worsens with certain neck or back movements",
      "Reflexes diminished at the affected spinal level",
      "Neck or lower back pain at the level of compression",
    ],
    causes: [
      "Herniated or bulging disc pressing on the nerve root",
      "Bone spurs narrowing the intervertebral foramen",
      "Spinal subluxation reducing foraminal space",
      "Muscle spasm compressing the nerve (piriformis for sciatica)",
      "Postural distortion increasing nerve root tension",
      "Degenerative disc disease collapsing disc height",
    ],
    chiropracticTreatment: "SOT chiropractic directly addresses the structural cause of nerve root compression. By correcting spinal misalignments and restoring proper disc mechanics, the intervertebral foramina are widened and nerve root pressure is relieved. Dr. Foss identifies the exact level and mechanism of compression and applies category-appropriate protocols to decompress the affected nerve. Flexion-distraction and specific pelvic blocking restore disc height and reduce annular pressure. Most patients experience significant reduction in radiating pain within the first few visits.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "degenerative-disc-disease",
    title: "Degenerative Disc Disease",
    titleEs: "Enfermedad Degenerativa del Disco",
    image: "/images/conditions/discproblems.jpg",
    metaDescription: "Degenerative disc disease treatment San Antonio TX. SOT chiropractic slows degeneration, restores disc mechanics, and reduces pain without drugs or surgery at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento de enfermedad degenerativa del disco en San Antonio TX. Quiropráctica SOT para reducir el dolor y restaurar la mecánica discal sin cirugía.",
    intro: "Degenerative disc disease is a leading cause of chronic low back and neck pain. While degeneration cannot be entirely reversed, SOT chiropractic reduces pain significantly by correcting the mechanical stress accelerating the process.",
    whatIs: "Degenerative disc disease describes the breakdown of intervertebral discs over time — discs lose hydration, height, and shock-absorbing capacity, causing vertebrae to compress closer together. This narrows nerve exit channels, stresses spinal joints, and can trigger disc bulging or herniation. The condition is most common at L4-L5, L5-S1 in the lumbar spine and C5-C6, C6-C7 in the cervical spine. Abnormal spinal biomechanics accelerate degeneration at specific levels — correcting this is the key to slowing progression.",
    symptoms: [
      "Chronic low back or neck pain that fluctuates in intensity",
      "Pain worse after prolonged sitting or standing and easing with movement",
      "Stiffness and reduced range of motion in the morning",
      "Radiating pain into the buttocks, legs, or arms if nerve roots are compressed",
      "Increased pain with bending, lifting, or twisting",
      "Grinding or crunching sensation with spinal movement",
    ],
    causes: [
      "Age-related disc dehydration and reduced proteoglycan content",
      "Repetitive mechanical stress from spinal misalignment",
      "Previous disc injuries accelerating degeneration",
      "Genetic predisposition to faster disc breakdown",
      "Sedentary lifestyle reducing disc nutrition through movement",
      "Smoking impairing disc blood supply and nutrition",
    ],
    chiropracticTreatment: "The key insight in DDD management is that abnormal spinal mechanics accelerate degeneration. By correcting pelvic and spinal alignment with SOT protocols, loading through the degenerative discs is normalized — reducing both current pain and the rate of future breakdown. Dr. Foss uses gentle flexion-distraction and pelvic blocking to restore disc hydration, reduce nerve root irritation, and decompress the affected segments. Patients with long-standing DDD often make remarkable improvements in daily pain levels and activity tolerance.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "bulging-disc",
    title: "Bulging Disc",
    titleEs: "Disco Abultado",
    image: "/images/conditions/bulging-disc.jpg",
    metaDescription: "Bulging disc treatment San Antonio TX. SOT chiropractic reduces disc pressure, relieves nerve compression, and often avoids the need for epidural injections or surgery.",
    metaDescriptionEs: "Tratamiento de disco abultado en San Antonio TX. La quiropráctica SOT reduce la presión discal y alivia la compresión nerviosa sin necesidad de cirugía.",
    intro: "A bulging disc occurs when the disc's outer ring weakens and bulges outward, irritating nearby nerves. SOT chiropractic effectively reduces disc pressure and nerve irritation for lasting relief.",
    whatIs: "A bulging disc differs from a herniated disc in that the outer fibrous ring (annulus fibrosus) is intact but distorted outward, putting pressure on adjacent nerves. This is typically caused by accumulated mechanical stress, prolonged poor posture, and repetitive loading. Bulging discs most commonly occur at L4-L5 and L5-S1 in the lumbar spine. When the bulge presses on nerve roots, it causes radiculopathy — radiating pain, numbness, and weakness in the leg (or arm if cervical).",
    symptoms: [
      "Lower back or neck pain worsening with prolonged sitting",
      "Radiating pain, numbness, or tingling into the arm or leg",
      "Pain that worsens with bending forward or sneezing",
      "Muscle weakness in the affected limb",
      "Relief when walking or lying down in certain positions",
      "Stiffness and reduced spinal range of motion",
    ],
    causes: [
      "Prolonged poor posture and sedentary loading on the disc",
      "Repetitive bending, twisting, and heavy lifting",
      "Spinal subluxation creating uneven disc loading",
      "Age-related disc weakening of the annular fibers",
      "Excess body weight increasing lumbar disc pressure",
      "Sudden traumatic loading",
    ],
    chiropracticTreatment: "Flexion-distraction technique and SOT pelvic blocking are the primary tools Dr. Foss uses for bulging discs. These gentle protocols reduce intradiscal pressure, create a centripetal force that retracts the bulge away from the nerve, and restore normal disc mechanics. The pelvic foundation is stabilized first to eliminate the abnormal loading pattern causing the bulge to persist. Many patients avoid surgery or epidural injections through consistent chiropractic care. The sooner a bulging disc is treated, the better — before it progresses to a full herniation.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "chronic-pain",
    title: "Chronic Pain",
    titleEs: "Dolor Crónico",
    image: "/images/conditions/chronic-pain.jpg",
    metaDescription: "Chronic pain management San Antonio TX. Pura Vida Chiropractic addresses the structural causes of persistent pain — not just symptoms — using SOT, laser, and SoftWave therapy.",
    metaDescriptionEs: "Manejo del dolor crónico en San Antonio TX. Quiropráctica SOT, terapia láser y SoftWave para tratar las causas estructurales del dolor persistente, no solo los síntomas.",
    intro: "Chronic pain persisting beyond three months often has structural roots in the spine and nervous system. SOT chiropractic combined with regenerative therapies offers a drug-free path to lasting relief by addressing the source.",
    whatIs: "Chronic pain is defined as pain persisting for more than three months beyond normal tissue healing time. In many cases, the pain originates from structural problems — spinal subluxation, nerve irritation, disc pathology, or unresolved soft tissue injury — that conventional medicine addresses only with pain medication. The nervous system also undergoes central sensitization in chronic pain states, amplifying pain signals. Correcting the structural source of pain while calming the sensitized nervous system is the most effective approach.",
    symptoms: [
      "Persistent pain for more than 3 months — in the back, neck, head, or extremities",
      "Pain that is no longer clearly tied to a specific tissue injury",
      "Sleep disruption due to constant discomfort",
      "Fatigue and reduced physical activity tolerance",
      "Emotional consequences — depression, anxiety, and frustration",
      "Sensitivity to touch, pressure, or movement in affected areas",
    ],
    causes: [
      "Unresolved spinal subluxation maintaining nerve irritation",
      "Scar tissue and adhesions from inadequately healed soft tissue injuries",
      "Central sensitization — the nervous system amplifying pain signals",
      "Chronic inflammation from disc pathology or joint degeneration",
      "Postural distortion creating ongoing mechanical stress",
      "Inadequate treatment of the original injury",
    ],
    chiropracticTreatment: "Dr. Foss takes a systematic approach to chronic pain — identifying the structural root cause rather than managing symptoms. SOT spinal correction removes the persistent nerve irritation driving central sensitization. Craniosacral therapy calms the autonomic nervous system's pain-amplifying state. SoftWave and Class IV laser therapy promote tissue repair, reduce neurogenic inflammation, and accelerate the resolution of long-standing soft tissue pathology. Patients with chronic pain often see gradual, progressive improvement over a course of care — with many able to significantly reduce or eliminate pain medication.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "muscle-spasms",
    title: "Muscle Spasms",
    titleEs: "Espasmos Musculares",
    image: "/images/conditions/muscle-spasms.jpg",
    metaDescription: "Muscle spasm relief San Antonio TX. SOT chiropractic identifies and corrects the spinal cause of muscle guarding, giving lasting relief beyond temporary muscle relaxants.",
    metaDescriptionEs: "Alivio de espasmos musculares en San Antonio TX. Quiropráctica SOT para corregir la causa espinal del espasmo muscular, con resultados duraderos sin relajantes musculares.",
    intro: "Muscle spasms are the spine's protective response to instability or injury. Treating only the muscle misses the cause — SOT chiropractic addresses the spinal source driving the spasm.",
    whatIs: "Muscle spasms are involuntary sustained contractions of a muscle or group of muscles. In the spine, they are almost always a secondary phenomenon — the nervous system is contracting the muscles as a protective splint around an unstable or injured spinal segment. Simply relaxing the muscles without correcting the underlying spinal problem provides only temporary relief, as the spasms return when the muscles are reloaded. Understanding muscle spasms as a symptom of spinal instability is the key to lasting treatment.",
    symptoms: [
      "Sudden, intense muscle tightness or locking in the back or neck",
      "Visible muscle hardness or ropiness in the affected area",
      "Restricted movement — difficulty standing straight or turning the head",
      "Pain that worsens with movement and eases with rest",
      "Associated headaches when spasms occur in the cervical spine",
      "Pain radiating into the shoulder, buttock, or hip",
    ],
    causes: [
      "Spinal subluxation triggering protective muscle guarding",
      "Acute strain from sudden movement or heavy lifting",
      "Disc injury causing reflex muscle splinting",
      "Dehydration and electrolyte imbalances",
      "Postural distortions causing chronic muscle overload",
      "Emotional tension held in the paraspinal muscles",
    ],
    chiropracticTreatment: "SOT chiropractic identifies the spinal segment causing the muscle guarding response and corrects it at the source. Dr. Foss uses pelvic blocking and gentle spinal adjustments to stabilize the unstable segment — eliminating the neurological signal driving the spasm. Once the segment is stabilized, the muscle releases naturally. Trigger point therapy may be combined to break up chronic spasm patterns. Patients who have been living with recurring muscle spasms often discover that consistent chiropractic care eliminates the cycle entirely.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "postpartum-recovery",
    title: "Postpartum Recovery",
    titleEs: "Recuperación Posparto",
    image: "/images/conditions/postpartum-recovery.jpg",
    metaDescription: "Postpartum chiropractic care San Antonio TX. Dr. Foss helps new mothers restore pelvic alignment, relieve back and neck pain, and recover faster after delivery at Pura Vida Chiropractic.",
    metaDescriptionEs: "Quiropráctica posparto en San Antonio TX. El Dr. Foss ayuda a las madres a restaurar la alineación pélvica y aliviar el dolor de espalda y cuello después del parto.",
    intro: "Pregnancy and delivery place enormous mechanical demands on the pelvis and spine. Postpartum chiropractic care helps new mothers restore alignment, relieve pain from feeding postures, and recover faster.",
    whatIs: "Postpartum recovery involves the pelvis, sacrum, and lumbar spine returning from the hypermobile state induced by relaxin hormones during pregnancy. Delivery — whether vaginal or cesarean — creates specific sacropelvic distortions that may not self-correct. New mothers face additional mechanical stress from nursing postures, carrying, and caring for a newborn. Untreated pelvic misalignment after delivery commonly causes low back pain, hip pain, pubic symphysis discomfort, and even contributes to postpartum mood difficulties through its effects on the nervous system.",
    symptoms: [
      "Low back and pelvic pain persisting after delivery",
      "Pubic symphysis pain making walking difficult",
      "Hip and sacroiliac joint discomfort",
      "Neck and upper back pain from nursing and carrying the baby",
      "Wrist pain from repetitive lifting and feeding positions",
      "Fatigue and difficulty returning to normal activity",
    ],
    causes: [
      "Sacropelvic distortion from the labor and delivery process",
      "Relaxin-induced ligament laxity persisting for months postpartum",
      "Prolonged nursing postures stressing the cervical and thoracic spine",
      "C-section recovery — scar tissue and restricted spinal mobility",
      "Carrying and rocking the baby in asymmetric positions",
      "Sleep deprivation compounding physical tension",
    ],
    chiropracticTreatment: "SOT category work specifically addresses the sacropelvic mechanics that are most disrupted during delivery. Dr. Foss uses gentle pelvic blocking protocols that are safe for postpartum recovery and appropriate regardless of delivery method. The cervical and thoracic spine are addressed for the nursing and carrying postures. Craniosacral therapy supports hormonal regulation and nervous system recovery during this demanding transition. Most new mothers experience significant improvement in pain levels and energy within a few visits.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "round-ligament-pain",
    title: "Round Ligament Pain",
    titleEs: "Dolor del Ligamento Redondo",
    image: "/images/conditions/round-ligament-pain.jpg",
    metaDescription: "Round ligament pain treatment San Antonio TX. Webster-certified chiropractor Dr. Foss relieves sharp pregnancy groin pain caused by round ligament tension with gentle pelvic care.",
    metaDescriptionEs: "Tratamiento del dolor del ligamento redondo en San Antonio TX. El Dr. Foss alivia el dolor agudo de la ingle durante el embarazo con cuidado pélvico gentil.",
    intro: "Sharp, stabbing groin pain during pregnancy from round ligament tension is one of the most common discomforts of the second trimester. Webster Technique chiropractic care provides gentle and effective relief.",
    whatIs: "Round ligament pain occurs when the two round ligaments supporting the uterus are strained by the growing uterus pulling them downward and outward. It causes a sharp, stabbing, or cramping pain in the lower abdomen or groin, typically worse with sudden movements, coughing, sneezing, or rolling over in bed. Pelvic misalignment increases asymmetric tension on the round ligaments, worsening symptoms. The Webster Technique specifically addresses this by correcting sacral subluxation and releasing ligamentous tension.",
    symptoms: [
      "Sharp, stabbing pain in the lower abdomen or groin, typically one-sided",
      "Pain triggered by sudden movement, sneezing, or coughing",
      "Cramping sensation in the pelvis that comes on quickly",
      "Discomfort when standing up from sitting or rolling over in bed",
      "Pain that resolves quickly with rest and stillness",
      "Worse in the second trimester as the uterus grows rapidly",
    ],
    causes: [
      "Growing uterus pulling the round ligaments beyond their resting length",
      "Sacral and pelvic misalignment increasing asymmetric ligament tension",
      "Sudden movements stretching the ligaments rapidly",
      "Previous pelvic injuries or postural imbalances",
      "Relaxin-induced ligament laxity reducing ligament resilience",
    ],
    chiropracticTreatment: "The Webster Technique is specifically designed to address sacropelvic distortion during pregnancy. By correcting the sacral subluxation and releasing tension in the uterine ligaments through gentle soft tissue work, Dr. Foss reduces the mechanical pull on the round ligaments. Most pregnant patients experience dramatic relief after just one or two visits. Regular Webster Technique care throughout the second and third trimesters prevents recurrence and supports optimal fetal positioning as a bonus benefit.",
    additionalTreatments: [],
  },

  {
    slug: "post-concussion-syndrome",
    title: "Post-Concussion Syndrome",
    titleEs: "Síndrome Post-Conmoción",
    image: "/images/conditions/post-concussion-syndrome.jpg",
    metaDescription: "Post-concussion syndrome treatment San Antonio TX. SOT cranial adjusting addresses the cranial distortions, dural tension, and nerve irritation persisting after concussion.",
    metaDescriptionEs: "Tratamiento del síndrome post-conmoción en San Antonio TX. Ajuste craneal SOT para las distorsiones craneales, tensión dural e irritación nerviosa persistentes tras la conmoción.",
    intro: "Post-concussion syndrome occurs when symptoms persist weeks or months beyond the initial head injury. SOT cranial adjusting addresses the cranial bone distortions and dural tension that standard concussion protocols miss.",
    whatIs: "Post-concussion syndrome is characterized by persistent symptoms following a concussion — typically persisting beyond the expected 1–4 week recovery window. The syndrome involves a combination of physical, cognitive, and emotional symptoms driven by ongoing neurological dysfunction. Cranial bone distortions from the impact disrupt normal cerebrospinal fluid circulation and craniosacral rhythm. Tension in the dural membranes covering the brain and spinal cord perpetuates symptoms long after the initial injury. Chiropractic cranial adjusting is uniquely positioned to address these structural contributors.",
    symptoms: [
      "Persistent headaches, especially at the base of the skull",
      "Cognitive difficulties — brain fog, memory problems, difficulty concentrating",
      "Dizziness and balance problems",
      "Sensitivity to light and sound",
      "Sleep disturbances and fatigue",
      "Mood changes — irritability, anxiety, or depression",
    ],
    causes: [
      "Cranial bone distortion from the impact disrupting CSF flow",
      "Dural membrane tension perpetuating neurological symptoms",
      "Cervical spine injury (often concurrent) contributing to headaches",
      "Brainstem irritation from occiput/atlas misalignment",
      "Autonomic nervous system dysregulation following head injury",
      "Inflammatory mediators persisting in the neural tissue",
    ],
    chiropracticTreatment: "SOT cranial adjusting is Dr. Foss's primary approach to post-concussion syndrome. Light-force cranial contacts restore normal cranial bone motion, re-establish cerebrospinal fluid circulation, and release dural tension that is keeping the nervous system in a state of irritation. Upper cervical corrections — particularly at the occiput-atlas junction — address the concurrent cervical injury almost universally present in concussion. Patients with post-concussion syndrome often experience significant improvement in cognitive clarity, headache frequency, and sleep quality through consistent cranial care.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bppv",
    title: "BPPV (Positional Vertigo)",
    titleEs: "VPPB (Vértigo Posicional Benigno)",
    image: "/images/conditions/bppv.jpg",
    metaDescription: "BPPV benign paroxysmal positional vertigo treatment San Antonio TX. The Epley maneuver and SOT cranial adjusting resolve spinning vertigo triggered by head position changes.",
    metaDescriptionEs: "Tratamiento del VPPB en San Antonio TX. La maniobra de Epley y el ajuste craneal SOT resuelven el vértigo posicional benigno causado por los canales semicirculares.",
    intro: "BPPV — the most common cause of vertigo — occurs when calcium crystals in the inner ear migrate into the semicircular canals. The Epley repositioning maneuver combined with SOT cranial adjusting resolves most cases rapidly.",
    whatIs: "Benign paroxysmal positional vertigo (BPPV) is caused by otoconia — calcium carbonate crystals from the utricle — dislodging and entering the semicircular canals of the inner ear. When the head moves in certain directions, these crystals displace fluid in the canal, sending false movement signals to the brain and triggering intense spinning vertigo. Episodes are typically brief (less than one minute) and triggered by specific position changes such as rolling over in bed, looking up, or bending forward. The posterior semicircular canal is most commonly affected.",
    symptoms: [
      "Brief spinning or whirling sensation triggered by head position changes",
      "Nausea with severe episodes",
      "Vertical and torsional nystagmus (eye movements) during vertigo",
      "Unsteadiness and imbalance between episodes",
      "Symptoms when rolling over in bed, looking up, or bending forward",
      "Episodes typically lasting less than one minute",
    ],
    causes: [
      "Otoconia dislodging from the utricle into the semicircular canals",
      "Head trauma or concussion displacing crystals",
      "Age-related degeneration of the otolithic membrane",
      "Viral inner ear infection",
      "Prolonged bedrest altering crystal position",
      "Cranial bone distortions affecting inner ear mechanics",
    ],
    chiropracticTreatment: "The Epley canalith repositioning procedure is highly effective for BPPV and is performed in-office by Dr. Foss. The head is guided through a specific sequence of positions to move the displaced crystals out of the affected canal and back to the utricle. SOT cranial adjusting addresses concurrent cranial bone distortions — particularly temporal bone dysfunction — that can perpetuate or worsen BPPV. Most patients experience complete resolution within one to three visits. Cervical adjusting reduces associated neck tension that compounds dizziness.",
    additionalTreatments: [],
  },

  {
    slug: "immune-system-support",
    title: "Immune System Support",
    titleEs: "Apoyo al Sistema Inmunológico",
    image: "/images/conditions/immune-support.jpg",
    metaDescription: "Chiropractic immune system support San Antonio TX. Research shows spinal subluxation reduces immune function — SOT corrections remove nerve interference and strengthen natural immune response.",
    metaDescriptionEs: "Apoyo al sistema inmunológico con quiropráctica en San Antonio TX. Las subluxaciones vertebrales reducen la función inmune — la corrección SOT elimina la interferencia nerviosa.",
    intro: "The nervous system directly regulates immune function. Spinal subluxation creates nerve interference that suppresses immune response — chiropractic correction removes this interference and allows the immune system to function optimally.",
    whatIs: "The nervous and immune systems are deeply interconnected — the hypothalamus, brainstem, and spinal cord continuously regulate immune cell activity through the autonomic nervous system. Research has demonstrated that upper cervical adjustments increase natural killer cell count, that subluxation reduces immunoglobulin levels, and that chiropractic patients have measurably stronger immune function. The spleen, thymus, and lymph nodes are innervated by the sympathetic and parasympathetic nervous systems — when spinal alignment is optimal, this innervation is intact and immune function is maximized.",
    symptoms: [
      "Frequent illness — recurring colds, ear infections, or respiratory infections",
      "Slow recovery from illness",
      "Chronic low-grade inflammation",
      "Allergies and autoimmune reactivity",
      "Fatigue related to chronic immune activation",
      "Children with frequent ear infections or respiratory illnesses",
    ],
    causes: [
      "Spinal subluxation creating nerve interference to immune-regulating centers",
      "Chronic stress activating cortisol and suppressing immune function",
      "Poor sleep disrupting immune cell replenishment",
      "Nutritional deficiencies",
      "Sedentary lifestyle reducing lymphatic circulation",
      "Toxin burden overwhelming detoxification and immune capacity",
    ],
    chiropracticTreatment: "SOT spinal correction — particularly upper cervical and upper thoracic adjustments — removes the nerve interference that suppresses immune function. Dr. Foss uses gentle CMRT (Chiropractic Manipulative Reflex Technique) organ protocols that directly support the spleen, thymus, and lymphatic pathways through specific spinal and soft tissue contacts. Many patients report getting sick less frequently, recovering faster, and experiencing reduced allergy symptoms following regular chiropractic care. Children with chronic ear infections are especially responsive to chiropractic immune support.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bed-wetting-enuresis",
    title: "Bed-Wetting (Enuresis)",
    titleEs: "Enuresis (Mojar la Cama)",
    image: "/images/conditions/bedwetting.jpg",
    metaDescription: "Bed-wetting enuresis pediatric chiropractor San Antonio TX. Research supports chiropractic care for childhood nocturnal enuresis through sacral nerve normalization at Pura Vida Chiropractic.",
    metaDescriptionEs: "Quiropráctica pediátrica para enuresis nocturna en San Antonio TX. Ajuste sacro para normalizar la inervación vesical en niños con enuresis nocturna.",
    intro: "Pediatric bed-wetting (nocturnal enuresis) is often related to sacral nerve dysfunction impairing bladder control. Research supports chiropractic sacral correction as an effective, drug-free approach for many children.",
    whatIs: "Nocturnal enuresis affects approximately 15% of 5-year-olds and 5% of 10-year-olds. While often attributed purely to developmental delays, a significant proportion of cases involve sacral nerve dysfunction that impairs the nervous system's ability to inhibit bladder contraction during sleep. The sacral nerves (S2-S4) directly innervate the detrusor muscle and urethral sphincter — sacral subluxation creates interference in this pathway. Multiple published case reports and studies demonstrate resolution of enuresis following chiropractic sacral correction.",
    symptoms: [
      "Involuntary urination during sleep past age 5–6",
      "Normal daytime bladder control with nighttime loss",
      "No identifiable urinary tract infection or anatomical abnormality",
      "Family history of late toilet training",
      "Associated daytime urgency or frequency in some cases",
      "Sleep disturbances or deep sleeping patterns",
    ],
    causes: [
      "Sacral subluxation interfering with the S2-S4 bladder innervation",
      "Developmental immaturity of the bladder-brain communication pathway",
      "Deep sleep preventing arousal from bladder signals",
      "Genetic factors — 75% of children have an affected parent",
      "Constipation mechanically affecting bladder capacity",
      "Psychological or emotional stress triggers",
    ],
    chiropracticTreatment: "Dr. Foss uses gentle sacral evaluation and correction protocols specifically designed for pediatric patients. SOT Category II pelvic work normalizes sacral mechanics and restores proper innervation through the S2-S4 nerve roots to the bladder. This is a gentle, non-invasive approach that many parents try before considering medication. Published case series report resolution or significant improvement in enuresis in a substantial proportion of children receiving chiropractic sacral care. Treatment is comfortable and children typically enjoy their visits.",
    additionalTreatments: [],
  },

  {
    slug: "constipation",
    title: "Constipation",
    titleEs: "Estreñimiento",
    image: "/images/conditions/constipation.jpg",
    metaDescription: "Constipation relief through chiropractic care San Antonio TX. CMRT and SOT spinal correction normalize gut motility through the lumbar and sacral nerve pathways at Pura Vida Chiropractic.",
    metaDescriptionEs: "Alivio del estreñimiento con quiropráctica en San Antonio TX. CMRT y corrección espinal SOT para normalizar la motilidad intestinal a través de las vías nerviosas lumbares.",
    intro: "The nerves supplying the colon originate in the lumbar and sacral spine. Subluxations at these levels reduce gut motility and contribute to chronic constipation — CMRT organ protocols specifically address this connection.",
    whatIs: "Constipation is characterized by fewer than three bowel movements per week, hard stools, straining, or a sensation of incomplete evacuation. While dietary factors are primary, chronic constipation often has a neurological component. The descending colon and rectum are innervated by the lumbar (L1-L3) and sacral (S2-S4) parasympathetic nerves that drive peristalsis. Subluxation at these levels reduces the neural drive to the colon, slowing motility. CMRT (Chiropractic Manipulative Reflex Technique) organ protocols specifically address the reflex relationship between the lumbar spine and the colon.",
    symptoms: [
      "Fewer than 3 bowel movements per week",
      "Hard, dry, or lumpy stools requiring straining",
      "Bloating and abdominal discomfort",
      "Sensation of incomplete evacuation",
      "Reliance on laxatives for regular bowel function",
      "Hemorrhoids or rectal pain from chronic straining",
    ],
    causes: [
      "Lumbar subluxation reducing parasympathetic innervation to the colon",
      "Inadequate dietary fiber and water intake",
      "Sedentary lifestyle reducing gut motility",
      "Medications — opioids, antidepressants, iron supplements",
      "Hypothyroidism slowing overall metabolic rate",
      "Pelvic floor dysfunction — particularly in women postpartum",
    ],
    chiropracticTreatment: "CMRT protocols include specific soft tissue contacts along the large intestine's organ reflex zones combined with lumbar and sacral spinal corrections. Dr. Foss addresses the L1-L3 and S2-S4 segments that directly innervate the colon's motility mechanisms. Many patients experience a bowel movement within hours of their first CMRT treatment. Ongoing chiropractic care normalizes the gut-spine connection, reducing dependence on laxatives and establishing a natural rhythm. Dietary and hydration guidance is integrated into the care plan.",
    additionalTreatments: [],
  },

  {
    slug: "bloating-gas",
    title: "Bloating & Gas",
    titleEs: "Hinchazón y Gases",
    image: "/images/conditions/bloating.jpg",
    metaDescription: "Bloating and gas relief through chiropractic care San Antonio TX. CMRT and thoracic spinal correction support digestive nerve function and reduce chronic bloating at Pura Vida Chiropractic.",
    metaDescriptionEs: "Alivio de hinchazón y gases con quiropráctica en San Antonio TX. CMRT y corrección espinal torácica para apoyar la función nerviosa digestiva.",
    intro: "Chronic bloating and gas are often linked to disrupted gut motility and digestive nerve function originating in the thoracic and lumbar spine. CMRT chiropractic organ protocols address this nervous system-gut connection.",
    whatIs: "Bloating — abdominal distension and a feeling of fullness — affects a large portion of the population and is commonly related to excess gas production, impaired gut motility, or altered gut microbiome. From a chiropractic perspective, the thoracic spine (T5-T9) provides sympathetic innervation to the stomach and small intestine, while lumbar segments supply the large intestine. Subluxations at these levels disrupt the coordination of gastric emptying and intestinal peristalsis — leading to fermentation, gas accumulation, and bloating.",
    symptoms: [
      "Visible abdominal distension after meals",
      "Excess gas — belching or flatulence",
      "Abdominal cramping and pressure",
      "Fullness even after small meals",
      "Alternating constipation and loose stools",
      "Associated heartburn or reflux",
    ],
    causes: [
      "Thoracic subluxation disrupting gastric and intestinal nerve supply",
      "Dysbiosis — overgrowth of gas-producing gut bacteria",
      "Food intolerances — dairy, gluten, FODMAPs",
      "Impaired stomach acid production reducing food breakdown",
      "Stress and anxiety activating the sympathetic nervous system",
      "Slow gastric emptying from vagus nerve dysfunction",
    ],
    chiropracticTreatment: "CMRT protocols for the stomach and intestines combined with mid-thoracic spinal adjustments normalize the sympathetic innervation controlling digestive rate and coordination. Dr. Foss addresses T5-T9 (stomach, small intestine) and L1-L3 (large intestine) segments to restore coordinated gut motility. Vagus nerve function — the primary parasympathetic drive for digestion — is enhanced through upper cervical and craniosacral corrections. Patients typically report improved digestive comfort within a few weeks of consistent care.",
    additionalTreatments: [],
  },

  {
    slug: "radiculopathy",
    title: "Radiculopathy",
    titleEs: "Radiculopatía",
    image: "/images/conditions/radiculopathy.jpg",
    metaDescription: "Radiculopathy treatment San Antonio TX. SOT chiropractic decompresses compressed nerve roots causing radiating pain, numbness, and weakness in the arm or leg without surgery.",
    metaDescriptionEs: "Tratamiento de radiculopatía en San Antonio TX. Quiropráctica SOT para descomprimir las raíces nerviosas que causan dolor irradiado, entumecimiento y debilidad.",
    intro: "Radiculopathy — nerve root compression causing radiating pain along the nerve's pathway — responds well to SOT chiropractic decompression. Most cases can be resolved without surgery or epidural injections.",
    whatIs: "Radiculopathy occurs when a spinal nerve root is compressed or irritated at its point of exit from the spinal canal. In the lumbar spine, this causes pain, numbness, and weakness radiating into the buttock, leg, and foot (lumbar radiculopathy / sciatica). In the cervical spine, it causes radiating arm pain, numbness, and weakness (cervical radiculopathy). Common causes include herniated discs, bone spurs, and foraminal stenosis. The distribution of symptoms accurately identifies the compressed nerve root level.",
    symptoms: [
      "Pain radiating in a specific pattern along the arm or leg",
      "Numbness or tingling following the nerve root's distribution",
      "Muscle weakness in the arm or leg corresponding to the affected level",
      "Pain worsening with spinal extension or lateral bending toward the painful side",
      "Diminished deep tendon reflexes at the affected level",
      "Pain alleviated by cervical or lumbar traction or specific positions",
    ],
    causes: [
      "Herniated disc nucleus compressing the nerve root",
      "Foraminal stenosis from arthritic bone spurs",
      "Subluxation reducing the intervertebral foramen diameter",
      "Disc height loss from degeneration",
      "Spondylolisthesis shifting the foramen",
      "Acute trauma causing disc herniation",
    ],
    chiropracticTreatment: "SOT chiropractic care for radiculopathy focuses on opening the intervertebral foramen through precise spinal correction and disc traction. Dr. Foss uses flexion-distraction technique to decompress the affected disc and nerve root, and category-appropriate pelvic work to normalize the overall spinal mechanics driving foraminal narrowing. For cervical radiculopathy, gentle upper cervical and mid-cervical corrections reduce nerve root pressure. Most patients experience significant reduction in radiating pain within the first few weeks of care, often avoiding surgery and epidural steroid injections.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "cluster-headaches",
    title: "Cluster Headaches",
    titleEs: "Cefaleas en Racimo",
    image: "/images/conditions/cluster-headaches.jpg",
    metaDescription: "Cluster headache treatment San Antonio TX. SOT and cranial adjusting address the trigeminal nerve irritation and sphenopalatine ganglion involvement driving cluster headache cycles.",
    metaDescriptionEs: "Tratamiento de cefaleas en racimo en San Antonio TX. Ajuste craneal SOT para la irritación del nervio trigémino y el ganglio esfenopalatino en los ciclos de cefalea.",
    intro: "Cluster headaches — among the most severe pain conditions known — involve trigeminal nerve and autonomic dysfunction. SOT cranial adjusting addresses the sphenopalatine ganglion involvement and cranial distortions that trigger cluster cycles.",
    whatIs: "Cluster headaches are unilateral severe headaches occurring in 'clusters' — multiple times per day for weeks or months, then disappearing for months or years. The pain is excruciating, centered around one eye, and accompanied by autonomic symptoms: tearing, nasal congestion, eyelid drooping, and facial flushing on the affected side. They are caused by trigeminal nerve activation and sphenopalatine ganglion dysfunction. Cranial distortions affecting the temporal, sphenoid, and ethmoid bones can irritate the trigeminal pathway and perpetuate cluster cycles.",
    symptoms: [
      "Severe, stabbing, or burning pain centered around or behind one eye",
      "Pain reaching maximum intensity within minutes",
      "Accompanying tearing, nasal congestion, or discharge on the affected side",
      "Eyelid drooping and pupil constriction on the affected side",
      "Restlessness and agitation during attacks",
      "Attacks occurring at predictable times, often during sleep",
    ],
    causes: [
      "Trigeminal nerve sensitization triggering the pain pathway",
      "Sphenopalatine ganglion hyperactivity driving autonomic symptoms",
      "Hypothalamic circadian rhythm dysfunction triggering attack cycles",
      "Sphenoid and temporal bone distortions irritating adjacent neural structures",
      "Alcohol, strong odors, and altitude triggering attacks during active periods",
      "Upper cervical subluxation aggravating trigeminal irritability",
    ],
    chiropracticTreatment: "SOT cranial adjusting offers a unique approach to cluster headaches by addressing the sphenoid bone — directly adjacent to the cavernous sinus and trigeminal ganglion — and the temporal bones surrounding the trigeminal pathway. Dr. Foss uses specific sphenobasilar and temporal contacts to normalize cranial mechanics and reduce the structural irritation amplifying trigeminal nerve sensitivity. Upper cervical correction addresses the C1-C2 contribution to trigeminal sensitization. While cluster headaches are challenging to treat, many patients report reduced attack frequency, shorter cluster periods, and less severe individual attacks.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "occipital-neuralgia",
    title: "Occipital Neuralgia",
    titleEs: "Neuralgia Occipital",
    image: "/images/conditions/occipital-neuralgia.jpg",
    metaDescription: "Occipital neuralgia treatment San Antonio TX. Upper cervical SOT correction and cranial adjusting release the compressed greater occipital nerve causing shooting pain in the back of the head.",
    metaDescriptionEs: "Tratamiento de neuralgia occipital en San Antonio TX. Corrección cervical alta SOT para liberar el nervio occipital mayor comprimido que causa dolor urente en la parte posterior de la cabeza.",
    intro: "Occipital neuralgia — shooting, electric pain in the back of the head — is caused by compression of the greater occipital nerve. Upper cervical chiropractic correction directly releases this compression.",
    whatIs: "Occipital neuralgia is caused by irritation or compression of the greater or lesser occipital nerves as they exit between the C1-C3 vertebrae and pierce the suboccipital muscles to supply the scalp. It causes distinctive shooting, electric, or stabbing pain from the base of the skull up over the scalp — sometimes radiating to the eye. Upper cervical subluxation, tight suboccipital muscles, and cranial distortions at the occiput-atlas junction are the primary structural causes. It is frequently misdiagnosed as migraine.",
    symptoms: [
      "Shooting, electric, or stabbing pain from the base of the skull to the top of the head",
      "Tenderness at the base of the skull when pressure is applied",
      "Pain radiating to the eye or forehead on the affected side",
      "Sensitivity of the scalp to light touch or hair brushing",
      "Neck stiffness and limited rotation",
      "Dull ache between attacks",
    ],
    causes: [
      "C1-C3 subluxation compressing the emerging occipital nerves",
      "Suboccipital muscle hypertonicity entrapping the nerve",
      "Cranial distortion at the occiput-atlas junction",
      "Prior head or neck trauma",
      "Forward head posture chronically loading the suboccipital muscles",
      "Whiplash injury inflaming the upper cervical joints",
    ],
    chiropracticTreatment: "Upper cervical SOT correction and cranial adjusting at the occiput-atlas junction is highly effective for occipital neuralgia. Dr. Foss identifies the specific C1-C3 subluxation pattern entrapping the occipital nerve and applies gentle, precise corrections to restore joint mobility and decompress the nerve. Suboccipital muscle release techniques relax the muscles mechanically compressing the nerve at its piercing point. Cranial adjusting normalizes the occiput-atlas relationship. Most patients experience significant or complete relief from the shooting pain within a few visits.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "shoulder-impingement",
    title: "Shoulder Impingement",
    titleEs: "Pinzamiento de Hombro",
    image: "/images/conditions/shoulder-impingement.jpg",
    metaDescription: "Shoulder impingement syndrome treatment San Antonio TX. SOT chiropractic combined with SoftWave therapy reduces subacromial inflammation and restores pain-free shoulder function.",
    metaDescriptionEs: "Tratamiento del síndrome de pinzamiento de hombro en San Antonio TX. Quiropráctica SOT y terapia SoftWave para reducir la inflamación subacromial y restaurar la función del hombro.",
    intro: "Shoulder impingement occurs when rotator cuff tendons are compressed under the acromion during arm elevation. Combined cervical-thoracic chiropractic care and regenerative therapy resolves most cases without surgery.",
    whatIs: "Shoulder impingement syndrome occurs when the rotator cuff tendons (particularly the supraspinatus) and the subacromial bursa are compressed between the humeral head and the acromion process during shoulder movements. This causes pain with overhead reaching, across-body movements, and lying on the shoulder. Thoracic hyperkyphosis and forward head posture reduce the subacromial space mechanically — addressing spinal posture is essential for long-term resolution. Cervical nerve irritation at C5-C6 also compounds shoulder pain.",
    symptoms: [
      "Pain with overhead reaching or lifting",
      "Shoulder pain when lying on the affected side at night",
      "Painful arc — pain occurring between 60-120 degrees of arm elevation",
      "Weakness with external shoulder rotation",
      "Gradual onset of pain worsening with repetitive overhead activities",
      "Stiffness and restricted range of motion",
    ],
    causes: [
      "Postural kyphosis and forward shoulder posture narrowing the subacromial space",
      "Rotator cuff muscle weakness allowing superior humeral head migration",
      "Cervical and upper thoracic subluxation contributing to shoulder dysfunction",
      "Repetitive overhead activities — painting, throwing, swimming",
      "Acromial anatomy — hooked or curved acromion",
      "Age-related rotator cuff degeneration",
    ],
    chiropracticTreatment: "Dr. Foss addresses shoulder impingement from both the local and cervicothoracic perspectives. Thoracic spine corrections open the chest and reduce kyphosis — directly increasing the subacromial space. Cervical corrections at C5-C6 address the nerve supply to the shoulder musculature. Shoulder joint mobilization restores glenohumeral mechanics and reduces adhesive capsulitis. SoftWave therapy penetrates the subacromial bursa and rotator cuff insertion, reducing chronic inflammation and stimulating tendon repair. Most patients experience significant improvement within 4-8 weeks of combined care.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "bursitis",
    title: "Bursitis",
    titleEs: "Bursitis",
    image: "/images/conditions/bursitis.jpg",
    metaDescription: "Bursitis treatment San Antonio TX. SoftWave therapy combined with SOT biomechanical correction reduces bursa inflammation and corrects the movement mechanics causing bursitis.",
    metaDescriptionEs: "Tratamiento de bursitis en San Antonio TX. Terapia SoftWave y corrección biomecánica SOT para reducir la inflamación de la bursa y corregir la mecánica de movimiento.",
    intro: "Bursitis — inflammation of the fluid-filled sacs cushioning joints — responds extremely well to SoftWave therapy combined with biomechanical chiropractic correction that addresses the mechanical cause of bursa overloading.",
    whatIs: "Bursae are small fluid-filled sacs that reduce friction between bones, tendons, and muscles around joints. Bursitis occurs when these sacs become inflamed from repetitive mechanical irritation, trauma, or infection. Common sites include the shoulder (subacromial), hip (trochanteric), knee (prepatellar, pes anserine), and elbow (olecranon). The critical insight is that most bursitis has a biomechanical cause — abnormal movement mechanics overload the bursa repeatedly. Without correcting the mechanics, bursitis recurs even after injection therapy.",
    symptoms: [
      "Localized joint pain worsening with movement and pressure",
      "Swelling and warmth over the affected bursa",
      "Limited range of motion in the affected joint",
      "Pain with lying on the affected side (hip or shoulder bursitis)",
      "Tenderness on direct palpation over the bursa",
      "Aching pain at rest in severe cases",
    ],
    causes: [
      "Repetitive movements overloading a specific bursa",
      "Direct trauma — falling onto a knee or elbow",
      "Biomechanical misalignment creating abnormal joint loading",
      "Leg length discrepancy stressing the hip bursa",
      "Forward shoulder posture loading the subacromial bursa",
      "Inflammatory conditions — rheumatoid arthritis, gout",
    ],
    chiropracticTreatment: "SoftWave therapy is exceptionally effective for bursitis — its unfocused shock waves penetrate the inflamed bursa, reduce inflammation, and stimulate tissue repair without the side effects of steroid injections. Dr. Foss simultaneously addresses the biomechanical cause: pelvic alignment for hip bursitis, thoracic posture for shoulder bursitis, and knee tracking mechanics for knee bursitis. This combined approach resolves the acute inflammation while preventing recurrence. Most patients achieve lasting resolution where repeated steroid injections had only provided temporary relief.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "tendonitis",
    title: "Tendonitis",
    titleEs: "Tendinitis",
    image: "/images/conditions/tendonitis.jpg",
    metaDescription: "Tendonitis treatment San Antonio TX. SoftWave and Class IV laser therapy stimulate tendon healing at the cellular level, while SOT chiropractic corrects the mechanics causing tendon overload.",
    metaDescriptionEs: "Tratamiento de tendinitis en San Antonio TX. Terapia SoftWave y láser Clase IV para estimular la curación del tendón, mientras la quiropráctica SOT corrige la mecánica.",
    intro: "Tendonitis — tendon inflammation or degeneration — occurs where abnormal mechanics repeatedly overload a tendon. SoftWave and laser therapy stimulate healing while chiropractic correction addresses the underlying cause.",
    whatIs: "Tendonitis (more accurately called tendinopathy in chronic cases) involves degeneration and inflammation of the tendon — often at its attachment to bone. Common sites include the Achilles tendon, patellar tendon, elbow tendons (tennis and golfer's elbow), biceps tendon, and rotator cuff. The underlying cause is almost always biomechanical — abnormal movement patterns overload the tendon beyond its adaptive capacity. Repetitive microtrauma accumulates, the tendon fails to fully repair between loading sessions, and chronic degeneration develops.",
    symptoms: [
      "Pain at the tendon attachment site that worsens with the relevant activity",
      "Morning stiffness and pain that eases with warm-up",
      "Point tenderness on direct palpation of the tendon",
      "Swelling or thickening of the tendon",
      "Pain with resisted contraction of the attached muscle",
      "Gradual onset worsening over weeks to months",
    ],
    causes: [
      "Biomechanical abnormalities creating repetitive tendon overload",
      "Sudden increase in training load without adequate recovery",
      "Improper footwear or equipment contributing to abnormal mechanics",
      "Spinal misalignment altering limb biomechanics",
      "Age-related reduction in tendon vascularity and elasticity",
      "Fluoroquinolone antibiotic use weakening collagen",
    ],
    chiropracticTreatment: "SoftWave therapy is the most evidence-supported treatment for tendinopathy — its shock waves stimulate neovascularization, activate stem cells, and dramatically accelerate collagen remodeling within the degenerative tendon. Class IV laser therapy complements this with photobiomodulation, reducing inflammation and accelerating cellular repair. Dr. Foss identifies and corrects the spinal and biomechanical misalignments driving abnormal tendon loading — without addressing mechanics, tendinopathy recurs regardless of how well the tendon heals.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "work-injuries",
    title: "Work Injuries",
    titleEs: "Lesiones Laborales",
    image: "/images/conditions/work-injuries.jpg",
    metaDescription: "Work injury chiropractic treatment San Antonio TX. Pura Vida Chiropractic treats occupational injuries — back strain, lifting injuries, repetitive stress — and works with workers' comp cases.",
    metaDescriptionEs: "Tratamiento quiropráctico de lesiones laborales en San Antonio TX. Lesiones de espalda, esfuerzo repetitivo y accidentes de trabajo — documentación para compensación laboral.",
    intro: "Work-related musculoskeletal injuries are among the most common causes of disability and lost work time. Chiropractic care effectively treats acute and chronic occupational injuries and supports return-to-work goals.",
    whatIs: "Work injuries include a wide spectrum of musculoskeletal conditions caused by occupational activities — acute back strain from lifting, cumulative trauma disorders from repetitive motions, falls, and vibration exposure. Construction workers, warehouse employees, healthcare workers, and office workers are all at high risk for different injury patterns. Chiropractic care is well-documented to reduce recovery time, reduce medication use, and lower the likelihood of injury progressing to chronic disability. Dr. Foss is experienced with workers' compensation documentation requirements.",
    symptoms: [
      "Acute or chronic low back pain from lifting, bending, or awkward postures",
      "Neck and shoulder pain from desk work or overhead activities",
      "Repetitive strain injuries in the wrists, elbows, or shoulders",
      "Joint and soft tissue injuries from falls or collisions",
      "Vibration-related spinal degeneration (heavy equipment operators)",
      "Pain and stiffness limiting safe work performance",
    ],
    causes: [
      "Heavy lifting with improper biomechanics",
      "Prolonged static postures — sitting, standing, or overhead work",
      "Repetitive motions exceeding tissue adaptation capacity",
      "Sudden trauma — slips, trips, and falls",
      "Vibration exposure from heavy equipment",
      "Ergonomic deficiencies in the workstation setup",
    ],
    chiropracticTreatment: "Dr. Foss provides comprehensive musculoskeletal evaluation, treatment, and documentation for occupational injuries. SOT protocols restore spinal alignment and nerve function impaired by the injury mechanism. SoftWave therapy accelerates soft tissue healing and reduces post-traumatic inflammation. Functional rehabilitation guidance supports safe return to full work capacity. Dr. Foss has experience working with workers' compensation cases and can provide the clinical documentation required for insurance and legal purposes.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "repetitive-strain-injury",
    title: "Repetitive Strain Injury",
    titleEs: "Lesión por Esfuerzo Repetitivo",
    image: "/images/conditions/tendonitis.jpg",
    metaDescription: "Repetitive strain injury treatment San Antonio TX. SOT chiropractic and SoftWave therapy address the biomechanical and neurological causes of RSI affecting wrists, elbows, and shoulders.",
    metaDescriptionEs: "Tratamiento de lesión por esfuerzo repetitivo en San Antonio TX. Quiropráctica SOT y SoftWave para las causas biomecánicas y neurológicas de las LER en muñecas, codos y hombros.",
    intro: "Repetitive strain injuries from keyboard use, assembly line work, or sports accumulate in tendons, muscles, and nerves. A combined approach addressing both the local injury and the spinal biomechanics driving it achieves lasting results.",
    whatIs: "Repetitive strain injury (RSI) is an umbrella term for musculoskeletal conditions caused by repetitive movements, sustained postures, or awkward positions. Common RSIs include carpal tunnel syndrome, cubital tunnel syndrome, medial and lateral epicondylitis, rotator cuff tendinopathy, and cervicobrachial syndrome. The repetitive loading exceeds tissue repair capacity, leading to cumulative microtrauma. Cervical spine subluxation frequently contributes by compressing the nerve roots supplying the affected extremity — increasing nerve susceptibility to compression at distal sites (double crush syndrome).",
    symptoms: [
      "Gradual onset pain, aching, or burning in the affected area",
      "Stiffness and reduced strength in the extremity",
      "Numbness or tingling in the fingers or hands",
      "Symptoms worsening during or after activity and improving with rest",
      "Swelling and tenderness in tendons or muscle attachment points",
      "Progressive limitation of work capacity",
    ],
    causes: [
      "Repetitive movements exceeding tissue recovery capacity",
      "Cervical subluxation creating proximal nerve compression (double crush)",
      "Poorly designed workstation ergonomics",
      "Sustained awkward postures during prolonged tasks",
      "Inadequate recovery time between repetitive loading cycles",
      "Pre-existing tissue vulnerability from prior injury",
    ],
    chiropracticTreatment: "The 'double crush' concept — where cervical nerve compression proximal to a peripheral entrapment amplifies the peripheral injury — explains why treating the wrist or elbow alone often fails. Dr. Foss evaluates and treats the full kinetic chain: cervical spine, thoracic outlet, elbow, and wrist. Cervical corrections reduce the proximal neural burden. SoftWave therapy accelerates soft tissue healing at the local injury site. Ergonomic modification guidance and activity pacing prevent recurrence. This comprehensive approach resolves RSI where isolated local treatment has failed.",
    additionalTreatments: ["softwave", "laser"],
  },

  {
    slug: "text-neck",
    title: "Text Neck",
    titleEs: "Cuello de Texto",
    image: "/images/conditions/text-neck.jpg",
    metaDescription: "Text neck treatment San Antonio TX. SOT chiropractic corrects the forward head posture, cervical curve reversal, and nerve compression caused by prolonged phone and screen use.",
    metaDescriptionEs: "Tratamiento del cuello de texto en San Antonio TX. Quiropráctica SOT para corregir la postura de cabeza adelantada, la inversión de la curva cervical y la compresión nerviosa por pantallas.",
    intro: "Text neck — the posture damage from chronic phone and screen use — creates significant cervical spine degeneration over time. Early chiropractic correction can reverse the damage before it becomes permanent.",
    whatIs: "Text neck describes the cervical spine damage caused by prolonged forward head posture from smartphone, tablet, and computer use. Every inch the head moves forward from its balanced position adds approximately 10 pounds of effective weight on the cervical spine. At 45-degree forward tilt (typical phone use angle), the effective load becomes 49 pounds. This chronic overloading accelerates disc degeneration, reverses the natural cervical lordosis, stretches the posterior ligaments and muscles, and compresses anterior disc structures and nerve roots.",
    symptoms: [
      "Chronic neck pain and stiffness, especially at the base of the skull",
      "Upper back and shoulder muscle tension and pain",
      "Forward head posture visible in side-view photographs",
      "Headaches starting at the back of the neck",
      "Arm numbness or tingling from cervical nerve compression",
      "Fatigue in neck and shoulder muscles with prolonged screen use",
    ],
    causes: [
      "Prolonged smartphone, tablet, and computer use with forward head position",
      "Loss of cervical lordosis from sustained flexion posture",
      "Posterior cervical muscle fatigue and anterior ligament shortening",
      "Accelerated cervical disc degeneration from abnormal loading",
      "Cervical subluxation from sustained postural stress",
      "Occupational screen use extending forward head posture for hours daily",
    ],
    chiropracticTreatment: "SOT cervical correction restores the natural lordotic curve of the neck, reduces forward head posture, and decompresses the anterior cervical disc structures. Dr. Foss uses extension traction and specific cervical mobilization to reverse curve loss while correcting vertebral subluxations. Thoracic spine adjustments address the upper back rounding that accompanies forward head posture. Patients receive guidance on screen ergonomics, positioning, and specific exercises that reinforce cervical curve restoration between visits. Early treatment achieves more complete structural correction.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "cervicogenic-headaches",
    title: "Cervicogenic Headaches",
    titleEs: "Cefaleas Cervicogénicas",
    image: "/images/conditions/cervicogenic-headaches.jpg",
    metaDescription: "Cervicogenic headache treatment San Antonio TX. Upper cervical SOT correction addresses the C1-C3 dysfunction causing referred headache pain — the most directly treatable headache type.",
    metaDescriptionEs: "Tratamiento de cefaleas cervicogénicas en San Antonio TX. Corrección cervical alta SOT para la disfunción C1-C3 que causa cefaleas referidas desde el cuello.",
    intro: "Cervicogenic headaches originate in the upper cervical spine — C1, C2, or C3 dysfunction refers pain into the head. This is the most directly treatable headache type with upper cervical chiropractic correction.",
    whatIs: "Cervicogenic headaches are caused by dysfunction of the upper cervical joints (C1-C3) referring pain into the head through the trigeminocervical complex. The convergence of trigeminal and upper cervical nerve signals in the brainstem means that upper cervical joint irritation can produce pain anywhere in the head and face. These headaches are unilateral, originating at the back of the neck and radiating forward to the forehead, temple, or eye. They are frequently misdiagnosed as migraine or tension headache and treated with medications that address the symptom but not the structural cause.",
    symptoms: [
      "Unilateral head pain starting at the back of the neck and radiating forward",
      "Neck stiffness and restricted rotation on the painful side",
      "Pain triggered by sustained postures or neck movements",
      "Referred pain to the shoulder or arm on the same side",
      "Reduced cervical range of motion",
      "Tenderness on palpation of C1-C3 joints",
    ],
    causes: [
      "Subluxation of C1, C2, or C3 irritating the upper cervical nerve roots",
      "Zygapophyseal (facet) joint arthropathy at the upper cervical levels",
      "Myofascial trigger points in the suboccipital and cervical muscles",
      "Prior neck trauma — whiplash, concussion, or direct blow",
      "Forward head posture chronically loading the upper cervical joints",
      "Occupation requiring sustained cervical flexion or rotation",
    ],
    chiropracticTreatment: "Upper cervical correction is the most direct and effective treatment for cervicogenic headaches — addressing the structural cause rather than masking symptoms. Dr. Foss uses palpation and motion analysis to identify the specific restricted or subluxated upper cervical segments and applies targeted SOT corrections to restore normal joint mechanics. The trigeminocervical reflex is normalized, and referred head pain resolves. Most patients with confirmed cervicogenic headaches experience dramatic improvement within the first few visits. Sustained improvement requires correcting the postural drivers of recurrent upper cervical dysfunction.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "osteoporosis-support",
    title: "Osteoporosis Support",
    titleEs: "Apoyo para Osteoporosis",
    image: "/images/conditions/osteoporosis-support.jpg",
    metaDescription: "Osteoporosis support chiropractic San Antonio TX. Gentle SOT protocols improve spinal mechanics and balance in osteoporotic patients, reducing fracture risk and maintaining mobility.",
    metaDescriptionEs: "Quiropráctica para osteoporosis en San Antonio TX. Protocolos SOT suaves para mejorar la mecánica espinal y el equilibrio en pacientes con osteoporosis, reduciendo el riesgo de fractura.",
    intro: "Osteoporosis requires gentle, specialized chiropractic care — not high-velocity manipulation. Dr. Foss uses low-force SOT protocols that safely improve spinal mechanics, balance, and quality of life for osteoporotic patients.",
    whatIs: "Osteoporosis is a systemic metabolic condition characterized by reduced bone mineral density and structural bone deterioration, increasing fracture risk. The spine is particularly vulnerable — compression fractures of the vertebral bodies cause progressive kyphosis, height loss, and chronic pain. Standard chiropractic manipulation is contraindicated in severe osteoporosis, but gentle low-force SOT techniques are safe and effective. The goal is to improve spinal biomechanics, reduce pain, enhance balance to prevent falls, and support overall musculoskeletal health.",
    symptoms: [
      "Back pain from vertebral compression fractures",
      "Progressive loss of height over time",
      "Increasing thoracic kyphosis (dowager's hump)",
      "Stooped posture and difficulty standing upright",
      "Reduced balance and increased fall risk",
      "Fragility fractures from minor trauma",
    ],
    causes: [
      "Age-related decline in bone turnover favoring resorption",
      "Estrogen deficiency in postmenopausal women",
      "Sedentary lifestyle reducing bone-loading mechanical stimulus",
      "Nutritional deficiencies — calcium, vitamin D, magnesium",
      "Long-term steroid medication use",
      "Smoking and excessive alcohol consumption",
    ],
    chiropracticTreatment: "Dr. Foss has specific training in low-force techniques appropriate for patients with osteoporosis. SOT pelvic blocking requires no high-velocity thrust and safely corrects pelvic and lumbar mechanics. Gentle mobilization addresses thoracic hyperkyphosis, improves rib cage mechanics, and reduces the respiratory limitations caused by progressive kyphosis. Balance training and fall prevention guidance are integrated into care. Patients with osteoporosis can safely receive chiropractic care and benefit from improved spinal function, reduced pain, and greater confidence in their movement.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "costochondritis",
    title: "Costochondritis",
    titleEs: "Costocondritis",
    image: "/images/conditions/costochondritis.jpg",
    metaDescription: "Costochondritis treatment San Antonio TX. Thoracic and rib chiropractic adjustments with SOT protocols resolve the joint and cartilage inflammation causing chest wall pain at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento de costocondritis en San Antonio TX. Ajustes torácicos y costales SOT para resolver la inflamación del cartílago costal que causa dolor en la pared torácica.",
    intro: "Costochondritis — inflammation where the ribs meet the sternum — causes chest pain that can mimic cardiac symptoms. Thoracic spine and rib chiropractic correction resolves most cases that anti-inflammatories cannot.",
    whatIs: "Costochondritis is inflammation of the costal cartilage — the cartilage connecting the ribs to the sternum. It causes localized chest wall tenderness and pain that can mimic cardiac chest pain, causing significant patient anxiety. The pain is typically reproducible on palpation and worsens with deep breathing, coughing, or specific trunk movements. Thoracic spine subluxation and rib head dysfunction are frequent structural contributors — abnormal rib mechanics stress the costochondral junction. Posterior rib head corrections relieve tension on the anterior cartilage.",
    symptoms: [
      "Sharp or aching chest wall pain, usually on the left side",
      "Pain worsening with deep breathing, coughing, or sneezing",
      "Tenderness on direct palpation of the costochondral junctions",
      "Pain aggravated by leaning forward or certain arm movements",
      "Multiple affected ribs in some cases",
      "Pain misinterpreted as a cardiac event due to chest location",
    ],
    causes: [
      "Thoracic subluxation creating abnormal rib mechanics",
      "Rib head dysfunction stressing the anterior cartilage",
      "Upper respiratory infection with repeated coughing",
      "Trauma to the chest wall",
      "Repetitive upper extremity movements stressing rib attachments",
      "Inflammatory conditions — fibromyalgia, rheumatoid arthritis",
    ],
    chiropracticTreatment: "Posterior rib head mobilization and thoracic spine adjustments are the primary chiropractic approaches for costochondritis. By restoring normal rib motion and thoracic mechanics, the abnormal stress on the anterior costochondral junction is relieved. Dr. Foss addresses the specific thoracic segments driving the rib dysfunction — typically T2-T7 — and uses gentle rib mobilization techniques that restore the posterior costotransverse joint motion. Most patients experience significant improvement in chest wall pain within a few visits, with resolution of the pain on deep breathing a reliable early indicator of improvement.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "balance-disorders",
    title: "Balance Disorders",
    titleEs: "Trastornos del Equilibrio",
    image: "/images/conditions/balance-disorders.jpg",
    metaDescription: "Balance disorder treatment San Antonio TX. SOT cranial adjusting and upper cervical correction address the proprioceptive and vestibular dysfunction driving chronic balance problems.",
    metaDescriptionEs: "Tratamiento de trastornos del equilibrio en San Antonio TX. Ajuste craneal SOT y corrección cervical alta para la disfunción propioceptiva y vestibular que causa problemas de equilibrio.",
    intro: "Balance disorders have multiple contributing causes — vestibular dysfunction, upper cervical proprioceptive impairment, and cranial distortions. SOT cranial adjusting addresses the neurological causes of chronic balance problems.",
    whatIs: "Balance depends on the integration of three sensory systems: the vestibular system (inner ear), visual input, and proprioception (spinal joint position sense). Disorders in any of these systems — or their central nervous system integration — disrupt balance. Upper cervical proprioception is a major input to the balance control centers; C1-C2 subluxation significantly impairs the proprioceptive signal quality. Cranial distortions affecting the temporal bones disturb inner ear mechanics. SOT chiropractic addresses both of these structural contributors simultaneously.",
    symptoms: [
      "Unsteadiness and difficulty walking on uneven surfaces",
      "Tendency to fall or stumble, especially in the dark",
      "Dizziness or lightheadedness with position changes",
      "Difficulty standing on one foot or with eyes closed",
      "Spatial disorientation",
      "Falls in elderly patients with significant injury risk",
    ],
    causes: [
      "Upper cervical subluxation impairing proprioceptive input to balance centers",
      "Temporal bone distortion affecting inner ear mechanics",
      "Vestibular nerve dysfunction from prior infection or trauma",
      "Cerebellar or brainstem dysfunction in more complex cases",
      "Medication side effects — particularly antihypertensives and sedatives",
      "Peripheral neuropathy reducing foot proprioception",
    ],
    chiropracticTreatment: "Upper cervical SOT correction dramatically improves proprioceptive input quality from the cervical spine — normalizing the balance signal that C1-C2 provides to the cerebellum. Temporal bone cranial adjusting restores normal inner ear mechanics and vestibular function. Many patients with long-standing balance disorders experience rapid improvement in steadiness and confidence following their first few adjustments. For patients with fall risk, Dr. Foss integrates proprioceptive training exercises to reinforce the neurological improvements from chiropractic care.",
    additionalTreatments: [],
  },

  {
    slug: "numbness-tingling",
    title: "Numbness & Tingling",
    titleEs: "Entumecimiento y Hormigueo",
    image: "/images/conditions/numbness-tingling.jpg",
    metaDescription: "Numbness and tingling treatment San Antonio TX. SOT chiropractic identifies the spinal or peripheral nerve source of numbness and tingling and corrects the structural cause for lasting relief.",
    metaDescriptionEs: "Tratamiento de entumecimiento y hormigueo en San Antonio TX. Quiropráctica SOT para identificar y corregir la causa espinal o nerviosa periférica del entumecimiento.",
    intro: "Numbness and tingling in the hands, arms, feet, or legs almost always indicate nerve compression somewhere along the pathway from the spine to the extremity. SOT chiropractic identifies and corrects the source.",
    whatIs: "Numbness and tingling (paresthesia) are symptoms of nerve compression or irritation at any point along the neural pathway — from the spinal cord and nerve roots to peripheral nerves in the extremities. The pattern of symptoms accurately identifies the location: dermatomal distribution points to specific nerve roots, while the median nerve distribution (index finger, thumb) suggests carpal tunnel. Spinal nerve root compression from disc pathology, subluxation, or foraminal stenosis is the most common cause. Cervical subluxation causing arm tingling and lumbar subluxation causing leg numbness are frequently and quickly resolved with chiropractic correction.",
    symptoms: [
      "Numbness, pins-and-needles, or tingling in the hands, arms, feet, or legs",
      "Symptoms following a specific nerve distribution pattern",
      "Weakness accompanying numbness in the affected area",
      "Symptoms worsening with specific postures or movements",
      "Numbness that wakes the patient at night",
      "Associated neck or back pain at the compression site",
    ],
    causes: [
      "Cervical disc herniation compressing upper extremity nerve roots",
      "Lumbar disc herniation compressing lower extremity nerve roots",
      "Thoracic outlet syndrome compressing the brachial plexus",
      "Carpal tunnel syndrome compressing the median nerve at the wrist",
      "Peripheral neuropathy from diabetes or nutritional deficiency",
      "Double crush — proximal and distal nerve compression occurring simultaneously",
    ],
    chiropracticTreatment: "Dr. Foss performs a systematic neurological examination to identify the level and mechanism of nerve compression causing the numbness and tingling. SOT spinal corrections at the identified levels decompress the nerve roots and restore normal neural function. The double-crush syndrome — where cervical compression amplifies peripheral entrapment — is evaluated and addressed comprehensively. Most patients experience improvement in tingling within the first few visits as nerve root pressure is relieved. Complete resolution of numbness may take longer as nerve healing is gradual.",
    additionalTreatments: ["laser"],
  },

  {
    slug: "bruxism",
    title: "Bruxism (Jaw Clenching)",
    titleEs: "Bruxismo (Apretar los Dientes)",
    image: "/images/conditions/bruxism.jpg",
    metaDescription: "Bruxism treatment San Antonio TX. SOT cranial adjusting addresses the craniosacral imbalances and upper cervical tension driving jaw clenching and teeth grinding at Pura Vida Chiropractic.",
    metaDescriptionEs: "Tratamiento del bruxismo en San Antonio TX. Ajuste craneal SOT para las tensiones craneosakrales y cervicales que impulsan el apretamiento de dientes y la mandíbula.",
    intro: "Bruxism — teeth grinding and jaw clenching — is commonly driven by craniosacral imbalance and upper cervical tension, not just stress. SOT cranial adjusting provides a structural solution that dentistry alone cannot.",
    whatIs: "Bruxism is involuntary teeth grinding or jaw clenching occurring most commonly during sleep. While stress and anxiety are well-known triggers, the structural component is frequently overlooked: temporal bone distortion and sphenobasilar dysfunction create abnormal neuromuscular tension in the temporomandibular joint and masseter muscles. Upper cervical subluxation contributes through reflex hypertension of the jaw muscles. Craniosacral imbalance — particularly occipital and sphenoid restrictions — can drive chronic bruxism independently of psychological state.",
    symptoms: [
      "Tooth wear, chipping, or flattening visible on dental examination",
      "Morning jaw pain, stiffness, and soreness",
      "Tension headaches starting at the temples",
      "Facial pain and fatigue of jaw muscles",
      "Sleep disturbance from teeth grinding",
      "TMJ clicking, popping, or locking",
    ],
    causes: [
      "Craniosacral imbalance — temporal, sphenoid, and occipital distortions",
      "Upper cervical subluxation creating reflex jaw muscle tension",
      "Psychological stress and anxiety",
      "Malocclusion — dental bite problems",
      "Sleep disorders, particularly obstructive sleep apnea",
      "Certain medications — SSRIs, stimulants",
    ],
    chiropracticTreatment: "Cranial adjusting specifically targeting the temporal bones, sphenoid, and occiput normalizes the craniosacral rhythm and reduces the structural drivers of jaw muscle hypertonicity. Dr. Foss works in close coordination with the TMJ and the temporal bones — which house the temporomandibular joint — to restore balanced mechanics. Upper cervical corrections eliminate the reflex tension contributing to nighttime clenching. Many patients report that after a few cranial adjustments, they wake without jaw pain and their dentist notices reduced tooth wear. This structural approach complements dental night guards without making teeth grinding permanently dependent on an appliance.",
    additionalTreatments: [],
  },

  {
    slug: "allergies",
    title: "Allergies",
    titleEs: "Alergias",
    image: "/images/conditions/allergies.jpg",
    metaDescription: "Allergy relief through chiropractic care San Antonio TX. SOT spinal correction and CMRT protocols support nervous system regulation of immune function and reduce allergic reactivity.",
    metaDescriptionEs: "Alivio de alergias con quiropráctica en San Antonio TX. Corrección espinal SOT y CMRT para apoyar la regulación nerviosa de la función inmune y reducir la reactividad alérgica.",
    intro: "Allergic reactivity is regulated by the nervous system. Spinal subluxation disrupts this regulation — many patients experience significant reduction in allergy symptoms following chiropractic spinal correction.",
    whatIs: "Allergies represent an inappropriate immune response to harmless environmental substances. The nervous system — through hypothalamic-pituitary-adrenal axis regulation and direct autonomic innervation of immune tissues — plays a central role in calibrating immune reactivity. Spinal subluxation, particularly in the upper cervical and upper thoracic regions, disrupts this nervous system regulation and may amplify immune overreactivity. CMRT protocols address the adrenal glands and liver — key organs in histamine metabolism and stress response — through their spinal reflex pathways.",
    symptoms: [
      "Seasonal or perennial sneezing, nasal congestion, and runny nose",
      "Itchy, watery eyes",
      "Skin rashes, hives, or eczema",
      "Respiratory symptoms — wheezing or tightening in the chest",
      "Food sensitivities and digestive reactivity",
      "Fatigue related to chronic immune activation",
    ],
    causes: [
      "Immune system dysregulation amplified by nervous system dysfunction",
      "Upper cervical subluxation impairing sympathetic-parasympathetic balance",
      "Adrenal insufficiency reducing anti-inflammatory cortisol capacity",
      "Gut dysbiosis disrupting immune tolerance",
      "Chronic stress maintaining inflammatory state",
      "Environmental toxin burden overwhelming detoxification",
    ],
    chiropracticTreatment: "Upper cervical and upper thoracic corrections normalize sympathetic-parasympathetic balance and restore proper immune regulation through the spinal cord. CMRT organ protocols support the adrenal glands, liver, and spleen — the key organs involved in histamine regulation and immune calibration. Patients often report reduced severity of allergic symptoms, improved tolerance of triggering substances, and reduced reliance on antihistamines following consistent chiropractic care. While chiropractic is not a cure for allergies, it supports the nervous system's ability to regulate immune reactivity at an appropriate level.",
    additionalTreatments: [],
  },

  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression",
    titleEs: "Ansiedad y Depresión",
    image: "/images/conditions/anxiety-depression.jpg",
    metaDescription: "Anxiety and depression support through chiropractic care San Antonio TX. SOT and craniosacral therapy calm the nervous system and support vagal tone — the primary driver of emotional regulation.",
    metaDescriptionEs: "Apoyo para ansiedad y depresión con quiropráctica en San Antonio TX. SOT y terapia craeneosacral para calmar el sistema nervioso y apoyar el tono vagal en la regulación emocional.",
    intro: "The nervous system's structural health profoundly influences mood and emotional regulation. Upper cervical correction and craniosacral therapy enhance vagal tone — the parasympathetic pathway most directly associated with emotional wellbeing.",
    whatIs: "Anxiety and depression are increasingly understood as conditions of nervous system dysregulation — specifically impaired vagal tone and autonomic balance. The vagus nerve is the primary parasympathetic pathway regulating the rest-and-digest state associated with emotional resilience. Upper cervical subluxation compresses the brainstem and vagal nuclei, directly impairing vagal tone. Craniosacral restrictions reduce the cerebrospinal fluid circulation that supports brain and spinal cord health. While chiropractic is not a replacement for psychological care, its structural contribution to nervous system regulation is real and often clinically significant.",
    symptoms: [
      "Persistent anxiety, worry, or fear responses disproportionate to circumstances",
      "Low mood, loss of motivation, or hopelessness",
      "Sleep disruption and fatigue",
      "Physical tension — tight neck, shoulders, and jaw",
      "Digestive symptoms related to autonomic nervous system imbalance",
      "Reduced resilience and difficulty recovering from stress",
    ],
    causes: [
      "Upper cervical subluxation impairing brainstem and vagal nerve function",
      "Craniosacral restrictions reducing CSF circulation and brain health",
      "Chronic stress maintaining sympathetic nervous system dominance",
      "Inflammatory cytokines from spinal joint irritation affecting mood",
      "Disrupted sleep from physical pain perpetuating mood disorders",
      "Trauma history sensitizing the nervous system",
    ],
    chiropracticTreatment: "Upper cervical correction and craniosacral therapy are the chiropractic approaches with the greatest relevance to anxiety and depression. Dr. Foss uses SOT and cranial protocols that specifically enhance vagal nerve function — the primary parasympathetic pathway associated with the relaxation response, emotional regulation, and social connection. Patients frequently report improved sleep, reduced baseline anxiety, and a greater sense of calm and resilience following upper cervical and cranial care. Chiropractic is offered as a structural complement to psychological support, not a replacement — together they address both the neurological and psychological dimensions of these conditions.",
    additionalTreatments: ["laser"],
  },
];
