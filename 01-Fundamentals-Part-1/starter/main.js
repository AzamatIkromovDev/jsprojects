// const date = new Date();
// const day = date.getDay();
// const currentTime = date.getHours();
// const currentMinute = date.getMinutes();
// const currentSecond = date.getSeconds();
// let resultTime;
//
// if (currentTime > 12) {
//   resultTime = currentTime - 12;
// } else {
//   resultTime = currentTime;
// }
//
// let daysOfTheWeek = [
//   "Monday",
//   "Tuesday",
//   "Wenday",
//   "Thusrday",
//   "Friday",
//   "Suturday",
//   "Sunday",
// ];
// let dayName = daysOfTheWeek[day - 1];
//
// resultTime = resultTime < 10 ? `Current time is 0${resultTime}` : resultTime;
//
// console.log(`Today is : ${dayName}\n
// Current time is: ${resultTime}:${currentMinute}:${currentSecond}`);

// const windowContent = () => {
//   window.print();
// };
// windowContent();
// const word = "w3resource"; // ecr
//
// const rotateStiring = (str) => {
//   let strArray = str.split("");
//   let lastCharacter = strArray.pop();
//   strArray.unshift(lastCharacter);
//   let finalanswer = strArray.join("");
//   return finalanswer;
// };
// console.log(rotateStiring(word));
//
// const reverseed = (str) => {
//   let splitString = str.split("");
//   let finalAnswer = splitString.reverse();
//   let ans = "";
//   finalAnswer.join(ans);
//   return ans;
// };
//
// console.log(reverseed(word));
//
// const reversedString = (str) => {
//   return str.split("").reverse().join("");
// };
//
// console.log(reversedString(word));
//
// for (let year = 2014; year < 2050; year++) {
//   const d = new Date(year, 0, 1);
//   if (d.getDay() === 0) {
//     console.log("1 st January is being Sunday" + year);
//   } else {
//     console.log("i dont know'" + "");
//   }
// }
//
// let randomNumber = Math.floor(Math.random() * 11);
//
// const guessNumber = prompt("guess my  number ");
// console.log(randomNumber);
// if (randomNumber === guessNumber) {
//   alert("You are winner ");
// } else {
//   prompt("lOOser");
// }
//
// today = new Date();
//
//
// const cmas = new Date(today.getFullYear(), 11, 25);
//
// if (today.getMonth() == 11 && today.getDate() > 25) {
//
//   cmas.setFullYear(cmas.getFullYear() + 1);
// }
//
//
// const one_day = 1000 * 60 * 60 * 24;
//
// console.log(
//   Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
//     " days left until Christmas!",
// );
//
// const today = new Date();
//
// const chrismasDate = new Date(today.getFullYear(), 11, 25);
//
// if (today.getMonth() === 11) {
//   console.log("This is chrismas Month");
// } else {
//   console.log("too far");
// }
//
// const today = new Date();
// const day = today.getDate();
//
// const lastday = (year, month) => {
//   return new Date(year, month + 1, 0).getDate();
// };
//
// console.log(answer(2023, 11));
//
// const letters = [];
// const word = "Azamat";
// const reversedString = reverseString(word);
// console.log(reversedString);
//
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
//
// function reverseString(str) {
//   let reversed = "";
//   for (const c of str) {
//     reversed = reversed + c;
//   }
//   return reversed;
// }
//
// function daysToChristmas() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const christmas = new Date(year, 11, 25);
//
//   if (today > christmas) {
//     christmas.setFullYear(year + 1);
//   }
//   const diff = christmas.getTime() - today.getTime();
//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   return days;
// }
//
//
// console.log("There are " + daysToChristmas() + " days left before Christmas.");
//
// function getWebsiteURL() {
//   const url = window.location.href;
//
//   return url;
// }
//
// console.log("The website URL is " + getWebsiteURL());
//
// function getDifference(num) {
//   const base = 13;
//
//   if (num > base) {
//     return 2 * num;
//   } else {
//     return base / num;
//   }
// }
//
// function computeSum(num1, num2) {
//   if (num1 == num2) {
//     return 3 * (num1 + num2);
//   } else {
//     return num1 + num2;
//   }
// }
//
//
// function diffferNum(num) {
//   if (num <= 19) {
//     return 19 - num;
//   } else {
//     return (num - 19) * 3;
//   }
// }
//
// function checkPair(num1, num2) {
//   const target = 50;
//   if (num1 == target || num2 == target || num1 + num2 == target) {
//     // If yes, return true
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function checknum(num1, num2) {
//   return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
// }
//
// const numA = 5;
// const numB = 5;
//
// if (checknum(numA, numB)) {
//   console.log(`negative`);
// } else {
//   console.log(`same`);
// }

nums = [2, 7, 11, 15];
target = 9;

// const twoSum = (nums, target) => {
//   for (i = 0; i < nums.lenght; i++) {
//     if (nums[0] + nums[1] === target) {
//       answer = target;
//       console.log("andaslnf");
//     } else {
//       console.log("wrong");
//     }
//   }
// };
//
// twoSum(nums, target);

// (nums = [3, 2, 4]), (target = 6);
//
// const twoSum = (array, goal) => {
//   let indexes = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] && array[i + 1] === goal) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
//
// twoSum(nums, target);

// const given_string = prompt("write your string ");
// let answer = given_string;
//
// const checkString = (str) => {
//   if (!str.startsWith("Py")) {
//     return console.log("Py" + answer);
//   } else {
//     return answer;
//   }
// };
//
// checkString(given_string);

// const removeCharacter = (str, pos) => {
//   if (pos < 0 || pos > str.length) {
//     console.log("Xata pos");
//     return str;
//   }
//
//   let changeCharacter = str.substring(0, pos) + str.substring(pos + 1);
//   return changeCharacter;
// };
// const a = "Monday";
//
// console.log(removeCharacter(a, 3));

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
// The string length must be broader than or equal to 1

// let givenString = "Azamat";
// const createCharacter = (str) => {
//   let firstCharacter = str.slice(0, 1);
//   let lastCharacter = str.slice(-1);
//   str = str.slice(1, -1);
//   return console.log(lastCharacter + str + firstCharacter);
// };
// createCharacter(givenString);

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

// const checkNumber = (num) => {
//   if (num < 0) {
//     console.log("give me positive number");
//   } else {
//     const answer1 = num * 3;
//     const answer2 = num * 7;
//     console.log(answer1);
//     console.log(answer2);
//   }
// };
// checkNumber(5);

// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back.The string length must be 3 or more.

// let name = "Monday";
// const createString = (str) => {
//   let lastCharacter = str.slice(0, -3);
//   str = str.slice(0, -3);
//   const answer = lastCharacter + str + lastCharacter;
//   return answer;
// };
//
// console.log(createString(name));

// let name = "JavaScript";
//
// const checkAnswer = (str) => {
//   str = str.slice(0, 4).toLowerCase();
//   const answer = str;
//   if (answer === "java") {
//     console.log("Correct");
//   } else {
//     console.log("Mistake");
//   }
// };
//
// checkAnswer(name);

// let number1 = 12;
// let number2 = 11;
//
// const checkNumber = (num1, num2) => {
//   return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
// };
//
// console.log(checkNumber(number1, number2));
//
// let number1 = 15;
// let number2 = 10;
// let number3 = 66;
//
// const checkNumber = (num1, num2, num3) => {
//   return (
//     (num1 >= 50 && num1 <= 99) ||
//     (num2 >= 50 && num2 <= 99 && num3 >= 50 && num3 <= 99)
//   );
// };
//
// console.log(checkNumber(number1, number2, number3));

// let script = "JavaScript";

// console.log(script.substring(4));

// const checkScipt = (str) => {
//   if (str.length <= 5) {
//     return str;
//   }
//
//   let answer = str.substring(4);
//   if (answer === "Script") {
//     return answer;
//   } else {
//     return script;
//   }
// };
//
// console.log(checkScipt(script));

// const checkBiggestNumber = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3);
// };

// const closestTo100 = (value1, value2) => {
//   const targetValue = 100;
//
//   const diff1 = Math.abs(targetValue - value1);
//   const diff2 = Math.abs(targetValue - value2);
//   if (diff1 < diff2) {
//     return value1;
//   } else if (diff2 < diff1) {
//     return value2;
//   } else {
//     return "Both values are equally close to 100";
//   }
// };
//
// let num1 = 40;
// let num2 = 50;
//
// // Call the function and log the result
// console.log(closestTo100(num1, num2));

// const inRange = (num1, num2) => {
//   const range1 = num1 >= 40 && num1 <= 60;
//   const range2 = num1 >= 70 && num1 <= 100;
//
//   const range3 = num2 >= 40 && num2 <= 60;
//   const range4 = num2 >= 70 && num2 <= 100;
//
//   return range1 || range2 || range3 || range4;
// };
//
// let number1 = 45;
// let number2 = 80;
//
// console.log(inRange(number1, number2));
