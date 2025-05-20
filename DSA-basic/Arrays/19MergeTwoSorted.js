function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  //compare numbers one by one until any one array is exhausted.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  //add remaining elements from arr1 to result array if it is not exhausted.
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  //add remaining elements from arr2 to result array if it is not exhausted.
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const merged = mergeSortedArrays(array1, array2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
