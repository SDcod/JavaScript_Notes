let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = [];
for (let i = 0; i < matrix.length; i++) {
  let rowSum = 0;
  for (let j = 0; j < matrix[i].length; j++) {
    rowSum += matrix[i][j];
  }
  sum.push(rowSum);
}

console.log(sum);
