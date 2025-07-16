//reverse every word in a sentence;

let para = "Hello there! how are you doing?";

let result = para
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");

console.log(result);

// let str = "Hello there! how are you doing?";
// let temp = str.split(" ");
// let res = "";
// for (let word of temp) {
//   res += word.split("").reverse().join("") + " ";
// }

// console.log(res);
