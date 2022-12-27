const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
