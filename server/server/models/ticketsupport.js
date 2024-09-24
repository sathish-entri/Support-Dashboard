const mongoose=require("mongoose")

const ticketsupport=mongoose.Schema({
    title:String,
   description:String,
   userid:String,
   username:String,
   status:String
})
module.exports=mongoose.model("ticketSupport",ticketsupport)