# GBP Weekly Post Automation — Setup Instructions

This file contains the full scheduled-task spec for the weekly Google Business Profile post draft. Couldn't auto-register it from inside another scheduled task; you can set it up in 30 seconds from any fresh Cowork conversation.

## How to set it up

1. Open a brand-new Cowork chat (NOT one that started from a scheduled-task run).
2. Paste this:

> Create a scheduled task called "gbp-weekly-post-draft". Run it every Monday at 8:00 AM. Use the prompt from `/Users/dannyfoss/puravidablog/gbp-weekly-task-setup.md` (the body below the "## Task prompt" heading).

Claude will read this file, register the task, and confirm it's scheduled.

## Cron schedule

`0 8 * * 1` — every Monday at 8:00 AM local time (San Antonio = Central). Local time, NOT UTC.

## Task prompt

```
Weekly Google Business Profile (GBP) post draft for Pura Vida Chiropractic.

WHY THIS RUNS WEEKLY: Google's local algorithm rewards GBP profiles that post consistently — weekly is the sweet spot for a small practice. Each post should drive traffic to a recent blog article and reinforce keyword/topic authority. Note: Google deprecated the GBP API for posts in 2024, so this task drafts copy and pre-fills the GBP UI; the user makes the final click to publish (publishing is a "sensitive write" action that needs human approval).

PRACTICE FACTS (don't make these up):
- Pura Vida Chiropractic
- Address: 2318 NW Military Hwy Suite 103, San Antonio, TX 78231
- Phone: (210) 685-1994
- Website: https://puravidasanantonio.com
- Hours: Mon, Tue, Thu 7am - 4pm
- Doctor: Dr. Dan Foss, DC. 23 years experience. Only chiropractor in SA offering true SOT Craniopathy + CMRT visceral adjusting.
- Bilingual practice (English + Spanish)

WHAT TO DO EACH RUN:

1. Pick the next post in rotation.
   - Read the rotation log at /Users/dannyfoss/puravidablog/gbp-post-log.md (create it if it doesn't exist).
   - Run `ls -t /Users/dannyfoss/puravidablog/content/posts/ | head -30` to get the 30 most recently authored blog posts.
   - Filter to posts NOT already in the rotation log AND with a date frontmatter within the last 90 days.
   - Pick ONE — prefer EN posts (GBP audience is bilingual but the form defaults to English; if you pick a Spanish-only landing page, post bilingual copy).
   - Read the full markdown of the chosen post to get title, description, image path, and a hook from the body.

2. Draft the GBP post copy.
   - GBP "Update" post format: 100-1500 chars, image, optional CTA button (Book / Learn more / Call / Sign up).
   - Hook (1-2 sentences pulled from the post intro, NOT the title verbatim — make it stop-the-scroll worthy).
   - Body (2-3 sentences): the practical takeaway / who this helps / what makes Dr. Foss's approach different.
   - CTA line: "Book your free consultation: (210) 685-1994 or visit [link]"
   - Hashtags at end: #SanAntonioChiropractor #PuraVida + 1-2 topical hashtags (#PregnancyCare, #PediatricChiropractic, #SOT, #CMRT, etc.).
   - Total length 600-1200 chars works best.
   - Tone: warm, evidence-based, locally-rooted. NO generic AI-cliché openers ("In today's fast-paced world", "Did you know..."). Lead with a concrete patient scenario or a sharp claim.

3. Determine the CTA button:
   - Type: "Learn more"
   - URL: https://puravidasanantonio.com/[locale]/blog/[slug] (the chosen post)

4. Determine the image:
   - Use the post's hero image (from frontmatter image: field). Confirm it exists at /Users/dannyfoss/puravidablog/public[image-path] before proceeding. If it doesn't, use /Users/dannyfoss/puravidablog/public/images/dr-foss-adjusting-patient.webp as the fallback.

5. Open Google Business Profile and pre-fill.
   - Call request_access for "Google Chrome" with reason "Pre-fill weekly Google Business Profile post for user review."
   - Use the Claude_in_Chrome MCP. Navigate to https://business.google.com/dashboard/ (or https://business.google.com/posts/ if the user has multiple locations).
   - If the page shows a location picker, select "Pura Vida Chiropractic".
   - Click the "Add update" or "Create post" button.
   - Type the drafted copy into the post text field.
   - Add the CTA button: select "Learn more" and paste the post URL.
   - Note: image upload via Chrome MCP is finicky — if the upload field is a hidden file input, use the file_upload tool with the absolute image path. If it requires a click that opens a native file picker, SKIP the image step and tell the user to drag-drop the image themselves at /Users/dannyfoss/puravidablog/public[image-path].
   - DO NOT click Publish. Stop here. The user will review and publish.

6. Append the post to the rotation log:
   - Open /Users/dannyfoss/puravidablog/gbp-post-log.md.
   - Append a new entry at the top:
     ```
     ## [today's date]
     Post: [slug]
     URL: https://puravidasanantonio.com/[locale]/blog/[slug]
     Status: Drafted, awaiting user publish
     Copy: [first 80 chars of the body...]
     ```

7. Report back:
   - Which post was picked and why.
   - The full drafted copy (so the user can copy-paste manually if Chrome filled it imperfectly).
   - The post URL and image path.
   - Any blockers (login required, can't find post button, image upload failed, etc.).
   - Reminder that they need to click "Publish" themselves.

EDGE CASES:
- If GBP requires login: STOP. Tell the user to sign in to business.google.com first, then trigger this task again manually.
- If no fresh blog posts exist (everything in last 90 days has been used): tell the user the queue is exhausted and suggest authoring new content first.
- If quota / rate limit errors hit: STOP and report. Do not retry.
- If you can't find the "Add update" button: take a screenshot, tell the user the GBP UI may have changed, and stop. Do not invent post content blindly.
- DO NOT publish under any circumstances. Publishing is a write action requiring user consent every time.

REMEMBER: this is an automated, unattended run. Make reasonable choices, log what you did, and stop cleanly at the "ready to publish" state for the user to review.
```

## What to know

**Why I can't auto-register:** This conversation started from your existing GSC daily indexing scheduled task. Cowork prevents nested task creation as a safety guardrail. Setting it up in a fresh conversation takes about 10 seconds.

**Why human-in-the-loop on publish:** Publishing to your live business profile is a sensitive action. The task drafts the post and opens GBP with everything pre-filled — you just review and click Publish.

**Image upload caveat:** Some browser-controlled file uploads on web apps require a native OS file picker, which the browser MCP can't drive. If image upload fails, the task will tell you to drag-drop the image yourself.
