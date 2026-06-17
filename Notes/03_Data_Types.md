# Data Types in JavaScript

## Q.1 What is a Data Type?

A data type defines the kind of value a variable can hold.

## Q.2 How many data types are there in JavaScript?

JavaScript has 7 Primitive Data Types and 3 Non-Primitive Data Types.

1. **Primitive Data Types**
   1. String - Used for storing text values.
   2. Number - Used for storing decimals and integers.
   3. Boolean - Used to make decisions in the programs.
   4. Undefined - automatic value assigned by JavaScript.
   5. Null - An intentional value that means empty.
   6. Symbol - Used to create unique identifiers.
   7. BitInt - Used for storing very large numbers.

2. **Non-Primitive Data Types**
   1. Arrays - A collection of multiple values stored in a single variable.
   2. Objects - Used to store related information about something using a key-value pairs.
   3. Functions - A reusable block of code that performs a specific task.

## Q.3 What is the difference between Undefined and Null?

- **Undefined** - It is a value that automatically given by JavaScript to the variables that remains unassigned or when the programmer just declares a variable without initializing it. (It is only possible with `var` keyword.) And if a function in JavaScript returns nothing then it only returns `undefined`.

- **Null** - It is a value that deliberately assigned by the programmer to a variable to show that this variable is intentionally empty now.

## Q.4 Why does typeof null return "object"?

Due to historical bug in the JavaScript that remains for backward compatibility.

## Q.5 What is the difference between Primitive and Reference Data Types?

- Primitive values are copied by value.
- Reference values are copied by memory reference.

## Q.6 What is BigInt?

A numeric type used for very large integers beyond Number limits.
Ex :- `9007199254740991n`.

## Q.7 What is Symbol?

A primitive data type that creates unique identifiers.
Ex :- `Symbol("id")`.