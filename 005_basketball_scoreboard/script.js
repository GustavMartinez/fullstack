let plusOne = 1;
let plusTwo = 2;
let plusThree = 3;
let home = 0;
let guest = 0;

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")



function addOne(){
    home = home + plusOne
    homeEl.textContent = home;
}

function addTwo(){
    home = home + plusTwo;
    homeEl.textContent = home;
}

function addThree(){
    home = home + plusThree;
    homeEl.textContent = home;
}