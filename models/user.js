const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name:String,
    oauth_id:String,
    passwd:String
});

module.exports = mongoose.model("user",schema);