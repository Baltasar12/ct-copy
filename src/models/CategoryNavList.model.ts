import appIcons from "@/icons";

export type CategoryItem = {
  icon: keyof typeof appIcons;
  title: string;
  href?: string;
  child?: { title: string; href: string }[];
};

interface CategoryNavList {
  category: string;
  categoryItem: CategoryItem[];
}

export default CategoryNavList;
