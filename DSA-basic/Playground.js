let a = [1, 2, 3, 5, 8];

function solution(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr;
}

console.log(solution(a));
