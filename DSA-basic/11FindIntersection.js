//Using set ****************************8

function intersection(arr1, arr2) {
  let newSet = new Set(arr1);
  let result = [];

  for (let num of arr2) {
    if (newSet.has(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example Usage
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [3, 2, 2, 4, 5, 6];
console.log(intersection(arr1, arr2)); // Output: [3, 4]
