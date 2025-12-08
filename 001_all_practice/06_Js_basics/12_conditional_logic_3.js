// Switch statement

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "not valid number";
            break;
    };

    return answer;
};

console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))
console.log(caseInSwitch(5))


// switch statements with mutiple identical options:

function sequentialSizes(val){
    var answer2 = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer2 = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer2 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer2 = "High";
            break;
    };
    return answer2;
};

console.log(sequentialSizes(2))
console.log(sequentialSizes(5))
console.log(sequentialSizes(9))