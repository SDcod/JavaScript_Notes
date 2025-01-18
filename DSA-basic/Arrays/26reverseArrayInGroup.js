// Reverse an Array in groups of given size

// Given an array arr[] and an integer K, the task is to reverse every subarray formed by consecutive K elements.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3
// Output: 3, 2, 1, 6, 5, 4, 9, 8, 7

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], K = 5
// Output: 5, 4, 3, 2, 1, 8, 7, 6

function reverseGroup(arr, k, start) {
  // Base condition: if start index is out of bounds, return the array
  if (start >= arr.length) {
    return arr;
  }

  // Calculate end index for the current group
  let end = Math.min(start + k - 1, arr.length - 1);

  // Reverse the current group
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  // Recursive call for the next group
  return reverseGroup(arr, k, start + k - k / 2); //the reason for k/2 is we are subtracting the difference start reached during the while loop.
}

// Example Usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 4;
console.log(reverseGroup(arr, k, 0));
