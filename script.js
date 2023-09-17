// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var specialCharacters = "!@#$%^&*?"
var finalPassword = ""
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordSize = prompt("Please enter password length within 8 and 128 characters")
  if (passwordSize >= 8 && passwordSize <= 128) {
    var confirmLowercase = confirm("Do you want lowercase letters?")
    var confirmUppercase = confirm("Do you want an uppercase letter?")
    var confirmNumeric = confirm("Do you want to use a number?")
    var confirmSpecialcharacters = confirm("Do you want to use a special character?")
    if (confirmLowercase === true) {
      var index = Math.floor(Math.random() * 26)
      finalPassword = finalPassword + lowerCase[index]
    }
    if (confirmUppercase === true) {
      var index = Math.floor(Math.random()*26)
      finalPassword = finalPassword + upperCase[index]
    }
    if (confirmNumeric === true) {
      var index = Math.floor(Math.random()*10)
      finalPassword = finalPassword + numeric[index]
    }
    if (confirmSpecialcharacters === true){
      var index = Math.floor(Math.random()*9)
      finalPassword = finalPassword + specialCharacters[index]
    }
  }
  else {
    alert("Invalid entry, the password length must be between 8 and 128")
  }
  return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
