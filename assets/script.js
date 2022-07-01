// Assignment code here

// arrays created to later insert into for loop
var characterLength = 8;
var passwordOptions = []

var randomNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var randomSpecial = ['!', '"', '#', '$', '%', '&', "'", ')', '(', '*', '+', ','];
var randomUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// connects code to button in html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var correctPrompts = userPrompts(); //either true or false
  var passwordText = document.querySelector("#password");
 
  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
  passwordText.value = "";
  }
}

// Password will be generated based on user choices to prompts
var generatePassword = function() {
  var createdPassword = "";

  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordOptions.length);
    createdPassword += passwordOptions[randomCharacter];
  }
  return createdPassword //Sends createdPassword to password text box
}

var userPrompts = function() {
    passwordOptions= [];

    var userInput = window.prompt("How long do you want the password to be? (Between 8 and 128 character)")
  
    characterLength = parseInt(userInput);

  if (isNaN(characterLength)) {
    window.alert("That is not a number! Please input a number between 8 and 128")
    return false;
  }

  else if (characterLength < 8 || characterLength > 128) {
    window.alert("Invalid password length, please input a number between 8 and 128")
    return false;
  }

  if (window.confirm("Would you like numbers in your password?")) {
    passwordOptions = passwordOptions.concat(randomNumbers);
  }

  if (window.confirm("Would you like special characters in your password?")) {
    passwordOptions = passwordOptions.concat(randomSpecial);
  }

  if (window.confirm("Would you like uppercase letters in your password?")) {
    passwordOptions = passwordOptions.concat(randomUppercase);
  }

  if (window.confirm("Would you like lowercase letters in your password?")) {
    passwordOptions = passwordOptions.concat(randomLowercase);
  }

  if (passwordOptions.length === 0) {
    passwordOptions = passwordOptions.concat(randomLowercase);
  }
  return true;
};






