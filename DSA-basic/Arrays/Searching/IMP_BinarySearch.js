//  arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
//arr should be sorted
//take three pointers low=end,mid = len/2 and high=end
//

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

//Iterative approach ****************************************************88
// function binarySearch(arr, x) {
//   let len = arr.length;
//   let low = 0;
//   let mid;
//   let high = len - 1;

//   while (low <= high) {
//     mid = Math.floor((high + low) / 2);

//     if (arr[mid] == x) {
//       return mid;
//     }

//     if (arr[mid] > x) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(arr, 56));

//recursive approach **********************************************************

function binarySearch(arr, x, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (x == arr[mid]) {
    return mid;
  }

  if (x < arr[mid]) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, end);
  }
}

console.log(binarySearch(arr, 56, 0, arr.length - 1));
