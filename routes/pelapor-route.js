const express = require('express')

const route =express.Router()

route.get('/alamat')
route.get('/sekolah')
route.post('/alamat')
route.post('/sekolah')



module.export = route