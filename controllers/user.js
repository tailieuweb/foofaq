const { Controller } = require("../orm/database");
const User = require("../models/user");
const controllers = new Controller("mongo");

const { JWT_SECRET } = require("../configs");

const JWT = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const encodedToken = (userID) => {
	return JWT.sign(
		{ _id: userID._id },
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

const newUser = async (req, res, next) => {
	const newUser = new User(req.body);
	await controllers.save(User, newUser);
	return res.status(201).json({
		user: newUser,
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
	const username = req.body;

	// Check if there is a user with the same user

	const foundUser = await User.findOne(username);
	if (foundUser)
		return res.status(403).json({
			error: {
				message: "Username is already in use.",
			},
		});

	// Create a new user
	const newUser = new User(req.body);

	await controllers.save(User, newUser);

	// Encode a token
	const token = encodedToken(newUser._id);
	res.cookie("token", token, {
		expiresIn: "1d",
	});
	// res.setHeader("Authorization", token);
	return res.status(201).json({
		success: true,
	});
};

//Login with normal user
const signIn = async (req, res, next) => {
	const { username, password } = req.body;
	const authType = "local";
	const user = await controllers.findOne(User, {
		username,
		authType,
	});
	if (!user) {
		return res.status(400).json({
			error: "User with that username does not exist. Please signup.",
		});
	}
	if (!user.isValidPassword(password)) {
		return res.status(400).json({
			error: "Username and password do not match.",
		});
	}
	const loginToken = encodedToken(user._id);
	res.cookie("token", loginToken, {
		expiresIn: "1d",
	});
	return res.status(200).json({
		success: true,
		token: loginToken,
		user: user,
	});
};

//Login with SNS user
const signInSNS = async (req, res, next) => {
	const { authID, authType } = req.body;
	// Check if there is a user with the same user
	const foundUser = await controllers.findOne(User, {
		authID: authID,
		authType: authType,
	});

	if (foundUser) {
		console.log("login");
		const loginToken = encodedToken(foundUser._id);
		res.cookie("token", loginToken, {
			expiresIn: "1d",
		});
		// res.setHeader("Authorization", loginToken);
		return res.status(200).json({
			success: true,
			user: foundUser,
			token: loginToken,
		});
	}
	next();
	// Create a new user
	console.log("regist");
	const newUser = new User(req.body);
	await controllers.save(User, newUser);

	// Encode a token
	const loginToken = encodedToken(newUser._id);
	res.cookie("token", loginToken, {
		expiresIn: "1d",
	});
	// res.setHeader("Authorization", loginToken);
	return res.status(201).json({
		success: true,
		user: newUser,
		token: loginToken,
	});
};

const updateUser = async (req, res, next) => {
	const { userID } = req.params;
	const newUser = req.body;
	try {
		const result = await controllers.findByIdAndUpdate(User, userID, newUser);
		return res.status(200).json({
			success: true,
		});
	} catch (error) {
		return res.status(500).json({
			error: {
				message: "Update user failed",
			},
		});
	}
};

const deleteUser = async (req, res, next) => {
	const { userID } = req.params;
	try {
		await controllers.remove(User, userID);
		return res.status(200).json({
			success: true,
		});
	} catch (error) {
		return res.status(500).json({
			error: {
				message: "Delete user failed",
			},
		});
	}
};

requireSignin = expressJwt({
	secret: JWT_SECRET,
	algorithms: ['HS256'],
})

module.exports = {
	getUser,
	index,
	newUser,
	secret,
	signOut,
	signIn,
	signInSNS,
	signUp,
	updateUser,
	deleteUser,
	requireSignin,
};
