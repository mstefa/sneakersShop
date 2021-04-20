import Users from "../../../db/models/users";
import resolverHelper from "#root/helpers/resolverHelper";
import { Op } from "sequelize";

const deletedUsersResolver = async (parent, args, context, info) => {
  var obj = resolverHelper(args, true);
  var deleted = await Users.findAll<any>({
    order: [[obj.atr, obj.ord]],
    where: {
      deletedAt: {
        [Op.ne]: null,
      },
    },
    paranoid: false,
  });
  return deleted;
};

export default deletedUsersResolver;
