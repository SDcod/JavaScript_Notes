//edge cases - length of s1 and s2 is not same , lengths are greater than or equal to one
//iterate over first string, store frequency of each character in a map.
//iterate over other string and for seen character decrement freq by one.
//check if in map any character exist with freqency not equal to zero. if exist return false else true

let s1 = "restful";
let s2 = "fluster";
function solution(s1, s2) {
  if (s1.length !== s2.length || (s1.length && s2.length) <= 1) {
    return false;
  }

  let freq = new Map();

  //first loop iteration to set frequency
  for (let c of s1) {
    freq.set(c, (freq.get(c) || 0) + 1);
  }

  //match frequency with other string.
  for (let c of s2) {
    freq.set(c, (freq.get(c) || 0) - 1);
  }

  let mapIterator = freq.values();

  for (let val of mapIterator) {
    if (val !== 0) return false;
  }

  return true;
}

console.log(solution(s1, s2));
