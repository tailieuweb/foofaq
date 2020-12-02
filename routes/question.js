const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/question");

//create
router.post("/add", QuestionController.createQuestion);
router.get("/", QuestionController.getQuestion);
router.put("/edit/:id", QuestionController.editQuestion);
router.delete("/delete/:id", QuestionController.deleteQuestion);
router.get("/detail/:id", QuestionController.detailQuestion);
module.exports = router;