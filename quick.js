const swap = require('./swap')

function quickSort(array, start = 0, end = array.length){
  if(start >= end){
    return array
  }
  const middle = partition(array, start, end)
  array = quickSort(array, start, middle)
  array = quickSort(array, middle + 1, end)
  return array
}

function partition(array, start, end){
  const pivot = array[end - 1]
  let j = start
  for(let i = start; i < end - 1; i++){
    if(array[i] <= pivot){
      swap(array, i, j)
      j++
    }
  }
  swap(array, end - 1, j)
  return j
}

module.exports = quickSort