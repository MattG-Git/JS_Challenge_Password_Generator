// Assignment Code
var generateBtn = document.querySelector("#generate");
//This stores the user's password length input
var l;
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlph = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&*@";



var generatePassword = function(l, isUpperCase, isLowerCase, includeNumbers, specialCharacters){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //this function gets the character length
  var passwordLength = function(l) {
    //pops up window with initial prompt for character length
    l = window.prompt("Please choose a length for your password between 8 and 128 characters", "Enter a number");
    //this changed input to a number
    l = parseInt(l);
    //if else statement makes sure input is a number between 8 and 128
    if (l < 8 || l > 128){
    alert("Error wrong character amount");
    passwordLength();  
    //using parseInt above, changes input to a number, this line checks if it is NaN and gives an error
  } else if (isNaN(l)){
    alert("Not a number!");
    passwordLength(); 
  } else {
    console.log(l)
    return l; 
  } 
};
passwordLength();

var isUpperCase = window.confirm ("Do you want your password to have uppercase letters?");
console.log(isUpperCase);

var isLowerCase = window.confirm ("Do you want your password to have lowercase letters?");
console.log(isLowerCase);

var includeNumbers = window.confirm ("Do you want your password to include numbers?");
console.log(includeNumbers);

var specialCharacters = window.confirm ("Do you you want your password to include special characters?");
console.log(specialCharacters);

passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
