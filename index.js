const express= require('express');
const app= express();
app.use(express.json());
require('dotenv').config();
const bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public/uploads"));

const cors = require("cors");

app.get("/",cors(),(req,res)=>{
    res.json({message:"Welcome to user demo"})
});

app.listen(process.env.APP_PORT,()=>{
    console.log("connected", process.env.APP_PORT);
});



