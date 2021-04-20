import Brand from "#root/db/models/brands";
import Category from "#root/db/models/category";
import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const finalproductResolver = async (parent, { productId, modelId }) => {
	return await FinalProduct.findAll({
		where: {
			productId,
			modelId,
		},
		include: [
			{ model: Models as any },
			{ model: Product as any, include: [Brand as any, Category as any] },
		],
	});
};

export default finalproductResolver;
