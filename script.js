// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function 
function generatePassword() {
  
  // Get user info from prompts
  let desiredLowerCase = confirm("Would you like lower case letters?");
  let desiredUpperCase = confirm("Would you like upper case letters?");
  let desiredNumbers = confirm("Would you like numbers?");
  let desiredSpecialCharacters = confirm("Would you like special characters?");
  let desiredLength = prompt("How many characters do you need between 8 and 128?");
  
  // converts the desirdLength string into a number  
  let howLong = desiredLength * 1;
  
  //makes sure the number chosen is between 8 and 128
    if (desiredLength < 8 || desiredLength > 128 ) {
      alert ("Lenght needs to be within 8 and 128 characters.");
      return;
    };
  // makes sure the value entered is actually a number  
    if ( Number.isNaN(howLong) === true ){
      alert ("Needs to be a number.");
      return;
    };
 

  // Create arrays
  let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numbers = ["0","1","2","3","4","5","6","7","8","9"];
  let specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  let collector = [];

  //(if statements)
  while (collector.length < howLong) {
    if (desiredLowerCase === true && collector.length < howLong) {
      let resultL = random(lowerCase);
      collector.push(resultL);
      
    }

    if (desiredUpperCase === true && collector.length < howLong) {
      let resultU = random(upperCase);
      collector.push(resultU);
      
    }

    if (desiredNumbers === true && collector.length < howLong) {
      let resultN = random(numbers);
      collector.push(resultN);
      
    }

    if (desiredSpecialCharacters === true && collector.length < howLong) {
      let resultS = random(specialCharacters);
      collector.push(resultS);
      
    }
  }

  //console.log(collector);
  let password = collector.join("");
  //console.log(password);
  return password;
}
// random function
function random(arr) {
  let i = arr[Math.floor(Math.random() * arr.length)];
  return i;
}


// Write password to the #password input
function writePassword() {
let password = generatePassword();
let passwordText = document.querySelector("#password");

passwordText.value = password;

}

