// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = 0;
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  passwordLength = window.prompt(
    "How many characters would you like your password to contsin?"
  );
  if (passwordLength === null) {
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password lenght between 8 and 128 characters.");
    return;
  }
  var includelowercaseLetters = window.confirm("Include lowercase letters");
  var includeuppercaseLetters = window.confirm("Include uppercase letters");
  var includenumbers = window.confirm("Include numbers");
  var includespecialCharacters = window.confirm("Include special characters");
  if (
    !includelowercaseLetters &&
    !includeuppercaseLetters &&
    !includenumbers &&
    !includespecialCharacters
  ) {
    alert("Please select at least one character type.");
    return;
  }
  var characterSet = [];
  if (includelowercaseLetters) {
    characterSet = characterSet.concat(lowercaseLetters.split(""));
  }
  if (includeuppercaseLetters) {
    characterSet = characterSet.concat(uppercaseLetters.split(""));
  }
  if (includenumbers) {
    characterSet = characterSet.concat(numbers.split(""));
  }
  if (includespecialCharacters) {
    characterSet = characterSet.concat(specialCharacters.split(""));
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomindex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomindex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
