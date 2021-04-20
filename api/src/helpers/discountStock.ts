import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";
import Cart from "#root/db/models/carts";

interface discountResponse{
  userId: string,
  status: string,
  ids:[string],
  stock:[boolean]

}

async function discountStock<discountResponse>(paymentId: any){
  try {
    let cart = await Cart.findOne({
      where: {
        paymentId: paymentId,
      },
      include:[{model: CartProduct as any , include: FinalProduct as any}],
    });

    let newStock = 0;
    let id = "";
    let status = {
      userId: cart.userId,
      status: "OK",
      ids: [],
      stock: [],
    };

    for (let i = 0; i < cart.cartproducts.length; i++) {
      if (cart.cartproducts[i].state === 'reserved'){
        newStock = cart.cartproducts[i].finalproducts.stock - cart.cartproducts[i].quantity;
        id = cart.cartproducts[i].finalproducts.id;
        status.ids.push(id);
        newStock < 1 ? status.stock.push(false) : status.stock.push(true);
        await FinalProduct.update({ stock: newStock }, { where: { id: id } });
      }
    }

    return status;
  } catch (e) {
    console.error(e);
    return { 
      userId: '0',
      status: "ERROR",
      ids: [],
      stock: []
    };
  }
};

export default discountStock;
