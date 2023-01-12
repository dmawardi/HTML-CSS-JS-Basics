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
