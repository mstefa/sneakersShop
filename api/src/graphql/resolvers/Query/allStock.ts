import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const allStock = async (parent, args, context, info) => {
  
  const productsStock = await FinalProduct.findAll(
      {
            include: [Product as any, Models as any],
            order:[['id', 'ASC']]
        });
        
  return productsStock;
};
export default allStock;
