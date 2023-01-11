// Function declarations
// Direct: Accepts two arguments to add together
function hereIsAFunctionThatAdds(num1, num2) {
  const sum = num1 + num2;
  console.log("The sum is: ", sum);

  return sum;
}
// Store in a variable
const anotherAddFunction = (num1, num2) => {
  return num1 + num2;
};

// Using functions within functions
//
function cookEggs() {
  crackOpenEggs();
  console.log("Eggs have been cooked!");
}

function crackOpenEggs() {
  console.log("Eggs have been cracked open. Crack!");
}

// Attaching to HTML element
// Grab div
const cookEggsDiv = document.getElementById("cookEggs");
console.log("cookEggsDiv: ", cookEggsDiv);
// add on click event handler to div
cookEggsDiv.onclick = cookEggs;

// Helpful built in functions
//

// Finding the index of a character in a string
const email = "fool@hello.com";
// Returns the index of the found character
const foundCharacter = email.indexOf("@");
console.log("foundCharacter: ", foundCharacter);

// Determines if a variable is a number
const notANumber = "I'm not a number";
const numberTest = isNaN(notANumber);
console.log("is numberTest a number?: ", numberTest);

// Converts an integer in the form of a string to a number
const numberString = "944";
const numberForm = parseInt(numberString);
console.log("numberForm: ", numberForm);
// Why convert? To do math with it
console.log(numberForm + 3);
