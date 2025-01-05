function selectionSortFun(arr) {
  const len = arr.length;

  //run a outer loop through the array initialize minIndex to the current element;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    //run another loop from i+1 to end,to find the minimum element in the remaining part of array
    for (let j = i + 1; j < len; j++) {
      //if element at j is less than current min then assign minIndex as j;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //after end of above inner loop we now have the index of minimum element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSortFun(arr));
