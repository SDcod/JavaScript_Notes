//-Rotate an Array by k positions (both left and right rotations)//time O(n*3), space O(1)
//right k=2 positions. [1,2,3,4,5,6] -> [5,6,1,2,3,4]
//idea 1)reverse entire array - [6,5,4,3,2,1]
//2)reverse first k elements. -[5,6,4,3,2,1]
//3)reverse elements after k. -[5,6,1,2,3,4]

// let originalArr = [1, 2, 3, 4, 5, 6];
// let k = 2;

// function reverseArr(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// reverseArr(originalArr, 0, originalArr.length - 1); //1
// reverseArr(originalArr, 0, k - 1); //1
// reverseArr(originalArr, k, originalArr.length - 1); //1

// for left rotate reverse first k elements, reverse remaining elements till end, reverse entire arr
//[2,1,3,4,5,6]->[2,1,6,5,4,3]->[3,4,5,6,1,2]

// console.log(originalArr);

//------------------------------------------------------

// Brue force using .pop() and .unshift(); EASIEST time conplexity O(n*k) , space O(1)
const rotateArray1 = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
};

// console.log(rotateArray1([1, 2, 3, 4, 5], 2));

//********************LEFT ROTATION k positions push and shift

const rotateArrayleft = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.push(nums.shift());
  }

  return nums;
};

console.log(rotateArrayleft([1, 2, 3, 4, 5], 2));

//using for loop use above solution but change the reversal order
// for left rotate reverse first k elements, reverse remaining elements till end, reverse entire arr
//[2,1,3,4,5,6]->[2,1,6,5,4,3]->[3,4,5,6,1,2]
