const fs = require('fs')
// const { json } = require('stream/consumers')
// const book = {
//     title: 'Hari Puttar',
//     author: 'Rohit Shetty'
// }

// const bookJson = JSON.stringify(book) //converts JSON data into string
// fs.writeFileSync('1-JSON.json', bookJson) //writes data into a file
// const bookBuffer = fs.readFileSync('1-JSON.json')  //return in bit codes
// const dataBuffer = bookBuffer.toString() //returns in readable form
// const data = JSON.parse(dataBuffer) //parsing string into an object so we can access specififc property
// console.log(data.title)

//-------------------------------:overwriting data below:---------------------------------------

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)

user.title = 'Hera Pheri'
user.author = 'Priyadarshani'

const userJson = JSON.stringify(user)
fs.writeFileSync('1-JSON.json', userJson)



