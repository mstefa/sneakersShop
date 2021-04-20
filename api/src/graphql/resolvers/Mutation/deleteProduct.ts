import { Sequelize } from "sequelize-typescript";
import Product from "../../../db/models/products";

const deleteProductResolver = async (parent, args, context, info) => {

  await Product.destroy({ where: { id: args.id } })

}

export default deleteProductResolver;
