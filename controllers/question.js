const { Controller } = require("../orm/database");
const controllers = new Controller();
const Question = require("../models/question");
const Tag = require("../models/tag");
const { response } = require("../orm/response");
const {validationResult} = require('express-validator');


// Create Question
const createQuestion = async function (req, res) {
  //An error is generated when entering a value
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  controllers
    .findById(Tag, req.body.tagId)
    .then((tagId) => {
      if (!tagId) {
        return res.status(404).json({
          message: "Tag not found",
        });
      }
      const question = new Question({
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tagId,
      });
      return controllers.save(Question, question)
    })
    .then((result) => {
      res.status(201).json({
        createQuestion: {
          result: result,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

//Get Question
const getQuestion = async function (req, res) {
  controllers
    .find(Question)
    .populate("Tag")
    .then((question) => {
      res.status(200).json({
        question: question,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

//Edit Question
const editQuestion = async function (req, res) {

  //An error is generated when entering a value
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  controllers
  .findById(Tag, req.body.tagId)
  .then((tagId) => {
    if (!tagId) {
      return res.status(404).json({
        message: "Tag not found",
      });
    }
  });
  try {
    //Search by id and edit
    const question = await controllers.findByIdAndUpdate(
      Question,
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tagId
      }
    );
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
    if (!question) throw Error("Question not found!");
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
const paginationQuestion = async function (req, res) {
  try{
    const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
    const page = req.query.page ? parseInt(req.query.page):1;

    const question = await Question.find(Question)
    .skip((page -1 )* pagination)
    .limit(pagination)
    .populate("Tag")
    .sort({ createdAt: -1 });
    res.send(question);
  }catch(err)
  {
    res.status(400).json({ msg: err });
  }
};
const searchAndPagination = async function(req,res)
{
  try{
    const regex = new RegExp(req.params.title,'i');
    const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
    const page = req.query.page ? parseInt(req.query.page):1;
    const question = await Question.find({title:regex})
    .skip((page -1 )* pagination)
    .limit(pagination)
    .populate("Tag")
    .sort({ createdAt: -1 });
    res.send(question);
  }catch(err)
  {
    res.status(400).json({ msg: err });
  }
}

module.exports = {
  createQuestion,
  getQuestion,
  editQuestion,
  deleteQuestion,
  detailQuestion,
  paginationQuestion,
  searchAndPagination
};
