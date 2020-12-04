const { Controller } = require("../orm/database");
const User = require("../models/user");
const controllers = new Controller("mongo");

const { JWT_SECRET } = require("../configs");

const JWT = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const encodedToken = (userID) => {
	return JWT.sign(
		{
			iss: "Huy Tue",
			_id: userID,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1),
		},
		JWT_SECRET
	);
};

const getUser = async (req, res, next) => {
	const { userID } = req.params;
	const user = await controllers.findById(User, userID);
	console.log(user);
	return await res.status(200).json({
		user,
	});
};

const index = async (req, res, next) => {
	const users = await controllers.find(User);
	return res.status(200).json({
		users,
	});
};

const newUser = (req, res, next) => {
	const newUser = new User(req.body);
	controllers.save(User, newUser);
	return res.status(201).json({
		user: newUser,
	});
};

const replaceUser = async (req, res, next) => {
	// enforce new user to old user
	const { userID } = req.params;
	const newUser = req.body;

	const result = await controllers(User, userID, newUser);

	return res.status(200).json({
		success: true,
		user: result,
	});
};

const signOut = async (req, res) => {
	res.clearCookie("token");
	res.json({
		message: "Signout success",
	});
};

const secret = async (req, res, next) => {
	return res.status(200).json({
		message: "You have access to secret page",
	});
};

const signUp = async (req, res, next) => {
	const { email } = req.body;

	// Check if there is a user with the same user
	const foundUser = await User.findOne({ email });
	if (foundUser)
		return res
			.status(403)
			.json({ error: { message: "Email is already in use." } });

	// Create a new user
	const newUser = new User(req.body);
	controllers.save(User, newUser);

	// Encode a token
	const token = encodedToken(newUser._id);

	res.setHeader("Authorization", token);
	return res.status(201).json({ success: true });
};

const signIn = async (req, res, next) => {
	const { authID, authType } = req.body;
	// Check if there is a user with the same user
	const foundUser = await controllers.findOne(User, {
		authID: authID,
		authType: authType,
	});

	if (foundUser) {
		console.log("login");
		let token = encodedToken(foundUser._id);
		res.setHeader("Authorization", token);
		return res.status(200).json({
			success: true,
			user: foundUser,
			token: token,
		});
	}
	next();
	// Create a new user
	console.log("regist");
	const newUser = new User(req.body);
	await controllers.save(User, newUser);

	// Encode a token
	let token = encodedToken(newUser._id);

	res.setHeader("Authorization", token);
	return res.status(201).json({
		success: true,
		user: newUser,
		token: token,
	});
};

const updateUser = async (req, res, next) => {
	const { userID } = req.params;
	const newUser = req.body;

	const result = await controllers(User, userID, newUser);
	return await res.status(200).json({
		success: true,
		user: result,
	});
};

const deleteUser = async (req, res, next) => {
	const userID = req.params;
	await controllers.remove(User, userID);
	return res.status(200).json({
		success: true,
	});
};

requireSignin = expressJwt({
	secret: JWT_SECRET,
	algorithms: ["HS256"],
});

module.exports = {
	getUser,
	index,
	newUser,
	replaceUser,
	secret,
	signOut,
	signIn,
	signUp,
	updateUser,
	deleteUser,
	requireSignin,
};
