import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";

const checkstock = async (parent, args, context, info) => {
  const { cartId } = args;
  var aux: any;
  var cont = [];
  var auxIds = [];

  const stockProduct = await CartProduct.findAll({
    where: {
      cartId,
    },
  });

  for (let final of stockProduct) {
    aux = await FinalProduct.findOne({ where: { id: final.finalproductId } });
    if (aux.stock - final.quantity < 0) {
      return "out of stock";
    }

    cont.push(aux.stock - final.quantity);

    auxIds.push(final.finalproductId);
  }
  for (let i of cont) {
    await FinalProduct.update({ stock: i }, { where: { id: auxIds[0] } });
    auxIds.shift();
  }

  return "Modified stock";
};
export default checkstock;
