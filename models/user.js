const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name:String,
    oauth_id:{
        type:String,
        default:null
    },
    passwd:String
});

module.exports = mongoose.model("user",schema);