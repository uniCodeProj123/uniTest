const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')
const Login = require('../models/login')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get('/', async (req, res) => {
  res.render('logins/index')
})

module.exports = router
