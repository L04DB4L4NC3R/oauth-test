const passport = require("passport");
const FacebookStrategy = require("passport-facebook");


passport.use(new FacebookStrategy({

    clientID:process.env.FBCLIENTID,
    clientSecret:process.env.FBCLIENTSECRET,
    callbackURL:process.env.FBCALLBACKURL

},(accesToken,refreshToken,profile,done)=>{

    console.log(profile);
    
}));