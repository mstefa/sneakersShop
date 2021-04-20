import { Sequelize } from "sequelize-typescript";
import User from "../../../db/models/users";

const deleteUserResolver = async (parent, args, context, info) => {

  await User.destroy({ where: { id: args.id } })

  return "deleted"
}

export default deleteUserResolver;
