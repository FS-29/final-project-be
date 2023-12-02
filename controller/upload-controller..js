const Cloudinary = require('cloudinary').v2
require('dotenv').config()

Cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

module.exports = {
    upImgLaporan: async (req, res) => {
        if (!req.files || !req.files?.image) {
            res.status(400).json({
                success:false
            })
            return
        }
        const _base64 = Buffer.from(req.files.image.data,'base64').toString('base64')
        const base64 = `data:image/jpeg;base64,${_base64}`

        const cloudinaryRes = await Cloudinary.uploader.upload(base64,{public_id:new Date().getTime(),folder:"laporan"})

        res.json({
            success:true,
            url:cloudinaryRes.secure_url
        })
    },
    upImgProfil: async (req, res) => {
        if (!req.files || !req.files?.image) {
            res.status(400).json({
                success:false
            })
            return
        }
        const _base64 = Buffer.from(req.files.image.data,'base64').toString('base64')
        const base64 = `data:image/jpeg;base64,${_base64}`

        const cloudinaryRes = await Cloudinary.uploader.upload(base64,{public_id:new Date().getTime(),folder:"profil"})

        res.json({
            success:true,
            url:cloudinaryRes.secure_url
        })
    }
  };