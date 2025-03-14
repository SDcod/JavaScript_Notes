//Sort by inserting the current element i.e into its correct position by comparing it with the previous elements.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Element to be inserted
    let j = i - 1;
    // Move elements of arr[0...i-1], that are greater than 'key', one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert 'key' into its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example Usage
let array = [1, 12, 2, 11, 13, 5, 6];
console.log("Sorted Array:", insertionSort(array));
