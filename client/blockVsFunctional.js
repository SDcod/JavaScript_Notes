//block scope vs function scope;

//let and const are block scope;
//var is function scope;

var scopeTest = "inScope1";

function func1() {
  console.log("variable is currently", scopeTest);
}
function func2() {
  let scopeTest = "inScope2";
  console.log("variable is currently", scopeTest);
}
function func3() {
  const scopeTest = "inScope3";
  console.log("variable is currently", scopeTest);
}

func1();
func2();
func3();
