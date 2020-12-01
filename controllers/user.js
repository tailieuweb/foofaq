const User = require("../models/User");

const {
	JWT_SECRET
} = require("../configs");
const JWT = require("jsonwebtoken");
const expressJwt = require('express-jwt');

const encodedToken = (userID) => {
	return JWT.sign({
		iss: "Huy Tue",
		_id: userID,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate() + 1),
	},
		JWT_SECRET
	);
};

const getUser = async (req, res, next) => {
	const {
		userID
	} = req.params;
	const user = await User.findById(userID);
	return res.status(200).json({
		user
	});
};

const index = async (req, res, next) => {
	const users = await User.find({});

	return res.status(200).json({
		users,
	});
};

const newUser = (req, res, next) => {
	const newUser = new User(req.body);
	newUser.save();
	return res.status(201).json({
		user: newUser,
	});
};

const replaceUser = async (req, res, next) => {
	// enforce new user to old user
	const {
		userID
	} = req.params;
	const newUser = req.body;

	const result = await User.findByIdAndUpdate(userID, newUser);

	return res.status(200).json({
		success: true, user: result
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
		message: 'You have access to secret page'
	});
};

const signIn = async (req, res, next) => {
	const {
		authID,
		authType
	} = req.body;
	// Check if there is a user with the same user
	const foundUser = await User.findOne({
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
	await newUser.save();

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
	const {
		userID
	} = req.params;
	const newUser = req.body;

	const result = await User.findByIdAndUpdate(userID, newUser)
	return await res.status(200).json({
		success: true, user: result
	});
};

const deleteUser = async (req, res, next) => {
	const {
		userID
	} = req.params;
	//Get a deck deck
	const user = await User.findById(userID);
	await user.remove();
	return res.status(200).json({
		success: true,
	});
};

requireSignin = expressJwt({
	secret: JWT_SECRET,
	algorithms: ['HS256']
});
module.exports = {
	getUser,
	index,
	newUser,
	replaceUser,
	secret,
	signOut,
	signIn,
	updateUser,
	deleteUser,
	requireSignin
};