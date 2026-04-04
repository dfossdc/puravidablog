import os, re

posts_dir = "content/posts"

post_images = {
    "quiropractica-en-ninos.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Quiropractica-en-Ninos.jpg",
    "mi-batalla-en-esta-crisis-economica.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Mi-Batalla-En-Esta-Crisis-Economica.jpg",
    "a-doctor-s-perspective-on-tmj.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/A-Doctors-perspective-on-TMJ.jpg",
    "neck-pain-and-chiropractic-care.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Neck-Pain-and-Chiropractic-Care.jpg",
    "tongue-tie-and-chiropractic.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Tongue-Tie-and-Chiropractic.jpg",
    "trigeminal-neuralgia-and-chiropractic.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Trigeminal-Neuralgia-and-Chiropractic.jpg",
    "asthma-and-chiropractic.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Asthma-and-Chiropractic.jpg",
    "how-does-chiropractic-help-with-kids-with-chronic-ear-infections.md":
        "https://puravidasanantonio.net/wp-content/uploads/2023/05/How-Does-Chiropractic-Help-With-Kids-With-Chronic-Ear-Infections_.jpg",
    "san-antonio-chiropractor-car-accident.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Blog-Featured-Images.jpg",
    "hernia-hiatal-y-la-quiropractica.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Hernia-Hiatal-y-la-Quiropractica-Banner-1.jpg",
    "radiografias.md":
        "https://avatarpreview.com/puravida/wp-content/uploads/2023/05/Radiografias-Banner-1.jpg",
}

updated = 0
for filename, image_url in post_images.items():
    filepath = os.path.join(posts_dir, filename)
    if not os.path.exists(filepath):
        print(f"MISSING: {filename}")
        continue
    content = open(filepath, encoding="utf-8").read()
    new_content = re.sub(r'image:.*', f'image: "{image_url}"', content, count=1)
    if new_content != content:
        open(filepath, "w", encoding="utf-8").write(new_content)
        print(f"Updated: {filename}")
        updated += 1
    else:
        print(f"No change: {filename}")

print(f"\nDone! {updated} posts updated with original images.")
