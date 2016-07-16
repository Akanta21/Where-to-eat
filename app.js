// SETTING UP THE DEPENDENCIES FOR APP.JS
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const port = process.env.PORT || 3000

// Middleware
app.use(morgan('dev'))

// Routes
app.use(routes)

// CREATING THE APP
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
  next()
})

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

// Connecting to MongoDB
mongoose.connect('TO BE FILLED IN')
