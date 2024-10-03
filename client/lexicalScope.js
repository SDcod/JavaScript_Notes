//global scope
const myVar = "global";
const test = () => {
  //lexical scope of test
  const myVar = "outside";
  const intest1 = () => {
    //lexical scope of intest1
    var myVar = "inside1";
    console.log("inside intest1:", myVar);
  };
  const intest2 = () => {
    //lexical scope of intest2
    var myVar = "inside2";
    console.log("inside intest2:", myVar);
  };
  intest1();
  intest2();
};

test();
