const userschema=require("../models/usersupport")
const mongoose=require("mongoose")
const bcrypt = require('bcrypt');

async function register(req,res){
const {fname, email,mobile,password,role} =await req.body

 if(!fname || !email || !mobile || !password || !role){
    res.status(400).send("all field are manitory")
 }else{
    const emailverified = await userschema.findOne({email:email})
    if(emailverified){
        res.status(400).send("Already registered in this account")
           }else{
const saltRounds=10 
     const salts=await bcrypt.genSalt(saltRounds)
        
        const passwordhashing=await bcrypt.hash(password, salts)
          
            // Store hash in your password DB.
        const user =userschema.create({
            name:fname,
            email:email,
            mobile:mobile,
            password:passwordhashing,
            role:role
           
        })

        if(user){
            res.status(200).send("Register Sucessfully")
            console.log("Submitted Success")
        }else{
            res.status(400)
           
        }
    }
 }
}

module.exports=register

