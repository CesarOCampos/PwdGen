var anArray = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');

function generatePassword() {
    var generatedPassword = " ";
    var upperCase = confirm("Would you like to include uppercase characters?");
    var lowerCase = confirm("Would you like to include lowercase characters?");
    var special = confirm("Would you like to include special characters?");
    var numeric = confirm("Would you like to include numeric characters?");

    if (lowerCase == false && upperCase == false && special == false && numeric == false) {
        alert("Please select atleast one type of character.");
        upperCase = confirm("Would you like to include uppercase characters?");
        lowerCase = confirm("Would you like to include lowercase characters?");
        special = confirm("Would you like to include special characters?");
        numeric = confirm("Would you like to include numeric characters?");
    }

    var passwordLength = parseInt(prompt("How many characters would you like your password to be? It should be atleast 10, but not exceed 128 characters."));

    if (passwordLength < 10) {
        alert("Password length must be at least 10 characters.");
    } else if (passwordLength > 20) {
        alert("Password length must be less than 120 characters");
    }

    if (lowerCase == true) { anArray.push(lowerCaseChar) };
    if (upperCase == true) { anArray.push(upperCaseChar) };
    if (special == true) { anArray.push(specialChar) };
    if (numeric == true) { anArray.push(numericChar) };

    for (var i = 0; i < passwordLength; i++) {
        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;

        var randomCharArrayNum = parseInt(Math.floor(Math.random() * anArray.length));
        var selectedCharArray = anArray[randomCharArrayNum];
        var randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
        var randomChar = selectedCharArray[randomCharNum];
        generatedPassword += randomChar;

    }
    password.textContent = generatedPassword;
}
// Write password to the #password input
function writePassword() {
    generatePassword();
    var passwordText = document.querySelector("#password"); //click event
    passwordText.value = generatedPassword;
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
