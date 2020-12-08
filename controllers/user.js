const { Controller } = require("../orm/database");
const controllers = new Controller();

const User = require("../models/user");
const { JWT_SECRET } = require("../configs");

const JWT = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const {response} = require("../orm/response");

const encodedToken = (userID) => {
	return JWT.sign(
		{
			_id: userID._id,
		},
		JWT_SECRET
	);
};

// Get User 
const getUser = async (req, res, next) => {
	const { userID } = req.params;

	const user = await controllers.findById(User, userID);
	if (user) {
		return await res.status(200).json({
			user,
		});
	} else {
		return res.status(403).json({
			error: {
				message: "Username does not exist.",
			},
		});
	}
};

// Get all user
const index = async (req, res, next) => {
	const users = await controllers.find(User);
	return res.status(200).json({
		users,
	});
};
// Create new user
const newUser = async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		await controllers.save(User, newUser);
		return res.status(201).json({
			user: newUser,
		});
	} catch (err) {
		return res.status(403).json({
			error: {
				message: "Username is already in use.",
			},
		});
	}
};
// Logout
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

// Signup
const signUp = async (req, res, next) => {
	const { username } = req.body;
	// Check if there is a user with the same user

	const foundUser = await controllers.findOne(User, {
		username
	});

	if (foundUser) {
		return res.status(403).json({
			error: {
				message: "Username is already in use.",
			},
		});
	}

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
		user: newUser
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
		response(res, 400, "User with that username does not exist. Please signup.");
	} else {
		user.isValidPassword(password).then((result) => {
			if (!result) {
				response(res, 400, "Username and password do not match.");
			} else {
				const loginToken = encodedToken(user._id);
				res.cookie("token", loginToken, {
					expiresIn: "1d",
				});
				let options = {
					sucess : true,
					token : loginToken,
					user : user
				}
				response(res, 200, "Login sucessfully", options);
			}
		});
	}
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
	} else {
		// Create a new user
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
	}
};

//Update user 
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
//Delete user
const deleteUser = async (req, res, next) => {
	const { userID } = req.params;
	try {
		const user = await controllers.remove(User, userID);
		if (!user) throw Error("User not found!");
		{
			res.status(200).json({ success: true });
		}
	} catch (err) {
		res.status(403).json({
			error: {
				message: "Delete user failed",
			},
		});
	}
};
//Token confirmation
requireSignin = expressJwt({
	secret: JWT_SECRET,
	algorithms: ["HS256"],
});

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
