// Grab inputs from HTML
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submit = document.getElementById("submit");
const valMessage = document.getElementById("validationMessage");

// Initialize emtpy error array
let errorArray = [];

// Set event handler
submit.onclick = function () {
  // Validate form and store result
  const errorOrValid = validateForm();

  // if error valid is not true
  if (errorOrValid !== true) {
    // Print errors to front
    valMessage.innerHTML = errorArray;
    // return false to onclick to disallow effect of submit
    return false;
  }
};

// Validates all the inputs to determine if valid. Returns either true if valid or an error array if not
function validateForm() {
  // empty error array
  errorArray = [];
  // If the username value is less than length of 5 characters
  if (usernameInput.value.length <= 5) {
    //Add to error array
    errorArray.push("Username is too short");
  }
  // If password is less than 5 characters
  if (passwordInput.value.length <= 5) {
    errorArray.push("Password is too short");
  }
  // If email not gmail
  if (!emailInput.value.includes("@gmail.com")) {
    errorArray.push("Must be a Google email");
  }

  //   Determine which output to return
  //   If error array is not empty
  if (errorArray.length > 0) {
    // Return the array
    return errorArray;

    // else return true for all valid
  } else {
    return true;
  }
}
