import os, re

posts_dir = "content/posts"

# ── STEP 1: FIX MARKDOWN RENDERING ─────────────────────────────────────────

posts_ts = '''import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  slug: string;
  lang: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function fetchPosts(lang: string): PostFrontmatter[] {
  return getPostFiles()
    .map((filename) => {
      const slug = filename.replace(/\\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Dr. Dan Foss, DC",
        image: data.image || "",
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
        slug,
        lang: data.lang || "en",
      } as PostFrontmatter;
    })
    .filter((p) => p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function fetchPostBySlug(slug: string, lang: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, slug + ".md");
  if (!fs.existsSync(fullPath)) return null;
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const postLang = data.lang || "en";
  if (postLang !== lang) return null;

  const processed = await remark().use(remarkHtml).process(content);
  const htmlContent = processed.toString();

  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Dr. Dan Foss, DC",
    image: data.image || "",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    slug,
    lang: postLang,
    content: htmlContent,
  };
}

export function fetchAllSlugs(): { slug: string; lang: string }[] {
  return getPostFiles().map((filename) => {
    const slug = filename.replace(/\\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const { data } = matter(fs.readFileSync(fullPath, "utf8"));
    return { slug, lang: data.lang || "en" };
  });
}
'''

page_tsx = '''import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchPostBySlug, fetchAllSlugs } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./post.module.css";

const BASE_URL = "https://puravidasanantonio.com";

export const revalidate = 60;
export const dynamicParams = true;

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = fetchAllSlugs();
    return slugs.map(({ slug, lang }) => ({ locale: lang, slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await fetchPostBySlug(slug, locale);
  if (!post) return {};
  const canonical = `${BASE_URL}/${locale}/blog/${slug}`;
  return {
    title: `${post.title} | Pura Vida Chiropractic San Antonio`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/blog/${slug}`,
        es: `${BASE_URL}/es/blog/${slug}`,
        "x-default": `${BASE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: canonical,
      siteName: "Pura Vida Chiropractic",
      images: post.image
        ? [{ url: post.image, width: 800, height: 450, alt: post.title }]
        : [],
      locale: locale === "es" ? "es_MX" : "en_US",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  const post = await fetchPostBySlug(slug, locale);
  if (!post) notFound();

  const isEs = locale === "es";
  const formattedDate = new Date(post.date).toLocaleDateString(
    isEs ? "es-MX" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Dr. Dan Foss, DC" },
    publisher: {
      "@type": "Organization",
      name: "Pura Vida Chiropractic",
      url: BASE_URL,
    },
    url: `${BASE_URL}/${locale}/blog/${slug}`,
    image: post.image || "",
  };

  return (
    <>
      <Header locale={locale as "en" | "es"} currentSlug={slug} />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <article className={styles.article}>
          <Link href={`/${locale}/blog`} className={styles.back}>
            {isEs ? "← Volver al blog" : "← Back to blog"}
          </Link>
          <header className={styles.header}>
            <time className={styles.date} dateTime={post.date}>
              {formattedDate}
            </time>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <p className={styles.author}>
              {isEs ? "Por" : "By"} <strong>{post.author}</strong>
            </p>
          </header>
          {post.image && (
            <div className={styles.coverWrap}>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className={styles.cover}
                priority
                unoptimized
              />
            </div>
          )}
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer locale={locale as "en" | "es"} />
    </>
  );
}
'''

with open("src/lib/posts.ts", "w", encoding="utf-8") as f:
    f.write(posts_ts)
print("Fixed: src/lib/posts.ts")

