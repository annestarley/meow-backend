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
  }
]




function getAllCats() {
  return cats
}

module.exports = {
  getAllCats
}
