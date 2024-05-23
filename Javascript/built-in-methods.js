// Strings
// length
const sampleString = "Welcome";
const strLength = sampleString.length;
console.log(strLength);

// .split
const message = "Hello, OneCoders!";
const words = message.split(", ");
console.log(words);

// .includes
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("mango");
console.log(containsWord);

// Math
// max
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

// min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// floor
const roundedFloor = Math.floor(3.9);
console.log(roundedFloor);

// ceil
const roundedCeil = Math.ceil(3.2);
console.log(roundedCeil);

// round
const roundedValue = Math.round(3.7);
console.log(roundedValue);

// random - 0 (inclusive) and 1 (exclusive)
const randomValue = Math.random();
console.log(randomValue);

// get random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandomInt(1, 10);
console.log(randomInt);

// Number.toFixed()
const fixedNumber = (3.14453872698).toFixed(2);
console.log(fixedNumber);

// Date()
const currentDate = new Date();
console.log(currentDate);