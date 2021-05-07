const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const Board = new Schema({
  writer: {
    type: String,
    required: true,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imgPath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
 
module.exports = mongoose.model('board',Board);
 
