// Write a function that finds the first occurrence of a given substring in a string without using indexOf() or built-in methods.

let str = "piece of cake";
let sub = "ece";

function findSub(str, sub) {
  let k = sub.length;

  //slide the window till we find first occurence of substring;

  for (let i = 0; i <= str.length - k; i++) {
    let currentWindow = str.substring(i, i + k);
    // console.log(currentWindow);
    if (currentWindow == sub) return i;
  }

  return -1;
}

console.log(findSub(str, sub));
