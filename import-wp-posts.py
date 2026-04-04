# -*- coding: utf-8 -*-
import os

os.makedirs("content/posts", exist_ok=True)

CTA_EN = """
---

## Ready to Feel Better? Book Your Free Consultation Today

**[Pura Vida Chiropractic](https://puravidasanantonio.com)**
[2318 NW Military Hwy #103, San Antonio, TX 78231](https://maps.google.com/?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX)
📞 [Call (210) 685-1994](tel:2106851994)
🕐 Monday, Tuesday, Thursday: 7:00 AM – 4:00 PM

**[👉 Book Your Free Consultation](https://puravidasanantonio.com/special/)**
"""

CTA_ES = """
---

## ¿Listo para Sentirse Mejor? Reserve Su Consulta Gratis Hoy

**[Pura Vida Quiropráctica](https://puravidasanantonio.com)**
[2318 NW Military Hwy #103, San Antonio, TX 78231](https://maps.google.com/?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX)
📞 [Llame al (210) 685-1994](tel:2106851994)
🕐 Lunes, Martes, Jueves: 7:00 AM – 4:00 PM

**[👉 Reserve Su Consulta Gratis](https://puravidasanantonio.com/special/)**
"""

posts = {}

posts["quiropractica-en-ninos.md"] = f"""---
title: "Quiropráctica en Niños"
description: "La quiropráctica es una disciplina que se enfoca en el cuidado del sistema nervioso, especialmente la columna vertebral. Aunque la quiropráctica puede ser útil en el cuidado de ciertos trastornos en n"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp"
keywords:
  - chiropractor San Antonio
  - quiropráctica en niños
lang: es
---

La quiropráctica es una disciplina que se enfoca en el cuidado del sistema nervioso, especialmente la columna vertebral. Aunque la quiropráctica puede ser útil en el cuidado de ciertos trastornos en niños, es importante tener en cuenta que el cuidado quiropráctico en niños debe ser cuidadosamente evaluado y realizado por un quiropráctico con estudios, experiencia y formación específica en el cuidado de niños. Los niños pueden beneficiarse de la quiropráctica en casos de lesiones deportivas, trastornos posturales, dolor de cuello o espalda, problemas de sueño, problemas digestivos y otros trastornos. 

En resumen, si se considera el tratamiento quiropráctico para un niño, es importante buscar un quiropráctico con experiencia en el tratamiento de niños.
""" + (CTA_ES if "es" == "es" else CTA_EN)

posts["mi-batalla-en-esta-crisis-economica.md"] = f"""---
title: "Mi Batalla En Esta Crisis Económica"
description: "Mi nombre es Dr. Dan Foss y soy Doctor en Quiropráctica. Cuando tenía 7 años, estando en la escuela, sufrí un accidente leve en mi cuello y me diagnosticaron una tortícolis. La enfermera de la escuela"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp"
keywords:
  - chiropractor San Antonio
  - mi batalla en esta crisis económica
lang: es
---

Mi nombre es Dr. Dan Foss y soy Doctor en Quiropráctica. Cuando tenía 7 años, estando en la escuela, sufrí un accidente leve en mi cuello y me diagnosticaron una tortícolis. La enfermera de la escuela me mando a un médico general que me receto un relajante muscular con varios efectos secundarios. Mi madre que no se quedó conforme, me llevo a la consulta de un quiropráctico que trabaja detrás de nuestra casa. Cuando terminó de ajustarme el cuello yo me sentí como nuevo. Quede tan fascina- do que quise estudiar esa misma profesión, la Quiropráctica. Con ella puedo ayudar a muchos que tengan problemas en la espalda, cuello, migrañas, dolores de hombro, que hayan sufrido accidentes de tráfico o que padezcan disfunciones orgánicas tales como alergias, trastornos digestivos, y respiratorios.  Tiene que saber que yo no curo a nadie. Es el propio organismo el que recupera su salud a través de los ajustes específicos que realizo en las vértebras, consiguiendo liberar la presión que ejerce fuerza sobre los diferentes nervios. De esta manera la propia naturaleza vital es la que hace todo el trabajo, recuperando el equilibrio de todo el organismo.  Estudios han demostrado que la quiropráctica como puede cambiar y aumentar su vida y aumenta en un 50% la capacidad de reacción del sistema inmunitario de nuestro cuerpo de una forma completamente natural. Con esto demostramos que más vale prevenir que tratar con métodos anti-naturales.  Estoy doctorado por la Universidad de Western States de los Estados Unidos y licenciado por la Universidad de Costa Rica. Con mi trabajo he podido ayudar a más de 50.000 personas en los últimos 17 años.  Si quiere aumentar su salud y no quiere esperar, es el momento de solucionar todos aquellos problemas que afectan de alguna manera a su vida diaria, familia, amigos, como duerme, espíritu, claridad, memoria y más. El primer paso hacia su salud es el conocer más sobre lo que le está pasando, el porqué y el cuando, son las preguntas que merecen una respuesta y yo los puedo ayudar a comprenderlas.  Soy muy afortunado por haberme cruzado con la quiropráctica en mi vida. Por eso quiero compartir mi experiencia para que encuentre un equilibrio en todo el descontrol.  ¡Llame directo a 210 685 1994 y descubra como puede cambiar y aumentar su vida y bienestar AHORA!!  Con mucho respecto, Dr. Dan Foss
""" + (CTA_ES if "es" == "es" else CTA_EN)

