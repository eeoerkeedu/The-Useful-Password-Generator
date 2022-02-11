// DEFINES THE GLOBAL VARIABLES, ARRAYS USED TO GENERATE PASSWROD CHARACTERS.
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = "0 1 2 3 4 5 6 7 8 9";
var number = number.split(' ');

var specChar = "~ ! @ # $ % ^ & * _ +";
var specChar = specChar.split(' ');

var charPool = []
// var charPool =[lowercase, uppercase, number, specChar]

var completePass =[]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// WriteS password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = completePass;
}






// EVENT LISTENER WHEN BUTTON IS CLICKED
generateBtn.addEventListener("click", function(){
    writePassword()
  }
);
