let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");



let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1){
        return 11;
    }else if (randomNumber > 10){
        return 10;
    }else{
        return randomNumber;
    }
};


function renderGame(){
    // rendering the cards:
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }


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


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards.push(firstCard, secondCard);

    sum = firstCard + secondCard;

    renderGame();
}


function newCard(){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}