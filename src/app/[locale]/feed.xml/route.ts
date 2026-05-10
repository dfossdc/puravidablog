import { fetchPosts } from "@/lib/posts";

const BASE_URL = "https://puravidasanantonio.com";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";
  const posts = fetchPosts(lang).slice(0, 50);

  const title = lang === "es"
    ? "Pura Vida Chiropractic — Blog (Español)"
    : "Pura Vida Chiropractic — Blog";
  const link = `${BASE_URL}/${lang}/blog`;
  const description = lang === "es"
    ? "Artículos sobre quiropráctica, salud, y bienestar del Dr. Dan Foss en San Antonio, TX."
    : "Chiropractic, health, and wellness articles from Dr. Dan Foss in San Antonio, TX.";

  const items = posts.map((post) => {
    const postUrl = `${BASE_URL}/${post.lang}/blog/${post.slug}`;
    const pubDate = new Date(post.date + "T09:00:00-05:00").toUTCString();
    const imageUrl = post.image?.startsWith("http")
      ? post.image
      : post.image
        ? `${BASE_URL}${post.image}`
        : "";
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${postUrl}</guid>
      <author>${escapeXml(post.author)}</author>
      <category>${escapeXml((post.keywords[0] || post.tags?.[0] || "chiropractic"))}</category>${imageUrl ? `
      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" length="0" />
      <media:content url="${escapeXml(imageUrl)}" medium="image" />` : ""}
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${link}</link>
    <description>${escapeXml(description)}</description>
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/${lang}/feed.xml" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
