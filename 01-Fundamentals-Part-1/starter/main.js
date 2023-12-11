"use strict";

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

// nums = [2, 7, 11, 15];
// target = 9;

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

// const findInteger = (num1, num2) => {
//   if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) {
//     const answer = Math.abs(num1 - num2);
//     if (num1 > num2) {
//       return console.log("NUmber 1 is the biggest");
//     } else if (num2 > num1) {
//       return console.log("number2 is the biggest");
//     }
//   } else {
//     return console.log("They are not in rage in 40, 60");
//   }
// };
//
// let number1 = 41;
// let number2 = 53;
//
// findInteger(number1, number2);

// let name = "Azamat";
// const checkGivenCharacter = (str) => {
//   if (str[2] === "a" && str[4] === "a") {
//     console.log("They are both 'a'.");
//   } else {
//     console.log("They are not both 'a'.");
//   }
// };
//
// checkGivenCharacter(name);

// let num1 = 123456;
//
// const checkGivenNumber = (num) => {
//   num = num.toString().split("").slice(-1, -3);
//   console.log(num);
// };
//
// checkGivenNumber(num1);

// const lastDigitsSame = (num1, num2, num3) => {
//   const lastDigit1 = num1 % 10;
//   const lastDigit2 = num2 % 10;
//   const lastDigit3 = num3 % 10;
//
//   return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
// };
//
// const num1 = 123;
// const num2 = 456;
// const num3 = 789;
//
// if (lastDigitsSame(num1, num2, num3)) {
//   console.log("The last digits of the three numbers are the same.");
// } else {
//   console.log("The last digits of the three numbers are different.");
// }

// const checkString = (str) => {
//   if (str.length < 3) {
//     return str.toUpperCase();
//   } else {
//     const firstThreeChars = str.substring(0, 3).toLowerCase();
//     const restOfString = str.substring(3);
//     return firstThreeChars + restOfString;
//   }
// };

// const checkExam = (examType, totalMarks) => {
//   if (examType === "Final-exam" && totalMarks >= 90) {
//     return true;
//   } else if (
//     examType !== "Final-exam" &&
//     totalMarks >= 89 &&
//     totalMarks <= 100
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const computeSum = (num1, num2) => {
//   const sum = num1 + num2;
//
//   if (sum >= 50 && sum <= 80) {
//     return 65;
//   } else {
//     return 80;
//   }
// };

// const checkForEight = (num1, num2) => {
//   const sum = num1 + num2;
//   const difference = Math.abs(num1 - num2);
//
//   return num1 === 8 || num2 === 8 || sum === 8 || difference === 8;
// };

// const checkNumber = (num1, num2, num3) => {
//   if (num1 === num2 && num2 === num3) {
//     return 30;
//   } else if (num1 === num2 || num1 === num3 || num2 === num3) {
//     return 40;
//   } else {
//     return 20;
//   }
// };

// const checkNumberOrder = (num1, num2, num3) => {
//   if (num1 < num2 && num2 < num3) {
//     return "Strict mode";
//   } else if (num1 <= num2 && num2 <= num3) {
//     return "Soft mode";
//   } else {
//     return "Not in order";
//   }
// };

// const checkNumber = (num1, num2, num3) => {
//   return (num1 >= 20 && num1 < num2 && num1 < num3) ||
//       (num2 >= 20 && num2 < num1 && num2 < num3) ||
//       (num3 >= 20 && num3 < num1 && num3 < num2);
// };

// const checkConditions = (num1, num2) => {
//   const sum = num1 + num2;
//   const difference = Math.abs(num1 - num2);
//
//   return num1 === 15 || num2 === 15 || sum === 15 || difference === 15;
// };

// const inRange = (num) => {
//   return num >= 40 && num <= 10000;
// };

// const convertHours = (hours) => {
//   if (hours < 0 || hours > 23) {
//     return "invalid Hours";
//   }
//   const minutes = hours > 12 ? "pm" : "am";
//   const convertedHours = hours % 12 === 0 ? 12 : hours % 12;
//
//   return `${convertedHours}: ${minutes}`;
// };
//
// const h = 11;
// console.log(convertHours(h));

// const groupArray = (arr) => {
//   let oddArray = [];
//   let evenArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2) {
//       evenArray.push(arr[i]);
//     } else {
//       oddArray.push(arr[i]);
//     }
//   }
//   console.log("Odd Array:", oddArray);
//   console.log("Even Array:", evenArray);
// };
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// groupArray(numbers);

// const createArray = (column, row, value) => {
//   return Array.from({ length: row }, () => Array(column).fill(value));

// for (let i = 0; i < column; i++) {
//   const rowArray = new Array(row).fill(value);
//   resultArray.push(rowArray);
// }
// return resultArray;
// let resultArray = [];
// for (let i = 0; i < row; i+  +) {
//   let createdRow = [];
//
//   for (let j = 0; j < column; j++) {
//     createdRow.push(value);
//   }
//   resultArray.push(createdRow);
// }
// };

// const rowarray = 5;
// const columnarray = 4;
// const initialValue = 7;
//
// console.log(createArray(columnarray, rowarray, initialValue));

// const countVowels = (str) => {
//   let loweredStr = str.toLowerCase();
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of loweredStr) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
//
// console.log(countVowels("Azamat"));

