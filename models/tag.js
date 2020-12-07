//require package mongose
const mongoose = require("mongoose");

//Create Schema
const Schema = mongoose.Schema;

//Create Collection Tag and data fields
const TagSchema = new Schema({
    tagID: {
        type: String,
        unique: true,
        default: null,
    }, 
    tagName: {
        type: String,
        lowercase: true,
        unique: true,
    },
    tagDescription: {
        type: String,
        unique: false,
        default: ""
    }
})

module.exports = mongoose.model("Tag", TagSchema);


