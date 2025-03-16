// Problem 1: Longest Substring Without Repeating Characters
// 📌 Problem Statement:
// Given a string, find the length of the longest substring without repeating characters.

// 🔹 Example:
// Input: "abcabcbb"
// Output: 3   // "abc" is the longest substring without repeating characters

//using sliding window
/*
idea is to iterate over the string an store the index of the character in a seen map.
if the character is seen and is in current window, update the start of unique window.
update the last seen index of current character in seen map
compare maxlenght and current window length.
*/

function sol(s) {
  let seen = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];

    if (seen[currentChar] !== undefined && seen[currentChar] >= left) {
      left = seen[currentChar] + 1;
    }

    seen[currentChar] = right;

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(sol("abcabcbb")); //3
