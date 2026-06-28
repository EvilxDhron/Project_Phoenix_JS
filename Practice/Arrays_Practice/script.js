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

if(guests.indexOf("Mike")) guest1 = guests.indexOf("Mike");

if(guests.indexOf("David")) guest2 = guests.indexOf("David");

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