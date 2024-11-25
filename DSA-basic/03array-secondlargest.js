//OWN APPROACH - Recommended only if unique items are present in array
// let nums = [12, 3, 4, 51, 21, 45, 51];

// function getMax(arr) {
//   let maxNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }

// nums.splice(nums.indexOf(getMax(nums)), 1);

// console.log("seconde largest:" + getMax(nums));

//**********************************************************************approach 2 */
// JavaScript program to find second largest element in an array
// using Sorting

// function to find the second largest element
function getSecondLargest(arr) {
  let n = arr.length;

  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);

  // start from second last element as last element is the largest
  for (let i = n - 2; i >= 0; i--) {
    // return the first element which is not equal to the
    // largest element
    if (arr[i] !== arr[n - 1]) {
      return arr[i];
    }
  }

  // If no second largest element was found, return -1
  return -1;
}

console.log(getSecondLargest([45, 23, 45, 55, 55, 1, 2, 44]));

//WITHOUT sorting :

let maxNum = arr[0];
let minNum = arr[0];
let secondL = -Infinity;
function findMax(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function findMin(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}
findMax(arr);
findMin(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < maxNum && arr[i] !== maxNum) {
    secondL = arr[i];
  }
}

console.log("secondLarge : " + secondL);
