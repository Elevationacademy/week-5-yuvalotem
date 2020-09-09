const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./modules/solar')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

mongoose.connect('mongodb://localhost/galaxy')



const port = 3000
app.listen(port, function () {
    console.log("server running on port " + port);
})