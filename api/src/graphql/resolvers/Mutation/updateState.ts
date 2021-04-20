import CartProduct from "#root/db/models/cartproduct";

const updateStateResolver = async (parent, { orderId, state }) => {
	
    await CartProduct.update({state},
        {
            where: {
                id: orderId
            }
        })
    return CartProduct.findByPk(orderId);

};

export default updateStateResolver;