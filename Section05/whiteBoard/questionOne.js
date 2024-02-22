// use a javascript function that takes two integers and returns their sum
// If the numbers are equal, return three times their sum

function sumOfInts(numOne, numTwo) {
  let sum = 0;
  if (numOne === numTwo) {
    sum = (numOne + numTwo) * 3;
  } else {
    sum = numOne + numTwo;
  }
  return sum;
}

let sum = sumOfInts(10, 20);

console.log(sum);
