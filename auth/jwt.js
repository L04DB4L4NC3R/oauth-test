const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    let token = req.get('Authorization');
    jwt.verify(token,process.env.KEY,(err,decodedData)=>{
        req.data = decodedData;
        next();
    });
}