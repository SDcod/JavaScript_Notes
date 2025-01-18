// Maximum product of a triplet (subsequence of size 3) in array

function maxProductOfTriplet(arr) {
  if (arr.length < 3) {
    throw new Error("Array must have at least 3 elements");
  }

  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let num of arr) {
    // Update the three largest numbers
    if (num > max1) {
      [max1, max2, max3] = [num, max1, max2];
    } else if (num > max2) {
      [max2, max3] = [num, max2];
    } else if (num > max3) {
      max3 = num;
    }

    // Update the two smallest numbers
    if (num < min1) {
      [min1, min2] = [num, min1];
    } else if (num < min2) {
      min2 = num;
    }
  }

  // Calculate max product
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

// Example usage:
console.log(maxProductOfTriplet([10, 3, 5, 6, 20])); // Output: 1200
console.log(maxProductOfTriplet([-10, -20, 5, 6, 7])); // Output: 1400
