const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  results: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("students", studentSchema);
