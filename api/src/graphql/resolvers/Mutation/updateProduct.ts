import ProductCategory from "#root/db/models/productcategory";
import { handlerUpdate } from "#root/helpers/updateProduct";
import Product from "../../../db/models/products";
import FinalProduct from "#root/db/models/finalproduct";
import {UpdateProductAttributes} from '../../../db/models/types';


const updateProduct = async ( parent:any, args: UpdateProductAttributes )  => {
    const {id,atr,input} = args
    
    const prod = await Product.findByPk(parseInt(id))
    if(atr === "categories"){
        await ProductCategory.destroy({
            where: {
                productId:id
            },
            force: true
        })
        prod.$add("categories",input)
    }
    
    if(atr === "model"){
        await FinalProduct.destroy({
            where: {
                productId:id
            },
            force: true
        })
        prod.$add("models",input)
    }

    const update = await Product.update(handlerUpdate(atr,input),{
        where:{
            id: id
        }
    })
    
    return prod
}

export default updateProduct
