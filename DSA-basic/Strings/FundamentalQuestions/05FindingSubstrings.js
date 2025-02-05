// Write a function that finds the first occurrence of a given substring in a string without using indexOf() or built-in methods.

let str = "piece of cake";
let sub = "ece";

function findSub(str, sub) {
  let k = sub.length;
  let l = str.length;
  for (let i = 0; i <= l - k; i++) {
    let match = true;
    for (let j = 0; j < k; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
}

console.log(findSub(str, sub));

//with inbuilt methods ***************************8
// function findSubstring(mainStr, subStr) {
//   let n = mainStr.length;
//   let m = subStr.length;

//   for (let i = 0; i <= n - m; i++) {
//     // Extract substring from i to i + m
//     let currentWindow = mainStr.substring(i, i + m);

//     // Compare with the target substring
//     if (currentWindow === subStr) {
//       return i; // Found the index
//     }
//   }
//   return -1; // Not found
// }
