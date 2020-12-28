const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tag");
const UserController = require('../controllers/user')

//Route create Tag 
router.post("/add", UserController.requireSignin, UserController.isAuth, tagController.createTag);
//Route get all Tag 
router.get("/", tagController.getAllTags);
//Route edit Tag 
router.put("/edit/:id", UserController.requireSignin, UserController.isAuth, tagController.editTag);
//Route delete Tag 
router.delete("/delete/:id", UserController.requireSignin, UserController.isAuth, tagController.deleleTag);
//Route detail Tag 
router.get("/detail/:id", tagController.detailTag);
module.exports = router;