import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Brand from "../../../db/models/brands";
import Models from "../../../db/models/models";

const filteredProducts = async (parent, args, context, info) => {
  const { categoryId, brandId } = args;
  
  if (categoryId > 0 && brandId > 0) {

    const productsCategory = await Product.findAll({
      include: [
        {
          model: Category as any,
          as: "categories",
          where: {
            id: categoryId,
          },
        },
        {
          model: Brand as any,
          as: "brand",
          where: {
            id: brandId,
          },
        },
        Models as any,
      ],
    });

    return productsCategory;
  }

  if (categoryId > 0) {

    const productsCategory = await Product.findAll({
      include: [
        {
          model: Category as any,
          as: "categories",
          where: {
            id: categoryId,
          },
        },
        {
          model: Brand as any,
          as: "brand",
        },
        Models as any,
      ],
    });

    return productsCategory;
  }

  if ( brandId > 0) {
    
    const productsCategory = await Product.findAll({
      include: [
        {
          model: Category as any,
          as: "categories",
        },
        {
          model: Brand as any,
          as: "brand",
          where: {
            id: brandId,
          },
        },
        Models as any,
      ],
    });

    return productsCategory;
  }

  const productsCategory = await Product.findAll({
    include: [
      {
        model: Category as any,
        as: "categories",
      },
      Brand as any,
      Models as any,
    ],
  });

  return productsCategory;
};

export default filteredProducts;
