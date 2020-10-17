// Get user info from prompts
let desiredLength = prompt ("How many characters do you need?");
let desiredLowerCase = confirm ("Would you like lower case letters?");
let desiredUpperCase = confirm ("Would you like upper case letters?");
let desiredNumbers = confirm ("Would you like numbers?");
let desiredSpecialCharacters = confirm("Would you like special characters?");

// Create arrays
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9","0"];
let specialCharacters = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


console.log(specialCharacters)






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
