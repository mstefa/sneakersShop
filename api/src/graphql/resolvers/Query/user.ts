import User from "#root/db/models/users";

const userResolver = async (parent, { id }) => {
  return await User.findOne({
    where: {
      id,
    },
  });
};

export default userResolver;
