//ARRAYS

// An array:

var myArray = ["John", 25];

console.log(myArray)
console.log(myArray[1])


// Nested array:

var ourArray = ["gust", 25, 'john', ["martinez", 50]]

console.log(ourArray[3])

// Modify an array:

var numericArray = [15, 18, 20];
numericArray[0] = 5;

console.log(numericArray)


var otherArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = otherArray[0][0];
var myData2 = otherArray[2][1];

console.log(myData)
console.log(myData2)