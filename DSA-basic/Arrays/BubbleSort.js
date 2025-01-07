//bubble sort O(n^2)
//sort by comparing each element with the adajacent and put the largest elements in correct place

const arr = [64, 34, 25, 12, 22, 11, 90];
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
