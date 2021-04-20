import Image from "#root/db/models/image";

const addImage = async (parent:any, {productId, image} )  => {

    return await Image.create({
        productId,
        title: image
    })
}

export default addImage;