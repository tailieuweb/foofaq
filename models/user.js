//Use package mongoose
const mongoose = require("mongoose");

//Create Schema
const Schema = mongoose.Schema;

//const bcrypt = require("bcryptjs");

//Initiate UserSchema
const UserSchema = new Schema({
	authID: {
		type: String,
		default : null
	},
	username: {
		type: String,

	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
	},
	authType: {
		type: String,
		enum: ["google", "facebook", "github"],
	},
	image: {
		type: String,
		default : null
	},
});

<<<<<<< HEAD
//Hash password
=======
>>>>>>> server/TueNH
// UserSchema.pre("save", async function (next) {
// 	try {
// 		if (this.authType !== "local") next();

// 		// Generate a salt
// 		const salt = await bcrypt.genSalt(10);
// 		// Generate a password hash (salt + hash)
// 		const passwordHashed = await bcrypt.hash(this.password, salt);
// 		// Re-assign password hashed
// 		this.password = passwordHashed;

// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// });

<<<<<<< HEAD
//Compare password with hashed password
=======
>>>>>>> server/TueNH
// UserSchema.methods.isValidPassword = async function (newPassword) {
// 	try {
// 		return await bcrypt.compare(newPassword, this.password);
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// };

const User = mongoose.model("User", UserSchema);
module.exports = User;
