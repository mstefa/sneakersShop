import Brand from "#root/db/models/brands";
import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";
import Category from "#root/db/models/category";
import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const cartResolver = async (parent, { userId, state = 'reserved' }) => {
	return await Cart.findOne({
		where: {
			userId
		},
		
		include: [
			{
				model: CartProduct,
				where: {
					state
				},
				order: [["id","DESC"],],
				include: [
					{
						model: FinalProduct as any,
						include: [
							{ model: Product as any, include: [Category as any, Brand as any] },
							{ model: Models as any },
						],
					},
				]
			}		
		],
	});
};

export default cartResolver;