import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineVideo from "@/components/InlineVideo";
import RelatedContent from "@/components/RelatedContent";
import { getConditionsTreatedByService, getRelatedPostsByKeywords } from "@/lib/relatedContent";
import styles from "./service.module.css";

const BASE_URL = "https://puravidasanantonio.com";

// Service slugs that should display the pregnancy intro video inline.
// Covers EN variants ("pregnancy-chiropractor"), Spanish slugs ("quiropractico-embarazo"),
// and SEO duplicates ("pregnancy-chiropractic", "pediatric-prenatal").
const PREGNANCY_VIDEO_SLUGS = new Set([
  "pregnancy-chiropractor",
  "prenatal-chiropractor",
  "pregnancy-chiropractic",
  "pediatric-prenatal",
  "quiropractico-embarazo",
  "quiropractico-prenatal",
  "infants-chiropractic",
  "quiropractico-infantes",
  "infant-chiropractic",
]);

// Slugs that should display the English-language Chiropractic intro guide video.
// English-only — only shown on /en services. Skip Spanish-slug variants.
const CHIRO_GUIDE_VIDEO_SLUGS_EN = new Set(["chiropractic-care"]);

interface ServiceData {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  image?: string;
  videos?: string[];
  body: string[];
  schema: object;
  /**
   * Optional FAQ block rendered after the body. When present, also emits a
   * FAQPage JSON-LD schema for rich-snippet eligibility. Use 4-8 questions,
   * answers ~50-150 words each. Question phrasing should match natural
   * search queries (e.g. "Is chiropractic safe for kids?" not "Pediatric
   * safety considerations").
   */
  faqs?: Array<{ q: string; a: string }>;
}

type ServiceMap = Record<string, ServiceData>;