posts["a-doctor-s-perspective-on-tmj.md"] = f"""---
title: "A Doctor’s perspective on TMJ"
description: "Over the past year I have experienced a lot of dental issues and suffered from TMJ. As a result I would like to compile all of my experiences here so that you can have a definitive guide to treating y"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp"
keywords:
  - chiropractor San Antonio
  - a doctor’s perspective on tmj
lang: en
---

Over the past year I have experienced a lot of dental issues and suffered from TMJ. As a result I would like to compile all of my experiences here so that you can have a definitive guide to treating your TMJ successfully. The most important thing to remember is that TMJ is different for everyone. As a Chiropractor practicing over the past 17 years I realize that the whole is not the sum of its parts and as such everyone heals and repairs differently. There is no cookie cutter approach to TMJ. There are many people, providers, and doctors that will tell you otherwise, that they have the cure! This is not true! This is a compilation of my journey and what worked for me. Again what worked for me might or might not work for you.

## My journey begins

My journey began like many of you that are perhaps reading this blog. I was sitting at home one day and started to experience pain in a molar. The particular molar that was painful was one that I had issues with in the past. I had 2 root canals because the first one had failed. I went to my dentist and they recommended a procedure called an apicoectomy.

After discussing the procedure I decided that it was best just to have the tooth removed. I had been reading online about [Weston Price](https://westonapricesa.org/) and the dangers of root canals and decided it was time to take my root canal out. The procedure itself was pretty straight forward my dentist applied something to number the area and pulled the tooth out. After the procedure I was hoping that the pain would go away but it took literally almost 2 months while I was taking pain medication and antibiotics.  The pain finally went away and on a subsequent visit to the dentist I decided that I wanted to have an implant done. I had never had an implant before so I didn’t realize completely what I was getting into until I was halfway through the procedure. They had placed some bone graft material in the socket of my tooth after it was extracted and they had to let it heal at least 3-4 months before they could put the post in the tooth for the implant. I returned for the implant post surgery and got numbed again and the post was placed. After another 3-4 months I returned again to take impressions and prepare to place the crown on top of the implant. This is where the problems began.

## The crown started to move

When they placed the crown they had difficulty screwing the crown into the post and were literally pulling hard on my jaw. They finally placed the crown and I wore it for about a week but then noticed that it started to move. I got worried and went back to my dentist and told him that it was moving and he had to remove it. Not before I started getting numbness and pain into my jaw. The pain was excruciating and moved up into the side of my head and just below the area where the tooth was placed. I told the dentist and we decided to take a break on the implant until the jaw healed. The jaw never healed. I thought the pain would go away. I got worried I thought maybe that the jaw had an abscess still inside it and it was pushing on my sinus cavity. So I went to an ENT and had a CT scan. The CT showed that I had some fluid in my sinus so they put me on a round of antibiotics for 2-3 weeks. That didn’t solve the problem. I thought maybe it was the metal post that was in my mouth so I saw an oral surgeon and he agreed to take the post out for a price of course almost the same cost of the implant. I was really hopeful that having the post removed would solve my problem. It didn’t! The pain continued until I finally realized that it was my TMJ joint. I even had an MRI of my brain to confirm that I was not indeed crazy and didn’t have something strange happening with trigeminal nerves.

## What I discovered

I started to put everything together. My initial numbness in my face was due to the abcess but this numbness was coming from the jaw joint or TMJ.  As a Chiropractor I have always helped many patients with TMJ and finding out if the issue itself is due to malocclusion or bad bite, muscular imbalances, or cranial imbalances.  I did a quick assessment of my jaw and found that it was a muscular imbalance. In fact when the implant was placed if only for 1 week it actually caused my bite to open on one side and close on the other side. This caused what is called an “open bite.”  What was happening was that the muscles on the side that was open were going into spasm. How could I fix this? I did a bunch of muscle work on my jaw and had friends who did manipulation but what I found worked the best for me was dry needling. I went to a Physical Therapist in town [Dr Matt Randell ](https://www.physicaltherapytx.com/)and he performed dry needling into the muscles of my jaw and I felt immediately relief. I also realized that I need to change my bite so I had a false tooth made to put into the space of the molar to use until I could have a bridge made for my bite. I had the tooth made by my new dentists [Dr. Gonzalez and Dr. Pena at Wholesome Dentistry](https://wholesomedentistry.com/). The tooth works great and has really reduced my pain and symptoms by 90%.  Was it an overnight fix absolutely not but I can tell that my jaw is beginning to realign. I’m also getting Chiropractic adjustments weekly in addition to the dry needling.Another thing that I knew I had was a reversed curve in my neck. The neck should normally have a c-shaped curve and so with the Chiropractic adjustments I did cervical traction to correct the curvature.

## How can this help you

I know firsthand that the pain of TMJ can be debilitating. The first step I feel in fixing your TMJ once and for all is to really seek out what is the cause. Really dive deep into when the pain occurred. For myself it was when I had the crown put on that tooth and it moved. I was so stressed and worried that something was wrong that my bite changed. Maybe for yourself it is something completely different.Was it a dental procedure that you had done? Maybe braces? Maybe a tooth pulled?Was is an accident? Car Accident? Broken tooth?Was it a stressful event? Loss of a loved one? New or lost job?Really taking a detailed history is the first step to finding out the cause. Then the next step is exploring treatments.

- A Chiropractor trained in [Sacral Occipital Technique (TM)](https://sorsi.com/) and [Applied Kinesiology](https://www.icakusa.com/) with advanced training in TMJ can help you determine if the issue is due to your bite, the muscles of your bite, or the cranial bones. Or perhaps misalignment issues in the upper cervical spine.  Make sure that your Chiropractor has advanced training again many will claim but not have the experience.

My office specializes in Cranial Adjusting to align the cranial bones in addition to TMJ adjusting, manipulation, and release.

- Upper Cervical Chiropractic is also a great compliment. I see [Dr Dutson](https://thriveheadandspinalcare.com/) here in San Antonio for my upper cervical care and he has done wonders for my jaw!

- A Dentist who really knows what they are doing with TMJ. Again make sure you really talk to your Dentist about his experience treating TMJ. A nite guard from bruxism or teeth grinding is allot different than a occlusal splint that holds the teeth in place.

- Physical Therapy is beneficial for the muscles again I recommend trying Dry Needling

- I have also used a device called the Aqualizer. It’s basically a waterbed for your bite and feels amazing. Pick one up at [Dental Depot](https://www.dentaldepot.com/category/AQUALIZER_TMJ_STOP_MIGRANE_HEADACHES?gclid=CjwKCAjwvtX0BRAFEiwAGWJyZKidpDrslpqZLpb1MVC2BxkyznGk2zoTDjrN_JpaGhgBy2fhPmfKuxoCK6YQAvD_BwE).

- If you do go for any type of invasive surgery either having the teeth grinded or even TMJ surgery make sure that you exhaust all other options before jumping to something that you many times can’t go back and correct if it goes wrong

- Begin by taking steps to not only get rid of your TMJ but get your life back!

Yours in Health! Dr Foss
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["neck-pain-and-chiropractic-care.md"] = f"""---
title: "Neck Pain and Chiropractic Care"
description: "A pilot study published in the December 2005 scientific journal, Clinical Chiropractic, from the European association, The College of Chiropractors, showed that chiropractic helped subjects in the stu"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp"
keywords:
  - chiropractor San Antonio
  - neck pain and chiropractic care
