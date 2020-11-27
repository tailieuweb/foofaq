const express = require('express')
const router = require('express-promise-router')()
const UserController = require('../controllers/user')
const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const passport = require('passport')
const passportConfig = require('../middlewares/passport')

//Route get all user
router.route('/').get(UserController.index)
//Route create user
router.route('/').post(validateBody(schemas.userSchema), UserController.newUser)
// Route google
router.route('/auth/google').post(passport.authenticate('google-plus-token', { session: false }), UserController.authGoogle)
// Route facebook
router.route('/auth/facebook').post(passport.authenticate('facebook-token', { session: false }), UserController.authFacebook)
// Route github
router.route('/auth/github').get(passport.authenticate('github', { scope: ['user:email'] }))
router.route('/auth/github/callback').get(passport.authenticate('github', { failureRedirect: '/login' }), UserController.authGithub)
// Route register
router.route('/signup').post(validateBody(schemas.authSignUpSchema), UserController.signUp)
// Route login
router.route('/signin').post(validateBody(schemas.authSignInSchema), passport.authenticate('local', { session: false }), UserController.signIn)
// Route logout
router.route('/signout').get(UserController.signOut)
// Route secret
router.route('/secret').get(passport.authenticate('jwt', { session: false }), UserController.secret)
//Route get detail a user
router.route('/:userID').get(validateParam(schemas.idSchema, 'userID'), UserController.getUser)
//Route relace user
router.route('/:userID').put(validateParam(schemas.idSchema, 'userID'), validateBody(schemas.userSchema), UserController.replaceUser)
//Route update user
router.route('/:userID').patch(validateParam(schemas.idSchema, 'userID'), validateBody(schemas.userOptionalSchema), UserController.updateUser)

module.exports = router