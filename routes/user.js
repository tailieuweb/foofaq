const express = require("express");
const router = require("express-promise-router");
const UserController = require("../controllers/user");

//Route get all user
router.route("/").get(UserController.index);

//Route create user
router.route("/").post(UserController.newUser);

//Route get detail a user
router.route("/:userID").get(UserController.getUser);
//Route relace user
router.route("/:userID").put(UserController.replaceUser);
//Route update user
router.route("/:userID").patch(UserController.updateUser);

module.exports = router
