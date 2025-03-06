// 📌 2. Abstraction (Hiding Complexity)
// Abstraction means hiding implementation details and exposing only essential features.

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  startCar() {
    this.#startEngine(); // Internal method not exposed
    console.log(`${this.brand} is now running`);
  }

  #startEngine() {
    // Private method
    console.log("Engine started...");
  }
}

const myCar = new Car("Tesla");
myCar.startCar(); // ✅ Works
// myCar.#startEngine(); // ❌ Error: Cannot access private method
