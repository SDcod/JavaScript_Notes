let str = "hello";

function revStr(str) {
  let i;
  let len = str.length;

  //edge case to avoid going into for loop
  if (typeof str !== "string") return "Input must be a string";
  if (len == 1) return str;
  if (len == 0) return "empty";

  let newStr = "";
  for (i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(revStr(str));

//reversing - using built in functions ************************

// let str = "abcba";

// let reversed = str.split("").reverse().join("");
