// TODO: using the function expressions below, refactor them into function declarations

// expression
const greet = function() {
  console.log("Hello!");
};

// declaration
function greet() {
  console.log("Hello!");
}

// expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// declaration
function threeModTwo() {
  console.log(3 % 2);
}

let age = 18;
// expression
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// declaration
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
