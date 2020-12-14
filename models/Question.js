const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Collection Question and data fields
const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: Array,
      ref: "Tag",
      required:true
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model("Question", QuestionSchema);
