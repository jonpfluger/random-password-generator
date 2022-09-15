// Assignment Code
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// prompts the user to choose a password length
function generatePassword() {
  var passwordLength = Number(prompt("Choose a password length between 8 and 128 characters:"));
  // loop until the input is valid
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128.");
      passwordLength = Number(prompt("Choose a password length between 8 and 128 characters:"));
    }
  };
  
  // confirm character types
  upper = confirm("Do you want your password to include capital letters?");
  
  numbers = confirm("Do you want your password to include numbers?");

  special = confirm("Do you want your password to include special characters?");

  // this will end up as our password in the end
  var combined = "";

  // adds the characters to an array based on their selections
  var chosenOnes = [].concat(lowerChars);
  if (upper) chosenOnes = chosenOnes.concat(upperChars);
  if (numbers) chosenOnes = chosenOnes.concat(numberChars);
  if (special) chosenOnes = chosenOnes.concat(specialChars);

  // this for loop randomly generates the password from the array
  for (var i = 1; i <= passwordLength; i++) {
    var randomChar = chosenOnes[Math.floor(Math.random() * chosenOnes.length)]
    combined += randomChar;
  };
  return combined;
};


// Starter code below -- unchanged


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