const mongoose=require("mongoose")

const usersupport=mongoose.Schema({
    name:String,
    imagepath:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:Number,
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,         
        required:true
    },
    statusCount:{
        type:Number,
        default:0
    }
})
module.exports=mongoose.model("userDeataisSupport",usersupport)