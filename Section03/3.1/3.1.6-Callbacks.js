// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const input = prompt("Please Enter Your Name: ");
  alert(callback(input));
}

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet);
getNameAndShowMessage(welcome);
getNameAndShowMessage(informAboutSale);
