import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCall from "@/components/MobileStickyCall";

const BASE_URL = "https://puravidasanantonio.com";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      locale: isEs ? "es_MX" : "en_US",
      alternateLocale: isEs ? "en_US" : "es_MX",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      {children}
      <WhatsAppButton locale={locale as "en" | "es"} />
      <MobileStickyCall locale={locale as "en" | "es"} />
    </>
  );
}
