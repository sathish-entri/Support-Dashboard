const jwt=require("jsonwebtoken")
const userschema = require("../models/usersupport")
const ticketsupport = require("../models/ticketsupport")

async function getticketemploye(req,res){
    
    const tokenvalue=req.params.id
    const decoded=jwt.verify(tokenvalue, "process.env.SECRET-KEY")
   const data=await ticketsupport.find({userid:decoded.id})
   if(data){
    res.status(200).send(data)
   }else{
    res.status(400).send("no tickets")
   }
    }
  

module.exports=getticketemploye