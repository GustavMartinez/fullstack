
var newArray = [];

for (var i = 0; i < 5; i++){
    newArray.push(i)
    console.log(i)
}

console.log(newArray)


// New loop incremented by 2

var newLoop = [];

for (var j = 1; j < 6; j += 2){
    newLoop.push(j);
    console.log(j)
}

console.log(newLoop)


// Count backwards with a for loop

var ourArray = [];

for (var k = 10; k > 0; k-=2){
    ourArray.push(k)
    console.log(k)
};

console.log(ourArray)