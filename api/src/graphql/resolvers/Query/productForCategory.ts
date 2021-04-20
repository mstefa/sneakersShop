import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Brand from "../../../db/models/brands";
import Models from "../../../db/models/models";


const productoForCategory = async(parent, args, context, info)=>{

  if (args.name){  // if the parameter to filter was passed, query DB filtering the results. 
    const productsCategory = await Product.findAll({
      include: [{
        model: Category as any,
        as: 'categories',
        where: {
          name: args.name  
        },   
      },
      Brand as any,
      Models as any,
    ],
    } )

    return productsCategory
    
  }else{  // if any parameter was passsed, return all products
    const productsCategory = await Product.findAll({
      include: [{
        model: Category as any,
        as: 'categories',   
      },
      Brand as any,
      Models as any,
    ],
    } )
    
    return productsCategory
  }


}

export default productoForCategory 