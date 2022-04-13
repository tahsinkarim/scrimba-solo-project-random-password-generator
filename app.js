// DOM Elements
const firstEl = document.getElementById("option1")
const secondEl = document.getElementById("option2")
const thirdEl = document.getElementById("option3")
const fourthEl = document.getElementById("option4")
const button = document.getElementById("button")
const input = document.querySelectorAll("input")



function generatePassword() {
    var length = 14,
        charset = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
        randomPassword = "";
    for (var i = 0; i < length; i++) {
        randomPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    return randomPassword;
}
        

button.addEventListener("click", () => {
        firstEl.value = generatePassword()
        secondEl.value = generatePassword()
        thirdEl.value = generatePassword()
        fourthEl.value = generatePassword()
})

function copyPassword() {
    let copiedPassword = document.activeElement.value;
    navigator.clipboard.writeText(copiedPassword);
    alert("Copied the text: " + copiedPassword);
}
