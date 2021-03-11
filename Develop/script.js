// Assignment Code
var caseArray = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword(); //you're expect to create the string based on the users parameters
    var passwordText = document.querySelector("#password"); //click event

    passwordText.value = password; //updating doc

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

function generatePassword() {
    // Add event listener tologic here = prompt a few timesbuild a string based on the input
}