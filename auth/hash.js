const bcrypt = require("bcrypt");



module.exports.hash = (data)=>{
    bcrypt.hash(data,parseInt(process.env.SALT),(err,hash)=>{
        if(err)
            reject(err);
        else 
            resolve(hash);
    })
}