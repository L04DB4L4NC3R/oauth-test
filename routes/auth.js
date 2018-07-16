const router = require("express").Router();
const users = require("../models/user");


router.post("/signup",(req,res,next)=>{
   users.findOne({name:req.body.name})
   .then((data)=>{
       if(data)
            return res.json({message:"User exists"});
        
        users.create(data)
        .then(d=>res.json(d))
        .catch(console.log);

   });
}); 


router.post("/login",(req,res,next)=>{
    users.findOne({name:req.body.name})
    .then((data)=>{
        res.send(req.body)
    }).catch(console.log);
})

module.exports = router;