import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const allModelsProduct = async (parent, args, context, info) => {
  const { productId } = args;
  const product = await FinalProduct.findAll(
      {
           where: {
                productId 
            } ,
            include: [Product as any, Models as any],
        });
        
  return product;
};
export default allModelsProduct;
