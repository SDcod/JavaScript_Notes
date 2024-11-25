//Move all zeros at end of array while maintaing the order of element.
//********************using temp array*********/
// //loop the array
// //if arr[i] == 0 then arr.push(arr.slice(arr[i],1));

// let arr = [1, 0, 5, 0, 0, 1, 3];
// let n = arr.length;
// let tempArr = new Array(n);
// let j = 0; //to keep track of all filled indexes in temp array.

//  //copying all non zero elements to temp array
// for (let i = 0; i < n; i++) {
//   if (arr[i] !== 0) {
//     tempArr[j++] = arr[i];
//   }
// }

// while (j < n) tempArr[j++] = 0; //filling remaining elements with 0's

// //copying temp arr into original arr
// for (let i = 0; i < n; i++) {
//   arr[i] = tempArr[i];
// }

// console.log(arr);

//*****************************shifting all non zero elements to start*/
// const moveZeroesToEnd = (arr, n) => {
//   let count = 0; //count to track the current index of non-zero element
//   //we will move all the non zero elements to start.

//   for (let i = 0; i < n; i++) {
//     if (arr[i] != 0) {
//       arr[count++] = arr[i]; //here the zeros are being replaced by non-zeroes.
//     }
//   }

//   console.log("arr after replacing zeroes " + arr); //*1,9,8,4,2,7,6,9,0,6,0,9* we got this output because the loop did not touched the last elements and stopped till the original arr length*/
//   //now we can fill all the remaining positions with zeros.
//   //Loop starts with count as it has the index of 1st expected zeroth element.
//   while (count < n) {
//     arr[count++] = 0;
//   }

//   console.log("final " + arr);
// };

// let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
// let n = arr.length;

// moveZeroesToEnd(arr, n);

//********************most easiest and covers edge cases */
const moveZeroesToEnd = (arr) => {
  const nonZeroes = arr.filter((num) => num !== 0); // Extract non-zero elements
  const zeroes = new Array(arr.length - nonZeroes.length).fill(0); // Fill zeros
  return [...nonZeroes, ...zeroes]; // Combine non-zero and zero arrays
};

// Example usage
console.log(moveZeroesToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9])); // Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0]
console.log(moveZeroesToEnd([0, 0, 0])); // Output: [0, 0, 0]
console.log(moveZeroesToEnd([1, 2, 3])); // Output: [1, 2, 3]
console.log(moveZeroesToEnd([])); // Output: []
