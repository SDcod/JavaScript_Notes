// 📌 3. Inheritance (Code Reusability)
// Inheritance allows one class to inherit properties and methods from another class. This helps avoid duplication and promotes code reuse.

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }

  getColor() {
    console.log(`${this.name} has color ${this.color}`);
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  constructor(name, breed, color) {
    super(name, color); //invoke parents class constructor
    this.breed = breed;
  }
  makeSound() {
    //mehtod overriding (polymorphism)
    console.log(`${this.name} is a ${this.breed} and it barks!`);
  }
}

const myDog = new Dog("Buddy", "german shepherd");
myDog.makeSound();
const hisDog = new Dog("Bruno", "Labarador", "brown");
hisDog.makeSound();
hisDog.getColor();

// 🔥 Important Keywords & Concepts:
// extends → Used to inherit from another class.
// super() → Calls the parent class constructor.
