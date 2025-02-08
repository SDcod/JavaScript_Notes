let arr = [7, 5, 3, 2, 5, 6];

const linearSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch(arr, 2));

let res = linearSearch(arr, 2);
res == -1
  ? console.log("element not found")
  : console.log("element found at index " + res);
