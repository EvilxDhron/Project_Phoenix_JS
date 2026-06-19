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
