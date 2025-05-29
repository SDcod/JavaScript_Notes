let num = 1234;

function revNum(num) {
  let newNum = 0;

  while (num > 0) {
    newNum = newNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return newNum;
}

console.log(revNum(num));
