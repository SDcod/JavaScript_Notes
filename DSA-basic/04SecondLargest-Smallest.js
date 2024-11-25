//find second largest and smallest

let arr = [3, 6, 12, 13, 56, 32];

//with sorting

// 1.sort the Array.
// 2.loop the sorted array return the second last element and second element if they are not equal to largest and smalles.

//**************************** */

//without sorting

// function getElements(arr) {
//   if (arr.length === 0 || arr.length === 1) {
//     console.log(-1 + " " + -1); // Edge case when only one element is present in the array
//     return;
//   }

//   let second_small = Infinity;
//   let second_large = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < second_small && arr[i] !== Math.min(...arr))
//       second_small = arr[i];
//     if (arr[i] > second_large && arr[i] !== Math.max(...arr))
//       second_large = arr[i];
//   }

//   console.log("Second smallest is " + second_small);
//   console.log("Second largest is " + second_large);
// }

// const arr1 = [1, 2, 4, 6, 7, 5];
// getElements(arr1);
