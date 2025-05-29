// 4. Polymorphism allows different classes to have different implementations of the same method.
//Method overriding
class Employee {
  constructor(name) {
    this.name = name;
  }

  getSalary() {
    return "Base salary is $50,000";
  }
}

class Manager extends Employee {
  getSalary() {
    return "Manager salary is $80,000";
  }
}

const emp = new Employee("Alice");
const manager = new Manager("Bob");

console.log(emp.getSalary()); // Base salary is $50,000
console.log(manager.getSalary()); // Manager salary is $80,000

// 🔥 Important Keywords & Concepts:
// Method Overriding → Child class provides a specific implementation of a method from the parent class
// Method Overloading → JavaScript doesn’t support native overloading but can be simulated

//Method Overloading
//we can simulate method overloading in JS by using below workarounds such as
//  1.Default parameters
//  2.arguments objects
//  3.rest operator [...args]

// 1.Default param
class Calculator {
  add(a, b = 0) {
    return a + b;
  }
}

let myCal = new Calculator();
console.log(myCal.add(6));
console.log(myCal.add(6, 3));

//2.arguments object
class Printer {
  print() {
    if (arguments.length === 1) {
      console.log(`Printing: ${arguments[0]}`);
    } else if (arguments.length === 2) {
      console.log(`Printing: ${arguments[0]} in ${arguments[1]} color`);
    } else {
      console.log("Invalid number of arguments");
    }
  }
}

const p = new Printer();
p.print("Document"); // Output: Printing: Document
p.print("Photo", "color"); // Output: Printing: Photo in color

//3. rest operator
class Logger {
  log(...args) {
    if (args.length === 1) {
      console.log(`Log message: ${args[0]}`);
    } else if (args.length === 2) {
      console.log(`Log message: ${args[0]}, Level: ${args[1]}`);
    } else {
      console.log("Invalid log format");
    }
  }
}

const logger = new Logger();
logger.log("Error Occurred"); // Output: Log message: Error Occurred
logger.log("User Logged In", "Info"); // Output: Log message: User Logged In, Level: Info
