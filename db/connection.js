require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true },async()=>{
    console.log("Connected successfully to mongoose.")
});

