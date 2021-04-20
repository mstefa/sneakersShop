import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";
import Cart from "#root/db/models/carts";

interface restoreResponse{
  userId: string,
  status: string,
}

async function restoreStock<restoreResponse>(paymentId: any){
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
    };

    for (let i = 0; i < cart.cartproducts.length; i++) {
      if (cart.cartproducts[i].state === 'reserved'){
        newStock = cart.cartproducts[i].finalproducts.stock + cart.cartproducts[i].quantity;
        id = cart.cartproducts[i].finalproducts.id;
        await FinalProduct.update({ stock: newStock }, { where: { id: id } });
      }
    }

    return status;
  } catch (e) {
    console.error(e);
    return { 
      userId: '0',
      status: "ERROR",
    };
  }
};

export default restoreStock;
