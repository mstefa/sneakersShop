import Brand from "#root/db/models/brands";
import Category from "#root/db/models/category";
import Product from "#root/db/models/products";
import wishList from "#root/db/models/wishList";

type arg = {
    userId: string
}

const wishListResolver = async( parent:any, {userId}: arg ) => {

    return await wishList.findAll({
        where:{
            userId
        },
        include: [
            {
                model: Product,
                include:[Brand as any, Category as any],
            }
        ]
    })
}

export default wishListResolver;