const jwt = require('jsonwebtoken')
require('dotenv').config()
const { Users} = require("../models");


const verifyToken = async (req,res,next)=>{
    const header = req.headers.authorization
    if (!header){
        res.status(400).send("null header")
        return
    }
    // console.log(header);
    const token = header.split(" ")[1]
    if (!token) {
        res.status(400).send("null token")
        return
    }

    const payload = jwt.verify(token,process.env.JWT_KEY)
    const {dataValues} = await Users.findOne({
        attribute: ["id"],
        where: { email: payload.email },
    })
    req.payload = {...payload,id:dataValues.id}

    next()
}
module.exports = verifyToken