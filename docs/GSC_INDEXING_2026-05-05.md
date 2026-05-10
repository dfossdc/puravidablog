# GSC Daily Indexing — May 5, 2026

## Summary
**0 URLs submitted today.** Quota was already exhausted from yesterday's 8-URL submission window (24-hour rolling quota hadn't reset). One URL identified that needs submission tomorrow.

## URLs inspected (all "URL is on Google" — already indexed)

EN:
1. `/en/blog/antibiotic-resistance-chiropractic-immune-support` — indexed
2. `/en/blog/asthma-spinal-lung-connection-chiropractic-san-antonio` — indexed
3. `/en/blog/children-headaches-chiropractic-cranial-san-antonio` — indexed
4. `/en/blog/childrens-immune-system-chiropractic-cmrt-san-antonio` — indexed
5. `/en/blog/optimal-fetal-positioning-spinning-babies-sot-san-antonio` — indexed

ES:
6. `/es/blog/resistencia-antibioticos-quiropractica-sistema-inmune` — indexed
7. `/es/blog/asma-conexion-columna-pulmones-quiropractica-san-antonio` — indexed
8. `/es/stone-oak-chiropractor` — indexed

## URL identified as NOT indexed (needs request tomorrow)

- `/es/provider-referral` — "URL is not on Google: Discovered - currently not indexed"
  - Tried Request Indexing → returned **Quota Exceeded** popup
  - Sitemap reference confirmed; referring pages: `/es/el-mejor-quiropractico-san-antonio`, `/es/services/quiropractica-sot`
  - Last crawl: N/A (Google has discovered the URL but never crawled it)

## Notable findings

The May 1 research-based posts (both EN and ES) have all been indexed by Google within ~4 days of shipping — that's a strong signal that the technical SEO foundation is healthy and Google is actively crawling new content. No action needed for those.

The Spanish neighborhood landing page (`/es/stone-oak-chiropractor`) is also indexed, which is good news given Spanish content historically lags English in indexing.

The pattern of "Discovered - currently not indexed" on `/es/provider-referral` matches the pre-existing issues from prior runs (e.g., `/en/blog/dejarnette-history-story-behind-sot-chiropractic` from May 4). These pages need explicit Request Indexing to break out of Google's "discovered but not crawled" purgatory.

## Tomorrow's queue (top priority)

1. `/es/provider-referral` (today's identified target — submit FIRST)
2. `/en/blog/dejarnette-history-story-behind-sot-chiropractic` (carryover from May 4)
3. `/en/blog/what-are-sot-blocks-how-do-they-work` (carryover from May 4)
4. Continue with remaining ES May 1 posts and neighborhood pages to confirm indexing status
5. Check core pages (`/en`, `/es`, `/en/conditions`, `/es/conditions`)

## Quota note

Yesterday's run submitted 8 URLs and hit quota at #9 around the same time (~24h ago). Quota error today suggests that either (a) the 24-hour window resets later in the day, or (b) the rolling window penalty extends beyond a strict 24h. Recommend running tomorrow's task ~24+ hours after this run for safety.
