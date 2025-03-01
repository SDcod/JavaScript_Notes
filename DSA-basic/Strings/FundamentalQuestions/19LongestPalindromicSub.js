//find logest palindromic substring.
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

//find all the substrigs which are palindromes
//check length and update max

let s = "babad";

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

function maxPalindrome(str) {
  let len = str.length;
  let maxStr = "";

  for (let i = 0; i < len; i++) {
    let currentStr = "";
    for (let j = i; j < len; j++) {
      currentStr += str[j];
      if (isPalindrome(currentStr) && currentStr.length > maxStr.length) {
        maxStr = currentStr;
      }
    }
  }

  return maxStr;
}

console.log(maxPalindrome(s));
