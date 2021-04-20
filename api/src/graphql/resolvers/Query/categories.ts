import Category from '#root/db/models/category';
import resolverHelper from "#root/helpers/resolverHelper"

const CategoriesResolver = async(parent,args,context,info) => {
	var obj= resolverHelper(args,false)
	var category = await Category.findAll({
		order:[[obj.atr,obj.ord]]
	});
	return category

}

export default CategoriesResolver;
