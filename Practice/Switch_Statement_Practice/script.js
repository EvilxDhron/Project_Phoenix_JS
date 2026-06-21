/* 
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

    Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

    Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.
 */

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`,
);

/*

A movie theater gives discounts based on age.

Rules:

Age below 12 → Ticket = ₹100
Age between 12 and 60 → Ticket = ₹200
Age above 60 → Ticket = ₹150

Use a ternary operator to determine the ticket price.

Print:

"Your ticket price is ₹150"

*/

const userAge = 61;

const ticketPrice =
  userAge <= 12 ? 100 : userAge > 12 && userAge <= 60 ? 200 : 150;

console.log(`Your ticket price is ₹${ticketPrice}.`);

/*

Create a day planner using switch.

Monday => Coding
Tuesday => Gym
Wednesday => Reading
Thursday => Projects
Friday => Networking
Saturday => Fun
Sunday => Rest

Print the activity for the selected day.

*/

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Coding");
    break;

  case "Tuesday":
    console.log("Gym");
    break;

  case "Wednesday":
    console.log("Reading");
    break;

  case "Thursday":
    console.log("Projects");
    break;

  case "Friday":
    console.log("Networking");
    break;

  case "Saturday":
    console.log("Fun");
    break;

  case "Sunday":
    console.log("Rest");
    break;

  default:
    console.log("Just Chill!");
}

/*

You receive a month number (1-12).

Using switch:

Print the quarter.

1,2,3 => Q1
4,5,6 => Q2
7,8,9 => Q3
10,11,12 => Q4

Default => Invalid Month

*/

const month = 6;

switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Q1");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Q2");
    break;

  case 7:
  case 8:
  case 9:
    console.log("Q3");
    break;

  case 10:
  case 11:
  case 12:
    console.log("Q4");
    break;

  default:
    console.log("Invalid Month");
}

/* 

Is the following code a statement or an expression?

let x = 10;

*/

// Answer --> The entire line is a statement but the assignment part 'x = 10' is an expression because it produces the value 10.

// Convert this if-else into a ternary operator.

let age = 16;
let message;

if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

let message2 = age >= 18 ? "Adult" : "Minor";

// Rewrite this using switch.

let fruit = "apple";

if (fruit === "apple") {
  console.log("Red");
} else if (fruit === "banana") {
  console.log("Yellow");
} else {
  console.log("Unknown");
}

switch (fruit) {
  case "apple":
    console.log("Red");
    break;

  case "banana":
    console.log("Yellow");
    break;

  default:
    console.log("Unknown");
}
