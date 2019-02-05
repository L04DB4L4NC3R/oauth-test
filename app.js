const express = require("express");
const app = express();

//environment vars
require("dotenv").config();

app.use(require("morgan")('dev'));

//Post request handler
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

//mongoDB config
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
mongoose.connection
.once('open',()=>console.log("Connection to mongodb open"))
.on('error',err=>console.log("Some error occurred"));

//passport config
const passport = require("passport");
require("./auth/oauth_config");
app.use(passport.initialize());
app.use(passport.session());


//routes
app.use("/auth",require("./routes/oauth"));
app.use("/auth",require("./routes/auth"));

app.use("/",(req,res,next)=>{
    res.json({message:"Welcome"});
});


//error handling
app.use((err,req,res,next)=>{
    res.json({err}).status(500);
});


app.listen(process.env.PORT || 3000,()=>console.log("listening.."));
