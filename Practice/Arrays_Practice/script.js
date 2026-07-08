/* 

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

    Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

    And now let's use arrays! So, create an array called bills containing the test data below.

    Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44. 

*/

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (bill / 100) * 15;
  } else {
    return (bill / 100) * 20;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

/*

Sarah is building an online shopping cart.

Your tasks:

  Create an array called cart containing:

  "Laptop", "Mouse"
  Add "Keyboard" to the end of the cart.
  Add "Gift Card" to the beginning of the cart.
  Remove the last item and store it in a variable called removedItem.
Print:
  Final cart
  Removed item
  Number of items in the cart 

*/

const cart = ["Laptop", "Mouse"];

cart.push("Keyboard");

cart.unshift("Gift Card");

const removedItem = cart.pop();

console.log(cart, removedItem, cart.length);

/* 

A party organizer has the following guest list:

  ["John", "Sarah", "Mike", "Emma"]

Your tasks:

  Store the guest list in an array called guests.
  Check if "Mike" is invited using indexOf().
  Check if "David" is invited using indexOf().
  Save both results in variables.
  Print a message showing the position of each guest.

Bonus:

  Print the total number of guests. 

*/

const guests = ["John", "Sarah", "Mike", "Emma"];

let guest1;
let guest2;

if (guests.indexOf("Mike")) guest1 = guests.indexOf("Mike");

if (guests.indexOf("David")) guest2 = guests.indexOf("David");

console.log(guest1, guest2);

console.log(guests.length);

/*

Find the Largest Number
Input:
[5, 10, 2, 99, 23] 

*/

const arr1 = [5, 10, 2, 99, 23];

const maxNumber = Math.max(...arr1);

console.log(maxNumber);

/*

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


1) Understanding the problem
  — Array transformed to string, separated by ...
  - What is the X days? Answer: index + 1

2) Breaking up into sub-problems
  - Transform array into string
  - Transform each element to string with °C
  - Strings needs to contain day (index + 1)
  - Add ... between elements and start and end of string
  - Log string to console

*/

const arr2 = [17, 21, 23];
const arr3 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let arrStr = "";

  for (let i of arr) {
    arrStr += `${i}°C in ${arr.indexOf(i) + 1} days ... `;
  }

  return arrStr;
};

console.log("... " + printForecast(arr2));
console.log("... " + printForecast(arr3));

/*

Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:

  1. Total hours worked
  2. Average daily hours
  3. The day with the most hours worked
  4. Number of days worked
  5. Whether the week was full-time (worked 35 hours or more)
  
  TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

*/

const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracker = function (arr) {
  let total = 0;
  let average = 0;
  let mostHoursWorkedDay = arr[0];
  let numOfDay = 0;
  let fullTimeWorked;

  for (let i of arr) {
    total += i;
    if (mostHoursWorkedDay < i) {
      mostHoursWorkedDay = i;
    }
    if (i !== 0) {
      numOfDay++;
    }
  }

  average = total / arr.length;

  if (total >= 35) {
    fullTimeWorked = true;
  }

  return `1. Total hours worked = ${total}
2. Average daily hours = ${average}
3. The day with the most hours worked = ${mostHoursWorkedDay}
4. Number of days worked = ${numOfDay}
5. Whether the week was full-time = ${fullTimeWorked ? "YES" : "No"}`;
};

console.log(timeTracker(workHours));
