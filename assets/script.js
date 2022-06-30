// Assignment code here

var passwordOptions = []
var randomNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var randomSpecial = ['!', '"', '#', '$', '%', '&', "'", ')', '(', '*', '+', ','];
var randomUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var noneSelected = ["If you weren't going to generate a password then why are you even here!"];


// connect code to button in html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var randomInteger = function(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var mathRand = Math.random()
  return Math.floor(min * (1 - mathRand) + mathRand * max)
}

var getRandomChoice = function(list) {
  return list[randomInteger(list.length)]
}


var generatePassword = function() {
  var userInput = window.prompt("How long do you want the password to be? (Between 8 and 128 character)")

  var characterLength = parseInt(userInput)

  if (isNaN(characterLength)) {
    window.alert("That is not a number! Please input a number between 8 and 128")

    generatePassword();

  } else if (characterLength < 8 || characterLength > 128) {
      window.alert("Invalid password length, please input a number between 8 and 128")

      generatePassword();
    }

  var confirmNumbers = window.confirm("Would you like numbers in your password?");
  var confirmSpecial = window.confirm("Would you like special characters in your password?");
  var confirmUpper = window.confirm("Would you like uppercase letters in your password?");
  var confirmLower = window.confirm("Would you like lowercase letters in your password?");

  if (confirmNumbers === true) {
    passwordOptions.push(randomNumbers)
  }

  if (confirmSpecial === true) {
    passwordOptions.push(randomSpecial)
  }

  if (confirmUpper === true) {
    passwordOptions.push(randomUppercase)
  }

  if (confirmLower === true) {
    passwordOptions.push(randomLowercase)
  }

  if (passwordOptions.length === 0) {
    passwordOptions.push(noneSelected)

  }

  
  var createdPassword = ""

  for (var i = 0; i < characterLength; i++  ) {
    var randomChoice = getRandomChoice(passwordOptions)
    var randomCharacter = getRandomChoice(randomChoice)
    createdPassword = createdPassword + randomCharacter
  }
  return createdPassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


