// -Find the Missing Number in an array of numbers from 1 to n.

let arr = [1, 2, 3, 4, 5, 8, 9, 10, 12];
let n = 13;
//[6,7,11,13]

function findMissing(arr, n) {
  let missingNum = [];
  let arrSet = new Set(arr);
  for (let i = 1; i <= n; i++) {
    if (!arrSet.has(i)) {
      missingNum.push(i);
    }
  }
  return missingNum;
}

console.log(findMissing(arr, n));

//-----------withoug using a set -------------

// function findMissing(arr, n) {
//   let missingNum = [];
//   let arrIndex = 0;

//   for (let i = 1; i <= n; i++) {
//     if (arr[arrIndex] === i) {
//       arrIndex++; // Move to the next number in the array
//     } else {
//       missingNum.push(i); // Add the missing number
//     }
//   }

//   return missingNum;
// }

// console.log(findMissing(arr, n)); // Output: [6, 7, 11, 13]
