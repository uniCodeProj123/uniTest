const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')
const User = require('../models/user')


router.get('/', (req, res) => {
  res.render('user/index')
})

// New Book Route
router.get('/new', async (req, res) => {
  res.render('user/new', {user: new User() })
})

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
})
try {
  const newUser = await user.save()
  // res.redirect(`user/${newUser.id}`)
  res.redirect('user/new')
} catch {
  res.redirect('/')
}
})



module.exports = router
