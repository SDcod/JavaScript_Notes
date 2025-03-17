let mat = [
  [1, 2, 3],
  [2, 3, 8],
  [3, 8, 0],
];

//here n is the num of cols
let isSym = (mat, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== mat[j][i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isSym(mat, 3));
