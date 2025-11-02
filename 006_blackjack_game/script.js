let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = 11;
let secondCard = 6;

let cards = [firstCard, secondCard,]

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

function startGame(){
    renderGame();
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] +" " + cards[1];

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

function newCard(){
    console.log("Drawing a new card from the deck!")

    let card = 5;
    sum += card;
    renderGame()
}
