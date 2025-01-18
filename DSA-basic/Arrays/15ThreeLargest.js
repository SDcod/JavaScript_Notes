//find the three larget elements in array using set and sorting O(nlogn).

// let arr = [1, 2, 3, 34, 45, 12, 25, 60, 60];

// let sortedArr = arr.sort((a, b) => b - a);

// //set to handle duplicates
// let arrSet = Array.from(new Set(sortedArr));

// for (let i = 0; i <= 2; i++) {
//   console.log(arrSet[i]);
// }

//***************without using the set and sort*************/

let arr = [1, 2, 3, 34, 45, 12, 25, 60, 60];

let first = -Infinity,
  second = -Infinity,
  third = -Infinity;

for (let num of arr) {
  //handle duplicates
  if (num === first || num === second || num === third) continue;

  if (num > first) {
    third = second;
    second = first;
    first = num;
  } else if (num > second) {
    third = second;
    second = num;
  } else if (num > third) {
    third = num;
  }
}

console.log([first, second, third]);
