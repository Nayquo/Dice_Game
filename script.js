const circleOne = document.querySelector(".one");
const circleTwo = document.querySelector(".two");
const circleThree = document.querySelector(".three");
const circleFour = document.querySelector(".four");
const circleFive = document.querySelector(".five");
const circleSix = document.querySelector(".six");
const circleSeven = document.querySelector(".seven");
const rollDice = document.querySelector(".rollDice");
const dice = document.querySelector(".dice")
const hold = document.querySelector(".hold");
const currentPointP1 = document.querySelector(".currentScoreP1");
const currentPointP2 = document.querySelector(".currentScoreP2");
const globalScoreP1 = document.querySelector(".globalScoreP1");
const globalScoreP2 = document.querySelector(".globalScoreP2");
const newGame = document.querySelector(".newGame")
const titleP1 = document.querySelector(".TitleP1");
const titleP2 = document.querySelector(".TitleP2");
const winnerScreen = document.querySelector("#winnerScreen")
let currentPointOfCurrentPlayer = currentPointP1;
let globalPointOfCurrentPlayer = globalScoreP1;
let currentPlayer = titleP1;

titleP1.className = titleP1.className + " borderAnimation";

function refresh() {
    circleOne.style.display = "none";
    circleTwo.style.display = "none";
    circleThree.style.display = "none";
    circleFour.style.display = "none";
    circleFive.style.display = "none";
    circleSix.style.display = "none";
    circleSeven.style.display = "none";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changePlayer() {
    if (globalPointOfCurrentPlayer.textContent >= 10) {
        winnerScreen.className = " winnerScreen"
        winnerScreen.textContent = currentPlayer.textContent + " WIN"
    }
    if (currentPointOfCurrentPlayer == currentPointP1) {
        currentPlayer = titleP2;
        currentPointOfCurrentPlayer = currentPointP2;
        globalPointOfCurrentPlayer = globalScoreP2;
        titleP1.className = "TitleP1"
        titleP2.className = titleP2.className + " borderAnimation";
    } else if (currentPointOfCurrentPlayer == currentPointP2) {
        currentPlayer = titleP1;
        currentPointOfCurrentPlayer = currentPointP1;
        globalPointOfCurrentPlayer = globalScoreP1;
        titleP2.className = "TitleP2"
        titleP1.className = titleP1.className + " borderAnimation";
    }
}

function displayDiceCircle() {
    if (dice.className == "dice") {
        dice.className = dice.className + " animationIn"
    } else if (dice.className == "dice animationIn") {
        dice.className = "dice animationOut"
    } else {
        dice.className = "dice animationIn"
    }
    refresh();
    const diceNumber = randomNumber(1, 6);
    if (diceNumber == 1) {
        circleFour.style.display = "block";
        currentPointOfCurrentPlayer.textContent = 0;
        changePlayer();
    } else if (diceNumber == 2) {
        circleThree.style.display = "block";
        circleFive.style.display = "block";
        currentPointOfCurrentPlayer.textContent = Number(currentPointOfCurrentPlayer.textContent) + 2;
    } else if (diceNumber == 3) {
        circleThree.style.display = "block";
        circleFour.style.display = "block";
        circleFive.style.display = "block";
        currentPointOfCurrentPlayer.textContent = Number(currentPointOfCurrentPlayer.textContent) + 3;
    } else if (diceNumber == 4) {
        circleOne.style.display = "block";
        circleThree.style.display = "block";
        circleFive.style.display = "block";
        circleSeven.style.display = "block";
        currentPointOfCurrentPlayer.textContent = Number(currentPointOfCurrentPlayer.textContent) + 4;
    } else if (diceNumber == 5) {
        circleOne.style.display = "block";
        circleThree.style.display = "block";
        circleFour.style.display = "block";
        circleFive.style.display = "block";
        circleSeven.style.display = "block";
        currentPointOfCurrentPlayer.textContent = Number(currentPointOfCurrentPlayer.textContent) + 5;
    } else if (diceNumber == 6) {
        circleOne.style.display = "block";
        circleTwo.style.display = "block";
        circleThree.style.display = "block";
        circleFive.style.display = "block";
        circleSix.style.display = "block";
        circleSeven.style.display = "block";
        currentPointOfCurrentPlayer.textContent = Number(currentPointOfCurrentPlayer.textContent) + 6;
    }
}

function holdPoint() {
    globalPointOfCurrentPlayer.textContent = Number(globalPointOfCurrentPlayer.textContent) + Number(currentPointOfCurrentPlayer.textContent);
    currentPointOfCurrentPlayer.textContent = 0;
    changePlayer();
}

function launchNewGame() {
    console.log("test")
    refresh()
    currentPointP1.textContent = 0;
    currentPointP2.textContent = 0;
    globalScoreP1.textContent = 0;
    globalScoreP2.textContent = 0;
    currentPointOfCurrentPlayer = currentPointP1;
    globalPointOfCurrentPlayer = globalScoreP1;
    titleP1.className = titleP1.className + " borderAnimation";
    titleP2.className = "TitleP2";
    currentPlayer = titleP1;
    if(winnerScreen.className == " winnerScreen"){
        currentPlayer = titleP1;
        winnerScreen.className = "";
        winnerScreen.textContent = "";
    }
}

rollDice.addEventListener("click", displayDiceCircle);
hold.addEventListener("click", holdPoint);
newGame.addEventListener("click", launchNewGame);
