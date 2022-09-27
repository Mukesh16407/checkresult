const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("employees", employeeSchema);
