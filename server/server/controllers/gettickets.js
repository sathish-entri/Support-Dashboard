const ticketsupport = require("../models/ticketsupport")
const userschema = require("../models/usersupport")

async function getticket(req,res){
    
    const data=await ticketsupport.find()
    console.log(data)
    const user=await userschema.find()
    if(data){
         
        //res.send(data)
        res.status(200).json({data:data,user:user})
    }else{
        res.send("Tickets Empty")
    }
}
module.exports=getticket