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

//Setting 
const passLengthRange = document.querySelector("#passLengthRange")
const passLengthNumber = document.querySelector("#passLengthNumber")
const lowercaseIncluded = document.querySelector("#lowercase-yes")
const uppercaseIncluded = document.querySelector("#uppercase-yes")
const numbersIncluded = document.querySelector("#numbers-yes")
const specialCharactersIncluded = document.querySelector("#special-yes")
const passForm = document.querySelector("#passwordGeneratorInput")

//Variables from character codes to use in password
const lowercaseChar = arrayCharCodes(97, 122)
const uppercaseChar = arrayCharCodes(65, 90)
const numberChar = arrayCharCodes(48, 57)
const specialChar = arrayCharCodes(33, 47).concat(
  arrayCharCodes(58, 64)
).concat(
  arrayCharCodes(91, 96)
).concat(
  arrayCharCodes(123, 126)
)

passLengthNumber.addEventListener("input", syncPassLength)
passLengthRange.addEventListener("input", syncPassLength)

passForm.addEventListener('submit', e=> {
  e.preventDefault()
  const passwordLength = passLengthNumber.value
  const yesLowercase = lowercaseIncluded.checked
  const yesUppercase = uppercaseIncluded.checked
  const yesNumbers = numbersIncluded.checked
  const yesSpecialChar = specialCharactersIncluded.checked
  const password = createPassword(passwordLength, yesLowercase, yesUppercase, yesNumbers, yesSpecialChar)
})

function checkSelection(){
  
}

function createPassword(passwordLength, yesLowercase, yesUppercase, yesNumbers, yesSpecialChar) {
  let characters = ""
  if (yesLowercase) characters = characters.concat(lowercaseChar)
  if (yesUppercase) characters = characters.concat(uppercaseChar)
  if (yesNumbers) characters = characters.concat(numberChar)
  if (yesSpecialChar) characters = characters.concat(specialChar)

  for (let i = 0; i < passwordLength,)
}

function arrayCharCodes(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncPassLength(e) {
  const value=e.target.value
  passLengthRange.value = value
  passLengthNumber.value = value
}

/*// Get references to the #generate element
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
