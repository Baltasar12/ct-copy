import appIcons from "@/icons";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: keyof typeof appIcons;
  image?: string;
  description?: string | null; // Puede ser null
  parent: number | null; // ID de la categoría padre (puede ser null si es una categoría principal)
  tree: Category[] | null; // Subcategorías (puede ser null si no tiene subcategorías)
  featured?: boolean;
}

export default Category;
