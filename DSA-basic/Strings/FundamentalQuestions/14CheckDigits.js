// -Check if a String Contains Only Digits.

//using regex

function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric("12345")); // true
console.log(isNumeric("12a45")); // false
console.log(isNumeric("")); // false

//using isNAN
let str1 = "123456"; //true
let str2 = "123a56"; //false
function isDigit(str) {
  return !isNaN(str);
}

console.log(isDigit(str1));
console.log(isDigit(str2));
