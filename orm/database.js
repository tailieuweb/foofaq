const enforceAbstractClass = require("abstract-class");
const mongoose = require("mongoose");
const mysql = require("mysql");

class Database {
	constructor(options) {
		this.options = options;
		enforceAbstractClass(Database, this, "connect");
	}
}

class MongoDB extends Database {
	connect() {
		mongoose
			.connect(this.options, {
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log("✅ Connected database from mongodb."))
			.catch((error) =>
				console.error(
					`❌ Connect database is failed with error which is ${error}`
				)
			);
	}
}

class MySQL extends Database {
	connect() {
		var connection = mysql.createConnection(this.options);

		connection.connect(function (err) {
			if (err) throw err;
			console.log("✅ Connected database from mysql.");
		});
	}
}
module.exports = {
	MongoDB,
	MySQL,
};
