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

//optimal solution using two pointer O(n);

function getNums(arr, k) {
  let left = 0,
    right = arr.length - 1;
  let sum;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === k) {
      return [left, right];
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(getNums([1, 2, 3, 4, 6], 6));
