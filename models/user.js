const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name:String,
    oauth_id:mongoose.Schema.Types.ObjectId,
    passwd:String
});

module.exports = mongoose.model("user",schema);