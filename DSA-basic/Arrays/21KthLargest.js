// Input: (nums = [3, 2, 1, 5, 6, 4]), (k = 2);
// Output: 5;

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

function getlargest(arr, k) {
  let sorted = arr.sort((a, b) => a - b);
  //   let uniqueArr = Array.from(new Set(sorted));
  //   console.log("in case of unique element : "+uniqueArr);

  return sorted[sorted.length - k];
}

console.log(getlargest(arr, k));

//using min heap ----------------------------------

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(val) {
//     this.heap.push(val);
//     this.heap.sort((a, b) => a - b); // Maintain min heap property
//   }

//   pop() {
//     return this.heap.shift(); // Remove smallest element
//   }

//   top() {
//     return this.heap[0]; // Get the smallest element
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// function findKthLargest(arr, k) {
//   let minHeap = new MinHeap();

//   for (let num of arr) {
//     minHeap.push(num);
//     if (minHeap.size() > k) {
//       minHeap.pop(); // Remove smallest element
//     }
//   }

//   return minHeap.top();
// }

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
