import { Sequelize } from "sequelize-typescript";
import Product from "../../../db/models/products";

const undeleteProductResolver = async (parent, args, context, info) => {
    await Product.restore({ where: { id: args.id }})
}

export default undeleteProductResolver;
