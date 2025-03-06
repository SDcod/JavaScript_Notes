// 📌 1. Encapsulation (Data Hiding & Bundling)
// Encapsulation means restricting direct access to certain details of an object and only exposing what is necessary. It helps in data security and better maintainability.

class BankAccount {
  #balance; // Private property (not accessible outside the class)

  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  getBalance() {
    return `Account Balance: ${this.#balance}`;
  }
}

const myAccount = new BankAccount("John Doe", 1000);
console.log(myAccount.accountHolder); // ✅ Allowed
console.log(myAccount.getBalance()); // ✅ Allowed
// console.log(myAccount.#balance); // ❌ Error: Private property is not accessible

// 🔥 Important Keywords & Concepts:
// # → Defines private properties
// this → Refers to the current instance of the class
// Methods like getBalance() act as public interfaces to access private data
