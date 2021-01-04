const express = require('express');
const router = express.Router();
const controllerName = require('controllerPath');
const UserController = require('../controllers/user')

//Get object list
router.get('/', controllerName.index);

//Get object by ID
router.get('/detail/:id', UserController.requireSignin, UserController.isAuth, controllerName.getcontrollerName);

//Create
router.post('/add', UserController.requireSignin, UserController.isAuth, controllerName.newcontrollerName);

//Update
router.put('/edit/:id', UserController.requireSignin, UserController.isAuth, controllerName.updatecontrollerName);

//Delete
router.delete('/delete/:id',UserController.requireSignin, UserController.isAuth, controllerName.deletecontrollerName);

module.exports = router;
