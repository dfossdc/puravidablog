# Pinterest pin pipeline — handoff

This doc explains the Pinterest scaffold built on 2026-05-08 and what you need to provide to start posting pins.

## What's already built

`scripts/generate-pinterest-pins.mjs` reads your blog posts (319 of them) and emits a CSV ready for Pinterest. Run it any time:

```bash
node scripts/generate-pinterest-pins.mjs --limit 100      # newest 100 posts
node scripts/generate-pinterest-pins.mjs --lang es        # Spanish only
node scripts/generate-pinterest-pins.mjs                  # all 319
```

Output: `pinterest-pins-YYYY-MM-DD.csv` at the repo root with columns: Title, Pin description, Link, Image URL, Pinterest board, Publish date, Keywords.

A 100-pin batch was generated on 2026-05-08 — 41 EN + 59 ES, staggered 3 hours apart starting 2026-05-11 09:00.

## Three paths to actually post the pins — pick ONE

### Path A — Tailwind / Buffer / Hootsuite (recommended; ~30 min)

These tools accept CSV bulk-pin import directly. They handle scheduling, rate-limiting, and Pinterest API auth for you.

1. Sign up at tailwindapp.com (Pinterest's official partner; ~$15/month for unlimited pins). Or Buffer/Hootsuite if you already use them.
2. Connect your Pinterest business account.
3. Confirm or create the two boards used by the generator:
   - "Chiropractic Health San Antonio" (English)
   - "Salud Quiropráctica San Antonio" (Spanish)
   - If your existing boards have different names, edit `BOARDS = {…}` near the top of `scripts/generate-pinterest-pins.mjs` and re-run.
4. Click "Bulk upload" → select the generated CSV.
5. Review the queue, hit publish.

This is the fastest path. Tailwind also gives you analytics (which pin styles drive clicks back to the site).

### Path B — Manual upload via Pinterest UI (~1–2 hours, free)

Pinterest Business accounts have a bulk-create-pins UI. Slower than Path A but free.

1. Open business.pinterest.com → Pin builder → "Create multiple pins"
2. For each row in the CSV, paste in title/description/link/image
3. Schedule each pin

Best if you only have a small number of pins to post and don't want a recurring workflow.

### Path C — Direct Pinterest API integration (~2–3 hours setup, then automatic)

Build a Vercel cron that posts 5–10 pins/day from the CSV. Requires Pinterest API credentials.

Steps:

1. **Create a Pinterest dev app:**
   - Go to https://developers.pinterest.com/apps/
   - "Create app" → name it "Pura Vida Pins"
   - App type: "Custom"
   - Required scopes: `pins:write`, `boards:read`
   - Redirect URI: `https://puravidasanantonio.com/api/pinterest/callback`

2. **Get an OAuth access token:**
   - Use Pinterest's OAuth flow to authorize the app
   - Save the access token + refresh token

3. **Add env vars to Vercel:**
   - `PINTEREST_ACCESS_TOKEN`
   - `PINTEREST_REFRESH_TOKEN`
   - `PINTEREST_BOARD_EN_ID` (board ID, not name)
   - `PINTEREST_BOARD_ES_ID`

4. **Build the poster script:**
   - I can write `scripts/post-pinterest-pins.mjs` that reads the CSV and POSTs to Pinterest's `/v5/pins` endpoint. ~50 lines of code. Tell me when you have credentials and I'll write it.

5. **Wire to Vercel cron:**
   - Add to `vercel.json`: `{ path: "/api/cron/pinterest-post", schedule: "0 13,16,19 * * *" }` (3 pins/day at 8am, 11am, 2pm CDT)
   - Build `/api/cron/pinterest-post/route.ts` that picks the next-due pin from the CSV and posts it
   - Track posted pins in a Vercel KV / Sanity / git-tracked log to avoid double-posting

This is the highest-leverage path long-term — once it's running, you never touch Pinterest again — but it requires the dev-app setup which only you can do.

## Current state of the CSV

Row 1 example:
```
"Mojar la Cama (Enuresis) en Niños","Enuresis nocturna en niños: 85% resuelto sin medicamentos con quiropráctica SOT y CMRT...",https://puravidasanantonio.com/es/blog/mojar-la-cama-enuresis-en-ninos,https://puravidasanantonio.com/images/conditions/bedwetting.jpg,"Salud Quiropráctica San Antonio",2026-05-11 09:00,"enuresis quiropráctica San Antonio|mojar la cama niños...|..."
```

The script:
- Sorts posts newest-first by frontmatter date
- Skips posts without an image
- Truncates titles >100 chars
- Truncates descriptions >500 chars
- Adds three keyword hashtags to each description
- Staggers schedule across days at ~8 pins/day (Pinterest's sweet spot for organic reach)
- Routes EN posts to the English board, ES posts to the Spanish board

## Image quality note

The script reuses the existing `/images/conditions/{slug}.jpg` and `/images/social-cards/{slug}.jpg` images from the blog. These are 1200×630 (OpenGraph aspect) — Pinterest's algorithm prefers vertical 1000×1500. The pins will work and look fine, but if you want max Pinterest reach, generate vertical Pin-optimized images. Tailwind has a free template builder, or I can write a sharp-based image generator that crops/extends each post image to vertical and overlays the title.

## My recommendation

**Path A (Tailwind).** $15/month is cheaper than the time you'd spend on Path B every 2 weeks, and Path C requires Pinterest API setup that's only useful if you're committed to long-term automation. Tailwind also gives you Pinterest analytics that the API path doesn't expose easily.

If you want to go Path C eventually, do Path A now to start posting + learning what works, then migrate to API in a few months once you know which pin styles drive clicks.

## What I need from you to take next steps

| Path | What I need |
|---|---|
| A — Tailwind | Just confirm board names (or tell me the right ones) and I'll re-generate |
| B — Manual | Nothing from me — CSV is ready |
| C — API | Pinterest dev app credentials (access token + 2 board IDs) |
