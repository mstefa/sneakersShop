import User from "../../../db/models/users";

const logoutUser = async (parent: any, args: any , context: any , info: any ) => {

  if (!context.req.userId) {
    return {logout: true};
  }

  const user = await User.findOne({
    where: {
      id:context.req.userId
    }
  });
  
  if (!user) {
    return {logout: true};
  }
  user.count += 1; 
  await user.save();

  context.res.clearCookie('access-token');
  context.res.clearCookie('refresh-token');
  return {logout: true};
}

export default logoutUser;