lang: es
---

A pilot study published in the December 2005 scientific journal, Clinical Chiropractic, from the European association, The College of Chiropractors, showed that chiropractic helped subjects in the study with neck pain.  The study starts off by noting how common neck pain is by pointing out that more than 70% of people in the developed world will experience neck pain at some point in their lifetimes. In this pilot study, the 21 people who completed the study, were divided into two groups for study. One group was those who had neck pain for less than 7 weeks and the other consisted of those with chronic neck pain of more than 7 weeks duration. Outcomes were measured for values such as pain, disability, and perceptions of improvements in quality of life, as well as levels of anxiety and depression.  The 21 patients who completed the study all received a regime of chiropractic care.  The number and frequency of visits were determined by the clinical decision of the individual practitioner rendering care to the study subjects. A standardized outcome measurement was made using a scientific method called the Bournemouth Questionnaire (BQ) for neck pain. The results showed that in the acute group, those with neck pain for less than 7 weeks, all the subjects experienced a decrease in pain with 6 of the 7 reporting a significant improvement. In the group with chronic neck pain of longer than 7 weeks, all but 2 experienced improvement. Most of that group had significant improvement, while one reported no change and one was worse at the end of the study. The acute neck pain patients were usually suffering from more severe pain than were those with chronic pain. Researchers summed up the results by stating, “The results demonstrate a positive effect for chiropractic on symptoms of neck pain. The more chronic the presentation, the more treatments were required to achieve asymptomatic status.”

Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
""" + (CTA_ES if "es" == "es" else CTA_EN)

posts["tongue-tie-and-chiropractic.md"] = f"""---
title: "Tongue-Tie and Chiropractic"
description: "## **What every parent needs to know about Tongue-Tie and Chiropractic**  Tongue-tie or its medical term ankyloglossia is a condition where someone is born with a shorter, thick, or tight band of conn"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp"
keywords:
  - chiropractor San Antonio
  - tongue-tie and chiropractic
