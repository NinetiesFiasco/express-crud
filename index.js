require('dotenv').config()
require('./mongodb').dataBaseConnect()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const {example} = require('./api')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const port = process.env.PORT || 3000 

app.use(express.static(path.join(__dirname, 'public') ))

app.use('/api/example', example)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

