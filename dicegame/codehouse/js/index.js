/*







*/


var gender = prompt("Are you male or female?");
var name = prompt("Enter your name: ");
var dicePath = ["../../images/dice1.png", "../../images/dice2.png", "../../images/dice3.png", "../../images/dice4.png", "../../images/dice5.png", "../../images/dice6.png"]

if (gender.toLowerCase() == "male") {
    document.querySelector(".you").textContent = name + "👨‍✈️";
} else {
    document.querySelector(".you").textContent = name + "👩‍✈️";
}

function toggleDice() {
    var playerOne = randomNumberGenerator();
    var playerTwo = randomNumberGenerator();

    var newImgOne = document.querySelector(".player-one-image");
    var newImgTwo = document.querySelector(".player-two-image");

    newImgOne.setAttribute("src", dicePath[playerOne]);
    newImgTwo.setAttribute("src", dicePath[playerTwo]);

    var winner = document.querySelector("#winnerText");
    if (playerOne < playerTwo) {
        winner.textContent = "COMPUTER WINS!!!✨✨";
    } else if (playerOne > playerTwo) {
        winner.textContent = "✨✨" + name + " WINS!!!";
    } else {
        winner.textContent = "IT'S A TIE!!!"
    }
}

function randomNumberGenerator() {
    var randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}
