const apis = require('express').Router()
const apiController = require('../controllers/apiController')

router.get('/',apiController)

module.exports = apis