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
