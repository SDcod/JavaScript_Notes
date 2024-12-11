//to sort the array by parity means put all even numbers before odds keeping the order in place.

var sortArrayByParity = function (nums) {
  let sortedArr = [];

  //push evens
  for (let num of nums) {
    if (num % 2 == 0) {
      sortedArr.push(num);
    }
  }

  //push odds
  for (let num of nums) {
    if (num % 2 !== 0) {
      sortedArr.push(num);
    }
  }

  return sortedArr;
};
