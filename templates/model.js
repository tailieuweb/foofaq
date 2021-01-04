const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {schemaName} = new Schema({fields});

const {modelName} = mongoose.model('{modelName}', {schemaName});
module.exports = {modelName};
