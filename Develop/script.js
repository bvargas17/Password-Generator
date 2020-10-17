// Get user info from prompts
let length = prompt ("How many characters do you need?");
let lowerCase = confirm ("Would you like lower case letters?");
let upperCase = confirm ("Would you like upper case letters?");
let numbers = confirm ("Would you like numbers?");
let specialCharacters = confirm("Would you like special characters?");







// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
