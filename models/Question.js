const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Collection Question and data fields
const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Question", QuestionSchema);
