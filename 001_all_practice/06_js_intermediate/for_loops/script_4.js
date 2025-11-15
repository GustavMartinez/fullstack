let x = 102;
let y = 107;

function getFastestRaceTime(){
    if (x < y){
        return x
    }else if (y < x){
        return y
    }else{
        return x
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)