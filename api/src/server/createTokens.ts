import { sign } from "jsonwebtoken"; 
import User from "../db/models/users";

export const createTokens = (user: User) => {
  const refreshToken = sign(
    { id: user.id, count: user.count, isdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d"
    }
  );
  const accessToken = sign({ id: user.id, count: user.count, isAdmin: user.isAdmin}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15min"
  });

  return { refreshToken, accessToken };
};