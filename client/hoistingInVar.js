//hoisting in var
console.log("<<<<<- ONLY IN CASE OF VAR ->>>>>");

console.log("value of fname in GEC", fname);
console.log("value of myFunc in GEC", myFunc);

myFunc = function () {
  console.log("I'm myfunc");
};
fname = "abc";

console.log(
  "value of fname after assigning but before declaring; this is due to hoisting VAR : -",
  fname
);
console.log(
  "value of fname after assigning but before declaring; this is due to hoisting VAR : -",
  myFunc
);
myFunc();

var fname;
var myFunc;
