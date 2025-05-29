let arr = [1, 2, 3, 4, 5, 8, 9, 10, 12];
let n = 13;
//[6,7,11,13]

//iterate using for loop if current loop index is equal to pointer element, increment pointer ele.
//else elements are not equal add current loop idx to res array, and proceed.
function missing(arr, n) {
  let res = [];
  let p = 0; //track current array index

  for (let i = 1; i <= n; i++) {
    if (i == arr[p]) {
      p++;
    } else {
      res.push(i);
    }
  }

  return res;
}

console.log(missing(arr, 13));
