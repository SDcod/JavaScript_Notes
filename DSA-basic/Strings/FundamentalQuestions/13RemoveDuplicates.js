//remove duplicate characters.

//using Map********************************************************
// let str = "hello world";

// function sol(str) {
//   let res = "";
//   let seen = new Map();
//   for (let char of str.toLowerCase()) {
//     if (!seen.has(char)) {
//       res += char;
//     }
//     seen.set(char, true);
//   }

//   return res;
// }

// console.log(sol(str));

//using Set *************************************************************
let str = "hello world";

function sol(str) {
  let res = Array.from(new Set(str)).join("");

  return res;
}

console.log(sol(str));
