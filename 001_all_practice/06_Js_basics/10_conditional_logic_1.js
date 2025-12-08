// CONDITIONAL LOGIC

function trueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}

console.log(trueOrFalse(false))
console.log(trueOrFalse(true))


// comparison

function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    else{
        return "Not equal"
    }
}

console.log(testEqual(12))
console.log(testEqual("Hola"))