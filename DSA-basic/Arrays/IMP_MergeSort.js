//merge sort

//function mergeSort - equally divide the array into two parts recursively until the size is equal to one.
//then apply the merge function.
//function merge - merge the subarray by comparing the elements between two sorted subarrays and then adding the smallest ones first to the result array.
//then adding the remaining elements.

const mergeSort = (arr) => {
  let len = arr.length;
  let mid = Math.floor(len / 2);

  //base condition
  if (len <= 1) {
    return arr;
  }

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return res.concat(...left.slice(i)).concat(...right.slice(j));
};

console.log(mergeSort([6, 2, 1, 3, 5, 6, 9, 10]));
