const {Profils} = require("../models");

module.exports = {
    getUserProfil: async (req, res) => {
        const userId = req.payload.id
        const {dataValues} = await Profils.findOne({
            attributes:{exclude:['id','id_user']},
            where:{id_user:userId},
        })
        console.log(dataValues);
        res.status(200).json({
            message:"profile user",
            data:dataValues
        })
    },
    getUserRole:async (req,res) => {
        const userRole = req.payload.role
        res.status(200).json({
            role:userRole
        })
    }
  };