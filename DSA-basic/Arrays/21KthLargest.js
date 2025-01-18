// Input: (nums = [3, 2, 1, 5, 6, 4]), (k = 2);
// Output: 5;

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

function getlargest(arr, k) {
  let sorted = arr.sort((a, b) => a - b);
  //   let uniqueArr = Array.from(new Set(sorted));
  //   console.log("in case of unique element : "+uniqueArr);

  return sorted[sorted.length - k];
}

console.log(getlargest(arr, k));