const services: Record<"en" | "es", ServiceMap> = {
  en: {
    // ── Existing services ──────────────────────────────────────────────────
    "sot-chiropractic": {
      title: "SOT Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Expert SOT chiropractic care in San Antonio, TX. Dr. Dan Foss uses the Sacro-Occipital Technique to relieve pain and restore balance. Free consultation.",
      keywords: ["SOT chiropractor San Antonio", "Sacro-Occipital Technique San Antonio", "chiropractic San Antonio TX", "SOT chiropractic San Antonio TX", "best chiropractor San Antonio", "chiropractor near me San Antonio"],
      h1: "SOT Chiropractic in San Antonio",
      body: [
        "The **Sacro-Occipital Technique (SOT)** is a gentle, comprehensive chiropractic method that focuses on the foundational relationship between your sacrum and skull. At Pura Vida Chiropractic, Dr. Dan Foss, DC has extensive training in SOT and uses it to address [back pain](/en/blog/back-pain-chiropractor-san-antonio), [neck pain](/en/blog/neck-pain-chiropractor-san-antonio), [headaches](/en/blog/headaches-migraines-chiropractor-san-antonio), [sciatica](/en/blog/sciatica-chiropractor-san-antonio), and more.",
        "Unlike high-velocity adjustments, SOT uses specially designed wedge-shaped blocks and gravity to gently realign the pelvis and spine. The result is lasting relief without forceful manipulation — making it ideal for patients of all ages, including children, pregnant women, and seniors.",
        "Dr. Foss performs a thorough SOT Category Assessment to determine the exact pattern of imbalance in your body, then designs a personalized care plan to address the root cause of your pain.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Sacro-Occipital Technique (SOT)", "procedureType": "Chiropractic" },
      faqs: [
        { q: "What is Sacro-Occipital Technique (SOT)?", a: "SOT is a gentle, category-based chiropractic system developed by Dr. Major DeJarnette that addresses the spine, pelvis, and craniosacral rhythm as one integrated unit. It uses specially designed wedge-shaped pelvic blocks and gravity to gently realign the pelvis, dural-tension release for the spinal cord's protective membrane system, and cranial bone correction for headache and TMJ patterns. No high-velocity manipulation, no twisting, no popping." },
        { q: "How is SOT different from regular chiropractic?", a: "Standard chiropractic typically uses high-velocity, low-amplitude thrusts to restore joint motion. SOT instead identifies which of three biomechanical 'categories' a patient falls into and applies a category-specific correction protocol — pelvic blocks for sacral torsion (Category I), trapezius release for SI instability (Category II), or non-rotational adjusting for disc involvement (Category III). The result is comparable or better outcomes with dramatically less force." },
        { q: "Is SOT chiropractic safe for kids, pregnancy, and seniors?", a: "Yes — SOT is one of the safest chiropractic systems available specifically because it uses gentle, low-force techniques. Dr. Foss is Webster Technique certified (the SOT protocol for pregnancy), has extensive pediatric experience including newborns, and routinely treats elderly patients with osteoporosis and disc disease. The technique scales naturally to each patient's tolerance." },
        { q: "How many SOT visits does it typically take to feel results?", a: "Most patients notice meaningful improvement within 3–6 visits. A full corrective phase typically runs 10–20 visits over 6–12 weeks depending on the condition and how long it's been present. Maintenance visits monthly help most patients hold the corrected pattern long-term." },
      ],
    },
    "softwave-therapy": {
      title: "SoftWave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "SoftWave tissue regeneration therapy in San Antonio, TX. Stimulate your body's natural healing without surgery or injections. Book a free consultation.",
      keywords: ["SoftWave therapy San Antonio", "tissue regeneration San Antonio", "non-surgical pain relief San Antonio", "SoftWave therapy San Antonio TX", "shockwave therapy San Antonio", "regenerative therapy San Antonio"],
      h1: "SoftWave Therapy in San Antonio",
      body: [
        "**SoftWave Therapy** is a cutting-edge, FDA-cleared treatment that uses broadfocused shockwave technology to stimulate tissue regeneration at the cellular level. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC offers SoftWave as part of a comprehensive, non-surgical approach to healing chronic pain.",
        "SoftWave activates stem cells, increases blood flow, and reduces inflammation in damaged tissues. It is highly effective for conditions such as plantar fasciitis, tendinopathies, rotator cuff injuries, knee pain, [degenerative joint disease](/en/blog/degenerative-joint-disease-chiropractor-san-antonio), and chronic soft tissue injuries.",
        "Treatments are fast (15–20 minutes), non-invasive, and require no downtime. Many San Antonio patients experience significant improvement in as few as 3–6 sessions.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "SoftWave Tissue Regeneration Therapy", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "What is SoftWave therapy and how does it work?", a: "SoftWave is FDA-cleared broadfocused shockwave therapy that uses patented unfocused acoustic waves to stimulate tissue regeneration at the cellular level. The waves activate stem cells, increase blood flow, reduce inflammation, and trigger collagen repair in damaged tendons, ligaments, and joint capsules. Unlike traditional 'focused' shockwave, the broadfocused beam covers a larger treatment area with no skin contact required and minimal discomfort." },
        { q: "What conditions does SoftWave treat?", a: "SoftWave has strong published evidence for plantar fasciitis, Achilles tendinopathy, rotator cuff tendinopathy, tennis and golfer's elbow, trochanteric bursitis, patellar tendinopathy, knee osteoarthritis, and chronic soft-tissue injuries. It's also effective for degenerative disc disease, trigger finger, and post-surgical scar tissue. Most chronic musculoskeletal conditions where conservative care has plateaued respond well to SoftWave." },
        { q: "How many SoftWave sessions does it typically take?", a: "Most patients see substantial improvement within 3–6 sessions over 3–6 weeks. Chronic conditions (>6 months) may need 6–10 sessions for full regenerative effect. Treatments are 15–20 minutes, non-invasive, and require no downtime — patients return to normal activity immediately afterward." },
        { q: "Is SoftWave therapy painful?", a: "SoftWave is well-tolerated by most patients. The sensation is described as a tapping or pulsing pressure rather than pain. Intensity is adjusted to each patient's comfort level, and there is no need for anesthetic. Most patients are surprised at how comfortable the procedure is compared to focused shockwave or corticosteroid injection." },
      ],
    },
    "auto-injury": {
      title: "Auto Injury Chiropractor San Antonio | Pura Vida",
      description:
        "Injured in a car accident in San Antonio? Dr. Dan Foss specializes in whiplash and auto injury chiropractic care. Free consultation. We work with auto insurance.",
      keywords: ["auto injury chiropractor San Antonio", "car accident chiropractor San Antonio", "whiplash treatment San Antonio TX", "car accident chiropractor San Antonio TX", "auto accident injury San Antonio", "whiplash chiropractor San Antonio"],
      h1: "Auto Injury Chiropractic in San Antonio",
      body: [
        "Car accidents — even minor ones — can cause significant musculoskeletal injuries that may not become apparent until days or weeks after the collision. **Whiplash**, spinal misalignment, disc injuries, and soft tissue damage are among the most common results of auto accidents in San Antonio.",
        "At Pura Vida Chiropractic, Dr. Dan Foss, DC specializes in diagnosing and treating auto injury patients using the Sacro-Occipital Technique and complementary therapies. Early chiropractic care after an accident can dramatically improve recovery outcomes and prevent chronic pain.",
        "We work with auto insurance and personal injury cases. Don't wait — the sooner you seek care, the better your recovery. Contact us today for a free post-accident evaluation.",
      ],
      videos: ["https://www.youtube.com/embed/08Zh3oOtrag"],
      schema: { "@type": "MedicalProcedure", "name": "Auto Injury Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "When should I see a chiropractor after a car accident?", a: "As soon as you've been medically cleared for non-emergency injuries — ideally within the first 1–2 weeks. Early conservative care produces better long-term outcomes than waiting for symptoms to settle on their own, and prompt treatment is generally important for insurance and personal injury protection (PIP) documentation. Many post-accident symptoms emerge 24–72 hours after the collision, not immediately." },
        { q: "Do you work with auto insurance and PIP cases?", a: "Yes. We work with auto insurance, personal injury protection (PIP), MedPay, and uninsured/underinsured motorist coverage. Dr. Foss documents care thoroughly for insurance and attorney use, including narrative reports and objective findings. We coordinate with personal injury attorneys when one is involved in the case." },
        { q: "What injuries do you treat from car accidents?", a: "We treat whiplash, cervical and lumbar facet sprains, post-concussion symptoms, TMJ dysfunction from airbag impact, sacroiliac joint disruption, soft-tissue contusions, and the cumulative musculoskeletal trauma of motor vehicle collisions. SOT is particularly well-suited to whiplash because it avoids the rotational forces that aggravate freshly injured cervical structures." },
        { q: "How long does post-accident chiropractic care typically take?", a: "Most uncomplicated whiplash and post-accident cases resolve in 12–20 visits over 8–12 weeks. More severe collisions, prior cervical injury, or delayed presentation can extend treatment to 6 months. Insurance and PIP typically cover this corrective course of care when medically documented." },
      ],
    },
    "pediatric-chiropractor": {
      title: "Pediatric Chiropractor in San Antonio TX | Pura Vida",
      description: "Pediatric chiropractor in San Antonio, TX. Dr. Dan Foss provides gentle SOT chiropractic for newborns, infants, kids, and teens. 23+ years experience, bilingual, free first visit. (210) 685-1994.",
      keywords: ["pediatric chiropractor San Antonio", "pediatric chiropractor in San Antonio", "child chiropractor San Antonio", "kids chiropractic San Antonio TX", "pediatric chiropractor San Antonio TX", "infant chiropractor San Antonio", "children chiropractor near me San Antonio", "newborn chiropractic San Antonio", "baby chiropractor San Antonio"],
      h1: "Pediatric Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/j_RHsJ0_EzE"],
      body: [
        "Dr. Dan Foss is a **pediatric chiropractor in San Antonio** who has spent 23+ years specializing in gentle chiropractic care for kids — newborns, infants, toddlers, school-age children, and teenagers. At Pura Vida Chiropractic on NW Military Hwy, we use Sacro-Occipital Technique (SOT) and cranial protocols specifically adapted for developing spines, which means adjustments are dramatically gentler than what most adults associate with chiropractic care.",
        "Kids love to run, jump, climb, and fall — but the cumulative impact of childhood play, poor posture, backpack weight, and screen time can cause spinal misalignments that compound silently over years. The earlier those patterns are identified and corrected, the less work the body has to do later. Many parents bring kids to our **pediatric chiropractor in San Antonio** practice for a single specific concern (an ear infection, a sleep issue, a sports injury) and end up making it part of their family's regular wellness routine.",
        "<h2>Ages we treat — and what's appropriate for each</h2>",
        "**Newborns and infants (birth–12 months).** Birth itself is often the most physical event a baby experiences — and even uncomplicated vaginal deliveries can leave subtle cervical and cranial restrictions. We use light fingertip pressure (the same force you'd use to test a ripe tomato) to address torticollis, latching difficulties, colic patterns, and the cranial asymmetries sometimes seen as a flat spot developing on the back of the head. Many San Antonio pediatricians refer infants to us when standard interventions aren't moving the needle.",
        "**Toddlers and preschoolers (1–5 years).** This is the age of repeated falls, climbing accidents, and the early signs of postural patterns. Kids this age tolerate adjustments very well because we adapt completely to their attention span — short visits, lots of play language, parent involvement throughout. Common reasons parents bring this age group: chronic ear infections, sleep difficulties, bedwetting, recurring constipation, and developmental milestone concerns.",
        "**School-age children (6–12 years).** The single biggest issue we see in this age group is **device posture** — hours on phones, tablets, school iPads, and gaming consoles. By age 8, many kids already show signs of forward-head posture and rounded shoulders that used to be exclusively adult-onset patterns. Pediatric chiropractic care during this window prevents a lot of compounding damage. We also see growing pains, sports injuries, headaches that nobody can explain, and concentration issues that have a postural-neurological component.",
        "**Teenagers (13–18 years).** Adolescent scoliosis screening, sports performance, headache patterns, and the postural fallout from heavy backpacks plus device use. Teens often respond very quickly to chiropractic because their bodies are still highly adaptable. We're transparent with teens about what we're doing and why — most of them become engaged participants in their own care once they understand it.",
        "<h2>How a first visit works for kids</h2>",
        "First visits at our **pediatric chiropractor in San Antonio** office are free and last about 30 minutes. We talk with you about your child's history (birth, milestones, current concerns), do a gentle hands-on assessment, and explain what we found in plain language. If chiropractic care is appropriate, we explain the plan — typical visit count, technique we'd use, expected timeline. If it isn't, we say so and refer to whoever can help. Parents are present and involved throughout every visit; nothing happens behind closed doors.",
        "<h2>Why SOT pediatric care is gentler than what you might be picturing</h2>",
        "If you've ever had a chiropractic adjustment that involved a popping sound, you're picturing high-velocity adult work. Pediatric SOT is a completely different physical experience. Most of what we do with infants and young children is held pressure, gentle traction, and light cranial contacts — no popping, no sudden movements, no loud noises. Older kids may experience an occasional standard adjustment but always at a force calibrated to their size and tolerance. The whole approach is designed around what works for developing nervous systems, not adult ones.",
        "<h2>Conditions parents bring kids in for</h2>",
        "The most common reasons San Antonio parents bring children to a pediatric chiropractor: **chronic ear infections** (especially after several rounds of antibiotics haven't resolved them), **sleep difficulties** in infants and toddlers, **colic and feeding issues** in newborns, **bedwetting** past the typical age of resolution, **constipation** that hasn't responded to dietary changes, **headaches** in school-age kids and teens, **sports injuries** and recovery, **concentration and focus** concerns with a postural component, **scoliosis screening** for adolescents, and **postural correction** for the device-generation kids who are showing adult-pattern problems by age 10.",
        "<h2>What makes our approach different</h2>",
        "Two things. First: SOT certification. The Sacro-Occipital Research Society International (SORSI) is the only chiropractic organization with a pediatric-specific advanced certification track, and Dr. Foss is one of a small number of San Antonio chiropractors with Advanced SOT credentials. The technique was originally developed for fragile patients (early 1900s, working with patients other practitioners had given up on), so the pediatric application is a natural fit. Second: 23 years of pattern recognition specifically with San Antonio families — we know what works for our patient population, what local pediatricians are looking for in referrals, and how to explain things to multilingual households.",
      ],
      faqs: [
        {
          q: "Is chiropractic safe for kids and babies?",
          a: "Yes — pediatric chiropractic care is exceptionally safe when performed by a chiropractor trained in pediatric-specific techniques. The pressure used on an infant is roughly equivalent to what you'd use to test a ripe tomato. Adverse events are extremely rare; the most common 'side effect' is that babies often sleep deeply afterward. Dr. Foss has Advanced SOT certification through SORSI, which has a pediatric-specific training track.",
        },
        {
          q: "What's the youngest age you'll see for pediatric chiropractic in San Antonio?",
          a: "We see newborns within the first few days of life, particularly when there's a known birth-related concern (long labor, vacuum extraction, C-section, torticollis, latching issues). Earlier evaluation usually means faster resolution because the baby's nervous system hasn't yet adapted to the restriction.",
        },
        {
          q: "How is pediatric chiropractic different from adult chiropractic?",
          a: "Three big differences. First, the force is dramatically lower — most pediatric work is held pressure and light contact, not the popping adjustments adults associate with chiropractic. Second, the techniques used (SOT cranial work, low-force adjusting) are specifically designed for developing spines. Third, visit length and approach are adapted to the child's age — toddler visits look more like play than treatment.",
        },
        {
          q: "How many visits will my child need?",
          a: "Depends on what brought them in. An acute issue (recent fall, single ear infection) often resolves in 3-6 visits. Chronic patterns (recurrent infections, postural correction, sleep) typically need 8-12 visits over 6-10 weeks, then a maintenance schedule. We give you a clear plan and timeline at the first visit and check in along the way — if something's not working we change the approach or refer out.",
        },
        {
          q: "Do you take insurance for pediatric chiropractic?",
          a: "We are insurance friendly. Bring your insurance card and ID to the office and we'll verify how your insurance can contribute to your child's care.",
        },
        {
          q: "Where in San Antonio is your pediatric chiropractor office located?",
          a: "We're at 2318 NW Military Hwy Suite 103, San Antonio, TX 78231 — easy to reach from Stone Oak, Castle Hills, Alamo Heights, Olmos Park, Helotes, Shavano Park, Boerne, and central San Antonio. Free parking. Call (210) 685-1994 to schedule your child's free first visit.",
        },
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric Chiropractic Care", "procedureType": "Chiropractic" },
    },
    "prenatal-chiropractor": {
      title: "Prenatal Chiropractor San Antonio | Pura Vida Chiropractic",
      description: "Gentle prenatal chiropractic care in San Antonio, TX. Dr. Dan Foss uses the Webster Technique to balance the pelvis for an easier pregnancy and delivery.",
      keywords: ["prenatal chiropractor San Antonio", "Webster Technique San Antonio", "chiropractic pregnancy San Antonio TX", "pregnancy chiropractor San Antonio TX", "Webster technique San Antonio TX", "prenatal chiropractic near me San Antonio"],
      h1: "Prenatal Chiropractor in San Antonio",
      image: "/images/pregnancy-chiropractic.png",
      body: [
        "Dr. Foss treats pregnant women with gentle chiropractic adjustments to help with the back pain, pelvic discomfort, and postural changes that come with pregnancy. He uses the **Webster Technique** to balance the pelvis for an easier pregnancy and delivery, and to give the growing baby optimal room in the womb.",
        "According to the American Pregnancy Association, chiropractic is a very safe and effective treatment during pregnancy. The physiological and endocrine changes of pregnancy — protruding abdomen, increased lumbar curve, pelvic changes, and postural adaptations — can all result in misaligned spine or joints that respond well to chiropractic correction.",
        "**Pelvic balance and the Webster Technique:** When the pelvis is misaligned, it may reduce the space available for the developing baby — a condition called intrauterine constraint. A misaligned pelvis can also make it difficult for the baby to get into the best position for delivery, potentially leading to breech presentation or the need for interventions such as c-sections. The Webster Technique specifically addresses sacral and pelvic alignment to optimize the intrauterine environment and support natural, non-invasive birth.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Prenatal Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Is prenatal chiropractic safe?", a: "Yes — prenatal chiropractic is one of the most studied and lowest-risk areas of chiropractic practice. The American Pregnancy Association recognizes chiropractic as a safe and effective treatment during pregnancy. Dr. Foss is Webster Technique certified and uses a specialized pregnancy table with no abdominal pressure. Care is appropriate through all three trimesters." },
        { q: "What is the Webster Technique?", a: "Webster Technique is a specific chiropractic protocol developed for pregnancy that balances the sacrum, releases the round ligaments, and removes uterine ligament tension. By restoring symmetric pelvic biomechanics, it gives the baby optimal room to assume the ideal head-down position. The protocol is widely used to support breech presentation, pelvic pain, and overall pregnancy comfort." },
        { q: "When should I start prenatal chiropractic care?", a: "The earlier the better — first trimester care addresses early hormonal ligament changes before they create asymmetric pelvic patterns. That said, it is never too late: many patients begin in the third trimester for specific issues like sciatica, breech positioning, or birth preparation. Webster Technique is appropriate at any stage of pregnancy." },
        { q: "How often should I see a chiropractor during pregnancy?", a: "Most pregnancy patients see Dr. Foss every 2–3 weeks during the first and second trimesters, increasing to weekly in the final 6 weeks. Patients with specific concerns (breech presentation, severe low back pain, prior cesarean) often benefit from more frequent care." },
      ],
    },
    "pregnancy-chiropractor": {
      title: "Pregnancy Chiropractor San Antonio | Pura Vida Chiropractic",
      description: "Pregnancy chiropractic care in San Antonio, TX. Dr. Dan Foss helps moms-to-be stay comfortable through all 9 months with safe, gentle chiropractic care.",
      keywords: ["pregnancy chiropractor San Antonio", "chiropractic during pregnancy San Antonio", "Webster Technique San Antonio TX", "pregnancy chiropractor San Antonio TX", "prenatal chiropractor near me San Antonio", "back pain pregnancy San Antonio"],
      h1: "Pregnancy Chiropractor in San Antonio",
      image: "/images/pregnancy.webp",
      videos: ["https://www.youtube.com/embed/IeiU-Q-ljik", "https://www.youtube.com/embed/1fiRlACQjdk", "https://www.youtube.com/embed/PiY9pCDDZTI", "https://www.youtube.com/embed/MTkj64jX_bw", "https://www.youtube.com/embed/FtiuiyKG4nc", "https://www.youtube.com/embed/3qQzuBEmPE4"],
      body: [
        "Being pregnant puts a lot of strain on your spine and nervous system. As the months pass, the growing weight in your abdominal area shifts your center of gravity and forces your spine to adapt. By months 6–9, many mothers are managing a very unbalanced posture just to get around. **Chiropractic care during pregnancy** helps your body handle these changes gracefully — reducing pain, improving mobility, and preparing you for childbirth.",
        "Dr. Foss offers pregnancy chiropractic care that helps the baby assume her optimal birthing position. The **Webster Technique** is a specific chiropractic adjustment that reduces the risk of breech presentation. It should ideally be started as soon as you discover your baby is breech. Dr. Foss is trained through the International Chiropractic Pediatric Association (ICPA) in this technique.",
        "**It's never too late — or too early.** A visit in your first trimester gives your body the best preparation for the months ahead. But even in your final weeks, chiropractic can reduce pain, improve pelvic alignment, and prepare your body for labor. Many mothers who receive care throughout pregnancy report shorter, easier labors. And the benefits extend beyond your current pregnancy — the spinal health you build now will serve you well in any future pregnancies too.",
        "**Your unborn child feels what you feel.** A mother experiencing nerve misalignment and spinal stress passes that tension to her baby. When you address your own spinal health through chiropractic, you are doing a great favor to both of you.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pregnancy Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Is chiropractic care safe throughout pregnancy?", a: "Yes — chiropractic is safe through all three trimesters when delivered by a Webster Technique certified provider like Dr. Foss. The pregnancy table has a cutout for the abdomen, no force is applied to the belly, and adjustment techniques are adapted to the hormonal ligament laxity of pregnancy. The American Pregnancy Association recognizes chiropractic as safe and beneficial during pregnancy." },
        { q: "How can chiropractic help with pregnancy-related back pain?", a: "Pregnancy back pain comes from the combined effect of postural shift (lordosis), hormonal ligament laxity, weight gain, and pelvic instability. Webster Technique addresses all of these by restoring symmetric pelvic balance and reducing the asymmetric loading that drives most pregnancy lumbar and pelvic girdle pain. Most patients see substantial relief within 2–4 visits." },
        { q: "Can chiropractic help turn a breech baby?", a: "Webster Technique creates the pelvic and ligament conditions that allow the baby to self-rotate to head-down position. Chiropractors do not physically turn babies (that's external cephalic version, performed by an obstetrician). Most breech babies turn within 2–4 Webster visits when treatment begins between 28–34 weeks." },
        { q: "Will chiropractic care help me have an easier labor?", a: "Many mothers who receive Webster Technique care throughout pregnancy report shorter, less complicated labors. The mechanism is twofold: optimal fetal positioning (which lets labor progress mechanically as designed) and a balanced pelvis (which avoids the asymmetric stalls that often lead to interventions). Published literature supports both effects." },
      ],
    },
    "infants-chiropractic": {
      title: "Infant Chiropractor San Antonio | Pura Vida Chiropractic",
      description: "Gentle chiropractic care for infants in San Antonio, TX. Dr. Dan Foss evaluates newborns for subluxations that can cause colic, reflux, and latching issues.",
      keywords: ["infant chiropractor San Antonio", "newborn chiropractic San Antonio", "baby chiropractor San Antonio TX", "infant chiropractor San Antonio TX", "quiropráctico para bebés San Antonio", "newborn chiropractor near me San Antonio"],
      h1: "Infants and Chiropractic in San Antonio",
      image: "/images/infants-chiropractic.png",
      body: [
        "The first subluxation a baby experiences is often the birth process itself — the pulling and twisting of the head during delivery. These subluxations can be aggravated further by forceps, suction delivery, or c-section. **Subluxations** are misalignments in the spine that cause interference in the nervous system, which can have significant impacts on the function and health of the body.",
        "When a baby or infant has subluxations, it can cause many conditions including: **Colic, Reflux, Latching issues / Tongue tie, Constipation, Difficulty sleeping, Allergies, Ear infections,** and **Failure to thrive.** Many families choose to have their babies checked as soon as possible after birth. Dr. Foss recommends that his pregnant patients bring their newborns in for evaluation within the first few days or weeks of life.",
        "Infant adjustments are **extremely gentle** — Dr. Foss uses only the pressure of a light fingertip touch on a baby's spine. He also evaluates early reflexes and sucking reflexes to check for any latching issues. In addition to spinal evaluation, Dr. Foss uses **Cranial Chiropractic** to assess and gently adjust the cranial bones of the skull and face, which can assist with latching and free up restrictions in the craniosacral system that affect infant development.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Infant Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Is chiropractic safe for newborns and infants?", a: "Yes — pediatric chiropractic uses fingertip-level pressure only, with no popping, twisting, or force. Dr. Foss has years of experience with infants from birth onward and selects the gentlest possible technique. The safety profile of pediatric chiropractic in trained hands is well established in the literature." },
        { q: "What infant conditions benefit from chiropractic care?", a: "Common infant conditions Dr. Foss treats include colic, reflux, latching and feeding difficulties, torticollis, constipation, recurrent ear infections, sleep disturbances, and the cumulative effects of birth trauma (vacuum extraction, forceps, prolonged labor, cesarean). Cranial chiropractic addresses cranial molding and asymmetric head shape (plagiocephaly)." },
        { q: "How soon after birth can my baby be evaluated?", a: "Many parents bring newborns in during the first weeks of life — earlier is generally better for resolving birth-related strain patterns before they compound. Care can begin as early as the first few days postpartum. The evaluation is non-invasive and the gentle adjustments use only fingertip pressure." },
        { q: "How many visits does an infant typically need?", a: "Many infants respond within 1–3 visits — often dramatically. Stable improvement typically develops over 4–8 visits across 3–6 weeks. Cases involving feeding difficulty, torticollis, or tongue tie may require longer integrated care." },
      ],
    },
    "pediatric-prenatal": {
      title: "Pediatric & Prenatal Chiropractor San Antonio | Pura Vida",
      description:
        "Gentle pediatric and prenatal chiropractic care in San Antonio, TX. SOT technique safe for all ages. Free consultation for mom and baby.",
      keywords: ["pediatric chiropractor San Antonio", "prenatal chiropractor San Antonio", "chiropractic pregnancy San Antonio TX", "pediatric prenatal chiropractor San Antonio TX", "infant chiropractor San Antonio", "pregnancy chiropractor San Antonio"],
      h1: "Pediatric & Prenatal Chiropractic in San Antonio",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/IeiU-Q-ljik", "https://www.youtube.com/embed/1fiRlACQjdk"],
      body: [
        "Children and expectant mothers deserve the gentlest, most effective care available. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC is trained in **pediatric and prenatal chiropractic** using the SOT technique — one of the safest approaches for these special populations.",
        "For **pregnant women**, SOT helps relieve pelvic pain, sciatica, round ligament discomfort, and prepares the pelvis for an optimal birth. The Webster Technique, a specific SOT protocol, supports ideal fetal positioning. For **infants and children**, gentle SOT adjustments address birth trauma, colic, ear infections, torticollis, and developmental concerns.",
        "Adjustments for infants use no more pressure than a light fingertip touch. Our San Antonio office is a welcoming space for families at every stage of life.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric and Prenatal Chiropractic", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Why combine pediatric and prenatal care under one practice?", a: "Pediatric and prenatal chiropractic share the same fundamental approach — gentle, low-force techniques that respect the unique physiology of growing bodies and expectant mothers. SOT and Webster Technique form the foundation of both. Many families find it convenient to have a single practice for mom's prenatal care, the newborn evaluation, and ongoing pediatric care through childhood." },
        { q: "Is the technique used different for kids vs adults?", a: "Yes. Adult chiropractic typically uses more force; pediatric and prenatal chiropractic specifically uses fingertip-level pressure for infants, modified light contact for older children, and Webster-protocol gentle blocking for pregnant patients. Dr. Foss adapts technique to each patient's age, size, and condition." },
        { q: "Is SOT safe for both children and pregnant women?", a: "Yes — SOT is one of the safest chiropractic systems precisely because it uses gentle, low-force techniques. It's the chiropractic system most commonly used for pediatric and prenatal care because the same low-force approach works across both populations." },
        { q: "How often should kids and pregnant moms see a chiropractor?", a: "Pregnancy: every 2–3 weeks early on, weekly in the final 6 weeks. Newborns: as needed for specific issues, typically 4–8 visits over a few weeks. Children: as needed for growth-related issues, sports injuries, or postural concerns — often 4–8 visits per concern, then occasional maintenance. Dr. Foss tailors frequency to each patient." },
      ],
    },
    "shockwave-therapy": {
      title: "Shockwave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Shockwave therapy for chronic pain in San Antonio, TX. Non-invasive treatment for tendons, plantar fasciitis, and more. Free consultation at Pura Vida Chiropractic.",
      keywords: ["shockwave therapy San Antonio", "ESWT San Antonio", "chronic pain treatment San Antonio TX", "shockwave therapy San Antonio TX", "extracorporeal shockwave San Antonio", "plantar fasciitis shockwave San Antonio"],
      h1: "Shockwave Therapy in San Antonio",
      body: [
        "**Extracorporeal Shockwave Therapy (ESWT)** delivers high-energy acoustic waves into damaged tissue, triggering a powerful regenerative response. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC uses shockwave therapy to treat chronic musculoskeletal conditions that haven't responded to other treatments.",
        "Shockwave therapy is clinically proven for conditions including **plantar fasciitis**, Achilles tendinopathy, tennis elbow, calcific shoulder tendinitis, patellar tendinopathy, and hip pain. It breaks down calcifications, stimulates collagen production, and increases blood flow to the treated area.",
        "Most patients require 3–6 sessions spaced 1 week apart. The procedure takes 10–15 minutes and is performed in our San Antonio office with no anesthesia or downtime required.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Shockwave Therapy (ESWT)", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "What is the difference between Shockwave (ESWT) and SoftWave?", a: "Both deliver acoustic energy to stimulate tissue regeneration, but ESWT uses focused high-energy waves at a single point, while SoftWave uses broadfocused unfocused waves over a larger area. Focused ESWT is more aggressive and is typically more uncomfortable; SoftWave is gentler and well-tolerated. Both are FDA-cleared. Dr. Foss uses SoftWave as the primary regenerative technology for most musculoskeletal conditions because of the better patient experience and equivalent or better outcomes." },
        { q: "What conditions does shockwave therapy treat?", a: "Shockwave is clinically proven for plantar fasciitis, Achilles tendinopathy, tennis and golfer's elbow, calcific shoulder tendinitis, patellar tendinopathy, trochanteric bursitis, hip pain, and chronic musculoskeletal conditions that have plateaued with conservative care. The regenerative effect on degenerated tendons makes it particularly valuable for chronic tendinopathy." },
        { q: "How many shockwave sessions are typical?", a: "Most patients need 3–6 sessions spaced one week apart. The procedure takes 10–15 minutes and requires no anesthesia or downtime. Chronic conditions may require additional sessions. Results often continue improving for 4–6 weeks after the final treatment as the regenerative cascade completes." },
        { q: "Does shockwave therapy hurt?", a: "Focused ESWT can be uncomfortable; broadfocused SoftWave is much better tolerated. Intensity is adjusted to each patient's comfort level. Most patients describe the sensation as a tapping pressure rather than pain. No anesthetic is needed for either modality." },
      ],
    },
    "class-iv-laser": {
      title: "Class IV Laser Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Class IV laser therapy in San Antonio, TX. Deep tissue healing for arthritis, disc pain, sports injuries, and neuropathy. Book a free consultation today.",
      keywords: ["Class IV laser therapy San Antonio", "laser therapy San Antonio TX", "photobiomodulation San Antonio", "Class IV laser San Antonio TX", "laser pain treatment San Antonio", "deep tissue laser therapy San Antonio"],
      h1: "Class IV Laser Therapy in San Antonio",
      body: [
        "**Class IV Laser Therapy** (photobiomodulation) uses specific wavelengths of light to penetrate deep into tissues, stimulating cellular repair and reducing inflammation and pain. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC incorporates Class IV laser as a powerful complement to [SOT chiropractic care](/en/services/sot-chiropractic).",
        "Class IV laser is effective for a wide range of conditions including [disc herniation](/en/blog/herniated-disc-chiropractor-san-antonio), arthritis, peripheral neuropathy, [sciatica](/en/blog/sciatica-chiropractor-san-antonio), sports injuries, post-surgical recovery, and chronic muscle pain. The laser stimulates mitochondrial activity, accelerating the production of ATP (cellular energy) and speeding up tissue repair.",
        "Laser therapy sessions are painless — most patients feel a gentle warmth — and typically last 5–15 minutes. Many San Antonio patients notice reduced pain and improved function within their first few treatments.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Class IV Laser Therapy", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "What is Class IV laser therapy and how does it work?", a: "Class IV laser therapy (photobiomodulation, PBM) uses specific wavelengths of light (typically 800–980 nm) at therapeutic power levels (10–15 watts) to penetrate deep into tissues. The light energy stimulates mitochondrial activity, accelerating ATP production and triggering a cascade of healing effects — reduced inflammation, improved circulation, faster cellular repair, and pain reduction." },
        { q: "What conditions does Class IV laser treat?", a: "Class IV laser is effective for arthritis, disc herniation, peripheral neuropathy (including diabetic and chemotherapy-induced), sciatica, plantar fasciitis, sports injuries, post-surgical recovery, chronic muscle pain, tendinopathy, and TMJ inflammation. It's particularly valuable for conditions where deep tissue inflammation is a driver." },
        { q: "Does laser therapy hurt?", a: "No — laser therapy is painless. Most patients feel a gentle, comfortable warmth as the laser energy penetrates. Sessions typically last 5–15 minutes depending on the area treated. No anesthetic, no downtime, no recovery period required after the session." },
        { q: "How many laser therapy sessions does it take to see results?", a: "Most patients notice reduced pain and improved function within the first 3–5 sessions. Chronic conditions typically require 8–15 sessions for full effect. Laser therapy is often combined with chiropractic adjustment and SoftWave therapy for compounding benefits." },
      ],
    },

    // ── New services ───────────────────────────────────────────────────────
    "chiropractic-care": {
      title: "Chiropractor in San Antonio, TX | Pura Vida Chiropractic",
      description:
        "Expert chiropractic care in San Antonio, TX. Dr. Dan Foss uses 300+ techniques including SOT to treat the root cause of pain. Free consultation.",
      keywords: ["chiropractor San Antonio TX", "chiropractic care San Antonio", "San Antonio chiropractor", "back pain San Antonio", "best chiropractor San Antonio", "chiropractor near me San Antonio", "chiropractic adjustment San Antonio TX", "back pain doctor San Antonio"],
      h1: "Chiropractic Care in San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      body: [
        "**Chiropractic care** is health maintenance of the spinal column, discs, related nerves and bone geometry. It focuses on treating the causes of physical problems, rather than just the symptoms. At Pura Vida Chiropractic, Dr. Dan Foss uses over 300 chiropractic techniques including the advanced **Sacro-Occipital Technique (SOT)** to restore proper spinal function.",
        "With chiropractic adjustments, you give your body the best possible opportunity to prevent injury and return to a healthy state. Many patients report a feeling of release following an adjustment, along with significant decrease in [headaches](/en/blog/headaches-migraines-chiropractor-san-antonio), [back pain](/en/blog/back-pain-chiropractor-san-antonio), [neck pain](/en/blog/neck-pain-chiropractor-san-antonio), and overall improved well-being.",
        "Dr. Foss's approach goes beyond pain relief — it's about restoring your body's innate ability to heal and function at its highest level.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "What does a chiropractor actually do?", a: "Chiropractors diagnose and treat musculoskeletal disorders — particularly those involving the spine, joints, and nervous system. The core intervention is the chiropractic adjustment: a precise, controlled force applied to a joint to restore proper motion and reduce nerve irritation. Dr. Foss uses over 300 chiropractic techniques, with Sacro-Occipital Technique (SOT) as the primary approach because it's gentle, comprehensive, and addresses the whole body as an integrated unit." },
        { q: "What conditions can chiropractic care treat?", a: "Dr. Foss treats 99+ distinct conditions — from common patterns like back pain, neck pain, headaches, sciatica, and disc problems to specialty areas like pregnancy chiropractic (Webster certified), pediatric care, TMJ, vertigo, fibromyalgia, auto accident injuries, and post-concussion syndrome. The complete list is at /en/conditions." },
        { q: "Is chiropractic care safe?", a: "Yes — chiropractic care has a very strong safety record, particularly when delivered using gentle techniques like SOT rather than high-velocity manipulation. Adverse events are extremely rare. Dr. Foss screens for any contraindications (severe osteoporosis, certain disc patterns, vascular risk factors) before initiating care and selects technique based on each patient's age, condition, and tolerance." },
        { q: "How many chiropractic visits do I need?", a: "Most conditions require an initial corrective phase of 8–20 visits, followed by tapered maintenance care. Acute issues often resolve in 4–8 visits; chronic conditions typically need 12–24 visits for stable resolution. Dr. Foss provides a clear treatment plan at the first visit and reassesses every 4–6 visits." },
      ],
    },
    "cranial-chiropractic": {
      title: "Cranial Chiropractor in San Antonio TX | Pura Vida",
      description:
        "Cranial chiropractor in San Antonio, TX. Dr. Dan Foss is Advanced SOT certified and provides gentle cranial chiropractic care for migraines, TMJ, vertigo, post-concussion symptoms, infant cranial issues, and more. 23+ years experience. Free first visit. (210) 685-1994.",
      keywords: ["cranial chiropractor San Antonio", "cranial chiropractor in San Antonio", "cranial chiropractic San Antonio", "cranial chiropractic San Antonio TX", "cranial therapy San Antonio", "cranial adjusting San Antonio", "craniosacral chiropractor San Antonio", "SOT cranial chiropractor San Antonio", "TMJ chiropractor San Antonio", "post-concussion chiropractor San Antonio", "infant cranial chiropractor San Antonio"],
      h1: "Cranial Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-neck.webp",
      body: [
        "Dr. Dan Foss is a **cranial chiropractor in San Antonio** with Advanced SOT (Sacro-Occipital Technique) certification through SORSI — one of the small number of chiropractors trained to perform cranial chiropractic adjustments at this level. Cranial chiropractic is the study of the skull and the restoration of proper cranial function: the relationship between the skull, the sacrum, and the meningeal system that surrounds the brain and spinal cord.",
        "When the cranial bones are misaligned or the meningeal system is under abnormal tension, the downstream effects span almost every system: chronic migraines and headaches, TMJ dysfunction and jaw pain, vertigo and tinnitus, post-concussion and traumatic brain injury (TBI) symptoms, infant feeding/latching/sleep difficulties, plagiocephaly (flat-head syndrome), recurring ear infections, sinus pressure, ADHD-pattern focus and behavior issues in kids, and even speech delay. The cranial bones are not fused as commonly taught — they have small but measurable rhythmic motion, and that motion can be disrupted by birth, falls, accidents, dental work, or chronic muscular tension.",
        "<h2>What conditions cranial chiropractic care addresses</h2>",
        "**Migraines and chronic headaches** — particularly those that don't respond to medication or standard chiropractic. Most migraine patterns originate from cranial restriction at the temporal, occipital, or sphenoid bones. Gentle cranial work releases that restriction and the migraine pattern often resolves over 4-12 visits.",
        "**TMJ dysfunction** — the temporomandibular joint sits between the temporal bone and the mandible. Cranial chiropractic addresses both the joint AND the cranial environment around it, which is why it often succeeds where dental splints alone don't.",
        "**Post-concussion and TBI recovery** — head impacts disrupt cranial rhythm and meningeal tension patterns. Cranial chiropractic is one of the few treatments that directly addresses the structural sequelae of concussion. We see post-concussion patients 3-12 months out who have plateaued with other care.",
        "**Vertigo, tinnitus, and inner-ear symptoms** — the temporal bones house the inner ear. Cranial corrections at the temporal bone often resolve the positional component of BPPV and reduce the severity of tinnitus.",
        "**Infant cranial concerns** — torticollis, latching difficulties, colic, plagiocephaly. Birth itself is a major cranial event; gentle cranial work in the first months can resolve patterns that would otherwise compound for years.",
        "**Sinus and chronic ear infections in children** — the cranial bones house the sinus drainage pathways and the eustachian tubes. Recurrent infections often resolve when cranial mobility is restored.",
        "<h2>How cranial chiropractic adjusting actually works</h2>",
        "Cranial chiropractic uses extremely light, precise contacts on the skull and surrounding tissues — typically the pressure of a fingertip resting on the head. There is no popping, no sudden movement, no force. The technique relies on the body's own rhythmic cranial motion (the cranial rhythmic impulse, or CRI) to guide where and how to apply contact. Dr. Foss reads cranial rhythm as a diagnostic tool and uses it to find the specific bone or suture that's restricted, then applies a gentle hold or directional pressure to allow the body to release the restriction itself.",
        "Sessions typically last 20-30 minutes for adults, 10-20 minutes for kids, and 5-15 minutes for infants. Most patients describe the experience as deeply relaxing — many fall asleep during cranial work.",
        "<h2>Why our cranial chiropractic care is different</h2>",
        "Three things. **First: the certification.** Dr. Foss holds Advanced SOT certification through the Sacro Occipital Research Society International (SORSI) — the credentialing body for SOT cranial chiropractic. This is a multi-year training track beyond DC licensure that very few chiropractors complete. **Second: 23 years of cranial pattern recognition.** Cranial work is heavily diagnostic; experience reading cranial rhythm and pattern compounds over years. Dr. Foss has worked with cranial patterns full-time for over two decades across the US, Costa Rica, Spain, Ireland, and the Netherlands. **Third: integration with the whole system.** Cranial chiropractic isn't done in isolation — Dr. Foss combines cranial work with sacral pelvic blocking (Category I/II/III), CMRT visceral adjusting, and adjunct therapies (Class IV laser, SoftWave) when indicated. Most cranial patients see results faster when the whole system is addressed.",
        "<h2>Who specifically benefits from cranial chiropractic care</h2>",
        "Patients who've tried medication, physical therapy, dental splints, or standard chiropractic without resolution; patients with a history of concussion or TBI; new parents with infants showing torticollis, feeding difficulties, or asymmetric head shape; chronic migraine sufferers; TMJ patients; vertigo and BPPV patients; children with recurring ear infections, sinus issues, or speech delay; adults recovering from auto accidents with persistent headaches or cognitive symptoms.",
      ],
      faqs: [
        {
          q: "What is cranial chiropractic, and how is it different from regular chiropractic?",
          a: "Cranial chiropractic is the application of chiropractic adjustment principles to the bones of the skull (cranium) rather than just the spine. Standard chiropractic addresses spinal vertebrae; cranial chiropractic also addresses the temporal, occipital, sphenoid, frontal, parietal, and other cranial bones — and the meningeal connective tissue that wraps the brain and spinal cord. The technique is dramatically gentler (held finger pressure, no popping) and is particularly effective for migraines, TMJ, vertigo, post-concussion symptoms, and infant cranial issues.",
        },
        {
          q: "Is cranial chiropractic safe?",
          a: "Yes — cranial chiropractic is one of the safest forms of chiropractic care because it uses extremely light contact (the pressure of a fingertip) rather than high-velocity adjustments. It's safe for infants from birth, elderly patients, post-surgical patients, and patients with osteoporosis or fragility. Adverse events are extremely rare. Many patients fall asleep during cranial sessions because the work is so gentle and parasympathetic-activating.",
        },
        {
          q: "How many cranial chiropractic sessions will I need?",
          a: "Acute issues (recent concussion, single migraine episode, infant feeding issue) often resolve in 4-8 sessions. Chronic patterns (years of migraines, long-standing TMJ, persistent post-concussion symptoms) typically need 12-20 sessions over 8-12 weeks, then a maintenance schedule. Dr. Foss provides a clear treatment plan with timeline at the first visit and reassesses every 4-6 visits — if cranial work isn't producing measurable change, we change approach or refer out.",
        },
        {
          q: "Can a cranial chiropractor help with migraines that haven't responded to medication?",
          a: "Often, yes — particularly migraines with a cervical or cranial origin (which is the majority). The temporal, occipital, and sphenoid bones house key migraine generators. When those bones are restricted and the meningeal system is under tension, migraine patterns compound. Cranial chiropractic addresses the structural cause directly. Many patients we see have tried 3+ medications without resolution and find their migraine frequency drops 50-80% after a course of cranial care.",
        },
        {
          q: "Can cranial chiropractic help post-concussion or TBI symptoms?",
          a: "Yes — cranial chiropractic is one of the few treatments that directly addresses the structural sequelae of concussion. Head impacts disrupt cranial rhythm, create dural tension, and shift the cranial bones in ways that imaging often misses. We see post-concussion patients who plateaued with vestibular therapy, vision therapy, or neurology and found the missing piece was cranial work. Best results when treatment starts within 6 months of impact, but improvement is possible at any timeframe.",
        },
        {
          q: "Where in San Antonio can I find a cranial chiropractor?",
          a: "Pura Vida Chiropractic at 2318 NW Military Hwy Suite 103, San Antonio, TX 78231. Dr. Dan Foss is Advanced SOT certified and one of the small number of cranial chiropractors in San Antonio. Easy to reach from Stone Oak, Castle Hills, Alamo Heights, Olmos Park, Helotes, Boerne, and central San Antonio. Free parking. Call (210) 685-1994 to schedule your free first visit. Bilingual care (English/Spanish) available.",
        },
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cranial Chiropractic", "procedureType": "Chiropractic" },
    },
    "infant-chiropractic": {
      title: "Infant Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Safe, gentle infant chiropractic care in San Antonio, TX. Dr. Dan Foss helps newborns with colic, feeding difficulties, torticollis, and reflux.",
      keywords: ["infant chiropractor San Antonio", "baby chiropractor San Antonio", "newborn chiropractic San Antonio TX", "infant chiropractor San Antonio TX", "quiropráctico para bebés San Antonio", "newborn chiropractor near me San Antonio"],
      h1: "Infant Chiropractic in San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      body: [
        "The birth process — even under ideal circumstances — places significant forces on a newborn's spine and nervous system. Misalignments acquired during delivery can affect **feeding, sleep, digestion, and overall development**. Many families choose to have their babies evaluated as soon as possible after birth.",
        "Infant chiropractic adjustments use no more pressure than a gentle fingertip touch — they are completely safe, gentle, and appropriate for newborns. Dr. Foss recommends that parents bring their babies in shortly after birth for a gentle post-birth wellness evaluation.",
        "Common conditions treated in infants include **colic, feeding difficulties, torticollis, reflux, and sleep disturbances**. Early intervention can prevent these issues from affecting your baby's development long-term.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Infant Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "How early can a baby see a chiropractor?", a: "Infant chiropractic can begin in the first days of life. Earlier is generally better — the goal is to release birth-related strain patterns before they compound and affect feeding, sleep, and development. Dr. Foss has extensive experience with newborns and uses fingertip-level pressure only." },
        { q: "What does an infant chiropractic adjustment feel like?", a: "Infant adjustments use no more pressure than you'd apply to test the ripeness of a tomato — typically the pressure of a fingertip on a closed eyelid. There's no popping, twisting, or force. Most babies are calm or fall asleep during the session." },
        { q: "What infant problems benefit from chiropractic care?", a: "Common conditions include colic, reflux, latching and feeding difficulties, torticollis (head tilt), constipation, recurrent ear infections, sleep disturbances, and the cumulative effects of birth trauma (vacuum extraction, forceps, prolonged labor, cesarean). Cranial work addresses asymmetric head shape (plagiocephaly)." },
        { q: "Is infant chiropractic supported by evidence?", a: "Yes — the body of evidence for pediatric chiropractic, particularly for colic and feeding-related issues, has grown substantially. The International Chiropractic Pediatric Association (ICPA) maintains the research literature. Dr. Foss has trained extensively in pediatric chiropractic and has years of clinical experience with infants." },
      ],
    },
    "pediatric-chiropractic": {
      title: "Pediatric Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Specialized pediatric chiropractic care in San Antonio, TX. Dr. Dan Foss has cared for children from newborns to teens for 23+ years. Free consultation.",
      keywords: ["pediatric chiropractor San Antonio", "children's chiropractor San Antonio", "kids chiropractic San Antonio TX", "pediatric chiropractor San Antonio TX", "child chiropractor near me San Antonio", "quiropráctico pediátrico San Antonio"],
      h1: "Pediatric Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      body: [
        "Dr. Foss is a San Antonio pediatric chiropractor who has specialized in caring for children from newborns through teenagers for over **23 years**. Kids love to run, jump, and play — and while their spongy bones are more resilient than adults, childhood is actually one of the most important times to receive chiropractic care.",
        "Falls, sports injuries, heavy backpacks, poor posture from device use, and even the birth process itself can create spinal misalignments that affect a child's **nervous system development, immune function, sleep, and behavior**.",
        "Common pediatric conditions Dr. Foss treats include colic, ear infections, torticollis, scoliosis, sports injuries, growing pains, ADHD-related tension, and postural problems. Adjustments for children are gentle, safe, and adapted to each child's age and size.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric Chiropractic", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Why should my child see a chiropractor?", a: "Children experience countless physical stresses — birth itself, falls during early walking, backpacks, screen time, sports, and the cumulative effect of postural patterns. Pediatric chiropractic addresses these stresses before they compound into adult musculoskeletal patterns. Dr. Foss has 23+ years of pediatric experience treating children from infancy through teen years." },
        { q: "What pediatric conditions does Dr. Foss treat?", a: "Common pediatric concerns include colic, ear infections, torticollis, scoliosis monitoring, sports injuries, growing pains, ADHD-related muscular tension, postural problems (text neck, backpack patterns), constipation, bedwetting, and recurrent illness. Many of these have a structural component that pediatric chiropractic addresses directly." },
        { q: "Are pediatric chiropractic adjustments safe?", a: "Yes — pediatric chiropractic uses techniques specifically appropriate for children's developing spines: gentle, low-force, and age-adapted. Dr. Foss never uses adult-intensity manipulation on children. The safety profile of pediatric chiropractic in trained hands is well established." },
        { q: "How often should my child see a chiropractor?", a: "Frequency depends on the child's specific situation. Acute issues (sports injury, growth-related pain) typically need 4–8 visits. Children with ongoing concerns benefit from monthly check-ins. Many families bring children in periodically during growth spurts for preventive evaluation." },
      ],
    },
    "pregnancy-chiropractic": {
      title: "Pregnancy Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Webster Technique prenatal chiropractic in San Antonio, TX. Dr. Dan Foss keeps expectant mothers comfortable and aligned through every trimester.",
      keywords: ["pregnancy chiropractor San Antonio", "prenatal chiropractic San Antonio", "Webster Technique San Antonio TX", "pregnancy chiropractor San Antonio TX", "Webster technique chiropractor San Antonio", "prenatal chiropractic near me San Antonio"],
      h1: "Pregnancy Chiropractor in San Antonio, TX",
      image: "/images/pregnant-patient.webp",
      body: [
        "Being pregnant puts a lot of strain on your spine and nervous system. As your baby grows, your center of gravity shifts, your posture changes, and the ligaments in your pelvis loosen — creating instability and discomfort. By months 6–9, many mothers are forced to assume a very unbalanced posture just to get around.",
        "Pregnancy chiropractic care helps expectant mothers stay comfortable, aligned, and supported throughout every trimester. Dr. Foss uses the **Webster Technique** — a specialized prenatal chiropractic protocol — to restore pelvic balance and reduce intrauterine constraint, supporting optimal fetal positioning as delivery approaches. [Learn more about chiropractic care during pregnancy →](/en/blog/prenatal-chiropractor-san-antonio-tx)",
        "Pregnancy chiropractic care is safe throughout all trimesters, **drug-free**, and works as a powerful complement to your OB or midwife's care.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pregnancy Chiropractic (Webster Technique)", "procedureType": "Chiropractic" },
      faqs: [
        { q: "How can chiropractic care help me during pregnancy?", a: "Webster Technique addresses the structural changes of pregnancy — shifting center of gravity, hormonal ligament laxity, pelvic widening, and the postural compensations that drive low back pain, sciatica, round ligament pain, and pelvic girdle pain. Most pregnancy patients report substantial reduction in pain, improved sleep, and better overall comfort within several visits." },
        { q: "Is chiropractic care safe during pregnancy?", a: "Yes — Webster Technique is one of the safest and most well-studied chiropractic protocols for pregnancy. The American Pregnancy Association recognizes chiropractic as safe during pregnancy. The specialized pregnancy table has no abdominal pressure, adjustments are gentle and Webster-protocol specific, and Dr. Foss is certified through ICPA." },
        { q: "Can chiropractic help with a breech baby?", a: "Webster Technique creates the pelvic conditions that allow the baby to self-rotate to head-down. Most breech babies turn within 2–4 visits when treatment starts between 28–34 weeks. Chiropractors do not physically turn babies (that's ECV, performed by obstetricians); Webster works indirectly by optimizing the pelvic environment." },
        { q: "How early in pregnancy should I start chiropractic care?", a: "The earlier the better — first trimester care addresses hormonal ligament changes before asymmetric patterns develop. But it's never too late: many patients begin in the third trimester for specific issues like sciatica, breech, or birth preparation. Webster is appropriate at any stage." },
      ],
    },
    "auto-injury-chiropractic": {
      title: "Auto Injury Chiropractor San Antonio | Pura Vida",
      description:
        "Injured in a car accident in San Antonio? Dr. Dan Foss evaluates, documents, and treats whiplash and auto injuries. Free consultation. Work with PI attorneys.",
      keywords: ["auto injury chiropractor San Antonio", "car accident chiropractor San Antonio TX", "whiplash treatment San Antonio", "car accident chiropractor San Antonio", "auto accident injury chiropractor San Antonio TX", "whiplash chiropractor near me San Antonio"],
      h1: "Auto Injury Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      body: [
        "An auto injury can devastate a person on many levels — physically, emotionally, and financially. Car accidents come in all magnitudes, but always have one thing in common: they put sudden, significant stress on your body. Whether it's **whiplash** or a more serious personal injury, the impact creates a shock wave that negatively affects your spine, muscles, ligaments, and nervous system.",
        "The damage isn't always visible — far from it. Even if you feel fine immediately after an accident, you may be in serious trouble. Whiplash symptoms can take days or even weeks to appear, and untreated injuries become **chronic pain**.",
        "Dr. Foss provides thorough evaluation and documentation of auto accident injuries, and works with personal injury attorneys when needed. Early chiropractic intervention reduces recovery time and prevents acute injuries from becoming long-term conditions. [Read about auto injury recovery →](/en/blog/auto-injury)",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Auto Injury Chiropractic", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Should I see a chiropractor even if I feel okay after a car accident?", a: "Yes. Whiplash and other soft-tissue injuries often don't produce symptoms for 24–72 hours — or even longer. Early conservative chiropractic care after a collision produces better long-term outcomes than waiting for chronic pain to develop. Early documentation is also typically important for insurance and personal-injury claims." },
        { q: "What auto accident injuries does Dr. Foss treat?", a: "Common post-accident conditions include whiplash, cervical and lumbar facet sprains, post-concussion symptoms, TMJ dysfunction from airbag impact, sacroiliac joint disruption, soft-tissue contusions, and the cumulative trauma of motor-vehicle collisions. SOT is particularly well-suited to whiplash cases." },
        { q: "Do you work with personal injury attorneys?", a: "Yes — Dr. Foss has extensive experience working with personal injury attorneys, documenting injuries thoroughly with narrative reports and objective findings. We coordinate with the attorney on case timing, billing, and final reports. Many attorneys refer their clients to Pura Vida specifically for the quality of documentation." },
        { q: "Will my insurance cover chiropractic care after an accident?", a: "Most auto policies include Personal Injury Protection (PIP) or MedPay coverage that pays for post-accident chiropractic care. We verify coverage at the first visit and work with your auto insurance, MedPay, or attorney's lien. Bring your accident report, insurance card, and ID to the first visit." },
      ],
    },
    "wellness-care": {
      title: "Wellness Chiropractic San Antonio | Pura Vida Chiropractic",
      description:
        "Proactive wellness chiropractic care in San Antonio, TX. The Pura Vida Protocol integrates chiropractic, osteopathic, and manual therapy for optimal health.",
      keywords: ["wellness chiropractor San Antonio", "maintenance chiropractic San Antonio", "preventive chiropractic San Antonio TX", "wellness chiropractic San Antonio TX", "best chiropractor San Antonio", "chiropractor near me San Antonio"],
      h1: "Wellness Chiropractic Care in San Antonio, TX",
      image: "/images/dr-foss-examining-neck.webp",
      body: [
        "**Wellness chiropractic care** is proactive, regular care designed to maintain optimal spinal alignment, nervous system function, and overall health — even when you are not in pain. Think of it like regular dental cleanings or exercise. Your nervous system controls every function in your body.",
        "When the spine is properly aligned and free from interference, every system in the body functions better — **immune response, digestion, sleep, energy, and mood** all improve. The Pura Vida Protocol is Dr. Foss's comprehensive wellness approach developed over 23 years.",
        "It integrates chiropractic, osteopathic, manual therapy, and energetic modalities to keep your body performing at its highest level. Many San Antonio families make Pura Vida Chiropractic a cornerstone of their overall health plan.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Wellness Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "What is wellness chiropractic care?", a: "Wellness chiropractic is proactive, regular care designed to maintain optimal spinal alignment, nervous system function, and overall health — even when you are not in pain. It's analogous to regular dental cleanings or routine exercise: ongoing maintenance prevents the small dysfunctions that compound into symptomatic problems." },
        { q: "Do I need chiropractic care if I'm not in pain?", a: "Pain is one of the last symptoms a misaligned spine produces. By the time pain shows up, the underlying dysfunction has usually been compounding for months or years. Wellness chiropractic catches and corrects these patterns before they become painful — which is much easier to manage than waiting for chronic conditions to develop." },
        { q: "How often should I get a wellness adjustment?", a: "Most wellness patients see Dr. Foss every 2–4 weeks for ongoing maintenance. Frequency is adjusted based on age, activity level, occupational factors, and stress load. Active patients and those with prior injuries often benefit from more frequent care than sedentary patients without injury history." },
        { q: "What's the Pura Vida Protocol?", a: "The Pura Vida Protocol is Dr. Foss's comprehensive wellness approach developed over 23 years of practice. It integrates SOT chiropractic, cranial work, CMRT visceral adjusting, manual therapy, and (when appropriate) Class IV laser and SoftWave therapy. The goal is to address the whole person — structural, neurological, visceral, and energetic — rather than chasing isolated symptoms." },
      ],
    },
    "latino-community": {
      title: "Bilingual Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Bilingual chiropractic care for San Antonio's Latino community. Dr. Dan Foss speaks Spanish and understands Latino culture. Free consultation.",
      keywords: ["chiropractor San Antonio Latino", "bilingual chiropractor San Antonio", "quiropráctico San Antonio TX", "Spanish speaking chiropractor San Antonio", "quiropráctico que habla español San Antonio", "quiropráctico bilingüe San Antonio TX"],
      h1: "Serving San Antonio's Latino Community",
      image: "/images/dr-foss-about-hp.webp",
      body: [
        "Pura Vida Chiropractic was founded with a commitment to serving San Antonio's **Latino community** with the health and wellness care it deserves. Dr. Dan Foss is fully bilingual and has practiced in Costa Rica, Spain, Ireland, the Netherlands, and Guatemala — giving him a deep understanding of Latino culture and health needs.",
        "As a San Antonio chiropractor in the Castle Hills area, Dr. Foss made a promise to himself: to make high-quality chiropractic care accessible to **Spanish-speaking families** who need a doctor who truly understands them.",
        "At Pura Vida, you will never feel like you need to explain yourself twice. Dr. Foss speaks your language — both literally and culturally.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Bilingual Chiropractic Care", "procedureType": "Chiropractic" },
      faqs: [
        { q: "Do you speak Spanish at Pura Vida Chiropractic?", a: "Yes — Pura Vida is a fully bilingual practice. Dr. Foss is fluent in Spanish and the entire team is bilingual. We have practiced in Costa Rica, Spain, and Latin America. All paperwork, signage, patient education materials, and the website itself are available in Spanish at /es. Patients will never need to translate or struggle through care in a non-native language." },
        { q: "What cultural considerations does Dr. Foss bring to Latino patient care?", a: "Dr. Foss spent significant years practicing in Costa Rica, Spain, Ireland, the Netherlands, and Guatemala, giving him deep familiarity with Latino health perspectives, family-centered care, and the cultural context of musculoskeletal complaints. He understands the role of extended family in healthcare decisions and the cultural barriers many Latino patients face in mainstream medicine." },
        { q: "Do you offer payment plans for the Latino community?", a: "We are insurance-friendly and offer affordable cash-pay options for patients without insurance. Dr. Foss is committed to making chiropractic accessible to working families in San Antonio. We accept HSA/FSA, payment plans for longer treatment courses, and offer a free new-patient consultation so families can determine fit before financial commitment." },
        { q: "Where do most of your Spanish-speaking patients come from in San Antonio?", a: "We serve Spanish-speaking families from across San Antonio — including the Westside, Southside, Olmos Park, Castle Hills, Stone Oak, and the broader San Antonio metro area. Our location at 2318 NW Military Hwy is accessible from most of San Antonio. Many patients also come from Helotes and Boerne." },
      ],
    },
  },

  es: {
    // ── Existing services ──────────────────────────────────────────────────
    "quiropractica-sot": {
      title: "Quiropráctico SOT San Antonio | Pura Vida Chiropractic",
      description:
        "Atención quiropráctica SOT experta en San Antonio, TX. El Dr. Dan Foss usa la Técnica Sacro-Occipital para aliviar el dolor. Evaluación gratuita.",
      keywords: ["quiropráctico SOT San Antonio", "Técnica Sacro-Occipital San Antonio", "quiropráctica San Antonio TX", "quiropráctico San Antonio TX", "mejor quiropráctico San Antonio", "quiropráctico cerca de mí San Antonio"],
      h1: "Quiropráctica SOT en San Antonio",
      body: [
        "La **Técnica Sacro-Occipital (SOT)** es un método quiropráctico suave y completo que se centra en la relación fundamental entre el sacro y el cráneo. En Pura Vida Chiropractic, el Dr. Dan Foss, DC tiene una formación extensa en SOT y la utiliza para tratar [dolor de espalda](/es/blog/dolor-de-espalda-quiropractico-san-antonio), [dolor de cuello](/es/blog/dolor-de-cuello-quiropractico-san-antonio), [dolores de cabeza](/es/blog/dolores-de-cabeza-migranas-san-antonio), [ciática](/es/blog/ciatica-quiropractico-san-antonio) y mucho más.",
        "A diferencia de los ajustes de alta velocidad, el SOT utiliza bloques cuña especialmente diseñados y la gravedad para realinear suavemente la pelvis y la columna. El resultado es un alivio duradero sin manipulación forzada, lo que lo hace ideal para pacientes de todas las edades, incluyendo niños, mujeres embarazadas y adultos mayores.",
        "El Dr. Foss realiza una evaluación completa de la Categoría SOT para determinar el patrón exacto de desequilibrio en su cuerpo y diseñar un plan de atención personalizado para abordar la causa raíz de su dolor.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Técnica Sacro-Occipital (SOT)", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Qué es la Técnica Sacro-Occipital (SOT)?", a: "SOT es un sistema quiropráctico suave y basado en categorías desarrollado por el Dr. Major DeJarnette que aborda la columna, la pelvis y el ritmo craneosacro como una unidad integrada. Utiliza bloques pélvicos en forma de cuña especialmente diseñados y la gravedad para realinear suavemente la pelvis, liberación de tensión dural para el sistema de membranas protectoras de la médula espinal, y corrección de huesos craneales para patrones de dolor de cabeza y ATM. Sin manipulación de alta velocidad, sin torsiones, sin chasquidos." },
        { q: "¿En qué se diferencia SOT de la quiropráctica regular?", a: "La quiropráctica estándar típicamente usa empujes de alta velocidad y baja amplitud para restaurar el movimiento articular. SOT en cambio identifica en cuál de las tres 'categorías' biomecánicas se encuentra un paciente y aplica un protocolo de corrección específico por categoría — bloques pélvicos para la torsión sacra (Categoría I), liberación del trapecio para la inestabilidad SI (Categoría II), o ajuste no rotacional para el compromiso del disco (Categoría III). El resultado es resultados comparables o mejores con dramáticamente menos fuerza." },
        { q: "¿Es segura la quiropráctica SOT para niños, embarazo y adultos mayores?", a: "Sí — SOT es uno de los sistemas quiroprácticos más seguros disponibles específicamente porque usa técnicas suaves y de baja fuerza. El Dr. Foss está certificado en Técnica Webster (el protocolo SOT para embarazo), tiene amplia experiencia pediátrica incluyendo recién nacidos, y rutinariamente trata pacientes mayores con osteoporosis y enfermedad discal. La técnica se adapta naturalmente a la tolerancia de cada paciente." },
        { q: "¿Cuántas visitas SOT se necesitan típicamente para sentir resultados?", a: "La mayoría de los pacientes notan mejora significativa dentro de 3–6 visitas. Una fase correctiva completa típicamente toma 10–20 visitas durante 6–12 semanas dependiendo de la condición y cuánto tiempo ha estado presente. Las visitas de mantenimiento mensuales ayudan a la mayoría de los pacientes a mantener el patrón corregido a largo plazo." },
      ],
    },
    "terapia-softwave": {
      title: "Terapia SoftWave San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia SoftWave de regeneración tisular en San Antonio, TX. Estimule la curación natural sin cirugía ni inyecciones. Reserve su consulta gratuita.",
      keywords: ["terapia SoftWave San Antonio", "regeneración tisular San Antonio", "alivio del dolor sin cirugía San Antonio", "terapia SoftWave San Antonio TX", "terapia de ondas de choque San Antonio", "terapia regenerativa San Antonio"],
      h1: "Terapia SoftWave en San Antonio",
      body: [
        "La **Terapia SoftWave** es un tratamiento de vanguardia aprobado por la FDA que utiliza tecnología de ondas de choque de enfoque amplio para estimular la regeneración tisular a nivel celular. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC ofrece SoftWave como parte de un enfoque integral y no quirúrgico para sanar el dolor crónico.",
        "SoftWave activa células madre, aumenta el flujo sanguíneo y reduce la inflamación en tejidos dañados. Es altamente efectivo para condiciones como fascitis plantar, tendinopatías, lesiones del manguito rotador, dolor de rodilla, [artritis y enfermedades articulares](/es/blog/dolor-articular-quiropractico-san-antonio) y lesiones crónicas de tejidos blandos.",
        "Los tratamientos son rápidos (15–20 minutos), no invasivos y no requieren tiempo de recuperación. Muchos pacientes de San Antonio experimentan una mejora significativa en tan solo 3–6 sesiones.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia SoftWave de Regeneración Tisular", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "¿Qué es la terapia SoftWave y cómo funciona?", a: "SoftWave es terapia de ondas de choque de enfoque amplio aprobada por la FDA que usa ondas acústicas no enfocadas patentadas para estimular la regeneración tisular a nivel celular. Las ondas activan células madre, aumentan el flujo sanguíneo, reducen la inflamación y desencadenan la reparación de colágeno en tendones, ligamentos y cápsulas articulares dañadas. A diferencia de la ondas de choque focalizada tradicional, el haz de enfoque amplio cubre un área de tratamiento más grande sin contacto con la piel requerido." },
        { q: "¿Qué condiciones trata SoftWave?", a: "SoftWave tiene fuerte evidencia publicada para fascitis plantar, tendinopatía de Aquiles, tendinopatía del manguito rotador, codo de tenista y golfista, bursitis trocantérica, tendinopatía patelar, osteoartritis de rodilla y lesiones crónicas de tejidos blandos. También es efectiva para enfermedad degenerativa de disco, dedo en gatillo y tejido cicatricial post-quirúrgico." },
        { q: "¿Cuántas sesiones de SoftWave se necesitan típicamente?", a: "La mayoría de los pacientes ven mejoría sustancial dentro de 3–6 sesiones durante 3–6 semanas. Las condiciones crónicas (>6 meses) pueden necesitar 6–10 sesiones para el efecto regenerativo completo. Los tratamientos son de 15–20 minutos, no invasivos y no requieren tiempo de inactividad." },
        { q: "¿Es dolorosa la terapia SoftWave?", a: "SoftWave es bien tolerada por la mayoría de los pacientes. La sensación se describe como un golpeteo o presión pulsante en lugar de dolor. La intensidad se ajusta al nivel de comodidad de cada paciente, y no hay necesidad de anestesia." },
      ],
    },
    "lesiones-de-auto": {
      title: "Quiropráctico Lesiones de Auto San Antonio | Pura Vida",
      description:
        "¿Lesionado en un accidente de auto en San Antonio? El Dr. Dan Foss se especializa en latigazo y lesiones de auto. Evaluación gratuita. Trabajamos con seguros.",
      keywords: ["quiropráctico lesiones de auto San Antonio", "accidente de carro quiropráctico San Antonio", "latigazo tratamiento San Antonio TX", "quiropráctico accidente de carro San Antonio TX", "lesiones auto quiropráctico San Antonio", "mejor quiropráctico accidente San Antonio"],
      h1: "Quiropráctica para Lesiones de Auto en San Antonio",
      body: [
        "Los accidentes de automóvil, incluso los menores, pueden causar lesiones musculoesqueléticas significativas que pueden no manifestarse hasta días o semanas después de la colisión. El **latigazo cervical**, la desalineación espinal, las lesiones de disco y el daño a tejidos blandos son las consecuencias más frecuentes de los accidentes de auto en San Antonio.",
        "En Pura Vida Chiropractic, el Dr. Dan Foss, DC se especializa en diagnosticar y tratar pacientes con lesiones de auto utilizando la Técnica Sacro-Occipital y terapias complementarias. La atención quiropráctica temprana después de un accidente puede mejorar dramáticamente los resultados de recuperación y prevenir el dolor crónico.",
        "Trabajamos con seguros de auto y casos de lesiones personales. No espere — cuanto antes busque atención, mejor será su recuperación. Contáctenos hoy para una consulta gratuita posterior al accidente. [Más información sobre lesiones de auto →](/es/blog/lesiones-de-auto)",
      ],
      videos: ["https://www.youtube.com/embed/08Zh3oOtrag"],
      schema: { "@type": "MedicalProcedure", "name": "Atención Quiropráctica por Lesiones de Auto", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Cuándo debo ver a un quiropráctico después de un accidente automovilístico?", a: "Tan pronto como haya sido médicamente autorizado para lesiones no urgentes — idealmente dentro de las primeras 1–2 semanas. El cuidado conservador temprano produce mejores resultados a largo plazo que esperar a que los síntomas se asienten por sí solos, y el tratamiento rápido es generalmente importante para la documentación de seguro y PIP. Muchos síntomas post-accidente surgen 24–72 horas después de la colisión, no inmediatamente." },
        { q: "¿Trabajan con seguro de auto y casos de PIP?", a: "Sí. Trabajamos con seguro de auto, Protección de Lesiones Personales (PIP), MedPay y cobertura de conductor sin seguro/insuficiente. El Dr. Foss documenta el cuidado exhaustivamente para uso del seguro y abogado. Coordinamos con abogados de lesiones personales cuando hay uno involucrado en el caso." },
        { q: "¿Qué lesiones tratan de accidentes automovilísticos?", a: "Tratamos latigazo, esguinces facetarios cervicales y lumbares, síntomas post-conmoción, disfunción de ATM por impacto del airbag, disrupción de la articulación sacroilíaca, contusiones de tejidos blandos y el trauma musculoesquelético acumulativo de las colisiones de vehículos motorizados. SOT es particularmente adecuado para latigazo." },
        { q: "¿Cuánto tiempo dura típicamente el cuidado quiropráctico post-accidente?", a: "La mayoría de los casos de latigazo y post-accidente sin complicaciones se resuelven en 12–20 visitas durante 8–12 semanas. Colisiones más severas, lesión cervical previa o presentación tardía pueden extender el tratamiento a 6 meses. El seguro y PIP típicamente cubren este curso correctivo cuando está médicamente documentado." },
      ],
    },
    "quiropractico-pediatrico": {
      title: "Quiropráctico Pediátrico San Antonio | Pura Vida",
      description: "El Dr. Dan Foss es quiropráctico pediátrico en San Antonio, TX. Cuidado quiropráctico suave para niños desde recién nacidos hasta adolescentes. Evaluación gratuita.",
      keywords: ["quiropráctico pediátrico San Antonio", "quiropráctica para niños San Antonio", "quiropráctico infantil San Antonio TX", "quiropráctico pediátrico San Antonio TX", "quiropráctico para bebés San Antonio", "quiropráctico niños cerca de mí San Antonio"],
      h1: "Quiropráctico Pediátrico en San Antonio",
      image: "/images/dr-foss-adjusting-child.webp",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/j_RHsJ0_EzE"],
      body: [
        "El Dr. Foss es un **Quiropráctico Pediátrico de San Antonio** que se especializa en el cuidado quiropráctico de niños desde recién nacidos hasta adolescentes. Los niños adoran correr, saltar y jugar — pero el impacto acumulado de la actividad infantil, la mala postura y el uso excesivo de dispositivos digitales puede causar subluxaciones vertebrales que afectan su salud por años.",
        "Como quiropráctico pediátrico, recibo llamadas de padres preguntando si su hijo es demasiado pequeño para recibir atención quiropráctica. La respuesta siempre es la misma — nunca es demasiado pronto. La columna vertebral se desarrolla hasta aproximadamente los 25 años, y la mayor parte del daño ocurrido antes de los 18 años es muy difícil de corregir. La evaluación y el cuidado tempranos sientan las bases para la salud espinal de por vida.",
        "Cuando trabajo con niños, el Dr. Foss adopta un enfoque amigable que involucra al niño y hace que el tratamiento se sienta cómodo. Los ajustes para niños son extremadamente suaves — usando solo la presión de un toque suave de la punta del dedo para bebés y niños pequeños. Incluso los niños muy pequeños se sienten cómodos rápidamente una vez que entienden cómo la quiropráctica vuelve a colocar el cuerpo en la alineación correcta.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico Pediátrico", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Por qué debería mi hijo ver a un quiropráctico?", a: "Los niños experimentan innumerables estrés físicos — el nacimiento mismo, caídas durante los primeros pasos, mochilas, tiempo frente a pantallas, deportes y el efecto acumulativo de patrones posturales. La quiropráctica pediátrica aborda estos estrés antes de que se conviertan en patrones musculoesqueléticos adultos. El Dr. Foss tiene más de 23 años de experiencia pediátrica tratando niños desde la infancia hasta los años adolescentes." },
        { q: "¿Qué condiciones pediátricas trata el Dr. Foss?", a: "Las preocupaciones pediátricas comunes incluyen cólicos, infecciones de oído, tortícolis, monitoreo de escoliosis, lesiones deportivas, dolores de crecimiento, tensión muscular relacionada con TDAH, problemas posturales (cuello de texto, patrones de mochila), estreñimiento, enuresis y enfermedades recurrentes. Muchos de estos tienen un componente estructural que la quiropráctica pediátrica aborda directamente." },
        { q: "¿Son seguros los ajustes quiroprácticos pediátricos?", a: "Sí — la quiropráctica pediátrica usa técnicas específicamente apropiadas para las columnas en desarrollo de los niños: suaves, de baja fuerza y adaptadas a la edad. El Dr. Foss nunca usa manipulación de intensidad adulta en niños. El perfil de seguridad de la quiropráctica pediátrica en manos entrenadas está bien establecido." },
        { q: "¿Con qué frecuencia debería mi hijo ver a un quiropráctico?", a: "La frecuencia depende de la situación específica del niño. Los problemas agudos (lesión deportiva, dolor relacionado con el crecimiento) típicamente necesitan 4–8 visitas. Los niños con preocupaciones continuas se benefician de chequeos mensuales. Muchas familias traen a los niños periódicamente durante los brotes de crecimiento para evaluación preventiva." },
      ],
    },
    "quiropractico-prenatal": {
      title: "Quiropráctico Prenatal San Antonio | Pura Vida Chiropractic",
      description: "Cuidado quiropráctico prenatal suave en San Antonio, TX. El Dr. Dan Foss usa la Técnica Webster para balancear la pelvis para un embarazo y parto más fácil.",
      keywords: ["quiropráctico prenatal San Antonio", "Técnica Webster San Antonio", "quiropráctica embarazo San Antonio TX", "quiropráctico embarazo San Antonio TX", "Técnica Webster San Antonio TX", "quiropráctico prenatal cerca de mí San Antonio"],
      h1: "Quiropráctico Prenatal en San Antonio",
      image: "/images/pregnancy-chiropractic.png",
      body: [
        "El Dr. Foss trata a las mujeres embarazadas con ajustes quiroprácticos suaves para ayudar con el dolor de espalda, la incomodidad pélvica y los cambios posturales que conlleva el embarazo. Usa la **Técnica Webster** para equilibrar la pelvis y proporcionar al bebé el espacio óptimo en el útero.",
        "Según la Asociación Americana de Embarazo, la quiropráctica es un tratamiento muy seguro y efectivo durante el embarazo. Los cambios fisiológicos del embarazo — abdomen prominente, aumento de la curvatura lumbar, cambios pélvicos y adaptaciones posturales — pueden causar desalineaciones en la columna o las articulaciones que responden bien a la corrección quiropráctica.",
        "**Equilibrio pélvico y Técnica Webster:** Cuando la pelvis está desalineada, puede reducir el espacio disponible para el bebé en desarrollo — una condición llamada restricción intrauterina. La Técnica Webster aborda específicamente la alineación del sacro y la pelvis para optimizar el entorno intrauterino y favorecer un parto natural y no invasivo.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico Prenatal", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Es seguro el cuidado quiropráctico prenatal?", a: "Sí — la quiropráctica prenatal es una de las áreas más estudiadas y de menor riesgo de la práctica quiropráctica. La Asociación Americana de Embarazo reconoce la quiropráctica como un tratamiento seguro y efectivo durante el embarazo. El Dr. Foss está certificado en Técnica Webster y usa una mesa especializada para embarazo sin presión abdominal." },
        { q: "¿Qué es la Técnica Webster?", a: "La Técnica Webster es un protocolo quiropráctico específico desarrollado para el embarazo que equilibra el sacro, libera los ligamentos redondos y elimina la tensión del ligamento uterino. Al restaurar la biomecánica pélvica simétrica, le da al bebé el espacio óptimo para asumir la posición ideal de cabeza abajo." },
        { q: "¿Cuándo debo comenzar el cuidado quiropráctico prenatal?", a: "Lo más pronto posible — el cuidado en el primer trimestre aborda los cambios ligamentarios hormonales tempranos antes de que creen patrones pélvicos asimétricos. Dicho esto, nunca es demasiado tarde: muchas pacientes comienzan en el tercer trimestre para problemas específicos como ciática, posición podálica o preparación para el parto." },
        { q: "¿Con qué frecuencia debo ver a un quiropráctico durante el embarazo?", a: "La mayoría de las pacientes embarazadas ven al Dr. Foss cada 2–3 semanas durante el primer y segundo trimestre, aumentando a semanalmente en las últimas 6 semanas. Las pacientes con preocupaciones específicas (presentación podálica, dolor lumbar severo, cesárea previa) a menudo se benefician de cuidado más frecuente." },
      ],
    },
    "quiropractico-embarazo": {
      title: "Quiropráctica para el Embarazo San Antonio | Pura Vida",
      description: "Quiropráctica durante el embarazo en San Antonio, TX. El Dr. Dan Foss ayuda a las futuras mamás a estar cómodas durante los 9 meses con atención quiropráctica segura y suave.",
      keywords: ["quiropráctico embarazo San Antonio", "quiropráctica durante el embarazo San Antonio", "Técnica Webster San Antonio TX", "quiropráctico embarazo San Antonio TX", "quiropráctico prenatal San Antonio", "dolor espalda embarazo San Antonio"],
      h1: "Quiropráctica para el Embarazo en San Antonio",
      image: "/images/pregnancy.webp",
      videos: ["https://www.youtube.com/embed/IeiU-Q-ljik", "https://www.youtube.com/embed/1fiRlACQjdk", "https://www.youtube.com/embed/PiY9pCDDZTI", "https://www.youtube.com/embed/MTkj64jX_bw", "https://www.youtube.com/embed/FtiuiyKG4nc", "https://www.youtube.com/embed/3qQzuBEmPE4"],
      body: [
        "El embarazo pone mucha presión en su columna vertebral y sistema nervioso. A medida que pasan los meses, el peso creciente en el área abdominal desplaza su centro de gravedad y obliga a su columna a adaptarse. Para los meses 6–9, muchas mamás manejan una postura muy desequilibrada solo para moverse. **La quiropráctica durante el embarazo** ayuda a su cuerpo a manejar estos cambios con gracia — reduciendo el dolor, mejorando la movilidad y preparándola para el parto.",
        "El Dr. Foss ofrece atención quiropráctica para el embarazo que ayuda al bebé a asumir su posición óptima para el nacimiento. La **Técnica Webster** es un ajuste quiropráctico específico que reduce el riesgo de presentación de nalgas. Idealmente debe comenzarse tan pronto como descubra que su bebé está en posición de nalgas. El Dr. Foss está capacitado por la Asociación Internacional de Pediatría Quiropráctica (ICPA).",
        "**Nunca es demasiado tarde — ni demasiado pronto.** Una visita en el primer trimestre le da a su cuerpo la mejor preparación para los meses venideros. Pero incluso en sus últimas semanas, la quiropráctica puede reducir el dolor, mejorar la alineación pélvica y preparar su cuerpo para el trabajo de parto. Muchas madres que reciben cuidado durante el embarazo reportan partos más cortos y fáciles.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica para el Embarazo", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Es seguro el cuidado quiropráctico durante el embarazo?", a: "Sí — la quiropráctica es segura durante los tres trimestres cuando es entregada por un proveedor certificado en Técnica Webster como el Dr. Foss. La mesa de embarazo tiene un recorte para el abdomen, no se aplica fuerza al vientre, y las técnicas de ajuste se adaptan a la laxitud ligamentaria hormonal del embarazo." },
        { q: "¿Cómo puede ayudar la quiropráctica con el dolor de espalda relacionado con el embarazo?", a: "El dolor de espalda del embarazo viene del efecto combinado del cambio postural (lordosis), laxitud ligamentaria hormonal, aumento de peso e inestabilidad pélvica. La Técnica Webster aborda todos estos al restaurar el equilibrio pélvico simétrico y reducir la carga asimétrica que impulsa la mayoría del dolor lumbar y de cintura pélvica del embarazo. La mayoría de las pacientes ven alivio sustancial dentro de 2–4 visitas." },
        { q: "¿Puede la quiropráctica ayudar a voltear un bebé en posición podálica?", a: "La Técnica Webster crea las condiciones pélvicas y ligamentosas que permiten que el bebé auto-rote a la posición de cabeza abajo. Los quiroprácticos no voltean físicamente a los bebés (eso es la versión cefálica externa, realizada por un obstetra). La mayoría de los bebés podálicos se voltean dentro de 2–4 visitas Webster cuando el tratamiento comienza entre las 28–34 semanas." },
        { q: "¿Me ayudará el cuidado quiropráctico a tener un parto más fácil?", a: "Muchas madres que reciben cuidado de Técnica Webster durante el embarazo reportan partos más cortos y menos complicados. El mecanismo es doble: posicionamiento fetal óptimo (que permite que el parto progrese mecánicamente como está diseñado) y una pelvis equilibrada (que evita los estancamientos asimétricos que a menudo llevan a intervenciones)." },
      ],
    },
    "quiropractico-infantes": {
      title: "Quiropráctico para Bebés San Antonio | Pura Vida",
      description: "Cuidado quiropráctico suave para bebés en San Antonio, TX. El Dr. Dan Foss evalúa recién nacidos para subluxaciones que pueden causar cólico, reflujo y problemas de lactancia.",
      keywords: ["quiropráctico para bebés San Antonio", "quiropráctica recién nacido San Antonio", "quiropráctico infantil San Antonio TX", "quiropráctico bebés San Antonio TX", "quiropráctico para bebés cerca de mí San Antonio", "quiropráctico neonatal San Antonio"],
      h1: "Bebés y Quiropráctica en San Antonio",
      image: "/images/infants-chiropractic.png",
      body: [
        "La primera subluxación que experimenta un bebé es frecuentemente el proceso del parto mismo — el jalón y la torsión de la cabeza durante el nacimiento. Estas subluxaciones pueden agravarse aún más con un parto con fórceps, ventosa o cesárea. Las **subluxaciones** son desalineaciones en la columna que causan interferencia en el sistema nervioso, lo que puede tener impactos significativos en la función y salud del cuerpo.",
        "Cuando un bebé tiene subluxaciones, puede provocar condiciones como: **Cólico, Reflujo, Problemas de lactancia / Frenillo lingual, Estreñimiento, Dificultad para dormir, Alergias, Infecciones de oído** y **Falta de desarrollo**. Muchas familias optan por hacer evaluar a sus bebés lo antes posible después del nacimiento. El Dr. Foss recomienda a sus pacientes embarazadas que traigan a sus recién nacidos para evaluación dentro de los primeros días o semanas de vida.",
        "Los ajustes para bebés son **extremadamente suaves** — el Dr. Foss usa solo la presión de un toque suave de la punta del dedo. Además de la evaluación espinal, el Dr. Foss usa **Quiropráctica Craneal** para evaluar y ajustar suavemente los huesos craneales del cráneo y la cara, lo que puede asistir con la lactancia y liberar restricciones en el sistema cráneo-sacral que afectan el desarrollo del bebé.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico para Bebés", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Es segura la quiropráctica para recién nacidos y bebés?", a: "Sí — la quiropráctica pediátrica usa solo presión a nivel de la yema del dedo, sin chasquidos, torsiones o fuerza. El Dr. Foss tiene años de experiencia con bebés desde el nacimiento en adelante y selecciona la técnica más suave posible. El perfil de seguridad de la quiropráctica pediátrica en manos entrenadas está bien establecido en la literatura." },
        { q: "¿Qué condiciones infantiles se benefician del cuidado quiropráctico?", a: "Las condiciones infantiles comunes que el Dr. Foss trata incluyen cólico, reflujo, dificultades de lactancia y alimentación, tortícolis, estreñimiento, infecciones de oído recurrentes, alteraciones del sueño y los efectos acumulativos del trauma de nacimiento (extracción al vacío, fórceps, parto prolongado, cesárea). La quiropráctica craneal aborda el moldeo craneal y la forma asimétrica de la cabeza (plagiocefalia)." },
        { q: "¿Qué tan pronto después del nacimiento puede ser evaluado mi bebé?", a: "Muchos padres traen a los recién nacidos durante las primeras semanas de vida — antes es generalmente mejor para resolver los patrones de tensión relacionados con el nacimiento antes de que se acumulen. El cuidado puede comenzar tan pronto como los primeros días después del parto. La evaluación es no invasiva y los ajustes suaves usan solo presión con la yema del dedo." },
        { q: "¿Cuántas visitas necesita típicamente un bebé?", a: "Muchos bebés responden dentro de 1–3 visitas — a menudo dramáticamente. La mejora estable típicamente se desarrolla durante 4–8 visitas a lo largo de 3–6 semanas. Los casos que involucran dificultad de alimentación, tortícolis o frenillo lingual pueden requerir cuidado integrado más prolongado." },
      ],
    },
    "quiropractica-pediatrica": {
      title: "Quiropráctico Pediátrico y Prenatal San Antonio | Pura Vida",
      description:
        "Atención quiropráctica pediátrica y prenatal gentil en San Antonio, TX. Técnica SOT segura para todas las edades. Evaluación gratuita para mamá y bebé.",
      keywords: ["quiropráctico pediátrico San Antonio", "quiropráctica prenatal San Antonio", "quiropráctica embarazo San Antonio TX", "quiropráctico pediátrico prenatal San Antonio TX", "quiropráctico bebés San Antonio", "quiropráctico embarazo San Antonio"],
      h1: "Quiropráctica Pediátrica y Prenatal en San Antonio",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/IeiU-Q-ljik", "https://www.youtube.com/embed/1fiRlACQjdk"],
      body: [
        "Los niños y las futuras mamás merecen la atención más gentil y efectiva disponible. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC está capacitado en **quiropráctica pediátrica y prenatal** utilizando la técnica SOT — uno de los enfoques más seguros para estas poblaciones especiales.",
        "Para las **mujeres embarazadas**, el SOT ayuda a aliviar el dolor pélvico, la ciática, la molestia del ligamento redondo y prepara la pelvis para un parto óptimo. Para los **bebés y niños**, los ajustes SOT suaves abordan el trauma del nacimiento, los cólicos, las infecciones de oído, la tortícolis y las preocupaciones del desarrollo.",
        "Los ajustes para bebés utilizan una presión no mayor que la de la punta de un dedo. Nuestra consulta en San Antonio es un espacio acogedor para familias en cada etapa de la vida.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica Pediátrica y Prenatal", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Por qué combinar el cuidado pediátrico y prenatal bajo una sola práctica?", a: "La quiropráctica pediátrica y prenatal comparten el mismo enfoque fundamental — técnicas suaves y de baja fuerza que respetan la fisiología única de los cuerpos en crecimiento y las futuras madres. SOT y la Técnica Webster forman la base de ambas. Muchas familias encuentran conveniente tener una sola práctica para el cuidado prenatal de mamá, la evaluación del recién nacido y el cuidado pediátrico continuo." },
        { q: "¿Es la técnica utilizada diferente para niños vs adultos?", a: "Sí. La quiropráctica adulta típicamente usa más fuerza; la quiropráctica pediátrica y prenatal específicamente usa presión a nivel de la yema del dedo para bebés, contacto ligero modificado para niños mayores y bloqueo suave de protocolo Webster para pacientes embarazadas. El Dr. Foss adapta la técnica a la edad, tamaño y condición de cada paciente." },
        { q: "¿Es SOT seguro tanto para niños como para mujeres embarazadas?", a: "Sí — SOT es uno de los sistemas quiroprácticos más seguros precisamente porque usa técnicas suaves y de baja fuerza. Es el sistema quiropráctico más comúnmente utilizado para el cuidado pediátrico y prenatal porque el mismo enfoque de baja fuerza funciona en ambas poblaciones." },
        { q: "¿Con qué frecuencia deben los niños y las mamás embarazadas ver a un quiropráctico?", a: "Embarazo: cada 2–3 semanas al principio, semanalmente en las últimas 6 semanas. Recién nacidos: según sea necesario para problemas específicos, típicamente 4–8 visitas durante unas semanas. Niños: según sea necesario para problemas relacionados con el crecimiento, lesiones deportivas o preocupaciones posturales." },
      ],
    },
    "terapia-ondas-de-choque": {
      title: "Terapia de Ondas de Choque San Antonio | Pura Vida",
      description:
        "Terapia de ondas de choque para dolor crónico en San Antonio, TX. Tratamiento no invasivo para tendones, fascitis plantar y más. Evaluación gratuita.",
      keywords: ["terapia ondas de choque San Antonio", "ESWT San Antonio", "tratamiento dolor crónico San Antonio TX", "terapia ondas de choque San Antonio TX", "terapia extracorpórea San Antonio", "fascitis plantar ondas de choque San Antonio"],
      h1: "Terapia de Ondas de Choque en San Antonio",
      body: [
        "La **Terapia de Ondas de Choque Extracorpóreas (ESWT)** envía ondas acústicas de alta energía al tejido dañado, desencadenando una potente respuesta regenerativa. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC utiliza la terapia de ondas de choque para tratar condiciones musculoesqueléticas crónicas que no han respondido a otros tratamientos.",
        "La terapia de ondas de choque está clínicamente probada para condiciones como **fascitis plantar**, tendinopatía de Aquiles, codo de tenista, tendinitis calcificante de hombro, tendinopatía rotuliana y dolor de cadera. Descompone las calcificaciones, estimula la producción de colágeno y aumenta el flujo sanguíneo.",
        "La mayoría de los pacientes requieren 3–6 sesiones con una semana de separación. El procedimiento dura 10–15 minutos y se realiza en nuestra consulta de San Antonio sin anestesia ni tiempo de recuperación.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia de Ondas de Choque (ESWT)", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "¿Cuál es la diferencia entre Ondas de Choque (ESWT) y SoftWave?", a: "Ambas entregan energía acústica para estimular la regeneración tisular, pero ESWT usa ondas focalizadas de alta energía en un solo punto, mientras que SoftWave usa ondas no focalizadas de enfoque amplio sobre un área más grande. ESWT focalizada es más agresiva y típicamente más incómoda; SoftWave es más suave y mejor tolerada. Ambas están aprobadas por la FDA. El Dr. Foss usa SoftWave como tecnología regenerativa principal por la mejor experiencia del paciente." },
        { q: "¿Qué condiciones trata la terapia de ondas de choque?", a: "Las ondas de choque están clínicamente probadas para fascitis plantar, tendinopatía de Aquiles, codo de tenista y golfista, tendinitis calcárea del hombro, tendinopatía patelar, bursitis trocantérica, dolor de cadera y condiciones musculoesqueléticas crónicas que se han estancado con cuidado conservador." },
        { q: "¿Cuántas sesiones de ondas de choque son típicas?", a: "La mayoría de los pacientes necesitan 3–6 sesiones espaciadas una semana. El procedimiento toma 10–15 minutos y no requiere anestesia ni tiempo de inactividad. Las condiciones crónicas pueden requerir sesiones adicionales. Los resultados a menudo continúan mejorando durante 4–6 semanas después del tratamiento final." },
        { q: "¿Duele la terapia de ondas de choque?", a: "ESWT focalizada puede ser incómoda; SoftWave de enfoque amplio es mucho mejor tolerada. La intensidad se ajusta al nivel de comodidad de cada paciente. La mayoría de los pacientes describen la sensación como una presión de golpeteo en lugar de dolor. No se necesita anestésico." },
      ],
    },
    "laser-clase-iv": {
      title: "Terapia Láser Clase IV San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia láser Clase IV en San Antonio, TX. Sanación profunda para artritis, dolor de disco, lesiones deportivas y neuropatía. Reserve su consulta gratuita.",
      keywords: ["láser clase IV San Antonio", "terapia láser San Antonio TX", "fotobiomodulación San Antonio", "láser clase IV San Antonio TX", "terapia láser profunda San Antonio", "láser terapéutico San Antonio"],
      h1: "Terapia Láser Clase IV en San Antonio",
      body: [
        "La **Terapia Láser Clase IV** (fotobiomodulación) utiliza longitudes de onda específicas de luz para penetrar profundamente en los tejidos, estimulando la reparación celular y reduciendo la inflamación y el dolor. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC incorpora el láser Clase IV como un poderoso complemento a la atención quiropráctica SOT.",
        "El láser Clase IV es efectivo para una amplia gama de condiciones, incluyendo **hernia de disco**, artritis, neuropatía periférica, lesiones deportivas, recuperación post-quirúrgica y dolor muscular crónico. El láser estimula la actividad mitocondrial, acelerando la producción de ATP y la reparación tisular.",
        "Las sesiones de terapia láser son indoloras — la mayoría de los pacientes sienten un calor suave — y duran típicamente 5–15 minutos. Muchos pacientes de San Antonio notan reducción del dolor y mejor función en sus primeros tratamientos.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia Láser Clase IV", "procedureType": "Physical Therapy" },
      faqs: [
        { q: "¿Qué es la terapia con láser Clase IV y cómo funciona?", a: "La terapia con láser Clase IV (fotobiomodulación, PBM) usa longitudes de onda específicas de luz (típicamente 800–980 nm) a niveles de potencia terapéutica (10–15 vatios) para penetrar profundamente en los tejidos. La energía de la luz estimula la actividad mitocondrial, acelerando la producción de ATP y desencadenando una cascada de efectos curativos — inflamación reducida, circulación mejorada, reparación celular más rápida y reducción del dolor." },
        { q: "¿Qué condiciones trata el láser Clase IV?", a: "El láser Clase IV es efectivo para artritis, hernia discal, neuropatía periférica (incluyendo diabética e inducida por quimioterapia), ciática, fascitis plantar, lesiones deportivas, recuperación post-quirúrgica, dolor muscular crónico, tendinopatía e inflamación de ATM. Es particularmente valioso para condiciones donde la inflamación profunda de tejidos es un impulsor." },
        { q: "¿Duele la terapia con láser?", a: "No — la terapia con láser es indolora. La mayoría de los pacientes sienten una calidez suave y cómoda mientras la energía láser penetra. Las sesiones típicamente duran 5–15 minutos dependiendo del área tratada. Sin anestésico, sin tiempo de inactividad, sin período de recuperación requerido después de la sesión." },
        { q: "¿Cuántas sesiones de terapia con láser se necesitan para ver resultados?", a: "La mayoría de los pacientes notan dolor reducido y función mejorada dentro de las primeras 3–5 sesiones. Las condiciones crónicas típicamente requieren 8–15 sesiones para el efecto completo. La terapia con láser a menudo se combina con ajuste quiropráctico y terapia SoftWave para beneficios compuestos." },
      ],
    },

    // ── New services ───────────────────────────────────────────────────────
    "chiropractic-care": {
      title: "Quiropráctico en San Antonio, TX | Pura Vida Chiropractic",
      description:
        "Atención quiropráctica experta en San Antonio, TX. El Dr. Dan Foss usa la técnica SOT para tratar la causa del dolor. Evaluación gratuita disponible.",
      keywords: ["quiropráctico San Antonio TX", "cuidado quiropráctico San Antonio", "quiropráctico San Antonio", "mejor quiropráctico San Antonio", "quiropráctico cerca de mí San Antonio", "ajuste quiropráctico San Antonio TX", "doctor dolor de espalda San Antonio"],
      h1: "Cuidado Quiropráctico en San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      videos: ["https://www.youtube.com/embed/4PVQjZ8lAH0"],
      body: [
        "El **cuidado quiropráctico** es el mantenimiento de la salud de la columna vertebral, los discos, los nervios relacionados y la geometría ósea. Se enfoca en tratar las causas de los problemas físicos, no solo los síntomas. En Pura Vida Quiropráctica, el Dr. Dan Foss utiliza la avanzada **Técnica Sacro-Occipital (SOT)** para restaurar la función espinal adecuada.",
        "Con los ajustes quiroprácticos, le da a su cuerpo la mejor oportunidad posible de prevenir lesiones y volver a un estado de salud óptimo. Muchos pacientes reportan una sensación de alivio después de un ajuste, junto con una disminución significativa de dolores de cabeza, dolor de espalda, dolor de cuello y un bienestar general mejorado.",
        "El enfoque del Dr. Foss va más allá del alivio del dolor — se trata de restaurar la capacidad innata de su cuerpo para sanar y funcionar al más alto nivel.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Qué hace realmente un quiropráctico?", a: "Los quiroprácticos diagnostican y tratan trastornos musculoesqueléticos — particularmente aquellos que involucran la columna, las articulaciones y el sistema nervioso. La intervención principal es el ajuste quiropráctico: una fuerza precisa y controlada aplicada a una articulación para restaurar el movimiento adecuado y reducir la irritación nerviosa. El Dr. Foss usa más de 300 técnicas, con la Técnica Sacro-Occipital (SOT) como enfoque principal porque es suave, completa y aborda todo el cuerpo como una unidad integrada." },
        { q: "¿Qué condiciones puede tratar el cuidado quiropráctico?", a: "El Dr. Foss trata más de 99 condiciones distintas — desde patrones comunes como dolor de espalda, dolor de cuello, dolores de cabeza, ciática y problemas de disco hasta áreas especializadas como quiropráctica de embarazo (certificado Webster), cuidado pediátrico, ATM, vértigo, fibromialgia, lesiones de accidentes automovilísticos y síndrome post-conmoción. La lista completa está en /es/conditions." },
        { q: "¿Es seguro el cuidado quiropráctico?", a: "Sí — el cuidado quiropráctico tiene un historial de seguridad muy fuerte, particularmente cuando se entrega usando técnicas suaves como SOT en lugar de manipulación de alta velocidad. Los eventos adversos son extremadamente raros. El Dr. Foss detecta contraindicaciones antes de iniciar el cuidado y selecciona la técnica según la edad, condición y tolerancia de cada paciente." },
        { q: "¿Cuántas visitas quiroprácticas necesito?", a: "La mayoría de las condiciones requieren una fase correctiva inicial de 8–20 visitas, seguida de cuidado de mantenimiento gradual. Los problemas agudos a menudo se resuelven en 4–8 visitas; las condiciones crónicas típicamente necesitan 12–24 visitas para resolución estable. El Dr. Foss proporciona un plan de tratamiento claro en la primera visita y reevalúa cada 4–6 visitas." },
      ],
    },
    "cranial-chiropractic": {
      title: "Quiropráctico Craneal en San Antonio TX | Pura Vida",
      description:
        "Quiropráctico craneal en San Antonio, TX. El Dr. Dan Foss tiene certificación SOT Avanzada y ofrece quiropráctica craneal suave para migrañas, ATM, vértigo, post-conmoción cerebral y problemas craneales infantiles. 23+ años de experiencia. Primera visita gratis. (210) 685-1994.",
      keywords: ["quiropráctico craneal San Antonio", "quiropráctica craneal San Antonio", "quiropráctico craneal en San Antonio", "quiropráctico craneal San Antonio TX", "ajuste craneal San Antonio", "terapia craneosacral San Antonio", "quiropráctico SOT craneal San Antonio", "quiropráctico ATM San Antonio", "quiropráctico post-conmoción San Antonio", "quiropráctico craneal infantil San Antonio"],
      h1: "Quiropráctico Craneal en San Antonio, TX",
      image: "/images/dr-foss-adjusting-neck.webp",
      body: [
        "El Dr. Dan Foss es un **quiropráctico craneal en San Antonio** con certificación SOT Avanzada (Técnica Sacro-Occipital) por SORSI — uno de los pocos quiropráctico capacitado para realizar ajustes quiroprácticos craneales a este nivel. La quiropráctica craneal es el estudio del cráneo y la restauración de la función craneal adecuada: la relación entre el cráneo, el sacro y el sistema meníngeo que rodea el cerebro y la médula espinal.",
        "Cuando los huesos craneales están desalineados o el sistema meníngeo está bajo tensión anormal, los efectos abarcan casi todos los sistemas: migrañas crónicas y dolores de cabeza, disfunción de la ATM y dolor de mandíbula, vértigo y tinnitus, síntomas post-conmoción cerebral y lesión cerebral traumática (LCT), dificultades de alimentación/agarre/sueño infantiles, plagiocefalia (síndrome de cabeza plana), infecciones recurrentes de oído, presión sinusal, problemas de enfoque y comportamiento tipo TDAH en niños, e incluso retraso del habla.",
        "<h2>Qué condiciones trata la quiropráctica craneal</h2>",
        "**Migrañas y dolores de cabeza crónicos** — particularmente los que no responden a medicamentos. La mayoría de los patrones de migraña se originan en restricción craneal en los huesos temporal, occipital o esfenoidal. El trabajo craneal suave libera esa restricción y el patrón de migraña a menudo se resuelve en 4-12 visitas.",
        "**Disfunción de la ATM** — la articulación temporomandibular se encuentra entre el hueso temporal y la mandíbula. La quiropráctica craneal aborda tanto la articulación COMO el entorno craneal alrededor.",
        "**Recuperación post-conmoción cerebral y LCT** — los impactos en la cabeza alteran el ritmo craneal y los patrones de tensión meníngea. La quiropráctica craneal es uno de los pocos tratamientos que aborda directamente las secuelas estructurales de la conmoción.",
        "**Vértigo, tinnitus y síntomas del oído interno** — los huesos temporales albergan el oído interno. Las correcciones craneales en el hueso temporal a menudo resuelven el componente posicional del VPPB.",
        "**Problemas craneales infantiles** — tortícolis, dificultades de agarre, cólicos, plagiocefalia. El nacimiento mismo es un evento craneal mayor.",
        "<h2>Cómo funciona el ajuste quiropráctico craneal</h2>",
        "La quiropráctica craneal usa contactos extremadamente suaves y precisos en el cráneo y los tejidos circundantes — típicamente la presión de un dedo descansando sobre la cabeza. No hay sonidos, no hay movimientos bruscos, no hay fuerza. La técnica se basa en el ritmo craneal del cuerpo (el impulso rítmico craneal, o CRI) para guiar dónde y cómo aplicar el contacto.",
        "Las sesiones típicamente duran 20-30 minutos para adultos, 10-20 minutos para niños y 5-15 minutos para bebés. La mayoría de los pacientes describen la experiencia como profundamente relajante — muchos se duermen durante el trabajo craneal.",
        "<h2>Por qué nuestra quiropráctica craneal es diferente</h2>",
        "Tres cosas. **Primero: la certificación.** El Dr. Foss tiene certificación SOT Avanzada por SORSI — la organización certificadora para quiropráctica craneal SOT. Es un proceso de capacitación de varios años más allá de la licencia DC que muy pocos quiroprácticos completan. **Segundo: 23 años de reconocimiento de patrones craneales** en EE.UU., Costa Rica, España, Irlanda y los Países Bajos. **Tercero: integración con todo el sistema** — el trabajo craneal se combina con bloqueo pélvico sacro, ajuste visceral CMRT y terapias adyuvantes.",
      ],
      faqs: [
        {
          q: "¿Qué es la quiropráctica craneal y cómo se diferencia de la quiropráctica regular?",
          a: "La quiropráctica craneal es la aplicación de los principios de ajuste quiropráctico a los huesos del cráneo en lugar de solo la columna. La quiropráctica estándar aborda las vértebras espinales; la quiropráctica craneal también aborda los huesos temporal, occipital, esfenoidal, frontal, parietal y otros huesos craneales — y el tejido conectivo meníngeo que envuelve el cerebro y la médula espinal. La técnica es dramáticamente más suave (presión de dedo, sin sonidos) y es particularmente efectiva para migrañas, ATM, vértigo, síntomas post-conmoción y problemas craneales infantiles.",
        },
        {
          q: "¿Es segura la quiropráctica craneal?",
          a: "Sí — la quiropráctica craneal es una de las formas más seguras de cuidado quiropráctico porque usa contacto extremadamente ligero (la presión de un dedo) en lugar de ajustes de alta velocidad. Es segura para bebés desde el nacimiento, pacientes ancianos, pacientes post-quirúrgicos y pacientes con osteoporosis o fragilidad. Los efectos secundarios son raros. Muchos pacientes se duermen durante las sesiones porque el trabajo es muy gentil.",
        },
        {
          q: "¿Cuántas sesiones de quiropráctica craneal necesitaré?",
          a: "Problemas agudos (conmoción reciente, episodio de migraña único, problema de alimentación infantil) a menudo se resuelven en 4-8 sesiones. Patrones crónicos (años de migrañas, ATM de larga data, síntomas post-conmoción persistentes) típicamente necesitan 12-20 sesiones durante 8-12 semanas, luego un horario de mantenimiento.",
        },
        {
          q: "¿Puede un quiropráctico craneal ayudar con migrañas que no han respondido a medicamentos?",
          a: "Frecuentemente, sí — particularmente migrañas con origen cervical o craneal (que es la mayoría). Los huesos temporal, occipital y esfenoidal albergan generadores clave de migraña. La quiropráctica craneal aborda la causa estructural directamente. Muchos pacientes que vemos han probado 3+ medicamentos sin resolución y ven su frecuencia de migraña caer 50-80% después de un curso de cuidado craneal.",
        },
        {
          q: "¿Puede la quiropráctica craneal ayudar con síntomas post-conmoción o LCT?",
          a: "Sí — la quiropráctica craneal es uno de los pocos tratamientos que aborda directamente las secuelas estructurales de la conmoción. Los impactos en la cabeza alteran el ritmo craneal, crean tensión dural y desplazan los huesos craneales en formas que las imágenes a menudo pasan por alto.",
        },
        {
          q: "¿Dónde puedo encontrar un quiropráctico craneal en San Antonio?",
          a: "Pura Vida Chiropractic en 2318 NW Military Hwy Suite 103, San Antonio, TX 78231. El Dr. Dan Foss tiene certificación SOT Avanzada y es uno de los pocos quiropráctico craneal en San Antonio. Fácil de alcanzar desde Stone Oak, Castle Hills, Alamo Heights, Olmos Park, Helotes, Boerne y el centro de San Antonio. Estacionamiento gratis. Llame al (210) 685-1994 para programar su primera visita gratis. Atención bilingüe (inglés/español).",
        },
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica Craneal", "procedureType": "Chiropractic" },
    },
    "infant-chiropractic": {
      title: "Quiropráctico para Bebés San Antonio | Pura Vida",
      description:
        "Cuidado quiropráctico seguro y suave para bebés en San Antonio, TX. El Dr. Dan Foss ayuda a los recién nacidos con cólico, tortícolis y problemas de alimentación.",
      keywords: ["quiropráctico para bebés San Antonio", "quiropráctica neonatal San Antonio", "quiropráctico recién nacido San Antonio TX", "quiropráctico bebés San Antonio TX", "quiropráctico para bebés cerca de mí San Antonio", "quiropráctico infantil San Antonio"],
      h1: "Quiropráctica para Bebés en San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      body: [
        "El proceso de nacimiento — incluso en circunstancias ideales — ejerce fuerzas significativas sobre la columna vertebral y el sistema nervioso del recién nacido. Las desalineaciones adquiridas durante el parto pueden afectar la **alimentación, el sueño, la digestión y el desarrollo general** del bebé.",
        "Los ajustes quiroprácticos para bebés usan no más presión que un toque suave de la yema del dedo — son completamente seguros, gentiles y apropiados para los recién nacidos. El Dr. Foss recomienda que los padres traigan a sus bebés poco después del nacimiento para una evaluación de bienestar post-parto.",
        "Las condiciones comunes tratadas en bebés incluyen **cólico, dificultades de alimentación, tortícolis, reflujo y trastornos del sueño**. La intervención temprana puede prevenir que estos problemas afecten el desarrollo de su bebé a largo plazo.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica para Bebés", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Qué tan pronto puede un bebé ver a un quiropráctico?", a: "La quiropráctica para bebés puede comenzar en los primeros días de vida. Antes es generalmente mejor — el objetivo es liberar los patrones de tensión relacionados con el nacimiento antes de que se compongan y afecten la alimentación, el sueño y el desarrollo. El Dr. Foss tiene amplia experiencia con recién nacidos y usa solo presión a nivel de la yema del dedo." },
        { q: "¿Cómo se siente un ajuste quiropráctico infantil?", a: "Los ajustes infantiles usan no más presión que la que aplicaría para probar la madurez de un tomate — típicamente la presión de la yema del dedo sobre un párpado cerrado. No hay chasquidos, torsiones ni fuerza. La mayoría de los bebés están tranquilos o se duermen durante la sesión." },
        { q: "¿Qué problemas infantiles se benefician del cuidado quiropráctico?", a: "Las condiciones comunes incluyen cólico, reflujo, dificultades de lactancia y alimentación, tortícolis (inclinación de cabeza), estreñimiento, infecciones de oído recurrentes, alteraciones del sueño y los efectos acumulativos del trauma de nacimiento (extracción al vacío, fórceps, parto prolongado, cesárea). El trabajo craneal aborda la forma asimétrica de la cabeza (plagiocefalia)." },
        { q: "¿Está respaldada por evidencia la quiropráctica infantil?", a: "Sí — el cuerpo de evidencia para la quiropráctica pediátrica, particularmente para cólico y problemas relacionados con la alimentación, ha crecido sustancialmente. La Asociación Internacional de Quiropráctica Pediátrica (ICPA) mantiene la literatura de investigación. El Dr. Foss ha entrenado extensamente en quiropráctica pediátrica." },
      ],
    },
    "pediatric-chiropractic": {
      title: "Quiropráctico Pediátrico San Antonio | Pura Vida",
      description:
        "Quiropráctica pediátrica especializada en San Antonio, TX. El Dr. Dan Foss ha atendido a niños desde recién nacidos hasta adolescentes por 23+ años.",
      keywords: ["quiropráctico pediátrico San Antonio", "quiropráctica para niños San Antonio", "quiropráctico infantil San Antonio TX", "quiropráctico pediátrico San Antonio TX", "quiropráctico niños cerca de mí San Antonio", "quiropráctico para bebés San Antonio"],
      h1: "Quiropráctico Pediátrico en San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      body: [
        "El Dr. Foss es un quiropráctico pediátrico de San Antonio que se ha especializado en el cuidado de niños desde recién nacidos hasta adolescentes durante más de **23 años**. Los niños aman correr, saltar y jugar — y aunque sus huesos son más resistentes que los de los adultos, la infancia es en realidad uno de los momentos más importantes para recibir cuidado quiropráctico.",
        "Las caídas, las lesiones deportivas, las mochilas pesadas, la mala postura por el uso de dispositivos e incluso el proceso de nacimiento pueden crear desalineaciones espinales que afectan el **desarrollo del sistema nervioso, la función inmunológica, el sueño y el comportamiento** del niño.",
        "Las condiciones pediátricas comunes que trata el Dr. Foss incluyen cólico, infecciones de oído, tortícolis, escoliosis, lesiones deportivas, dolores de crecimiento y problemas posturales. Los ajustes para niños son gentiles, seguros y adaptados a la edad y el tamaño de cada niño.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica Pediátrica", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Por qué debería mi hijo ver a un quiropráctico?", a: "Los niños experimentan innumerables estrés físicos — el nacimiento mismo, caídas durante los primeros pasos, mochilas, tiempo frente a pantallas, deportes y el efecto acumulativo de los patrones posturales. La quiropráctica pediátrica aborda estos estrés antes de que se compongan en patrones musculoesqueléticos adultos. El Dr. Foss tiene más de 23 años de experiencia pediátrica." },
        { q: "¿Qué condiciones pediátricas trata el Dr. Foss?", a: "Las preocupaciones pediátricas comunes incluyen cólicos, infecciones de oído, tortícolis, monitoreo de escoliosis, lesiones deportivas, dolores de crecimiento, tensión muscular relacionada con TDAH, problemas posturales (cuello de texto, patrones de mochila), estreñimiento, enuresis y enfermedades recurrentes." },
        { q: "¿Son seguros los ajustes quiroprácticos pediátricos?", a: "Sí — la quiropráctica pediátrica usa técnicas específicamente apropiadas para las columnas en desarrollo de los niños: suaves, de baja fuerza y adaptadas a la edad. El Dr. Foss nunca usa manipulación de intensidad adulta en niños. El perfil de seguridad de la quiropráctica pediátrica en manos entrenadas está bien establecido." },
        { q: "¿Con qué frecuencia debería mi hijo ver a un quiropráctico?", a: "La frecuencia depende de la situación específica del niño. Los problemas agudos típicamente necesitan 4–8 visitas. Los niños con preocupaciones continuas se benefician de chequeos mensuales. Muchas familias traen a los niños periódicamente durante los brotes de crecimiento." },
      ],
    },
    "pregnancy-chiropractic": {
      title: "Quiropráctico para el Embarazo San Antonio | Pura Vida",
      description:
        "Quiropráctica prenatal con Técnica Webster en San Antonio, TX. El Dr. Dan Foss mantiene a las futuras mamás cómodas y alineadas en cada trimestre.",
      keywords: ["quiropráctico embarazo San Antonio", "quiropráctica prenatal San Antonio", "Técnica Webster San Antonio TX", "quiropráctico embarazo San Antonio TX", "Técnica Webster quiropráctico San Antonio", "quiropráctico prenatal cerca de mí San Antonio"],
      h1: "Quiropráctico para el Embarazo en San Antonio, TX",
      image: "/images/pregnant-patient.webp",
      body: [
        "El embarazo pone mucha tensión en su columna vertebral y sistema nervioso. A medida que su bebé crece, su centro de gravedad cambia, su postura se modifica y los ligamentos en su pelvis se aflojan — creando inestabilidad e incomodidad. En los meses 6 a 9, muchas madres se ven obligadas a adoptar una postura muy desequilibrada.",
        "El cuidado quiropráctico durante el embarazo ayuda a las futuras madres a mantenerse cómodas, alineadas y apoyadas durante cada trimestre. El Dr. Foss utiliza la **Técnica Webster** — un protocolo quiropráctico prenatal especializado — para restaurar el equilibrio pélvico y reducir la restricción intrauterina.",
        "El cuidado quiropráctico durante el embarazo es seguro en todos los trimestres, **libre de medicamentos**, y funciona como un poderoso complemento al cuidado de su obstetra o partera.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica para el Embarazo (Técnica Webster)", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Cómo puede ayudarme la quiropráctica durante el embarazo?", a: "La Técnica Webster aborda los cambios estructurales del embarazo — cambio de centro de gravedad, laxitud ligamentaria hormonal, ensanchamiento pélvico y las compensaciones posturales que impulsan el dolor lumbar, ciática, dolor del ligamento redondo y dolor de cintura pélvica. La mayoría de las pacientes embarazadas reportan reducción sustancial del dolor, mejor sueño y mejor comodidad general dentro de varias visitas." },
        { q: "¿Es seguro el cuidado quiropráctico durante el embarazo?", a: "Sí — la Técnica Webster es uno de los protocolos quiroprácticos más seguros y mejor estudiados para el embarazo. La Asociación Americana de Embarazo reconoce la quiropráctica como segura durante el embarazo. La mesa de embarazo especializada no tiene presión abdominal, los ajustes son suaves y específicos del protocolo Webster, y el Dr. Foss está certificado por ICPA." },
        { q: "¿Puede la quiropráctica ayudar con un bebé en posición podálica?", a: "La Técnica Webster crea las condiciones pélvicas que permiten que el bebé auto-rote a la posición de cabeza abajo. La mayoría de los bebés podálicos se voltean dentro de 2–4 visitas cuando el tratamiento comienza entre las 28–34 semanas. Los quiroprácticos no voltean físicamente a los bebés (eso es ECV)." },
        { q: "¿Qué tan temprano en el embarazo debo comenzar el cuidado quiropráctico?", a: "Lo más pronto posible — el cuidado en el primer trimestre aborda los cambios hormonales ligamentarios antes de que se desarrollen patrones asimétricos. Pero nunca es demasiado tarde: muchas pacientes comienzan en el tercer trimestre para problemas específicos como ciática, posición podálica o preparación para el parto." },
      ],
    },
    "auto-injury-chiropractic": {
      title: "Quiropráctico Lesiones de Auto San Antonio | Pura Vida",
      description:
        "¿Lesionado en un accidente de auto en San Antonio? El Dr. Dan Foss evalúa, documenta y trata el latigazo y lesiones de auto. Evaluación gratuita.",
      keywords: ["quiropráctico accidente auto San Antonio", "lesiones auto quiropráctico San Antonio TX", "latigazo cervical San Antonio", "quiropráctico accidente de carro San Antonio TX", "quiropráctico ciática San Antonio", "mejor quiropráctico accidente auto San Antonio"],
      h1: "Quiropráctico para Lesiones de Auto en San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      body: [
        "Una lesión de auto puede devastar a una persona en muchos niveles — físico, emocional y financiero. Los accidentes de auto vienen en todas las magnitudes, pero siempre tienen algo en común: ponen estrés repentino y significativo en su cuerpo. Ya sea **latigazo cervical** o una lesión personal más grave, el impacto crea una onda de choque que afecta negativamente su columna, músculos, ligamentos y sistema nervioso.",
        "El daño no siempre es visible. Incluso si se siente bien inmediatamente después de un accidente, puede estar en problemas serios. Los síntomas del latigazo cervical pueden tardar días o incluso semanas en aparecer, y las lesiones no tratadas se convierten en **dolor crónico**.",
        "El Dr. Foss proporciona una evaluación y documentación completa de las lesiones por accidente de auto, y trabaja con abogados de lesiones personales cuando es necesario. La intervención quiropráctica temprana reduce el tiempo de recuperación.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica para Lesiones de Auto", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Debo ver a un quiropráctico incluso si me siento bien después de un accidente automovilístico?", a: "Sí. El latigazo y otras lesiones de tejidos blandos a menudo no producen síntomas durante 24–72 horas — o incluso más tiempo. El cuidado quiropráctico conservador temprano después de una colisión produce mejores resultados a largo plazo que esperar a que el dolor crónico se desarrolle. La documentación temprana también es típicamente importante para las reclamaciones de seguro y lesiones personales." },
        { q: "¿Qué lesiones de accidentes automovilísticos trata el Dr. Foss?", a: "Las condiciones post-accidente comunes incluyen latigazo, esguinces facetarios cervicales y lumbares, síntomas post-conmoción, disfunción de ATM por impacto del airbag, disrupción de la articulación sacroilíaca, contusiones de tejidos blandos y el trauma acumulativo de las colisiones de vehículos motorizados. SOT es particularmente adecuado para casos de latigazo." },
        { q: "¿Trabaja con abogados de lesiones personales?", a: "Sí — el Dr. Foss tiene amplia experiencia trabajando con abogados de lesiones personales, documentando lesiones exhaustivamente con informes narrativos y hallazgos objetivos. Coordinamos con el abogado en el momento del caso, facturación e informes finales. Muchos abogados refieren a sus clientes específicamente a Pura Vida por la calidad de la documentación." },
        { q: "¿Cubrirá mi seguro el cuidado quiropráctico después de un accidente?", a: "La mayoría de las pólizas de auto incluyen cobertura de Protección de Lesiones Personales (PIP) o MedPay que paga el cuidado quiropráctico post-accidente. Verificamos la cobertura en la primera visita y trabajamos con su seguro de auto, MedPay o derecho de retención del abogado. Traiga su informe de accidente, tarjeta de seguro e identificación a la primera visita." },
      ],
    },
    "wellness-care": {
      title: "Quiropráctica de Bienestar San Antonio | Pura Vida",
      description:
        "Cuidado quiropráctico de bienestar proactivo en San Antonio, TX. El Protocolo Pura Vida integra quiropráctica, osteopatía y terapia manual.",
      keywords: ["quiropráctica bienestar San Antonio", "quiropráctica mantenimiento San Antonio", "quiropráctica preventiva San Antonio TX", "quiropráctica bienestar San Antonio TX", "mejor quiropráctico San Antonio", "quiropráctico cerca de mí San Antonio"],
      h1: "Cuidado Quiropráctico de Bienestar en San Antonio, TX",
      image: "/images/dr-foss-examining-neck.webp",
      body: [
        "El **cuidado quiropráctico de bienestar** es un cuidado proactivo y regular diseñado para mantener la alineación espinal óptima, la función del sistema nervioso y la salud en general — incluso cuando no tiene dolor. Piense en ello como las limpiezas dentales regulares o el ejercicio. Su sistema nervioso controla cada función en su cuerpo.",
        "Cuando la columna está correctamente alineada y libre de interferencias, cada sistema en el cuerpo funciona mejor — la **respuesta inmunológica, la digestión, el sueño, la energía y el estado de ánimo** mejoran. El Protocolo Pura Vida es el enfoque integral de bienestar del Dr. Foss desarrollado a lo largo de 23 años.",
        "Integra quiropráctica, osteopatía, terapia manual y modalidades energéticas para mantener su cuerpo funcionando al máximo nivel. Muchas familias de San Antonio hacen de Pura Vida Chiropractic la piedra angular de su plan de salud general.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico de Bienestar", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Qué es el cuidado quiropráctico de bienestar?", a: "El bienestar quiropráctico es un cuidado proactivo y regular diseñado para mantener la alineación espinal óptima, la función del sistema nervioso y la salud en general — incluso cuando no tiene dolor. Es análogo a las limpiezas dentales regulares o al ejercicio rutinario: el mantenimiento continuo previene las pequeñas disfunciones que se acumulan en problemas sintomáticos." },
        { q: "¿Necesito cuidado quiropráctico si no tengo dolor?", a: "El dolor es uno de los últimos síntomas que produce una columna desalineada. Cuando aparece el dolor, la disfunción subyacente generalmente ha estado acumulándose durante meses o años. La quiropráctica de bienestar atrapa y corrige estos patrones antes de que se vuelvan dolorosos — lo cual es mucho más fácil de manejar que esperar a que se desarrollen condiciones crónicas." },
        { q: "¿Con qué frecuencia debo recibir un ajuste de bienestar?", a: "La mayoría de los pacientes de bienestar ven al Dr. Foss cada 2–4 semanas para mantenimiento continuo. La frecuencia se ajusta según la edad, nivel de actividad, factores ocupacionales y carga de estrés. Los pacientes activos y aquellos con lesiones previas a menudo se benefician de cuidado más frecuente que los pacientes sedentarios sin historial de lesiones." },
        { q: "¿Qué es el Protocolo Pura Vida?", a: "El Protocolo Pura Vida es el enfoque integral de bienestar del Dr. Foss desarrollado a lo largo de 23 años de práctica. Integra quiropráctica SOT, trabajo craneal, ajuste visceral CMRT, terapia manual y (cuando es apropiado) láser Clase IV y terapia SoftWave. El objetivo es abordar a toda la persona — estructural, neurológica, visceral y energética — en lugar de perseguir síntomas aislados." },
      ],
    },
    "latino-community": {
      title: "Quiropráctico Bilingüe San Antonio | Pura Vida Chiropractic",
      description:
        "Cuidado quiropráctico bilingüe para la comunidad latina de San Antonio. El Dr. Dan Foss habla español y entiende la cultura latina. Evaluación gratuita.",
      keywords: ["quiropráctico bilingüe San Antonio", "quiropráctico latino San Antonio", "quiropráctico español San Antonio TX", "quiropráctico que habla español San Antonio", "quiropráctico San Antonio TX", "quiropráctico hispanohablante San Antonio"],
      h1: "Sirviendo a la Comunidad Latina de San Antonio",
      image: "/images/dr-foss-about-hp.webp",
      body: [
        "Pura Vida Chiropractic fue fundada con el compromiso de servir a la **comunidad latina de San Antonio** con el cuidado de salud y bienestar que merece. El Dr. Dan Foss es completamente bilingüe y ha practicado en Costa Rica, España, Irlanda, los Países Bajos y Guatemala — lo que le da una comprensión profunda de la cultura y las necesidades de salud latinas.",
        "Como quiropráctico de San Antonio en el área de Castle Hills, el Dr. Foss se hizo una promesa a sí mismo: hacer que el cuidado quiropráctico de alta calidad sea accesible para las **familias hispanohablantes** que necesitan un médico que realmente las entienda.",
        "En Pura Vida, nunca sentirá que necesita explicarse dos veces. El Dr. Foss habla su idioma — tanto literal como culturalmente.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Cuidado Quiropráctico Bilingüe", "procedureType": "Chiropractic" },
      faqs: [
        { q: "¿Hablan español en Pura Vida Chiropractic?", a: "Sí — Pura Vida es una práctica completamente bilingüe. El Dr. Foss habla español con fluidez y todo el equipo es bilingüe. Hemos practicado en Costa Rica, España y América Latina. Todo el papeleo, señalización, materiales educativos para pacientes y el sitio web mismo están disponibles en español en /es. Los pacientes nunca necesitarán traducir ni luchar con el cuidado en un idioma no nativo." },
        { q: "¿Qué consideraciones culturales aporta el Dr. Foss al cuidado de pacientes latinos?", a: "El Dr. Foss pasó años significativos practicando en Costa Rica, España, Irlanda, los Países Bajos y Guatemala, dándole familiaridad profunda con las perspectivas de salud latinas, el cuidado centrado en la familia y el contexto cultural de las quejas musculoesqueléticas. Entiende el papel de la familia extendida en las decisiones de salud y las barreras culturales que muchos pacientes latinos enfrentan en la medicina mainstream." },
        { q: "¿Ofrecen planes de pago para la comunidad latina?", a: "Somos amigables con los seguros y ofrecemos opciones de pago en efectivo asequibles para pacientes sin seguro. El Dr. Foss está comprometido a hacer que la quiropráctica sea accesible para las familias trabajadoras en San Antonio. Aceptamos HSA/FSA, planes de pago para cursos de tratamiento más largos y ofrecemos una consulta gratuita para nuevos pacientes." },
        { q: "¿De dónde vienen la mayoría de sus pacientes hispanohablantes en San Antonio?", a: "Atendemos a familias hispanohablantes de todo San Antonio — incluyendo el Westside, Southside, Olmos Park, Castle Hills, Stone Oak y el área metropolitana más amplia de San Antonio. Nuestra ubicación en 2318 NW Military Hwy es accesible desde la mayor parte de San Antonio. Muchos pacientes también vienen de Helotes y Boerne." },
      ],
    },
  },
};

