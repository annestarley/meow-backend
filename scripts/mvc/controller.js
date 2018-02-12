const model = require('./model')


// GETS

// cats
const catsController = (req, res, next) => {
  const cats = model.getAllCats()
  res.json(cats)
}

const catByIdController = (req, res, next) => {
  const id = req.params.id
  const cat = model.getCatById(id)
  if (!cat) return next({status: 404, message: `Could not find cat with id of ${id}.`})
  res.json(cat)
}

// users
const usersController = (req, res, next) => {
  const users = model.getAllUsers()
  res.json(users)
}

const userByIdController = (req, res, next) => {
  const id = req.params.id
  const user = model.getUserById(id)
  if (!user) return next({status: 404, message: `Could not find user with id of ${id}.`})
  res.json(user)
}

const catsByUserController = (req, res, next) => {
  const id = req.params.id

  const user = model.getUserById(id)
  if (!user) return next({status: 404, message: `Could not find user with id of ${id}.`})

  const userCats = model.getCatsByUser(id)
  res.json(userCats)
}

const catByUserAndIdController = (req, res, next) => {
  const catId = req.params.id
  const userId = req.params.userId

  const user = model.getUserById(userId)
  if (!user) return next({status: 404, message: `Could not find user with id of ${userId}.`})
  const cat = model.getCatById(catId)
  if (!cat) return next({status: 404, message: `Could not find cat with id of ${catId}.`})
  const catByUserAndId = model.getCatByUserAndId(catId, userId)
  if (!catByUserAndId) return next({status: 404, message: `Could not find cat with id of ${catId} belonging to user with id of ${userId}.`})

  res.json(catByUserAndId)
}

//likes
const likesController = (req, res, next) => {
  const lkes = model.getAllLikes()
  res.json(likes)
}

const likeByIdController = (req, res, next) => {

}


//POSTS

const userCreaterController = (req, res, next) => {
  const { name, email, hidden, image } = req.body
  if(!name || !email || !hidden) return next({status: `Required: make sure to include a name and email address!`})

  const user = model.createUser(name, email, hidden, image)
  res.status(201).json(user)
}

const catCreaterController = (req, res, next) => {

}

// const catByUserCreaterController = (req, res, next) => {
//
// }


// PUTS

const catUpdaterController = (req, res, next) => {

}

const userUpdaterController = (req, res, next) => {

}

const catByUserUpdaterController = (req, res, next) => {

}


// delete

const catDeleterController = (req, res, next) => {

}

const userDeleterController = (req, res, next) => {

}

const catByUserDeleterController = (req, res, next) => {

}



module.exports = {
  catsController,
  catByIdController,
  usersController,
  userByIdController,
  catsByUserController,
  catByUserAndIdController,
  likesController,
  likeByIdController,
  catCreaterController,
  userCreaterController,
  // catByUserCreaterController,
  catUpdaterController,
  userUpdaterController,
  catByUserUpdaterController,
  catDeleterController,
  userDeleterController,
  catByUserDeleterController
}
