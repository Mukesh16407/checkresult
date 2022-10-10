const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
require('dotenv').config();
const path = require("path");

app.use(express.json());
const employeeRoute = require("./route/employeeRoute");
const studentRoute = require("./route/studentRoute");
const resultsRoute = require("./route/resultsRoute");

app.use("/api/student/", studentRoute);
app.use('/api/employee',employeeRoute);
app.use("/api/results/", resultsRoute);


const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
  }
 

app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})