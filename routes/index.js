const express = require("express")
const route = express.Router()

const auth_Routes = require("./auth-route")
const profil_Routes = require("./profil-route")
const verifyToken = require("../middleware/auth")

route.get("/",(req,res)=>{
    res.json({
        message:"welcome to safesquad API"
    })
})

route.use("/auth",auth_Routes);
route.use("/profil",verifyToken,profil_Routes)

module.exports = route;