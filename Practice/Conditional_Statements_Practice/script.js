/* 
Your tasks:

    1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

    "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

    2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!". 

Test data:
    Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall. 
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

/* 
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

    1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

    2. Compare the team's average scores to determine the winner of the competition, and print to the console:

    "Dolphins win the trophy" if Dolphins win, or

    "Koalas win the trophy" if Koalas win, or

    "Both win the trophy" if their average scores are equal.



TEST DATA: 
    Dolphins scored 96, 108, and 89.
    Koalas scored 88, 91, and 110. 
*/

const dolScore1 = 96;
const dolScore2 = 108;
const dolScore3 = 89;

const koaScore1 = 88;
const koaScore2 = 91;
const koaScore3 = 110;

const scoreDolphins = (dolScore1 + dolScore2 + dolScore3) / 3;
const scoreKoalas = (koaScore1 + koaScore2 + koaScore3) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// Convert the string "100" to a number, add 50 and print it to the console.

const str = "100";
console.log(Number(str));

/*
A company gives a bonus only if the employee has worked for 5 or more years
and has performance rating "excellent".

Your tasks:

    1. Use if/else to decide whether the employee gets a bonus.

    2. Print:
       "Bonus approved"
       "Bonus rejected"

TEST DATA:
    yearsWorked = 6
    performance = "excellent"
*/

const yearsWorked = 6;
const performance = "excellent";

if (yearsWorked >= 5 && performance == "excellent") {
  console.log("Bonus Approved!");
} else {
  console.log("Bonus Rejected!");
}

/*
A shopping cart has a discount rule:
- If cart value is 500 or more, apply 20% discount
- If cart value is between 200 and 499, apply 10% discount
- Otherwise, no discount

Your tasks:

    1. Use if/else if/else to decide the discount.

    2. Store the final amount in finalAmount.

    3. Print the final amount.

TEST DATA:
    cartValue = 650
*/

const cartValue = 650;
let discount;
let finalAmount;

if (cartValue >= 500) {
  finalAmount = cartValue - (cartValue * 20) / 100;
} else if (cartValue > 200) {
  finalAmount = cartValue - (cartValue * 10) / 100;
}

console.log(`Your final Amount is ${finalAmount}`);

/*
A developer is testing JavaScript truthy and falsy values.

Your tasks:

    1. For each value below, print whether it is truthy or falsy.

    2. Use if/else to test each one.

TEST DATA:
    values = [0, 1, "", "hello", null, undefined, NaN, [], {}, "false", false]
*/

/* 👆 It's solution can go a little longer if solved with just if-else, So I'll try to solve it later in some days after learning how it could be done efficiently.😊
If I had wanted to, I could have done it with the help of ChatGpt but I'll not cheat to myself at anyway. 
*/
