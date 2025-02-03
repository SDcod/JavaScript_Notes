// String compression means reducing the size of a string by encoding repeated characters.

// Example:
// Input: "aaabbcddd"
// Compressed Output: "a3b2c1d3"

// Idea 💡
// We scan through the string and count consecutive occurrences of a character, then replace them with <char><count>.

// Steps:
// 1️⃣ Initialize an empty result string.
// 2️⃣ Iterate through the input and count consecutive characters.
// 3️⃣ Append <char><count> to the result.
// 4️⃣ Return the compressed string (only if it’s shorter than the original).

let str = "aaabbcddd";

function comp(str) {
  let res = "";
  let count = 1;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }

  if (res.length < len) return res;
  return str;
}

console.log(comp(str));
