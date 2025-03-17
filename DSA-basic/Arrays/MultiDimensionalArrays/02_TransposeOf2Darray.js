//print all elements in 2D array;

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let transpose = [];
for (let i = 0; i < matrix[0].length; i++) {
  let row = [];
  for (let j = 0; j < matrix.length; j++) {
    row.push(matrix[j][i]);
  }
  transpose.push(row);
}

console.log(transpose);
