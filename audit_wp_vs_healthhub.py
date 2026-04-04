#!/usr/bin/env python3
"""
audit_wp_vs_healthhub.py
Compares WordPress XML export against the existing Next.js Health Hub project.
Reports what posts/pages are missing, which have broken images, and which
need YouTube embeds added.
"""

import os
import re
import glob
import xml.etree.ElementTree as ET

# ── config ─────────────────────────────────────────────────────────────────
XML_FILE   = "puravida.WordPress.2026-04-04.xml"  # preferred
FALLBACK    = "puravida.WordPress.2026-04-01.xml"  # use if April-4 missing
POSTS_DIR  = "content/posts"
BLOG_DIR   = "content/blog"
ROUTES_DIR = "src/app"

NS = {
    "content": "http://purl.org/rss/1.0/modules/content/",
    "wp":      "http://wordpress.org/export/1.2/",
    "dc":      "http://purl.org/dc/elements/1.1/",
}

YT_PATTERN  = re.compile(r"https?://(?:www\.)?(?:youtube\.com/watch\?v=|youtu\.be/)[\w\-]+")
IMG_PATTERN = re.compile(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|gif|webp)', re.I)
SLUG_CLEAN  = re.compile(r"[^a-z0-9]+")


def slug_from_title(title: str) -> str:
    return SLUG_CLEAN.sub("-", title.lower()).strip("-")


def collect_local_slugs() -> set:
    slugs = set()
    for d in [POSTS_DIR, BLOG_DIR]:
        for f in glob.glob(os.path.join(d, "*.md")):
            slugs.add(os.path.splitext(os.path.basename(f))[0])
    return slugs


def collect_local_routes() -> set:
    """Collect [locale]/conditions/[slug] and [locale]/services/[slug] dirs."""
    routes = set()
    for root, dirs, _ in os.walk(ROUTES_DIR):
        for d in dirs:
            routes.add(d)
    return routes


def parse_wp_xml(xml_path: str):
    tree = ET.parse(xml_path)
    root = tree.getroot()
    posts, pages = [], []

    for item in root.findall("./channel/item"):
        post_type = item.find("wp:post_type", NS)
        status    = item.find("wp:status", NS)
        if post_type is None or status is None:
            continue
        if status.text not in ("publish",):
            continue

        title   = (item.find("title").text or "").strip()
        slug    = (item.find("wp:post_name", NS).text or "").strip()
        date    = (item.find("wp:post_date", NS).text or "")[:10]
        content = (item.find("content:encoded", NS).text or "")

        yt_urls   = YT_PATTERN.findall(content)
        img_urls  = IMG_PATTERN.findall(content)
        has_embed = bool(yt_urls)
        has_img   = bool(img_urls)

        record = dict(
            title=title, slug=slug, date=date,
            yt_urls=list(dict.fromkeys(yt_urls)),   # deduplicated
            img_urls=list(dict.fromkeys(img_urls)),
            has_embed=has_embed, has_img=has_img,
            content_len=len(content),
        )

        if post_type.text == "post":
            posts.append(record)
        elif post_type.text == "page":
            pages.append(record)

    return posts, pages


def check_local_file_for_embeds(slug: str) -> dict:
    """Return info about embeds already present in the local markdown file."""
    for d in [POSTS_DIR, BLOG_DIR]:
        path = os.path.join(d, slug + ".md")
        if os.path.exists(path):
            text = open(path).read()
            yt   = YT_PATTERN.findall(text)
            imgs = IMG_PATTERN.findall(text)
            # Check if any YouTube URL is inside an iframe
            has_iframe = "<iframe" in text and "youtube" in text
            return dict(path=path, yt_in_file=yt, imgs_in_file=imgs, has_iframe=has_iframe)
    return {}