// const countPandT = (str) => {
//   const lowerdStr = str.toLowerCase();
//   const arrayp = ["p"];
//   let countofP = 0;
//   let countofT = 0;
//   for (char of lowerdStr) {
//     if (arrayp.includes(char)) {
//       countofP++;
//     }
//     if (char === "t") {
//       countofT++;
//     }
//   }
//   return `P's is ${countofP} and T's is ${countofT} `;
// };
//
// console.log(countPandT("Azamatpp"));

// const divededNumber = (num1, num2) => {
//   let result = num1 / num2;
//   const convertedStr = result.toLocaleString("en-US");
//   return convertedStr;
// };
//
// console.log(divededNumber(15, 20));

// const repeatString = (str, num) => {
//   let result = "";
//   result = str.repeat(num);
//   return result;
// };
//
// console.log(repeatString("Azamat, ", 5));

// const repeatStr = (str) => {
//   let result;
//   if (str.length >= 3) {
//     str = str.slice(-3);
//     result = str.repeat(4);
//   } else {
//     ("Invalid String");
//   }
//   return result;
// };
//
// console.error(repeatStr("Azamat"));

// const halfstring = (str) => {
//   const result = str.length / 2;
//   const half = str.slice(0, result);
//   return half;
// };
// console.log(halfstring("Azamat"));

// const createString = (str) => {
//   const first = str.substring(1, str.length - 1);
//   return first;
// };
//
// console.log(createString("Azamat"));

// const concatenateString = (str1, str2) => {
//   str1 = str1.substring(1);
//   str2 = str2.substring(1);
//   let firstsrt1 = str1;
//   let secondStr = str2;
//   const result = firstsrt1.concat(secondStr);
//   return result;
// };
//
// console.log(concatenateString("Azamat", "Monday"));

// const movelast = (str) => {
//   let result = "";
//   if (str.length >= 3) {
//     let laststring = str.substring(str.length - 3);
//     str = str.slice(0, -3);
//     let firstCharater = str;
//     result = laststring + firstCharater;
//   } else {
//     console.log("String must bu more than 4");
//   }
//   return result;
// };
//
// console.log(movelast("Azamat"));

// const middleThree = (str) => {
//   let length = str.length;
//   let middlethreeCharacter = "";
//   if (str.length >= 3) {
//     if (str.length % 2 === 1) {
//       middlethreeCharacter = Math.floor(length / 2);
//       middlethreeCharacter = str.substring(
//         middlethreeCharacter - 1,
//         middlethreeCharacter + 2,
//       );
//     } else {
//       console.log("String Not odd number");
//     }
//   } else {
//     console.log("String number must be 3 or more");
//   }
//   return middlethreeCharacter;
// };
//
// console.log(middleThree("Azamatakkll"));

// const concatenate = (str1, str2) => {
//   const minLength = Math.min(str1.length, str2.length);
//   const maxLength = Math.max(str1.length, str2.length);
//
//   let result = `${str1}${str2}`;
//
//   if (str1.length !== str2.length) {
//     result = result.slice(0, minLength);
//   }
//
//   return result;
// };
//
// const string1 = "Azamat";
// const string2 = "Ikromov";
//
// const concatenatedResult = concatenate(string1, string2);
// console.log(concatenatedResult);

