// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let name = "Ashley";
let age = 25;
let quesadilla = true;
let something = null;
let nothing;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name);
console.log(age);
console.log(quesadilla);
console.log(nothing);
console.log(something);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let number = `My name is ${name} and I am ${age} years old.`;

// reassign the value of the variable that references "null"
something = 5;

// print the value and its type
console.log(
  `the value of something is ${something} and its data type is ${typeof something}`
);

// print a variable that causes a ReferenceError
console.log(nothing);

// alter the previous line to no longer cause a ReferenceError
