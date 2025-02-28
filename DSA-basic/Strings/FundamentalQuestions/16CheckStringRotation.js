// -Check if One String is a Rotation of Another (e.g., "waterbottle" and "erbottlewat").

//left roate the character one by one after every iteration compare the current rotation with roated argument string.

// function checkRoation(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   if (str1 == str2) return true;

//   let len = str1.length;
//   let i = 1;

//   while (i < len) {
//     let temp = str1.split("");
//     //reverse the temp array from 0 to number of rotations;//water
//     reverseStr(temp, 0, i - 1);
//     //reverse the remaining array;//wreta
//     reverseStr(temp, i, len - 1);
//     //reverse entire array;//aterw
//     reverseStr(temp, 0, len - 1);

//     console.log(temp.join(""));
//     if (temp.join("") == str2) return true;

//     i++;
//   }

//   return false;
// }

// function reverseStr(strArr, start, end) {
//   while (start < end) {
//     [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
//     start++;
//     end--;
//   }
// }

// console.log(checkRoation("waterbottle", "ewaterbottl"));

//Easiest method to check ********************************************************************
// If str2 is a rotation of str1, then str2 must be a substring of str1 + str1.
let s1 = "waterbottle";
let s2 = "ewaterbottl";

function checkrotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(checkrotation(s1, s2));
