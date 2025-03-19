//sort the given array by the number of elements present - lowest count first.
let arr = [1, 3, 4, 3, 1, 1, 2, 7, 4, 4, 4];

//store number of occurences in hashmap

function sol(arr) {
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  arr.sort((a, b) => {
    if (freq[a] !== freq[b]) {
      return freq[a] - freq[b];
    } else {
      return a - b;
    }
  });

  return arr;
}

console.log(sol(arr));
