// conditional statements
// if
let number = 25;

if (number > 23) {
  console.log("You are greater than 23");
}

// if / else if / else
if (number > 25) {
  console.log("You are greater than 23");
} else if (number < 25) {
  console.log("You are less than 25");
} else {
  console.log("You're equal to 25")
}

// switch
let day = "Tuesday";
switch (day) {
  case "Monday": //if it is equal to this
  console.log("It's the start of the week!");
  break
case "Friday":
  console.log("It's the end of the work week.")
  break
default:
  console.log("It's a regular day")
}

// loops
// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop count: ", i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log("While Loop count: ", count);
  count++;
}

// do-while loop 
let j = 1;
do {
  console.log("Do-while count: ", j);
  j++;
} while (j <= 5);

let input = "";
do {
  input = prompt("Please enter your name: ");
} while ((input = ""));