let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

let firstCard = 11;
let secondCard = 1;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";



function startGame(){

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card?";

    }else if (sum === 21){
        message = "You've got Balckjack";
        hasBlackJack = true
    }else if (sum > 21){
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEL.textContent = message

    console.log(message)
    console.log(hasBlackJack)
    console.log(isAlive)
}
