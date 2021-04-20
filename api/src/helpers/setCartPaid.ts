import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const setCartPaid = async (paymentId: any) => {
  try {
    let cart = await Cart.findOne({
      where: {
        paymentId: paymentId,
      },
    });

    let numberUpdates = await CartProduct.update(
      { state: "paid"},
      { where: 
          { cartId: cart.id,
            state: 'reserved'
          } }
    );

    return {
      userId: cart.userId,
      numberUpdates
    }

  } catch (e) {
    console.error(e);
    return {
      userId: 0,
      numberUpdates: 0
    }
  }
};

export default setCartPaid;
