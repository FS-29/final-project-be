const express = require('express')
const { upImgLaporan, upImgProfil, delImgLaporan } = require('../controller/upload-controller.')

const route = express.Router()

route.post('/laporan',upImgLaporan)
route.post('/profil',upImgProfil)
route.delete('/laporan',delImgLaporan)

module.exports = route