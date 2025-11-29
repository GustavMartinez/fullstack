var myString = "I'm a \"double quoted\" string inside \"double quotes\"";

console.log(myString)


var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'


/*****

SCAPE

CODE  OUTPUT
\'	  single quote
\"	  double quote
\\	  backslash
\n	  newline
\r	  carriage return
\t	  tab
\b	  backspace
\f	  form feed
*****/

// CONCATENATE A STRING:

var ourStr = "I come first. " + "I come second."

console.log(ourStr)


// CONCATENATE WITH +=

var first = "First part. "
first += "Second part."

console.log(first)


// CONCATENATE WITH VARIABLES

var myName = "Andres"
var myNewString = "My name is " + myName + " and this is very good!"
console.log(myNewString)


// APPENDING VARIABLES TO STRINGS

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";

ourStr += anAdjective;

console.log(ourStr)