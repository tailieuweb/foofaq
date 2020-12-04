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
	constructor() {
		this.type = "mongo"
	}
	connectMongoDB(options) {
		mongoose
			.connect(options.host, {
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log("✅ Connected database from mongodb."))
			.catch((error) =>
				console.error(`❌ Connect database is failed with error which is ${error}`)
			);
	}
	find(Model) {
		return Model.find()
	}
	save(Model, data) {
		const newData = new Model(data);
		return newData.save();
	}
	findById(Model, id) {
		return Model.findById(id)
	}
	findOne(Model, fields) {
		return Model.findOne(fields)
	}
	findByIdAndUpdate(Model, id, data) {
		return Model.findByIdAndUpdate(id, data)
	}
	remove(Model, id) {
		return Model.deleteOne(id)
	}
}

class MySQL {
	constructor() {
		this.type = "mysql"
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

class Database extends multi.inherit(MongoDB, MySQL) {
	constructor() {
		super()
	}
	connect(options) {
		if (options.type === "mongo") {
			super.connectMongoDB(options);
		}
		if (options.type === "mysql") {
			super.connectMySQL(options);
		}
	}
}

class Controller extends multi.inherit(MongoDB, MySQL) {
	constructor(type) {
		super(type);
		this.type = type;
	}
	find(Model) {
		if (this.type === 'mongo') {
			return super.find(Model);
		}
	}

	save(Model, data) {
		if (this.type === 'mongo')
			return super.save(Model, data);

	}
	findById(Model, id) {
		if (this.type === 'mongo')
			return super.findById(Model, id)

	}
	findOne(Model, fields) {
		if (this.type === 'mongo')
			return super.findOne(Model, fields)
	}
	findByIdAndUpdate(Model, id, data) {
		if (this.type === 'mongo')
			return super.findByIdAndUpdate(Model, id, data)

	}
	remove(Model, id) {
		if (this.type === 'mongo')
			return super.remove(Model, id)
	}
}

module.exports = {
	Database,
	Controller
};
