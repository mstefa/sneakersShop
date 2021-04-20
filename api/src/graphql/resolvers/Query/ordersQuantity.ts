import CartProduct from "#root/db/models/cartproduct";

const ordersQuantityResolver = async () => {

    const reserved = await CartProduct.count({
        where:{
            state: 'reserved'
        }
    })
    const paid = await CartProduct.count({
        where:{
            state: 'paid'
        }
    })
    const rejected = await CartProduct.count({
        where:{
            state: 'rejected'
        }
    })
    const finished = await CartProduct.count({
        where:{
            state: 'finished'
        }
    })
    // console.log('reserved :', reserved);
    return {reserved, paid, finished, rejected};

}

export default ordersQuantityResolver;