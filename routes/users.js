const express = require('express')
const router = express.Router()
const User = require('../models/user')

const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
// const bcrypt = require('bcrypt')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs');


// All Authors Route
router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.render('users/index', {users: users})
  } catch {
    res.redirect('/')
  }
})

// New Author Route
router.get('/new', (req, res) => {
  res.render('users/new', { user : new User() })
})

// Create Author Route
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  })
  try {
    const newUser = await user.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`users`)
  } catch {
    res.render('users/new', { user: user, errorMessage: 'Error creating Author' })
  }
})



module.exports = router
