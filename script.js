// Assignment code here
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// prompts the user to choose a password length
function generatePassword() {
  var passwordLength = Number(prompt("How many characters do you want your password to be? (Between 8 and 128 digits)"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("How many characters do you want your password to be? (Between 8 and 128 digits)"));
  }

  // confirm character types
  lower = confirm("Do you want your password to include lowercase characters?");
  
  upper = confirm("Do you want your password to include uppercase characters?");
  
  numbers = confirm("Do you want your password to include numbers?");
  
  special = confirm("Do you want your password to include special characters?");
};

var combined = "";

for (var i = 0; i <= passwordLength.length; i++) {
  if (lower === true && upper === true && numbers === true && special === true) {
    var all = lowerChars.concat(upperChars, numberChars, specialChars);
    var randomAll = all[Math.floor(Math.random() * all.length)];
    combined += randomAll;
  } else if (lower === true && upper === true && numbers === true && special === false) {
    var lowerUpperNumber = lowerChars.concat(upperChars, numberChars);
    var randomLowerUpperNumber = lowerUpperNumber[Math.floor(Math.random() * lowerUpperNumber.length)];
    combined += randomLowerUpperNumber;
  } else if (lower === true && upper === true && numbers === false && special === true) {
    var lowerUpperSpecial = lowerChars.concat(upperChars, specialChars);
    var randomLowerUpperSpecial = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
    combined += randomLowerUpperSpecial;
  } else if (lower === true && upper === false && numbers === true && special === true) {
    var lowerNumberSpecial = lowerChars.concat(numberChars, specialChars);
    var randomLowerNumberSpecial = lowerNumberSpecial[Math.floor(Math.random() * lowerNumberSpecial.length)];
    combined += randomLowerNumberSpecial;
  } else if (lower === false && upper === true && numbers === true && special === true) {
    var upperNumberSpecial = upperChars.concat(numberChars, specialChars);
    var randomUpperNumberSpecial = upperNumberSpecial[Math.floor(Math.random() * upperNumberSpecial.length)];
    combined += randomUpperNumberSpecial;
  } return combined;
};










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