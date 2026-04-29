import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./service.module.css";

const BASE_URL = "https://puravidasanantonio.com";

interface ServiceData {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  image?: string;
  videos?: string[];
  body: string[];
  schema: object;
}

type ServiceMap = Record<string, ServiceData>;

const services: Record<"en" | "es", ServiceMap> = {
  en: {
    // ── Existing services ──────────────────────────────────────────────────
    "sot-chiropractic": {
      title: "SOT Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Expert SOT chiropractic care in San Antonio, TX. Dr. Dan Foss uses the Sacro-Occipital Technique to relieve pain and restore balance. Free evaluation.",
      keywords: ["SOT chiropractor San Antonio", "Sacro-Occipital Technique San Antonio", "chiropractic San Antonio TX", "SOT chiropractic San Antonio TX", "best chiropractor San Antonio", "chiropractor near me San Antonio"],
      h1: "SOT Chiropractic in San Antonio",
      body: [
        "The **Sacro-Occipital Technique (SOT)** is a gentle, comprehensive chiropractic method that focuses on the foundational relationship between your sacrum and skull. At Pura Vida Chiropractic, Dr. Dan Foss, DC has extensive training in SOT and uses it to address [back pain](/en/blog/back-pain-chiropractor-san-antonio), [neck pain](/en/blog/neck-pain-chiropractor-san-antonio), [headaches](/en/blog/headaches-migraines-chiropractor-san-antonio), [sciatica](/en/blog/sciatica-chiropractor-san-antonio), and more.",
        "Unlike high-velocity adjustments, SOT uses specially designed wedge-shaped blocks and gravity to gently realign the pelvis and spine. The result is lasting relief without forceful manipulation — making it ideal for patients of all ages, including children, pregnant women, and seniors.",
        "Dr. Foss performs a thorough SOT Category Assessment to determine the exact pattern of imbalance in your body, then designs a personalized care plan to address the root cause of your pain.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Sacro-Occipital Technique (SOT)", "procedureType": "Chiropractic" },
    },
    "softwave-therapy": {
      title: "SoftWave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "SoftWave tissue regeneration therapy in San Antonio, TX. Stimulate your body's natural healing without surgery or injections. Book a free evaluation.",
      keywords: ["SoftWave therapy San Antonio", "tissue regeneration San Antonio", "non-surgical pain relief San Antonio", "SoftWave therapy San Antonio TX", "shockwave therapy San Antonio", "regenerative therapy San Antonio"],
      h1: "SoftWave Therapy in San Antonio",
      body: [
        "**SoftWave Therapy** is a cutting-edge, FDA-cleared treatment that uses broadfocused shockwave technology to stimulate tissue regeneration at the cellular level. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC offers SoftWave as part of a comprehensive, non-surgical approach to healing chronic pain.",
        "SoftWave activates stem cells, increases blood flow, and reduces inflammation in damaged tissues. It is highly effective for conditions such as plantar fasciitis, tendinopathies, rotator cuff injuries, knee pain, [degenerative joint disease](/en/blog/degenerative-joint-disease-chiropractor-san-antonio), and chronic soft tissue injuries.",
        "Treatments are fast (15–20 minutes), non-invasive, and require no downtime. Many San Antonio patients experience significant improvement in as few as 3–6 sessions.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "SoftWave Tissue Regeneration Therapy", "procedureType": "Physical Therapy" },
    },
    "auto-injury": {
      title: "Auto Injury Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Injured in a car accident in San Antonio? Dr. Dan Foss specializes in whiplash and auto injury chiropractic care. Free evaluation. We work with auto insurance.",
      keywords: ["auto injury chiropractor San Antonio", "car accident chiropractor San Antonio", "whiplash treatment San Antonio TX", "car accident chiropractor San Antonio TX", "auto accident injury San Antonio", "whiplash chiropractor San Antonio"],
      h1: "Auto Injury Chiropractic in San Antonio",
      body: [
        "Car accidents — even minor ones — can cause significant musculoskeletal injuries that may not become apparent until days or weeks after the collision. **Whiplash**, spinal misalignment, disc injuries, and soft tissue damage are among the most common results of auto accidents in San Antonio.",
        "At Pura Vida Chiropractic, Dr. Dan Foss, DC specializes in diagnosing and treating auto injury patients using the Sacro-Occipital Technique and complementary therapies. Early chiropractic care after an accident can dramatically improve recovery outcomes and prevent chronic pain.",
        "We work with auto insurance and personal injury cases. Don't wait — the sooner you seek care, the better your recovery. Contact us today for a free post-accident evaluation.",
      ],
      videos: ["https://www.youtube.com/embed/08Zh3oOtrag"],
      schema: { "@type": "MedicalProcedure", "name": "Auto Injury Chiropractic Care", "procedureType": "Chiropractic" },
    },
    "pediatric-chiropractor": {
      title: "Pediatric Chiropractor San Antonio | Pura Vida Chiropractic",
      description: "Dr. Dan Foss is a pediatric chiropractor in San Antonio, TX. Gentle SOT chiropractic care for kids from newborns to teenagers. Free evaluation.",
      keywords: ["pediatric chiropractor San Antonio", "child chiropractor San Antonio", "kids chiropractic San Antonio TX", "pediatric chiropractor San Antonio TX", "infant chiropractor San Antonio", "children chiropractor near me San Antonio"],
      h1: "Pediatric Chiropractor in San Antonio",
      image: "/images/dr-foss-adjusting-child.webp",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/j_RHsJ0_EzE"],
      body: [
        "Dr. Foss is a **San Antonio Pediatric Chiropractor** who specializes in chiropractic care for kids from newborns through teenagers. Kids love to run, jump, and play — but the cumulative impact of childhood activity, poor posture, and digital device use can cause spinal misalignments that affect their health for years to come.",
        "As a pediatric chiropractor, I sometimes get calls from parents asking whether their child is too young to receive chiropractic care. The answer is always the same — it's never too early. The spine develops until around age 25, and most damage done by age 18 is very difficult to correct. Early evaluation and care sets the foundation for lifelong spinal health.",
        "When working with kids, Dr. Foss takes a lighthearted approach that engages the child and makes treatment feel comfortable. Even very young children warm up quickly once they understand how chiropractic puts the body back in proper alignment. Adjustments for children are extremely gentle — using only the pressure of a light fingertip touch for infants and toddlers.",
        "**Why children need chiropractic more often than you think:** Children as young as 8 years old spend hours hunching over smartphones, slouching at computers, and sitting in poorly positioned furniture. These habits place enormous stress on developing spines and can cause nervous system interference when left unaddressed. Dr. Foss explains spinal health in age-appropriate terms that stick with children well into adulthood.",
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
    },
    "pediatric-prenatal": {
      title: "Pediatric & Prenatal Chiropractor San Antonio | Pura Vida",
      description:
        "Gentle pediatric and prenatal chiropractic care in San Antonio, TX. SOT technique safe for all ages. Free evaluation for mom and baby.",
      keywords: ["pediatric chiropractor San Antonio", "prenatal chiropractor San Antonio", "chiropractic pregnancy San Antonio TX", "pediatric prenatal chiropractor San Antonio TX", "infant chiropractor San Antonio", "pregnancy chiropractor San Antonio"],
      h1: "Pediatric & Prenatal Chiropractic in San Antonio",
      videos: ["https://www.youtube.com/embed/fipTPhQ8ARw", "https://www.youtube.com/embed/IeiU-Q-ljik", "https://www.youtube.com/embed/1fiRlACQjdk"],
      body: [
        "Children and expectant mothers deserve the gentlest, most effective care available. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC is trained in **pediatric and prenatal chiropractic** using the SOT technique — one of the safest approaches for these special populations.",
        "For **pregnant women**, SOT helps relieve pelvic pain, sciatica, round ligament discomfort, and prepares the pelvis for an optimal birth. The Webster Technique, a specific SOT protocol, supports ideal fetal positioning. For **infants and children**, gentle SOT adjustments address birth trauma, colic, ear infections, torticollis, and developmental concerns.",
        "Adjustments for infants use no more pressure than a light fingertip touch. Our San Antonio office is a welcoming space for families at every stage of life.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric and Prenatal Chiropractic", "procedureType": "Chiropractic" },
    },
    "shockwave-therapy": {
      title: "Shockwave Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Shockwave therapy for chronic pain in San Antonio, TX. Non-invasive treatment for tendons, plantar fasciitis, and more. Free evaluation at Pura Vida Chiropractic.",
      keywords: ["shockwave therapy San Antonio", "ESWT San Antonio", "chronic pain treatment San Antonio TX", "shockwave therapy San Antonio TX", "extracorporeal shockwave San Antonio", "plantar fasciitis shockwave San Antonio"],
      h1: "Shockwave Therapy in San Antonio",
      body: [
        "**Extracorporeal Shockwave Therapy (ESWT)** delivers high-energy acoustic waves into damaged tissue, triggering a powerful regenerative response. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC uses shockwave therapy to treat chronic musculoskeletal conditions that haven't responded to other treatments.",
        "Shockwave therapy is clinically proven for conditions including **plantar fasciitis**, Achilles tendinopathy, tennis elbow, calcific shoulder tendinitis, patellar tendinopathy, and hip pain. It breaks down calcifications, stimulates collagen production, and increases blood flow to the treated area.",
        "Most patients require 3–6 sessions spaced 1 week apart. The procedure takes 10–15 minutes and is performed in our San Antonio office with no anesthesia or downtime required.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Shockwave Therapy (ESWT)", "procedureType": "Physical Therapy" },
    },
    "class-iv-laser": {
      title: "Class IV Laser Therapy San Antonio | Pura Vida Chiropractic",
      description:
        "Class IV laser therapy in San Antonio, TX. Deep tissue healing for arthritis, disc pain, sports injuries, and neuropathy. Book a free evaluation today.",
      keywords: ["Class IV laser therapy San Antonio", "laser therapy San Antonio TX", "photobiomodulation San Antonio", "Class IV laser San Antonio TX", "laser pain treatment San Antonio", "deep tissue laser therapy San Antonio"],
      h1: "Class IV Laser Therapy in San Antonio",
      body: [
        "**Class IV Laser Therapy** (photobiomodulation) uses specific wavelengths of light to penetrate deep into tissues, stimulating cellular repair and reducing inflammation and pain. At Pura Vida Chiropractic in San Antonio, Dr. Dan Foss, DC incorporates Class IV laser as a powerful complement to [SOT chiropractic care](/en/services/sot-chiropractic).",
        "Class IV laser is effective for a wide range of conditions including [disc herniation](/en/blog/herniated-disc-chiropractor-san-antonio), arthritis, peripheral neuropathy, [sciatica](/en/blog/sciatica-chiropractor-san-antonio), sports injuries, post-surgical recovery, and chronic muscle pain. The laser stimulates mitochondrial activity, accelerating the production of ATP (cellular energy) and speeding up tissue repair.",
        "Laser therapy sessions are painless — most patients feel a gentle warmth — and typically last 5–15 minutes. Many San Antonio patients notice reduced pain and improved function within their first few treatments.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Class IV Laser Therapy", "procedureType": "Physical Therapy" },
    },

    // ── New services ───────────────────────────────────────────────────────
    "chiropractic-care": {
      title: "Chiropractor in San Antonio, TX | Pura Vida Chiropractic",
      description:
        "Expert chiropractic care in San Antonio, TX. Dr. Dan Foss uses 300+ techniques including SOT to treat the root cause of pain. Free evaluation.",
      keywords: ["chiropractor San Antonio TX", "chiropractic care San Antonio", "San Antonio chiropractor", "back pain San Antonio", "best chiropractor San Antonio", "chiropractor near me San Antonio", "chiropractic adjustment San Antonio TX", "back pain doctor San Antonio"],
      h1: "Chiropractic Care in San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      body: [
        "**Chiropractic care** is health maintenance of the spinal column, discs, related nerves and bone geometry. It focuses on treating the causes of physical problems, rather than just the symptoms. At Pura Vida Chiropractic, Dr. Dan Foss uses over 300 chiropractic techniques including the advanced **Sacro-Occipital Technique (SOT)** to restore proper spinal function.",
        "With chiropractic adjustments, you give your body the best possible opportunity to prevent injury and return to a healthy state. Many patients report a feeling of release following an adjustment, along with significant decrease in [headaches](/en/blog/headaches-migraines-chiropractor-san-antonio), [back pain](/en/blog/back-pain-chiropractor-san-antonio), [neck pain](/en/blog/neck-pain-chiropractor-san-antonio), and overall improved well-being.",
        "Dr. Foss's approach goes beyond pain relief — it's about restoring your body's innate ability to heal and function at its highest level.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Chiropractic Care", "procedureType": "Chiropractic" },
    },
    "cranial-chiropractic": {
      title: "Cranial Chiropractic San Antonio | Pura Vida Chiropractic",
      description:
        "Specialized cranial chiropractic therapy in San Antonio, TX. Dr. Dan Foss addresses headaches, migraines, TMJ, and more with gentle cranial techniques.",
      keywords: ["cranial chiropractic San Antonio", "cranial therapy San Antonio TX", "TMJ chiropractor San Antonio", "cranial chiropractor San Antonio TX", "headache chiropractor San Antonio", "migraine chiropractor San Antonio"],
      h1: "Cranial Chiropractic in San Antonio, TX",
      image: "/images/dr-foss-adjusting-neck.webp",
      body: [
        "**Cranial Chiropractic** is the study of the skull and the restoration of proper cranial function. It is an advanced aspect of chiropractic care that addresses the relationship between the skull, the sacrum, and the meningeal system — the connective tissue that surrounds the brain and spinal cord.",
        "When the cranial bones are misaligned or the meningeal system is under tension, the effects can be wide-ranging: [headaches and migraines](/en/blog/headaches-migraines-chiropractor-san-antonio), [TMJ dysfunction](/en/blog/a-doctor-s-perspective-on-tmj), ear problems, sinus issues, neurological symptoms, and more. Dr. Foss is one of the few chiropractors in San Antonio with specialized training in cranial chiropractic therapy.",
        "Using gentle, precise techniques, he restores balance to the cranial bones and reduces tension in the meningeal system — often producing profound improvements in conditions that have not responded to other treatments.",
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
    },
    "pediatric-chiropractic": {
      title: "Pediatric Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Specialized pediatric chiropractic care in San Antonio, TX. Dr. Dan Foss has cared for children from newborns to teens for 23+ years. Free evaluation.",
      keywords: ["pediatric chiropractor San Antonio", "children's chiropractor San Antonio", "kids chiropractic San Antonio TX", "pediatric chiropractor San Antonio TX", "child chiropractor near me San Antonio", "quiropráctico pediátrico San Antonio"],
      h1: "Pediatric Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-child.webp",
      body: [
        "Dr. Foss is a San Antonio pediatric chiropractor who has specialized in caring for children from newborns through teenagers for over **23 years**. Kids love to run, jump, and play — and while their spongy bones are more resilient than adults, childhood is actually one of the most important times to receive chiropractic care.",
        "Falls, sports injuries, heavy backpacks, poor posture from device use, and even the birth process itself can create spinal misalignments that affect a child's **nervous system development, immune function, sleep, and behavior**.",
        "Common pediatric conditions Dr. Foss treats include colic, ear infections, torticollis, scoliosis, sports injuries, growing pains, ADHD-related tension, and postural problems. Adjustments for children are gentle, safe, and adapted to each child's age and size.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Pediatric Chiropractic", "procedureType": "Chiropractic" },
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
    },
    "auto-injury-chiropractic": {
      title: "Auto Injury Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Injured in a car accident in San Antonio? Dr. Dan Foss evaluates, documents, and treats whiplash and auto injuries. Free evaluation. Work with PI attorneys.",
      keywords: ["auto injury chiropractor San Antonio", "car accident chiropractor San Antonio TX", "whiplash treatment San Antonio", "car accident chiropractor San Antonio", "auto accident injury chiropractor San Antonio TX", "whiplash chiropractor near me San Antonio"],
      h1: "Auto Injury Chiropractor in San Antonio, TX",
      image: "/images/dr-foss-adjusting-patient.webp",
      body: [
        "An auto injury can devastate a person on many levels — physically, emotionally, and financially. Car accidents come in all magnitudes, but always have one thing in common: they put sudden, significant stress on your body. Whether it's **whiplash** or a more serious personal injury, the impact creates a shock wave that negatively affects your spine, muscles, ligaments, and nervous system.",
        "The damage isn't always visible — far from it. Even if you feel fine immediately after an accident, you may be in serious trouble. Whiplash symptoms can take days or even weeks to appear, and untreated injuries become **chronic pain**.",
        "Dr. Foss provides thorough evaluation and documentation of auto accident injuries, and works with personal injury attorneys when needed. Early chiropractic intervention reduces recovery time and prevents acute injuries from becoming long-term conditions. [Read about auto injury recovery →](/en/blog/auto-injury)",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Auto Injury Chiropractic", "procedureType": "Chiropractic" },
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
    },
    "latino-community": {
      title: "Bilingual Chiropractor San Antonio | Pura Vida Chiropractic",
      description:
        "Bilingual chiropractic care for San Antonio's Latino community. Dr. Dan Foss speaks Spanish and understands Latino culture. Free evaluation.",
      keywords: ["chiropractor San Antonio Latino", "bilingual chiropractor San Antonio", "quiropráctico San Antonio TX", "Spanish speaking chiropractor San Antonio", "quiropráctico que habla español San Antonio", "quiropráctico bilingüe San Antonio TX"],
      h1: "Serving San Antonio's Latino Community",
      image: "/images/dr-foss-about-hp.webp",
      body: [
        "Pura Vida Chiropractic was founded with a commitment to serving San Antonio's **Latino community** with the health and wellness care it deserves. Dr. Dan Foss is fully bilingual and has practiced in Costa Rica, Spain, Ireland, the Netherlands, and Guatemala — giving him a deep understanding of Latino culture and health needs.",
        "As a San Antonio chiropractor in the Castle Hills area, Dr. Foss made a promise to himself: to make high-quality chiropractic care accessible to **Spanish-speaking families** who need a doctor who truly understands them.",
        "At Pura Vida, you will never feel like you need to explain yourself twice. Dr. Foss speaks your language — both literally and culturally.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Bilingual Chiropractic Care", "procedureType": "Chiropractic" },
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
    },
    "terapia-softwave": {
      title: "Terapia SoftWave San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia SoftWave de regeneración tisular en San Antonio, TX. Estimule la curación natural sin cirugía ni inyecciones. Reserve su evaluación gratuita.",
      keywords: ["terapia SoftWave San Antonio", "regeneración tisular San Antonio", "alivio del dolor sin cirugía San Antonio", "terapia SoftWave San Antonio TX", "terapia de ondas de choque San Antonio", "terapia regenerativa San Antonio"],
      h1: "Terapia SoftWave en San Antonio",
      body: [
        "La **Terapia SoftWave** es un tratamiento de vanguardia aprobado por la FDA que utiliza tecnología de ondas de choque de enfoque amplio para estimular la regeneración tisular a nivel celular. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC ofrece SoftWave como parte de un enfoque integral y no quirúrgico para sanar el dolor crónico.",
        "SoftWave activa células madre, aumenta el flujo sanguíneo y reduce la inflamación en tejidos dañados. Es altamente efectivo para condiciones como fascitis plantar, tendinopatías, lesiones del manguito rotador, dolor de rodilla, [artritis y enfermedades articulares](/es/blog/dolor-articular-quiropractico-san-antonio) y lesiones crónicas de tejidos blandos.",
        "Los tratamientos son rápidos (15–20 minutos), no invasivos y no requieren tiempo de recuperación. Muchos pacientes de San Antonio experimentan una mejora significativa en tan solo 3–6 sesiones.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia SoftWave de Regeneración Tisular", "procedureType": "Physical Therapy" },
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
        "Trabajamos con seguros de auto y casos de lesiones personales. No espere — cuanto antes busque atención, mejor será su recuperación. Contáctenos hoy para una evaluación gratuita posterior al accidente. [Más información sobre lesiones de auto →](/es/blog/lesiones-de-auto)",
      ],
      videos: ["https://www.youtube.com/embed/08Zh3oOtrag"],
      schema: { "@type": "MedicalProcedure", "name": "Atención Quiropráctica por Lesiones de Auto", "procedureType": "Chiropractic" },
    },
    "quiropractico-pediatrico": {
      title: "Quiropráctico Pediátrico San Antonio | Pura Vida Chiropractic",
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
    },
    "quiropractico-infantes": {
      title: "Quiropráctico para Bebés San Antonio | Pura Vida Chiropractic",
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
    },
    "terapia-ondas-de-choque": {
      title: "Terapia de Ondas de Choque San Antonio | Pura Vida Chiropractic",
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
    },
    "laser-clase-iv": {
      title: "Terapia Láser Clase IV San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia láser Clase IV en San Antonio, TX. Sanación profunda para artritis, dolor de disco, lesiones deportivas y neuropatía. Reserve su evaluación gratuita.",
      keywords: ["láser clase IV San Antonio", "terapia láser San Antonio TX", "fotobiomodulación San Antonio", "láser clase IV San Antonio TX", "terapia láser profunda San Antonio", "láser terapéutico San Antonio"],
      h1: "Terapia Láser Clase IV en San Antonio",
      body: [
        "La **Terapia Láser Clase IV** (fotobiomodulación) utiliza longitudes de onda específicas de luz para penetrar profundamente en los tejidos, estimulando la reparación celular y reduciendo la inflamación y el dolor. En Pura Vida Chiropractic en San Antonio, el Dr. Dan Foss, DC incorpora el láser Clase IV como un poderoso complemento a la atención quiropráctica SOT.",
        "El láser Clase IV es efectivo para una amplia gama de condiciones, incluyendo **hernia de disco**, artritis, neuropatía periférica, lesiones deportivas, recuperación post-quirúrgica y dolor muscular crónico. El láser estimula la actividad mitocondrial, acelerando la producción de ATP y la reparación tisular.",
        "Las sesiones de terapia láser son indoloras — la mayoría de los pacientes sienten un calor suave — y duran típicamente 5–15 minutos. Muchos pacientes de San Antonio notan reducción del dolor y mejor función en sus primeros tratamientos.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Terapia Láser Clase IV", "procedureType": "Physical Therapy" },
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
    },
    "cranial-chiropractic": {
      title: "Quiropráctica Craneal San Antonio | Pura Vida Chiropractic",
      description:
        "Terapia quiropráctica craneal especializada en San Antonio, TX. El Dr. Dan Foss trata migrañas, ATM, sinusitis y más con técnicas craneales suaves.",
      keywords: ["quiropráctica craneal San Antonio", "terapia craneal San Antonio TX", "quiropráctico ATM San Antonio", "quiropráctico craneal San Antonio TX", "dolor de cabeza quiropráctico San Antonio", "migraña quiropráctico San Antonio"],
      h1: "Quiropráctica Craneal en San Antonio, TX",
      image: "/images/dr-foss-adjusting-neck.webp",
      body: [
        "La **quiropráctica craneal** es el estudio del cráneo y la restauración de la función craneal adecuada. Es un aspecto avanzado del cuidado quiropráctico que aborda la relación entre el cráneo, el sacro y el sistema meníngeo — el tejido conectivo que rodea el cerebro y la médula espinal.",
        "Cuando los huesos craneales están desalineados o el sistema meníngeo está bajo tensión, los efectos pueden ser de amplio alcance: dolores de cabeza, migrañas, disfunción de la articulación temporomandibular (ATM), problemas de oído, sinusitis, síntomas neurológicos y más.",
        "El Dr. Foss es uno de los pocos quiroprácticos en San Antonio con capacitación especializada en terapia quiropráctica craneal. Usando técnicas gentiles y precisas, restaura el equilibrio de los huesos craneales y reduce la tensión en el sistema meníngeo.",
      ],
      schema: { "@type": "MedicalProcedure", "name": "Quiropráctica Craneal", "procedureType": "Chiropractic" },
    },
    "infant-chiropractic": {
      title: "Quiropráctico para Bebés San Antonio | Pura Vida Chiropractic",
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
    },
    "pediatric-chiropractic": {
      title: "Quiropráctico Pediátrico San Antonio | Pura Vida Chiropractic",
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
    },
    "wellness-care": {
      title: "Quiropráctica de Bienestar San Antonio | Pura Vida Chiropractic",
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service } = await params;
  const data = services[locale as "en" | "es"]?.[service];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}/services/${service}`,
      languages: {
        en: `${BASE_URL}/en/services/${service}`,
        es: `${BASE_URL}/es/services/${service}`,
        "x-default": `${BASE_URL}/en/services/${service}`,
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
  const ctaText = isEs ? "Reservar Evaluación Gratis" : "Book Free Evaluation";
  const ctaHref = "https://puravidasanantonio.com/special/";

  const schemaJson = {
    "@context": "https://schema.org",
    ...data.schema,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Pura Vida Chiropractic",
      "url": BASE_URL,
    },
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentPath={`/services/${service}`} />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
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

          <div className={styles.body}>
            {data.body.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: para
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
              }} />
            ))}
          </div>

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
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
