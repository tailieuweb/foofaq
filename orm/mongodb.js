const mongoose = require("mongoose");
const { mongoDB } = require("../configs");
let isConnected = false;
class MongoDB {
	constructor() {
	}
	//Connection MongoDB
	connect() {
		if (!isConnected) {
			console.log("ddd")
			mongoose
				.connect(mongoDB.host, {
					useCreateIndex: true,
					useNewUrlParser: true,
					useUnifiedTopology: true,
				})
				.then(() => console.log("✅ Connected database from mongodb."))
				.catch((error) =>
					console.error(`❌ Connect database is failed with error which is ${error}`)
				);
			isConnected = true
		} else {
			return;
		}
	}
	//Object search
	find(Model) {
		return Model.find()
	}
	//Save function
	save(Model, data) {
		const newData = new Model(data);
		return newData.save();
	}
	//Search by ID
	findById(Model, id) {
		return Model.findById(id)
	}
	//Search by object
	findOne(Model, fields) {
		return Model.findOne(fields)
	}
	//Search by id and update
	findByIdAndUpdate(Model, id, data) {
		return Model.findByIdAndUpdate(id, data)
	}
	//Search by id and delete
	findByIdAndDelete(Model, id) {
		return Model.findByIdAndUpdate(id)
	}
	//Search by id and delete
	remove(Model, id) {
		return Model.findByIdAndDelete(id)
	}
}

module.exports = {
	MongoDB
};
