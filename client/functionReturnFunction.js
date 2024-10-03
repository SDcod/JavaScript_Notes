//function returning function

function mainFunc() {
  function childFunc() {
    console.log("this is child func");
  }
  return childFunc;
}

const parent = mainFunc();
parent();
