// -Sort an Array of 0s, 1s, and 2s without using sorting functions.

let arr = [1, 0, 0, 2, 1, 1, 0, 2, 2]; //[0,0,0,1,1,1,2,2,2]

function dutch(arr) {
  let len = arr.length;
  let i = 0;
  let j = len - 1;
  let mid = 0;

  while (mid <= j) {
    if (arr[mid] === 0) {
      [arr[mid], arr[i]] = [arr[i], arr[mid]];
      mid++;
      i++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[j]] = [arr[j], arr[mid]];
      j--;
    }
  }

  return arr;
}

console.log(dutch(arr));
