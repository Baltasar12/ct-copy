import appIcons from "@/icons";

export interface SlugParams {
  params: { slug: string };
}

export interface IdParams {
  params: { id: string };
}

export interface Category {
  path: string;
  name: string;
  icon?: keyof typeof appIcons;
  children?: Category[];
}