// const checkTheString = (str) => {
//   let lastCharacter = "";
//   str = str.substring(str.length - 6);
//   lastCharacter = str;
//   if (str.length >= 6) {
//     if (lastCharacter === "Script") {
//       console.log("Script is existed");
//     } else {
//       console.log("Script Not Existed");
//     }
//   } else {
//     console.log("Your string must be 6 or more");
//   }
//
//   return lastCharacter;
// };
//
// console.log(checkTheString("AzamatIkromov"));

// const cityName = (str) => {
//   let characters = str.slice(0, 3);
//
//   if (characters === "Los" || characters === "New") {
//     return str;
//   } else {
//     return "empty";
//   }
// };
//
// console.log(cityName("NewYork"));

// const createstr = (str) => {
//   let firstString = str.substring(0, 2);
//   let lastrString = str.substring(str.length - 2);
//   return `${firstString}${lastrString}`;
// };
// console.log(createstr("Monday"));

// let array = [1, 2, 3, 4];
//
// const sumofArray = (ar) => {
//   return ar[0] + ar[1] + ar[2];
// };
//
// console.log(sumofArray(array));

// const rotateEl = (arr) => {
//   return arr.reverse();
// };
// let array = [1, 2, 3, 4];
//
// console.log(rotateEl(array));

// let numbers = 123564789;
// const reverseNumber = (arr) => {
//   let toString = arr.toString();
//   let reversedStr = "";
//   if (toString.length % 2 === 0) {
//     for (let i = toString.length - 1; i >= 0; i--) {
//       reversedStr += toString[i];
//     }
//     let swappedStr = "";
//     for (let i = 0; i < reversedStr.length; i += 2) {
//       swappedStr += reversedStr[i + 1] + reversedStr[1];
//     }
//   }
// };
//
// reverseNumber(numbers);

// const changeCapitalization = (str) => {
//   let result = "";
//
//   for (let char of str) {
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }
//
//   return result;
// };
//
// const inputString = "Azamat";
// const changedString = changeCapitalization(inputString);
// console.log(changedString);

// const change = (str) => {
//   let first = str.slice(0, 3);
//   let second = str.slice(str.length - 3);
//   return second.concat(first);
// };
//
// let num = [1, 2, 3, 4, 5, 6];
//
// console.log(change(num));

// const sumOfstring = (str) => {
//   let result = 0;
//   for (let char of str) {
//     if (char >= "0" && char <= "9") {
//       result += Number(char);
//     } else {
//       console.log("there is no Number");
//     }
//   }
//   return result;
// };
//
// console.log(sumOfstring("Azamat77"));

// const cube = (x) => {
//   let result = 1;
//   for (let i = 0; i < 3; i++) {
//     result *= x;
//   }
//   return result;
// };
//
// console.log(cube(5));

// const findMaxN = (givenInteger) => {
//   let sum = 0;
//   let n = 0;
//
//   while (sum <= givenInteger) {
//     n++;
//     sum += n;
//   }
//
//   return n - 1;
// };
//
// // Example usage:
// const givenInteger = 20;
// const maxN = findMaxN(givenInteger);
// console.log(
//   `The maximum n such that 1 + 2 + ... + n <= ${givenInteger} is: ${maxN}`,
// );

// const sortNumbers = (x) => {
//   return x.sort();
// };
//
// console.log(sortNumbers(["bb", "aa", "cc", "Azamat", "Baxodir"]));
//
// let num = [1, 2, 3, 4, 5, 6];
//
// let num2 = num[(2, 3)];
// console.log(num2);

// let instructor = {
//   fisrtname: "Ikromov",
//   lastName: "Azamat",
//   numbers: [1, 2, 3, 4, 5, 6],
// };
//
// instructor.hasOwnProperty();

// const charCounts = (str) => {
//   // we shoukd create new empty object
//   let result = {};
//   //WE SHOULD LOOP EACH CHARACTER
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
//   //WE SHOULD count eaach charachter if it is grater than 1 count ++
//   //We should return result
// };
//
// console.log(charCounts("Azamat Ikromov"));
//
// /[a-z0-9]/.test(char);
