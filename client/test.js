var arr = [1, 2, 3];
// var arr = {
//   0: 1,
//   1: 2,
//   2: 3,
// };

// ** in js even if we add a value at a -ve index it will NOT throw an error
arr[-1] = 10; //
console.log(Array.isArray(arr));
