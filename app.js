const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
app.use(require("morgan")('dev'));


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
mongoose.connection
.once('open',()=>console.log("Connection to mongodb open"))
.on('error',console.log);


const passport = require("passport");
require("./auth/oauth_config");
app.use(passport.initialize());
app.use(passport.session());



app.use("/auth",require("./routes/oauth"));

app.use("/",(requestAnimationFrame,res,next)=>{
    res.json({message:"Welcome"});
});

// app.use((err,req,res,next)=>{
//     res.json({err}).status(500);
// });


app.listen(process.env.PORT || 3000,()=>console.log("listening.."));