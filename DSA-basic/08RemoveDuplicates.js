let arr = [1, 1, 2, 3, 3, 5, 5, 6]; //[1,2,3,5,6,_,_]
let len = arr.length;

function removeDuplicates(arr, len) {
  let left = 0; //to keep track of unique Index;

  for (let right = 1; right < len; right++) {
    if (arr[right] !== arr[left]) {
      //if any number similar to the left index occurs then first increment the left and replace with the right one.
      left++;
      arr[left] = arr[right];
    }
    //if both elements are equal do nothing and simply let the loop increace the right value by default.
  }

  return left + 1;
}

let newLength = removeDuplicates(arr, len);
console.log(newLength);
console.log(arr.slice(0, newLength));