lang: en
---

## **What every parent needs to know about Tongue-Tie and Chiropractic**

Tongue-tie or its medical term ankyloglossia is a condition where someone is born with a shorter, thick, or tight band of connective tissue at the base of the tongue or the floor of the mouth which restricts the movement of the tongue. The limitation of movement can cause not only a problem with eating, speaking, and swallowing but also latching. In children tongue tie can lead to speech delays and learning disabilities and in adults can lead to dental, neck issues, and headaches.

Many times tongue-tie goes undiagnosed for many years and is discovered later on in life.*“What many parents see as tongue-tie is really tongue dysfunction. We will get more into this later but first you need to understand the consequences of having tongue-tie. ” – Dr Foss*

**What are the consequences of having a tongue-tie:**

- **Babies that have tongue-tie can have great difficulty with latching. Many times this will appear as symptoms for mom such as “bleeding nipples” or pain around the nipple area. Many mothers will think that they are the one with the problem and thus turn their baby to formula which can have a great impact on their babies immune system.**

- **Babies will end up chewing on the nipple instead of sucking which can again lead to “bleeding nipples” and also lead to long-term consequences of malnutrition for baby and infection for mother’s.**

- **Tongue-tied children and adults many times have difficulty with rolling “r” sounds or pronouncing the letters “d”, “l”, “s”, “t” and “z”.**

- **Tongue-tie can also lead to dental issues because the tongue is essentially what cleans food and debris out of the mouth and over time this can lead to issues like gingivitis or gum disease.**

## **How can a Chiropractor Help Infants and Children and Even Adults with Tongue-Tie?**

- The first step is taking a detailed history and determining any functional limitations or symptoms due to tongue tie. Also, physically examining the tongue and mouth.

- Second if tongue-tie surgery has been performed check to see the amount of healing that has occurred or if the tie has been completely removed.

