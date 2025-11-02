
let firstCard = 11;
let secondCard = 1;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;


if (sum <= 20){
    console.log("Do you want to draw a new card?")

}else if (sum === 21){
    console.log("You've got Balckjack");
    hasBlackJack = true
}else if (sum > 21){
    console.log("You're out of the game!")
    isAlive = false;
}

console.log(hasBlackJack)
console.log(isAlive)