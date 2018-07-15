const bcrypt = require("bcrypt");



module.exports.hash = (data)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(data,parseInt(process.env.SALT),(err,hash)=>{
            if(err)
                reject(err);
            else 
                resolve(hash);
        });
    })
}