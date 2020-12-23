const jwt=require('jsonwebtoken');
const {secretKey}=require('../.././config/config')
exports.isAuth = (req, res, next) => {

    let token =req.body.token||req.param('token')||req.headers['x-access-token'];

    if (token){
jwt.verify(token,secretKey,(err,decoded)=>{

    if(err){
        res.status(403).send({success:false,message:"failed to authenticate user"})
    }else{
        req.decoded=decoded;
        next();
    }
})

    } 
    else {
        res.status(403).send({success:false,message:"no token provided"})
  
    }
};

