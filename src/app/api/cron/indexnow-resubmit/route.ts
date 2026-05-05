/**
 * Daily Vercel Cron: GET /api/cron/indexnow-resubmit
 *
 * Pulls the live /sitemap.xml and submits every URL to IndexNow.
 *
 * Vercel calls this on the schedule defined in vercel.json (daily). To prevent
 * arbitrary callers from triggering bulk submissions, we verify the
 * Authorization header against CRON_SECRET (Vercel automatically provides this
 * for cron routes — see https://vercel.com/docs/cron-jobs#securing-cron-jobs).
 *
 * If you want to manually trigger from a terminal, use the bulk script
 * `npm run indexnow:submit` instead — it does the same job with no auth.
 */

import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 30; // seconds

const SITEMAP_URL = "https://puravidasanantonio.com/sitemap.xml";

export async function GET(request: Request) {
  // Vercel cron requests carry the CRON_SECRET as Authorization: Bearer <secret>.
  // The secret is auto-injected by Vercel for cron routes; we just verify it.
  const expected = process.env.CRON_SECRET;
  if (expected) {
    const auth = request.headers.get("authorization") || "";
    const token = auth.replace(/^Bearer\s+/i, "");
    if (token !== expected) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }
  }
  // If CRON_SECRET is unset (local dev), allow the request through with a warning.

  let urls: string[];
  try {
    const res = await fetch(SITEMAP_URL, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Sitemap fetch failed: HTTP ${res.status}` },
        { status: 502 },
      );
    }
    const xml = await res.text();
    const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
    urls = matches.map((m) => m.replace(/<\/?loc>/g, "").trim());
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 502 },
    );
  }

  if (urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: "No URLs in sitemap" },
      { status: 502 },
    );
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json(
    { ...result, totalInSitemap: urls.length },
    { status: result.ok ? 200 : 502 },
  );
}
