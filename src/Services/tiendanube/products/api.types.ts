import { SharedApiTypes } from "../_shared";

export interface Product {
  id: number;
  name: SharedApiTypes.LocalizedString;
  description: SharedApiTypes.LocalizedString;
  handle: SharedApiTypes.LocalizedString;
  attributes: SharedApiTypes.LocalizedString[];
  published: boolean;
  free_shipping: boolean;
  requires_shipping: boolean;
  canonical_url: string;
  video_url: string;
  seo_title: SharedApiTypes.LocalizedString;
  seo_description: SharedApiTypes.LocalizedString;
  brand: string;
  created_at: string;
  updated_at: string;
  variants: ProductVariant[];
  tags: string;
  images: ProductImage[];
  categories: Category[];
}

export interface ProductVariant {
  id: number;
  image_id: number | null;
  product_id: number;
  position: number;
  price: string;
  compare_at_price: string;
  promotional_price: string;
  stock_management: boolean;
  stock: number;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: string;
  values: SharedApiTypes.LocalizedString[];
  barcode: string;
  mpn: string | null;
  age_group: string | null;
  gender: string | null;
  created_at: string;
  updated_at: string;
  cost: string;
  inventory_levels: SharedApiTypes.InventoryLevel[];
}

export interface ProductImage {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: string[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: SharedApiTypes.LocalizedString;
  description: SharedApiTypes.LocalizedString;
  handle: SharedApiTypes.LocalizedString;
  parent: number | null;
  subcategories: Category[];
  seo_title: SharedApiTypes.LocalizedString;
  seo_description: SharedApiTypes.LocalizedString;
  google_shopping_category: string;
  created_at: string;
  updated_at: string;
}

/**
 * getProducts
 */
export type GetProductsResponse = Product[];

/**
 * getProductById
 */
export type GetProductByIdResponse = Product;

/**
 * getProductBySku
 */
export type GetProductBySkuResponse = Product;