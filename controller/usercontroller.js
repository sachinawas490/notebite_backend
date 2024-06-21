const generatetoken = require("../jwt/generatetoken.js");
const User = require("../model/usermodel.js");
const registration = async (req, res) => {
	console.log(req.body);
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res.status(401).json({ message: "incomplete data" });
	}
	try {
		const findemail = await User.findOne({ email });
		console.log(findemail);
		if (findemail) {
			return res
				.status(401)
				.json({ message: "email is already presented. try with other email" });
		} else {
			const newuser = new User({
				name,
				email,
				password,
			});
			const user =await newuser.save();
			console.log(user);
			return res.status(201).json({ message: "user register succcessfully" });
		}
	} catch (error) {
		res
			.status(401)
			.json({ message: "error occurs during registration try again" });
	}
};
const login = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body)
	if (!email || !password) {
		return res.status(401).json({ message: "incomplete data" });
	}
	try {
		const finduser = await User.findOne({ email, password });
		if (finduser) {
			let temp={ id: finduser._id,email:finduser.email };
			console.log(temp,"----   ",finduser)
			const token = await generatetoken(temp);
			console.log(token);
			const userinfo = {
				
				token
			};
			res.status(200).json({ userinfo });
		} else {
			res.status(401).json({ message: "email and password not found" });
		}   
	} catch (error) {
        res
			.status(401)
			.json({ message: "error occurs during login try again" });
    }
};

module.exports = { registration, login };
