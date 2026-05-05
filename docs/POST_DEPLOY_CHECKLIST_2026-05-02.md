# Post-deploy checklist — May 2, 2026 wave

20 unpushed commits land a wave of SEO + compliance fixes. After you push and Vercel deploys, run this checklist to lock in the wins and trigger fresh re-crawls.

## 1. Push and verify Vercel deploy

```bash
cd ~/puravidablog
git push origin claude/pura-vida-nextjs-site-KtAyo
```

Then watch the Vercel dashboard for the build to go green. If the build fails on Google Fonts (the sandbox hits this — it's a network thing), Vercel won't because it has internet access.

Once the deploy is live, spot-check three URLs in a fresh incognito:

- `https://puravidasanantonio.com/` — should show the 8 insurance plan logos under "We Are Insurance Friendly" (NOT "we accept" / "in-network")
- `https://puravidasanantonio.com/en/site-map` — new HTML directory page; lists every page on the domain
- `https://puravidasanantonio.com/en/blog/back-pain-chiropractor-san-antonio` — view source, search for `<title>`. Should be ≤60 chars.

## 2. Google Search Console

Open [search.google.com/search-console](https://search.google.com/search-console).

### Resubmit sitemap
1. Sitemaps → click `sitemap.xml` → Resubmit. (Or remove and re-add if "Resubmit" is greyed out.)
2. Confirm "Discovered URLs" count goes up (we added the new `/site-map` page + Spanish-only landing pages).

### Request indexing for the new HTML site map
1. Top URL bar → paste `https://puravidasanantonio.com/en/site-map` → Enter
2. Click "Request Indexing"
3. Repeat for `https://puravidasanantonio.com/es/site-map`

### Request indexing for the high-value commercial pages
Paste each of these into the URL inspection bar and click "Request Indexing" (Google rate-limits to ~10/day per property):

```
https://puravidasanantonio.com/en/migraine-chiropractor-san-antonio
https://puravidasanantonio.com/en/headache-chiropractor-san-antonio
https://puravidasanantonio.com/en/scoliosis-chiropractor-san-antonio
https://puravidasanantonio.com/en/postpartum-chiropractor-san-antonio
https://puravidasanantonio.com/es/quiropractico-para-migranas-san-antonio
https://puravidasanantonio.com/es/quiropractico-cerca-de-mi-san-antonio
https://puravidasanantonio.com/es/que-es-un-quiropractico
https://puravidasanantonio.com/es/huesero-san-antonio
```

If you hit the daily quota, queue the rest for tomorrow.

## 3. Semrush re-crawl

[semrush.com/siteaudit](https://www.semrush.com/siteaudit) → puravidasanantonio.com project.

1. Click "Rerun campaign" (top right).
2. Wait ~30-60 minutes for the crawl to complete.
3. Compare against the May 2 baseline:

| Metric | May 2 baseline | Expected after re-crawl |
|---|---|---|
| Long title element | 377 warnings | ≈0 (we trimmed 298 metaTitles) |
| Pages need >3 clicks | 240 | ≈0 (HTML site map collapses depth) |
| Incorrect sitemap pages | 14 errors | 0 (we already pruned the sitemap) |
| 4XX errors | 178 | likely lower (runtime safety net + canonical redirects) |
| Site Health | 86% | should rise to 88-90% |

If any of those numbers are still high, screenshot the issue detail and send it over so I can target it.

## 4. Bing Webmaster Tools

[bing.com/webmasters](https://www.bing.com/webmasters) → puravidasanantonio.com.

1. Sitemaps → resubmit `sitemap.xml`.
2. URL Submission → paste the 8 high-value URLs above. Bing's daily quota is much more generous than Google's (10K/day on a verified site).

## 5. Verify the insurance section visually

Open `puravidasanantonio.com/` and `puravidasanantonio.com/es/` in your phone's browser. Confirm:

- The 8 insurance plan logos render in a 2-up grid on mobile, 4-up on desktop
- The heading reads "We Are Insurance Friendly" / "Somos Insurance Friendly" — NOT "We Accept Insurance"
- The body line reads "Bring your insurance card and ID..." — exactly the phrasing you specified

## 6. (Optional) Pull the 29 content-optimization detail list from Semrush

In Semrush Site Audit → "Issues" tab → search for "content optimization" or scroll the Notices column. Click into that issue. There's a URL list — export to CSV or screenshot the URL column and send it over. With the actual URLs in hand I can target each one in a single batch instead of guessing from word counts.

## 7. IndexNow — push new URLs to Bing/Yandex/Seznam/Naver

Set up 2026-05-04. Daily Vercel cron (`/api/cron/indexnow-resubmit`) auto-resubmits
the entire sitemap once per day at 08:17 UTC, so new content gets picked up
within 24 hours without any manual step. To override:

- **After a big content batch and you don't want to wait 24h:** run
  `npm run indexnow:submit` from your local terminal. Pulls live sitemap and
  pings IndexNow with all URLs in one call. Bing reflects within minutes.
- **For a single URL after publishing one post:** call the endpoint directly:
  ```
  curl -X POST https://puravidasanantonio.com/api/indexnow \
    -H "Authorization: Bearer $INDEXNOW_API_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"urls":["https://puravidasanantonio.com/en/blog/new-post"]}'
  ```
- **Sanity webhook auto-ping (recommended):** In Sanity Studio → Manage →
  API → Webhooks, click "Create webhook":
    - **URL:** `https://puravidasanantonio.com/api/indexnow`
    - **Trigger on:** Create + Update + Delete
    - **Filter:** `_type == "post"` (or whichever schema your blog posts use)
    - **HTTP method:** POST
    - **HTTP headers:**
      - `Authorization: Bearer <your INDEXNOW_API_TOKEN value>`
      - `Content-Type: application/json`
    - **Projection:**
      ```
      { "urls": [
        "https://puravidasanantonio.com/en/blog/" + slug.current,
        "https://puravidasanantonio.com/es/blog/" + slug.current
      ] }
      ```
      (adjust to your actual blog URL pattern — currently slugs are bilingual-distinct)
    - **API version:** Use the same Sanity API version your app uses
  Important caveat: the URL must be live (Vercel rebuild done) before the
  webhook fires, otherwise IndexNow gets a 404 and rejects the URL. If your
  Sanity-publish → Vercel-rebuild flow takes more than ~30s, the daily cron
  will catch it as a backstop.

Verify it's working: Bing Webmaster Tools → URL Inspection → enter any
URL. "Last submitted" timestamp should reflect recent activity. Or check
Vercel logs for `/api/cron/indexnow-resubmit` invocations.

The IndexNow key (`afa1c26c00c445aa95dc1ccbb8bfea99`) is hosted publicly at
`/afa1c26c00c445aa95dc1ccbb8bfea99.txt` — required by the IndexNow protocol
and not sensitive. The shared secret `INDEXNOW_API_TOKEN` (Vercel env var)
IS sensitive — keep it in 1Password and never commit it.

## What's NOT auto-fixed and needs your call

- **Google Business Profile photo refresh.** Counts directly toward Local Pack ranking. If you have any new patient-results photos this week, upload via the GBP mobile app.
- **Bing Places verification status.** If still pending, schedule the postcard arrival into your calendar.
- **GA4 conversion event setup.** GA4 is now installed, but the booking-form submit isn't wired as a conversion. Open GA4 → Admin → Events → mark `form_submit` as a conversion. Otherwise we can't measure form CRO.

---

**Generated 2026-05-02. Updated whenever a new deploy wave goes out.**
