// let arr = [1, 2, 3, 4, 5, 6];

// let result = [];

// //push even
// for (let num of arr) {
//   if (num % 2 == 0) {
//     result.push(num);
//   }
// }

// // push odd
// for (let num of arr) {
//   if (num % 2 !== 0) {
//     result.push(num);
//   }
// }

// console.log(result);

//Using two pointers and in place separation.

let arr1 = [1, 2, 3, 4, 5, 6];

function sepEvenOdd(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }

  return [arr.slice(0, j), arr.slice(j, arr.length)];
}

console.log(sepEvenOdd(arr1));
