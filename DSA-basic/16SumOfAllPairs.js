// 2 Sum - Find All Pairs With Given Sum

//using hash map

let arr = [1, 4, 5, 10, 2, 3];
let k = 6;

function getPairs(arr, goal) {
  let hash = {};
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let target = goal - arr[i];

    if (hash[target] !== undefined && hash[target] !== i) {
      pairs.push(...[[target, arr[i]]]);
    }

    hash[arr[i]] = i;
  }

  return pairs;
}

console.log(getPairs(arr, k));
