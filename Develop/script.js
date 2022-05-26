//Setting 
const passLengthRange = document.querySelector("#passLengthRange")
const passLengthNumber = document.querySelector("#passLengthNumber")
const lowercaseIncluded = document.querySelector("#lowercase-yes")
const uppercaseIncluded = document.querySelector("#uppercase-yes")
const numbersIncluded = document.querySelector("#numbers-yes")
const specialCharactersIncluded = document.querySelector("#special-yes")
const generatePass = document.querySelector("#generate")
const passForm = document.querySelector("#passwordGeneratorInput")
const password = document.querySelector("#password")

const RandoCharFunc = {
  lower: getLowercase,
  upper: getUppercase,
  numbers: getNumber,
  symbol: getSpecialChar
};

generatePass.addEventListener('click', ()=> {
  const length = +passLengthRange.value;
  const lowerOn = lowercaseIncluded.checked;
  const upperOn = uppercaseIncluded.checked;
  const numberOn = numbersIncluded.checked;
  const specialOn = specialCharactersIncluded.checked;

  console.log(length, lowerOn, upperOn, numberOn, specialOn);
})

var getLowercase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
var getUppercase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
var getNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
var getSpecialChar = function() {
  var specialCharacters = '!@#$%^&*()_-+{}[]<>"=.;:?`~/\|,.';
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}




/*const lowercaseChar = arrayCharCodes(97, 122)
const uppercaseChar = arrayCharCodes(65, 90)
const numberChar = arrayCharCodes(48, 57)
const specialChar = arrayCharCodes(33, 47).concat(
  arrayCharCodes(58, 64)
).concat(
  arrayCharCodes(91, 96)
).concat(
  arrayCharCodes(123, 126)
)*/

passLengthNumber.addEventListener("input", syncPassLength)
passLengthRange.addEventListener("input", syncPassLength)

/*passForm.addEventListener('submit', e=> {
  e.preventDefault()
  const passwordLength = passLengthNumber.value
  const yesLowercase = lowercaseIncluded.checked
  const yesUppercase = uppercaseIncluded.checked
  const yesNumbers = numbersIncluded.checked
  const yesSpecialChar = specialCharactersIncluded.checked
  const newPassword = createPassword(passwordLength, yesLowercase, yesUppercase, yesNumbers, yesSpecialChar)
  password.innerText = newPassword
})

function checkSelection(){

}

function createPassword(passwordLength, yesLowercase, yesUppercase, yesNumbers, yesSpecialChar) {
  let characters = ""
  if (yesLowercase) characters = characters.concat(lowercaseChar)
  if (yesUppercase) characters = characters.concat(uppercaseChar)
  if (yesNumbers) characters = characters.concat(numberChar)
  if (yesSpecialChar) characters = characters.concat(specialChar)

  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = characters [Math.floor(Math.random() * characters.length)]
    passwordCharacters.push(character)
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayCharCodes(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}*/

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
