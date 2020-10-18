// Get user info from prompts
let desiredLowerCase = confirm ("Would you like lower case letters?");
let desiredUpperCase = confirm ("Would you like upper case letters?");
let desiredNumbers = confirm ("Would you like numbers?");
let desiredSpecialCharacters = confirm("Would you like special characters?");
let desiredLength = prompt ("How many characters do you need between 8 and 128?");

// howLong variable turns the desiredLength string into a number 
let howLong = desiredLength * 1;
 //console.log(howLong);

// Create arrays
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let specialCharacters = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
let collector = [];
// match response with array (if Statements)

while (collector.length < howLong) {

  if (desiredLowerCase === true && collector.length < howLong) {
    let resultL = random(lowerCase); 
      collector.push(resultL);
      console.log("1");
      
  }
  
  if (desiredUpperCase === true && collector.length < howLong) {
    let resultU = random(upperCase);
    collector.push(resultU);
    console.log("2");
  }
  
  if (desiredNumbers === true && collector.length < howLong) {
    let resultN = random(numbers);
    collector.push(resultN);
    console.log("3");
  }
  
  if (desiredSpecialCharacters === true && collector.length < howLong) {
    let resultS = random(specialCharacters);
    collector.push(resultS);
    console.log("4");
  }

}

console.log(collector);

//if (desiredLength>=8 && desiredLength<= 128) {
  //  console.log("hi")
//}



//functions

// random function to be able to randomize the choice from the array and get return
function random (arr){
  let i = arr[Math.floor(Math.random() * arr.length)];
  //let indexValue = arr.findIndex(arr);
 // console.log(indexValue);
  //console.log(arr);
  //arr.splice(indexValue, 1);
  //console.log(arr);

  return i;

}



let string = "";

do {

  string = string + random(collector);

} while (collector.length > 0);






// Assignment Code
//let generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
  let string = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = string;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
