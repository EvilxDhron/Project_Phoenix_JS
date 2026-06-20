# Conditional Statements in JavaScript `if-else`

## Q.1 What is `if-else` and `else if`?

- `if-else` is used for decision making in JavaScript. It lets your program choose between different actions based on a condition. And if your given condition gives an output of `true` then the code written inside `if(true){your code}` gets execute and if the condition gives an `false` output then the code written inside `else {your code}` gets execute.

- `else if` is used when you have multiple conditions

## Q.2 What are Truthy and Falsy Values in JavaScript?

In JavaScript, not every value is strictly `true` or `false` but when a value is used in a condition, JavaScript coverts it to either Truthy `true` or Falsy `false`.

## Q.3 What are the Falsy values in JavaScript?

Falsy means a `false` type of value and these are the only falsy values in JavaScript :-

    false
    0
    -0
    0n
    ""
    null
    undefined
    NaN

## Q.4 What are Truthy values in JavaScript?

Every value that is not falsy is a truthy value.

## Q.5 What is Type Conversion?

Type conversion means changing one data type into another.

There are two types of conversion in JavaScript :-

    1. Implicit Conversion - JavaScript does it automatically.
    2. Explicit Conversion - Programmer has to do it manually.

## Q.6 What is the difference between `Number()` and `parseInt()`?

- `Number()` tries to convert each value inside it into a number and because of this it sometime returns `NaN`.

- `parseInt()` reads each value until it finds a non-numeric character and then converts it into a number.

  Ex :-
  `Number("123px")   // NaN`
  `parseInt("123px")  // 123`

## Q.7 What is Type Coercion?

Type coercion comes under Implicit conversion and it means JavaScript automatically changes types when needed.

    Ex :-
    console.log("5" + 1);   // "51"

## Q.8 Why is an empty array is truthy but an empty string is falsy?

In JavaScript, an empty `array []`is truthy because it is an `Object`, and all objects are truthy, whereas an empty `string ""` is falsy because it is a primitive value explicitly defined as falsy by the language specification.
