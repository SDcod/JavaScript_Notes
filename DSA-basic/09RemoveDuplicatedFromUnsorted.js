//To remove duplicated form an unsorted array.
let arr = [4, 3, 2, 4, 1, 3, 2, 1];

//using set

// function rmDuplicates(a) {
//   let uniqueSet = new Set(a);

//   return Array.from(uniqueSet); //Array.from() converts any object with length property to array.
// }
// console.log(rmDuplicates(arr));

//Using hashmap**********************************************************8
const rmDupHash = (a) => {
  let hashMap = {}; //declare a empty hashMap/Object
  let result = [];

  for (let num of a) {
    if (!hashMap[num]) {
      result.push(num);
      hashMap[num] = true;
    }
  }
  return result;
};
console.log(rmDupHash(arr));
