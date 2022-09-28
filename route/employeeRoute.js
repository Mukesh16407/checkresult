const express = require("express");
const router = express.Router();

const Employee = require("../model/employeeModel");
const authMiddleware = require("../middleWares/authMiddleware");

// register new employee

router.post("/register", authMiddleware, async (req, res) => {
  try {
    const employeeExists = await Employee.findOne({
      employeeId: req.body.employeeId,
    });
    if (employeeExists) {
      return res.status(200).send({
        message: "Employee already exists",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
  } catch (error) {}
});

module.exports = router;