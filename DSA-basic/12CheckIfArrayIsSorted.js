let a = [1, 1, 2, 3, 4, 5, 11, 45, 60]; //ascending order.

const checkAsc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(checkAsc(a));

//just reverse the condition for descending
