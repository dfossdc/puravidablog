/**
 * IndexNow integration.
 *
 * IndexNow is an open protocol that lets us ping multiple search engines
 * (Bing, Yandex, Seznam, Naver — and anything else that adopts the standard)
 * the moment content changes, instead of waiting for crawlers to find it.
 *
 * Setup:
 *   1. A unique key has been generated and is hosted at
 *      https://puravidasanantonio.com/{KEY}.txt as a verification file.
 *   2. We POST to api.indexnow.org with a list of URLs to invalidate / refresh.
 *
 * Notes:
 *   - Up to 10,000 URLs per request.
 *   - Submitting the same URL repeatedly does NOT change its priority — IndexNow
 *     dedupes.
 *   - This is for Bing/Yandex/etc. Google does NOT participate in IndexNow.
 *     Google indexation comes from sitemap + GSC + organic crawling.
 *
 * Reference: https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = "afa1c26c00c445aa95dc1ccbb8bfea99";
const HOST = "puravidasanantonio.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

export interface IndexNowResult {
  ok: boolean;
  status: number;
  submitted: number;
  message?: string;
}

/**
 * Ping IndexNow with a single URL or a batch of URLs.
 * Silently no-ops on URLs that aren't on our host (IndexNow rejects them).
 */
export async function submitToIndexNow(
  urls: string[] | string,
): Promise<IndexNowResult> {
  const list = (Array.isArray(urls) ? urls : [urls]).filter((u) =>
    u.startsWith(`https://${HOST}/`),
  );

  if (list.length === 0) {
    return { ok: false, status: 0, submitted: 0, message: "No valid URLs" };
  }

  // IndexNow allows up to 10,000 URLs per request. We chunk just in case.
  const CHUNK = 10000;
  let lastStatus = 0;
  let totalSubmitted = 0;

  for (let i = 0; i < list.length; i += CHUNK) {
    const chunk = list.slice(i, i + CHUNK);
    const body = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: chunk,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      lastStatus = res.status;
      // 200 = OK, 202 = accepted (key validation pending), both fine.
      if (res.status !== 200 && res.status !== 202) {
        const text = await res.text().catch(() => "");
        return {
          ok: false,
          status: res.status,
          submitted: totalSubmitted,
          message: text || `HTTP ${res.status}`,
        };
      }
      totalSubmitted += chunk.length;
    } catch (err) {
      return {
        ok: false,
        status: lastStatus,
        submitted: totalSubmitted,
        message: err instanceof Error ? err.message : String(err),
      };
    }
  }

  return { ok: true, status: lastStatus, submitted: totalSubmitted };
}

export const INDEXNOW_KEY_PUBLIC = INDEXNOW_KEY;
