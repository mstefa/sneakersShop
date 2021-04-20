import Cart from "#root/db/models/carts";

const cartSimpleResolver = async (parent, { userId }) => {
	const result =  await Cart.findOne({
		where: {
			userId
		}
	});
	return {id: result.id.toString()}
};

export default cartSimpleResolver;