import { Metadata } from "next";
import { WishListPageView } from "@/pages-sections/customer-dashboard/wish-list";
// API FUNCTIONS
import { getWishListProducts } from "@/utils/__api__/wish-list";
import Product from "@/models/Product.model";

export const metadata: Metadata = {
  title: "Wish List - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default async function WishList({ searchParams }: any) {
  const { products, totalProducts } = await getWishListProducts(searchParams.page);
  return <WishListPageView products={products as unknown as Product[]} totalProducts={totalProducts} />;
}
