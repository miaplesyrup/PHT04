//  variable scope
// global scope
let globalVar = "I am global";
console.log(globalVar);
// local scope
function localScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
localScope();
// console.log(localVar);