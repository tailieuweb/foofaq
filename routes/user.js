const express = require('express')
const router = express.Router();
// const router = require('express-promise-router')()
const UserController = require('../controllers/user')

// Validations
const { runValidation } = require('../validations');
const { userSignupValidator, userSigninValidator } = require('../validations/auth');

// -----------------------------------------------------------------------

//Route get all user
router.get('/', UserController.index)
//Route create user
router.post('/', UserController.newUser)

//Route get detail a user
router.get('/:userID', UserController.getUser)
//Route update user
router.patch('/:userID', UserController.updateUser)
//Route delete user
router.delete('/:userID', UserController.deleteUser)
// Route register
router.post('/signup', userSignupValidator, runValidation, UserController.signUp)
// Route login
router.post('/signin', UserController.signIn);
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