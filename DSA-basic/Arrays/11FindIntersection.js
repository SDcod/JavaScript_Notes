//Using set ****************************8

// function intersection(arr1, arr2) {
//   let newSet = new Set(arr1);
//   let result = [];

//   for (let num of arr2) {
//     if (newSet.has(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// // Example Usage
// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [3, 2, 2, 4, 5, 6];
// console.log(intersection(arr1, arr2)); // Output: [3, 4]

//What if the arrays have duplicates ***********************************

//have a hashmap to track count of elements occured in first array.
//iterate though the second array and only those elements whose count is > 0.
//decrement the count on each addition , through this we do not add any other uncommon elements.

const insertionWithDuplicates = (arr1, arr2) => {
  let eleCount = {};
  let result = [];

  for (let num of arr1) {
    eleCount[num] = (eleCount[num] || 0) + 1;
    //If the number is not in elementCount, initialize it with 0 and add 1 to it.
    //If it already exists, increment its count by 1.
  }

  for (let num of arr2) {
    if (eleCount[num] > 0) {
      result.push(num);
      eleCount[num]--;
    }
  }

  return result;
};
// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [3, 2, 2, 4, 5, 6];
console.log(insertionWithDuplicates([1, 2, 2, 3, 4], [3, 2, 2, 4, 5, 6])); // Output: [3,2,2,4]
