let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0;
let guestScore = 0;

function homeOnePoint(){
    homeScore +=1;
    homeScoreEl.textContent = homeScore;
};

function homeTwoPoints(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
};

function homeThreePoints(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
};

function guestOnePoint(){
    guestScore +=1;
    guestScoreEl.textContent = guestScore;
};

function guestTwoPoints(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
};

function guestThreePoints(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
};