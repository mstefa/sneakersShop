import { FinalProduct } from "#root/db/models/finalproduct";

const updateStock = async (parent, args, context, info) => {
  const { modelId, productId, input } = args;
  if(modelId === "all"){
    await FinalProduct.update(
      { stock: input },
      {
        where: {
          productId,
        },
      }
    );
  }
  else{
  await FinalProduct.update(
    { stock: input },
    {
      where: {
        modelId,
        productId,
      },
    }
  );}
  return "Stock was modified.";
};

export default updateStock;
