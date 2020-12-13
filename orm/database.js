const { MongoDB } = require('./mongodb')
const { MySQL } = require('./mysql')
const { DB_TYPE } = require("../configs");

//Check type database
//Return class use
let DB;
switch (DB_TYPE) {
	case 'mongo':
		DB = MongoDB
		break;
	case 'mysql':
		DB = MySQL
		break;
	default:
		break;
}

//Connection Database
class Database extends DB {
	constructor() {
		super()
		super.connect();
	}

}
//Controller Database
class Controller extends Database {
	constructor() {
		super();
	}
	//Object search function
	find(Model) {
		return super.find(Model);
	}
	//Save function
	save(Model, data) {
		return super.save(Model, data);
	}
	//Search by ID
	findById(Model, id) {
		return super.findById(Model, id)

	}
	//Search by object
	findOne(Model, fields) {
		return super.findOne(Model, fields)
	}
	//Search by id and update
	findByIdAndUpdate(Model, id, data) {
		return super.findByIdAndUpdate(Model, id, data)
	}
	//Search by id and delete
	remove(Model, id) {
		return super.remove(Model, id)
	}
}

module.exports = {
	Database,
	Controller
};
