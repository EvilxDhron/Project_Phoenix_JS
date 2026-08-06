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

/* 
Convert LowerCase letters to UpperCase and vice-versa.
*/

function charCaseChanger(str = "JavaScript") {
  let newStr = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      newStr += String.fromCharCode(char.charCodeAt() - 32);
    } else if (char >= "A" && char <= "Z") {
      newStr += String.fromCharCode(char.charCodeAt() + 32);
    } else {
      newStr += char;
    }
  }
  return newStr;
}

/* 
Check if two strings are Anagrams.
*/

// Solution 1

function checkAnagrams(str1 = "iceman", str2 = "cinema") {
  if (str1.length !== str2.length) {
    return false;
  }

  const strObjects = [{}, {}];
  const strArray = [str1, str2];
  for (let i = 0; i < 2; i++) {
    for (let char of strArray[i]) {
      strObjects[i][char] = (strObjects[i][char] || 0) + 1;
    }
  }
  for (let char in strObjects[0]) {
    if (strObjects[1][char]) {
      if (strObjects[1][char] === strObjects[0][char]) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// Solution 2

function checkAnagrams2(str1 = "iceman", str2 = "cinema") {
  if (str1.length !== str2.length) {
    return false;
  }
  let strObj = {};

  for (let char of str1) {
    strObj[char] = (strObj[char] || 0) + 1;
  }

  // Decreasing the frequency count of first string obj to check for Anagram.
  for (let char of str2) {
    if (!strObj[char]) {
      return false;
    } else {
      strObj[char] -= 1;
    }
  }
  return true;
}

/* 
Find the longest word in a sentence.
*/

function longestWordChecker(sentence = "I'm a JavaScript Developer") {
  const words = sentence.split(" ");
  let longest = {
    length: 0,
    word: null,
  };

  for (let word of words) {
    if (word.length > longest.length) {
      longest.length = word.length;
      longest.word = word;
    }
  }
  return longest.word;
}

/* 
Find how many times a substring appears.
*/

// Solution 1

function substringCounter(str = "hello hello hello", subStr = "hello") {
  let count = 0;

  for (let c = 0; c < str.length; c++) {
    if (str[c] === subStr[0]) {
      for (let i = c; i < str.length; i++) {
        if (str[i] === subStr[i - c]) {
          count++;
        } else {
          break;
        }
      }
    }
  }

  return Math.floor(count / subStr.length);
}

// Solution 2

// with a little improvement and better namings

function substringCounter2(str, subStr) {
  let count = 0;

  for (let start = 0; start < str.length; start++) {
    let isMatch = true;
    for (let subStart = 0; subStart < subStr.length; subStart++) {
      if (str[start + subStart] !== subStr[subStart]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      count++;
    }
  }

  return count;
}

/* 
Remove duplicate characters from a string.
*/

function duplicateRemover5(str = "Programming") {
  let newStr = "";
  for (let char of str) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

/* 
Compress a string like aaabbc → a3b2c1.
*/

// Solution 1

function stringCompressor(str = "aaabbc") {
  let compressStr = "";
  const strObj = {};

  for (let char of str) {
    strObj[char] = (strObj[char] || 0) + 1;
  }

  for (let key in strObj) {
    compressStr += key;
    compressStr += strObj[key];
  }
  return compressStr;
}

// Solution 2 --> More improved version

function stringCompressor2(str) {
  let compressStr = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressStr += str[i] + count;
      count = 1;
    }
  }

  return compressStr;
}

/* 
    Check if a string only contains digits.
*/

function strDigitChecker(str) {
  if (str === "") return false;
  for (let char of str) {
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
}

/* 
Find the longest substring without repeating characters.
*/

// Incorrect Solution, I think it's not my type right now 😅.
function longSubstrFinder(str) {
  let length = 1;
  let length2 = 1;
  let unique = "";

  for (let char = 0; char < str.length; char++) {
    if (str[char] !== str[char + 1]) {
      if (unique === "") {
        unique += str[char];
      }

      for (let i = 0; i < unique.length; i++) {
        if (!unique.includes(str[char])) {
          length2++;
          unique += str[char];
        }
      }
    } else {
      length = Math.max(length, length2);
      unique = unique.length >= length ? unique : "";
      length2 = 1;
    }
  }

  return length;
}

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/* 
  Q.1 Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
*/

for (const i of [6, 4, 9, 8]) {
  console.log(i, books[0].ISBN[i]);
}

/* 
  Q.2 Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
*/

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";

console.log(quote.indexOf("chess"));

/* 
  Q.3 Extract the word "boxing" from the same quote string, and log it to the console.
*/

console.log(quote.slice(quote.indexOf("boxing")));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

/* 
  Q.4 Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
*/

function isContributor(author) {
  return author.includes("Contributor");
}
function isContributor2(author) {
  return author.lastIndexOf("(Contributor)") !== -1;
}

isContributor("Julie Sussman (Contributor)");

/* 
  Q.5 Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

  You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.
*/

// Friend's Solution

function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(" "));

  let lastName = "";
  if (author.indexOf(" ") === author.lastIndexOf(" ")) {
    lastName = author.slice(author.indexOf(" ") + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(" ") + 1, author.lastIndexOf(" "));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + " " + capitalizedLastName;
}

// My Solution

function normalizeAuthorName2(author) {
  author = author.trim().toLowerCase();

  const firstName =
    author[0].toUpperCase() + author.slice(1, author.indexOf(" "));

  const lastName =
    author[author.indexOf(" ") + 1].toUpperCase() +
    author.slice(
      author.indexOf(" ") + 2,
      author.includes("contributor") ? author.lastIndexOf(" ") : author.length,
    );

  return `${firstName} ${lastName}`;
}

/* 
  Q.6 Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
*/

const newBookTitle = books[1].title.replace("Programs", "Software");

/* 
  Q.7 Write a function called logBookTheme that takes book's title (string), and logs to the console:

  "This book is about computers" if the title starts with the word "computer",

  "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

  and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
*/

function logBookTheme(title) {
  title = title.toLowerCase();
  let message = "";

  if (title.startsWith("computer")) {
    message = "computers";
  } else if (title.includes("algorithms") && title.includes("structures")) {
    message = "algorithms and data structures";
  } else if (
    !title.includes("operating") &&
    (title.endsWith("system") || title.endsWith("systems"))
  ) {
    message = "some systems, but definitely not about operating systems";
  }
  if (message) {
    console.log(`This book is about ${message}`);
  }
}

/* 
  Q.8 Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

  Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
*/

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

function logBookCategories(categories) {
  for (let cat of categories.split(";")) {
    console.log(cat);
  }
}

logBookCategories(bookCategories);

/* 
  Q.9 Now, the opposite. Each book from the books array has the keywords property.

  Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.
*/

function getKeywordsAsString(books) {
  let allKeywords = [];
  for (let book of books) {
    allKeywords.push(...book.keywords);
  }

  allKeywords = [...new Set(allKeywords)].join(";");
  return allKeywords;
}

/* 
  Q.10 Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

  Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).
*/

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

function logBookChapters(bookChapters){
  for(const [title, pages] of bookChapters){
    console.log(title.padEnd(20,'_'), pages);
  }
}

logBookChapters(bookChapters);