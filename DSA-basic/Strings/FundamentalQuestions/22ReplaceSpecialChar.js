function removeSpecialCharacters(str) {
  // Replace everything that is not A-Z or a-z with an empty string
  return str.replace(/[^a-zA-Z]/g, "");
}

// Example
let input = "He@llo! W0rld#2025*";
let cleaned = removeSpecialCharacters(input);

console.log("Original:", input);
console.log("Cleaned :", cleaned);
