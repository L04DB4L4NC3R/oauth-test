const passport = require("passport");
const FacebookStrategy = require("passport-facebook");

passport.use(new FacebookStrategy({

    clientID:process.env.FCLIENTID,
    clientSecret:process.env.FCLIENTSECRET,
    callbackURL:process.env.FCALLBACKURL

},(accesToken,refreshToken,profile,done)=>{

    console.log(profile);

}));