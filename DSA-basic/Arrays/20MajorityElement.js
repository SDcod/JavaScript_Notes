// -Find the Majority Element in an array (appears more than n/2 times).//the same solution can also be used for n/3 elements and so on.
//time = O(n)
//space = O(n)

let arr = [1, 1, 1, 1, 2, 2, 2, 1, 3];

function MajorityElement(arr) {
  let map = {};

  for (let num of arr) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
    if (map[num] >= arr.length / 2) {
      return num;
    }
    // map[num] = (map[num] || 0) + 1;
  }

  return -1;
}

console.log(MajorityElement(arr));

//More optimized Boyer-Moore Algorithm *********************************************O(n), O(1)
// function boyerMooreMajority(arr) {
//   let candidate = null;
//   let count = 0;

//   // Step 1: Find the candidate
//   for (let num of arr) {
//     if (count === 0) {
//       candidate = num; // Update the candidate
//     }
//     count += num === candidate ? 1 : -1; // Adjust the count
//   }

//   // Step 2: Verify the candidate
//   count = 0;
//   for (let num of arr) {
//     if (num === candidate) {
//       count++;
//     }
//   }

//   return count > arr.length / 2 ? candidate : -1;
// }

// // Example
// let arr = [1, 2, 1, 3, 1, 1, 2, 2, 2, 2];
// console.log(boyerMooreMajority(arr)); // Output: 2
