const ticketsupport = require(".././models/ticketsupport")
const usersupport = require("../models/usersupport")

async function updatetickets(req,res){
    // console.log(req.user)
    console.log(req.params.id)
    // const {id}=req.params
    const{_id}=req.user
    console.log(_id)
    const fetchdata= await ticketsupport.findByIdAndUpdate(req.params.id,{status:"solved"})
    const userupdates = await usersupport.findOne({_id:_id})
    const userupdate = await usersupport.findByIdAndUpdate(_id,{statusCount:userupdates.statusCount+1})

    
}
module.exports=updatetickets