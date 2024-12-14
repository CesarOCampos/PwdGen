// var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
// var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');

function generatePassword() {
  var generatedPassword = "";
  var upperCaseChars = confirm("Would you like to include uppercase characters?");
  var lowerCaseChars = confirm("Would you like to include lowercase characters?");
  var specialChars = confirm("Would you like to include special characters?");
  var numericChars = confirm("Would you like to include numeric characters?");
  var anArray = []; //resets arrayChars

  if (!lowerCaseChars && !upperCaseChars && !specialChars && !numericChars) {
    alert("Please select atleast one type of character.");
    return ""; //exit early if no options selected
  }

  //reprompts for valid password length
  let passwordLength;
  do {
    passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength));
  
  //values added dynamically
    if (lowerCaseChars) { anArray.push(...generateCharArray(97,122)) }; // 'a' to 'z'
    if (upperCaseChars) { anArray.push(...generateCharArray(65,90)) }; // 'A' to 'Z'
    if (specialChars) { anArray.push(...'!@#$%^&*(){}|[];\'":<>,.?/'); }; // 'special chars'
    if (numericChars) { anArray.push(...generateCharArray(48,57)) }; // '0' to '9'

  let lastchar = null; //tracks the last added character
  
  for (var i = 0; i < passwordLength; i++) {
    let randomChar;
    do {
      randomChar = anArray[Math.floor(Math.random() * anArray.length)];
    } while (randomChar === lastchar); //redo if the random character matches the previous
    
    generatedPassword += randomChar;
    lastchar = randomChar; //updates last character
    }
    return generatedPassword;
}

// Helper function to generate an array of characters from a range of char codes
function generateCharArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(start + i));
}

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password"); // Input field
    var generatedPassword = generatePassword();
    passwordText.value = generatedPassword; // Display generated password
}

function copyPassword() {
  var copyPass = document.querySelector('#password');

  copyPass.select();
  copyPass.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyPass.value);

  /* Alert the copied text */
  alert('Copied: ' + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener('click', copyPassword);
