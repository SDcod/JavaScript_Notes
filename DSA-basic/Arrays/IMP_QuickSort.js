// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const quickSort = (arr) => {
  let len = arr.length;
  let pivot = arr[0];
  let left = [];
  let right = [];
  let middle = [];
  /* The middle array ensures duplicates are handled in one place, avoiding unnecessary recursive calls.
The recursion terminates properly because the left and right arrays strictly shrink at each level.
This approach also has the same time complexity of 𝑂(𝑛 log 𝑛) on average. */

  //base case
  if (len <= 1) {
    return arr;
  }

  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      middle.push(num);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
};

console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]
