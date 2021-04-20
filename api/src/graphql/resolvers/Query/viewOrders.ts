import Cart from "#root/db/models/carts";
import FinalProduct from "#root/db/models/finalproduct";
import CartProduct from "#root/db/models/cartproduct";
import Product from "#root/db/models/products";
import Category from "#root/db/models/category";
import Brand from "#root/db/models/brands";
import Models from "#root/db/models/models";
import User from "#root/db/models/users";


const ordersResolver = async (parent, { orderId, state = 'reserved' }) => {
    
    if (orderId === 'all'){
        const allOrders: any = await CartProduct.findAll({
            where: {
                state
            },
            include: [
                {
                    model: FinalProduct as any,
                    include: [
                        { model: Product as any, include: [Category as any, Brand as any] },
                        { model: Models as any },
                    ],
                },
                {
                    model: Cart as any,
                    include: [ {
                        model: User as any
                    } ]
                }
            ], 
        })
        return allOrders
    }else{
        return await CartProduct.findAll({
            where:{
                id: orderId
            },
            include: [
                {
                    model: FinalProduct as any,
                    include: [
                        { model: Product as any, include: [Category as any, Brand as any] },
                        { model: Models as any },
                    ],
                },
                {
                    model: Cart as any,
                    include: [ {
                        model: User as any
                    } ]
                }
            ], 
        })
    }
    

};

export default ordersResolver;