// create a variable called "name" that references a string
let name = "Ashley";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "100 Bad Days";

// create a variable called "wage" that references a number
let wage = 50000;

// create a variable called "age" that references a number
let age = 25;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = true;

// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "pigs";
console.log(typeof favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "World's Smallest Violin";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 500;
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = 26;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 70000;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "My name is " +
    name +
    " and my favorite song is currently " +
    favoriteSong +
    "."
);
console.log(
  `My name is ${name} and my favorite song is currently ${favoriteSong}.`
);
