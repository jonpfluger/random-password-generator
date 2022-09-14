// Assignment code here
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// prompts the user to choose a password length
function generatePassword() {
  var lengthQuestion = Number(prompt("How many characters do you want your password to be? (Between 8 and 128 digits)"));
  while (lengthQuestion < 8 || lengthQuestion > 128) {
    lengthQuestion = Number(prompt("How many characters do you want your password to be? (Between 8 and 128 digits)"));
  }

  // confirm character types
  lower = confirm("Do you want your password to include lowercase characters?");
  
  upper = confirm("Do you want your password to include uppercase characters?");
  
  numbers = confirm("Do you want your password to include numbers?");
  
  special = confirm("Do you want your password to include special characters?");
}

// var result = "";

// if else
// return result;

for (var i = 0; i <= 10; i++) {
  if () {
    
  } else if () {
    
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