with open("src/app/[locale]/blog/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write(page_tsx)
print("Fixed: src/app/[locale]/blog/[slug]/page.tsx")


# Each entry: (filename, [(phrase_to_link, url), ...])
# Phrases are matched once, naturally in the body text

post_links = {
    "sot-chiropractic.md": [
        ("Sacro-Occipital Technique", "https://puravidasanantonio.com/chiropractic-care/"),
        ("SOT chiropractic care", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
    "quiropractica-sot.md": [
        ("Técnica Sacro-Occipital", "https://puravidasanantonio.com/chiropractic-care/"),
        ("cuidado quiropráctico SOT", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
    "softwave-therapy.md": [
        ("SoftWave Therapy", "https://puravidasanantonio.com/softwave-therapy/"),
        ("tissue regeneration", "https://puravidasanantonio.com/softwave-therapy/"),
    ],
    "terapia-softwave.md": [
        ("terapia SoftWave", "https://puravidasanantonio.com/softwave-therapy/"),
        ("regeneración tisular", "https://puravidasanantonio.com/softwave-therapy/"),
    ],
    "auto-injury.md": [
        ("auto injury chiropractor", "https://puravidasanantonio.com/auto-injury-chiropractor/"),
        ("whiplash", "https://puravidasanantonio.com/whiplash/"),
    ],
    "lesiones-de-auto.md": [
        ("quiropráctico para lesiones de auto", "https://puravidasanantonio.com/auto-injury-chiropractor/"),
        ("latigazo cervical", "https://puravidasanantonio.com/whiplash/"),
    ],
    "pediatric-prenatal.md": [
        ("pediatric chiropractic care", "https://puravidasanantonio.com/pediatric-chiropractor/"),
        ("prenatal chiropractic care", "https://puravidasanantonio.com/pregnancy-chiropractor/"),
    ],
    "quiropractica-pediatrica.md": [
        ("cuidado quiropráctico pediátrico", "https://puravidasanantonio.com/pediatric-chiropractor/"),
        ("cuidado quiropráctico prenatal", "https://puravidasanantonio.com/pregnancy-chiropractor/"),
    ],
    "shockwave-therapy.md": [
        ("Shockwave therapy", "https://puravidasanantonio.com/shockwave-therapy/"),
        ("chronic pain", "https://puravidasanantonio.com/shockwave-therapy/"),
    ],
    "terapia-ondas-de-choque.md": [
        ("terapia de ondas de choque", "https://puravidasanantonio.com/shockwave-therapy/"),
        ("dolor crónico", "https://puravidasanantonio.com/shockwave-therapy/"),
    ],
    "class-iv-laser.md": [
        ("Class IV laser therapy", "https://puravidasanantonio.com/laser-therapy/"),
        ("photobiomodulation", "https://puravidasanantonio.com/laser-therapy/"),
    ],
    "laser-clase-iv.md": [
        ("terapia láser Clase IV", "https://puravidasanantonio.com/laser-therapy/"),
        ("fotobiomodulación", "https://puravidasanantonio.com/laser-therapy/"),
    ],
    "prenatal-chiropractor-san-antonio-tx.md": [
        ("Webster Technique", "https://puravidasanantonio.com/pregnancy-chiropractor/"),
        ("prenatal chiropractic care", "https://puravidasanantonio.com/pregnancy-chiropractor/"),
    ],
    "back-pain-chiropractor-san-antonio.md": [
        ("back pain chiropractic care", "https://puravidasanantonio.com/back-pain/"),
        ("Pura Vida Protocol", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
    "dolor-de-espalda-quiropractico-san-antonio.md": [
        ("cuidado quiropráctico para el dolor de espalda", "https://puravidasanantonio.com/back-pain/"),
        ("Protocolo Pura Vida", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
    "sciatica-chiropractor-san-antonio.md": [
        ("sciatica in San Antonio", "https://puravidasanantonio.com/sciatica/"),
        ("sciatic nerve pain", "https://puravidasanantonio.com/sciatica/"),
    ],
    "ciatica-quiropractico-san-antonio.md": [
        ("ciática en San Antonio", "https://puravidasanantonio.com/sciatica/"),
        ("dolor del nervio ciático", "https://puravidasanantonio.com/sciatica/"),
    ],
    "neck-pain-chiropractor-san-antonio.md": [
        ("neck pain", "https://puravidasanantonio.com/neck-pain/"),
        ("cranial chiropractic therapy", "https://puravidasanantonio.com/cranial-chiropractor/"),
    ],
    "dolor-de-cuello-quiropractico-san-antonio.md": [
        ("dolor de cuello", "https://puravidasanantonio.com/neck-pain/"),
        ("terapia quiropráctica craneal", "https://puravidasanantonio.com/cranial-chiropractor/"),
    ],
    "headaches-migraines-chiropractor-san-antonio.md": [
        ("headaches and migraines in San Antonio", "https://puravidasanantonio.com/headaches-migraines/"),
        ("cranial chiropractic therapy", "https://puravidasanantonio.com/cranial-chiropractor/"),
    ],
    "dolores-de-cabeza-migranas-san-antonio.md": [
        ("dolores de cabeza y migrañas en San Antonio", "https://puravidasanantonio.com/headaches-migraines/"),
        ("terapia quiropráctica craneal", "https://puravidasanantonio.com/cranial-chiropractor/"),
    ],
    "herniated-disc-chiropractor-san-antonio.md": [
        ("non-surgical chiropractic care in San Antonio", "https://puravidasanantonio.com/disc-injury/"),
        ("disc herniation", "https://puravidasanantonio.com/disc-injury/"),
    ],
    "hernia-disco-quiropractico-san-antonio.md": [
        ("cuidado quiropráctico no quirúrgico en San Antonio", "https://puravidasanantonio.com/disc-injury/"),
        ("hernia de disco", "https://puravidasanantonio.com/disc-injury/"),
    ],
    "wellness-chiropractor-san-antonio.md": [
        ("wellness chiropractic care in San Antonio", "https://puravidasanantonio.com/wellness-care/"),
        ("Pura Vida Protocol", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
    "bienestar-quiropractico-san-antonio.md": [
        ("cuidado quiropráctico de bienestar en San Antonio", "https://puravidasanantonio.com/wellness-care/"),
        ("Protocolo Pura Vida", "https://puravidasanantonio.com/chiropractic-care/"),
    ],
}


def add_link(content, phrase, url):
    """Replace the FIRST occurrence of phrase in body text (after frontmatter) with a markdown link."""
    # Find end of frontmatter
    fm_end = content.find("---", 3)
    if fm_end == -1:
        return content
    fm_end = content.find("\n", fm_end) + 1
    frontmatter = content[:fm_end]
    body = content[fm_end:]

    # Skip if already linked
    if f"[{phrase}]" in body or f"({url})" in body:
        return content

    # Case-insensitive first match
    pattern = re.compile(re.escape(phrase), re.IGNORECASE)
    match = pattern.search(body)
    if not match:
        return content

    original = match.group(0)
    linked = f"[{original}]({url})"
    new_body = body[:match.start()] + linked + body[match.end():]
    return frontmatter + new_body


updated = 0
skipped = 0

for filename, links in post_links.items():
    filepath = os.path.join(posts_dir, filename)
    if not os.path.exists(filepath):
        print(f"MISSING: {filename}")
        continue

    content = open(filepath, encoding="utf-8").read()
    original = content

    for phrase, url in links:
        content = add_link(content, phrase, url)

    if content != original:
        open(filepath, "w", encoding="utf-8").write(content)
        print(f"Linked: {filename}")
        updated += 1
    else:
        print(f"No match found: {filename}")
        skipped += 1

print(f"\nDone! {updated} posts updated with hyperlinks, {skipped} skipped.")
