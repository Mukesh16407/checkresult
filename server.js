const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
require('dotenv').config();

app.use(express.json());
const employeeRoute = require("./route/employeeRoute");
const studentRoute = require("./route/studentRoute");

const port = process.env.PORT || 5000;

app.use("/api/student/", studentRoute);
app.use('/api/employee',employeeRoute);

app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})