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
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option numbers)`,
      ),
    );
    typeof input === "number" &&
      input < this.answers.length &&
      this.answers[input]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    type === "array" && console.log(this.answers);
    type === "string" &&
      console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

btn.addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// Coding Challenge #1 --- Arrays ---

/* 

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

*/

function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, 3);

  const correctData = [...dogsJuliaCopy, ...dogsKate];
  correctData.forEach((dog, num) => {
    const dogInfo =
      dog >= 3
        ? `${num + 1} is an adult, and is ${dog} years old`
        : `${num + 1} is still a puppy 🐶`;
    console.log(`Dog number ${dogInfo}`);
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge Array Methods

/*

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at Least 18 years old).

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages.

4. Run the function for both test datasets

  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]  
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

  GOOD LUCK

*/

function calcAverageHumanAge(ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  const avgHumanAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return avgHumanAge;
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge - use arrow function and chaining

/* 

  1. Rewrite the calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]  
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

///////////////////////////////////////
// Coding Challenge - Array Methods

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// Solution 1
const [, , , , { averageWeight: huskyWeight }] = breeds;
console.log(huskyWeight);

// OR

const huskyWeight2 = breeds.find(
  (dogData) => dogData.breed === "Husky",
).averageWeight;
console.log(huskyWeight2);

// Solution 2
const dogBothActivities = breeds
  .filter(
    (dogData) =>
      dogData.activities.includes("running") &&
      dogData.activities.includes("fetch"),
  )
  .map((dogData) => dogData.breed);
console.log(dogBothActivities);

// OR

const dogBothActivities2 = breeds.find(
  (dogData) =>
    dogData.activities.includes("fetch") &&
    dogData.activities.includes("running"),
).breed;

console.log(dogBothActivities2);

// Solution 3
const allActivities = breeds.map((dogData) => dogData.activities).flat();
console.log(allActivities);

// OR

const allActivities2 = breeds.flatMap((dogData) => dogData.activities);
console.log(allActivities2);

// Solution 4
const uniqueActivities = [
  ...new Set(breeds.flatMap((dogData) => dogData.activities)),
];
console.log(uniqueActivities);

// Solution 5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((dogData) => dogData.activities.includes("swimming"))
      .flatMap((dogData) => dogData.activities)
      .filter((activity) => activity !== "swimming"),
  ),
];
console.log(swimmingAdjacent);

// Solution 6
console.log(
  breeds
    .flatMap((dogData) => dogData.averageWeight)
    .every((weight) => weight >= 10),
);

// Solution 7
console.log(
  breeds
    .map((dogData) => dogData.activities)
    .some((activities) => activities.length >= 3),
);

// Bonus Solution 8
console.log(
  Math.max(
    ...breeds
      .filter((dogData) => dogData.activities.includes("fetch"))
      .map((dogData) => dogData.averageWeight),
  ),
);

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Solution No.1
dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

// Solution No.2
dogs.forEach((dog) => {
  if (dog.owners.some((owner) => owner === "Sarah")) {
    const dogRec = dog.recFood * 0.1;
    if (
      (dog.curFood > dog.recFood && dog.curFood <= dog.recFood + dogRec) ||
      (dog.curFood < dog.recFood && dog.curFood >= dog.recFood - dogRec)
    )
      console.log("Eating an Okay Meal!");
    if (dog.curFood > dog.recFood + dogRec) console.log("Eating too Much!");
    if (dog.curFood < dog.recFood - dogRec) console.log("Eating too little!");
  }
});

// OR - without increasing 10% will be 👇

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog eats ${dogSarah.curFood > dogSarah.recFood ? "too much" : "too little"}`,
);

// Solution No.3
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersTooMuch, ownersTooLittle);
