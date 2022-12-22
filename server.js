const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
require('dotenv').config();


app.use(express.json());
const employeeRoute = require("./route/employeeRoute");
const studentRoute = require("./route/studentRoute");
const resultsRoute = require("./route/resultsRoute");

app.use("/api/student/", studentRoute);
app.use('/api/employee',employeeRoute);
app.use("/api/results/", resultsRoute);


const port = process.env.PORT || 5000;

 

app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})