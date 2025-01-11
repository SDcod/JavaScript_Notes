// Given an array arr[], the task is to find the subarray of contiguous values that has the maximum sum and return its sum.

//O(n^2)
// let arr = [2, 3, -8, 7, -1, 2, 3];

// function getSum(a) {
//   let sum = a[0];
//   for (let i = 0; i < a.length; i++) {
//     let current = 0;
//     for (let j = i; j < a.length; j++) {
//       current += arr[j];

//       sum = Math.max(sum, current);
//     }
//   }
//   return sum;
// }

// console.log(getSum(arr));

// Optimal approach **********************************************
