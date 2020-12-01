const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

//create
router.post("/add", questionController.createQuestion);
router.get("/", questionController.getQuestion);
router.put("/edit/:id", questionController.editQuestion);
router.delete("/delete/:id", questionController.deleteQuestion);
router.get("/detail/:id", questionController.detailQuestion);
module.exports = router;