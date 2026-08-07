/* 

///////////////////////////////////////
// Coding Challenge #4 by (Jonas Schmedtmann - Udemy Instructor)


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀 

*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");
const textArea = document.querySelector("textArea");
btn.textContent = "Click Me";

//Solution 1

function toCamelCase() {
  const text = textArea.value;
  const textArr = text.split("\n");
  let newText = [];
  for (let word of textArr) {
    newText.push(word.split("_"));
  }
  let count = 1;
  for (let [first, second] of newText) {
    console.log(
      `${(first.trim() + second[0].toUpperCase() + second.slice(1)).padEnd(20, " ") + "✅".repeat(count)}`,
    );
    count++;
  }
  textArea.value = "";
}

// Solution 2

function toCamelCase2() {
  const text = textArea.value.split("\n");

  for (let [index, value] of text.entries()) {
    const [first, second] = value.trim().toLowerCase().split("_");
    console.log(
      `${(first + second.replace(second[0], second[0].toUpperCase())).padEnd(20, " ") + "✅".repeat(index + 1)}`,
    );
  }
  textArea.value = "";
}

btn.addEventListener("click", toCamelCase2);

/* 

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

function normalizeFlights(flights){
  for(let flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    console.log(`${type.includes('_Delayed')? "🔴": ''}${type.replaceAll('_'," ")} from ${from.toUpperCase()} to ${to.slice(0,3).toUpperCase()} ${time.replace(':',"h")}`.padStart(55,));
  }

}
normalizeFlights(flights);