let str = "hello world";

function sol(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(sol(str));
