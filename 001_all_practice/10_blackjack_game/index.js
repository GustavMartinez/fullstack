let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = 5;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";


function startGame(){
    // rendering the cards:
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

    // rendering the sum
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } 
    else if (sum === 21){
        message = "You have got Blackjack!";
        hasBlackJack = true
    }
    else {
        message = "you are out of the game! ";
        isAlive = false;
    }

    messageEl.textContent = message

    //console.log(message)
}

function newCard(){
    console.log("test")
}