if(process.env.NODE_ENV === 'development') require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/aBoredKiller',{useNewUrlParser : true, useUnifiedTopology : true},()=>{
  console.log('connected on mongo DB')
})

app.use('/',routes)
// app.get('/',(req,res)=>{
//   console.log('test');
// })

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`server up and running on ${PORT}`))
