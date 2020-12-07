const mongoose = require("mongoose");
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
	findByIdAndDelete(Model, id) {
		return Model.findByIdAndUpdate(id)
	}
	remove(Model, id) {
		return Model.findByIdAndDelete(id)
	}
}

module.exports = {
	MongoDB
};
