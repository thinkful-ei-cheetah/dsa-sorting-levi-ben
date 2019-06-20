function zeroOneSort(arr){
  let currIndex = arr.length - 1
  for( let i = currIndex; i > 0; i--){
    if(arr[i] ===1){
      swap(arr, i, currIndex)
      currIndex = i
    }
  }
  return arr
}