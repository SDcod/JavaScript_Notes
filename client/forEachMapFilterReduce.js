//important array methods;
//forEach;
//map;
//filter;
//reduce;

// const numbers = [4, 5, 7, 3, 4, 6, 9];

//foreach.................................>

// numbers.forEach((num) => console.log(num * 2));

//map.........................................>

// const squares = numbers.map((num) => {
//   return num * num;
// });
// console.log(squares);

//filter........................................>

//callback function should always return boolean values;

// const even = numbers.filter((num) => {
//   return num % 2 == 0; //return num only if it is divisible by 2
// });
// console.log(even);

//reduce........................................>

// const total = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(total);

// const userCart = [
//   {
//     itemName: "redmi 10",
//     itemPrice: 12000,
//   },
//   {
//     itemName: "redmi 12",
//     itemPrice: 20000,
//   },
//   {
//     itemName: "redmi 13",
//     itemPrice: 24000,
//   },
// ];

// const totalCartPrice = userCart.reduce((accum, current) => {
//   return accum + current.itemPrice;
// }, 0);

// console.log(totalCartPrice);
