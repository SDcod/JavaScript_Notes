//call, apply, bind;

const p1 = {
  fname: "ram",
  lname: "xyz",
  fullName: function (age, weight) {
    console.log(this.fname + " " + this.lname + " " + age + " " + weight);
  },
};
const p2 = {
  fname: "shyam",
  lname: "qwer",
};
//call=> to borrow methods
p1.fullName.call(p1, 18, 50);
p1.fullName.call(p2, 21, 60);

//apply=> also uses call method but function argument should be passed in array;
p1.fullName.apply(p1, [18, 50]);
p1.fullName.apply(p2, [21, 60]);

//bind=> returns function
const bindFunc1 = p1.fullName.bind(p1, 21, 56);
const bindFunc2 = p1.fullName.bind(p2, 21, 56);
bindFunc1();
bindFunc2();
