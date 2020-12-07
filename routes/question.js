const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");

//Route add question
router.post("/add", questionController.createQuestion);
//Route get question
router.get("/", questionController.getQuestion);
//Route update question
router.put("/edit/:id", questionController.editQuestion);
//Route delete question
router.delete("/delete/:id", questionController.deleteQuestion);
//Route detail question
router.get("/detail/:id", questionController.detailQuestion);
module.exports = router;