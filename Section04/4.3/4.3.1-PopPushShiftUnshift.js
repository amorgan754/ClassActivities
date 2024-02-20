const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let firstPop = nums.pop(); // firstPop = 0
let secondPop = nums.pop(); //secondPop = 1

// remove each of the first two items with shift(), saving each item to a variable
let firstShift = nums.shift(); //firstShift = 6
let secondShift = nums.shift(); //secondShift = 5

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(secondShift, firstShift);
nums.unshift(firstPop, secondPop);

console.log(nums);
