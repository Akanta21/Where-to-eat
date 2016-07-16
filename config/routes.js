const express = require('express')
const router = express.Router()
const user = require('../models/user')
const makan = require('../models/makan')
const userController = require('../controllers/users_controller')
const makanController = require('../controllers/makan_controller')

// enable cors for all api routes - we could also define this on the app object in app.js
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Testing route
router.get('/', function (req, res) {
  res.status(200).json({message: 'tolo-makan!'})
})

// // Other possible end points
// router.post('/signup', signInUpController.signUp)
// router.post('/signin', signInUpController.signIn)
//
// // GET ALL eating places
// router.get('/articles', makanController.AllMakan)
//
// // GET ALL USERS
// router.get('/users', userController.AllUsers)
