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
