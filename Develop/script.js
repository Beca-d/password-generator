// Generate a password
// Prompt that allows user to select character length between 8 and 128
// *user input dictates number of generated characters from Array
// * if less that 8 and more than 128 alert says picked invalid length and asks again
// User selects criteria
// *4 window prompts for lowercase, uppercase, special character, and number
// confirm selection with prompt
// use else if statement to run password generator with correct symbols (16) total 
// * figure out how to have array with toggle for some characters on or off
// ** perhaps using index ranges?
// show password in window alert 


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



console.log(Math)