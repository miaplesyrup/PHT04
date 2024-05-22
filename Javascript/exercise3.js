// let name = prompt("What is your name? ");
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// greet(name);
greet("alice");



// Function Scope
let globalVar = "I am a global variable";

function localVar() {
  let localVar = "I am local";
  // console.log(globalVar);
  console.log(localVar);
}

localVar();
console.log(globalVar);



