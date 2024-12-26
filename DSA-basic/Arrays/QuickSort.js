function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array of one or zero elements is already sorted.
  }

  let pivot = arr[arr.length - 1]; // Select the pivot
  let left = [];
  let right = [];

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements smaller than the pivot
    } else {
      right.push(arr[i]); // Elements larger than or equal to the pivot
    }
  }

  // Combine sorted subarrays and pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]
