let plusOne = 1;
let plusTwo = 2;
let plusThree = 3;
let home = 0;
let guest = 0;

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")



function addOneH(){
    home = home + plusOne
    homeEl.textContent = home;
}

function addTwoH(){
    home = home + plusTwo;
    homeEl.textContent = home;
}

function addThreeH(){
    home = home + plusThree;
    homeEl.textContent = home;
}

function addOneG(){
    guest = guest + plusOne
    guestEl.textContent = guest;
}

function addTwoG(){
    guest = guest + plusTwo;
    guestEl.textContent = guest;
}

function addThreeG(){
    guest = guest + plusThree;
    guestEl.textContent = guest;
}