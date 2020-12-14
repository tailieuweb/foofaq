const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");
const UserController = require('../controllers/user')
const { validate } = require("../validations/validation");

//Route add Question
router.post("/add",UserController.isAuth, validate.validateCreteQuestion(),questionController.createQuestion);
//Route get Question
router.get("/",questionController.getQuestion);
//Route update Question
router.put("/edit/:id",UserController.isAuth,validate.validateCreteQuestion(), questionController.editQuestion);
//Route delete Question
router.delete("/delete/:id",UserController.isAuth, questionController.deleteQuestion);
//Route detail Question
router.get("/detail/:id", questionController.detailQuestion);
module.exports = router;