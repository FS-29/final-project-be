const express = require('express')
const { upImgLaporan, upImgProfil } = require('../controller/upload-controller.')

const route = express.Router()

route.post('/laporan',upImgLaporan)
route.post('/profil',upImgProfil)

module.exports = route