// Compressed Output: "a3b2c1d3"
//output : "aaabbcddd"

let str = "a3b2c1d3";

function decomp(str) {
  let len = str.length;
  //   let current = str[0];
  let res = "";

  for (let i = 0; i < len - 1; i += 2) {
    let character = str[i];
    let count = str[i + 1];
    res += character.repeat(count);
  }

  return res;
}

console.log(decomp(str));
