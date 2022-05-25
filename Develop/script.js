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

// Sync Password Character Length Range Slider and Number Input Box
/*const range=document.querySelector("#passLengthRange");
const number=document.querySelector("#passLengthNumber")
range.addEventListener("change",(e)=>{
  number.value=e.target.value;
})
number.addEventListener("input",(e)=>{
  range.value=e.target.value;
})*/

const passLengthRange = document.getElementById('passLengthRange')
const passLengthNumber = document.getElementById('passLengthNumber')

passLengthNumber.addEventListener("input", syncPassLength)
passLengthRange.addEventListener("input", syncPassLength)

function syncPassLength(e) {
  const value=e.target.value
  passLengthRange.value = value
  passLengthNumber.value = value
}

//Variables from character codes to use in password

var lowercaseChar = arrayCharCodes(97, 122)
var uppercaseChar = arrayCharCodes(65, 90)
var numberChar = arrayCharCodes(48, 57)
var specialChar = arrayCharCodes(33, 47).concat(
  arrayCharCodes(58, 64)
).concat(
  arrayCharCodes(91, 96)
).concat(
  arrayCharCodes(123, 126)
)

/*const includeLowercase = 


function generatePassword()

var passwordForm = document.querySelector("passwordGeneratorInput")

passwordForm.addEventListener('submit', e=>) {
  e.preventDefault()
}*/

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
