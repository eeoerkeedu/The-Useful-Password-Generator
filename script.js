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

function generatePassword(){
  
  // DEFINES THE VARIBLES USED LOCALLY IN THE FUNTION, ALSO RESETS CERTAIN VAULES EACH TIME THE FUNCTION IS RUN TO PREVENT STACKING VAULES.
  var passLength = 1
  var passLower = 1
  var passUpper = 1
  var passNum = 1
  var passSpec = 1
  charPool = []
  completePass = []

  // LOOPS USERS BACK TO THE BEGINING OF THE FUNTION IF THEIR PASSWORD LENGTH DOES NOT MEET THE REQUIREMENTS.
  function restartPass(){
    generatePassword()
  }

  // ASKS THE USER FOR THEIR DESIRED PASSWORD LENGTH AND RECORDS THE VALUE FOR USE BY THE OTHER FUNCTIONS.
  function genPassLength(){
    passLength = window.prompt 
        ("Please enter a number of characters for your new password in the field below." +"\n"+ "Password Length must be between 8 & 128 Characters");
    
    if (passLength < 8) {
      window.alert("Password Length must be at least 8 Characters");
      restartPass()
    } else if (passLength > 128) {
      window.alert("Password Length must be less than 129 Characters");
      restartPass()
    } else {
      genPassLower()
      console.log(passLength + " Pass Length");
    }
    
  }
  // ASKS THE USER IF THEY WOULD LIKE TO USE LOWERCASE CHARACTERS, RETURNS TRUE OR FALSE FOR LATER CHECK FUNCTION
  function genPassLower(){
    passLower = window.confirm ("Whould you like to use lowercase characters in your password?");
    console.log("Using Lowercase: " + passLower);
    genPassUpper()
  }

  // ASKS THE USER IF THEY WOULD LIKE TO USE UPPER4CASE CHARACTERS, RETURNS TRUE OR FALSE FOR LATER CHECK FUNCTION
  function genPassUpper(){
    passUpper = window.confirm ("Whould you like to use uppercase characters in your password?");
    console.log("Using Uppercase: " + passUpper);
    genPassNum()
  }

  // ASKS THE USER IF THEY WOULD LIKE TO USE NUMERIC CHARACTERS, RETURNS TRUE OR FALSE FOR LATER CHECK FUNCTION
  function genPassNum() {
    passNum = window.confirm ("Whould you like to use numbereric characters in your password?");
    console.log("Using Numbers: " + passNum);
    genPassSpec()
  }
  
  // ASKS THE USER IF THEY WOULD LIKE TO USE SPECIAL CHARACTERS, RETURNS TRUE OR FALSE FOR LATER CHECK FUNCTION
  function genPassSpec (){
    passSpec = window.confirm ("Whould you like to use special characters in your password?");
    console.log("Using Special: " + passSpec);
    checkPassChars()
  }

  // CHECKS THE USER INPUTS TO DETERMINE IF THE MINIMUM CHARACTER CHOICE REQUIREMENTS HAVE BEEN MADE, RETURNS USER TO BEGINNING OF CHOICES IF THEY CHOSE NO CHARACTER TYPES.
  function checkPassChars(){
    if (
      (passLower===Boolean(false)) && 
      (passUpper===Boolean(false)) &&
      (passNum===Boolean(false)) &&
      (passSpec===Boolean(false))
    )
    {
      console.log("Bad Pass");
      window.alert ("You must chose one character type");
      genPassLower()
    } else {
      console.log("Good Pass");
      genCharPool();
    }
  }

}




// EVENT LISTENER WHEN BUTTON IS CLICKED
generateBtn.addEventListener("click", function(){
    writePassword()
  }
);
