const jwt=require("jsonwebtoken")
const userschema=require("../models/usersupport")

async function userAuth(req,res,next){
    const{token}=req.body
    console.log(token)
    if(!token){
           res.status(401).send("Please login useraccount")
           console.log("First error")
    }else{
   
    const valies=token
    const tokenvalue=valies.token
    const decoded=jwt.verify(tokenvalue, "process.env.SECRET-KEY")
    if(!decoded){
        console.log("Second eroor")
        res.status(401).send("Please login useraccount")
    }else{
        // const restoken= await userschema.findById(decoded.id)
        // console.log(decoded)
        req.user=decoded
       console.log(decoded)
        next()
    }
    }
  
}
module.exports=userAuth

