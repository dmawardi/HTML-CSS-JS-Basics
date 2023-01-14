let word = "Treasure-AARH-Tweasure";
let listOfNames = ["Cat", "Matt", "Artem"];

// Length
console.log("word length: ", word.length);
console.log("listOfNames length: ", listOfNames.length);

// Split
const splitWord = word.split("e");
console.log("word.split(): ", splitWord);

// slice
const sliceWord = word.slice(2, 8);
console.log("sliceWord: ", sliceWord);

// Uppercase and lowercase
const upper = word.toUpperCase();
console.log("upper: ", upper);
const lower = word.toLowerCase();
console.log("lower: ", lower);

// Random
const randomDiv = document.getElementById("randomNumber");

// How to use?
// Random generates random from 0 to 1. So simply multiply it by the number you want as maximum
// Then, you can remove the decimals using Math.floor, which will round down
let randomNumber = Math.floor(Math.random() * 100);
console.log("randomNumber: ", randomNumber);

// Place in HTML div
randomDiv.innerText = randomNumber;
