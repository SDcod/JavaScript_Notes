let a = "123abc";
let num = Number([...a].filter((char) => char >= "0" && char <= "9").join(""));
console.log(num); // Output: 123
