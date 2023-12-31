const express = require("express")
const route = express.Router()

const auth_Routes = require("./auth-route")
const profil_Routes = require("./profil-route")
const pelapor_Routes = require("./pelapor-route")
const laporan_Routes = require("./laporan-routes")
const upload_route = require("./upload-route")
const verifyToken = require("../middleware/auth")

route.get("/",(req,res)=>{
    res.json({
        message:"welcome to safesquad API"
    })
})

route.use("/auth",auth_Routes);
route.use("/profil",verifyToken, profil_Routes)
route.use("/pelapor",verifyToken, pelapor_Routes)
route.use("/laporan",verifyToken,laporan_Routes)
route.use("/upload",upload_route)

module.exports = route;