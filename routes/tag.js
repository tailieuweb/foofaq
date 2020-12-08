const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tag");

//Route create Tag 
router.post("/add", tagController.createTag);
//Route get all Tag 
router.get("/", tagController.getAllTags);
//Route edit Tag 
router.put("/edit/:id", tagController.editTag);
//Route delete Tag 
router.delete("/delete/:id", tagController.deleleTag);
//Route detail Tag 
router.get("/detail/:id", tagController.detailTag);
module.exports = router;