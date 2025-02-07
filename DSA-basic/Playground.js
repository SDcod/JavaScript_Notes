function solution(n) {
  let fib = {};
  fib[0] = 0;
  fib[1] = 1;

  let i = 2;
  while (i <= n) {
    fib[i] = fib[i - 1] + fib[i - 2];

    i++;
  }

  return fib;
}

console.log(solution(10));
