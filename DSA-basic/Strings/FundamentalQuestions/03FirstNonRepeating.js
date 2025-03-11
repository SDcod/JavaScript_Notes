// 💡 Problem Statement:
// Given a string, find the first non-repeating character and return its index. If all characters are repeating, return -1.

// Example 1
// Input: "leetcode"
// Output: 0 (The first non-repeating character is 'l' at index 0)

// Example 2
// Input: "loveleetcode"
// Output: 2 (The first non-repeating character is 'v' at index 2)

// Example 3
// Input: "aabb"
// Output: -1 (All characters repeat)

let str = "leetcode";

function nonRep(str) {
  let countMap = new Map();
  let len = str.length;

  //edge cases
  if (len == 0) return "Provide a string with at least one character.";
  if (len == 1) return 0;
  if (typeof str !== "string") return "Enter a valid string.";

  // First pass: Count frequency
  for (let i = 0; i < len; i++) {
    countMap.set(str[i], (countMap.get(str[i]) || 0) + 1);
  }

  // Second pass: Find first non-repeating character
  for (let i = 0; i < len; i++) {
    if (countMap.get(str[i]) === 1) {
      return i;
    }
  }

  return -1; // If no unique character found
}

console.log(nonRep(str)); // Output: 0 (index of 'l')
