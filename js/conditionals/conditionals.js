// If/Else statements
console.log("connected");
// Grab if/else div for printing result later
const ifElseDiv = document.getElementById("ifElseResult");
let ageOfUser = 12;

//  user age greater than or equal to 18
if (ageOfUser >= 18) {
  ifElseDiv.innerHTML = "Legal age reached";
} else if (ageOfUser >= 16) {
  ifElseDiv.innerHTML = "Maturity reached";

  // else, if less than that
} else {
  ifElseDiv.innerHTML = "Sorry! You don't meet requirements";
}

// Grab switch div for printing result later
const switchDiv = document.getElementById("switchResult");
// Reassign previous variable
const listOfGames = ["Mario Kart", "Pokemon", "Zelda", "Bomberman"];
let selectedGame = listOfGames[0];

// Do a switch statement based off value of age
switch (selectedGame) {
  case "Mario Kart":
    switchDiv.innerHTML = "Yahoo!";
    break;
  case "Pokemon":
    switchDiv.innerHTML = "Pika Pika!";
    break;
  case "Zelda":
    switchDiv.innerHTML = "...";
    break;
  default:
    break;
}
