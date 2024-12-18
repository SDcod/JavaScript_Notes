//***********************Using set */
// function union(arr1, arr2) {
//   // Create a new set with all elements from arr1 and arr2
//   let unionSet = new Set([...arr1, ...arr2]);

//   // Convert the set back to an array
//   return Array.from(unionSet);
// }

// // Example Usage
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// console.log(union(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

//************************Using HashMap **************** O(n+m)/

// function getUnionWithoutSet(arr1, arr2) {
//   if (arr1.length === 0) return arr2; //edge case
//   if (arr2.length === 0) return arr1; //edge case
//   let hashMap = {};
//   let result = [];

//   //Add all distint elements from 1st arr into hashMap O(n)
//   for (let num of arr1) {
//     if (!hashMap[num]) {
//       hashMap[num] = true;
//       result.push(num);
//     }
//   }

//   //Add all dinstinct element from 2nd arr into hashMap O(m)
//   for (let num of arr2) {
//     if (!hashMap[num]) {
//       hashMap[num] = true;
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(getUnionWithoutSet([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8]));

//*************************What if arrays are already sorted can we solve without O(n+m);
//may contain duplicates

// let a = [1, 2, 2, 3];
// let b = [2, 3, 3, 4, 4];
