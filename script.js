const circleOne = document.querySelector(".one")
const circleTwo = document.querySelector(".two")
const circleThree = document.querySelector(".three")
const circleFour = document.querySelector(".four")
const circleFive = document.querySelector(".five")
const circleSix = document.querySelector(".six")
const circleSeven = document.querySelector(".seven")
const rollDice = document.querySelector(".rollDice")

refresh()

function refresh() {
    circleOne.style.display = "none"
    circleTwo.style.display = "none"
    circleThree.style.display = "none"
    circleFour.style.display = "none"
    circleFive.style.display = "none"
    circleSix.style.display = "none"
    circleSeven.style.display = "none"
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayDiceCircle() {
    refresh()
    const diceNumber = randomNumber(1, 6)
    if (diceNumber == 1) {
        console.log("1")
        circleFour.style.display = "block"
    } else if (diceNumber == 2) {
        console.log("2")
        circleThree.style.display = "block"
        circleFive.style.display = "block"
    } else if (diceNumber == 3) {
        console.log("3")
        circleThree.style.display = "block"
        circleFour.style.display = "block"
        circleFive.style.display = "block"
    } else if (diceNumber == 4) {
        console.log("4")
        circleOne.style.display = "block"
        circleThree.style.display = "block"
        circleFive.style.display = "block"
        circleSeven.style.display = "block"
    } else if (diceNumber == 5) {
        console.log("5")
        circleOne.style.display = "block"
        circleThree.style.display = "block"
        circleFour.style.display = "block"
        circleFive.style.display = "block"
        circleSeven.style.display = "block"
    } else if (diceNumber == 6) {
        console.log("6")
        circleOne.style.display = "block"
        circleTwo.style.display = "block"
        circleThree.style.display = "block"
        circleFive.style.display = "block"
        circleSix.style.display = "block"
        circleSeven.style.display = "block"
    }
}

addEventListener("click", displayDiceCircle) 