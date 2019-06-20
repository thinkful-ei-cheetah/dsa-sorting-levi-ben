const swap = require('./swap')

function bubbleSort(array){
  let swaps = 0
  for(let i = 0; i < array.length -1; i++){
    if(array[i] > array[i + 1]){
      swap(array, i, i + 1)
      swapps++
    }
  }
  if(swaps > 0){
    return bubbleSort(array)
  }
  return array
}

module.exports = bubbleSort