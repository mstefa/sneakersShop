import Image from "#root/db/models/image";

const imageResolver = async (parent, {productId} ) => {
    
    return await Image.findAll({
        where: {
            productId
        }
    })
}

export default imageResolver;