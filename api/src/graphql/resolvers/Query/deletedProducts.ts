import Brand from "../../../db/models/brands";
import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Models from "../../../db/models/models";
import resolverHelper from "#root/helpers/resolverHelper";
import { Op } from "sequelize";

const deletedProductResolver = async(parent, args, context, info) => {
	var obj = resolverHelper(args, true);
	var deleted = await Product.findAll({
		order: [[obj.atr, obj.ord]],
		where: {
			deletedAt: {
				[Op.ne]: null
			}
		},
		include: [Brand as any, Category as any, Models as any],
		paranoid: false
	});
	return deleted;
};

export default deletedProductResolver;
