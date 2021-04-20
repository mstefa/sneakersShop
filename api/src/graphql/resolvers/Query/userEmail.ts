import User from "#root/db/models/users";

const userEmail = async (parent, args, context, info) => {
  const { email } = args;
  const user = await User.findAll({
    where: {
      email,
    },
  });

  return user;
};
export default userEmail;
