import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";
import { CartProductAttributes } from "#root/db/models/types";

const addToCartResolver = async (
	context: any,
	{ finalproductId, cartId, price, quantity }: CartProductAttributes
) => {
	const [orden, created] = await CartProduct.findOrCreate({
		where: {
			finalproductId,
			cartId,
      state: 'reserved'
		},
		defaults: {
			finalproductId,
			cartId,
			price,
			quantity,
			state: 'reserved'
		},
	});

	if (!created) {
		await orden.update({
			quantity: orden.quantity + 1,
			price: orden.price * (orden.quantity + 1),
		});
	}

	return orden;
};

export default addToCartResolver;
