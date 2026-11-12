import { notFound } from "next/navigation";
import ProductDetailPage from "../ProductDetailPage";
import { getProduct, products } from "../products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
