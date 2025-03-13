// // Example Usage
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [3, 2, 2, 4, 5, 6];
// console.log(intersection(arr1, arr2)); // Output: [3,2,2,4]

//iterate over first array and maintain a frequency map
//iterate over sec arr and chek if the element exists in freq map, if yes reduce count by one and add it to res arr,
//if no then simply skip it.

const sol = (arr1, arr2) => {
  let freq = {};
  let res = [];

  for (let num of arr1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (freq[num] > 0) {
      res.push(num);
      freq[num]--;
    }
  }

  return res;
};

console.log(sol(arr1, arr2));
