# LinkedIn Auto-Posting — Make.com Setup Walkthrough

End state: a new Make.com scenario runs daily at 9am, picks one pending row from a `linkedin-posts` Google Sheet tab, posts it to your new Pura Vida Chiropractic LinkedIn company page, then marks the row as posted.

Brand-new dedicated scenario (NOT modifying your existing Facebook scenarios).

**Estimated total setup time: 30-40 minutes.** Most of it is one-time clicking.

---

## Step 1 — Create the Google Sheet tab (~3 min)

1. Open the existing Pura Vida Google Sheet (ID `1VJ5CoKWwkeDHX6fymR2fvPajikE4P0z1wKsabBaklaw`).
2. At the bottom, click the **+** to add a new tab. Name it: **`linkedin-posts`**
3. Open the file `/Users/dannyfoss/puravidablog/linkedin-posts-make.csv` (it's the 32-row data file I just generated).
4. Open it in a text editor or Excel, **select all + copy**.
5. Back in the Google Sheet, click cell A1 of the new tab → **Edit → Paste special → Paste comma-separated**. (If that menu is missing, just regular paste — Google usually auto-detects CSV format.)

You should now see 6 columns: Status, Post Text, Image URL, Blog Link, Post Date, Posted Date — and 32 rows of data, all marked "pending."

If anything looks off, tell me and I'll regenerate the CSV.

---

## Step 2 — Connect LinkedIn in Make.com (~5 min)

1. Open Make.com → **Connections** (left sidebar) → **Add**.
2. Search for **LinkedIn**. Pick **LinkedIn** (the one with the blue icon, not Sales Navigator).
3. Click **Continue / Authorize**. LinkedIn will pop a permission window — log in as Dr. Dan Foss (`dfossdc@gmail.com` or whatever your LinkedIn login is) and grant permissions including:
   - Manage your Pages
   - Post on your behalf
   - Read your profile
4. Make.com will save a connection named something like "LinkedIn (Dan Foss)". Note the connection name — you'll select it in step 4.

---

## Step 3 — Create the new scenario (~10 min)

1. Make.com → **Scenarios** → **Create a new scenario**.
2. Name it: **`LinkedIn Posts Pura Vida`**

### Module 1: Google Sheets — Search Rows

1. Add the first module → search for **Google Sheets** → pick **Search Rows**.
2. Configure:
   - **Connection**: your existing Google Sheets connection
   - **Spreadsheet ID**: the existing PVC sheet (or paste the URL)
   - **Sheet Name**: `linkedin-posts`
   - **Has headers?**: Yes
   - **Filter** → Status equal to `pending`
   - **Maximum number of returned rows**: `1`
   - **Sort by**: row number ascending (so it picks the oldest pending one)
3. Save.

### Module 2: LinkedIn — Create a Share

1. Add a second module after Google Sheets → search for **LinkedIn** → pick **Create a Share**.
   - If you see "Create an Image Share" or "Create a Post" instead, those work too — Make.com renames these occasionally. Pick the one that supports text + image.
2. Configure:
   - **Connection**: the LinkedIn connection from Step 2
   - **Author Type**: **Organization** (NOT Person — we want it from the company page)
   - **Author URN / Organization**: paste your new company page ID. Your URL is `https://www.linkedin.com/company/121203974/` — so the URN format is `urn:li:organization:121203974`
   - **Commentary** (the post text): map to **`Post Text`** from the Google Sheets module output
   - **Visibility**: PUBLIC
   - **Media → Type**: IMAGE
   - **Media → Original URL**: map to **`Image URL`** from the Google Sheets module
   - **Media → Title**: leave blank or map to a snippet of the title
   - **Content → URL**: map to **`Blog Link`** (this makes the post link to your blog post)
3. Save.

### Module 3: Google Sheets — Update Row

1. Add a third module → Google Sheets → **Update a Row**.
2. Configure:
   - Same connection / sheet
   - **Sheet Name**: `linkedin-posts`
   - **Row Number**: map to `Row Number` from Module 1 (Search Rows output)
   - **Status** (column A): set value to `posted`
   - **Posted Date** (column F): set to `{{now}}` (Make.com built-in for current timestamp)
3. Save.

### Wire it up

The flow should be: **Google Sheets (Search Rows)** → **LinkedIn (Create Share)** → **Google Sheets (Update Row)**

Make sure the lines connect in that order.

### Schedule

1. Click the clock icon at the bottom of the scenario → **Run Scenario**.
2. Schedule: **Every Day at 09:00**.
3. Click **Save**.

---

## Step 4 — Test before activating (~3 min)

1. Click **Run Once** (the play button at the bottom of the scenario).
2. Watch each module light up green. If a module errors, click it for the error detail.
3. Open your LinkedIn company page (`https://www.linkedin.com/company/121203974/`) — a new post should appear within a minute.
4. Open the Google Sheet → the first `pending` row should now be `posted` with a timestamp in column F.

If the test post looks good, **activate the scenario** (toggle the green switch top-right of the scenario editor). Done.

---

## Common gotchas

| Symptom | Fix |
|---|---|
| LinkedIn module says "Insufficient permissions" | Re-authorize in Connections — make sure you grant page-management + post-on-behalf scopes |
| Post text comes out as raw URL, not a preview card | LinkedIn auto-generates a preview from the `Content → URL` field; sometimes takes 30 sec to render |
| Image doesn't show | Most common cause is WebP — but the CSV I generated uses .jpg/.png only. If a row still has WebP, swap the Image URL in that row to `https://puravidasanantonio.com/images/dr-foss-adjusting-patient.jpg` (a generic fallback) |
| "Author URN invalid" | Double-check you used `urn:li:organization:121203974` exactly. Make.com sometimes wants just the number `121203974` in a different field — try both |
| Posts duplicate | Module 1 should filter on Status equal "pending" AND limit to 1 row — verify both |

---

## When the queue runs out

In ~32 days the scenario will exhaust the queue and stop posting. To refill:

- Either: ask me to generate a new batch of 30+ rows from your latest content (`/Users/dannyfoss/puravidablog/linkedin-posts-make.csv` was the first batch).
- Or: manually add rows to the bottom of the sheet — copy the column structure exactly, set Status = `pending`, leave Posted Date blank.
- Or: build a separate scenario that resets all `posted` rows back to `pending` after 90 days, so the queue cycles. Tell me if you want this — it's a 5-minute add-on.

---

## File reference

- Setup CSV (32 rows ready to paste): `/Users/dannyfoss/puravidablog/linkedin-posts-make.csv`
- Company page ID: `121203974`
- Company page URN: `urn:li:organization:121203974`
- Existing Google Sheet ID: `1VJ5CoKWwkeDHX6fymR2fvPajikE4P0z1wKsabBaklaw`
