const express = require("express")
const app=express()
const mongodb = require("./config/db")
// const multer = require("multer")
const PORT = 4000;
const Routes=require("./routes/routes")
// const userschema = require("./controlles/register")
const cors=require("cors")
 
mongodb()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

//just connfirm  

app.use("/",Routes)

// git remote add origin https://github.com/sathish-entri/Learning-Dashboard.git


app.listen(PORT,()=>{
    console.log("Port is Listening"+PORT)
})




