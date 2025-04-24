let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

//OUTPUT
// arr1 = [1, 2, 3, 4];
// arr2 = [5, 6, 7, 8];

function merge(arr1, arr2) {
  let i;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      [arr1[i], arr2[0]] = [arr2[0], arr1[i]];

      let first = arr2[0];
      let j = 1;

      //sort the second array
      while (j < arr2.length && arr2[j] < first) {
        arr2[j - 1] = arr2[j];
        j++;
      }
      arr2[j - 1] = first;
    }
  }

  return [...[arr1], ...[arr2]];
}

merge(arr1, arr2);

console.log(arr1);
console.log(arr2);

//Using inbuilt methods -------------------------------------------------------------------
// let joined = arr1.concat(arr2).sort((a, b) => a - b);
// arr1 = joined.slice(0, arr1.length);
// arr2 = joined.slice(arr1.length);
// console.log(arr1);
// console.log(arr2);
