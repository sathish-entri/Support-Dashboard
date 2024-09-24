const express = require("express")
const Routes =express.Router()
const register = require("../controllers/register")
const login = require("../controllers/login")
const home = require("../controllers/home")
const homeauth = require("../middleware/auth")
const postticket=require("../controllers/postticket")
const getrickets=require("../controllers/gettickets")
const userAuth = require("../middleware/userAuth")
const updatetickets = require("../controllers/updatetickets")
const getticketemploye=require("../controllers/getTicketEmploye")

// authandicate.............................................................................
    Routes.post("/register",register)
    Routes.post("/login",login)
    Routes.post("/home",homeauth,home)
    Routes.get("/getticket",getrickets)

//employe............................................................................................
    Routes.post("/post-ticket",userAuth,postticket)
    Routes.post("/updateticket:id",homeauth,updatetickets)
    Routes.get("/getticket-employe:id",getticketemploye)
 

module.exports=Routes