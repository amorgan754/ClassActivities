// write a function that counts the number of vowels in a string

function countVowels(userInput) {
  const userArr = userInput.split("");
  let counter = 0;
  for (let letters of userArr) {
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

function countVowelsTwo(userInput) {
  const userArr = userInput.toLowerCase().split("");
  let counter = 0;
  for (let letters of userArr) {
    if (
      letters.includes("a") ||
      letters.includes("e") ||
      letters.includes("i") ||
      letters.includes("o") ||
      letters.includes("u")
    ) {
      counter++;
    }
  }
  return counter;
}

let vowelCounter = countVowels("this is a string");
console.log(`There are ${vowelCounter} vowels in your string`);

let vowelCounterTwo = countVowelsTwo("this is A string");
console.log(`There are ${vowelCounterTwo} vowels in your string`);
