import User from "#root/db/models/users";
import { emailService } from "#root/services/emailService";
import templatePwdReset from "#root/helpers/templatePwdReset";

const jwt = require("jwt-simple");

const passwordReset = async (	parent: any, {email}: any ) => {
	if (email !== undefined) {
		const user = await User.findOne({
			where: {
				email,
			},
		});
		var payload = {
			id: user.id,
			email,
		};

		const token = jwt.encode(payload, process.env.PASSWORD_RESET_SECRET);
		const URL = "http://localhost:3000" + "/resetpassword/" + token;
    const subject = "Reset Password Ecommerce";
    
		await emailService(email, subject, templatePwdReset(URL) );

    return "Ok";
    
	} else {
		return "Email address is missing.";
	}
};

export default passwordReset;
