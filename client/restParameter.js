//rest paramater

const myfunc = (...arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  console.log(total);
};
myfunc(1, 2, 4);