def run_audit():
    # pick XML
    xml_path = XML_FILE if os.path.exists(XML_FILE) else FALLBACK
    print(f"\n{'='*64}")
    print(f"  WordPress vs Health Hub Audit")
    print(f"  XML : {xml_path}")
    print(f"{'='*64}\n")

    wp_posts, wp_pages = parse_wp_xml(xml_path)
    local_slugs = collect_local_slugs()

    # ── POSTS ──────────────────────────────────────────────────────────────
    print(f"WORDPRESS PUBLISHED POSTS ({len(wp_posts)} total)")
    print("-" * 64)

    missing_posts   = []
    embed_gaps      = []
    image_gaps      = []

    for p in wp_posts:
        slug   = p["slug"]
        local  = check_local_file_for_embeds(slug)
        exists = bool(local)

        status_tag = "✓ EXISTS" if exists else "✗ MISSING"
        print(f"  [{status_tag}] {p['title']}")
        print(f"           slug={slug}  date={p['date']}  content={p['content_len']}ch")

        if p["yt_urls"]:
            print(f"           YouTube: {p['yt_urls']}")
        if p["img_urls"]:
            print(f"           WP images: {p['img_urls']}")

        if not exists:
            missing_posts.append(p)
        else:
            # check whether embeds/images from WP are present locally
            if p["yt_urls"] and not local.get("has_iframe"):
                # plain-text links don't count as proper embeds
                yt_in_file = local.get("yt_in_file", [])
                iframe_ok  = local.get("has_iframe", False)
                if not iframe_ok:
                    embed_gaps.append({**p, "local_path": local["path"]})
                    print(f"           ⚠  YouTube links present but NO iframe embed in local file")

            if p["img_urls"]:
                imgs_in = local.get("imgs_in_file", [])
                missing_imgs = [u for u in p["img_urls"]
                                if os.path.basename(u) not in
                                   " ".join(imgs_in)]
                if missing_imgs:
                    image_gaps.append({**p, "missing_imgs": missing_imgs,
                                       "local_path": local["path"]})
                    print(f"           ⚠  WP image(s) NOT embedded in local file: {missing_imgs}")
        print()

    # ── PAGES ──────────────────────────────────────────────────────────────
    local_routes = collect_local_routes()
    print(f"\nWORDPRESS PUBLISHED PAGES ({len(wp_pages)} total)")
    print("-" * 64)

    page_yt_gaps = []

    for pg in wp_pages:
        slug  = pg["slug"]
        # rough match: slug appears somewhere in routes tree
        matched = slug in local_routes or slug.replace("-", "") in local_routes
        tag = "~ ROUTE?" if matched else "? UNMATCHED"
        media_note = ""
        if pg["yt_urls"]:
            media_note += f"  YouTube:{pg['yt_urls']}"
            page_yt_gaps.append(pg)
        if pg["img_urls"]:
            media_note += f"  imgs:{len(pg['img_urls'])}"
        print(f"  [{tag}] {pg['title']}  (slug={slug}){media_note}")

    # ── SUMMARY ────────────────────────────────────────────────────────────
    print(f"\n{'='*64}")
    print("  SUMMARY")
    print(f"{'='*64}")
    print(f"  WP posts   : {len(wp_posts)}")
    print(f"  Local slugs: {len(local_slugs)}")
    print()
    print(f"  MISSING posts (not in content/posts or content/blog):")
    if missing_posts:
        for p in missing_posts:
            print(f"    - {p['slug']}  ({p['title']})")
    else:
        print("    none")

    print(f"\n  EMBED GAPS (YouTube links present but no iframe):")
    if embed_gaps:
        for p in embed_gaps:
            print(f"    - {p['local_path']}")
            print(f"      videos: {p['yt_urls']}")
    else:
        print("    none")

    print(f"\n  IMAGE GAPS (WP image not referenced in local file):")
    if image_gaps:
        for p in image_gaps:
            print(f"    - {p['local_path']}")
            for u in p.get("missing_imgs", []):
                print(f"      {u}")
    else:
        print("    none")

    print(f"\n  PAGES WITH YOUTUBE (may need video section on Vercel site):")
    if page_yt_gaps:
        for pg in page_yt_gaps:
            print(f"    - {pg['title']}  ({pg['slug']})")
            for u in pg["yt_urls"]:
                print(f"      {u}")
    else:
        print("    none")

    print(f"\n{'='*64}\n")

    return dict(
        missing_posts=missing_posts,
        embed_gaps=embed_gaps,
        image_gaps=image_gaps,
        page_yt_gaps=page_yt_gaps,
    )


if __name__ == "__main__":
    run_audit()
