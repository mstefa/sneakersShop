import wishList from '#root/db/models/wishList';

const deleteFromWishlistResolver = async(parent: any, {productId, userId} ) => {

    const result: any = await wishList.destroy({
        where:{
            productId,
            userId,
        },
        force: true
    })
    return `The product was successfully removed from wishlist`;
}

export default deleteFromWishlistResolver;