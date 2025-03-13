// Problem Statement:
// Given a string s, find the longest substring that is a palindrome.

// 🔹 Example:
// Input:
// s = "babad"
// Output:
// "bab"  (or "aba" is also valid)

//1.Outer loop through the string
//2.Inner loop to get the substring;

let str = "babad";

function longestPalindrome(str) {
  let len = str.length;
  if (len === 0) return ""; // Handle empty input
  if (len === 1) return str; // Single character is a palindrome

  let maxSubLength = 0;
  let maxSubstring = "";

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let currentSub = str.substring(i, j + 1); // Extract substring
      if (isPalindrome(currentSub) && currentSub.length > maxSubLength) {
        maxSubLength = currentSub.length;
        maxSubstring = currentSub;
      }
    }
  }

  return maxSubstring;
}

// Function to check if a string is palindrome
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(longestPalindrome(str)); // Output: "bab" or "aba"

/*
// **********************************************************Optimized O(n^2)
let str = "babad";

function longestPalindrome(str) {
  let len = str.length;
  if (len < 2) return str; // If string is empty or 1 char, return itself

  let start = 0,
    maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < len && str[left] === str[right]) {
      let currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < len; i++) {
    expandAroundCenter(i, i); // Odd length palindrome
    expandAroundCenter(i, i + 1); // Even length palindrome
  }

  return str.substring(start, start + maxLength);
}

console.log(longestPalindrome(str)); // Output: "bab" or "aba"

*/
