const uuid = require('uuid')
const fs = require('fs')

// temporary

cats = [
  {
    id: 1,
    name: 'Grumpy Cat',
    age: 5,
    gender: 'female',
    fixed: 'prefer not to say...',
    city: 'Morristown',
    state: 'AZ',
    zip: 85342,
    bio: "I am an example! I'm not as grumpy as I seem. I just hate everyone and thing. I hope you all step on legos today.",
    images: ['./images/grumpy-cat/1.jpeg', './images/grumpy-cat/2.jpg', './images/grumpy-cat/3.jpg', './images/grumpy-cat/4.jpg'],
    userId: 1,
    userName: 'Lady Tremaine',
    userEmail: 'ladytremaine@example.com',
    userImage: './images/Lucifer/owner.jpg',
  },
  {
    id: 2,
    name: 'Toothless',
    age: 2,
    gender: 'male',
    fixed: 'nope',
    city: 'Berk',
    state: 'Ireland',
    zip: 12345,
    bio: "I am an example! I am a Night Fury, arguably the rarest and most intelligent of.. cat species.",
    images: ['./images/toothless/1.jpg', './images/toothless/2.jpg', './images/toothless/3.jpg'],
    userId: 2,
    userName: 'Hiccup Horrendous Haddock III',
    userEmail: 'hiccupIII@example.com',
    userImage: './images/toothless/owner.jpg',
  },
  {
    id: 3,
    name: 'Junior',
    age: 0,
    gender: 'male',
    fixed: 'nope',
    city: 'Berk',
    state: 'Ireland',
    zip: 12345,
    bio: "I am an example! I like cornflakes, huggies, and balloons that blow up into funny shapes.",
    images: ['./images/junior/1.jpg', './images/junior/2.jpg', './images/junior/3.jpg', './images/junior/4.jpg'],
    userId: 3,
    userName: 'H.I. Mcdunnough',
    userEmail: 'hi@example.com',
    userImage: './images/junior/owner.jpg',
  },
  {
    id: 4,
    name: 'Bat Cat',
    age: 11,
    gender: 'male',
    fixed: 'yes',
    city: 'Gotham City',
    state: 'NJ',
    zip: 11111,
    bio: "I am an example! I'm the cat MEOW deserves, but not the one it needs... or something. I'm not a hero. I'm a silent guardian. A watchful protector.'",
    images: ['./images/bat-cat/1.jpeg', './images/bat-cat/2.jpg', './images/bat-cat/3.jpg', './images/bat-cat/4.jpeg'],
    userId: 4,
    userName: 'H.I. Mcdunnough',
    userEmail: 'bruce@wayne-enterprises.com',
    userImage: './images/bat-cat/owner.jpg',
  },
  {
    id: 5,
    name: 'Lucifer',
    age: 17,
    gender: 'male',
    fixed: 'yes',
    city: 'FairyLand',
    state: 'France',
    zip: 00666,
    bio: "I am an example! I am a farm cat working hard to rid our manor of the vermin it is infested with. I get little appreciation from the the snooty stepdaughter but the rest of the family is a wonderful group of dames.",
    images: ['./images/lucifer/1.jpeg', './images/lucifer/2.jpg', './images/lucifer/3.jpg', './images/lucifer/4.jpeg'],
    userId: 1,
    userName: 'Lady Tremaine',
    userEmail: 'ladytremaine@example.com',
    userImage: './images/lucifer/owner.jpg',
  }
]

users = [

]

// GET routes

//cats
function getAllCats() {
  return cats
}

function getCatById(id) {
  let cat = cats.find(cat => cat.id == id)
  if (cat) return cat
}

module.exports = {
  getAllCats,
  getCatById
}
