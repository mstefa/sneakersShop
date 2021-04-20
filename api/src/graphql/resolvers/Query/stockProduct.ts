import { Product } from "#root/db/models/products";
import Models from "#root/db/models/models";
import finalproduct from "../../../db/models/finalproduct";

const stockProduct = async (parent, args, context, info) => {
  const { productId, modelId } = args;

  const searchProduct = await finalproduct.findOne({
    where: {
      productId,
      modelId,
    },
    include: [Product as any, Models as any],
  });

  return searchProduct;
};
export default stockProduct;
