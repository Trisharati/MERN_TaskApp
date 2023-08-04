const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const router = require('./router')
app.use('/api',router)

const port = process.env.PORT || 2000

mongoose.connect(process.env.mongourl,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
app.listen(port,()=>{
    console.log('DB is connected')
    console.log(`http://localhost:${port}`)
})
}).catch((err)=>{
    console.log('Error in connecting MongoDB',err)
})

