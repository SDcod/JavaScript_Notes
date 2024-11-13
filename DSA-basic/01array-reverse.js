let nums = [1, 2, 3, 4, 5, 6, 7]; //output [6,5,1,2,3,4]

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
};

console.log(reverse(nums, 0, nums.length - 1));

//using for loop
let originalArr = [1, 2, 3, 4, 5];

function revArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let oppositeInd = arr.length - 1 - i;

    let temp = arr[i];
    arr[i] = arr[oppositeInd];
    arr[oppositeInd] = temp;
  }

  return originalArr;
}

console.log(revArr(originalArr));
