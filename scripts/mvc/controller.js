const model = require('./model')
const knex = require('./db')

// GETS

// cats
const catsController = (req, res, next) => {
  const cats = model.getAllCats()
    .then(cats => {
      res.json(cats)
    })
}

const catByIdController = (req, res, next) => {
  const id = req.params.id
  model.getCatById(id)
  .then(([cat])=>{
    if (!cat) return next({status: 404, message: `Could not find cat with id of ${id}.`})
    res.json(cat)
  })

}

// users
const usersController = (req, res, next) => {
  model.getAllUsers()
    .then(users => {
      res.json(users)
    })
}

const userByIdController = (req, res, next) => {
  const id = req.params.userId
  const user = model.getUserById(id)
  .then(user => {
    if (!user) return next({status: 404, message: `Could not find user with id of ${id}.`})
    res.json(user)
  })
}

const catsByUserController = (req, res, next) => {
  const id = req.params.userId

  const user = model.getUserById(id)
  if (!user) return next({status: 404, message: `Could not find user with id of ${id}.`})

  model.getCatsByUser(id)
    .then(userCats => {
      res.json(userCats)
    })
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

}

const likeByIdController = (req, res, next) => {

}


//POSTS

const userCreaterController = (req, res, next) => {
  const { name, password, email, hidden, image, city, state, zip } = req.body
  console.log(req.body);
  if(!name || !email) return next({status: `Required: make sure to include a name and email address!`})

  console.log(name, password, email, hidden, image, city, state, zip)

  model.createUser(name, password, email, hidden, image, city, state, zip)
  .then((user) => {
    res.status(201).json(user)
  })
}

const catCreaterController = (req, res, next) => {
  const userId = req.params.userId
  const { name, age, gender, fixed, bio, image1, image2, image3, image4 } = req.body

  model.createCat(name, age, gender, fixed, bio, image1, image2, image3, image4, userId)
  .then(cat => {
    res.status(201).json(cat)
  })
}

const likesCreaterController = (req, res, next) => {

}

// PUTS

const userUpdaterController = (req, res, next) => {
  const id = req.params.userId
  const user = model.getUserById(id)
  if (!user) return next({status: 404, message: `Could not find user with id of ${id}.`})

  const { name, email, hidden, image, city, state, zip } = req.body

  const updatedUser = model.updateUser(id, name, email, hidden, image, city, state, zip)
  res.status(200).json(updatedUser)
}

const catUpdaterController = (req, res, next) => {
  const id = req.params.id
  const userId = req.params.userId
  const { name, age, gender, fixed, bio, image1, image2, image3, image4 } = req.body

  const user = model.getUserById(userId)
  if (!user) return next({status: 404, message: `Could not find user with id of ${userId}.`})
  const cat = model.getCatById(id)
  if (!cat) return next({status: 404, message: `Could not find cat with id of ${id}.`})

  const updatedCat = model.updateCat(userId, id, name, age, gender, fixed, bio, image1, image2, image3, image4)
  res.status(200).json(updatedCat)
}

// delete

const catDeleterController = (req, res, next) => {
  const id = req.params.id
  const userId = req.params.userId

  // const user = model.getUserById(userId)
  // if (!user) return next({status: 404, message: `Could not find user with id of ${userId}.`})
   model.getCatById(id)
   .then(([cat]) => {
     if (!cat) throw {status: 404, message: `Could not find cat with id of ${id}.`}
     return model.deleteCat(id, userId)
   })
   .then(newCatsArray => {
    res.status(204).json(newCatsArray)
  })
  .catch((err)=>{
    next(err)
  })
}

const userDeleterController = (req, res, next) => {
  const id = req.params.userId

  const user = model.getUserById(id)
  if (!user) return next({status: 404, message: `Could not find user with id of ${userId}.`})

  const newUsersArray = model.deleteUser(id)
  res.status(204).json(newUsersArray)
}

const likeDeleterController = (req, res, next) => {
  
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
  catUpdaterController,
  userUpdaterController,
  catDeleterController,
  userDeleterController,
  likesCreaterController,
  likeDeleterController
}
