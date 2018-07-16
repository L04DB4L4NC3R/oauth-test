const router = require("express").Router();
const passport = require("passport");

router.get("/facebook",passport.authenticate('facebook',{
    scope:['user_friends']
}));



router.get("/facebook/redirect",passport.authenticate("facebook"),(req,res,next)=>{
    res.json(req.user);
});


router.get("/logout",(req,res,next)=>{
    req.logout();
    res.redirect("/");
});


module.exports = router;