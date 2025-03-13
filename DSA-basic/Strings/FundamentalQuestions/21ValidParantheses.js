const sol = (str) => {
  //create a corrosponding pair map of closing bracket
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let stack = [];

  for (let char of str) {
    if (Object.values(pairs).includes(char)) {
      // If it's an opening bracket, push it
      stack.push(char);
    } else if (pairs[char]) {
      // If it's a closing bracket, check for a valid pair
      if (stack.pop() !== pairs[char]) {
        return false; // Mismatched closing bracket
      }
    }
  }

  // Stack should be empty if all brackets are balanced
  return stack.length === 0;
};

console.log(sol("{[()]}{()}")); // true
console.log(sol("{[()]}{(}")); // false
console.log(sol("{[(])}")); // false
