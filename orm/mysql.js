const mysql = require("mysql");
const { mySQL } = require("../configs");
var isConnected = false;
class MySQL {
	constructor() {

	}
	//Connection MongoDB
	connect() {
		var connection = mysql.createConnection(mySQL
		);
		if (!isConnected) {
			connection.connect(function (err) {
				if (err) throw err;
				console.log("✅ Connected database from mysql.")
			})
			isConnected = true
		} else {
			return;
		}
	}
}
module.exports = {
	MySQL
};
