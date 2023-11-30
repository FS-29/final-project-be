const express = require('express')
const {getUserProfil, getUserRole} = require('../controller/profil-controller')

const route =express.Router()

route.get('/',getUserProfil)
route.get('/role',getUserRole)

module.exports = route