//-Rotate an Array by k positions (both left and right rotations)
//right k=2 positions. [1,2,3,4,5,6] -> [5,6,1,2,3,4]
//idea 1)reverse entire array - [6,5,4,3,2,1]
//2)reverse first k elements. -[5,6,4,3,2,1]
//3)reverse elements after k. -[5,6,1,2,3,4]

let originalArr = [1, 2, 3, 4, 5, 6];
let k = 2;

function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

reverseArr(originalArr, 0, originalArr.length - 1); //1
reverseArr(originalArr, 0, k - 1); //1
reverseArr(originalArr, k, originalArr.length - 1); //1

console.log(originalArr);
