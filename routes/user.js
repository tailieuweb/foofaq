const express = require('express')
const router = express.Router();
// const router = require('express-promise-router')()
const UserController = require('../controllers/user')
// const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

//Use password backage
const passport = require('passport');
const passportConf = require('../middlewares/passport');
const User = require('../models/user');

// -----------------------------------------------------------------------

//Route get all user
router.get('/', UserController.index)
//Route create user
router.post('/', UserController.newUser)

//Route get detail a user
router.get('/:userID', UserController.getUser)
//Route relace user
router.put('/:userID', UserController.replaceUser)
//Route update user
router.patch('/:userID', UserController.updateUser)
//Route delete user
router.delete('/:userID', UserController.deleteUser)
// Route register
router.post('/signup', UserController.signUp)
// Route login
router.post('/signin', passport.authenticate('local' , { failureFlash: true,session : false}) , UserController.signIn);
// Route login sns
router.post('/signinsns', UserController.signInSNS)
// Route logout
router.post('/signout', UserController.signOut)
// Route secret
router.get('/secret/:userID', UserController.requireSignin, (req, res) => {
	res.json({
		message: 'you have access to secret page'
	});
});

module.exports = router