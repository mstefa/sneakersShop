import { Sequelize } from "sequelize-typescript";
import User from "../../../db/models/users";

const undeleteUserResolver = async (parent, args, context, info) => {
  await User.restore({ where: { id: args.id } });
  return "Done";
};

export default undeleteUserResolver;
