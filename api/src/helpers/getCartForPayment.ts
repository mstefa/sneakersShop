import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";
import Product from "#root/db/models/products";
import Cart from "#root/db/models/carts";

const getCartForPayment = async (userId:number) => {
	let status= 'ok'

  try{
    let cart =  await Cart.findOne({
      where: {
        userId
      },
      include: [
        {
          model: CartProduct as any,
          as: 'cartproducts',
            where: {
              state: 'reserved'
            },
          include: [{model: FinalProduct as any, include:  [Product as any]}]
        },
      ],
    });
    
    let count = 0;
    let price = 0;
    let unitPrice = 0;

    let id = '';
    if(cart?.cartproducts.length > 0){
      cart.cartproducts.forEach(async (element) => {
        id=element.id;
        unitPrice = Math.floor(element.finalproducts.product.price * ( 1 - element.finalproducts.product.discount))
        count = count + element.quantity;
        price = price + (element.quantity * unitPrice)

        let numberUpdates = await CartProduct.update(
          { price: unitPrice},
          { where: 
              { id } 
          }
        );
    
      });
    }else{
      console.error({message: `cart: ${cart?.id} has not product added`})
      status = 'not product found'
    }
    return {count, price, status}
  }
  catch(error){

    let count = 0;
    let price = 0;
    console.error(error)
    return {count, price, status: 'error'}
  
  }
};

export default getCartForPayment;