// -Check if One String is a Rotation of Another (e.g., "waterbottle" and "erbottlewat").

//two methods by checking character by character

//left rotation

// tawerbottle
// tawelttobre
// erbottlewat

// function reverse(strArr, start, end) {
//   while (start < end) {
//     [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
//     start++;
//     end--;
//   }

//   return strArr.join("");
// }

// //rotate character by character and check if target is found
// function sol(s1, s2) {
//   let rotations = 1;

//   while (rotations < s1.length) {
//     let tempArr = s1.split("");
//     reverse(tempArr, 0, rotations - 1);
//     reverse(tempArr, rotations, tempArr.length - 1);
//     reverse(tempArr, 0, tempArr.length - 1);

//     let currentRotation = tempArr.join("");
//     console.log(currentRotation);
//     if (currentRotation == s2) {
//       return true;
//     }
//     rotations++;
//   }

//   return false;
// }

// console.log(sol("waterbottle", "erbottlewat"));

//Easiest solution, we know that if we combine two roated strings, there exist a substring which will be equal to the expected one.

let s1 = "waterbottle";
let s2 = "erbottlewat";

let conc = s1 + s1;

conc.includes(s1) ? console.log(true) : console.log(false);
