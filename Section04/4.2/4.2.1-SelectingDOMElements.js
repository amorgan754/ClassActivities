// select all unordered list (ul) elements
const ulByTag = document.getElementsByTagName("ul");
const ulQuery = document.querySelectorAll("ul");
console.log("Element by tag ", ulByTag);
console.log("Query select all ", ulQuery);

// select all elements with the class "class-week"
const classWeek = document.getElementsByClassName("class-week");
console.log("Element by class name class-week ", classWeek);

// select all elements with the class "nav-bar"
const navBar = document.querySelectorAll(".nav-bar");
console.log("Element query nav-bar", navBar);

// select the element with the id "dog-picture" and save it to a variable
const dogPicId = document.querySelector("#dog-picture");
console.log("dog picture id ", dogPicId);
