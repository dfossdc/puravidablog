#!/usr/bin/env node
/**
 * Fetch the live sitemap.xml and submit every URL to IndexNow.
 *
 * Run after deploy to immediately tell Bing/Yandex/etc. about all current
 * URLs:  npm run indexnow:submit
 *
 * For incremental pings on a single URL after a content edit, use the
 * /api/indexnow endpoint or call submitToIndexNow() directly from server code
 * (e.g. inside an admin "publish" handler).
 *
 * Reference: https://www.indexnow.org/documentation
 */

const KEY = "afa1c26c00c445aa95dc1ccbb8bfea99";
const HOST = "puravidasanantonio.com";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  // Match every <loc>...</loc> entry. Sitemap is plain (no nested sitemaps).
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  return matches
    .map((m) => m.replace(/<\/?loc>/g, "").trim())
    .filter((u) => u.startsWith(`https://${HOST}/`));
}

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text().catch(() => "");
  return { status: res.status, body: text };
}

async function main() {
  console.log(`Fetching ${SITEMAP_URL}...`);
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs in sitemap.`);

  if (urls.length === 0) {
    console.error("No URLs found — aborting.");
    process.exit(1);
  }

  // IndexNow allows up to 10,000 URLs per request. Chunk just in case.
  const CHUNK = 10000;
  let submitted = 0;
  for (let i = 0; i < urls.length; i += CHUNK) {
    const chunk = urls.slice(i, i + CHUNK);
    console.log(
      `Submitting chunk ${i / CHUNK + 1} (${chunk.length} URLs)...`,
    );
    const result = await submit(chunk);
    if (result.status !== 200 && result.status !== 202) {
      console.error(`HTTP ${result.status}: ${result.body}`);
      process.exit(1);
    }
    submitted += chunk.length;
  }

  console.log(`✓ Submitted ${submitted} URLs to IndexNow.`);
  console.log(
    "Bing should reflect these within minutes; Yandex/others within hours.",
  );
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
