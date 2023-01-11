// JS types
// String
const immutableSecretSauce = "saucePassword";
let changeableText = "flexible text";
// Boolean
var haveYouEatenToday = true;
// Numbers
// Floats
let ps5Price = 399.99;
// Int
let carsOwned = 3;
// JS object
const pokemon = {
  name: "Squirtle",
  health: 250,
  skills: {
    waterBlast: {
      cost: 50,
      damage: 100,
    },
    confuse: {
      cost: 20,
      damage: 0,
    },
  },
};

// Lists
// lists are able to hold lists of the above variables.
const listOfWords = ["grandma", "grandpa", "father", "mother"];
const listOfNumbers = [2, 4, 6, 8, 10];
const listOfObjects = [
  {
    name: "squirtle",
    type: "water",
  },
  {
    name: "pikachu",
    type: "electric",
  },
  {
    name: "Bulbasaur",
    type: "grass",
  },
];

// How to add an element to HTML using Javascript
//
// Target element on HTML page as containing element
const appendDiv = document.getElementById("append");

// Create P element from scratch
const p = document.createElement("p");
// Customize p element
p.innerHTML = "No types available";

// Append
appendDiv.append(p);
