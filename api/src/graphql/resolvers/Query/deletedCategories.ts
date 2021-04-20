import resolverHelper from "#root/helpers/resolverHelper";
import { Op } from "sequelize";
import Category from "#root/db/models/category";

const deletedCategoriesResolver = async (parent, args, context, info) => {
  var obj = resolverHelper(args, true);
  var deleted = await Category.findAll<any>({
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

export default deletedCategoriesResolver;
