// Assignment Code
var generateBtn = document.querySelector("#generate");
//This stores the user's password length input
var l;
// these are the possible strings used in userChoice variable
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlph = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";



var generatePassword = function() {
  //generated final password
  var pw = ""; 
  //iterate off of user choices
  var userChoice = ""; 

    //this function gets the character length
    var passwordLength = function() {
    //pops up window with initial prompt for character length
    l = window.prompt("Please choose a length for your password between 8 and 128 characters", "Enter a number");
    //this changed input to a number
    l = parseInt(l);
    //if else statement makes sure input is a number between 8 and 128
    if (l < 8 || l > 128){
      alert("Error: Your selection needs to be between 8 and 128 characters long");
      passwordLength();  
    //using parseInt above, changes input to a number, this line checks if it is NaN and gives an error
  } else if (isNaN(l)){
      alert("Please choose a valid number");
      passwordLength(); 
  } else {
      console.log(l)
    return l; 
    }
  };
  passwordLength();
console.log(l);
    //This window.confirm are the propts that equate to true or false with only "Ok" and "cancel" as the input options
  var isUpperCase = window.confirm ("Do you want your password to have uppercase letters?");
  console.log(isUpperCase);

  if (isUpperCase) {
    userChoice += upperAlph;
  }

  var isLowerCase = window.confirm ("Do you want your password to have lowercase letters?");
  console.log(isLowerCase);

  if (isLowerCase) {
    userChoice += lowerAlph;
  }

  var includeNumbers = window.confirm ("Do you want your password to include numbers?");
  console.log(includeNumbers);

  if (includeNumbers) {
    userChoice += numbers;
  }

  var specialCharacters = window.confirm ("Do you you want your password to include special characters?");
  console.log(specialCharacters);

  if (specialCharacters) {
    userChoice += symbols;
  }

  console.log([userChoice, l]);

  //for loop iterates beginning at 0 and adds random character to password string up until length of l
  for (var i = 0; i < l; i++) {
    pw += userChoice [Math.floor(Math.random() * userChoice.length)]
  }

  console.log(pw);
  return pw;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
