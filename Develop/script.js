var anArray = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password"); //click event
    passwordText.value = password;
}

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
    passwordLength();
    buildPassword();

    return generatedPassword;

    function buildPassword() {

        if (lowerCase == true) { anArray.push(lowerCaseChar) };
        if (upperCase == true) { anArray.push(upperCaseChar) };
        if (special == true) { anArray.push(specialChar) };
        if (numeric == true) { anArray.push(numericChar) };

        for (var i = 0; i < anArray.length; i++) {
            var randomCharArrayNum;
            var selectedCharArray;
            var randomCharNum;
            var randomChar;

            randomCharArrayNum = parseInt(Math.floor(Math.random() * anArray.length));
            selectedCharArray = anArray[randomCharArrayNum];
            randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
            randomChar = selectedCharArray[randomCharNum];
            password += randomChar;
        }

        var passwordLength = generatePassword.length;
        generatedPassword.textContent = passwordText;
        g //eneratedPassword.textContent = password;
    }

    function passwordLength() {
        var passwordLength = parseInt(prompt("How many characters would you like your password to be? It should be atleast 8, but not exceed 128 characters."));

        if (passwordLength < 8) {
            alert("Password length must be at least 8 characters.");
            return generatePassword();

        } else if (passwordLength > 128) {
            alert("Password length must be less than 128 characters");
            return generatePassword();
        }
    }
};

// Write password to the #password input

//trying to implement a copy to clipboard button.

// function copyClipboard() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");

//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);

//     /* Copy the text inside the text field */
//     document.execCommand("copy");

//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//document.querySelector("#copy").addEventListener("click", copy);