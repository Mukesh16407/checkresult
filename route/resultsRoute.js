const express = require("express");
const authMiddleware = require("../middleWares/authMiddleware");

const router = express.Router();

const Result = require("../model/resultMode");
const Student = require("../model/studentModel");

//  add new result

router.post('/add-result',authMiddleware,async(req,res)=>{

    try{
        const resultExists = await Result.findOne({
            examination: req.body.examination,
        });
        if (resultExists) {
            return res.status(200).send({
              message: "Result already exists",
              success: false,
            });
        }
        const newResult = new Result(req.body);
        await newResult.save();
        res.status(200).send({
            message: "Result added successfully",
            success: true,
        });

    }catch(error){
        res.status(500).send({
            message: error.message,
            success: false,
          });

    }
})

// get all results

router.post("/get-all-results", async (req, res) => {
    try {
      const results = await Result.find();
      res.status(200).send({
        message: "Results retrieved successfully",
        success: true,
        data: results,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        success: false,
      });
    }
});

// get result by id

router.post("/get-result/:resultId", async (req, res) => {
    try {
      const result = await Result.findById(req.params.resultId);
      res.status(200).send({
        message: "Result retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        success: false,
      });
    }
});

// add student result

module.exports = router;