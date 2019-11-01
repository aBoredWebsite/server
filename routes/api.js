const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/trivia', apiController.getTrivia)
router.get('/bored', apiController.getBored)
router.get('/quote', apiController.getQuote)
router.get('/joke', apiController.getJoke)

module.exports = router