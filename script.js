// Assignment Code
var lowerChars = ["abcdefghijklmnopqrstuvwxyz"];
var upperChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberChars = ["0123456789"];
var specialChars = ["!#$%&()*+,-./:;<=>?@[]^_`{|}~"];

// prompts the user to choose a password length
function generatePassword() {
  var passwordLength = Number(prompt("Choose a password length between 8 and 128 characters:"));
  console.log(passwordLength);
  while (!passwordLength && passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Choose a password length between 8 and 128 characters:"));
  };
// confirm character types
  // lower = confirm("Do you want your password to include lowercase characters?");
  
  upper = confirm("Do you want your password to include capital letters?");
  console.log(upper);
  
  numbers = confirm("Do you want your password to include numbers?");
  console.log(numbers);

  special = confirm("Do you want your password to include special characters?");
  console.log(special);

  var combined = "";

  for (var i = 1; i <= passwordLength; i++) {

    if (upper === true && numbers === true && special === true) {
      var all = lowerChars.concat(upperChars, numberChars, specialChars);
      console.log(all);
      var randomAll = all[Math.floor(Math.random() * all.length)];
      console.log(randomAll);
      combined += randomAll;
      console.log(combined);

    } else if (upper === true && numbers === true && special === false) {
      var lowerUpperNumber = lowerChars.concat(upperChars, numberChars);
      console.log(lowerUpperNumber);
      var randomLowerUpperNumber = lowerUpperNumber[Math.floor(Math.random() * lowerUpperNumber.length)];
      console.log(randomLowerUpperNumber);
      combined += randomLowerUpperNumber;
      console.log(combined);

    } else if (upper === true && numbers === false && special === true) {
      var lowerUpperSpecial = lowerChars.concat(upperChars, specialChars);
      console.log(lowerUpperSpecial);
    //  var randomLowerUpperSpecial = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
    //  combined += randomLowerUpperSpecial;

    } else if (upper === false && numbers === true && special === true) {
      var lowerNumberSpecial = lowerChars.concat(numberChars, specialChars);
      console.log(lowerNumberSpecial);
    //  var randomLowerNumberSpecial = lowerNumberSpecial[Math.floor(Math.random() * lowerNumberSpecial.length)];
    //  combined += randomLowerNumberSpecial;

    } else if (upper === false && numbers === false && special === true) {
      var lowerSpecial = lowerChars.concat(specialChars);
      console.log(lowerSpecial);
    //  var randomLowerSpecial = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
    //  combined += randomLowerSpecial;

    } else if (upper === false && numbers === true && special === false) {
      var lowerNumber = lowerChars.concat(numberChars);
      console.log(lowerNumber);
    //  var randomLowerNumber = lowerNumber[Math.floor(Math.random() * lowerNumber.length)];
    //  combined += randomLowerNumber;

    } else if (upper === true && numbers === false && special === false) {
      var lowerUpper = lowerChars.concat(upperChars);
      console.log(lowerUpper);
    //  var randomLowerUpper = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
    //  combined += randomLowerUpper;

    // } else if (upper === false && numbers === false && special === false) {
    //   var lower = lowerChars;
    //   console.log(lower);
    //   var randomLower = lower[Math.floor(Math.random() * lower.length)];
    //   combined += randomLower;

    } else {
      var randomLower = lowerChars[Math.floor(Math.random() * lowerChars.length)];
      combined += randomLower;
    }
   return combined;
  };
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