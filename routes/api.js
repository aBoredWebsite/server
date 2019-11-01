const apis = require('express').Router()
const apiController = require('../controllers/apiController')

router.get('/trivia',apiController)

module.exports = apis