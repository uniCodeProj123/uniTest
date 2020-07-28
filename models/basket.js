const mongoose = require('mongoose')

const basketSchema = new mongoose.Schema({

  Book: {
    type: String,
  },
  Price: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Basket', basketSchema)
