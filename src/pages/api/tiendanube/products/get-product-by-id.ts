import {
  ProductsServiceQueryTypes,
  productsService,
} from "@/Services/tiendanube/products";
import { customNextApiHandler } from "@/Services/core/nextjs-api-handler";
import { NextApiRequest } from "next";

export default customNextApiHandler(async (req: NextApiRequest) => {
  const { id } =
    req.query as unknown as ProductsServiceQueryTypes.GetProductByIdQuery;

  return productsService.getProductById({ id }).queryFn();
});
