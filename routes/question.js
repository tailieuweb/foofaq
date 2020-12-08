const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");

//Route add Question
router.post("/add", questionController.createQuestion);
//Route get Question
router.get("/", questionController.getQuestion);
//Route update Question
router.put("/edit/:id", questionController.editQuestion);
//Route delete Question
router.delete("/delete/:id", questionController.deleteQuestion);
//Route detail Question
router.get("/detail/:id", questionController.detailQuestion);
module.exports = router;