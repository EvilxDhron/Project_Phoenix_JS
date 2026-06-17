// Find the Data Types of different values using typeof() operator and print them on console.

let person = "Karan";
let num = 56;
let bool = true;
let empty = null;
let undef = undefined;
let notaNumber = NaN;
let obj = {};
let arr = [];
let func = function myfnc() {};

console.log(typeof person); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof empty); // object because of an old bug.
console.log(typeof undef); // undefined
console.log(typeof notaNumber); // number
console.log(typeof obj); // object
console.log(typeof arr); // object because behind the scene arrays are also a kind of object.
console.log(typeof func); // function
