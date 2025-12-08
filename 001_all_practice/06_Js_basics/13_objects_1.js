// objects:

var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["bruno", "Flufli"]
};

// Accessing the properties

var dogName = myDog.name
var dogLegs = myDog.legs

console.log(dogName)
console.log(dogLegs)


// Change name

myDog.name = "Happy Camper"

console.log(myDog.name)


// Adding a new propertie

myDog.bark = "bow-ow";

console.log(myDog)


// delete a propertie

delete myDog.tails;