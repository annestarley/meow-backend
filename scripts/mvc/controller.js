const model = require('./model')


// GETS

// cats
const catsController = (req, res, next) => {
  const cats = model.getAllCats()
  res.json(cats)
}

const catByIdController = (req, res, next) => {

}

// users
const usersController = (req, res, next) => {
  const users = model.getAllUsers()
  res.json(users)
}

const userByIdController = (req, res, next) => {

}

const catsByUserController = (req, res, next) => {

}

const catByUserAndIdController = (req, res, next) => {

}

//likes
const likesController = (req, res, next) => {
  const lkes = model.getAllLikes()
  res.json(likes)
}

const likeByIdController = (req, res, next) => {

}


//POSTS

const catCreaterController = (req, res, next) => {

}

const userCreaterController = (req, res, next) => {

}

const catByUserCreaterController = (req, res, next) => {

}


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
  catByUserCreaterController,
  catUpdaterController,
  userUpdaterController,
  catByUserUpdaterController,
  catDeleterController,
  userDeleterController,
  catByUserDeleterController
}
