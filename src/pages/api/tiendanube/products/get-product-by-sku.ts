import {
  ProductsServiceQueryTypes,
  productsService,
} from "@/Services/tiendanube/products";
import { customNextApiHandler } from "@/Services/core/nextjs-api-handler";
import { NextApiRequest } from "next";

export default customNextApiHandler(async (req: NextApiRequest) => {
  const { sku } = req.query as ProductsServiceQueryTypes.GetProductBySkuQuery;
  return productsService.getProductBySku({ sku }).queryFn();
});
