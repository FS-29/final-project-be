const express = require("express")
const route = express.Router()

const auth_Routes = require("./auth-route")

route.get("/",(req,res)=>{
    res.json({
        message:"welcome to safesquad API"
    })
})

route.use("/auth",auth_Routes);

module.exports = route;