- The next step is doing a complete Chiropractic and Neurological workup including an evaluation of the spine and nervous system and also checking cranial nerves of the head and face. Many times babies that have had a difficult birth or have had some form of trauma either cesarean or difficult labor many times can have issues with cranial bones being subluxated or misaligned. One test we look at is called the “cortisol sign” where a baby can turn their wrists in and thump their chests indicating they are distressed.

- When the bones of the cranium misalign they pinch nerves particularly the nerves that go to the tongue. Our office focuses on specific cranial techniques to address issues with the cranium:

Vagus nerve – which is responsible for the parasympathetic control of the body and controls not only digestion but soothing and calming. If this nerve is compressed it can cause a baby to be more distressed.

- Hypoglossal nerve – this nerve controls the muscles of the tongue. If this nerve is compressed the tongue will appear asymmetrical.

- Facial nerve – this nerve controls taste and sensation on the tip of the tongue and if the nerve is compressed you can see how sensation can change in the tongue.

- We also look alot at the gag reflex. Typically, the gag reflex should be a small area close to the uvula of the back of the throat. If the gag reflex is covering a larger area this indicates that the Vagus nerve is compressed and irritated.

- We cannot forget to check the upper cervical spine as well because many times the upper neck can have a huge impact on the tongue.

## **How does a Chiropractor and Cranial Chiropractor help correct Tongue-Tie?**

