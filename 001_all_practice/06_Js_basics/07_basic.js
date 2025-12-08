
/* array functions:

- .push() >>> Esta funcion adiciona elementos al final del array
- .pop()  >>> Esta funcion elimina el elemento al final del array
- .shift() >>> Esta función elimina elementos al inicio del array
- .unshift() >>> Esta función adiciona elementos al inicio del array

*/


// ORIGINAL ARRAY
var myNewArray = ["Spimsons", "H", "Dog"];
console.log("the original array is: " + myNewArray)


// PUSH FUNCTION
myNewArray.push(["happy", "Joy"])
myNewArray.push("Cat")

console.log(myNewArray)


// POP FUNCTION

myNewArray.pop();
console.log(myNewArray)


// SHIFT FUNCTION
myNewArray.shift();
console.log(myNewArray)


// UNSHIFT FUNCTION
myNewArray.unshift("Leonidas")
console.log(myNewArray)
