const express = require('express')
const { getUserLaporan, getAllLaporan, getLaporanById, addLaporan, editLaporan } = require('../controller/laporan-controller')

const route =express.Router()

route.get('/',getUserLaporan)
route.get('/all-user',getAllLaporan)
route.get('/:id',getLaporanById)
route.post('/',addLaporan)
route.put('/edit',editLaporan)


module.exports = route