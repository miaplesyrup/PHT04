console.log("Hello");

// Functions (reusable blocks of code)
// 1. function declarations (function is a keyword + variable)
function greet() {
  console.log("Hello, welcome to functions!");
};
greet();

// take not of parameter inside the ()
function squareDeclarations(num) { 
  return num * num
}
// 6 is an argument
console.log("Square for Function Declaration", squareDeclarations(6));

// function functionName(parameter) {
  //   return statement; code goes here
// }
// function call (invocation) functionName(argument)

// 2. Function expression
const squareExpression = function(num) {
  return num * num
}

console.log("Square for Function Expression", squareExpression(5));

// Function Hoisting - only works for function declaration
sayHello();

function sayHello() {
  console.log("Hello function hoisting")
}