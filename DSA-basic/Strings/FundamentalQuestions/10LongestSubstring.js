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
//     let currentStr = "";
//     for (let j = i; j < str.length; j++) {
//       if (!seenMap[str[j]]) {
//         seenMap[str[j]] = true;
//         currentStr += str[j];
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
