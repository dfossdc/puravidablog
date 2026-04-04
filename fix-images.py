import os, re

IMAGES = {
    # Adjustment / back pain / sciatica / herniated disc
    "adj": "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp",
    # Neck exam / neck pain / SOT / wellness
    "neck": "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patients-Neck-HP.webp",
    # Neck adjustment / headaches / migraines
    "neckadj": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Patients-Neck-HP-circle.webp",
    # Shockwave / softwave
    "shock": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Shockwave-Instrument-Being-Used-On-Patients-Back-HP-circle.webp",
    # Laser
    "laser": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Laser-Therapy-Being-Used-On-A-Knee-HP-circle.webp",
    # Child / pediatric
    "child": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-Child-Patient-HP-circle.webp",
    # Pregnant patient
    "prenatal": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractic-San-Antonio-TX-Pregnant-Patient-HP-circle.webp",
    # Dr. Foss portrait / about / wellness
    "about": "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-About-HP.webp",
    # Examining patient
    "exam": "https://www.puravidasanantonio.com/wp-content/uploads/bb-plugin/cache/Chiropractor-San-Antonio-TX-Dan-Foss-Examining-Patient-HP-circle.webp",
}

post_images = {
    "sot-chiropractic.md":                             IMAGES["neck"],
    "quiropractica-sot.md":                            IMAGES["neck"],
    "softwave-therapy.md":                             IMAGES["shock"],
    "terapia-softwave.md":                             IMAGES["shock"],
    "auto-injury.md":                                  IMAGES["adj"],
    "lesiones-de-auto.md":                             IMAGES["adj"],
    "pediatric-prenatal.md":                           IMAGES["child"],
    "quiropractica-pediatrica.md":                     IMAGES["prenatal"],
    "shockwave-therapy.md":                            IMAGES["shock"],
    "terapia-ondas-de-choque.md":                      IMAGES["shock"],
    "class-iv-laser.md":                               IMAGES["laser"],
    "laser-clase-iv.md":                               IMAGES["laser"],
    "prenatal-chiropractor-san-antonio-tx.md":         IMAGES["prenatal"],
    "back-pain-chiropractor-san-antonio.md":           IMAGES["adj"],
    "dolor-de-espalda-quiropractico-san-antonio.md":   IMAGES["adj"],
    "sciatica-chiropractor-san-antonio.md":            IMAGES["exam"],
    "ciatica-quiropractico-san-antonio.md":            IMAGES["exam"],
    "neck-pain-chiropractor-san-antonio.md":           IMAGES["neckadj"],
    "dolor-de-cuello-quiropractico-san-antonio.md":    IMAGES["neckadj"],
    "headaches-migraines-chiropractor-san-antonio.md": IMAGES["neckadj"],
    "dolores-de-cabeza-migranas-san-antonio.md":       IMAGES["neckadj"],
    "herniated-disc-chiropractor-san-antonio.md":      IMAGES["adj"],
    "hernia-disco-quiropractico-san-antonio.md":       IMAGES["adj"],
    "wellness-chiropractor-san-antonio.md":            IMAGES["about"],
    "bienestar-quiropractico-san-antonio.md":          IMAGES["about"],
}

posts_dir = "content/posts"
updated = 0

for filename, image_url in post_images.items():
    filepath = os.path.join(posts_dir, filename)
    if not os.path.exists(filepath):
        print(f"MISSING: {filename}")
        continue
    content = open(filepath, encoding="utf-8").read()
    # Replace empty or any existing image value
    new_content = re.sub(r'image:.*', f'image: "{image_url}"', content, count=1)
    if new_content != content:
        open(filepath, "w", encoding="utf-8").write(new_content)
        print(f"Updated: {filename}")
        updated += 1
    else:
        print(f"Skipped (no change): {filename}")

print(f"\nDone! {updated} posts updated with images.")