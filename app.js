const express = require("express");
const passport = require("passport");

const app = express();

require("dotenv").config();

require("./auth/oauth_config");


app.use(require("morgan")('dev'));

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