if(process.env.NODE_ENV === 'development') require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/',(req,res)=>{
  res.send('connected')
})

app.listen(PORT, ()=> console.log(`server up and running on ${PORT}`))