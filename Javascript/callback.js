// Higher Order Functions
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}
// Callback functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
// Using the higher-order functions with callbacks
let sum = calculate(5, 3, add);
let difference = calculate(5, 3, subtract);
console.log("Addition: ", sum);
console.log("Subtraction: ", difference);