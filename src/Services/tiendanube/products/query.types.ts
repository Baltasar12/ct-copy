import * as ApiTypes from "./api.types";

/**
 * Defines query parameters for listing products. Includes filtering and pagination options.
 */
export type ProductQueryParams = {
  since_id?: number; // Restrict results to after the specified ID.
  language?: string; // Specify search language.
  q?: string; // Search products containing the given text in their names, descriptions, or SKU.
  handle?: string; // Show products with a given URL.
  category_id?: number; // Show products with a given category.
  published?: boolean; // Show products by published status (true or false).
  free_shipping?: boolean; // Show products by free_shipping status (true or false).
  max_stock?: number; // Show products with less or equal stock than the specified value.
  min_stock?: number; // Show products with more or equal stock than the specified value.
  has_promotional_price?: boolean; // Show products that have a defined promotional price (true or false).
  has_weight?: boolean; // Show products that have a defined weight (true or false).
  has_all_dimensions?: boolean; // Show products that have defined depth, width, and height (true or false).
  has_weight_and_all_dimensions?: boolean; // Show products that have defined weight, depth, width, and height (true or false).
  created_at_min?: string; // Show products created after the specified ISO 8601 date.
  created_at_max?: string; // Show products created before the specified ISO 8601 date.
  updated_at_min?: string; // Show products last updated after the specified ISO 8601 date.
  updated_at_max?: string; // Show products last updated before the specified ISO 8601 date.
  sort_by?: string; // Sort products by a particular criteria (e.g., created-at-ascending).
  page?: number; // Page to show.
  per_page?: number; // Amount of results per page.
  fields?: string; // Comma-separated list of fields to include in the response.
};

/**
 * getProducts
 *
 * Extends `ProductQueryParams` to use array of `Product` keys for `fields` for enhanced type safety.
 */
export interface CustomProductQueryParams
  extends Omit<ProductQueryParams, "fields"> {
  fields?: Array<keyof ApiTypes.Product>;
}

export type GetProductsQuery = CustomProductQueryParams;

/**
 * getProductById
 */
export type GetProductByIdQuery = Pick<ApiTypes.Product, "id">;

/**
 * getProductBySku
 */
export type GetProductBySkuQuery = Pick<ApiTypes.ProductVariant, "sku">;
