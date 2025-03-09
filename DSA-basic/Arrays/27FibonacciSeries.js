//Recursion

// f(n)= f(n-1) + f(n-2)
function fibSeriesRecursion(n) {
  if (n <= 1) {
    return n;
  }

  return fibSeriesRecursion(n - 1) + fibSeriesRecursion(n - 2);
}

console.log(fibSeriesRecursion(10));

//Dynamic programming O(n)

// function solution(n) {
//   let fib = {};
//   fib[0] = 0;
//   fib[1] = 1;

//   let i = 2;
//   while (i <= n) {
//     fib[i] = fib[i - 1] + fib[i - 2];

//     i++;
//   }

//   return fib;
// }

// console.log(solution(10));
