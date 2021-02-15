const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['Cars', 'Bikes', 'Charging', 'News', 'Stocks'],
  }
  })

  module.exports = mongoose.model('Post', postSchema);