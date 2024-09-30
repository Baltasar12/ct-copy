// src/models/Product.ts

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  compare_at_price: number | null; // Puede ser null si no hay precio de comparación
  cost: number | null; // Costo del producto
  weight: number | null;
  weight_unit: string | null; // Unidad de peso (kg, g, lb, etc.)
  height: number | null;
  width: number | null;
  depth: number | null;
  sku: string | null;
  stock_management: boolean;
  available_stock: number | null;
  images: string[];
  thumbnail: string ; // URL de la imagen destacada
  published_at: string | null; // Fecha de publicación (formato ISO 8601)
  created_at: string; // Fecha de creación (formato ISO 8601)
  updated_at: string; // Fecha de actualización (formato ISO 8601)
  variants: Variant[];
  brand: Brand | null; // Puede ser null si no tiene marca
  categories: Category[];
}

interface Variant {
  id: number;
  product_id: number;
  name: string;
  price: number;
  compare_at_price: number | null;
  sku: string | null;
  weight: number | null;
  weight_unit: string | null;
  height: number | null;
  width: number | null;
  depth: number | null;
  stock: number | null;
  available_stock: number | null;
  images: string[];
  created_at: string;
  updated_at: string;
}

interface Brand {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: number;
  name: string;
  permalink: string;
  tree: Category[] | null; // Subcategorías
  created_at: string;
  updated_at: string;
}

export default Product;