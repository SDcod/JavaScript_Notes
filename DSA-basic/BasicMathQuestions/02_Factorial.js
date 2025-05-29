//f(n) = n * f(n-1)

function factorial(num) {
  //base case
  if (num < 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(6));
