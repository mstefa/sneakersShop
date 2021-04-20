import Brand from "../../../db/models/brands";
import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Models from '../../../db/models/models';
import resolverHelper from "#root/helpers/resolverHelper"

const productResolver = async(parent,args,context,info) => {
	var obj = resolverHelper(args,true) 
	var products = await Product.findAll({
		order: [[obj.atr,obj.ord]],
		include: [Brand as any, Category as any, Models as any ],
	});
	return products     
};

export default productResolver;
