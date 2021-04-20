import Offer from "../../../db/models/offers";

const getOffers = async (parent: any, args: any) => {
  let { active } = args;
  let offerts: any;
  try {
    if (active) {
      offerts = await Offer.findAll({
        where: {
          active,
        },
      });
    } else {
      offerts = await Offer.findAll({
      });
    }
    return offerts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getOffers;
