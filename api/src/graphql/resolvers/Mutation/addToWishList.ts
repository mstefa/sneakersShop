import WishList from "#root/db/models/wishList";

const addToWishListResolver = async (parent:any, {userId, productId}) => {
    
    const [wishList] = await WishList.findOrCreate({
        where:{
            userId,
            productId
        }
    })
    return `id: ${wishList.id.toString()} productId: ${productId} userId: ${userId}`
};

export default addToWishListResolver