let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}
console.log(getWage(baseSalary, overtime, rate));

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

let person1 = new Person("John", 30);
person1.printName();

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    // Complex engine starting logic hidden from the user
    console.log(`The ${this.make} ${this.model}'s engine is starting.`);
  }

  drive() {
    // Complex driving mechanics abstracted away
    console.log(`The ${this.make} ${this.model} is moving forward.`);
  }
}

// Using the abstracted Car class
const myCar = new Car("Toyota", "Corolla");
myCar.startEngine();
myCar.drive();

//Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  fetch() {
    console.log(`${this.name} fetches the ball`);
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

// Using the classes
const animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound.

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
dog.fetch(); // Output: Buddy fetches the ball.
