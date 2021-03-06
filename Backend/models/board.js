const mongoose = require('mongoose');
 
const { Schema } = mongoose;
const boardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
 
module.exports = mongoose.model("Board",boardSchema);
 
