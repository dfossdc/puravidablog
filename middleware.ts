import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware: forwards the current request pathname into a header
 * (x-pathname) so the root layout can read it via `headers()` and set
 * the correct <html lang="..."> attribute per locale.
 *
 * Without this, the root layout has no way to know whether it's
 * rendering an /en or /es page, and Google sees lang="en" on every
 * page including Spanish ones.
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Block indexing of all non-production hosts (Vercel preview URLs like
  // puravidablog.vercel.app, puravidablog-git-*.vercel.app, etc.).
  // Google has been indexing the preview deployment URL alongside the
  // canonical puravidasanantonio.com — this header tells Google to drop
  // those duplicates from the index without affecting production.
  const host = request.headers.get("host") ?? "";
  const isProduction =
    host === "puravidasanantonio.com" || host === "www.puravidasanantonio.com";

  if (!isProduction) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Run on every page. Skip Next internals and static files.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
