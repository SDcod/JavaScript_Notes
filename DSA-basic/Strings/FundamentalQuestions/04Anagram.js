// 👉 Problem Statement:
// Given two strings, determine if one is an anagram of the other.
// An anagram is a word formed by rearranging the letters of another word.

// Example:
// plaintext
// Copy
// Edit
// Input:  s1 = "listen", s2 = "silent"
// Output: true  (because both contain the same letters in a different order)

// Input:  s1 = "hello", s2 = "world"
// Output: false (different letters)

//count frequest of each character in s1
//run a loop through s2 and decrease count by one if already seen
//if any value is greated than or equal one return false else return true;

let s1 = "listen";
let s2 = "silent";
function anagram(s1, s2) {
  let freq = {};

  if (!(s1.length && s2.length)) return false;
  if (s1.length !== s2.length) return false;

  for (let i of s1) {
    freq[i] = (freq[i] || 0) + 1;
  }
  for (let i of s2) {
    freq[i] = (freq[i] || 0) - 1;
  }

  for (let key in freq) {
    if (freq[key] !== 0) return false;
  }

  return true;
}

console.log(anagram(s1, s2));
