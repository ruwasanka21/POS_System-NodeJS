const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {connect} = require("mongoose");
require('dotenv').config();
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

try{
    mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    app.listen(SERVER_PORT,()=>{
        console.log(`Server started and running on port ${SERVER_PORT}`);
    })

}catch(err){
    console.log(err);
}

app.get('/test-api', (req,res)=>{
    return res.json({"message": "Hello World"});
})
app.post('/create',(req,res)=>{
    console.log(req.body);
    return res.json({'data':req.body});
})