interface Props {
  params: Promise<{ locale: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; service: string }[] = [];
  for (const locale of Object.keys(services)) {
    for (const service of Object.keys(services[locale as "en" | "es"])) {
      params.push({ locale, service });
    }
  }
  return params;
}

// EN ↔ ES service slug map. Used to emit correct cross-language hreflangs
// because EN and ES services live at DIFFERENT slugs (e.g. /en/services/auto-injury
// vs /es/services/lesiones-de-auto). Previous hreflang logic assumed both
// locales used the same slug, so /en/services/auto-injury linked to
// /es/services/auto-injury — which 308-redirects to /es/services/lesiones-de-auto.
// Semrush flagged 18 'Hreflang redirect (308)' errors from this mismatch.
// Mirrors the redirect rules in next.config.mjs (lines 234-253).
const SERVICE_SLUG_TRANSLATIONS: Record<string, string> = {
  // EN → ES
  "sot-chiropractic": "quiropractica-sot",
  "softwave-therapy": "terapia-softwave",
  "auto-injury": "lesiones-de-auto",
  "pediatric-chiropractor": "quiropractico-pediatrico",
  "prenatal-chiropractor": "quiropractico-prenatal",
  "pregnancy-chiropractor": "quiropractico-embarazo",
  "infants-chiropractic": "quiropractico-infantes",
  "pediatric-prenatal": "quiropractica-pediatrica",
  "shockwave-therapy": "terapia-ondas-de-choque",
  "class-iv-laser": "laser-clase-iv",
  // ES → EN (reverse)
  "quiropractica-sot": "sot-chiropractic",
  "terapia-softwave": "softwave-therapy",
  "lesiones-de-auto": "auto-injury",
  "quiropractico-pediatrico": "pediatric-chiropractor",
  "quiropractico-prenatal": "prenatal-chiropractor",
  "quiropractico-embarazo": "pregnancy-chiropractor",
  "quiropractico-infantes": "infants-chiropractic",
  "quiropractica-pediatrica": "pediatric-prenatal",
  "terapia-ondas-de-choque": "shockwave-therapy",
  "laser-clase-iv": "class-iv-laser",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service } = await params;
  const data = services[locale as "en" | "es"]?.[service];
  if (!data) return {};
  // Resolve cross-language slug — falls back to same slug if translation
  // doesn't exist (covers services with identical EN/ES slugs).
  const otherLang = locale === "es" ? "en" : "es";
  const otherSlug = SERVICE_SLUG_TRANSLATIONS[service] ?? service;
  const enSlug = locale === "en" ? service : otherSlug;
  const esSlug = locale === "es" ? service : otherSlug;
  // Only emit alternate hreflang if the OTHER locale actually has this service
  const otherHasService = !!services[otherLang as "en" | "es"]?.[otherSlug];
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}/services/${service}`,
      languages: otherHasService
        ? {
            en: `${BASE_URL}/en/services/${enSlug}`,
            es: `${BASE_URL}/es/services/${esSlug}`,
            "x-default": `${BASE_URL}/en/services/${enSlug}`,
          }
        : {
            [locale]: `${BASE_URL}/${locale}/services/${service}`,
            "x-default": `${BASE_URL}/${locale}/services/${service}`,
          },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}/${locale}/services/${service}`,
      siteName: "Pura Vida Chiropractic",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, service } = await params;
  const data = services[locale as "en" | "es"]?.[service];
  if (!data) return <div>Service not found</div>;

  const isEs = locale === "es";
  const ctaText = isEs ? "Reservar Consulta Gratis" : "Book Free Consultation";
  const ctaHref = `/${locale}/book-now`;

  // Provider includes full PostalAddress — Semrush flagged 28 services pages
  // (issue #45) for "MedicalBusiness/LocalBusiness missing required address
  // field". Schema.org spec requires `address` on LocalBusiness; without it
  // Google won't generate Local Pack rich results from this schema either.
  const schemaJson = {
    "@context": "https://schema.org",
    ...data.schema,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pura Vida Chiropractic",
      "url": BASE_URL,
      "telephone": "+12106851994",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2318 NW Military Hwy #103",
        "addressLocality": "San Antonio",
        "addressRegion": "TX",
        "postalCode": "78231",
        "addressCountry": "US",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${BASE_URL}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `${BASE_URL}/${locale}/services/${service}`,
      },
    ],
  };

  const relatedConditions = getConditionsTreatedByService(service, locale, 3);
  const relatedPosts = getRelatedPostsByKeywords(data.keywords || [], locale, 3);
  const relatedItems = [...relatedConditions, ...relatedPosts];

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath={`/services/${service}`} />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href={`/${locale}`}>
              {isEs ? "Inicio" : "Home"}
            </Link>
            {" › "}
            <Link href={`/${locale}/services`}>
              {isEs ? "Servicios" : "Services"}
            </Link>
            {" › "}
            <span>{data.h1}</span>
          </nav>

          <h1 className={styles.h1}>{data.h1}</h1>

          {data.image && (
            <div className={styles.heroWrap}>
              <Image
                src={data.image}
                alt={data.h1}
                width={780}
                height={420}
                priority
                className={styles.heroImg}
                sizes="(max-width: 780px) 100vw, 780px"
              />
            </div>
          )}

          {/* Optional inline video (pregnancy intro or chiropractic intro) */}
          {PREGNANCY_VIDEO_SLUGS.has(service) && (
            <InlineVideo
              src="/videos/pregnancy.mp4"
              poster="/videos/pregnancy-poster.jpg"
              caption={
                isEs
                  ? "Cuidado quiropráctico prenatal y posparto en Pura Vida Chiropractic, San Antonio TX"
                  : "Prenatal & postpartum chiropractic care at Pura Vida Chiropractic, San Antonio TX"
              }
              ariaLabel={
                isEs
                  ? "Video sobre cuidado quiropráctico durante el embarazo"
                  : "Video about chiropractic care during pregnancy"
              }
            />
          )}
          {locale === "en" && CHIRO_GUIDE_VIDEO_SLUGS_EN.has(service) && (
            <InlineVideo
              src="/videos/chiropractic-guide.mp4"
              poster="/videos/chiropractic-guide-poster.jpg"
              caption="An introduction to chiropractic care — what to expect at Pura Vida Chiropractic, San Antonio TX"
              ariaLabel="Introduction to chiropractic care"
            />
          )}

          <div className={styles.body}>
            {data.body.map((para, i) => {
              // Render strings starting with <h2 or <h3 directly as block
              // headings (no <p> wrapper). Lets service data inline section
              // headings without rendering invalid <p><h2> nesting.
              if (/^<h[23]\b/i.test(para)) {
                return (
                  <div
                    key={i}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                );
              }
              return (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
                }} />
              );
            })}
          </div>

          {/* Optional FAQ block + FAQPage JSON-LD for rich snippets. Only
              renders when the service data declares a `faqs` array. */}
          {data.faqs && data.faqs.length > 0 && (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: data.faqs.map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                  }),
                }}
              />
              <section style={{ marginTop: "2.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", color: "#1a3a4a", marginBottom: "1rem" }}>
                  {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {data.faqs.map((f, i) => (
                    <details
                      key={i}
                      style={{
                        border: "1px solid #d6e4f0",
                        borderRadius: "8px",
                        padding: "0.75rem 1rem",
                        background: "#fafbfd",
                      }}
                    >
                      <summary style={{ cursor: "pointer", fontWeight: 600, color: "#1a3a4a", fontSize: "1.05rem" }}>
                        {f.q}
                      </summary>
                      <p style={{ marginTop: "0.5rem", lineHeight: 1.65, color: "#333" }}>
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </>
          )}

          {data.videos && data.videos.length > 0 && (
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5rem",margin:"2rem 0"}}>
              {data.videos.map((src, i) => (
                <div key={i} style={{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden"}}>
                  <iframe
                    src={src}
                    title={`${data.h1} video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0}}
                  />
                </div>
              ))}
            </div>
          )}

          <div className={styles.ctaBox}>
            <p>{isEs
              ? "¿Listo para experimentar la diferencia? El Dr. Dan Foss, DC está aquí para ayudarle."
              : "Ready to experience the difference? Dr. Dan Foss, DC is here to help."
            }</p>
            <a href={ctaHref} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
              {ctaText} →
            </a>
            <p className={styles.contact}>
              <strong>{isEs ? "Teléfono" : "Phone"}:</strong>{" "}
              <a href="tel:+12106851994">(210) 685-1994</a>
              {"  |  "}
              <strong>{isEs ? "Dirección" : "Address"}:</strong>{" "}
              2318 NW Military Hwy Suite 103, San Antonio, TX 78231
            </p>
          </div>
        </div>
      </main>
      <RelatedContent
        items={relatedItems}
        heading={isEs ? "Condiciones que Tratamos y Lecturas Relacionadas" : "Conditions We Treat & Related Reading"}
        subheading={
          isEs
            ? "Vea las condiciones que abordamos con esta terapia y artículos para profundizar."
            : "See the conditions we address with this therapy and articles for a deeper dive."
        }
      />
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
