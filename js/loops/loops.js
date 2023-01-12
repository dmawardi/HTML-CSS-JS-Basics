// Loops
// While
const whileDiv = document.getElementById("while");
let countdown = 5;

// While countdown is above 0
while (countdown > 0) {
  // Log to console
  console.log("countdown: ", countdown);

  //   Append to HTML
  whileDiv.innerHTML = whileDiv.innerHTML + "<p>" + countdown + "</p>";
  //   decrement countdown
  countdown = countdown - 1;
  //   countdown -= 1;
}

// For loop
//
const forDiv = document.getElementById("for");

// make an array for iterating through
const listOfFriends = ["Gatot", "Bagong", "Bego", "Cahya"];

// For loop to go through array above
for (let index = 0; index < listOfFriends.length; index++) {
  // Access element in list of friends array based off index
  const element = listOfFriends[index];

  //   Append to HTML
  forDiv.innerHTML = forDiv.innerHTML + element + ", ";
}

// For/in
// Used to iterate through objects
const forInDiv = document.getElementById("forIn");

const ranger = {
  health: 150,
  color: "red",
  morphTime: 3,
  special: "backflip-kick",
};

// for each key found in object
for (const key in ranger) {
  // Create p tag
  const p = document.createElement("p");
  // add details of key and value to p tag
  p.innerHTML = `${key}: ${ranger[key]}`;

  // add p to inner html of forIn div
  forInDiv.append(p);
}
