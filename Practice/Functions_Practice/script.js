/* Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

    Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

    Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

    Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

    Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

    Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27. 

*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

/* 
Create a function checkResult that takes marks of 5 subjects.

Rules:

Calculate percentage.
If percentage >= 40 → Pass
Otherwise → Fail

Example:

checkResult(70, 80, 60, 50, 90);

// Output:
// Percentage: 70
// Result: Pass 

*/

function checkResult(a, b, c, d, e) {
  const percentage = ((a + b + c + d + e) / 500) * 100;
  console.log(percentage);
  if (percentage >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

checkResult(50, 50, 50, 50, 50);

/* 

Create a function:

calculator(num1, num2, operator)

Supported operators:

+
-
*
/

Example:

calculator(10, 5, "*");

// Output:
// 50

*/

const calculator = (n1, n2, op) => {
  switch (op) {
    case "+":
      console.log(n1 + n2);
      break;

    case "-":
      console.log(n1 - n2);
      break;

    case "*":
      console.log(n1 * n2);
      break;

    case "/":
      console.log(n1 / n2);
      break;

    default:
      console.log("Invalid Operation!!");
  }
};

calculator(46, 2, "/");

/* 

Create:

calculateBonus(salary, yearsOfExperience)

Rules:

10+ years → 20%
5+ years → 10%
Otherwise → 5%

Example:

calculateBonus(50000, 8);

// Bonus = 5000 

*/

const calculateBonus = (sal, years) => {
  if (years > 10) {
    console.log(`Your Total Bonus is Rs.${(sal / 100) * 20}`);
  } else if (years > 5) {
    console.log(`Your Total Bonus is Rs.${(sal / 100) * 10}`);
  } else {
    console.log(`Your Total Bonus is Rs.${(sal / 100) * 5}`);
  }
};

calculateBonus(50000, 6);
