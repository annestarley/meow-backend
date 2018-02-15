const uuid = require('uuid')
const fs = require('fs')
const knex = require('./db')


// temporary

// cats = [
//   {
//     id: 1,
//     name: 'Grumpy Cat',
//     age: 5,
//     gender: 'female',
//     fixed: 'prefer not to say...',
//     bio: "I am an example! I'm not as grumpy as I seem. I just hate everyone and thing. I hope you all step on legos today.",
//     images: ['./images/grumpy-cat/1.jpeg', './images/grumpy-cat/2.jpg', './images/grumpy-cat/3.jpg', './images/grumpy-cat/4.jpg'],
//     userId: 1,
//   },
//   {
//     id: 2,
//     name: 'Toothless',
//     age: 2,
//     gender: 'male',
//     fixed: 'nope',
//     bio: "I am an example! I am a Night Fury, arguably the rarest and most intelligent of.. cat species.",
//     images: ['./images/toothless/1.jpg', './images/toothless/2.jpg', './images/toothless/3.jpg'],
//     userId: 2,
//   },
//   {
//     id: 3,
//     name: 'Junior',
//     age: 0,
//     gender: 'male',
//     fixed: 'nope',
//     bio: "I am an example! I like cornflakes, huggies, and balloons that blow up into funny shapes.",
//     images: ['./images/junior/1.jpg', './images/junior/2.jpg', './images/junior/3.jpg', './images/junior/4.jpg'],
//     userId: 3,
//   },
//   {
//     id: 4,
//     name: 'Bat Cat',
//     age: 11,
//     gender: 'male',
//     fixed: 'yes',
//     bio: "I am an example! I'm the cat MEOW deserves, but not the one it needs... or something. I'm not a hero. I'm a silent guardian. A watchful protector.'",
//     images: ['./images/bat-cat/1.jpeg', './images/bat-cat/2.jpg', './images/bat-cat/3.jpg', './images/bat-cat/4.jpeg'],
//     userId: 4,
//   },
//   {
//     id: 5,
//     name: 'Lucifer',
//     age: 17,
//     gender: 'male',
//     fixed: 'yes',
//     bio: "I am an example! I am a farm cat working hard to rid our manor of the vermin it is infested with. I get little appreciation from the the snooty stepdaughter but the rest of the family is a wonderful group of dames.",
//     images: ['./images/lucifer/1.jpeg', './images/lucifer/2.jpg', './images/lucifer/3.jpg', './images/lucifer/4.jpeg'],
//     userId: 1,
//   }
// ]
//
// users = [
//   {
//     id: 1,
//     name: 'Lady Tremaine',
//     email: 'ladytremaine@example.com',
//     hidden: false,
//     image:'./images/lucifer/owner.jpg',
//     city: 'FairyLand',
//     state: 'France',
//     zip: 00666,
//     cats: [1, 5]
//   },
//   {
//     id: 2,
//     name: 'Hiccup Horrendous Haddock III',
//     email: 'hiccupIII@example.com',
//     hidden: false,
//     image:'./images/toothless/owner.jpg',
//     city: 'Berk',
//     state: 'Ireland',
//     zip: 12345,
//     cats: [2]
//   },
//   {
//     id: 3,
//     name: 'H.I. Mcdunnough',
//     email: 'hi@example.com',
//     hidden: true,
//     image:'./images/junior/owner.jpg',
//     city: 'Berk',
//     state: 'Ireland',
//     zip: 12345,
//     cats: [3]
//   },
//   {
//     id: 4,
//     name: 'Bruce Wayne',
//     email: 'bruce@wayne-enterprises.com',
//     hidden: true,
//     image:'./images/bat-cat/owner.jpg',
//     city: 'Gotham City',
//     state: 'NJ',
//     zip: 11111,
//     cats: [4]
//   },
// ]

// GET routes

// cats
function getAllCats() {
  return knex('cats')
    .returning('*')
}

function getCatById(id) {
  return knex('cats').where('id', id)
}

// users
function getAllUsers() {
  return knex('users')
    .returning('*')
}

function getUserById(id) {
  // let user = users.find(user => user.id == id)
  // if (user) return user

  return knex('users').where('id', id)
    .returning('*')
}

function getCatsByUser(id) {
  // let user = getUserById(id)
  // userCats = []
  // user.cats.forEach(userCat => {
  //   cats.forEach(cat => {
  //     if (userCat == cat.id) {
  //       userCats.push(cat)
  //     }
  //   })
  // })
  // return userCats
  return knex('cats').where('userid', id)
    .returning('*')
}

function getCatByUserAndId(catId, userId) {
  let cats = getCatsByUser(userId)
  let cat = cats.find(cat => cat.id == catId)
  if (cat) return cat
}

// likes




// POSTS

function createUser(name, password, email, hidden, image, city, state, zip) {
  let user = {
    username: name,
    password: password,
    email: email,
    hidden: hidden,
    image: image,
    city: city,
    state: state,
    zip: zip
  }

  return knex('users').insert(user)
    .returning('*')
}



function createCat(name, age, gender, fixed, bio, image1, image2, image3, image4, userId) {
  let cat = {
    name: name,
    age: age,
    gender: gender,
    fixed: fixed,
    bio: bio,
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    userid: userId
  }

  console.log(cat)

  return knex('cats').insert(cat)
    .returning('*')
}

// PUTS

function updateUser(id, name, email, hidden, image, city, state, zip) {
  const user = getUserById(id)
  user.name = name
  user.email = email
  user.hidden = hidden
  user.image = image
  user.city = city
  user.state = state
  user.zip = zip

  return user
}

function updateCat(userId, id, name, age, gender, fixed, bio, image1, image2, image3, image4) {
  let cat = getCatByUserAndId(id, userId)
  cat.name = name
  cat.age = age
  cat.gender = gender
  cat.fixed = fixed
  cat.bio = bio
  cat.images[0] = image1
  cat.images[1] = image2
  cat.images[2] = image3
  cat.images[3] = image4

  return cat
}

// DELETE

function deleteCat(id, userId) {
  // let cat = getCatByUserAndId(id, userId)
  // let catIndex = cats.indexOf(cat)
  // cats.splice(catIndex, 1)
  //
  // return cats

  return knex('cats')
    .where('id', id)
    .del()
    .returning('*')
}

function deleteUser(id) {
  let user = getUserById(id)
  let userCats = getCatsByUser(id)

  let userIndex = users.indexOf(user)
  users.splice(userIndex, 1)

  userCats.forEach(userCat => {
    let catIndex = cats.indexOf(userCat)
    cats.splice(catIndex, 1)
  })

  return users

}

module.exports = {
  getAllCats,
  getCatById,
  getAllUsers,
  getUserById,
  getCatsByUser,
  getCatByUserAndId,
  createUser,
  createCat,
  updateUser,
  updateCat,
  deleteCat,
  deleteUser
}
