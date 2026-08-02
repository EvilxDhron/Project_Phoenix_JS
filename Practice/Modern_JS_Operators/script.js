"use strict";

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
    Q.1 Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

    Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays). 
*/

const [{ author: firstAuthors }, { author: secondAuthors }] = books;
const bookAuthors = [...firstAuthors, ...secondAuthors];

/* 
    Q.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
*/

function spellWord(str) {
  console.log(...str);
}

/* 
    Q.3 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
*/

const [
  {
    keywords: [mainKeyword, ...rest],
  },
] = books;

/* 
    Q.4 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
*/

const [, { publisher: bookPublisher, ...restOfTheBook }] = books;

/* 
    Q.5 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors"
*/

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors.`);
}

/* 
    Q.6 Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book.
    Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.
*/

const hasExamplesInJava = (book) =>
  console.log(book.programmingLanguage === "Java" || "no data available");
hasExamplesInJava(books[0]);

/* 
    Q.7 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
*/

function onlineContent(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].onlineContent &&
      console.log(`${books[i].title} provides online content.`);
  }
}

/* 
    Q.8 There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
*/

function onlineContent2(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].onlineContent ??
      console.log(
        `${books[i].title} provides no data about its online content`,
      );
  }
}

/* 
    Q.9 Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
*/

function booksEdition(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].edition ??= 1;
  }
}

/* 
    Q.10 Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
*/

function highlightedbooks(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  }
}

/* 
  Q.11 Create a new object from the first book but change

  edition: 5

  without modifying the original object.

  Use spread syntax.
*/

const newBook = { ...books[0], edition: 5 };

/* 
  Q.12 Some books don't have edition. Loop through books and set edition = 1, only if it doesn't exist.
*/

function checkEdition(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].edition ??= 1;
  }
}

/* 
  Q.13 Print only books that contain JavaScript.
*/

function javascriptBooks(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].programmingLanguage &&
      books[i].programmingLanguage.includes("JavaScript") &&
      console.log(books[i].title);
  }
}

/* 
  Q.14 Print

  `Algorithms is highlighted`

  only for highlighted books.
*/

function isHighlighted(books) {
  for (let i = 0; i < books.length; i++) {
    books[i].highlighted && console.log(`${books[i].title} is highlighted.`);
  }
}

/*  
  Q.15 Print the Goodreads rating of every book. If Goodreads doesn't exist, print "No rating"
*/

function printRatings(books) {
  for (let i = 0; i < books.length; i++) {
    console.log(
      books[i].thirdParty.goodreads
        ? `${books[i].title} has ${books[i].thirdParty.goodreads.rating} ratings.`
        : "No ratings.",
    );
  }
}

/* 
  Q.16 Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable, and the pages property of the book objects.
*/

function pageCounter(books) {
  let pageSum = 0;

  for (let book of books) {
    pageSum += book.pages;
  }
  return pageSum;
}

/* 
  Q.17 Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

  Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

    const allAuthors = [];
*/

const allAuthors = [];

function allBookAuthors(books) {
  for (let book of books) {
    if (typeof book.author === "string") {
      allAuthors.push(book.author);
    } else {
      for (let author of book.author) {
        allAuthors.push(author);
      }
    }
  }
}

/* 
  Q.18 Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
*/

function printAuthors(allAuthors) {
  for (let [index, author] of allAuthors.entries()) {
    console.log(`${index + 1}. ${author}`);
  }
}

/* 
  Q.19 Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

  Using computed properties, fill the newBook object with the properties and values from the bookData array.
*/

const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const neWBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

/* 
  Q.20 Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
*/

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

/* 
  Q.21 Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

    Example 1
    Exam
*/

function getFirstKeyword(book) {
  return book.keywords?.[0];
}

/* 
  Q.22 Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
*/
const entries = [];

function goodreadEntries(book) {
  for (let key of Object.keys(book.thirdParty.goodreads)) {
    entries.push([key]);
  }
  return entries;
}

/* 
  Q.23 The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

  Push each value to the appropriate inner array in the entries array (use index from entries()).
*/

function goodreadEntries2(book) {
  for (const [index, value] of Object.values(
    book.thirdParty.goodreads,
  ).entries()) {
    entries[index].push(value);
  }
}

/* 
  Q.24 Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
*/

const entries2 = Object.entries(books[0].thirdParty.goodreads);

// Football Betting App
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
  Let's continue with our football betting app!

  1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don It remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this: 
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object,
  don't hardcode them (except for "draw"). HINT: Note
  how the odds and the game objects have the same
  property names
  BONUS: Create an object called 'scorers' which
  contains the names of the players who scored as
  properties, and the number of goals as the value.
  this game, it will look like this: 

      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
  
*/

// Answer 1

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// Answer 2

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}
average /= odds.length;

// Answer 3

// console.log(`Odd of victory ${game.team1}: ${odds[0]}`);
// console.log(`Odd of draw: ${odds[1]}`);
// console.log(`Odd of victory ${game.team2}: ${odds[2]}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Answer 4
let scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
