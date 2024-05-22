// object literals
const person = {
  // key-value
  firstName: "John",
  lastName: "Doe",
  age: 50,
  hobbies: ["reading", "coding", "sleeping"],

  // add a method
  greet: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you`)
  },
};

console.log(person);

// accessing object properties
console.log(person.firstName);
console.log(person["lastName"]);

// access the object method
person.greet();

// add new properties
person.nationality = "American";
console.log(person.nationality);

// add new methods
person.introduce = function() {
  console.log(`I am ${this.firstName}. I am ${this.age} years old`)
};
person.introduce();

// nesting objects
const address = {
  street: "123 Main St",
  city: "New York",
  country: "USA",
};

person.address = address;
console.log(person.address.city);

// destructuring
const {firstName, lastName, age} = person;
console.log(firstName);
console.log(person.hobbies);


