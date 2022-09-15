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

  var combined = "";

  var chosenOnes = [].concat(lowerChars);
  if (upper) chosenOnes = chosenOnes.concat(upperChars);
  if (numbers) chosenOnes = chosenOnes.concat(numberChars);
  if (special) chosenOnes = chosenOnes.concat(specialChars);

  console.log(chosenOnes);

  for (var i = 1; i <= passwordLength; i++) {

    var randomChar = chosenOnes[Math.floor(Math.random() * chosenOnes.length)]
    combined += randomChar;

    // refactored this code below

    // if (upper === true && numbers === true && special === true) {
    //   var all = lowerChars.concat(upperChars, numberChars, specialChars);
    //   console.log(all);
    //   var randomAll = chosenOnes[Math.floor(Math.random() * all.length)];
    //   console.log(randomAll);
    //   combined += randomAll;

    // } else if (upper === true && numbers === true && special === false) {
    //   var lowerUpperNumber = lowerChars.concat(upperChars, numberChars);
    //   var randomLowerUpperNumber = lowerUpperNumber[Math.floor(Math.random() * lowerUpperNumber.length)];
    //   combined += randomLowerUpperNumber;

    // } else if (upper === true && numbers === false && special === true) {
    //   var lowerUpperSpecial = lowerChars.concat(upperChars, specialChars);
    //   var randomLowerUpperSpecial = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
    //   combined += randomLowerUpperSpecial;

    // } else if (upper === false && numbers === true && special === true) {
    //   var lowerNumberSpecial = lowerChars.concat(numberChars, specialChars);
    //   var randomLowerNumberSpecial = lowerNumberSpecial[Math.floor(Math.random() * lowerNumberSpecial.length)];
    //   combined += randomLowerNumberSpecial;

    // } else if (upper === false && numbers === false && special === true) {
    //   var lowerSpecial = lowerChars.concat(specialChars);
    //   var randomLowerSpecial = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
    //   combined += randomLowerSpecial;

    // } else if (upper === false && numbers === true && special === false) {
    //   var lowerNumber = lowerChars.concat(numberChars);
    //   var randomLowerNumber = lowerNumber[Math.floor(Math.random() * lowerNumber.length)];
    //   combined += randomLowerNumber;

    // } else if (upper === true && numbers === false && special === false) {
    //   var lowerUpper = lowerChars.concat(upperChars);
    //   var randomLowerUpper = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
    //   combined += randomLowerUpper;

    // // } else if (upper === false && numbers === false && special === false) {
    // //   var lower = lowerChars;
    // //   console.log(lower);
    // //   var randomLower = lower[Math.floor(Math.random() * lower.length)];
    // //   combined += randomLower;

    // } else {
    //   var randomLower = lowerChars[Math.floor(Math.random() * lowerChars.length)];
    //   combined += randomLower;
    // }
  };
  return combined;
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