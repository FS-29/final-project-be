const express = require('express')
const { getAlamat, getSekolah, addAlamat, addSekolah, editAlamat, editSekolah } = require('../controller/pelapor-controller')

const route = express.Router()

route.get('/alamat',getAlamat)
route.get('/sekolah',getSekolah)
route.post('/alamat',addAlamat)
route.post('/sekolah',addSekolah)
route.put('/alamat',editAlamat)
route.put('/sekolah',editSekolah)



module.exports = route