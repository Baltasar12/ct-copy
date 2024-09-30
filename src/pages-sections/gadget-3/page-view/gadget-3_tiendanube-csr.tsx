"use client";

import Section2 from "../section-2";
// API FUNCTIONS
import { useQuery } from "@tanstack/react-query";
import { Services } from "@/Services";
import { ProductsServiceApiTypes } from "@/Services/tiendanube";
import Product from "@/models/Product.model";

const { getProducts, getProductById } = Services.tiendanube.products;

/*
  - This approach is using the CSR (Client-Side Rendering) method to fetch the products.
  - Using react-query you can fetch the products and handle the loading and error states, and many more.
*/

const convertProduct = (
  products: ProductsServiceApiTypes.GetProductsResponse
): Product[] =>
  products.map((product) => {
    // Extract necessary data from the original product structure
    const { id, name, handle, variants, images, brand, categories, published } =
      product;

    // Extract primary variant details (assuming first variant is the primary)
    const primaryVariant = variants[0];
    const { price, compare_at_price, promotional_price, values } =
      primaryVariant;

    // Calculate discount
    const discount = compare_at_price
      ? ((parseFloat(compare_at_price) - parseFloat(promotional_price)) /
          parseFloat(compare_at_price)) *
        100
      : 0;

    // Extract colors and sizes from variant values
    const colors = values.map((value: any) => value.es);
    const sizes = values.slice(1).map((value: any) => value.es); // Assuming color is first and sizes follow

    // Extract thumbnail image
    const thumbnail = images.length > 0 ? images[0].src : "";

    return {
      id: id.toString(),
      slug: handle.es,
      price: parseFloat(price),
      title: name.es,
      rating: 0, // Assuming rating is not available in the provided structure
      discount: Math.round(discount),
      thumbnail,
      brand,
      size: sizes,
      colors: colors.length ? [colors[0]] : [],
      images: images.map((image: any) => image.src),
      categories: categories.map((category: any) => category.name.es),
      published,
    };
  });

const GadgetThreePageView = () => {
  const productsListState = useQuery(getProductById({ id: 204230520 }));

  return (
    <>
      {productsListState.isLoading && <div>Loading...</div>}
      {productsListState.error && (
        <div>Error: {productsListState.error?.message}</div>
      )}
      {productsListState.data && (
        <Section2 products={convertProduct([productsListState.data])} />
      )}
    </>
  );
};

export default GadgetThreePageView;
