//////////////////////////////
/* Map, Filter, and Reduce */
////////////////////////////

//// Q.1 Double every number

/* 

Example:-

  Input:
  [1, 2, 3, 4, 5]

  Output:
  [2, 4, 6, 8, 10]

*/

console.log([1,2,3,4,5].map(num => num*2));

//// Q.2 Add 10 to every number

/* 

Example:-

  Input:
  [5, 10, 15, 20]

  Output:
  [15, 20, 25, 30]

*/

console.log([5,10,15,20].map(num => num+10));

//// Q.3 Convert names to uppercase

/* 

Example:-

  Input:
  ["john", "alice", "bob"]

  Output:
  ["JOHN", "ALICE", "BOB"]

*/

console.log(['john', 'alice', 'bob'].map(name => name.toUpperCase()));

//// Q.4 Find the square of each number

/* 

Example:-

  Input:
  [2, 3, 4, 5]

  Output:
  [4, 9, 16, 25]

*/

console.log([2,3,4,5].map(num => num*num));

//// Q.5 Get only even numbers

/* 

Example:-

  Input:
  [1, 2, 3, 4, 5, 6]

  Output:
  [2, 4, 6]

*/

console.log([1,2,3,4,5,6].filter(num => num % 2 === 0));

//// Q.6 Get numbers greater than 10

/* 

Example:-

  Input:
  [5, 12, 8, 20, 3, 15]

  Output:
  [12, 20, 15]

*/

console.log([5,12,8,20,2,15].filter(num => num > 10));

//// Q.7 Get names longer than 4 characters

/* 

Example:-

  Input:
  ["John", "Alexander", "Bob", "Michael", "Sam"]

  Output:
  ["Alexander", "Michael"]

*/

console.log(['John', 'Alexander', 'Bob', 'Michael', 'Sam'].filter(name => name.length > 4));

//// Q.8 Get positive numbers

/* 

Example:-

  Input:
  [-5, 10, -2, 8, -1, 20]

  Output:
  [10, 8, 20]

*/

console.log([-5,10,-2,8,-1,20].filter(num => num >= 0));

//// Q.9 Find the sum

/* 

Example:-

  Input:
  [1, 2, 3, 4, 5]

  Output:
  15

*/

console.log([1,2,3,4,5].reduce((acc,num)=> acc += num,0));

//// Q.10 Find the total price

/* 

Example:-

  Input:
  [100, 200, 50, 150]

  Output:
  500

*/

console.log([100,200,50,150].reduce((acc,num)=> acc += num,0));

//// Q.11 Find the product of all numbers

/* 

Example:-

  Input:
  [2, 3, 4]

  Output:
  24

*/

console.log([2,3,4].reduce((acc,num)=> acc *= num,1));

//// Q.12 Count the total number of students

/* 

Example:-

  Input:
  ["John", "Alice", "Bob", "Sam"]

  Output:
  4

*/

console.log(['John', 'Alice', 'Bob', 'Sam'].reduce((acc,num)=> acc + 1, 0));
//// OR
console.log(["John", "Alice", "Bob", "Sam"].length);

//// Q.13 map() — Add "₹" before every price:

/* 

Example:-

  Input:
  let prices = [100, 250, 500];

  Output:
  ["₹100", "₹250", "₹500"]

*/

console.log([100, 250, 500].map(num => `₹${num}`));

//// Q.14 filter() — Get numbers divisible by 5:

/* 

Example:-

  Input:
  [10, 12, 15, 22, 25, 31, 40]

  Output:
  [10, 15, 25, 40]

*/

console.log([10, 12, 15, 22, 25, 31, 40].filter(num => num % 5 === 0));

//// Q.15 reduce() — Find the largest number:

/* 

Example:-

  Input:
  [10, 25, 7, 42, 18]

  Output:
  42

*/

let numbers = [10, 25, 7, 42, 18];

console.log(numbers.reduce((acc, num) => {
  if(acc < num) acc = num;
  return acc;
}, numbers[0]));