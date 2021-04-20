import Brand from '../../../db/models/brands';
import resolverHelper from "#root/helpers/resolverHelper"
const BrandResolver = async(parent,args,context,info) => {
	var obj = resolverHelper(args,false)
	var brands = await Brand.findAll({
		order:[[obj.atr,obj.ord]]
	});
	return brands;
;
}

export default BrandResolver;
