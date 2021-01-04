const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {schemaName} = new Schema({ 
    sID: {
		type: String,
		min: 1,
		max: 1000,
		default: null,
	},
	name: {
		type: String,
		min: 10,
		max: 100,
		// unique: true,
		required: true
	}
 });

const {modelName} = mongoose.model('{modelName}', {schemaName});
module.exports = {modelName};
