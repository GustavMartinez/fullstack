

//document.getElementById("count-el").innerHTML = 5

// initialize the count as 0
// listen for clicks on the increment button
// increment the count 


let saveEl = document.getElementById('save-el')
let countEL = document.getElementById("count-el")

let count = 0;

function increment(){
    count = count + 1

    countEL.innerHTML = count
}

function save(){
    let myVar = count + " - "
    saveEl.innerText += myVar
}