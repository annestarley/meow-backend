const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const controller = require('./controller')
const model = require('./model')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/cats', controller.catsController)
app.get('/cats/:id', controller.catByIdController)
app.get('/users', controller.usersController)
app.get('/users/:userId', controller.userByIdController)
app.get('/users/:userId/cats', controller.catsByUserController)
app.get('/users/:userId/cats/:id', controller.catByUserAndIdController)
app.get('/users/:userID/likes', controller.likesController)
app.get('/users/:userId/likes/:id', controller.likeByIdController)

app.post('/users', controller.userCreaterController)
app.post('/users/:userId/cats/', controller.catCreaterController)
app.post('/users/:userId/likes', controller.likesCreaterController)

app.put('/users/:userId', controller.userUpdaterController)
app.put('/users/:userId/cats/:id', controller.catUpdaterController)

app.delete('/users/:userId', controller.userDeleterController)
app.delete('/users/:userId/cats/:id', controller.catDeleterController)
app.delete('/uers/:userId/likes/:catId', controller.likeDeleterController)


app.use((err, req, res, next) => {
  console.log(err);
  let status = err.status || 404
  res.status(status).json({ error: { message: err.message }})
})

const listener = () => `Listening on ports ${port}!`
app.listen(port, listener)

console.log(`Listening on port ${port}!`)

module.exports = app
