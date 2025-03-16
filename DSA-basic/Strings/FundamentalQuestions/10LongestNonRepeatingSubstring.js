// Problem 1: Longest Substring Without Repeating Characters
// 📌 Problem Statement:
// Given a string, find the length of the longest substring without repeating characters.

// 🔹 Example:
// Input: "abcabcbb"
// Output: 3   // "abc" is the longest substring without repeating characters
// 🔍 Why This Problem?
// ✅ It tests sliding window techniques.
// ✅ Helps in understanding hash sets for tracking unique characters.

//**************************************BRUTE force first attempt */
// let str = "abcabcbb"; //3 , abc

// //maintain a map for every substring with unique elements.
// //store the length of maximum sub;

// function logestSub(str) {
//   let maxSub = "";

//   for (let i = 0; i < str.length; i++) {
//     let seenMap = {};
//     let currentStr = ""; //optional if asked to return string
//     for (let j = i; j < str.length; j++) {
//       if (!seenMap[str[j]]) {
//         seenMap[str[j]] = true;
//         currentStr += str[j];//optional if asked to return string
//       } else {
//         break;
//       }
//     }

//     if (maxSub.length < currentStr.length) {
//       maxSub = currentStr;
//     }
//   }

//   return maxSub.length;
// }

// console.log(logestSub(str));

//**************************************SLIDING WINDOW APPROACH */

//sliding window and two pointer technique

function longestSubstring(s) {
  let charMap = {}; // Store last index of characters
  let l = 0; //left pointer to track the start of non repeating window
  let maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    let currentChar = s[r];

    // If character is already in window, move left pointer (l) ahead
    if (charMap[currentChar] !== undefined && charMap[currentChar] >= l) {
      l = charMap[currentChar] + 1; //update left pointer to start of non repeating window by incrementing it by one
    }

    // Store/update the last seen index of the character
    charMap[currentChar] = r;

    // Update max length
    maxLen = Math.max(maxLen, r - l + 1); //compare maxlen and difference between right pointer and left pointer.
  }

  return maxLen;
}

// Example Test Cases
console.log(longestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(longestSubstring("bbbbb")); // Output: 1 ("b")
console.log(longestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(longestSubstring("")); // Output: 0
