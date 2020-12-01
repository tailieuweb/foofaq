const express = require('express')
const router = express.Router();
// const router = require('express-promise-router')()
const UserController = require('../controllers/user')
// const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

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

// Route login
router.post('/signin', UserController.signIn)
// Route logout
router.post('/signout', UserController.signOut)
// Route secret
router.get('/secret/:userID', UserController.requireSignin, (req, res) => {
	res.json({
		message: 'you have access to secret page'
	});
});

module.exports = router