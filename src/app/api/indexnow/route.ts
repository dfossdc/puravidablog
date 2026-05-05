/**
 * POST /api/indexnow
 *
 * Manually trigger an IndexNow ping for one or more URLs.
 *
 * Auth:
 *   The endpoint is protected by a shared secret. Set INDEXNOW_API_TOKEN in your
 *   environment, then send `Authorization: Bearer <token>` with every request.
 *   Without the env var set, the endpoint refuses all requests (fail-closed).
 *
 * Body:
 *   { "urls": ["https://puravidasanantonio.com/en/blog/my-post", ...] }
 *
 * Example (after deploy):
 *   curl -X POST https://puravidasanantonio.com/api/indexnow \
 *        -H "Authorization: Bearer $INDEXNOW_API_TOKEN" \
 *        -H "Content-Type: application/json" \
 *        -d '{"urls":["https://puravidasanantonio.com/en/blog/new-post"]}'
 *
 * Response: { ok, status, submitted, message? }
 */

import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const expected = process.env.INDEXNOW_API_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_API_TOKEN not configured on server" },
      { status: 503 },
    );
  }

  const auth = request.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (token !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: { urls?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Body must be JSON" },
      { status: 400 },
    );
  }

  const urls = Array.isArray(body.urls)
    ? body.urls.filter((u): u is string => typeof u === "string")
    : [];

  if (urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Body must include a non-empty `urls` array" },
      { status: 400 },
    );
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
