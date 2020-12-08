const { MongoDB } = require('./mongodb')
const { MySQL } = require('./mysql')
const { DB_TYPE } = require("../configs");
// Class for creating multi inheritance.
class multi {
	//Inherit method to create base classes.
	static inherit(..._bases) {
		class classes {

			//The base classes
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
//Multimodal connection
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
//Controller inheritance
class Controller extends multi.inherit(MongoDB, MySQL) {
	constructor() {
		super();
		this.type = DB_TYPE;
	}
	//Object search function
	find(Model) {
		if (this.type === 'mongo') {
			return super.find(Model);
		}
	}
	//Save function
	save(Model, data) {
		if (this.type === 'mongo')
			return super.save(Model, data);
	}
	//Search by ID
	findById(Model, id) {
		if (this.type === 'mongo')
			return super.findById(Model, id)

	}
	//Search by object
	findOne(Model, fields) {
		if (this.type === 'mongo')
			return super.findOne(Model, fields)
	}
	//Search by id and update
	findByIdAndUpdate(Model, id, data) {
		if (this.type === 'mongo')
			return super.findByIdAndUpdate(Model, id, data)
	}
	//Search by id and delete
	remove(Model, id) {
		if (this.type === 'mongo')
			return super.remove(Model, id)
	}
}

module.exports = {
	Database,
	Controller
};
