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
// btn.textContent = "Click Me";

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


//------ Now This button is being used for next challenge ---------//
// btn.addEventListener("click", toCamelCase2);

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

function normalizeFlights(flights) {
  for (let flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    console.log(
      `${type.includes("_Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} from ${from.toUpperCase()} to ${to.slice(0, 3).toUpperCase()} ${time.replace(":", "h")}`.padStart(
        55,
      ),
    );
  }
}
normalizeFlights(flights);

///////////////////////////////////////
// Coding Challenge #1

/* 

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

*/


const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option numbers)`));
    typeof input === 'number' && input < this.answers.length && this.answers[input]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array'){
    type === 'array' && console.log(this.answers);
    type === 'string' && console.log(`Poll results are ${this.answers.join(", ")}`);
  }
};

btn.addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');