
const mongoose = require("mongoose");
const mysql = require('mysql');

module.exports = class MongoDB {
	constructor(options) {
		this.options = options;
	}
	connect() {
		mongoose
			.connect(this.options, {
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log("✅ Connected database from mongodb."))
			.catch((error) =>
				console.error(`❌ Connect database is failed with error which is ${error}`)
			);
	}
}

module.exports = class MySQL {
	constructor(options) {
		this.options = options;
	}
	connect() {
		var connection = mysql.createConnection(this.options
		);

		connection.connect(function (err) {
			if (err) throw err;
			console.log("✅ Connected database from mysql.")
		})
	}
}

