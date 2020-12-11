const { Controller } = require("../orm/database");
const controllers = new Controller();
const Question = require("../models/question");
const Tag = require("../models/tag");
const { response } = require("../orm/response");

// Create Question
const createQuestion = async function (req, res) {

    const question = new Question({
      title: req.body.title,
      content: req.body.content,
      tag: req.body.tag
    });
    question.save()
    .then(result =>{
      res.status(201).json({result});
    })
    .catch(err =>{
      res.status(500).json({
        error: err
      });
    });
};

//Get Question
const getQuestion = async function (req, res) {
  Question.find()
  .then(docs => {
    res.status(200).json(docs);
  })
  .catch(err=>{
    res.status(500).json({
      error: err
    });
  });
 
  // try {
  //   const question = await controllers.find(Question);
  //   if (!question) throw Error("No items!");
  //   {
  //     res.status(200).json(question);
  //   }
  // } catch (err) {
  //   res.status(400).json({ message: err });
  // }
};

//Edit Question
const editQuestion = async function (req, res) {
  try {
    //Search by id and edit
    const question = await controllers.findByIdAndUpdate(
      Question,
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
      }
    );
    if (!question) throw Error("Something went wrong while updating!");
    {
      res.status(200).json({ success: true, question });
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
};

module.exports = {
  createQuestion,
  getQuestion,
  editQuestion,
  deleteQuestion,
  detailQuestion,
};
