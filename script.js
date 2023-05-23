const upCheckBox = document.getElementById("uppercaseCheckbox");
const lowCheckBox = document.getElementById("lowercaseCheckbox");
const numCheckBox = document.getElementById("numbersCheckbox");
const specCheckBox = document.getElementById("specialCharsCheckbox");
const generateBtn = document.getElementById("generateButton");
const passwordDisplay = document.getElementById("passwordDisplay");


//Material tayaar
let UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let specialChars = "!@#$%^&*()_-=+";
let numbers = "1234567890";

generateBtn.addEventListener('click', function () {
    let poolStr = '';

    if (upCheckBox.checked) {
        poolStr += UpperCaseChars
    }
    if (lowCheckBox.checked) {
        poolStr += lowerCaseChars
    }
    if (numCheckBox.checked) {
        poolStr += numbers
    }
    if (specCheckBox.checked) {
        poolStr += specialChars
    }
    const passwordLen = document.getElementById("lengthInput").value;

    if (passwordLen > 20) {
        alert('Reached the max limit of length')
    }
    else {
        let password = ''
        // For Generating the Password from the poolStr Array
        for (let i = 0; i < passwordLen; i++) {
            const randomIndex = Math.floor(Math.random() * poolStr.length);
            let randomChar = poolStr[randomIndex];
            password += randomChar;
        }

        if (poolStr.length == 0) {
            alert("Please Select Some Options");
        }
        else {
            passwordDisplay.innerText = password;
        }
    }
})
