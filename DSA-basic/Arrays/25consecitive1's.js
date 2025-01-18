// Maximum consecutive one’s (or zeros) in a binary array
// Last Updated : 09 Jul, 2024
// Given a binary array, find the count of a maximum number of consecutive 1s present in the array.

// Examples :

// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.

const solution = (arr) => {
  let currentCount = -Infinity;
  let maxCount = -Infinity;

  for (let num of arr) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

console.log(solution([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]));
