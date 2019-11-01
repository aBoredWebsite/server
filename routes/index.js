const router = require('express').Router()
const user = require('./user')
// const api = require('./api')

router.use('/users',user)
// router.use('/apis',api)

module.exports = router
