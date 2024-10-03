//getters and setters

class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  get fullName() {
    return `${this.fname} ${this.lname} `;
  }
  set fullName(fullname) {
    const [fname, lname] = fullname.split(" ");
    this.fname = fname;
    this.lname = lname;
  }
}

const person1 = new Person("harsh", "xyz", 30);
person1.fullName = "ram abc";
console.log(person1.fullName);
