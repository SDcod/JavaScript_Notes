// 📌 6. Prototype & Prototypal Inheritance
// JavaScript uses prototypes instead of classical class-based inheritance.

function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.getName = function () {
  return `Vehicle: ${this.name}`;
};

const car = new Vehicle("Honda");
console.log(car.getName()); // Vehicle: Honda

// 🔥 Important Keywords & Concepts:
// prototype → Allows adding methods to objects
// Prototype chain → JavaScript objects inherit from their prototypes
