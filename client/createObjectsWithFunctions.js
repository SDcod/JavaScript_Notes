//objects using functions

// const user = {
//   fname: "Satish K",
//   address: "xyz",
//   age: 31,
//   email: " adsfajkld@adsfhl.com",
//   about: function () {
//     return `My name is ${this.fname} and age is ${this.age}`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

const userMethods = {
  about: function () {
    return `My name is ${this.fname} and age is ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const createUser = function (fname, address, age, email) {
  const user = {};
  user.fname = fname;
  user.address = address;
  user.age = age;
  user.email = email;
  user.about = userMethods.about; //using reference wouldn't always allocate memory.
  user.is18 = userMethods.is18;
  return user;
};

const user1 = createUser("harsh", "aljdfhasdf", 9, "adfajkdh@adjk.com");

console.log(user1.is18());
