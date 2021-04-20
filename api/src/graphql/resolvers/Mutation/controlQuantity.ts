import CartProduct from "#root/db/models/cartproduct";
import { CartProductAttributes } from "#root/db/models/types";

const controlQuantityResolver = async (parent, { id, quantity }: CartProductAttributes) => {
	
    await CartProduct.update({
        quantity
    },{
		where : {
           id
        },
	});

    return `Update quantity to ${quantity}, successfully`
};

export default controlQuantityResolver;