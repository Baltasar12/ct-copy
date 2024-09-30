import { apiKeyFactory } from "../../core/keyGenerator";
import * as ApiTypes from "./api.types";
import * as QueryTypes from "./query.types";
import { tiendanubeKey } from "../key";
import { createQueryHandler } from "../apiService";

/**
 * Product Service
 * Provides functions to interact with the Products API of the Tienda Nube/Nuvemshop.
 * Includes operations to list products, get products by ID, and get products by SKU.
 */

// KEY
const productsKey = "products";

const { generateKey } = apiKeyFactory({
  repositoryKey: tiendanubeKey,
  serviceKey: productsKey,
});

// ENDPOINT PATHS
const endpointPaths = {
  products: "products",
  sku: "sku",
};

export const productsService = {
  /**
   * getProducts
   *
   * Fetches a list of products based on the provided query parameters.
   *
   * @param {GetProductsQuery} params Query parameters for listing products.
   * @returns {GetProductsResponse} An array of products.
   */
  getProducts: (query?: QueryTypes.GetProductsQuery) =>
    createQueryHandler<
      ApiTypes.GetProductsResponse,
      QueryTypes.GetProductsQuery
    >({
      serverEndpointPath: [endpointPaths.products],
      clientApiRoutePath: [
        tiendanubeKey,
        endpointPaths.products,
        "get-products",
      ],
      queryParams: query,
      queryKeyParts: ["get-products"],
      generateKey,
    }),

  /**
   * getProductById
   *
   * Fetches a single product by its ID.
   *
   * @param {GetProductByIdQuery} { id } The unique identifier for the product.
   * @returns {GetProductByIdResponse} The requested product.
   */
  getProductById: ({ id }: QueryTypes.GetProductByIdQuery) =>
    createQueryHandler<
      ApiTypes.GetProductByIdResponse,
      QueryTypes.GetProductByIdQuery
    >({
      serverEndpointPath: [endpointPaths.products, String(id)],
      clientApiRoutePath: [
        tiendanubeKey,
        endpointPaths.products,
        "get-product-by-id",
      ],
      queryParams: { id },
      queryKeyParts: ["get-product-by-id", String(id)],
      generateKey,
    }),

  /**
   * getProductBySku
   *
   * Fetches a single product by its SKU.
   *
   * @param {GetProductBySkuQuery} { sku } The SKU of the product variant.
   * @returns {GetProductBySkuResponse} The product containing the specified SKU.
   */
  getProductBySku: ({ sku }: QueryTypes.GetProductBySkuQuery) =>
    createQueryHandler<
      ApiTypes.GetProductBySkuResponse,
      QueryTypes.GetProductBySkuQuery
    >({
      serverEndpointPath: [endpointPaths.products, endpointPaths.sku, sku],
      clientApiRoutePath: [
        tiendanubeKey,
        endpointPaths.products,
        "get-product-by-sku",
      ],
      queryParams: { sku },
      queryKeyParts: ["get-product-by-sku", sku],
      generateKey,
    }),
};
