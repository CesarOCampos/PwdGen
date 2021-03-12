// Assignment Code
var caseArray = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var generateBtn = document.querySelector("#generate");

//document.querySelector("#copy").addEventListener("click", copy);

function generatePassword() {
    var passwordtxt = " ";

    // Add event listener tologic here = prompt a few timesbuild a string based on the input
    var upperCase = confirm("Would you like to include uppercase characters?");
    var lowerCase = confirm("Would you like to include lowercase characters?");
    var special = confirm("Would you like to include special characters?");
    var numeric = confirm("Would you like to include numeric characters?");

    if (lowercase === false && uppercase === false && special === false && numeric === false) {
        alert("Please select atleast one type of character.");
        upperCase = confirm("Would you like to include uppercase characters?");
        lowerCase = confirm("Would you like to include lowercase characters?");
        special = confirm("Would you like to include special characters?");
        numeric = confirm("Would you like to include numeric characters?");
    }
    var passwordLength = parseInt(prompt("How many characters would you like your password to be? It should be atleast 8, but not exceed 128 characters."));

    if (passwordLength < 8) {
        alert("Password length must be at least 8 characters.");
        passwordLength();
    } else if (passwordLength > 128) {
        alert("Password length must be less than 128 characters");
        passwordLength();
    } else {
        prompt("How many characters would you like your password to be? It should be atleast 8, but not exceed 128 characters.");
    }
    if (lowercase === true) { caseArray.push(lowerCaseChar) };
    if (uppercase === true) { caseArray.push(upperCaseChar) };
    if (special === true) { caseArray.push(specialChar) };
    if (numeric === true) { caseArray.push(numericChar) };

    for (var i = 0; i < passwordLength; i++) {
        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;

        randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));
        selectedCharArray = caseArray[randomCharArrayNum];
        randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
        randomChar = selectedCharArray[randomCharNum];
        passwordtxt = randomChar;
    }
    passwordEntry.textContent = passwordtxt;

};

// Write password to the #password input
function writePassword() {
    var password = generatePassword(); //you're expect to create the string based on the users parameters
    pwd1 = generatePassword();
    var passwordText = document.querySelector("#password"); //click event
    passwordText.value = pwd1;
    //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);