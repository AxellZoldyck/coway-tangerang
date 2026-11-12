import type { MetadataRoute } from "next";
import { products } from "./produk/products";

const siteUrl = "https://www.cowayjabodetabek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/produk/water-purifier",
    "/produk/air-purifier",
    "/produk/water-filter",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/produk/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
