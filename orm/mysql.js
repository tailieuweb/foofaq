const mysql = require("mysql");
class MySQL {
	constructor(type) {
		this.type = type;
	}
	connectMySQL(options) {
		var connection = mysql.createConnection(options
		);

		connection.connect(function (err) {
			if (err) throw err;
			console.log("✅ Connected database from mysql.")
		})
	}
}
module.exports = {
	MySQL
};
