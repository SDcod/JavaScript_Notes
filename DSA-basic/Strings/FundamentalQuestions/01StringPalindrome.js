//return true if string is a palindrome

//abcba -> ture
//aabcba -> false

//by reversing then comparing - using built in functions ************************

// let str = "abcba";

// let reversed = str.split("").reverse().join("");

// // console.log(reversed);
// str === reversed ? console.log(true) : console.log(false);

//wihthout using built in functions**************************

let str = "aabbaa";

function checkPalindrome(str) {
  let i;
  let len = str.length;

  //edge case to avoid going into for loop
  if (typeof str !== "string") return "Input must be a string";
  if (len == 1) return true;
  if (len == 0) return "enter valid string";

  for (i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome(str));
