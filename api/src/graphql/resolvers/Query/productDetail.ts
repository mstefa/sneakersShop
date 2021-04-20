import Brand from "#root/db/models/brands";
import Category from "#root/db/models/category";
import Product from "../../../db/models/products";
import Models from "../../../db/models/models";

const productDetailResolver = async (parent, args, context, info) => {
  const productDetail = await Product.findByPk(args.id, {
    include: [Brand as any, Category as any, Models as any],
  });
  return productDetail;
};

export default productDetailResolver;
