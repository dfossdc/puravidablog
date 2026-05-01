// Legacy route — the canonical URLs are /[locale]/{slug}-chiropractor.
// Redirect any visitor who lands here to the canonical URL so we don't
// split SEO signal between two URLs serving the same content.
import { redirect } from "next/navigation";
import { neighborhoodSlugs } from "@/lib/neighborhoods";

export async function generateStaticParams() {
  // Don't generate any static pages for this legacy route.
  return [];
}

interface Props {
  params: Promise<{ locale: string; area: string }>;
}

export default async function LegacyAreasServedPage({ params }: Props) {
  const { locale, area } = await params;
  if (neighborhoodSlugs.includes(area)) {
    redirect(`/${locale}/${area}-chiropractor`);
  }
  redirect(`/${locale}`);
}
