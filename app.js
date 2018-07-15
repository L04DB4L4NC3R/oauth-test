const express = require("express");


const app = express();

require("dotenv").config();


app.use(require("morgan")('dev'));
app.use("/profile",require("routes"));


app.listen(process.env.PORT || 3000,()=>console.log("listening.."));