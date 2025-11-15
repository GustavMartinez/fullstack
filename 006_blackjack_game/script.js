let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard,]

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    return randomNumber
}




function startGame(){
    renderGame();
}

function renderGame(){

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    

    if (sum <= 20){
        message = "Do you want to draw a new card?";

    }else if (sum === 21){
        message = "You've got Balckjack";
        hasBlackJack = true
    }else {
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

    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()
}
