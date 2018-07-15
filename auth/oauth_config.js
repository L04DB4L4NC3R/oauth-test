const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const users = require("../models/user");
const hash = require('./hash').hash

passport.use(new FacebookStrategy({

    clientID:process.env.FCLIENTID,
    clientSecret:process.env.FCLIENTSECRET,
    callbackURL:process.env.FCALLBACKURL

},(accessToken,refreshToken,profile,done)=>{

    
    users.findOne({oauth_id:profile.id})
    .then((u)=>{
        if(u){
            console.log("user exists");
            done(null,u);
        }
        else{
            hash(profile.id)
            .then((p)=>{
                new users({
                    name:profile.displayName,
                    passwd:p
                }).save().then((us)=>{
                    console.log("created new user");
                    done(null,us);
                }).catch(console.log);
            }).catch(console.log);
        }
}).catch(console.log);

}));