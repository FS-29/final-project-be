const express = require('express')

const route =express.Router()

route.get('/')
route.get('/:id')

module.exports = route