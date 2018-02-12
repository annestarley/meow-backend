const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cor = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const controller = require('./controller')
const model = require('./model')




const listener = () => `Listening on ports ${port}!`
app.listen(port, listener)

module.exports = app
