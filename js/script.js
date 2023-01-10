// Displays alert
// alert("JS has been connected!");

// Javascript method of adding a click event to a button
// grab by ID
handlerButton = document.getElementById("eventHandlerButton");
// add event listener
handlerButton.addEventListener("click", () => changeCSS(handlerButton));

// Takes element and changes style attribute
function changeCSS(element) {
  element.setAttribute("style", "background-color: blue; color: white;");
}

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

function sendConsoleMessage(message) {
  console.log(message);
}

// Grabs currentDate div and sets to current date
function setDate() {
  // Grab the span tag with id of current date
  dateDiv = document.getElementById("currentDate");

  // Set the inner text to be new date value
  dateDiv.innerText = new Date();
}

// Key press handler
function handleKeyDown(event) {
  console.log("key downed:", event.key);
}

function handleInputChange(element) {
  console.log("change in input detected:", element.value);
}
