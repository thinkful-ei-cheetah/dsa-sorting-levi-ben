const randomize = require('./random')
const swap = require('./swap')

let books = [
  'J',
  'G',
  'C',
  'N',
  'H',
  'L',
  'B',
  'I',
  'P',
  'Q',
  'M',
  'R',
  'O',
  'S',
  'K',
  'D',
  'F',
  'T',
  'E',
  'A'
]
console.log(notQuickSortWrapper(books))

function notQuickSortWrapper(arr){
  arr = randomize(arr)
  return notQuickSort(arr)
}

function notQuickSort(arr, start = 0, end = arr.length){
  // set base case
  if(start >= end){
    return arr
  }
  const pivotIndex = notPartition(arr, start, end)
  arr = notQuickSort(arr, start, pivotIndex)
  arr = notQuickSort(arr, pivotIndex + 1, end)
  return arr
}

function notPartition(arr, start, end){
  const pivot = arr[end - 1]
  let j = start
  for(let i = start; i < end - 1; i++){
    if(arr[i] <= pivot){
      swap(arr, i, j)
      j++
    }
  }
  swap(arr, end - 1, j)
  return j
}

// set base case = stop when lowerbound exceeds upperbound
// randomize the array
// set the pivot = last index in the array
// sort the array around the pivot
// recursively call sort from start to pivot
// recursively call sort from pivot + 1 till end
// return array