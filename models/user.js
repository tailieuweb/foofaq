//Use package mongoose
const mongoose = require("mongoose");

//Create Schema
const Schema = mongoose.Schema;

//Use hash password
const bcrypt = require("bcryptjs");

//Initiate UserSchema
const UserSchema = new Schema({
	authID: {
		type: String,
		default: null
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	hashed_password: {
		type: String,
	},
	email: {
		type: String,
		lowercase: true,
		unique: false,
		default: null
	},
	firstName: {
		type: String,
		default: null
	},
	lastName: {
		type: String,
		default: null
	},
	authType: {
		type: String,
		enum: ["local", "google", "facebook", "github"],
		default: "local",
	},
	image: {
		type: String,
		default: null
	},
	salt: { type: String }
});
//Hash password
UserSchema
	.virtual('password')
	.set(function (password) {

		if (this.authType !== "local")
			next();
		// create a temporarity variable called _password
		this._password = password;
		// generate salt
		this.salt = this.makeSalt();
		// encryptPassword
		this.hashed_password = this.encryptPassword(password);

	})
	.get(function () {
		return this._password;
	});


UserSchema.methods = {
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashed_password;
	},

	encryptPassword: function (password) {
		if (!password) return '';
		try {
			return crypto
				.createHmac('sha1', this.salt)
				.update(password)
				.digest('hex');
		} catch (err) {
			return '';
		}
	},

	makeSalt: function () {
		return bcrypt.genSalt(10);
	}
};
//Hash password
UserSchema.pre("save", async function (next) {
	try {
		if (this.authType !== "local") next();

		// Generate a salt
		const salt = await bcrypt.genSalt(10);
		// Generate a password hash (salt + hash)
		const passwordHashed = await bcrypt.hash(this.password, salt);
		// Re-assign password hashed
		this.password = passwordHashed;

		next();
	} catch (error) {
		next(error);
	}
});

UserSchema.methods.isValidPassword = async function (newPassword) {
	try {
		return await bcrypt.compare(newPassword, this.password);
	} catch (error) {
		throw new Error(error);
	}
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
