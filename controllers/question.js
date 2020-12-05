const { Controller } = require("../orm/database");
const controllers = new Controller("mongo");
const Question = require('../models/question');
const { createValidation, editValidation } = require('../validation/validation');



// Create Question
const createQuestion = async function (req, res) {
  //checking value input
  // const { error } = createValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  //create new User
  const question = new Question({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const saveQuestion = await controllers.save(Question, question);
    return res.status(201).json({ success: true, saveQuestion });
  } catch (err) {
    res.status(400).send(err);
  }
}

//Get Question
const getQuestion = async function (req, res) {
  try {
    const question = await controllers.find(Question);
    if (!question) throw Error("No items!");
    {
      res.status(200).json(question);
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

//Edit Question
const editQuestion = async function (req, res) {
  //checking value input
  // const { error } = editValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  try {
    const question = await controllers.findByIdAndUpdate(Question, req.params.id, {
      title: req.body.title,
      content: req.body.content,
    });
    if (!question) throw Error("Something went wrong while updating!");
    {
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

//Delete Question
const deleteQuestion = async function (req, res) {
  try {
    const question = await controllers.remove(Question, req.params.id);
    if (!question) throw Error("Not post found!");
    {
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
//Detail Question 
const detailQuestion = async function (req, res) {
  try {
    const question = await controllers.findById(Question, req.params.id);
    if (!question) throw Error("No items");
    {
      res.status(200).json(question);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
}
module.exports = {
  createQuestion,
  getQuestion,
  editQuestion,
  deleteQuestion,
  detailQuestion
};