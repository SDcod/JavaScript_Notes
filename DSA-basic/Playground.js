//strings

let str = "aaaebbbcc"; //a3b3c2
let res = "";
let count = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    res += str[i] + count;
    count = 1;
  }
}

console.log(res);
