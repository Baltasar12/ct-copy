import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Section2 from "../section-2";
// API FUNCTIONS
import api from "@/utils/__api__/gadget-3";

// ==============================================================
type Props = { slug: string };
// ==============================================================

export default async function GadgetThreeCategoriesPageView({ slug }: Props) {
  const [products, breadcrumb] = await Promise.all([
    api.getAllProductsBySlug(),
    api.getBreadcrumb(slug)
  ]);

  return (
    <Fragment>
      {/* ALL PRODUCTS */}
      <Section2 products={products} breadcrumb={breadcrumb} />

 
    </Fragment>
  );
}
