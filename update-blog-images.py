#!/usr/bin/env python3
"""Update blog post frontmatter images to use local condition images."""
import os
import re

POSTS_DIR = "content/posts"

# Map slug → local condition image path
IMAGE_MAP = {
    # ── English ──────────────────────────────────────────────
    "a-doctor-s-perspective-on-tmj":                          "/images/conditions/tmj.webp",
    "asthma-and-chiropractic":                                "/images/conditions/sinuscongestion.jpg",
    "auto-injury":                                            "/images/conditions/autoaccident.jpg",
    "back-pain-chiropractor-san-antonio":                     "/images/conditions/backpain.jpg",
    "backpack-safety-kids-spine-san-antonio":                 "/images/conditions/growingpains.jpg",
    "chiropractic-asthma-san-antonio":                        "/images/conditions/sinuscongestion.jpg",
    "class-iv-laser":                                         "/images/conditions/sports-injury.webp",
    "corrective-chiropractic-results-san-antonio":            "/images/conditions/postural-correction.webp",
    "degenerative-joint-disease-chiropractor-san-antonio":    "/images/conditions/arthritis.webp",
    "dr-dan-foss-story":                                      "/images/conditions/torticollis.jpg",
    "first-chiropractic-visit-what-to-expect":                "/images/conditions/latinofamily.jpg",
    "first-time-chiropractor-san-antonio":                    "/images/conditions/latinofamily.jpg",
    "headaches-migraines-chiropractor-san-antonio":           "/images/conditions/migrane.jpg",
    "herniated-disc-chiropractor-san-antonio":                "/images/conditions/discproblems.jpg",
    "how-does-chiropractic-help-with-kids-with-chronic-ear-infections": "/images/conditions/infantcolic.jpg",
    "is-it-safe-to-take-a-baby-to-the-chiropractor":          "/images/conditions/infantcolic.jpg",
    "joint-pain-chiropractor-san-antonio":                    "/images/conditions/arthritic-hands.jpg",
    "neck-pain-and-chiropractic-care":                        "/images/conditions/neck.jpg",
    "neck-pain-chiropractor-san-antonio":                     "/images/conditions/neck.jpg",
    "neck-pain-desk-job-san-antonio":                         "/images/conditions/forwardheadposture.jpg",
    "nutrition-spine-health-san-antonio":                     "/images/conditions/backpain.jpg",
    "pediatric-chiropractor-san-antonio":                     "/images/conditions/growingpains.jpg",
    "pediatric-prenatal":                                     "/images/conditions/pregnancy.webp",
    "prenatal-chiropractor-san-antonio-tx":                   "/images/conditions/pregnancy.webp",
    "pura-vida-protocol-san-antonio":                         "/images/conditions/postural-correction.webp",
    "san-antonio-chiropractor-car-accident":                  "/images/conditions/autoaccident.jpg",
    "sciatica-chiropractor-san-antonio":                      "/images/conditions/sciatica.jpg",
    "sciatica-relief-san-antonio":                            "/images/conditions/sciatica.jpg",
    "scoliosis-chiropractor-san-antonio":                     "/images/conditions/scoliosis.jpg",
    "shockwave-therapy":                                      "/images/conditions/rotator-cuff.jpg",
    "softwave-therapy":                                       "/images/conditions/sports-injury.webp",
    "sot-chiropractic":                                       "/images/conditions/postural-correction.webp",
    "text-neck-treatment-san-antonio":                        "/images/conditions/forwardheadposture.jpg",
    "tongue-tie-and-chiropractic":                            "/images/conditions/tonguetie.jpg",
    "trigeminal-neuralgia-and-chiropractic":                  "/images/conditions/headache.jpg",
    "wellness-chiropractor-san-antonio":                      "/images/conditions/latinofamily.jpg",
    "what-does-a-chiropractor-do":                            "/images/conditions/backpain.jpg",
    "x-rays-chiropractic-san-antonio":                        "/images/conditions/rib-xray.jpg",

    # ── Spanish ───────────────────────────────────────────────
    "bienestar-quiropractico-san-antonio":                    "/images/conditions/latinofamily.jpg",
    "ciatica-quiropractico-san-antonio":                      "/images/conditions/sciatica.jpg",
    "dolor-articular-quiropractico-san-antonio":              "/images/conditions/arthritic-hands.jpg",
    "dolor-de-cuello-quiropractico-san-antonio":              "/images/conditions/neck.jpg",
    "dolor-de-espalda-quiropractico-san-antonio":             "/images/conditions/backpain.jpg",
    "dolores-de-cabeza-migranas-san-antonio":                 "/images/conditions/migrane.jpg",
    "enfermedad-articular-degenerativa-san-antonio":          "/images/conditions/arthritis.webp",
    "es-seguro-llevar-bebe-quiropractico":                    "/images/conditions/infantcolic.jpg",
    "escoliosis-quiropractico-san-antonio":                   "/images/conditions/scoliosis.jpg",
    "hernia-disco-quiropractico-san-antonio":                 "/images/conditions/discproblems.jpg",
    "hernia-hiatal-y-la-quiropractica":                       "/images/conditions/ibs.jpg",
    "huesero-vs-quiropractico-san-antonio":                   "/images/conditions/latinofamily.jpg",
    "laser-clase-iv":                                         "/images/conditions/sports-injury.webp",
    "lesiones-de-auto":                                       "/images/conditions/autoaccident.jpg",
    "mi-batalla-en-esta-crisis-economica":                    "/images/conditions/stressanxietytension.jpg",
    "primera-visita-quiropractico-que-esperar":               "/images/conditions/latinofamily.jpg",
    "quiropractica-comunidad-latina-san-antonio":             "/images/conditions/latinofamily.jpg",
    "quiropractica-en-ninos":                                 "/images/conditions/growingpains.jpg",
    "quiropractica-para-embarazo-natural":                    "/images/conditions/pregnancy.webp",
    "quiropractica-pediatrica":                               "/images/conditions/infantcolic.jpg",
    "quiropractica-sot":                                      "/images/conditions/postural-correction.webp",
    "quiropractico-sin-seguro-san-antonio":                   "/images/conditions/latinofamily.jpg",
    "quiropractico-trabajadores-construccion-san-antonio":    "/images/conditions/rotator-cuff.jpg",
    "radiografias":                                           "/images/conditions/rib-xray.jpg",
    "subluxacion-vertebral-que-es-quiropractico":             "/images/conditions/postural-correction.webp",
    "terapia-ondas-de-choque":                                "/images/conditions/sports-injury.webp",
    "terapia-softwave":                                       "/images/conditions/sports-injury.webp",
}

