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

var passwordLength = function() {

  var passLength = window.prompt("How long is your password? (enter a number between 8 and 128)");
  if (passLength < 8 || passLength > 128) {
    window.alert("You choose an invalid password length! Please try again.");
    return passwordLength();
  }
}

var passwordCriteria = function () {

  var useUppCase = window.confirm("Will your password contain UPPERCASE letters?");
  var useLowCase = window.confirm("Will your password contain lowercase letters?");
  var useNum = window.confirm("Will your password contain numbers?");
  var useSpecial = window.confirm("Will your password contain special characters?");

}


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

// copied code

/*function generatePassword() {
  var length = 8,
      charset = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

var i = 0;
while(i<20)
{
$('#pwcontainer').html( $('#pwcontainer').html()+'<br>'+generatePassword() );
i++;
}*/
