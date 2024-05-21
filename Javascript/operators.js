// console.log("connected")
// JS Operators - symbols or keywords to perform operations
// JS Expressions

// Arithmetic Operators and Expressions
let a = 10;
let b = 5;

// Addition
// a = a + b
// console.log(a);

// compound assignment operator
a += b; // a = a + b
console.log(a);

// Subtraction: a = a - b
a -= b;
console.log(a);

// Multiplication: a = a * b
a *= b;
console.log(a);

// Division: a = a / b
a /= b;
console.log(a);

// Modulus: a = a % b
a %= b; // a = 10 / b = 5 => 0
console.log(a);

// concatenation
console.log("Hello" + " " + "World" + " " + a + " " + b);

// Comparison Operators
let x = 10;
let y = 5;

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x == y); // equal to
console.log(x != y); // not equal to

// Type coercion
console.log(50 == "50"); //true, loose equality
console.log(50 === "50"); //true, strict equality

console.log(x === y); // strict equal to
console.log(x !== y); // strict not equal to

// Logical Operators
let sunny = true;
let warm = false;

// AND - &&
console.log("Sunny AND warm:", sunny && warm); // false

// OR - ||
console.log("Sunny OR warm:", sunny || warm); // true

// NOT = !
console.log("NOT sunny:", !sunny); // false

// Unary operators (++, --)
let num = 1;
num++ //+1 to num
console.log(num);
num--; // -1 num
console.log(num);

// Ternary operator - (condition ? result : else)
let activeStatus = false;
let member = activeStatus ? "Registered" :  "Not Registered";
console.log(member);

// typeof operator = typeof()
console.log(typeof activeStatus);
console.log(typeof member);