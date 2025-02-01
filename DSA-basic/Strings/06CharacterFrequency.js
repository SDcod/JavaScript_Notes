// Given a string, count the frequency of each character and return the results.

let str = "JavaScript";

function getFreq(str) {
  if (str.length <= 0) return -1;

  let freq = {};

  for (let c of str.toLowerCase()) {
    freq[c] = (freq[c] || 0) + 1;
  }

  return freq;
}

console.log(getFreq(str));
