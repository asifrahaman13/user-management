require('dotenv').config();
require('./db/connection')
var cors=require('cors')
const User=require('./models/User')
const express = require("express");
const app = express();

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_token = "Harry is a good boy";
const crypto = require("crypto");
const NodeRSA=require("node-rsa");

const key=new NodeRSA({b:1024});


const PORT=8000;

const port=process.env.PORT || PORT;

app.use(cors());
app.use(express.json());



app.listen(port,()=>{
    console.log(`Listening on port: ${PORT}`)
})

