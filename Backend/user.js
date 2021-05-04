const mongoose = require("mongoose");

const { Backend } = mongoose;
const userBackend = new Backend({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  loginCnt: {
    type: Number,
    default: 0
  },
  lockYn: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", userBackend);