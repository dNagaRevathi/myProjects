let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

function checkButton() {
    let firstDigit = parseInt(firstNumber.textContent);
    let secondDigit = parseInt(secondNumber.textContent);
    if (firstDigit + secondDigit === parseInt(userInput.value)) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Plesae Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }

}

function RestartButton() {
    userInput.value = "";
    gameResult.textContent = "";
    firstNumber.textContent = Math.ceil(Math.random() * 100);
    secondNumber.textContent = Math.ceil(Math.random() * 100);

}
RestartButton()