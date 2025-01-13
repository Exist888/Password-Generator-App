const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");

function getPasswordLength() {
    const passwordLength = document.getElementById("length-dropdown");
    const passwordLengthAsNumber = Number(passwordLength.value);
    return passwordLengthAsNumber;
}

function generatePassword() {
    firstPassword.textContent = "";
    secondPassword.textContent = "";
    for (let passwordCharacter = 0; passwordCharacter < getPasswordLength(); passwordCharacter++) {
        let i = Math.floor( Math.random() * characters.length);
        let i2 = Math.floor( Math.random() * characters.length);
        firstPassword.textContent += characters[i];
        secondPassword.textContent += characters[i2];
    }
}

function copyOnClick1() {
    if (firstPassword.textContent === "" || firstPassword.textContent === null) {
        alert("Please generate a password first. 😊");
    } else {
        let copyText1 = document.getElementById("first-password").innerText;
        navigator.clipboard.writeText(copyText1).then(() => {
            alert("Password successfully copied!");
        }).catch(err => {
            alert("Sorry, there seems to be a glitch. Please copy and paste your password manually.");
        });
    }
}

function copyOnClick2() {
    if (secondPassword.textContent === "" || secondPassword.textContent === null) {
        alert("Please generate a password first. 😊");
    } else {
        let copyText2 = document.getElementById("second-password").innerText;
        navigator.clipboard.writeText(copyText2).then(() => {
            alert("Password successfully copied!");
        }).catch(err => {
            alert("Sorry, there seems to be a glitch. Please copy and paste your password manually.");
        });
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    firstPassword.textContent = "";
    secondPassword.textContent = "";
}