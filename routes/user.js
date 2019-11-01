const user = require('express').Router()
const userController = require('../controllers/userController')


user.post('/login',userController.login)
user.post('/register',userController.register)
user.post('/loginOAuth',userController.loginOAuth)


module.exports = user