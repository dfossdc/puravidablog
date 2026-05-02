# GSC Daily Indexing — Submission Log

Tracks which URLs the scheduled task submitted to Google Search Console each day, so future runs can rotate through the priority queue.

Format: most recent run at top.

---

## 2026-05-01 (evening retry) — 4 URLs submitted, 6 already indexed

After the morning quota block, retried in the evening. Quota had reset.

**Submitted (4):**
- /en/blog/antibiotic-resistance-chiropractic-immune-support — was "Discovered, not indexed", now in priority queue
- /es/blog/dolores-de-cabeza-en-ninos-quiropractica-craneal-san-antonio — was "Discovered, not indexed"
- /en/blog/childrens-immune-system-chiropractic-cmrt-san-antonio — was "Crawled, not indexed" (Google crawled this morning at 6:38 AM but didn't index)
- /es/blog/diabetes-pancreas-conexion-columna-organo-cmrt-san-antonio — was "Discovered, not indexed"

**Already indexed (6) — saved quota:**
- /es/blog/resistencia-antibioticos-quiropractica-sistema-inmune ✅
- /en/blog/asthma-spinal-lung-connection-chiropractic-san-antonio ✅
- /es/blog/asma-conexion-columna-pulmones-quiropractica-san-antonio ✅
- /en/blog/children-headaches-chiropractic-cranial-san-antonio ✅
- /es/blog/sistema-inmune-ninos-quiropractica-cmrt-san-antonio ✅
- /en/blog/diabetes-pancreas-spinal-organ-cmrt-san-antonio ✅

**Queued for next run (top of priority queue, in order):**
- (continue with pregnancy-research posts: /en/blog/why-pregnancy-is-the-most-important-time-for-chiropractic-care, /es equivalent, /en/blog/webster-technique-breech-babies-san-antonio, etc.)
- Then 28 newly-shipped pages (hyperlocal + Spanish landing) from latest commit batch — most likely "Discovered, not indexed" since Vercel deploy was just hours ago
- Then 5 neighborhood landing pages (Stone Oak, Castle Hills, Alamo Heights, Helotes, Olmos Park)

**Notes:**
- 6 of 10 inspected were already indexed in Google — strong indexation rate. The Spanish bilingual pages are getting picked up fast.
- "Crawled - currently not indexed" on /en/blog/childrens-immune-system... is worth watching — Google is seeing the page and choosing not to index, which usually clears in 1-2 weeks.
- Quota slots remaining today: ~6. Could submit a few more if needed but stopped here per evening wrap.

---

## 2026-05-01 (morning) — Quota exceeded, 0 URLs submitted

**Property used:** `https://puravidasanantonio.com/` (URL-prefix property — the sc-domain variant doesn't exist for this account; first-run note about access was wrong, the URL-prefix property loads fine).

**Inspected (1):**
- `https://puravidasanantonio.com/en/blog/antibiotic-resistance-chiropractic-immune-support` → "URL is not on Google" / "Discovered – currently not indexed". Sitemap discovery confirmed (`/sitemap.xml`); no referring page found; no last crawl recorded.

**Submitted (0):**
Clicking REQUEST INDEXING on the URL above returned "Quota Exceeded — Sorry, we couldn't process this request because you've exceeded your daily quota. Please try submitting this again tomorrow." That happened on the very first attempt, so the daily quota was already burned before this run started — most likely from manual submissions or an Indexing API call earlier today.

Per the task instructions, I stopped after the quota message instead of cycling through more URLs.

**Queued for the next run (top of priority queue, in order):**

Just-shipped research-based posts (May 1, 2026):
- /en/blog/antibiotic-resistance-chiropractic-immune-support  ← attempted today, blocked by quota; retry first
- /es/blog/resistencia-antibioticos-quiropractica-sistema-inmune
- /en/blog/asthma-spinal-lung-connection-chiropractic-san-antonio
- /es/blog/asma-conexion-columna-pulmones-quiropractica-san-antonio
- /en/blog/children-headaches-chiropractic-cranial-san-antonio
- /es/blog/dolores-de-cabeza-en-ninos-quiropractica-craneal-san-antonio
- /en/blog/childrens-immune-system-chiropractic-cmrt-san-antonio
- /es/blog/sistema-inmune-ninos-quiropractica-cmrt-san-antonio
- /en/blog/diabetes-pancreas-spinal-organ-cmrt-san-antonio
- /es/blog/diabetes-pancreas-conexion-columna-organo-cmrt-san-antonio
- (continue down the May-1 research list, then the pregnancy posts, per SKILL.md)

**Notes / things to flag:**
- The "Add your domain property" recommendation is showing on the Overview screen — GSC notes you've only verified the URL-prefix `https://puravidasanantonio.com/`, not the parent domain. Worth adding the Domain (sc-domain) property via DNS TXT so future runs cover http/non-www/subdomains too. I didn't do this — it requires DNS access.
- GSC also flagged: a page recently got fewer impressions than usual — `/cranial-chiropractor/` (down 100%). May want to investigate separately.

---