The most important thing I tell parents is to work with a team of professionals that are trained and have experience with tongue-tie.Having a good lactation consultant that has experience with tongue-tie is a great resource in helping to assist your baby in not only assessment but treatment. Here is San Antonio I recommend [Kathy Parkes](https://breastfeedingperspectives.com/) she is an amazing resource and very knowledgeable. Also [Tina Castellanos](https://www.themilcgroup.com/) is a tremendous source at the MILC group.I find that many times tongue-tie is not necessary something that requires surgery. I typically recommend that we do 2-3 sessions of chiropractic and cranial adjusting and if it doesn’t work explore the possibility of surgery.There are pediatric dentists that also specialize in tongue-tie surgery:

- [Dana Hodge King, D.D.S.](https://www.danahodgeking.com/) located in San Antonio (Alamo Heights)

- [Evy Guerrero, D.D.S.](https://greenappleatx.com/) located in Southwest Austin

- [Marilyn Brodeur, D.D.S.](https://www.infantdentalcenter.com/my-story.html) located in Corpus Christi, Texas

- [Manuel Castillo, D.D.S.](https://happypedident.com/) located in San Antonio

Many times tongue-tie is due more to tongue dysfunction which can be corrected without surgery. Our office performs the tests we discussed earlier looking at the spine, nerves, and cranial nerves of the mouth to determine if there is some level of dysfunction. We make specific corrections to these cranial nerves by making small adjustments to the cranial bones and many times babies go back to latching correctly and not needing surgery. We monitor mom and baby closely to make sure that they are not only feeling good but functioning properly.I have advanced training in cranial adjusting through a technique called Sacral Occipital Technique ® which I am also an instructor. Through these cranial techniques being utilized around the world we have been able to help many babies avoid tongue-tie surgeries and also helped babies that have had tongue-tie surgery improve their ability to thrive after surgery.If you have any questions about how we can help give us a call.Yours in health, Dr Foss
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["trigeminal-neuralgia-and-chiropractic.md"] = f"""---
title: "Trigeminal Neuralgia and Chiropractic"
description: "Trigeminal Neuralgia (TN) is a very painful condition where the Trigeminal cranial nerve or cranial nerve #5 becomes entrapped or demyelinated. When the nerve becomes trapped it is usually due to infl"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp"
keywords:
  - chiropractor San Antonio
  - trigeminal neuralgia and chiropractic
lang: en
---

Trigeminal Neuralgia (TN) is a very painful condition where the Trigeminal cranial nerve or cranial nerve #5 becomes entrapped or demyelinated. When the nerve becomes trapped it is usually due to inflammation or blockage. Demyelination occurs when the nerve either becomes infected or compressed. Demyelination is when a nerve starts to lose its nerve transmission. It can become a very debilitating disorder.
Some of the causes of can be typical as described above and can also be atypical or what is called Atypical Trigeminal Neuralgia(ATN) or Atypical Facial Pain.
ATN usually is due to demyelination of the nerve usually caused by either a trip to the Dentist where the Dentist hits the inferior or superior alveolar nerve or due to an abcess of a tooth that causes inflammation and subsequent demyelination. To fix this problem the tooth and or abscess is removed and usually the pain goes away.
Movement of the cranial bones can also cause entrapment of the Trigeminal nerve. When the bones of the skull move out of alignment or subluxate they can put pressure or blockage onto the cranial nerves. This can happen either due to trauma, sinus pressure, or stress. Cranial chiropractic adjustments can help to remove this pressure and alleviate the source of the problem.
The difference between a typical chiropractic adjustment which usually focuses on the spine and a cranial chiropractic adjustment is that the focus is on moving the cranial bones. Dr Foss has advanced training in cranial chiropractic and has helped numerous patients with TN not only eliminate their pain but stay healthy so the TN does not come back.
For more information contact our office at 210-685-1994
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["asthma-and-chiropractic.md"] = f"""---
title: "Asthma and Chiropractic"
description: "Asthma is a chronic disease marked by inflammation and narrowing of the airways of the lungs, resulting in the symptoms of wheezing, chest tightness, shortness of breath and coughing. The effects of a"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp"
keywords:
  - chiropractor San Antonio
  - asthma and chiropractic
lang: en
---

Asthma is a chronic disease marked by inflammation and narrowing of the airways of the lungs, resulting in the symptoms of wheezing, chest tightness, shortness of breath and coughing. The effects of asthma can range from mild discomfort, to severe difficulty breathing, to death from respiratory failure in extreme cases.

More than 20 million Americans have asthma, including more than 6 million children under 18. Asthma is one of the most common chronic illnesses and one with a serious public health impact.
There has been a dramatic increase in asthma cases in both children and adults over the last 30 to 40 years. While the exact cause is unknown, many doctors believe the increase is due to environmental factors.
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["how-does-chiropractic-help-with-kids-with-chronic-ear-infections.md"] = f"""---
title: "How Does Chiropractic Help With Kids With Chronic Ear Infections?"
description: "According to the National Institute of Health (NIH) over 80 percent of children will have an ear infection before the age of three. Ear infections are one of the most common aliments in kids. As proac"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp"
keywords:
  - chiropractor San Antonio
  - how does chiropractic help with kids with chronic 
lang: en
---

According to the National Institute of Health (NIH) over 80 percent of children will have an ear infection before the age of three. Ear infections are one of the most common aliments in kids. As proactive parents we want the best for our kids so it’s important that we understand exactly what causes ear infections and how Chiropractic care can help.

**What are Ear Infections?**
Ear infections can occur in the inside, middle, and outside the ear. We are going to explore infections of the middle ear or what is commonly called Otitis Media (OM). OM is very common and it is usually the number one reason parents take their children to a ear infection specialist.

**What causes Otitis Media (OM)?**
In children as they are developing their Eustachian tubes which are pathways between the ear and the nasal cavity are smaller and straight instead of slanted downward. Because of this children many times have difficulty draining their Eustachian tubes and mucous and inflammation can build up inside the tubes.
Many times children have a weaker immune system this can be due to difficult labor, failure to thrive, early use of formula and not breast milk, poor nutrition, or latching issues. In the case of a weaker immune system this can lead to bacterial overgrowth in the mucous membranes or colon. The body’s response to this overgrowth is an immune response but if this is prolonged over a period of time it begins to weaken the immune system.

**How can a SOT(R) Chiropractor help:**
Not only can we adjust the bones of the spine but also the skull and eustachian tubes to help open up the canal and create drainage.
Call us today to find out more!
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["san-antonio-chiropractor-car-accident.md"] = f"""---
title: "San Antonio Chiropractor Car Accident"
description: "Chiropractic care can help you if you have been involved in a car accident. A San Antonio Chiropractor car accident victim can be evaluated and receive the care they need.  https://youtu.be/ZgtulDdR1k"
date: "2023-05-03"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp"
keywords:
  - chiropractor San Antonio
  - san antonio chiropractor car accident
lang: en
---

Chiropractic care can help you if you have been involved in a car accident. A San Antonio Chiropractor car accident victim can be evaluated and receive the care they need.

https://youtu.be/ZgtulDdR1kU

https://youtu.be/Cc-t-EyrWok
""" + (CTA_ES if "en" == "es" else CTA_EN)

posts["hernia-hiatal-y-la-quiropractica.md"] = f"""---
title: "Hernia Hiatal y la Quiropráctica"
description: "La hernia hiatal es una condición en la cual una porción del estómago se desliza hacia arriba a través del diafragma y se asienta en el tórax, causando síntomas como acidez estomacal y reflujo gastroe"
date: "2023-05-24"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp"
keywords:
  - chiropractor San Antonio
  - hernia hiatal y la quiropráctica
lang: es
---

La hernia hiatal es una condición en la cual una porción del estómago se desliza hacia arriba a través del diafragma y se asienta en el tórax, causando síntomas como acidez estomacal y reflujo gastroesofágico. La técnica de reflejo manipulativo quiropráctico (CMRT) es una técnica de quiropráctica que se enfoca en la manipulación de puntos específicos del cuerpo para ayudar a aliviar los síntomas de la hernia hiatal.

La CMRT se basa en la teoría de que ciertos puntos del cuerpo están conectados con los órganos internos y el sistema nervioso, y que la manipulación de estos puntos puede ayudar a mejorar la función de los órganos y reducir los síntomas de la hernia hiatal. En el caso de la hernia hiatal, la CMRT se enfoca en la manipulación de puntos específicos en la columna vertebral y en el abdomen para mejorar la función del esfínter esofágico inferior y reducir la presión sobre el diafragma.

Durante una sesión de CMRT para la hernia hiatal, el quiropráctico aplicará presión suave en puntos específicos de la columna vertebral y el abdomen. Estos puntos pueden incluir la zona torácica media de la columna vertebral, el músculo diafragma, el esternón y el esófago. La presión aplicada ayuda a aliviar la tensión y reducir la inflamación en estos puntos, mejorando así la función del sistema digestivo y reduciendo los síntomas de la hernia hiatal.
""" + (CTA_ES if "es" == "es" else CTA_EN)

posts["radiografias.md"] = f"""---
title: "Radiografías"
description: "Los quiroprácticos toman radiografías para obtener información detallada sobre la estructura ósea y la alineación de la columna vertebral y otras articulaciones. Las radiografías son una herramienta i"
date: "2023-05-24"
author: "Dr. Dan Foss, DC"
image: "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp"
keywords:
  - chiropractor San Antonio
  - radiografías
lang: es
---

Los quiroprácticos toman radiografías para obtener información detallada sobre la estructura ósea y la alineación de la columna vertebral y otras articulaciones. Las radiografías son una herramienta importante para ayudar a los quiroprácticos a diagnosticar problemas musculoesqueléticos y determinar el mejor plan de tratamiento para cada paciente.

Las radiografías pueden proporcionar información sobre la alineación de la columna vertebral, la curvatura de la columna vertebral, la presencia de fracturas, la degeneración articular y otras anomalías óseas. Esta información puede ayudar a los quiroprácticos a identificar la causa subyacente del dolor o la disfunción del paciente y desarrollar un plan de tratamiento personalizado.

Además, las radiografías pueden ser útiles para monitorear el progreso del tratamiento quiropráctico a lo largo del tiempo y para evaluar si los ajustes quiroprácticos están mejorando la alineación y la función de la columna vertebral.

Es importante tener en cuenta que, aunque las radiografías son una herramienta valiosa para los quiroprácticos, no todas las personas que buscan tratamiento quiropráctico necesitan radiografías. El quiropráctico evaluará la necesidad de tomar radiografías en función de la historia clínica del paciente, los síntomas y el examen físico.
""" + (CTA_ES if "es" == "es" else CTA_EN)

created = 0
for filename, content in posts.items():
    filepath = os.path.join("content/posts", filename)
    if os.path.exists(filepath):
        print(f"EXISTS: {filename}")
        continue
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Created: {filename}")
    created += 1
print(f"\nDone! {created} posts imported.")