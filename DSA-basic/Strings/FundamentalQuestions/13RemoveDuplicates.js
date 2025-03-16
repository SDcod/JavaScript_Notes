//remove duplicate characters.

//using Map********************************************************
let str = "hello there, how are you?";

function sol(str) {
  let res = "";
  let seen = new Map();
  for (let char of str.toLowerCase()) {
    if (char === " " || !seen.has(char)) {
      res += char;
    }
    seen.set(char, true);
  }

  return res;
}

console.log(sol(str));
