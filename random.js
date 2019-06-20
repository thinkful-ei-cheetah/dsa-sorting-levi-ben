const swap = require('./swap')

function randomize(arr){
  let randomIndex
  for(let i = 0; i < arr.length; i++){
    randomIndex = Math.floor(Math.random() * (arr.length - 1))
    swap(arr, i, randomIndex)
  }
  return arr
}

module.exports = randomize