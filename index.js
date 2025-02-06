let testString = "this is me testing a string variable";
console.log(testString);
const interestRate = 1;

console.log(interestRate);

let firstName, lastName;
firstName = "Alexander";
lastName = "Maat";

console.log("My name is " + firstName + " " + lastName);

// variable names
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen
// should be camel notation

forLoopPractice(5);

function forLoopPractice(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

//OBJECT
let Person = {
  name: "Alex",
  age: 26,
  printName: function () {
    console.log(this.name + " " + this.age);
  },
};

console.log(Person);
console.log(Person.name);

Person.name = "Alexander";
//dot notation
console.log(Person.name);

Person["name"] = "Alexander Maat";
//bracket notation
console.log(Person.name);
// curly braces means object literal

//ARRAYS - square brackets
let selectedColors = ["red", "blue"];

console.log(selectedColors);
console.log(selectedColors[1]);
console.log((selectedColors[2] = 10));
console.log(selectedColors);

console.log(selectedColors.length);

function helloName(name) {
  console.log("Hello " + name + ". ");
}
helloName("Alexander");

function calculateSquare(side) {
  return side * side;
}

// calculateSquare(4);
let squareOfTwo = calculateSquare(2);

console.log(calculateSquare(4));
console.log(squareOfTwo);
