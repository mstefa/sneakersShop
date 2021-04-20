import resolverHelper from "#root/helpers/resolverHelper";
import { Op } from "sequelize";
import Review from "#root/db/models/review";

const deletedReviewsResolver = async (parent, args, context, info) => {
  const { productId } = args;
  var obj = resolverHelper(args, true);
  var deleted = await Review.findAll<any>({
    order: [[obj.atr, obj.ord]],
    where: {
      deletedAt: {
        [Op.ne]: null,
      },
      productId
    },
    paranoid: false,
  });
  return deleted;
};

export default deletedReviewsResolver;
