//find major element in an array

let arr = [1, 2, 3, 3, 7, 7, 7, 4, 5, 5, 7, 7, 7, 1, 1, 1, 1, 2];

let candidate = null;
let count = 0;

// Step 1: Find the candidate that is in majority
for (let num of arr) {
  if (count === 0) {
    candidate = num; // Update the candidate
  }
  count += num === candidate ? 1 : -1; // Adjust the count
}

console.log(candidate);
