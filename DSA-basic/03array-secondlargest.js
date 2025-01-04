//**********************************************************************approach using sorting */
// JavaScript program to find second largest element in an array
// using Sorting

// function to find the second largest element
// function getSecondLargest(arr) {
//   let n = arr.length;

//   // Sort the array in non-decreasing order
//   arr.sort((a, b) => a - b);

//   // start from second last element as last element is the largest
//   for (let i = n - 2; i >= 0; i--) {
//     // return the first element which is not equal to the
//     // largest element
//     if (arr[i] !== arr[n - 1]) {
//       return arr[i];
//     }
//   }

//   // If no second largest element was found, return -1
//   return -1;
// }

// console.log(getSecondLargest([45, 23, 45, 55, 55, 1, 2, 44]));

//WITHOUT sorting :

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two distinct elements.";
  }

  let maxNum = -Infinity;
  let secondL = -Infinity;

  for (let num of arr) {
    // Update maxNum and secondL
    if (num > maxNum) {
      secondL = maxNum; // Previous max becomes second largest
      maxNum = num;
    } else if (num > secondL && num !== maxNum) {
      // Update secondL if the current number is smaller than maxNum but larger than secondL
      secondL = num;
    }
  }

  return secondL === -Infinity
    ? "No second largest element (all elements are the same)."
    : secondL;
}

// Example Usage
let arr = [45, 23, 45, 55, 55, 1, 2, 44];
console.log("Second Largest: " + findSecondLargest(arr)); // Output: 45
