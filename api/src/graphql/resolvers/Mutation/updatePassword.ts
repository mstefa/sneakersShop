import { User } from "#root/db/models/users";
import * as bcrypt from "bcryptjs";
const jwt = require('jwt-simple');

const updatePassword = async (parent, args, context, info) => {

  const { password, token } = args;
  const hashPassword = await bcrypt.hash(password,5)

  var payload = jwt.decode(token, process.env.PASSWORD_RESET_SECRET);

  await User.update(
    { password:hashPassword },
    {
      where: {
        id:payload.id
      },
    }
  );
  return "Password updated";
};

export default updatePassword;
