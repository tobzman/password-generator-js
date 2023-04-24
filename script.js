// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = "8-128 characters";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  passwordText.value = password;
  if (passwordLength === null) {
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password lenght between 8 and 128 characters.")
    return;
  }
  var includelowercaseLetters = check("Include lowercase letters");
  var includeuppercaseLetters = check("Include uppercase letters");
  var includenumbers = check("Include numbers");
  var includespecialCharacters = check("Include special characters");
  if (!includelowercaseLetters && !includeuppercaseLetters && !includenumbers && !includespecialCharacters) {
    alert("Please select at least one character type.");
    return;
  }
  var characterSet = "";
  if (includelowercaseLetters) {
    characterSet += lowercaseLetters;
  }
  if (includeuppercaseLetters) {
    characterSet += uppercaseLetters;
  }
  if (includenumbers) {
    characterSet += numbers;
  }
  if (includespecialCharacters) {
    characterSet += specialCharacters
  }
  var password = "";
  for (var i = 0, i < passwordLength; i++) {
    var randomindex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomindex];
  }
  return password;
}

    


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