updated = 0
skipped = 0

for filename in sorted(os.listdir(POSTS_DIR)):
    if not filename.endswith(".md"):
        continue
    slug = filename[:-3]
    new_image = IMAGE_MAP.get(slug)
    if not new_image:
        print(f"  NO MAPPING: {slug}")
        skipped += 1
        continue

    filepath = os.path.join(POSTS_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find frontmatter block
    if not content.startswith("---"):
        print(f"  NO FRONTMATTER: {slug}")
        skipped += 1
        continue

    end = content.find("---", 3)
    if end == -1:
        print(f"  MALFORMED FRONTMATTER: {slug}")
        skipped += 1
        continue

    frontmatter = content[3:end]
    body = content[end:]  # includes closing ---

    new_image_line = f'image: "{new_image}"'

    if re.search(r'^image:', frontmatter, re.MULTILINE):
        # Replace existing image line
        new_frontmatter = re.sub(
            r'^image:.*$',
            new_image_line,
            frontmatter,
            flags=re.MULTILINE
        )
    else:
        # Insert after title line
        new_frontmatter = re.sub(
            r'^(title:.*\n)',
            r'\1' + new_image_line + '\n',
            frontmatter,
            count=1,
            flags=re.MULTILINE
        )

    new_content = "---" + new_frontmatter + body
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  ✓ {slug} → {new_image}")
    updated += 1

print(f"\nDone: {updated} updated, {skipped} skipped")
