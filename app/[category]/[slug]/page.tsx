import { notFound } from "next/navigation";
import { productPages } from "@/data/productPage";
import ProductPageTemplate from "@/components/product/productPageTemplate";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { category, slug } = await params;

  const product = productPages.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  return <ProductPageTemplate product={product} />;
}
