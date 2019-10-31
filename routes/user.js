const user = require('express').Router
const userController = require('../controllers/userController')


user.post('/login',userController.login)

module.exports = user