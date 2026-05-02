import NeighborhoodPage, {
  generateNeighborhoodMetadata,
} from "@/components/NeighborhoodPage";

const SLUG = "boerne";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export function generateMetadata({ params }: Props) {
  return generateNeighborhoodMetadata(params, SLUG);
}

export default async function Page({ params }: Props) {
  return <NeighborhoodPage params={params} slug={SLUG} />;
}
