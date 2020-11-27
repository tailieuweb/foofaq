const User = require("../models/User");

const { JWT_SECRET } = require("../configs");
const JWT = require("jsonwebtoken");

const encodedToken = (userID) => {
	return JWT.sign(
		{
			iss: "Huy Tue",
			sub: userID,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1),
		},
		JWT_SECRET
	);
};

const secret = async (req, res, next) => {
	return res.status(200).json({ resources: true });
};

const signIn = async (req, res, next) => {
	// Assign a token
	const token = encodedToken(req.user._id);

	res.setHeader("Authorization", token);
	return res.status(200).json({ success: true });
};

const signUp = async (req, res, next) => {
	const { firstName, lastName, email, password } = req.value.body;

	// Check if there is a user with the same user
	const foundUser = await User.findOne({ email });
	if (foundUser)
		return res
			.status(403)
			.json({ error: { message: "Email is already in use." } });

	// Create a new user
	const newUser = new User({ firstName, lastName, email, password });
	newUser.save();

	// Encode a token
	const token = encodedToken(newUser._id);

	res.setHeader("Authorization", token);
	return res.status(201).json({ success: true });
};

const getUser = async (req, res, next) => {
	const { userID } = req.value.params;
	const user = await User.findById(userID);
	return res.status(200).json({ user });
};

const index = async (req, res, next) => {
	const users = await User.find({});

	return res.status(200).json({ users });
};

const newUser = async (req, res, next) => {
	const newUser = new User(req.value.body);

	await newUser.save();

	return res.status(201).json({ user: newUser });
};

const replaceUser = async (req, res, next) => {
	// Enforce new user to old user
	const { userID } = req.value.params;

	const newUser = req.value.body;

	const result = await User.findByIdAndUpdate(userID, newUser);

	return res.status(200).json({ success: true });
};

const updateUser = async (req, res, next) => {
	const { userID } = req.value.params;

	const newUser = req.value.body;

	const result = await User.findByIdAndUpdate(userID, newUser);

	return res.status(200).json({ success: true });
};

module.exports = {
	secret,
	signIn,
	signUp,
	getUser,
	index,
	newUser,
	replaceUser,
	updateUser,
};