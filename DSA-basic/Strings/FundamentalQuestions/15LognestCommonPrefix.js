//-Find the Longest Common Prefix in an array of strings.
// Input: arr[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
// Output: “gee”
// Explanation: “gee” is the longest common prefix in all the given strings: “geeksforgeeks”, “geeks”, “geeks” and “geezer”.

// Input: arr[] = [“apple”, “ape”, “april”]
// Output : “ap”
// Explanation: “ap” is the longest common prefix in all the given strings: “apple”, “ape” and “april”.

// Input: arr[] = [“hello”, “world”]
// Output: “”
// Explanation: There’s no common prefix in the given strings.

// By sorting the array of strings, we can find the longest common prefix in the first and last strings of the sorted array.
//1.sort the array of strings
//2. find the minimum length of the first and last string
//3. compare the first and last string character by character
//4. return the common prefix

let longestCommonPrefix = (arr) => {
  //sorting array
  arr.sort();

  let n = arr.length;
  let minLen = Math.min(arr[0].length, arr[n - 1].length);
  let i = 0;

  //finding the common prefix
  while (i < minLen && arr[0][i] === arr[n - 1][i]) {
    i++;
  }

  return arr[0].substring(0, i);
};

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"])); //gee
console.log(longestCommonPrefix(["apple", "ape", "april"])); //ap
console.log(longestCommonPrefix(["hello", "world"])); //""
