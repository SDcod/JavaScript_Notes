// Question: Find the Closest Pair to a Target Sum
// You are given a sorted array of integers arr and a target sum target. Your task is to find the pair of numbers from the array whose sum is closest to the target.

// Constraints:
// The array is sorted in ascending order.
// The pair should consist of two distinct elements.
// If there are multiple pairs with the same closest sum, return any one of them.
// Input:
// arr = [1, 3, 4, 7, 10, 20]
// target = 15
// Output:
// The closest pair of numbers: (4, 10) (or the pair that sums closest to the target).

// Hints:
// Use the two-pointer approach:
// Start with pointers at the beginning (left) and end (right) of the array.
// Calculate the sum of the pair at the two pointers.
// Adjust the pointers:
// If the sum is less than the target, move the left pointer to the right (to increase the sum).
// If the sum is greater than the target, move the right pointer to the left (to decrease the sum).
// Keep track of the closest sum during each iteration.
// Let me know if you'd like me to guide you through solving this!

let arr = [0, 1, 3, 4, 7, 10, 11, 15, 20];
// target = 15
function closestPair(arr, t) {
  let i = 0;
  let j = arr.length - 1;
  let closestdiff = Infinity;
  let closestPair = [];

  while (i < j) {
    let sum = arr[i] + arr[j];
    let currentdiff = Math.abs(t - sum);

    if (currentdiff < closestdiff) {
      closestdiff = currentdiff;
      closestPair = [arr[i], arr[j]];
    }

    if (sum > t) {
      j--;
    } else {
      i++;
    }
  }

  return closestPair;
}

console.log(closestPair(arr, 15));
