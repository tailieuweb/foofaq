const mongoose = require("mongoose");
const mysql = require("mysql");
// Class for creating multi inheritance.
class multi {
	// Inherit method to create base classes.
	static inherit(..._bases) {
		class classes {

			// The base classes
			get base() { return _bases; }

			constructor(..._args) {
				var index = 0;

				for (let b of this.base) {
					let obj = new b(_args[index++]);
					multi.copy(this, obj);
				}
			}

		}

		// Copy over properties and methods
		for (let base of _bases) {
			multi.copy(classes, base);
			multi.copy(classes.prototype, base.prototype);
		}

		return classes;
	}

	// Copies the properties from one class to another
	static copy(_target, _source) {
		for (let key of Reflect.ownKeys(_source)) {
			if (key !== "constructor" && key !== "prototype" && key !== "name") {
				let desc = Object.getOwnPropertyDescriptor(_source, key);
				Object.defineProperty(_target, key, desc);
			}
		}
	}
}


class MongoDB {
	constructor(options) {
		this.optionsUrl = options.host
		this.optionsType = options.type
	}

	connectMongoDB() {

		mongoose
			.connect(this.optionsUrl, {
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log("✅ Connected database from mongodb."))
			.catch((error) =>
				console.error(`❌ Connect database is failed with error which is ${error}`)
			);
	}
	getAll(Model) {
		return Model.find()
	}
}

class MySQL {
	constructor(options) {
		this.options = options;
		this.optionsType = options.type
	}
	connectMySQL() {
		var connection = mysql.createConnection(this.options
		);

		connection.connect(function (err) {
			if (err) throw err;
			console.log("✅ Connected database from mysql.")
		})
	}
}

class Database extends multi.inherit(MongoDB, MySQL) {
	constructor(options) {
		super(options, options)
	}
	connect() {
		if (this.options.type === "mongo") {
			super.connectMongoDB();
		}
		if (this.options.type === "mysql") {
			super.connectMySQL();
		}
	}
	getAll(Model) {
		return super.getAll(Model);
	}
}
module.exports = {
	Database
};
