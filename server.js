if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')
const userRouter = require('./routes/users')


//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))


// Express body parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(express.static('public'))

// Connect to MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


// Routes
app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/users', userRouter)

app.listen(process.env.PORT || 3000)
