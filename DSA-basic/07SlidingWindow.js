// Maximum Sum Subarray (Sliding Window)
// Problem Statement:
// Find the maximum sum of a contiguous subarray of size k.

// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 // [5, 1, 3] has the maximum sum.

let arr = [2, 1, 5, 1, 3, 2]; //9
k = 3;

let maxSum = 0;
let winSum = 0;
for (let i = 0; i < k; i++) {
  winSum += arr[i];
} //get sum of first window.

maxSum = winSum;

//loop through array and get sum of each possible window
for (let i = k; i < arr.length; i++) {
  winSum += arr[i] - arr[i - k];
  maxSum = Math.max(winSum, maxSum);
}

console.log(maxSum);
