import User from "../../../db/models/users";
import { UserAttributes } from '../../../db/models/types'
import * as bcrypt from "bcryptjs";
const createUserResolver = async (parent: any,{
  firstName,
  lastName,
  userName,
  isAdmin,
  email,
  password,
  nlsuscribe,
	isGmail,
  country,
  city,
  addressnumber,
  street,
  postcode
}: UserAttributes, context: any , info: any) =>{

    const hashPassword = await bcrypt.hash(password,5)
    let aux = await User.create({
      firstName,
      lastName,
      userName,
      isAdmin,
      email,
      password: hashPassword,
      nlsuscribe,
			isGmail,
      count: 1,
      country,
      city,
      addressnumber,
      street,
      postcode,
     });

    return aux
}


export default createUserResolver
