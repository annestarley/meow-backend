const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cor = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const controller = require('./controller')
const model = require('./model')

app.use(bodyParser.json())
app.use(morgan('dev'))


app.get('/cats', controller.catsController)
app.get('/cats/:id', controller.catByIdController)
app.get('/users', controller.usersController)
app.get('/users/:id', controller.userByIdController)
app.get('/users/:id/cats', controller.catsByUserController)
app.get('/users/:userId/cats/:id', controller.catByUserAndIdController)
app.get('/likes', controller.likesController)
app.get('/likes/:id', controller.likeByIdController)

// app.post('cats', controller.catCreaterController)  "decided I can't create cat without a user"
app.post('/users', controller.userCreaterController)
app.post('/users/:id/cats/', controller.catCreaterController)

// app.put('/cats/:id', controller.catUpdaterController)
app.put('/users/:id', controller.userUpdaterController)
app.put('/users/:userId/cats/:id', controller.catUpdaterController)

app.delete('/cats/:id', controller.catDeleterController)
app.delete('/users/:id', controller.userDeleterController)
app.delete('/users/:userId/cats/:id', controller.catByUserDeleterController)


app.use((err, req, res, next) => {
  let status = err.status || 404
  res.status(status).json({ error: { message: err.message }})
})

const listener = () => `Listening on ports ${port}!`
app.listen(port, listener)

console.log(`Listening on port ${port}!`)

module.exports = app
