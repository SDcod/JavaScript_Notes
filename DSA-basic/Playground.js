//first non repeating char in string

let str = "abcdexabcyd"; //e

let map = new Map();

for (let char of str) {
  map.set(char, (map.get(char) || 0) + 1);
}

// console.log(map);

// for (let [key, value] of map) {
//   console.log(key + " " + value);
// }

for (let key of map.keys()) {
  if (map.get(key) == 1) {
    console.log(key);
    break;
  }
}
