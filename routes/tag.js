const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tag");

//create
router.post("/add", tagController.createTag);
router.get("/", tagController.getAllTags);
router.put("/edit/:id", tagController.editTag);
router.delete("/delete/:id", tagController.deleleTag);
router.get("/detail/:id", tagController.detailTag);
module.exports = router;