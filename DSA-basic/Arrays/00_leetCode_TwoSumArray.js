//my version O(n^2) - Not optimal

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log([i, j]);
//       }
//     }
//   }
//   return [];
// };

// twoSum([2, 7, 11, 15], 9);

// Input: arr = [1, 2, 3, 4, 6], target = 6
// Output: [1, 3] // arr[1] + arr[3] = 2 + 4 = 6

//***************************** SORTED ARRAY ********* */
//optimal solution using two pointer O(n) if the array is sorted;

// function getNums(arr, k) {
//   let left = 0;
//   let right = arr.length - 1;
//   let sum;
//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === k) {
//       return [left, right];
//     } else if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [];
// }

// console.log(getNums([1, 2, 3, 4, 6], 6));

//***************************** UNSORTED ARRAY ********* */

//Using Hashmap
const twoSum = (array, goal) => {
  let mapOfNumbers = {}; // To store indices of numbers
  let twoIndexes = []; // To store the result indices

  for (let i = 0; i < array.length; i++) {
    let target = goal - array[i]; // Find the number needed to reach the goal

    if (mapOfNumbers[target] !== undefined) {
      // If the target exists in the map, we have found a pair
      twoIndexes.push(mapOfNumbers[target]);
      twoIndexes.push(i);
      return twoIndexes; // Return immediately if only one pair is needed
    }

    // Store the index of the current number in the map
    mapOfNumbers[array[i]] = i;
  }

  return twoIndexes; // Return an empty array if no pair is found
};

// Example Usage
let arr = [2, 7, 11, 15];
let goal = 9;
console.log(twoSum(arr, goal)); // Output: [0, 1]
