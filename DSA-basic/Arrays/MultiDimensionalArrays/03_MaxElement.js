let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let maxNum = -Infinity;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] > maxNum) {
      maxNum = matrix[i][j];
    }
  }
}

console.log(maxNum);
