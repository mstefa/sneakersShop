import User from "../../../db/models/users";
import resolverHelper from "#root/helpers/resolverHelper";

const userResolver = () => {
  var obj = resolverHelper({ atr: "id", ord: "ASC" }, true);
  return User.findAll({
    order: [[obj.atr, obj.ord]],
  });
};

export default userResolver;
