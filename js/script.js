// Displays alert
// alert("JS has been connected!");

// Takes element that is clicked as argument and logs its data-button attribute
function clickMe(element) {
  console.log("clicking on: ", element.getAttribute("data-button"));
}

function changeText(element) {
  //   console.log("hovering! on: ", element);

  if (element.innerText == "Boke") {
    // change inner text
    element.innerText = "Click me";
  } else {
    // change innter text
    element.innerText = "Boke";
  }
}

// Grabs currentDate div and sets to current date
function setDate() {
  // Grab the span tag with id of current date
  dateDiv = document.getElementById("currentDate");

  // Set the inner text to be new date value
  dateDiv.innerText = new Date();
}
