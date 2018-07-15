const router = require("express").Router();
const passport = require("passport");

router.get("/facebook",passport.authenticate('facebook',{
    scope:['profile']
}));



router.get("/facebook/redirect",passport.authenticate("facebook"),(err,req,res,next)=>{
    res.send("USER: " + req.user);
});


router.get("/logout",(req,res,next)=>{
    req.logout();
    res.redirect("/");
});


module.exports = router;