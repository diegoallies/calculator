// VARIABLES

let firstName = "Jason";
let surname = "Wandrag";
const age = 27;

console.log(firstName, surname, age);

firstName = "John";

console.log(firstName);

console.log(age);

// DATA TYPES
// string = ""
// number = 23
// boolean = true / false
// undefined
// null
// object = {}
// array = []
// function = function() { }

// OBJECTS
const person = {
  firstName: "Jason",
  lastName: "Wandrag",
  age: 27,
  students: ["Diego", "Lilitha", "Emihle", "Zharne", "Bongani"],
};

console.log(person);

const car = {
  model: "C Class",
  brand: "Mercedes",
  color: "Silver",
  year: 2010,
};
let selection = "color";
console.log(car.model);
console.log(car[selection]);

// ARRAYS
const cars = [
  {
    model: "C Class",
    brand: "Mercedes",
    color: "Silver",
    year: 2010,
  },
  {
    model: "A Class",
    brand: "Mercedes",
    color: "White",
    year: 2017,
  },
  {
    model: "Civic",
    brand: "Honda",
    color: "Red",
    year: 2009,
  },
  {
    model: "Beetle",
    brand: "Volkswagen",
    color: "Cream",
    year: 1994,
  },
];
// cars[3] = "Yellow";
// cars = [];x`

console.log(cars);
console.log(cars[0].color);

// FUNCTIONS
function greet(name, surname) {
  return "Hello " + name + " " + surname;
}

greet("Jason", "Wandrag");
greet("Lilitha", "Ngele");

document.getElementById("greeting").innerHTML = greet("Lilitha", "Ngele");