const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getHash = require('../helpers/bcrypt').generateHash

const users = new Schema({
  name : {
    type : String,
    required: [true,'name must be included']
        },
  email : {
    type : String,
    required: [true,'email must be included'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email format invalid']
        },
  password : {
    type : String,
    required: [true,'password must be included']
        },
})

users.pre('save',function(next){
  this.password = getHash(this.password)
  next()
})

const User = mongoose.model('User',users)

module.exports = User;