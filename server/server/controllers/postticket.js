const mongoose=require("mongoose")
const ticketsupport = require("../models/ticketsupport")
const usersupport = require("../models/usersupport")

async function postticket(req,res){
    // console.log(req.body)
    const{title,description}=req.body
    const{id}=req.user
    if(!title || !description){
        res.send("all field are manitory")
    }else{
        const name = await usersupport.findOne({_id:id})
       
        const user =ticketsupport.create({
           title:title,
           description:description,
           userid:req.user.id,
           username:name.name,
           status:"pending"
       })
// console.log(user)
        if(user){
            res.status(200).send("Submit Sucessfully")
            console.log("Submited Success")
        }else{
            res.status(400).send("Can't Submit")
           
        }
    }
}
module.exports=postticket