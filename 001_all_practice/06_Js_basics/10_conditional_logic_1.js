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
    if (val == 12){4
        return "Equal";
    }
    else{
        return "Not equal"
    }
}

console.log(testEqual(12))
console.log(testEqual("Hola"))

// comparison and logical operators:

// Logical operator AND &&
function testLogical(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    else{
        return "No";
    }

}

console.log(testLogical(30));
console.log(testLogical(80));


// Logical operator OR ||

function testLogicalOr(){
    if (val < 10 || val > 0){
        return "yes"
    }
}