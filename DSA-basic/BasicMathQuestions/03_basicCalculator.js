const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runCalculator() {
  const num1 = parseFloat(await askQuestion("Enter first number: "));
  const operator = await askQuestion("Enter operator (+, -, *, /): ");
  const num2 = parseFloat(await askQuestion("Enter second number: "));
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    console.log("❌ Invalid input. Please enter numeric values.");
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("❌ Error: Cannot divide by zero.");
          rl.close();
          return;
        } else {
          result = num1 / num2;
        }
        break;
      default:
        console.log("❌ Invalid operator.");
        rl.close();
        return;
    }

    console.log(`✅ Result: ${num1} ${operator} ${num2} = ${result}`);
  }

  rl.close();
}

runCalculator();
