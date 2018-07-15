const router = require("express").Router();
const users = require("../models/user");


router.post("/signup",(req,res,next)=>{
   users.create(req.body)
   .then(res.json)
   .catch(console.log);
});

module.exports = router;