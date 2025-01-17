// Question: Find the Longest Subarray with a Given Sum
// Problem:
// You are given an array of integers, both positive and negative. Your task is to find the length of the longest subarray that has a sum equal to a given target (k).

// Example:
// plaintext
// Copy code
// Input: arr = [10, 5, 2, 7, 1, 9], k = 15
// Output: 4
// Explanation: The longest subarray with sum = 15 is [5, 2, 7, 1].

// Input: arr = [-1, 2, 3, 0, 4, -2, 1], k = 5
// Output: 4
// Explanation: The longest subarray with sum = 5 is [2, 3, 0, 4].
// Constraints:
// The array may contain both positive and negative integers.
// You only need to return the length of the subarray.
// Hints:
// You can use a prefix sum and a hash map to store the first occurrence of each prefix sum.
// Keep track of the current prefix sum as you iterate through the array.
// Check if currentPrefixSum - k exists in the hash map to determine the subarray length.

let arr = [10, 5, 2, 7, 1, 9];

const longestSub = (arr, k) => {
  let prefixSum = 0;
  let prefixHash = {};
  let maxLength = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    //if current prefix sum == target update max length
    if (prefixSum === k) {
      maxLength = i + 1;
    }

    let diff = prefixSum - k; //if we find that the difference exist in or hash means target found and the end index is current one(i) and the start index is the index after prefixHash[diff].
    if (prefixHash.hasOwnProperty(diff)) {
      maxLength = Math.max(maxLength, i - prefixHash[diff]);
    }

    //add the prefixsum and it's index to hashmap {prefixSum : index}
    if (!prefixHash.hasOwnProperty(prefixSum)) {
      prefixHash[prefixSum] = i;
    }
  }
  return maxLength;
};

console.log(longestSub(arr, 15));

// We are using the prefix sum technique to find the longest subarray whose sum equals a given target (k).

// Key Idea:
// The relationship we exploit is:

// prefixSum[j]−prefixSum[i−1]=k
// Which rearranges to:
// prefixSum[i−1]=prefixSum[j]−k
// This means:

// If we know the current prefix sum (prefixSum[j]) and we can find an earlier prefix sum (prefixSum[i-1]) such that their difference is equal to k, the subarray from i to j has a sum of k.

// -i is the current index (j in the prefix sum formula).
// -prefixHash[diff] gives the index of the earlier prefix sum (i-1 in the formula).
// The subarray length is:
// Length=j−(i−1)=j−i+1=i−prefixHash[diff]
// This length is compared with the current maxLength, and the larger of the two is stored.
