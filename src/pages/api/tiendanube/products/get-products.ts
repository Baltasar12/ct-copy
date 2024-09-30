import {
  ProductsServiceQueryTypes,
  productsService,
} from "@/Services/tiendanube/products";
import { customNextApiHandler } from "@/Services/core/nextjs-api-handler";
import { NextApiRequest } from "next";

export default customNextApiHandler(async (req: NextApiRequest) => {
  const queryParams: ProductsServiceQueryTypes.GetProductsQuery = req.query;

  return await productsService.getProducts(queryParams).queryFn();
});
