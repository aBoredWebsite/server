const express = require('express')
const apiController = require('../controllers/apiController')
const router = express.Router()
const auth = require('../middlewares/auth')

// router.use(auth)

router.get('/trivia', apiController.getTrivia)
router.get('/bored', apiController.getBored)
router.get('/quote', apiController.getQuote)
router.get('/joke', apiController.getJoke)

module.exports = router