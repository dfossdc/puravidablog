import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

/**
 * Videos page retired 2026-05-11 — the original page was a placeholder
 * with default YouTube embed IDs (Rickrolls). It has been removed until
 * we have real Pura Vida Chiropractic videos to feature.
 *
 * next.config.mjs handles /en/videos and /es/videos with 308 redirects
 * at the edge, so this page handler is a safety net only — Vercel
 * should never actually invoke it. When run, it bounces to the locale
 * homepage.
 *
 * To restore: replace this file with a real videos directory page and
 * remove the three /videos redirect rules from next.config.mjs.
 */
export default async function VideosPage({ params }: Props) {
  const { locale } = await params;
  const loc = locale === "es" ? "es" : "en";
  redirect(`/${loc}`);
}
