// Given a string s, containing lowercase alphabetical characters. The task is to print all non-empty substrings of the given string.
// Examples :
// Input :  s = “abc”
// Output :  “a”, “ab”, “abc”, “b”, “bc”, “c”

// Input :  s = “ab”
// Output :  “a”,  “ab”,  “b”

// Input :  s = “a”
// Output :  “a”

let str = "abcd";
let subArray = [];
for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    subArray.push(str.substring(i, j + 1));
  }
}

console.log(subArray);
