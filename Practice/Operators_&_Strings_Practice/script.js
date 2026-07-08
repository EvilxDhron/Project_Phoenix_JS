/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall. */

// Data 1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Data 2

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark2, BMIJohn2, markHigherBMI2);

/* There are two cricket teams, Team A and Team B.

Task:
    1. Store the scores of Team A in three matches.
    2. Store the scores of Team B in three matches.
    3. Calculate the average score of each team.
    4. Create a Boolean variable 'teamAWins' that stores whether Team A's average score is higher than Team B's.
    5. Print the averages and the result using template literals.

Test Data:
    Team A: 96, 108, 89
    Team B: 88, 91, 110
*/

const A1Score = 96;
const A2Score = 108;
const A3Score = 89;

const B1Score = 88;
const B2Score = 91;
const B3Score = 89;

const teamA_Average = (A1Score + A2Score + A3Score) / 3;
const teamB_Average = (B1Score + B2Score + B3Score) / 3;

console.log(`The average score of Team A is ${teamA_Average}, and the average score of Team B is ${teamB_Average}. So, Does Team A average score higher than Team B average score?
Ans = ${teamA_Average > teamB_Average ? "Yes" : "No"}`);

/* A household consumed electricity during a month.

Task:
    1. Store the number of units consumed.
    2. Assume the cost per unit is ₹7.5.
    3. Calculate the total bill.
    4. If the bill is greater than ₹5000, create a Boolean variable 'highBill' that becomes true.
    5. Display all values using a template literal.

Test Data:
    Units Consumed = 720
*/

const perUnitCost = 7.5;
const unitConsumed = 720;
const totalBill = unitConsumed * perUnitCost;

const highBill = totalBill > 5000;
console.log(`Your Electricity Bill for this month is ₹${totalBill}.
So, Is your Electricity Bill high this month?
Ans = ${highBill ? "Yes" : "NO"}`);

/* A group of friends had dinner at a restaurant.

Task:
    1. Store the total bill amount.
    2. Store the tip percentage.
    3. Calculate the tip amount.
    4. Calculate the final amount to be paid.
    5. Print all values using a template literal.

Test Data:
    Bill = ₹2750
    Tip = 15%
*/

const totalResBill = 2750;
const tip = 15;

const tipAmount = (totalResBill / 100) * 15;
const finalAmount = totalResBill + tipAmount;

console.log(`Your total Bill is Rs.${finalAmount}.`);

/* An employee receives a monthly salary.

Task:
1. Store the basic salary.
2. Calculate HRA as 20% of salary.
3. Calculate Bonus as 10% of salary.
4. Calculate total salary.
5. Print all values using template literals.

Test Data:
Basic Salary = ₹45000
*/

const basicSalary = 45000;
const HRA = 20;
const Bonus = 10;

const totalSalary =
  basicSalary + (basicSalary / 100) * HRA + (basicSalary / 100) * Bonus;

console.log(`Your Basic Salary = Rs.${basicSalary}.
Your HRA = Rs.${(basicSalary / 100) * HRA}.
Your Bonus = Rs.${(basicSalary / 100) * Bonus}.
Now, Your Total Salary is Rs.${totalSalary}.`);

/* A person deposits money in a bank.

Task:
1. Store principal amount.
2. Store rate of interest.
3. Store time in years.
4. Calculate Simple Interest.

Formula:
SI = (P × R × T) / 100

5. Calculate total amount after interest.
6. Print all details using template literals.

Test Data:
P = 50000
R = 6
T = 3
*/

const principalAmount = 50000;
const rateOfInterest = 6;
const timeInYears = 3;

const SI = (principalAmount * rateOfInterest * timeInYears) / 100;

const totalAfterSI = principalAmount + SI;

console.log(`Your Principle Amount is Rs.${principalAmount}.
Your rate of Interest is ${rateOfInterest} %.
Your time in Years is Rs.${timeInYears} Years.
Your total Amount to be paid is Rs.${totalAfterSI}.`);

/* 

Count vowels in a word "Programming".

*/

const str = "Programming";

const vowelCounter = function (str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;

      default:
    }
  }

  return count;
};

console.log(vowelCounter(str));

/* 

Reverse a string without built in methods.

*/

const str2 = "Hello World!";

const reverser = function (str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
};

console.log(reverser(str2));

/*

Check if a String is a Palindrome.

*/

const str3 = "Madam";

const palinChecker = function (str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversedStr += str[i];
  }

  if (str === reversedStr) return "Palindrome";
  return "Not a Palindrome";
};

console.log(palinChecker(str3));

/*

Count how many times a particular character appears.

*/

const str4 = "banana";
const characters = {};

const characterCounter = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (characters[str[i]]) {
      characters[str[i]] += 1;
    } else {
      characters[str[i]] = 1;
    }
  }

  return characters;
};

console.log(characterCounter(str4));

/*

Find the first non-repeating character

*/

const str5 = "aabbcde";
const frequencyObj = {};

const firstNonRepeatingChar = function (str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (frequencyObj[char]) {
      frequencyObj[char] += 1;
    } else {
      frequencyObj[char] = 1;
    }
  }

  for (let char in frequencyObj) {
    // console.log(char);
    if (frequencyObj[char] === 1) {
      return char;
    }
  }
};

console.log(firstNonRepeatingChar(str5));

/* 

Remove duplicate characters from a string.

*/

const str6 = "programming";
const freqObj = {};

const duplicateRemover = function (str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (freqObj[char]) {
      freqObj[char] += 1;
    } else {
      freqObj[char] = 1;
    }
  }

  for (let key in freqObj) {
    newStr += key;
  }

  return newStr;
};

console.log(duplicateRemover(str6));

/*

Count uppercase and lowercase letters separately

*/

const str7 = "PrograMMer";
let upperChar = 0;
let lowerChar = 0;

const casesCounter = function (str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "A" && char <= "Z") {
      upperChar++;
    } else {
      lowerChar++;
    }
  }

  return [upperChar, lowerChar];
};

console.log(casesCounter(str7));
