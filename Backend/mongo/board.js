const mongoose = require("mongoose");

const { Backend } = mongoose;
const {
  Types: { ObjectId }
} = Backend;
const Backendboard = new Backend({
  writer: {
    type: ObjectId,
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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Backend", Backendboard);