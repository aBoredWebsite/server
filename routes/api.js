const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/trivia', apiController.getTrivia)
router.get('/bored', apiController.getAdvice)
router.get('/quote', apiController.getQuote)

module.exports = router